# Aletheia

**Informed Consent Platform — Serviço de Oftalmologia, ULS Coimbra**

Aletheia is a client-side web application for generating informed consent forms compliant with DGS norm 015/2013 for the department of Ophthalmology of ULS Coimbra, Portugal. The clinician selects a procedure template, fills in the clinical fields, and prints two signed copies front-and-back from a single A4 sheet.

No data is ever sent to a server. No clinical information is persisted anywhere. The doctor's name, medical license number, and internal hospital number are stored locally in the browser for convenience.

---

## Features

- **Procedure templates** with full pre-filled clinical text in Portuguese, organised by subspecialty (Cirurgia Implanto-Refrativa, Glaucoma, Córnea)
- **Alias-based search** — common abbreviations like *faco*, *trab*, *qp* resolve to the correct template
- **Eye selector** — right, left, or bilateral (sequential/simultaneous), injected as a prefix into the PDF fields
- **Client-side PDF generation** — fills the official DGS base form using [pdf-lib](https://pdf-lib.js.org/), producing a 4-page document (two complete copies) ready for duplex printing
- **Auto-scaling text** — font size scales from 10pt down to 7pt to fit all content within each field
- **Doctor info persistence** — name, medical license number, and internal hospital number are saved in `localStorage` and restored on every visit; the institutional email is derived automatically
- **Last subspecialty tab** is remembered across sessions

---

## Stack

| | |
|---|---|
| Framework | React 19 + Vite 7 + TypeScript 5 |
| Styling | Tailwind CSS 3 |
| PDF | pdf-lib 1.17 (client-side) |
| Storage | `localStorage` — doctor info and UI state only |
| Backend | None |

---

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/) v18 or later. If you don't have it, [nvm](https://github.com/nvm-sh/nvm) is the recommended way to install it:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
# restart your terminal, then:
nvm install --lts
```

### Install and run

```bash
git clone git@github.com:mglraimundo/aletheia.git
cd aletheia
npm install
```

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
```

The `dist/` folder contains static files that can be served by any web server — no Node.js required at runtime.

### Deploy to GitHub Pages

The repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the app automatically on every push to `main` — no manual build step needed.

**One-time setup:**

1. Go to your repository on GitHub
2. **Settings → Pages → Build and deployment → Source** → select **GitHub Actions**
3. Push any commit to `main` — the workflow runs, and your app is live

If you're using a custom domain, add a `public/CNAME` file containing your domain (e.g. `aletheia.example.com`) and configure the DNS to point to GitHub Pages.

---

## Base PDF

`public/base.pdf` is the official DGS 015/2013 informed consent form with ULS Coimbra branding. It is a publicly available document and is included in this repository.

---

## Adding Procedures

Each subspecialty has its own file under `src/templates/`. To add a new procedure, append an entry to the relevant array following the existing structure. To add a new subspecialty, create a new file, export the array, and register it in `src/templates/index.ts`.

---

## Author

Developed by **Miguel Raimundo**.

---

## License

[MIT](LICENSE)
