export type EyeSelection =
  | 'direito'
  | 'esquerdo'
  | 'bilateral-sequencial'
  | 'bilateral-simultaneo'
  | '';

export const EYE_LABELS: Record<Exclude<EyeSelection, ''>, string> = {
  'direito':               'Olho DIREITO',
  'esquerdo':              'Olho ESQUERDO',
  'bilateral-sequencial':  'Olho DIREITO e ESQUERDO (bilateral sequencial)',
  'bilateral-simultaneo':  'Olho DIREITO e ESQUERDO (bilateral simultâneo)',
};

export const EYE_ORDER: Exclude<EyeSelection, ''>[] = [
  'direito',
  'esquerdo',
  'bilateral-sequencial',
  'bilateral-simultaneo',
];

export interface ConsentTemplate {
  id: string;
  name: string;
  subspecialty: string;
  aliases?: string[];        // hidden search terms (abbreviations, synonyms)
  fields: {
    diagnostico?: string;
    descricao?: string;
    beneficios?: string;
    riscos?: string;
    atos?: string;
    riscosNaoTratamento?: string;
  };
}

export interface DoctorInfo {
  nome: string;
  cedula: string;
  mecanografico: string;
}

export interface FormState {
  eye: EyeSelection;
  templateId: string;
  diagnostico: string;
  descricao: string;
  beneficios: string;
  riscos: string;
  atos: string;
  riscosNaoTratamento: string;
  data: string;
  autorizacaoCheckbox: boolean;
}
