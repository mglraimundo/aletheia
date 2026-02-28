import type { DoctorInfo } from '../types';

const STORAGE_KEY = 'aletheia_doctor_info';

export function loadDoctorInfo(): DoctorInfo {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as DoctorInfo;
  } catch {
    // ignore
  }
  return { nome: '', cedula: '', mecanografico: '' };
}

export function saveDoctorInfo(info: DoctorInfo): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch {
    // ignore
  }
}
