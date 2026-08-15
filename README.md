# heat.az — HeatTech MMC

Static single-page site built against `docs/Design_system.md` and `docs/content.md`:
deep industrial graphite ground, thermal-orange and tech-cyan accents, Inter type.
No build step, no dependencies — plain HTML, CSS and vanilla JS. Azerbaijani is the
page itself; Russian and English are swapped in at runtime by `assets/js/i18n.js`.

## Structure

```
index.html              single-page site, all ten sections
assets/css/style.css    design tokens + every component
assets/js/main.js       reveals, counters, marquee, tabs, lightbox, nav, form
assets/js/i18n.js       Russian and English dictionaries + the language switch
assets/img/             hero, brand and (optional) sector/certificate imagery
assets/docs/            HeatTech service catalogue (PDF)
docs/                   the design system and content specs this site implements
tools/build-gallery.py  folders of job photos -> WebP albums for qalereya.html
tools/apply-order.py    applies a gallery order plan copied out of order.html
tools/watermark.py      burns the logo into the 1600px gallery photos
order.html              client-facing drag-and-drop tool for the gallery order
```

## Local preview

```sh
python3 -m http.server 4173     # then open http://localhost:4173/
```

Opening `index.html` directly over `file://` also works.

## Deploy

Upload the contents of this folder to the web root. There is nothing to compile.
The only external request is the Inter webfont from Google Fonts; to self-host,
download the woff2 files into `assets/fonts/` and swap the `<link>` in
`index.html` for a local `@font-face` block.

## Design tokens

The palette follows the 60/30/10 split in `docs/Design_system.md`:

| role | token | value |
| --- | --- | --- |
| 60% ground | `--bg` / `--surface` | `#121517` / `#1A1D20` |
| 30% surfaces | `--surface-2` / `--steel` | `#262C33` / `#F5F7FA` |
| 10% heat | `--accent` / `--accent-deep` | `#FF5722` / `#E65100` |
| 10% automation | `--cyan` / `--cyan-deep` | `#00ACC1` / `#0288D1` |

Orange and cyan are reserved for numbers, icons, borders and buttons — never for
small body copy, which would not clear contrast on graphite. The partners and
certificates sections sit inside `.band`, a light steel zone that re-maps the ink
and surface tokens; it also keeps the dark-on-transparent partner logos legible.

## Sections

The page implements the ten sections of `docs/content.md` in order: hero, stats,
six services, flue gas analysis, service models, sectors, partners, certificates,
FAQ, contact. Copy lives directly in `index.html` — there is no translation layer.

## Languages

The page is written in Azerbaijani and stays that way in the source. `assets/js/i18n.js`
holds one Russian and one English dictionary **keyed by the Azerbaijani text itself** —
there are no key names to invent or keep in sync. A dictionary value is HTML, because
`<em>`, `<strong>` and `<sub>` land in different places in each language.

At runtime the walker picks the outermost element whose children are all inline
(`em`, `strong`, `span`, `sub`, `a` …), caches its Azerbaijani `innerHTML`, and swaps in
the translation; `<title>`, the meta description, the Open Graph tags and the
`aria-label` / `alt` / `placeholder` attributes go through the same lookup. A phrase that
is missing from a dictionary simply stays Azerbaijani, so adding copy never breaks a
language — it only leaves that one line untranslated.

To change or add copy: edit the Azerbaijani in the HTML, then update (or add) the same
string as a key in both dictionaries. Elements carrying `data-count` are skipped so the
counters keep their numbers. Strings that `main.js` writes after render — the card
toggle, the certificate lightbox, album titles — go through `T()`, which calls
`window.heatT`. The AZ / RU / EN switch lives in the nav pill (`.lang`) and remembers the
choice in `localStorage` under `heat-lang`; the default is Azerbaijani.

Translation is client side, so search engines index the Azerbaijani page only. Company,
brand and product names are deliberately absent from the dictionaries and stay as they
are in every language. `brochure.html` and `order.html` are Azerbaijani only.

## Content notes

- **Certificates.** Tiles are rendered from the `CERTS` array at the top of
  `assets/js/main.js`. Each entry is `{label, org, note, img}`. While `img` is
  `null` the tile is an inert placeholder reading "Sənəd skanı əlavə olunacaq".
  Drop a scan into `assets/img/certs/` and set `img` to its path — the tile then
  becomes a button that opens the document in the lightbox.
- **Photo albums.** `qalereya.html` renders one stack per entry in the `ALBUMS`
  array in `assets/js/main.js` (`{title, dir, n}`). Never copy photos in by hand
  — run `python3 tools/build-gallery.py <folder-of-folders>` (needs Pillow). It
  makes one album per subfolder, re-encodes every photo to WebP at 1600px for
  the viewer and 640px for the stack, drops EXIF, and prints the `ALBUMS`
  entries to paste. Photos that skip that step ship several times heavier.
- **Watermark.** The 1600px photos carry the logo in their pixels (top right),
  so a saved copy keeps it — `tools/build-gallery.py` stamps every new import,
  and `python3 tools/watermark.py` catches anything that predates it. The
  640px thumbnails stay clean. `assets/img/gallery/.watermarked` is the list of
  files already stamped; deleting it makes the next run stamp them twice.
- **Album and photo order.** Album order is the order of the `ALBUMS` entries;
  photo order is the `01.webp…NN.webp` file names. The client reorders both in
  `order.html` (site root, `noindex`) and sends back the text plan it copies;
  `python3 tools/apply-order.py plan.txt` renames the files. See
  [docs/gallery-order.md](docs/gallery-order.md). `brochure.html` uses its own
  copies in `assets/img/brochure/`, so reordering never disturbs the catalogue.
- **Sector photos.** The four cards in `#sahaler` are gradient panels with a
  line-art watermark because no photographs of those site types exist yet. To use
  a real photo, add `<img class="sector__img" src="…" alt="">` as the first child
  of the `.sector` element; the dark overlay and text treatment already sit above it.
- **Request form.** There is no backend. On submit the form validates inline, then
  opens `https://wa.me/994553487675` with the answers pre-composed as a message.
  The number is the `WHATSAPP` constant in `assets/js/main.js`.
- Footer socials are WhatsApp, Facebook (`/heattechaz`) and Instagram
  (`/_heat_tech_`), followed by a Linktree QR code (`assets/img/qr-linktree.png`)
  that resolves to every contact channel at once.

## Animations

All motion is CSS driven by class toggles from an `IntersectionObserver`:

- `data-reveal` — fade and rise on entry. `--d` on the element, or
  `data-stagger="0.07"` on a parent, sets the delay.
- `data-count` — integers count up once in view (`data-count-suffix` for `+` / `%`).
- `.marquee__track` — the partner row is duplicated in JS and slid `-50%`;
  hovering pauses it.
- Flue-gas readouts rotate every `AUTO_MS` (10s, in `assets/js/main.js`).
  Hovering or focusing the block pauses it and banks the remaining time;
  picking a gas by click or arrow key ends the rotation for good. It only runs
  while the block is on screen, and never under reduced motion. All four panels
  are padded to the tallest so the swap does not shift the layout.
- Hero steam — two blurred blobs drift over a slow-panning particle layer, all CSS.

`prefers-reduced-motion: reduce` disables all of it and shows the final state.
