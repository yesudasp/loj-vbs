# loj-vbs

Static website for LOJ Vacation Bible School.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy target

This repository is prepared for GitHub Pages with a custom domain.

- `CNAME` is set to `www.lojvbs.com`.
- Push this branch and enable **Settings → Pages → Deploy from branch**.
- Point your DNS `CNAME` record for `www` to `<your-github-username>.github.io`.
