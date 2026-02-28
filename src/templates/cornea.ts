import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'pkp',
    name: 'Queratoplastia Penetrante (PKP)',
    subspecialty: 'Córnea',
    aliases: ['pkp', 'transplante cornea', 'transplante corneal', 'queratoplastia penetrante', 'enxerto cornea'],
    fields: {
      diagnostico: 'Patologia corneal com indicação para queratoplastia penetrante (ceratocone, distrofia corneal, leucoma, descompensação endotelial)',
      descricao:
        'Queratoplastia penetrante: substituição de toda a espessura corneal doente por tecido dador saudável. ' +
        'A córnea receptora é excisada e substituída por um botão corneal do dador, suturado com fio de nylon 10/0.',
      beneficios:
        'Recuperação da transparência corneal e melhoria significativa da acuidade visual. ' +
        'Tratamento definitivo de patologias corneais que não respondem a terapêutica médica.',
      riscos:
        'Rejeição do enxerto, falência primária do enxerto, infecção, astigmatismo irregular elevado, ' +
        'deiscência de suturas, glaucoma, catarata, recorrência da doença original, perda de visão.',
      atos:
        'Queratoplastia penetrante com tecido do Banco de Olhos. Anestesia geral ou local. ' +
        'Imunossupressão tópica crónica no pós-operatório. Seguimento regular prolongado.',
      riscosNaoTratamento:
        'Progressão da opacificação corneal com perda irreversível de visão. ' +
        'Risco de perfuração corneal em casos de ulceração activa.',
    },
  },
  {
    id: 'dsaek',
    name: 'DSAEK',
    subspecialty: 'Córnea',
    aliases: ['dsaek', 'descemet stripping', 'transplante endotelio', 'endotelial', 'descompensacao corneal'],
    fields: {
      diagnostico: 'Falência endotelial corneal (distrofia de Fuchs, falência de enxerto, descompensação bullosa)',
      descricao:
        'Queratoplastia endotelial lamelar (DSAEK — Descemet Stripping Automated Endothelial Keratoplasty). ' +
        'Substituição selectiva das camadas endoteliais e estromais posteriores da córnea por tecido dador preparado com microcerátomo.',
      beneficios:
        'Recuperação visual mais rápida e estável que a PKP. Menor astigmatismo induzido. ' +
        'Incisão pequena com melhor segurança. Menor risco de rejeição que a queratoplastia penetrante.',
      riscos:
        'Deslocamento do enxerto (necessidade de rebubbling), rejeição, falência primária, ' +
        'glaucoma, catarata, infecção, perda de visão.',
      atos:
        'DSAEK com tecido do Banco de Olhos. Descemetorhexis e inserção do lentículo dador. ' +
        'Tamponamento com bolha de ar. Anestesia local com sedação.',
      riscosNaoTratamento:
        'Progressão da descompensação corneal com edema e baixa de visão irreversível. ' +
        'Dor e desconforto crescentes por edema epitelial bulloso.',
    },
  },
  {
    id: 'dmek',
    name: 'DMEK',
    subspecialty: 'Córnea',
    aliases: ['dmek', 'descemet membrane', 'membrana descemet', 'transplante endotelial puro'],
    fields: {
      diagnostico: 'Falência endotelial corneal com indicação para queratoplastia da membrana de Descemet',
      descricao:
        'Queratoplastia endotelial com transplante isolado da membrana de Descemet e endotélio (DMEK). ' +
        'Técnica mais selectiva que o DSAEK, com transplante de tecido de espessura mínima (10–15 µm).',
      beneficios:
        'Recuperação visual superior e mais rápida. Menor risco de rejeição que DSAEK e PKP. ' +
        'Excelente qualidade óptica. Tecido mínimo transplantado.',
      riscos:
        'Maior complexidade técnica, deslocamento do enxerto, rejeição, falência primária, ' +
        'necessidade de reintervenção, glaucoma, perda de visão.',
      atos:
        'DMEK com tecido do Banco de Olhos. Preparação e inserção da membrana de Descemet. ' +
        'Tamponamento com bolha de ar. Anestesia local com sedação.',
      riscosNaoTratamento:
        'Progressão da falência endotelial com perda visual e desconforto ocular crescentes.',
    },
  },
  {
    id: 'crosslinking',
    name: 'Crosslinking do Colagénio Corneal (CXL)',
    subspecialty: 'Córnea',
    aliases: ['cxl', 'crosslinking', 'cross linking', 'ceratocone progressivo', 'colageno corneal'],
    fields: {
      diagnostico: 'Ceratocone progressivo ou ectasia corneal pós-cirurgia refrativa',
      descricao:
        'Crosslinking do colagénio corneal por riboflavina e luz UVA (CXL). ' +
        'Instilação de riboflavina seguida de irradiação UVA para reforço das ligações covalentes do colagénio estromal, ' +
        'aumentando a rigidez biomecânica da córnea e travando a progressão ectásica.',
      beneficios:
        'Estabilização da ectasia corneal e prevenção da progressão para transplante. ' +
        'Possível melhoria topográfica. Procedimento minimamente invasivo.',
      riscos:
        'Dor pós-operatória, haze corneal, infecção, perda transitória de acuidade visual, ' +
        'raramente perda permanente de linhas de visão ou falência do procedimento.',
      atos:
        'Deepitelização e instilação de riboflavina 0,1%. Irradiação UVA 3 mW/cm² durante 30 minutos (protocolo padrão) ' +
        'ou protocolo acelerado. Lente de contacto terapêutica pós-operatória.',
      riscosNaoTratamento:
        'Progressão do ceratocone com necessidade futura de transplante corneal.',
    },
  },
  {
    id: 'icrs',
    name: 'Anéis Intraestromais (ICRS)',
    subspecialty: 'Córnea',
    aliases: ['icrs', 'keraring', 'intacs', 'ferrara', 'anel corneal', 'anel intraestromal'],
    fields: {
      diagnostico: 'Ceratocone com intolerância a lentes de contacto e acuidade visual insuficiente com óculos',
      descricao:
        'Implante de segmentos de anel intraestromal (ICRS) para regularização da curvatura corneal no ceratocone. ' +
        'Os túneis corneais são criados por laser de femtossegundo e os anéis de PMMA inseridos no estroma médio.',
      beneficios:
        'Regularização da topografia corneal com melhoria da acuidade visual e tolerância a lentes de contacto. ' +
        'Procedimento reversível. Pode retardar ou evitar o transplante corneal.',
      riscos:
        'Extrusão dos anéis, infecção, haze, perfuração corneal, migração, ' +
        'melhoria visual insuficiente, necessidade de remoção.',
      atos:
        'Criação de túneis por laser de femtossegundo e implante de ICRS. ' +
        'Anestesia tópica. Colírios antibióticos e anti-inflamatórios no pós-operatório.',
      riscosNaoTratamento:
        'Progressão do ceratocone com deterioração visual crescente e eventual necessidade de transplante corneal.',
    },
  },
  {
    id: 'pterígio',
    name: 'Excisão de Pterígio',
    subspecialty: 'Córnea',
    aliases: ['pterigio', 'pterígio', 'pinguécula', 'crescimento conjuntival'],
    fields: {
      diagnostico: 'Pterígio corneal com indicação cirúrgica (invasão do eixo visual, astigmatismo induzido, progressão ou queixas estéticas)',
      descricao:
        'Excisão cirúrgica do pterígio com enxerto conjuntival autólogo ou membrana amniótica para cobertura da área escleral exposta, ' +
        'com o objectivo de reduzir a taxa de recidiva.',
      beneficios:
        'Remoção do pterígio com melhoria visual e estética. ' +
        'Redução do astigmatismo induzido. Prevenção de progressão para o eixo visual.',
      riscos:
        'Recidiva (mais frequente sem enxerto), infecção, diplopia por restrição muscular, ' +
        'cicatriz conjuntival, perfuração escleral (rara).',
      atos:
        'Excisão do pterígio e enxerto conjuntival autólogo colado com adesivo de fibrina ou suturado. ' +
        'Anestesia tópica com infiltração local. Colírios anti-inflamatórios no pós-operatório.',
      riscosNaoTratamento:
        'Progressão do pterígio com invasão do eixo visual, astigmatismo crescente e baixa de visão.',
    },
  },
  {
    id: 'ptk',
    name: 'Queratectomia Fotorrefractiva Terapêutica (PTK)',
    subspecialty: 'Córnea',
    aliases: ['ptk', 'terapeutica laser', 'ablacao terapeutica', 'distrofia corneal superficial', 'erosao recorrente'],
    fields: {
      diagnostico: 'Distrofia corneal superficial, erosão epitelial recorrente ou opacidade corneal superficial com indicação para ablação por laser',
      descricao:
        'Ablação corneal superficial por laser excimer (PTK) para remoção de patologia do epitélio, membrana de Bowman ou estroma superficial. ' +
        'Regulariza a superfície corneal e elimina opacidades ou irregularidades superficiais.',
      beneficios:
        'Melhoria da acuidade visual, eliminação de dor por erosões recorrentes, regularização da superfície corneal.',
      riscos:
        'Haze corneal, indução de hipermetropia, recorrência da doença, infecção, ' +
        'dor pós-operatória, regressão visual.',
      atos:
        'Ablação por laser excimer sob anestesia tópica. Lente de contacto terapêutica pós-operatória. ' +
        'Colírios antibióticos e esteroides no pós-operatório.',
      riscosNaoTratamento:
        'Manutenção das queixas (dor, baixa de visão) com progressão das erosões ou opacidades.',
    },
  },
];

export default templates;
