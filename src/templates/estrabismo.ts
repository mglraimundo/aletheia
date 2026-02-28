import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'estrabismo-horizontal',
    name: 'Cirurgia de Estrabismo Horizontal',
    subspecialty: 'Estrabismo',
    aliases: ['estrabismo', 'esotropia', 'exotropia', 'desvio ocular', 'estrabismo horizontal'],
    fields: {
      diagnostico: 'Estrabismo horizontal (esotropia ou exotropia) com indicação cirúrgica',
      descricao:
        'Cirurgia de estrabismo horizontal por reposicionamento de músculo(s) recto(s) medial(is) e/ou lateral(is). ' +
        'Pode incluir recessão (recuo do músculo) e/ou ressecção (encurtamento do músculo) conforme o tipo de desvio.',
      beneficios:
        'Correcção ou melhoria do alinhamento ocular com melhoria estética e funcional. ' +
        'Potencial recuperação da visão binocular em casos seleccionados.',
      riscos:
        'Sobrecorrecção ou subcorrecção com necessidade de reintervenção, diplopia, infecção, ' +
        'cicatriz conjuntival, perfuração escleral (rara), alteração da motilidade ocular.',
      atos:
        'Cirurgia dos músculos extraoculares sob anestesia geral. Recessão e/ou ressecção dos músculos afectados. ' +
        'Sutura ajustável no pós-operatório imediato (se indicada).',
      riscosNaoTratamento:
        'Manutenção do desvio com impacto estético, ambliopia progressiva e ausência de visão binocular.',
    },
  },
  {
    id: 'estrabismo-vertical',
    name: 'Cirurgia de Estrabismo Vertical',
    subspecialty: 'Estrabismo',
    aliases: ['estrabismo vertical', 'hipertropia', 'hipotropia', 'obliquo', 'musculo vertical'],
    fields: {
      diagnostico: 'Estrabismo vertical (hipertropia, hipotropia ou disfunção de músculo oblíquo) com indicação cirúrgica',
      descricao:
        'Cirurgia dos músculos extraoculares verticais (rectos superiores, inferiores e/ou oblíquos) ' +
        'por recessão, ressecção ou myectomia, para correcção do desvio vertical.',
      beneficios:
        'Correcção do desvio vertical com melhoria do alinhamento e eliminação da posição de cabeça compensatória. ' +
        'Melhoria da visão binocular em casos seleccionados.',
      riscos:
        'Diplopia, sobrecorrecção ou subcorrecção, cicatriz conjuntival, infecção, ' +
        'alteração da motilidade ocular, perfuração escleral.',
      atos:
        'Cirurgia dos músculos extraoculares verticais sob anestesia geral. ' +
        'Recessão/ressecção/myectomia conforme o tipo de disfunção.',
      riscosNaoTratamento:
        'Manutenção do desvio vertical com diplopia, posição viciosa de cabeça e impacto funcional e estético.',
    },
  },
  {
    id: 'toxina-botulinica-estrabismo',
    name: 'Toxina Botulínica no Estrabismo',
    subspecialty: 'Estrabismo',
    aliases: ['botox estrabismo', 'toxina botulinica', 'botulinica', 'injecao muscular', 'botulinum'],
    fields: {
      diagnostico: 'Estrabismo com indicação para tratamento com toxina botulínica como alternativa ou complemento à cirurgia',
      descricao:
        'Injecção de toxina botulínica tipo A no(s) músculo(s) extraocular(es) afectado(s) para paralisia temporária ' +
        'e reequilíbrio do alinhamento ocular. Realizado sob orientação electromiográfica ou ecográfica.',
      beneficios:
        'Correcção não cirúrgica do estrabismo. Procedimento reversível. ' +
        'Útil no estrabismo agudo, paralítico ou como complemento de cirurgia.',
      riscos:
        'Ptose transitória, diplopia transitória, sobrecorrecção, efeito limitado no tempo (3–4 meses), ' +
        'hematoma, necessidade de repetição.',
      atos:
        'Injecção electromioguidada de toxina botulínica tipo A no músculo extraocular. ' +
        'Anestesia tópica e sedação ligeira se necessário.',
      riscosNaoTratamento:
        'Manutenção do desvio ocular com impacto funcional, estético e risco de ambliopia.',
    },
  },
  {
    id: 'revisao-estrabismo',
    name: 'Revisão de Cirurgia de Estrabismo',
    subspecialty: 'Estrabismo',
    aliases: ['revisao estrabismo', 'reoperacao estrabismo', 'sobrecorreccao', 'subcorreccao'],
    fields: {
      diagnostico: 'Sobrecorrecção, subcorrecção ou recorrência de estrabismo após cirurgia prévia',
      descricao:
        'Cirurgia de revisão dos músculos extraoculares previamente operados para correcção de desvio residual ou recorrente. ' +
        'Tecnicamente mais exigente pela fibrose e aderências dos tecidos já intervencionados.',
      beneficios:
        'Melhoria do alinhamento ocular após resultado insatisfatório de cirurgia anterior.',
      riscos:
        'Maior risco de complicações que a cirurgia primária: perfuração escleral, isquemia do segmento anterior, ' +
        'cicatrização exuberante, resultados menos previsíveis, necessidade de nova reintervenção.',
      atos:
        'Revisão cirúrgica dos músculos extraoculares sob anestesia geral. ' +
        'Lise de aderências e reposicionamento muscular.',
      riscosNaoTratamento:
        'Manutenção do desvio residual com limitação funcional e estética.',
    },
  },
  {
    id: 'nistagmo-cirurgia',
    name: 'Cirurgia de Nistagmo (Procedimento de Kestenbaum)',
    subspecialty: 'Estrabismo',
    aliases: ['nistagmo', 'nystagmus', 'kestenbaum', 'anderson', 'posicao nula'],
    fields: {
      diagnostico: 'Nistagmo com posição de bloqueio excêntrica e posição viciosa de cabeça significativa',
      descricao:
        'Cirurgia de Anderson-Kestenbaum: transposição da posição nula do nistagmo para a posição primária ' +
        'por reposicionamento bilateral dos músculos horizontais, eliminando ou reduzindo a posição viciosa de cabeça.',
      beneficios:
        'Eliminação ou redução da posição viciosa de cabeça com melhoria funcional e estética. ' +
        'Possível melhoria da acuidade visual na posição primária.',
      riscos:
        'Sobrecorrecção ou subcorrecção, diplopia, alteração da motilidade ocular, infecção.',
      atos:
        'Recessão e ressecção bilateral dos músculos horizontais sob anestesia geral. ' +
        'Planeamento pré-operatório cuidadoso com medição do ângulo de desvio da cabeça.',
      riscosNaoTratamento:
        'Manutenção da posição viciosa de cabeça com impacto funcional, postural e estético.',
    },
  },
];

export default templates;
