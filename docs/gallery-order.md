# Gallery order

How the order of albums and photos in `qalereya.html` is decided, and how the
client changes it without touching code.

## Where the order lives

There is no ordering field anywhere. Order is implied by two things:

- **Album order** — the position of the entry in the `ALBUMS` array at the top
  of `assets/js/main.js`. `initAlbums()` renders the albums in array order.
- **Photo order inside an album** — the file names.
  `assets/img/gallery/<dir>/01.webp…NN.webp` are shown in numeric order, and
  `assets/img/gallery/<dir>/thumb/NN.webp` is the matching 640px thumbnail.
  The `n` field in the `ALBUMS` entry is how many photos the album has.

So reordering photos means renaming files, and reordering albums means moving
entries in `ALBUMS`.

## Client-facing tool: `order.html`

`order.html` sits at the site root (`heat.az/order.html`, `noindex`). It fetches
`assets/js/main.js`, pulls the live `ALBUMS` literal out of it, and renders:

- a draggable list of albums (drag, or the ↑ ↓ buttons)
- the photos of the selected album as a draggable grid

It writes nothing — there is no backend. The **Sıranı kopyala** button copies a
plain text plan the client sends back, e.g.

```
# HeatTech qalereya sırası
ALBUMS: paprec-20mw, yello-bank, lamtec-baltur, ...
paprec-20mw: 3,1,2,4,5,6,7,8,9,10,11,12,13
```

A photo line reads "new position 1 is the photo currently named 03.webp".
Only albums the client actually reordered appear in the plan.

It must be opened over http (the site, or `python3 -m http.server`) — over
`file://` the `fetch` of `main.js` is blocked and the page says so.

## Applying a plan

```sh
python3 tools/apply-order.py plan.txt
```

For every photo line it renumbers `assets/img/gallery/<dir>/*.webp` and the
matching `thumb/*.webp` through a staging folder, so no two files collide
mid-rename. It refuses a line that is not a permutation of `1..N`. The
`ALBUMS:` line is **not** applied — the script prints the requested album order
and the `ALBUMS` entries in `assets/js/main.js` get moved by hand.

`python3 tools/apply-order.py --selftest` checks the parser and the renumbering.

## After applying — check these

- **`brochure.html` references single gallery files** (`assets/img/gallery/yello-bank/03.webp`
  and five others). Renumbering an album those point into silently swaps the
  photos printed in the catalogue. Grep for `assets/img/gallery/` in
  `brochure.html` and fix the paths.
- The album cover is the first three photos (`initAlbums()` stacks at most
  three leaves), so the new `01`–`03` are what visitors see on the card.
- `n` only changes when photos are added or removed, not when they are
  reordered.

## Related

- `tools/build-gallery.py` — imports new folders of job photos as albums
  (WebP, 1600px + 640px thumbs). Always the way new photos enter the gallery.
- The brochure PDF (`assets/docs/heattech-brochure.pdf`) is printed from
  `brochure.html`; run it through
  `gs -sDEVICE=pdfwrite -dColorImageResolution=200 -dJPEGQ=82 …` before
  committing — the raw print export is ~10× bigger.
