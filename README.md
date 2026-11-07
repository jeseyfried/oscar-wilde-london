# Oscar Wilde's London: an interactive map, 1879–1897

A static site (no build step, no framework) mapping 200 places in the London that made Oscar Wilde. It is built from Wolf Von Eckardt, Sander L. Gilman and J. Edward Chamberlin, *Oscar Wilde's London: A Scrapbook of Vices and Virtues, 1880–1900* (1987), with further scholarship cited entry by entry.

## Preview on your computer
Open `index.html` directly, or, better, run a small local server from this folder:

    python -m http.server 8000

then visit http://localhost:8000. The map tiles, fonts and most illustrations load from the internet, so you need to be online.

## Publish (e.g. GitHub Pages or jonathanseyfried.net)
Upload everything in this folder, keeping the structure. All paths are relative, so it works at any URL.

## Where things live
- `index.html`: page text and layout.
- `css/site.css`: colours, type and layout (palette variables at the top).
- `js/config.js`: **settings**, including the optional MapTiler key for the 1890s Ordnance Survey layer.
- `js/core.js`: shared data and helpers. Theme names and colours are in `LAYERS`.
- `js/hero.js`: the animated opening section (counting figures, the ticker of places, the tilt of the portrait). Its look is in the "hero" part of `css/site.css`; the background map is `img/hero-map.jpg`.
- `js/themes.js`: the full-width "Themes" carousel at the top of the page.
- `js/explorer.js`: the main map, filters, year slider, place cards and walks.
- `js/sections.js`: walk cards, chronicle, people, errata and bibliography.
- `data/places-*.js`: **the 200 places**, one file per theme. Each entry gives name, address, coordinates, themes, years, summary, text, dated events, book page numbers (`b`), further-reading keys (`r`), people (`p`) and Commons search terms (`q`).
- `data/sources.js`: bibliography for the `r` keys. `data/people.js`: people. `data/walks.js`: the eight walks. `data/themes.js`: the ten theme explanations, their "Start here" places and background pictures (edit the text there). `data/errata.js`: where the book slips.
- `data/images.js`: illustrations with captions, authors, licences and Commons links. `credits.html` lists them all.
- `data/owl.json`: everything in one machine-readable file (see `for-ai.html`).
- `plain.html`: every entry as plain text.

## The historic map layer
The "1890s survey" button appears only when `MAPTILER_KEY` in `js/config.js` is filled in. The National Library of Scotland's historic Ordnance Survey maps are served through MapTiler, which has a free tier for non-commercial use. Create a key at https://cloud.maptiler.com/account/keys/, paste it in, and keep the NLS credit in the footer. If your MapTiler account lists the London five-foot plan (1893–96), put its tileset id in `HISTORIC_TILESET`. Without a key the map offers "Today" and a sepia-toned "Sepia" view.

## Images
All images are public domain or openly licensed from Wikimedia Commons. A few are stored in `img/`. The rest load directly from Commons at its standard 960px size, which Commons permits. To keep copies locally instead, run `python tools/localize_images.py` (slow on purpose, to respect Wikimedia's rate limits).

## Editing
Edit a place by changing its entry in the relevant `data/places-*.js` file. Keep the commas and quotation marks. To add a place, copy an entry, give it a new `id`, and add its coordinates (`ll: [latitude, longitude]`).
