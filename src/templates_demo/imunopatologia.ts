import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'injecao-subtenoniana',
    name: 'Injecção Subtenoniana de Triamcinolona',
    subspecialty: 'Imunopatologia',
    aliases: ['subtenoniana', 'triamcinolona', 'corticoide subtenoniano', 'uvéite', 'uveite posterior'],
    fields: {
      diagnosis: 'Uveíte não infecciosa posterior ou panuveíte com indicação para corticoterapia local',
      description:
        'Injecção subtenoniana posterior de triancinolona acetonida para tratamento de uveíte posterior ou panuveíte. ' +
        'O fármaco é depositado no espaço subtenoniano posterior, próximo da área macular.',
      benefits:
        'Controlo da inflamação intraocular com efeito local prolongado (até 3 meses). ' +
        'Alternativa ou complemento à corticoterapia sistémica com menores efeitos adversos sistémicos.',
      risks:
        'Aumento da pressão intraocular (glaucoma corticoide), catarata subcapsular posterior, ' +
        'infecção, ptose transitória, hemorragia subconjuntival, perfuração ocular (rara).',
      alternatives:
        'Injecção subtenoniana posterior de triancinolona acetonida 40 mg/mL. ' +
        'Anestesia tópica com sedação se necessário. Controlo da pressão intraocular no seguimento.',
      risksOfNoTreatment:
        'Progressão da inflamação intraocular com complicações estruturais e perda visual.',
    },
  },
  {
    id: 'ozurdex',
    name: 'Implante Intravítreo de Dexametasona (Ozurdex)',
    subspecialty: 'Imunopatologia',
    aliases: ['ozurdex', 'dexametasona implante', 'implante corticoide', 'edema macular uvéitico'],
    fields: {
      diagnosis: 'Uveíte não infecciosa com edema macular ou inflamação vítrea com indicação para implante intravítreo de dexametasona',
      description:
        'Implante intravítreo biodegradável de dexametasona 0,7 mg (Ozurdex) para tratamento de uveíte não infecciosa. ' +
        'Libertação prolongada do corticosteroide por até 6 meses.',
      benefits:
        'Controlo sustentado da inflamação intraocular e do edema macular por período prolongado. ' +
        'Redução da necessidade de corticoterapia sistémica.',
      risks:
        'Aumento da pressão intraocular, catarata, migração do implante para câmara anterior (em afáquicos/pseudofáquicos), ' +
        'endoftalmite, descolamento de retina.',
      alternatives:
        'Injecção intravítrea do implante Ozurdex por via pars plana em bloco operatório. ' +
        'Anestesia tópica ou local. Controlo tensional no seguimento.',
      risksOfNoTreatment:
        'Progressão do edema macular e inflamação vítrea com dano estrutural e perda visual.',
    },
  },
  {
    id: 'biopsia-conjuntival',
    name: 'Biópsia Conjuntival / Corneal',
    subspecialty: 'Imunopatologia',
    aliases: ['biopsia conjuntival', 'biopsia corneal', 'diagnostico uvéite', 'cultura intraocular'],
    fields: {
      diagnosis: 'Patologia ocular inflamatória ou infecciosa com necessidade de diagnóstico histológico ou microbiológico',
      description:
        'Biópsia de tecido conjuntival ou corneal para exame histológico, imunohistoquímico ou microbiológico, ' +
        'com o objectivo de estabelecer o diagnóstico etiológico de patologia inflamatória, infecciosa ou neoplásica.',
      benefits:
        'Diagnóstico definitivo da etiologia, permitindo orientação terapêutica específica e adequada.',
      risks:
        'Hemorragia, infecção, cicatriz, perturbação da superfície ocular, resultado inconclusivo.',
      alternatives:
        'Biópsia excisional ou incisional do tecido alvo sob anestesia tópica ou local. ' +
        'Envio de material para anatomia patológica e/ou microbiologia.',
      risksOfNoTreatment:
        'Impossibilidade de diagnóstico etiológico com tratamento empírico possivelmente inadequado.',
    },
  },
  {
    id: 'paracentese-ca',
    name: 'Paracentese da Câmara Anterior para PCR',
    subspecialty: 'Imunopatologia',
    aliases: ['paracentese', 'pcr humor aquoso', 'diagnostico molecular uvéite', 'aqueous tap'],
    fields: {
      diagnosis: 'Uveíte de etiologia indeterminada com indicação para análise do humor aquoso por PCR',
      description:
        'Paracentese da câmara anterior para colheita de humor aquoso para análise por PCR multiplex, ' +
        'permitindo identificação de agentes infecciosos (CMV, HSV, VZV, Toxoplasma, outros) como causa de uveíte.',
      benefits:
        'Diagnóstico etiológico preciso da uveíte infecciosa, permitindo terapêutica dirigida e evitando imunossupressão inapropriada.',
      risks:
        'Hifema, infecção, descompensação da pressão intraocular, perfuração acidental do cristalino (rara).',
      alternatives:
        'Paracentese da câmara anterior com agulha 27G/30G sob anestesia tópica. ' +
        'Colheita de 0,1–0,2 mL de humor aquoso para análise laboratorial (PCR).',
      risksOfNoTreatment:
        'Impossibilidade de diagnóstico etiológico com risco de tratamento inadequado e progressão da uveíte.',
    },
  },
];

export default templates;
