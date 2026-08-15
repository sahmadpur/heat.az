#!/usr/bin/env python3
"""Burn the HeatTech logo into the gallery photos.

The viewer used to draw the logo over the photo in CSS, which anyone could
strip by saving the image. This writes it into the pixels instead, so a copied
photo keeps the mark. Only the 1600px viewer files are stamped — the 640px
thumbnails are too small to be worth stealing, and the logo would crowd them.

    python3 tools/watermark.py            # stamp every unstamped photo
    python3 tools/watermark.py --self-test

Files already done are listed in assets/img/gallery/.watermarked, so running
it again after importing a new album only touches the new photos.

Only Pillow is needed: python3 -m pip install pillow
"""

import pathlib
import sys

from PIL import Image, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
GALLERY = ROOT / "assets/img/gallery"
LOGO = ROOT / "assets/img/logo.png"
LEDGER = GALLERY / ".watermarked"

WIDTH = 0.16      # logo width, as a share of the photo width
MARGIN = 0.03     # gap to the top and right edges, same share
OPACITY = 0.85


def stamp(im, logo=None):
    """Composite the logo onto the top-right corner of an RGB photo."""
    logo = (logo or Image.open(LOGO)).convert("RGBA")
    w = max(1, round(im.width * WIDTH))
    logo = logo.resize((w, max(1, round(w * logo.height / logo.width))), Image.LANCZOS)
    logo.putalpha(logo.getchannel("A").point(lambda a: round(a * OPACITY)))

    # a soft dark halo, or the dark half of the logo disappears on dark photos
    halo = Image.new("RGBA", logo.size, (0, 0, 0, 0))
    halo.putalpha(logo.getchannel("A").filter(ImageFilter.GaussianBlur(w * 0.02)))

    gap = round(im.width * MARGIN)
    at = (im.width - logo.width - gap, gap)
    out = im.convert("RGBA")
    out.alpha_composite(halo, at)
    out.alpha_composite(logo, at)
    return out.convert("RGB")


def done():
    return set(LEDGER.read_text().split()) if LEDGER.exists() else set()


def record(path):
    """Note a photo as stamped, so a later run does not stamp it twice."""
    with LEDGER.open("a") as fh:
        fh.write(str(pathlib.Path(path).resolve().relative_to(GALLERY)) + "\n")


def main():
    already = done()
    logo = Image.open(LOGO)
    photos = sorted(p for p in GALLERY.glob("*/*.webp") if p.parent.name != "thumb")
    fresh = [p for p in photos if str(p.relative_to(GALLERY)) not in already]
    if not fresh:
        print("all %d photos already stamped" % len(photos))
        return

    for photo in fresh:
        with Image.open(photo) as im:
            stamp(im.convert("RGB"), logo).save(photo, "WEBP", quality=80, method=6)
        already.add(str(photo.relative_to(GALLERY)))

    LEDGER.write_text("\n".join(sorted(already)) + "\n")
    print("stamped %d photos (%d already had the logo)" % (len(fresh), len(photos) - len(fresh)))


def self_test():
    shot = Image.new("RGB", (800, 600), (20, 20, 20))
    out = stamp(shot)
    assert out.size == shot.size
    gap = round(800 * MARGIN)
    corner = out.crop((800 - round(800 * WIDTH) - gap, gap, 800 - gap, gap + 60))
    assert corner.getextrema() != ((20, 20), (20, 20), (20, 20)), "logo not drawn"
    assert out.crop((0, 300, 400, 600)).getextrema() == ((20, 20), (20, 20), (20, 20)), "spilled"
    print("ok")


if __name__ == "__main__":
    self_test() if "--self-test" in sys.argv else main()
