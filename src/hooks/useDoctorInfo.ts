import { useState, useCallback } from 'react';
import type { DoctorInfo } from '../types';
import { loadDoctorInfo, saveDoctorInfo } from '../lib/storage';

export function useDoctorInfo() {
  const [doctor, setDoctor] = useState<DoctorInfo>(loadDoctorInfo);

  const updateDoctor = useCallback((field: keyof DoctorInfo, value: string) => {
    setDoctor(prev => {
      const next = { ...prev, [field]: value };
      saveDoctorInfo(next);
      return next;
    });
  }, []);

  return { doctor, updateDoctor };
}
