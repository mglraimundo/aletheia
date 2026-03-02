import { useState, useCallback, useEffect } from 'react';
import type { FormState, ConsentTemplate, EyeSelection } from '../types';
import { loadFormState, saveFormState } from '../lib/storage';

function todayFormatted(): string {
  return new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function blankForm(): FormState {
  const saved = loadFormState();
  return {
    eye:                saved.eye          ?? '',
    templateId:         saved.templateId   ?? '',
    diagnosis:          saved.diagnosis    ?? '',
    description:        saved.description  ?? '',
    benefits:           saved.benefits     ?? '',
    risks:              saved.risks        ?? '',
    alternatives:       saved.alternatives ?? '',
    risksOfNoTreatment: saved.risksOfNoTreatment ?? '',
    date:               todayFormatted(),
    patientName:        '',
    patientDate:        todayFormatted(),
    legalRepName:       '',
    legalRepDocNumber:  '',
    legalRepDocDate:    '',
    legalRepRelationship: '',
  };
}

export function useFormState() {
  const [form, setForm] = useState<FormState>(blankForm);

  useEffect(() => {
    saveFormState(form);
  }, [form]);

  const loadTemplate = useCallback((template: ConsentTemplate) => {
    setForm(prev => ({
      ...prev,
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
    setForm(prev => ({
      eye:                '',
      templateId:         '',
      diagnosis:          '',
      description:        '',
      benefits:           '',
      risks:              '',
      alternatives:       '',
      risksOfNoTreatment: '',
      date:               prev.date,
      patientName:        '',
      patientDate:        todayFormatted(),
      legalRepName:       '',
      legalRepDocNumber:  '',
      legalRepDocDate:    '',
      legalRepRelationship: '',
    }));
  }, []);

  const setField = useCallback((field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const setEye = useCallback((eye: EyeSelection) => {
    setForm(prev => ({ ...prev, eye }));
  }, []);

  return { form, loadTemplate, resetForm, setField, setEye };
}
