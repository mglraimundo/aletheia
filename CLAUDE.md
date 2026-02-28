# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

**Aletheia** — client-side web app for generating informed consent forms (DGS 015/2013) for the Ophthalmology Department of ULS Coimbra. Fully stateless: no backend, no clinical data persistence. Only doctor info is stored in localStorage.

## Commands

```bash
npm run dev       # dev server at http://localhost:5173
npm run build     # tsc -b && vite build (type-check + production build)
npm run lint      # eslint .
npx tsc --noEmit  # type-check only (faster than full build)
```

## Architecture

### State & Data Flow

```
App
├── useDoctorInfo()     → localStorage: aletheia_doctor_info { nome, cedula, mecanografico }
├── useFormState()      → in-memory form state; reset after PDF generation (date preserved)
├── Header
├── TemplateSelector    → localStorage: aletheia_last_tab (active subspecialty)
│   └── filters by search (name + aliases) and subspecialty tab
└── ConsentForm
    └── ActionButtons   → calls previewPdf() or printPdf()
```

### PDF Generation (`src/lib/pdf/`)

Output is always 4 pages: `[page1-copy-A, page2-copy-A, page1-copy-B, page2-copy-B]`. The base template is fetched from `/base.pdf` at generation time (also cached by the PWA service worker).

- **`generatePdf.ts`** — `buildPdf(form, doctor)` fills fields into copies A & B; `previewPdf()` opens in new tab; `printPdf()` uses a hidden iframe with `window.open()` fallback
- **`coordinates.ts`** — all XY positions for PDF fields. A4 page = 595.32×841.92 pts, origin bottom-left (pdf-lib default). Clinical fields have `{ x, firstLineY, width, height }`; doctor fields have `{ x, y, maxWidth }`
- **`textLayout.ts`** — auto-scales font 10pt→7pt to fit text in each field; word-wraps with hard character-split for oversized words

**Important:** `buildPdf()` must return `Uint8Array` (not `ArrayBuffer`) for the `Blob` constructor — TypeScript 5.9 strict mode requires `new Uint8Array(bytes)`.

Doctor email is synthesized as `{mecanografico}@ulscoimbra.min-saude.pt` — it is never stored.

### Types (`src/types/index.ts`)

```typescript
type EyeSelection = 'direito' | 'esquerdo' | 'bilateral-sequencial' | 'bilateral-simultaneo' | '';

interface ConsentTemplate {
  id: string;
  name: string;
  subspecialty: string;
  aliases?: string[];     // hidden search terms (abbreviations, synonyms)
  fields: {
    diagnostico?: string;
    descricao?: string;
    beneficios?: string;
    riscos?: string;
    atos?: string;
    riscosNaoTratamento?: string;
  };
}

interface DoctorInfo { nome: string; cedula: string; mecanografico: string; }

interface FormState {
  eye: EyeSelection;
  templateId: string;
  diagnostico: string; descricao: string; beneficios: string;
  riscos: string; atos: string; riscosNaoTratamento: string;
  data: string;  // DD/MM/YYYY
  autorizacaoCheckbox: boolean;
}
```

### Templates (`src/templates/`)

One file per subspecialty. Each template pre-fills all 6 clinical fields in Portuguese. `src/templates/index.ts` exports `ALL_TEMPLATES` and `SUBSPECIALTY_ORDER`.

To add a procedure: add an entry to the relevant subspecialty file and ensure it is included in `ALL_TEMPLATES`.

## Key Files

| Path | Role |
|------|------|
| `public/base.pdf` | DGS form template (2-page A4, do not replace without recalibrating coordinates) |
| `src/lib/pdf/coordinates.ts` | All PDF field positions — edit here for layout fixes |
| `src/lib/pdf/generatePdf.ts` | PDF assembly logic |
| `src/templates/index.ts` | Template registry |
| `src/types/index.ts` | All shared types |

## Known Constraints

- **PDF coordinates need visual calibration** — coordinates in `coordinates.ts` were set by plan, not verified against printed output
- Chunk size warning (~642 KB) is expected — pdf-lib is large, acceptable for hospital intranet
- The `autorizacaoCheckbox` field exists in `FormState` but is currently disabled/commented out in both the form UI and PDF generation
