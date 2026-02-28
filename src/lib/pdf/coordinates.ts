// PDF page: A4 595.32 × 841.92 pts, origin bottom-left (pdf-lib default)

export interface FieldCoord {
  x: number;
  firstLineY: number;
  width: number;
  height: number;
}

export interface SingleLineCoord {
  x: number;
  y: number;
  maxWidth: number;
}

export interface CheckboxCoord {
  x: number;
  y: number;
  size: number;
}

// ── Clinical fields (page 1) ──────────────────────────────────────────────────
export const CLINICAL_FIELDS: Record<string, FieldCoord> = {
  diagnostico:         { x: 38, firstLineY: 735, width: 520, height: 55.6 },
  descricao:           { x: 38, firstLineY: 645, width: 520, height: 57.6 },
  beneficios:          { x: 38, firstLineY: 554, width: 520, height: 58.2 },
  riscos:              { x: 38, firstLineY: 462, width: 520, height: 44.3 },
  atos:                { x: 38, firstLineY: 384, width: 520, height: 44.3 },
  riscosNaoTratamento: { x: 38, firstLineY: 306, width: 520, height: 44.1 },
};

// ── Doctor section (page 1) ───────────────────────────────────────────────────
export const DOCTOR_FIELDS: Record<string, SingleLineCoord> = {
  nome:     { x: 210, y: 162.9, maxWidth: 345 },
  data:     { x: 55,  y: 142.7, maxWidth: 38  },
  cedula:   { x: 480,  y: 122.5, maxWidth: 75 },
  contacto: { x: 245, y: 102.5, maxWidth: 310 },
};

// ── Checkboxes (page 2) ───────────────────────────────────────────────────────
export const CHECKBOXES: Record<string, CheckboxCoord> = {
  autorizo:    { x: 29.4, y: 612.3, size: 11.2 },
  naoAutorizo: { x: 29.4, y: 572.0, size: 11.2 },
};
