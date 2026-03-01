import { useState, useCallback } from 'react';
import type { FormState, ConsentTemplate, EyeSelection } from '../types';

function todayFormatted(): string {
  return new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function blankForm(): FormState {
  return {
    eye: '',
    templateId: '',
    diagnosis: '',
    description: '',
    benefits: '',
    risks: '',
    alternatives: '',
    risksOfNoTreatment: '',
    date: todayFormatted(),
    patientName: '',
    patientDate: todayFormatted(),
    legalRepName: '',
    legalRepDocNumber: '',
    legalRepDocDate: '',
    legalRepRelationship: '',
  };
}

export function useFormState() {
  const [form, setForm] = useState<FormState>(blankForm);

  const loadTemplate = useCallback((template: ConsentTemplate) => {
    setForm(prev => ({
      ...blankForm(),
      date: prev.date,
      eye: prev.eye,
      templateId:          template.id,
      diagnosis:           template.fields.diagnosis           ?? '',
      description:         template.fields.description         ?? '',
      benefits:            template.fields.benefits            ?? '',
      risks:               template.fields.risks               ?? '',
      alternatives:        template.fields.alternatives        ?? '',
      risksOfNoTreatment:  template.fields.risksOfNoTreatment  ?? '',
    }));
  }, []);

  const resetForm = useCallback(() => {
    setForm(prev => ({ ...blankForm(), date: prev.date }));
  }, []);

  const setField = useCallback(<K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const setEye = useCallback((eye: EyeSelection) => {
    setForm(prev => ({ ...prev, eye }));
  }, []);

  return { form, loadTemplate, resetForm, setField, setEye };
}
