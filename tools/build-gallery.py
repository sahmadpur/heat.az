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
import sys
import unicodedata

from PIL import Image, ImageOps

DEST = pathlib.Path(__file__).resolve().parent.parent / "assets/img/gallery"
SUFFIXES = {".jpg", ".jpeg", ".png", ".heic", ".webp", ".tif", ".tiff"}

# Azerbaijani letters NFKD does not decompose into an ASCII base letter
AZ = str.maketrans({"ə": "e", "ı": "i", "ğ": "g", "ş": "s", "ç": "c", "ö": "o", "ü": "u"})


def slugify(name, words=4):
    """Folder name -> short ASCII slug, e.g. 'Yello Bank güc paneli' -> 'yello-bank-guc-paneli'."""
    ascii_ = unicodedata.normalize("NFKD", name.lower().translate(AZ))
    ascii_ = ascii_.encode("ascii", "ignore").decode()
    parts = [p for p in re.split(r"[^a-z0-9]+", ascii_) if p]
    return "-".join(parts[:words]) or "album"


def build(src_dir):
    src = pathlib.Path(src_dir).expanduser()
    if not src.is_dir():
        sys.exit(f"not a folder: {src}")

    albums = []
    for folder in sorted(p for p in src.iterdir() if p.is_dir()):
        photos = sorted(p for p in folder.iterdir() if p.suffix.lower() in SUFFIXES)
        if not photos:
            print(f"skipped (no photos): {folder.name}")
            continue

        slug = slugify(folder.name)
        out = DEST / slug
        (out / "thumb").mkdir(parents=True, exist_ok=True)

        for i, photo in enumerate(photos, 1):
            im = ImageOps.exif_transpose(Image.open(photo)).convert("RGB")
            name = f"{i:02d}.webp"

            full = im.copy()
            full.thumbnail((1600, 1600), Image.LANCZOS)
            full.save(out / name, "WEBP", quality=80, method=6)

            th = im.copy()
            th.thumbnail((640, 640), Image.LANCZOS)
            th.save(out / "thumb" / name, "WEBP", quality=72, method=6)

        size = sum(p.stat().st_size for p in out.rglob("*.webp")) / 1048576
        print(f"{slug}: {len(photos)} photos, {size:.1f}MB")
        albums.append((folder.name, slug, len(photos)))

    print("\nPaste into ALBUMS in assets/js/main.js:\n")
    for title, slug, n in albums:
        print(f'    {{\n      title: "{title}",\n      dir: "{slug}",\n      n: {n}\n    }},')


def self_test():
    assert slugify("Yello Bank güc panelinin hazırlanması") == "yello-bank-guc-panelinin"
    assert slugify("Pozitron MMC Hamworthy odluğun servisi") == "pozitron-mmc-hamworthy-odlugun"
    assert slugify("!!! ???") == "album"
    print("ok")


if __name__ == "__main__":
    arg = sys.argv[1] if len(sys.argv) > 1 else ""
    self_test() if arg == "--self-test" else build(arg or sys.exit(__doc__))
