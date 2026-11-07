"""Optional: download every illustration from Wikimedia Commons into img/ so the site
no longer depends on Commons for images.

Run from the site folder:   python3 tools/localize_images.py
It is deliberately slow (one image every few seconds) to respect Wikimedia's rate limits,
and can be stopped and re-run; it skips images already downloaded. Requires Pillow
(pip install pillow) for resizing; without it, files are saved as downloaded.
"""
import json, os, re, sys, time, urllib.request
UA = "OscarWildeLondonMap/1.0 (educational history site)"
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(HERE, "data", "images.js")
src = open(path, encoding="utf-8").read()
head, rest = src.split("window.OWL_IMAGES = ", 1)
imgs_json, hero_json = rest.split(";\nwindow.OWL_HERO = ", 1)
imgs = json.loads(imgs_json); hero = json.loads(hero_json.strip().rstrip(";"))
try:
    from PIL import Image
except ImportError:
    Image = None
items = [("hero-1", hero)] + [(f"{pid}-{i+1}", r) for pid, lst in imgs.items() for i, r in enumerate(lst)]
os.makedirs(os.path.join(HERE, "img"), exist_ok=True)
done = 0
for key, r in items:
    if not r["f"].startswith("http"):
        continue
    fn = f"img/{key}.jpg"
    for attempt in range(4):
        try:
            data = urllib.request.urlopen(urllib.request.Request(r["r"], headers={"User-Agent": UA}), timeout=60).read()
            break
        except Exception as e:
            wait = 60 * (attempt + 1)
            print(f"{key}: {e}; waiting {wait}s", flush=True); time.sleep(wait)
    else:
        continue
    out = os.path.join(HERE, fn)
    if Image:
        import io
        im = Image.open(io.BytesIO(data))
        if im.mode != "RGB": im = im.convert("RGB")
        if im.width > 1100: im = im.resize((1100, round(im.height * 1100 / im.width)))
        im.save(out, "JPEG", quality=80, optimize=True, progressive=True)
    else:
        open(out, "wb").write(data)
    r["f"] = fn; done += 1
    open(path, "w", encoding="utf-8").write(head + "window.OWL_IMAGES = " + json.dumps(imgs, ensure_ascii=False, indent=0) + ";\nwindow.OWL_HERO = " + json.dumps(hero, ensure_ascii=False) + ";\n")
    print("saved", fn, flush=True)
    time.sleep(4)
print("downloaded", done)
