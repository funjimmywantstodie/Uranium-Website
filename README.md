# Uranium website

The public frontend of [joinuranium.com](https://joinuranium.com).

## Run locally

Requires Python 3. From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Stop the server with Ctrl+C. No dependencies or credentials needed.

## Files

- `index.html`: landing page and links.
- `site/style.css`: layout, responsive styles, and animations.
- `site/app.js`: clipboard behavior and pointer animation.
- `site/mark.svg`: Uranium brand mark.

This repo contains the current landing page. Backend services and production analytics are separate. The developer workspace link opens the existing production portal.

## Contribute

Fork the repo, make your changes, and open a pull request with screenshots or a preview link. Check mobile and desktop layouts, keyboard navigation, reduced motion, and the copy button, including its manual-copy fallback.

The owner reviews and deploys accepted changes. This repo does not automatically deploy to the live website.

---

Made with AI.
