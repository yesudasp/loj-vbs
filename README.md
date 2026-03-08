# loj-vbs

VBS website for Love of Jesus Church.

## Pages

- `index.html`: public student self-registration form.
- `admin.html`: admin-only view of registrations (passcode protected in the browser).

## How it works

- Registrations are stored in browser `localStorage` under `lojVbsRegistrations`.
- Admin passcode is set in `admin.js` as `LOJ-VBS-ADMIN`.

## Run locally

Start the server from this project directory (the folder that contains `index.html`):

```bash
cd /workspace/loj-vbs
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/index.html`
- `http://localhost:8000/admin.html`

## Troubleshooting

If you see a `404 File not found` for `/index.html`, the server was started from the wrong directory.

1. Stop the current server (`Ctrl+C`).
2. `cd` into this repo root (`/workspace/loj-vbs`).
3. Start it again with `python3 -m http.server 8000`.

A `404` for `/favicon.ico` is harmless unless you add a favicon file.


## Deploy to the internet

For a full deployment walkthrough, see [`DEPLOYMENT.md`](DEPLOYMENT.md).

Quick path (GitHub Pages):

1. Push this repository to GitHub.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. The included workflow at `.github/workflows/deploy-pages.yml` will publish the site on every push to `main`.
