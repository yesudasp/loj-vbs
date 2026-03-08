# loj-vbs

VBS website for Love of Jesus Church.

## Pages

- `index.html`: public student self-registration form.
- `admin.html`: admin-only view of registrations (passcode protected in the browser).

## How it works

- Registrations are stored in browser `localStorage` under `lojVbsRegistrations`.
- Admin passcode is set in `admin.js` as `LOJ-VBS-ADMIN`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/index.html`
- `http://localhost:8000/admin.html`
