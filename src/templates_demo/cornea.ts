import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'pkp',
    name: 'Queratoplastia Penetrante (PKP)',
    subspecialty: 'Córnea',
    aliases: ['pkp', 'transplante cornea', 'transplante corneal', 'queratoplastia penetrante', 'enxerto cornea'],
    fields: {
      diagnosis: 'Patologia corneal com indicação para queratoplastia penetrante (ceratocone, distrofia corneal, leucoma, descompensação endotelial)',
      description:
        'Queratoplastia penetrante: substituição de toda a espessura corneal doente por tecido dador saudável. ' +
        'A córnea receptora é excisada e substituída por um botão corneal do dador, suturado com fio de nylon 10/0.',
      benefits:
        'Recuperação da transparência corneal e melhoria significativa da acuidade visual. ' +
        'Tratamento definitivo de patologias corneais que não respondem a terapêutica médica.',
      risks:
        'Rejeição do enxerto, falência primária do enxerto, infecção, astigmatismo irregular elevado, ' +
        'deiscência de suturas, glaucoma, catarata, recorrência da doença original, perda de visão.',
      alternatives:
        'Queratoplastia penetrante com tecido do Banco de Olhos. Anestesia geral ou local. ' +
        'Imunossupressão tópica crónica no pós-operatório. Seguimento regular prolongado.',
      risksOfNoTreatment:
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
      diagnosis: 'Falência endotelial corneal (distrofia de Fuchs, falência de enxerto, descompensação bullosa)',
      description:
        'Queratoplastia endotelial lamelar (DSAEK — Descemet Stripping Automated Endothelial Keratoplasty). ' +
        'Substituição selectiva das camadas endoteliais e estromais posteriores da córnea por tecido dador preparado com microcerátomo.',
      benefits:
        'Recuperação visual mais rápida e estável que a PKP. Menor astigmatismo induzido. ' +
        'Incisão pequena com melhor segurança. Menor risco de rejeição que a queratoplastia penetrante.',
      risks:
        'Deslocamento do enxerto (necessidade de rebubbling), rejeição, falência primária, ' +
        'glaucoma, catarata, infecção, perda de visão.',
      alternatives:
        'DSAEK com tecido do Banco de Olhos. Descemetorhexis e inserção do lentículo dador. ' +
        'Tamponamento com bolha de ar. Anestesia local com sedação.',
      risksOfNoTreatment:
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
      diagnosis: 'Falência endotelial corneal com indicação para queratoplastia da membrana de Descemet',
      description:
        'Queratoplastia endotelial com transplante isolado da membrana de Descemet e endotélio (DMEK). ' +
        'Técnica mais selectiva que o DSAEK, com transplante de tecido de espessura mínima (10–15 µm).',
      benefits:
        'Recuperação visual superior e mais rápida. Menor risco de rejeição que DSAEK e PKP. ' +
        'Excelente qualidade óptica. Tecido mínimo transplantado.',
      risks:
        'Maior complexidade técnica, deslocamento do enxerto, rejeição, falência primária, ' +
        'necessidade de reintervenção, glaucoma, perda de visão.',
      alternatives:
        'DMEK com tecido do Banco de Olhos. Preparação e inserção da membrana de Descemet. ' +
        'Tamponamento com bolha de ar. Anestesia local com sedação.',
      risksOfNoTreatment:
        'Progressão da falência endotelial com perda visual e desconforto ocular crescentes.',
    },
  },
  {
    id: 'crosslinking',
    name: 'Crosslinking do Colagénio Corneal (CXL)',
    subspecialty: 'Córnea',
    aliases: ['cxl', 'crosslinking', 'cross linking', 'ceratocone progressivo', 'colageno corneal'],
    fields: {
      diagnosis: 'Ceratocone progressivo ou ectasia corneal pós-cirurgia refrativa',
      description:
        'Crosslinking do colagénio corneal por riboflavina e luz UVA (CXL). ' +
        'Instilação de riboflavina seguida de irradiação UVA para reforço das ligações covalentes do colagénio estromal, ' +
        'aumentando a rigidez biomecânica da córnea e travando a progressão ectásica.',
      benefits:
        'Estabilização da ectasia corneal e prevenção da progressão para transplante. ' +
        'Possível melhoria topográfica. Procedimento minimamente invasivo.',
      risks:
        'Dor pós-operatória, haze corneal, infecção, perda transitória de acuidade visual, ' +
        'raramente perda permanente de linhas de visão ou falência do procedimento.',
      alternatives:
        'Deepitelização e instilação de riboflavina 0,1%. Irradiação UVA 3 mW/cm² durante 30 minutos (protocolo padrão) ' +
        'ou protocolo acelerado. Lente de contacto terapêutica pós-operatória.',
      risksOfNoTreatment:
        'Progressão do ceratocone com necessidade futura de transplante corneal.',
    },
  },
  {
    id: 'icrs',
    name: 'Anéis Intraestromais (ICRS)',
    subspecialty: 'Córnea',
    aliases: ['icrs', 'keraring', 'intacs', 'ferrara', 'anel corneal', 'anel intraestromal'],
    fields: {
      diagnosis: 'Ceratocone com intolerância a lentes de contacto e acuidade visual insuficiente com óculos',
      description:
        'Implante de segmentos de anel intraestromal (ICRS) para regularização da curvatura corneal no ceratocone. ' +
        'Os túneis corneais são criados por laser de femtossegundo e os anéis de PMMA inseridos no estroma médio.',
      benefits:
        'Regularização da topografia corneal com melhoria da acuidade visual e tolerância a lentes de contacto. ' +
        'Procedimento reversível. Pode retardar ou evitar o transplante corneal.',
      risks:
        'Extrusão dos anéis, infecção, haze, perfuração corneal, migração, ' +
        'melhoria visual insuficiente, necessidade de remoção.',
      alternatives:
        'Criação de túneis por laser de femtossegundo e implante de ICRS. ' +
        'Anestesia tópica. Colírios antibióticos e anti-inflamatórios no pós-operatório.',
      risksOfNoTreatment:
        'Progressão do ceratocone com deterioração visual crescente e eventual necessidade de transplante corneal.',
    },
  },
  {
    id: 'pterígio',
    name: 'Excisão de Pterígio',
    subspecialty: 'Córnea',
    aliases: ['pterigio', 'pterígio', 'pinguécula', 'crescimento conjuntival'],
    fields: {
      diagnosis: 'Pterígio corneal com indicação cirúrgica (invasão do eixo visual, astigmatismo induzido, progressão ou queixas estéticas)',
      description:
        'Excisão cirúrgica do pterígio com enxerto conjuntival autólogo ou membrana amniótica para cobertura da área escleral exposta, ' +
        'com o objectivo de reduzir a taxa de recidiva.',
      benefits:
        'Remoção do pterígio com melhoria visual e estética. ' +
        'Redução do astigmatismo induzido. Prevenção de progressão para o eixo visual.',
      risks:
        'Recidiva (mais frequente sem enxerto), infecção, diplopia por restrição muscular, ' +
        'cicatriz conjuntival, perfuração escleral (rara).',
      alternatives:
        'Excisão do pterígio e enxerto conjuntival autólogo colado com adesivo de fibrina ou suturado. ' +
        'Anestesia tópica com infiltração local. Colírios anti-inflamatórios no pós-operatório.',
      risksOfNoTreatment:
        'Progressão do pterígio com invasão do eixo visual, astigmatismo crescente e baixa de visão.',
    },
  },
  {
    id: 'ptk',
    name: 'Queratectomia Fotorrefractiva Terapêutica (PTK)',
    subspecialty: 'Córnea',
    aliases: ['ptk', 'terapeutica laser', 'ablacao terapeutica', 'distrofia corneal superficial', 'erosao recorrente'],
    fields: {
      diagnosis: 'Distrofia corneal superficial, erosão epitelial recorrente ou opacidade corneal superficial com indicação para ablação por laser',
      description:
        'Ablação corneal superficial por laser excimer (PTK) para remoção de patologia do epitélio, membrana de Bowman ou estroma superficial. ' +
        'Regulariza a superfície corneal e elimina opacidades ou irregularidades superficiais.',
      benefits:
        'Melhoria da acuidade visual, eliminação de dor por erosões recorrentes, regularização da superfície corneal.',
      risks:
        'Haze corneal, indução de hipermetropia, recorrência da doença, infecção, ' +
        'dor pós-operatória, regressão visual.',
      alternatives:
        'Ablação por laser excimer sob anestesia tópica. Lente de contacto terapêutica pós-operatória. ' +
        'Colírios antibióticos e esteroides no pós-operatório.',
      risksOfNoTreatment:
        'Manutenção das queixas (dor, baixa de visão) com progressão das erosões ou opacidades.',
    },
  },
];

export default templates;
