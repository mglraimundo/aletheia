// DD/MM/YYYY → YYYY-MM-DD (for the hidden date input)
export function toIso(ddmmyyyy: string): string {
  const [d, m, y] = ddmmyyyy.split('/');
  if (!d || !m || !y || y.length !== 4) return '';
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

// YYYY-MM-DD → DD/MM/YYYY
export function fromIso(yyyymmdd: string): string {
  const [y, m, d] = yyyymmdd.split('-');
  if (!y || !m || !d) return '';
  return `${d}/${m}/${y}`;
}

// Returns true if empty (allowed) or matches DD/MM/YYYY
export function isValidDateFormat(val: string): boolean {
  if (!val) return true;
  return /^\d{2}\/\d{2}\/\d{4}$/.test(val);
}
