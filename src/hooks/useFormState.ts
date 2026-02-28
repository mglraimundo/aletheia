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
    diagnostico: '',
    descricao: '',
    beneficios: '',
    riscos: '',
    atos: '',
    riscosNaoTratamento: '',
    data: todayFormatted(),
    autorizacaoCheckbox: true,
  };
}

export function useFormState() {
  const [form, setForm] = useState<FormState>(blankForm);

  const loadTemplate = useCallback((template: ConsentTemplate) => {
    setForm(prev => ({
      ...blankForm(),
      data: prev.data,
      eye: prev.eye,
      diagnostico:         template.fields.diagnostico         ?? '',
      descricao:           template.fields.descricao           ?? '',
      beneficios:          template.fields.beneficios          ?? '',
      riscos:              template.fields.riscos              ?? '',
      atos:                template.fields.atos                ?? '',
      riscosNaoTratamento: template.fields.riscosNaoTratamento ?? '',
    }));
  }, []);

  const resetForm = useCallback(() => {
    setForm(prev => ({ ...blankForm(), data: prev.data }));
  }, []);

  const setField = useCallback(<K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const setEye = useCallback((eye: EyeSelection) => {
    setForm(prev => ({ ...prev, eye }));
  }, []);

  return { form, loadTemplate, resetForm, setField, setEye };
}
