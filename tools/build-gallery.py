#!/usr/bin/env python3
"""Turn folders of job photos into gallery albums.

Every subfolder of the source directory becomes one album: its photos are
re-encoded to WebP as 01.webp…NN.webp (long side 1600, for the viewer) plus
thumb/01.webp…NN.webp (long side 640, for the stack and filmstrip), and its
name becomes the album title. EXIF is dropped and the rotation baked in.

    python3 tools/build-gallery.py ~/Downloads/fotolar

The script prints the ALBUMS entries to paste into assets/js/main.js — the
slug it picks is a shortened folder name, so rename it there if you want a
tidier one (and rename the folder under assets/img/gallery/ to match).

Only Pillow is needed: python3 -m pip install pillow
"""

import pathlib
import re
import subprocess
import sys
import tempfile
import unicodedata

from PIL import Image, ImageOps, UnidentifiedImageError

DEST = pathlib.Path(__file__).resolve().parent.parent / "assets/img/gallery"
SUFFIXES = {".jpg", ".jpeg", ".png", ".heic", ".dng", ".webp", ".tif", ".tiff"}

# two photos whose 64-bit dHash differs in this many bits or fewer are the same
# shot — burst frames, or a photo already sitting in another album
DUPE_BITS = 6

# Azerbaijani letters NFKD does not decompose into an ASCII base letter
AZ = str.maketrans({"ə": "e", "ı": "i", "ğ": "g", "ş": "s", "ç": "c", "ö": "o", "ü": "u"})


def slugify(name, words=4):
    """Folder name -> short ASCII slug, e.g. 'Yello Bank güc paneli' -> 'yello-bank-guc-paneli'."""
    ascii_ = unicodedata.normalize("NFKD", name.lower().translate(AZ))
    ascii_ = ascii_.encode("ascii", "ignore").decode()
    parts = [p for p in re.split(r"[^a-z0-9]+", ascii_) if p]
    return "-".join(parts[:words]) or "album"


def load(photo):
    """Open a photo upright. iPhone HEIC needs a decoder Pillow does not ship,
    so hand those to sips, which every Mac already has."""
    try:
        im = Image.open(photo)
        im.load()
    except UnidentifiedImageError:
        with tempfile.TemporaryDirectory() as tmp:
            jpg = pathlib.Path(tmp) / "converted.jpg"
            subprocess.run(
                ["sips", "-s", "format", "jpeg", str(photo), "--out", str(jpg)],
                check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
            )
            im = Image.open(jpg)
            im.load()
    return ImageOps.exif_transpose(im).convert("RGB")


def dhash(im):
    """64-bit perceptual hash: each bit says whether a pixel is brighter than
    its right-hand neighbour, so re-encoding and resizing do not move it."""
    px = list(im.convert("L").resize((9, 8), Image.LANCZOS).getdata())
    bits = 0
    for row in range(8):
        for col in range(8):
            bits = bits << 1 | (px[row * 9 + col] > px[row * 9 + col + 1])
    return bits


def seen_already(h, seen):
    return any(bin(h ^ s).count("1") <= DUPE_BITS for s in seen)


def published_hashes():
    """Hashes of every photo already in the gallery, so a folder that overlaps
    an earlier job does not publish the same shot twice."""
    out = []
    for webp in DEST.glob("*/thumb/*.webp"):
        with Image.open(webp) as im:
            out.append(dhash(im))
    return out


def build(src_dir):
    src = pathlib.Path(src_dir).expanduser()
    if not src.is_dir():
        sys.exit(f"not a folder: {src}")

    seen = published_hashes()
    albums = []
    for folder in sorted(p for p in src.iterdir() if p.is_dir()):
        photos = sorted(p for p in folder.iterdir() if p.suffix.lower() in SUFFIXES)
        if not photos:
            print(f"skipped (no photos): {folder.name}")
            continue

        slug = slugify(folder.name)
        out = DEST / slug
        (out / "thumb").mkdir(parents=True, exist_ok=True)

        kept, dupes = 0, []
        for photo in photos:
            im = load(photo)
            h = dhash(im)
            if seen_already(h, seen):
                dupes.append(photo.name)
                continue
            seen.append(h)
            kept += 1
            name = f"{kept:02d}.webp"

            full = im.copy()
            full.thumbnail((1600, 1600), Image.LANCZOS)
            full.save(out / name, "WEBP", quality=80, method=6)

            th = im.copy()
            th.thumbnail((640, 640), Image.LANCZOS)
            th.save(out / "thumb" / name, "WEBP", quality=72, method=6)

        size = sum(p.stat().st_size for p in out.rglob("*.webp")) / 1048576
        print(f"{slug}: {kept} photos, {size:.1f}MB")
        if dupes:
            print(f"  skipped {len(dupes)} near-duplicate: {', '.join(dupes)}")
        if kept:
            albums.append((folder.name, slug, kept))

    print("\nPaste into ALBUMS in assets/js/main.js:\n")
    for title, slug, n in albums:
        print(f'    {{\n      title: "{title}",\n      dir: "{slug}",\n      n: {n}\n    }},')


def self_test():
    assert slugify("Yello Bank güc panelinin hazırlanması") == "yello-bank-guc-panelinin"
    assert slugify("Pozitron MMC Hamworthy odluğun servisi") == "pozitron-mmc-hamworthy-odlugun"
    assert slugify("!!! ???") == "album"

    shot = Image.effect_mandelbrot((320, 320), (-2, -1.5, 1, 1.5), 80).convert("RGB")
    assert seen_already(dhash(shot), [dhash(shot.resize((900, 900)))])  # a resize is the same shot
    assert not seen_already(dhash(shot), [dhash(ImageOps.mirror(shot))])  # a different one is not
    print("ok")


if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else ""
    self_test() if arg == "--self-test" else build(arg or sys.exit(__doc__))
