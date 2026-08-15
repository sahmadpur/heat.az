#!/bin/sh
# brochure.html -> assets/docs/heattech-brochure{,-ru,-en}.pdf
#
# The catalogue is one deck in three languages: brochure.html?lang=ru is
# translated in the browser by assets/js/brochure-i18n.js, so each pass prints
# the same markup with a different dictionary applied.
#
# Chrome prints a ~25 MB PDF, so Ghostscript squeezes it down to ~1.8 MB.
# Use the /ebook preset: an earlier -dPDFSETTINGS-less run left every image
# pointing at a zero-length ICC profile, which Ghostscript tolerated but
# Preview and Quick Look did not — they dropped all the images.
set -e
root=$(cd "$(dirname "$0")/.." && pwd)
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

for lang in az ru en; do
  case $lang in
    az) out="$root/assets/docs/heattech-brochure.pdf" ;;
    *)  out="$root/assets/docs/heattech-brochure-$lang.pdf" ;;
  esac
  raw=$(mktemp -t brochure).pdf
  "$chrome" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=15000 \
    --print-to-pdf="$raw" "file://$root/brochure.html?lang=$lang"
  gs -q -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -o "$out" "$raw"
  rm -f "$raw"
  # sanity check: the PDF must still carry its photos
  grep -ac '/Subtype/Image' "$out" >/dev/null
  ls -la "$out"
done
