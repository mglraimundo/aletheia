import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'estrabismo-horizontal',
    name: 'Cirurgia de Estrabismo Horizontal',
    subspecialty: 'Estrabismo',
    aliases: ['estrabismo', 'esotropia', 'exotropia', 'desvio ocular', 'estrabismo horizontal'],
    fields: {
      diagnosis: 'Estrabismo horizontal (esotropia ou exotropia) com indicação cirúrgica',
      description:
        'Cirurgia de estrabismo horizontal por reposicionamento de músculo(s) recto(s) medial(is) e/ou lateral(is). ' +
        'Pode incluir recessão (recuo do músculo) e/ou ressecção (encurtamento do músculo) conforme o tipo de desvio.',
      benefits:
        'Correcção ou melhoria do alinhamento ocular com melhoria estética e funcional. ' +
        'Potencial recuperação da visão binocular em casos seleccionados.',
      risks:
        'Sobrecorrecção ou subcorrecção com necessidade de reintervenção, diplopia, infecção, ' +
        'cicatriz conjuntival, perfuração escleral (rara), alteração da motilidade ocular.',
      alternatives:
        'Cirurgia dos músculos extraoculares sob anestesia geral. Recessão e/ou ressecção dos músculos afectados. ' +
        'Sutura ajustável no pós-operatório imediato (se indicada).',
      risksOfNoTreatment:
        'Manutenção do desvio com impacto estético, ambliopia progressiva e ausência de visão binocular.',
    },
  },
  {
    id: 'estrabismo-vertical',
    name: 'Cirurgia de Estrabismo Vertical',
    subspecialty: 'Estrabismo',
    aliases: ['estrabismo vertical', 'hipertropia', 'hipotropia', 'obliquo', 'musculo vertical'],
    fields: {
      diagnosis: 'Estrabismo vertical (hipertropia, hipotropia ou disfunção de músculo oblíquo) com indicação cirúrgica',
      description:
        'Cirurgia dos músculos extraoculares verticais (rectos superiores, inferiores e/ou oblíquos) ' +
        'por recessão, ressecção ou myectomia, para correcção do desvio vertical.',
      benefits:
        'Correcção do desvio vertical com melhoria do alinhamento e eliminação da posição de cabeça compensatória. ' +
        'Melhoria da visão binocular em casos seleccionados.',
      risks:
        'Diplopia, sobrecorrecção ou subcorrecção, cicatriz conjuntival, infecção, ' +
        'alteração da motilidade ocular, perfuração escleral.',
      alternatives:
        'Cirurgia dos músculos extraoculares verticais sob anestesia geral. ' +
        'Recessão/ressecção/myectomia conforme o tipo de disfunção.',
      risksOfNoTreatment:
        'Manutenção do desvio vertical com diplopia, posição viciosa de cabeça e impacto funcional e estético.',
    },
  },
  {
    id: 'toxina-botulinica-estrabismo',
    name: 'Toxina Botulínica no Estrabismo',
    subspecialty: 'Estrabismo',
    aliases: ['botox estrabismo', 'toxina botulinica', 'botulinica', 'injecao muscular', 'botulinum'],
    fields: {
      diagnosis: 'Estrabismo com indicação para tratamento com toxina botulínica como alternativa ou complemento à cirurgia',
      description:
        'Injecção de toxina botulínica tipo A no(s) músculo(s) extraocular(es) afectado(s) para paralisia temporária ' +
        'e reequilíbrio do alinhamento ocular. Realizado sob orientação electromiográfica ou ecográfica.',
      benefits:
        'Correcção não cirúrgica do estrabismo. Procedimento reversível. ' +
        'Útil no estrabismo agudo, paralítico ou como complemento de cirurgia.',
      risks:
        'Ptose transitória, diplopia transitória, sobrecorrecção, efeito limitado no tempo (3–4 meses), ' +
        'hematoma, necessidade de repetição.',
      alternatives:
        'Injecção electromioguidada de toxina botulínica tipo A no músculo extraocular. ' +
        'Anestesia tópica e sedação ligeira se necessário.',
      risksOfNoTreatment:
        'Manutenção do desvio ocular com impacto funcional, estético e risco de ambliopia.',
    },
  },
  {
    id: 'revisao-estrabismo',
    name: 'Revisão de Cirurgia de Estrabismo',
    subspecialty: 'Estrabismo',
    aliases: ['revisao estrabismo', 'reoperacao estrabismo', 'sobrecorreccao', 'subcorreccao'],
    fields: {
      diagnosis: 'Sobrecorrecção, subcorrecção ou recorrência de estrabismo após cirurgia prévia',
      description:
        'Cirurgia de revisão dos músculos extraoculares previamente operados para correcção de desvio residual ou recorrente. ' +
        'Tecnicamente mais exigente pela fibrose e aderências dos tecidos já intervencionados.',
      benefits:
        'Melhoria do alinhamento ocular após resultado insatisfatório de cirurgia anterior.',
      risks:
        'Maior risco de complicações que a cirurgia primária: perfuração escleral, isquemia do segmento anterior, ' +
        'cicatrização exuberante, resultados menos previsíveis, necessidade de nova reintervenção.',
      alternatives:
        'Revisão cirúrgica dos músculos extraoculares sob anestesia geral. ' +
        'Lise de aderências e reposicionamento muscular.',
      risksOfNoTreatment:
        'Manutenção do desvio residual com limitação funcional e estética.',
    },
  },
  {
    id: 'nistagmo-cirurgia',
    name: 'Cirurgia de Nistagmo (Procedimento de Kestenbaum)',
    subspecialty: 'Estrabismo',
    aliases: ['nistagmo', 'nystagmus', 'kestenbaum', 'anderson', 'posicao nula'],
    fields: {
      diagnosis: 'Nistagmo com posição de bloqueio excêntrica e posição viciosa de cabeça significativa',
      description:
        'Cirurgia de Anderson-Kestenbaum: transposição da posição nula do nistagmo para a posição primária ' +
        'por reposicionamento bilateral dos músculos horizontais, eliminando ou reduzindo a posição viciosa de cabeça.',
      benefits:
        'Eliminação ou redução da posição viciosa de cabeça com melhoria funcional e estética. ' +
        'Possível melhoria da acuidade visual na posição primária.',
      risks:
        'Sobrecorrecção ou subcorrecção, diplopia, alteração da motilidade ocular, infecção.',
      alternatives:
        'Recessão e ressecção bilateral dos músculos horizontais sob anestesia geral. ' +
        'Planeamento pré-operatório cuidadoso com medição do ângulo de desvio da cabeça.',
      risksOfNoTreatment:
        'Manutenção da posição viciosa de cabeça com impacto funcional, postural e estético.',
    },
  },
];

export default templates;
