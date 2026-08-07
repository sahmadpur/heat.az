# heat.az — HeatTech MMC

Static rebuild of heat.az, redesigned after the LaunchFolio Framer template
(monochrome editorial layout, Switzer display type, pill controls, scroll
reveals). No build step, no dependencies — plain HTML, CSS and vanilla JS.

## Structure

```
index.html              single-page site, all sections
assets/css/style.css    design system + every component
assets/js/i18n.js       AZ / EN / RU copy
assets/js/main.js       i18n, reveals, marquee, accordion, nav, parallax
assets/img/             hero, service, brand and about imagery
assets/docs/            HeatTech brochure (PDF)
```

## Local preview

```sh
python3 -m http.server 4173     # then open http://localhost:4173/
```

Opening `index.html` directly over `file://` also works.

## Deploy

Upload the contents of this folder to the web root. There is nothing to
compile. The only external request is the Switzer webfont from
`api.fontshare.com`; if the site must be fully self-hosted, download the
Switzer woff2 files into `assets/fonts/` and swap the `<link>` in
`index.html` for a local `@font-face` block.

## Languages

Copy lives in `assets/js/i18n.js` as three dictionaries keyed by dotted
strings. Markup binds to them through data attributes:

| attribute            | effect                                              |
| -------------------- | --------------------------------------------------- |
| `data-i18n`          | sets `textContent`                                  |
| `data-i18n-html`     | sets `innerHTML` (for copy containing `<b>`)         |
| `data-i18n-lines`    | builds a line-masked heading                        |
| `data-i18n-attr`     | sets attributes, e.g. `aria-label:nav.cta`          |

In a `data-i18n-lines` value, `|` splits lines and a leading `~` renders that
line in grey — this produces the two-tone headings used throughout. Keep both
lines short enough not to wrap; each language sets its own break.

Azerbaijani is the default. Language is resolved as `?lang=` →
`localStorage` → `az`; browser locale is ignored on purpose. The visitor's
choice is remembered.

To edit text, change the dictionaries — not `index.html`.

## Animations

All motion is CSS transitions driven by class toggles from an
`IntersectionObserver`:

- `data-reveal` — fade and rise on entry. `--d` on the element, or
  `data-stagger="0.08"` on a parent, sets the delay.
- `.lines` — headings rise out of a clipping mask, line by line.
- `data-count` — integers count up once in view (`data-count-suffix` for `+`).
- `.marquee__track` — the brand row is duplicated in JS and slid `-50%`;
  hovering pauses it.
- Hero card stack — mouse position feeds `--px` / `--py`, which each card
  scales by its own depth.

`prefers-reduced-motion: reduce` disables all of it and shows the final state.

## Content notes

- Imagery, partner logos and the brochure are the assets from the previous
  heat.az. No stock people photos were added, so captions describe equipment.
- The pricing section of the source template was replaced with service
  packages carrying no figures — quotes are scoped per site.
- Footer "Terms of service" and "Privacy policy" links are placeholders
  (`href="#"`) until those pages exist.
