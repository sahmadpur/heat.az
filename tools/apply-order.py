#!/usr/bin/env python3
"""Apply a gallery order plan produced by order.html.

The plan is plain text, one album per line:

    # HeatTech qalereya sırası
    ALBUMS: paprec-20mw, yello-bank, ...
    paprec-20mw: 3,1,2,4,5,6,7,8,9,10,11,12,13

Photo lines renumber the files in assets/img/gallery/<dir>/ (and its thumb/
folder) so that position 1 gets the photo that used to be 03.webp, and so on.
The ALBUMS line only changes the order of the entries in the ALBUMS list in
assets/js/main.js — it is printed for the developer, not applied here.

    python3 tools/apply-order.py plan.txt
    python3 tools/apply-order.py --selftest
"""

import shutil
import sys
from pathlib import Path

GALLERY = Path(__file__).resolve().parent.parent / "assets" / "img" / "gallery"


def parse(text):
    """-> (album order or None, {dir: [old photo numbers, in new order]})"""
    albums, photos = None, {}
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        key, value = (part.strip() for part in line.split(":", 1))
        if key.upper() == "ALBUMS":
            albums = [d.strip() for d in value.split(",") if d.strip()]
        else:
            photos[key] = [int(n) for n in value.replace(" ", "").split(",") if n]
    return albums, photos


def renumber(folder, order):
    """Rename NN.webp files in `folder` so the new NNs follow `order`."""
    files = sorted(folder.glob("*.webp"))
    if sorted(order) != list(range(1, len(files) + 1)):
        raise SystemExit(
            "%s: sıra 1..%d rəqəmlərinin hamısını bir dəfə saxlamalıdır, gələn: %s"
            % (folder, len(files), order)
        )
    staging = folder / "__reorder"
    staging.mkdir()
    for new_i, old in enumerate(order, 1):
        shutil.move(folder / ("%02d.webp" % old), staging / ("%02d.webp" % new_i))
    for f in staging.iterdir():
        shutil.move(f, folder / f.name)
    staging.rmdir()


def main(plan_path):
    albums, photos = parse(Path(plan_path).read_text(encoding="utf-8"))

    for dirname, order in photos.items():
        album = GALLERY / dirname
        if not album.is_dir():
            raise SystemExit("%s tapılmadı" % album)
        renumber(album, order)
        if (album / "thumb").is_dir():
            renumber(album / "thumb", order)
        print("%s: %d foto yenidən nömrələndi" % (dirname, len(order)))

    if albums:
        print("\nassets/js/main.js içindəki ALBUMS siyahısını bu sıraya düzün:")
        for i, dirname in enumerate(albums, 1):
            print("  %2d. %s" % (i, dirname))


def selftest():
    import tempfile

    plan = "# başlıq\nALBUMS: b, a\na: 3,1,2\n"
    assert parse(plan) == (["b", "a"], {"a": [3, 1, 2]})

    with tempfile.TemporaryDirectory() as tmp:
        folder = Path(tmp)
        for i in range(1, 4):
            (folder / ("%02d.webp" % i)).write_text(str(i))
        renumber(folder, [3, 1, 2])
        assert [(folder / ("%02d.webp" % i)).read_text() for i in (1, 2, 3)] == ["3", "1", "2"]
        assert sorted(p.name for p in folder.iterdir()) == ["01.webp", "02.webp", "03.webp"]
    print("ok")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    selftest() if sys.argv[1] == "--selftest" else main(sys.argv[1])
