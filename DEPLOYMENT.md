# Internet Deployment Guide

This project is a static website, so the fastest way to make it public is **GitHub Pages**.

## Option A (recommended): GitHub Pages (free)

### 1) Push this repo to GitHub

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2) Enable GitHub Pages

1. Open your GitHub repo.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

This repo already includes `.github/workflows/deploy-pages.yml`, so each push to `main` deploys automatically.

### 3) Add custom domain (optional)

If you want `www.lojvbs.com`:

1. Keep the `CNAME` file in the repo root.
2. In your DNS provider, create a CNAME record:
   - Host: `www`
   - Value: `<your-github-username>.github.io`
3. In **Settings → Pages**, set custom domain to `www.lojvbs.com` and enable HTTPS.

## Option B: Netlify Drop (no git integration)

1. Zip this project folder.
2. Log in to Netlify.
3. Drag/drop the zip into **Sites**.
4. Netlify gives you a public URL immediately.

## Important note about admin data

`admin.html` reads registrations from browser `localStorage`. That means:

- Data is saved per browser/device.
- Public internet users will not share one central registration database.

If you want shared registrations for all devices, we should add a backend (for example Supabase/Firebase).
