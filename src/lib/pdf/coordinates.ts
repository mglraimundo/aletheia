// PDF page: A4 595.32 × 841.92 pts, origin bottom-left (pdf-lib default)

interface FieldCoord {
  x: number;
  firstLineY: number;
  width: number;
  height: number;
}

interface SingleLineCoord {
  x: number;
  y: number;
  maxWidth: number;
}

// ── Clinical fields (page 1) ──────────────────────────────────────────────────
export const CLINICAL_FIELDS: Record<string, FieldCoord> = {
  diagnosis:           { x: 38, firstLineY: 735, width: 520, height: 55.6 },
  description:         { x: 38, firstLineY: 645, width: 520, height: 57.6 },
  benefits:            { x: 38, firstLineY: 554, width: 520, height: 58.2 },
  risks:               { x: 38, firstLineY: 464, width: 520, height: 44.3 },
  alternatives:        { x: 38, firstLineY: 386, width: 520, height: 44.3 },
  risksOfNoTreatment:  { x: 38, firstLineY: 308, width: 520, height: 44.1 },
};

// ── Doctor section (page 1) ───────────────────────────────────────────────────
export const DOCTOR_FIELDS: Record<string, SingleLineCoord> = {
  name:          { x: 210, y: 162.9, maxWidth: 345 },
  date:          { x: 53,  y: 142.7, maxWidth: 42  },
  licenseNumber: { x: 480, y: 122.5, maxWidth: 75  },
  contact:       { x: 245, y: 102.5, maxWidth: 310 },
};

// ── Patient section (page 2) ─────────────────────────────────────────────────
export const PATIENT_FIELDS: Record<string, SingleLineCoord> = {
  name: { x: 62, y: 517, maxWidth: 405 },
  date: { x: 55, y: 537, maxWidth: 42  },
};

// ── Legal representative section (page 2) ────────────────────────────────────
export const LEGAL_REP_FIELDS: Record<string, SingleLineCoord> = {
  name:         { x: 62,  y: 423, maxWidth: 450 },
  docNumber:    { x: 136,  y: 403, maxWidth: 216 },
  docDate:      { x: 440, y: 403, maxWidth: 72 },
  relationship: { x: 239,  y: 383, maxWidth: 273 },
};
