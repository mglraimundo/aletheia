import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'facoemulsificacao',
    name: 'Facoemulsificação (Catarata)',
    subspecialty: 'CIR',
    aliases: ['faco', 'phaco', 'catarata', 'cata', 'cristalino', 'lio', 'lente intraocular'],
    fields: {
      diagnosis: 'Catarata',
      description:
        'Cirurgia de facoemulsificação com implante de lente intraocular (LIO). ' +
        'Consiste na remoção do cristalino opacificado por ultrassom através de uma incisão de pequenas dimensões, ' +
        'seguida da implantação de uma lente artificial no saco capsular.',
      benefits:
        'Recuperação da acuidade visual. Melhoria da qualidade de vida e autonomia nas atividades diárias. ' +
        'Possível redução ou eliminação da dependência de óculos, dependendo da lente escolhida.',
      risks:
        'Infecção intraocular (endoftalmite), hemorragia, descolamento da retina, edema macular cistóide, ' +
        'opacificação da cápsula posterior, luxação da lente intraocular, aumento da pressão intraocular, ' +
        'perda de visão (rara). Anestesia local: reação alérgica, hemorragia retrobulbar.',
      alternatives:
        'Facoemulsificação com implante de lente intraocular monofocal, multifocal ou tórica. ' +
        'Anestesia tópica ou local (peribulbar/retrobulbar). Medicação pré e pós-operatória.',
      risksOfNoTreatment:
        'Progressão da catarata com perda progressiva de visão, podendo evoluir para cegueira funcional. ' +
        'Risco de glaucoma facomórfico ou facolítico em casos avançados.',
    },
  },
  {
    id: 'icl',
    name: 'ICL (Lente Fáquica)',
    subspecialty: 'CIR',
    aliases: ['lente facica', 'lente fáquica', 'implantable collamer', 'visian', 'miopia', 'hipermetropia', 'astigmatismo', 'refrativa'],
    fields: {
      diagnosis: 'Ametropia (miopia, hipermetropia e/ou astigmatismo) com indicação para implante de lente fáquica ICL',
      description:
        'Implante de lente fáquica de câmara posterior (ICL — Implantable Collamer Lens) para correcção de ametropia. ' +
        'A lente é colocada entre a íris e o cristalino através de uma microincisão, sem remoção de tecido ocular.',
      benefits:
        'Correcção de ametropias elevadas não adequadas para laser. Procedimento reversível. ' +
        'Excelente qualidade visual com manutenção da acomodação. Recuperação visual rápida.',
      risks:
        'Aumento da pressão intraocular, catarata subcapsular anterior, endoftalmite, descolamento da retina, ' +
        'perda de células endoteliais da córnea, halos e glare nocturnos, descentração da lente. ' +
        'Necessidade de reintervenção.',
      alternatives:
        'Iridotomia laser pré-operatória (se indicada). Implante de lente ICL sob anestesia tópica ou local. ' +
        'Seguimento com controlo da pressão intraocular e contagem de células endoteliais.',
      risksOfNoTreatment:
        'Manutenção da ametropia com dependência de óculos ou lentes de contacto. ' +
        'Sem risco imediato para a integridade ocular, mas com limitação funcional significativa.',
    },
  },
  {
    id: 'lasik',
    name: 'LASIK',
    subspecialty: 'CIR',
    aliases: ['laser', 'excimer', 'miopia laser', 'refrativa laser'],
    fields: {
      diagnosis: 'Ametropia (miopia, hipermetropia e/ou astigmatismo) com indicação para cirurgia refrativa corneal por laser',
      description:
        'Cirurgia refrativa por laser excimer com criação de flap corneal por microcerátomo ou femtossegundo (LASIK). ' +
        'O flap é levantado e o laser remodelar o estroma corneal para corrigir a ametropia, sendo o flap reposicionado no final.',
      benefits:
        'Correcção rápida e eficaz da ametropia com recuperação visual imediata. ' +
        'Redução ou eliminação da dependência de óculos ou lentes de contacto. Procedimento bem estabelecido e seguro.',
      risks:
        'Complicações do flap (deslocamento, estrias, crescimento epitelial), ectasia corneal, ' +
        'olho seco, halos e glare nocturnos, infecção, subCorrecção ou sobrecorrecção, regressão refrativa.',
      alternatives:
        'Criação de flap corneal por femtossegundo e fotoablação por laser excimer. ' +
        'Anestesia tópica. Colírios antibióticos e anti-inflamatórios no pós-operatório.',
      risksOfNoTreatment:
        'Manutenção da ametropia com necessidade de óculos ou lentes de contacto. ' +
        'Sem risco para a integridade ocular a curto prazo.',
    },
  },
  {
    id: 'prk',
    name: 'PRK / LASEK',
    subspecialty: 'CIR',
    aliases: ['prk', 'lasek', 'surface ablation', 'ablação de superfície', 'transepithelial'],
    fields: {
      diagnosis: 'Ametropia com indicação para ablação de superfície corneal por laser excimer',
      description:
        'Cirurgia refrativa por ablação de superfície corneal (PRK/LASEK). Remoção ou deslocamento do epitélio corneal ' +
        'seguido de fotoablação do estroma superficial por laser excimer, sem criação de flap.',
      benefits:
        'Correcção eficaz da ametropia. Indicada quando o LASIK não é possível (córnea fina, irregularidades). ' +
        'Sem risco de complicações de flap. Resultado refractivo comparável ao LASIK a longo prazo.',
      risks:
        'Dor pós-operatória (primeiros dias), recuperação visual mais lenta que o LASIK, ' +
        'haze corneal, infecção, subCorrecção ou sobrecorrecção, halos e glare nocturnos, ectasia (rara).',
      alternatives:
        'Remoção epitelial mecânica ou por laser. Fotoablação por laser excimer. ' +
        'Lente de contacto terapêutica no pós-operatório imediato. Colírios anti-inflamatórios esteroide por vários meses.',
      risksOfNoTreatment:
        'Manutenção da ametropia com necessidade de compensação óptica. Sem progressão de risco ocular.',
    },
  },
  {
    id: 'smile',
    name: 'SMILE',
    subspecialty: 'CIR',
    aliases: ['smile', 'lenticule', 'lenticulo', 'visumax', 'femto refrativa'],
    fields: {
      diagnosis: 'Miopia com ou sem astigmatismo com indicação para cirurgia refrativa por extracção de lentículo',
      description:
        'Cirurgia refrativa minimamente invasiva por laser de femtossegundo (SMILE — Small Incision Lenticule Extraction). ' +
        'Um lentículo intraestromal é esculpido pelo laser e removido através de uma pequena incisão, sem criação de flap.',
      benefits:
        'Ausência de flap, menor perturbação da inervação corneal, menor síndrome de olho seco pós-operatório. ' +
        'Recuperação visual rápida. Estabilidade biomecânica corneal superior.',
      risks:
        'Dificuldade na remoção do lentículo, descentração, subCorrecção ou sobrecorrecção, ' +
        'halos e glare, infecção, ectasia corneal (rara).',
      alternatives:
        'Escultura e extracção de lentículo intraestromal por laser de femtossegundo. ' +
        'Anestesia tópica. Colírios antibióticos e lubrificantes no pós-operatório.',
      risksOfNoTreatment:
        'Manutenção da miopia com necessidade de compensação óptica. Sem risco ocular acrescido.',
    },
  },
  {
    id: 'rle',
    name: 'Troca de Cristalino Refrativa (RLE)',
    subspecialty: 'CIR',
    aliases: ['rle', 'cls', 'troca de cristalino', 'lensectomia refrativa', 'presbicia cirurgia'],
    fields: {
      diagnosis: 'Ametropia elevada ou presbicia com indicação para extracção de cristalino transparente e implante de LIO',
      description:
        'Extracção do cristalino transparente por facoemulsificação com implante de lente intraocular de design avançado ' +
        '(multifocal, EDOF ou acomodativa) para correcção de ametropia e/ou presbicia.',
      benefits:
        'Correcção de ametropias extremas não tratáveis por laser. Eliminação do risco futuro de catarata. ' +
        'Possível independência de óculos para longe e perto com LIO premium.',
      risks:
        'Descolamento de retina (risco aumentado em míopes altos), endoftalmite, edema macular cistóide, ' +
        'opacificação capsular posterior, fenómenos ópticos (halos, glare), perda de acomodação definitiva.',
      alternatives:
        'Facoemulsificação com implante de LIO premium (multifocal/EDOF). ' +
        'Anestesia tópica ou local. Biometria óptica pré-operatória para cálculo da LIO.',
      risksOfNoTreatment:
        'Manutenção da ametropia com dependência de óculos ou lentes de contacto. ' +
        'Progressão natural para catarata com o envelhecimento.',
    },
  },
  {
    id: 'troca-lio',
    name: 'Troca / Reposicionamento de LIO',
    subspecialty: 'CIR',
    aliases: ['explante', 'explantação', 'reposicionamento', 'luxação lio', 'lio descentrada'],
    fields: {
      diagnosis: 'Lente intraocular descentrada, luxada ou inadequada com indicação para troca ou reposicionamento',
      description:
        'Remoção ou reposicionamento cirúrgico de lente intraocular previamente implantada. ' +
        'Pode implicar suturação escleral ou encravamento iridiano para fixação da nova LIO.',
      benefits:
        'Correcção de erro refractivo residual, diplopia ou perturbações visuais causadas pela LIO disfuncional. ' +
        'Melhoria da qualidade visual e conforto do doente.',
      risks:
        'Endoftalmite, hemorragia, descolamento de retina, edema macular, lesão corneal, ' +
        'perda de visão, necessidade de nova reintervenção.',
      alternatives:
        'Vitrectomia anterior e/ou posterior conforme necessário. Explante e implante de nova LIO. ' +
        'Anestesia local com sedação ou geral conforme complexidade.',
      risksOfNoTreatment:
        'Manutenção das queixas visuais com diplopia, halos, baixa de acuidade visual ou desequilíbrio refractivo.',
    },
  },
  {
    id: 'capsulotomia-yag',
    name: 'Capsulotomia YAG',
    subspecialty: 'CIR',
    aliases: ['yag', 'capsulotomia', 'opacificação capsular', 'ocp', 'after cataract'],
    fields: {
      diagnosis: 'Opacificação da cápsula posterior após cirurgia de catarata',
      description:
        'Capsulotomia posterior por laser Nd:YAG para tratamento da opacificação capsular posterior. ' +
        'Realizada em ambulatório, consiste na criação de uma abertura na cápsula posterior opacificada com pulsos de laser.',
      benefits:
        'Recuperação imediata e indolor da acuidade visual. Procedimento ambulatório sem necessidade de incisão.',
      risks:
        'Aumento transitório da pressão intraocular, deslocamento ou dano da LIO, ' +
        'descolamento de retina (raro), edema macular cistóide.',
      alternatives:
        'Capsulotomia posterior por laser Nd:YAG em lâmpada de fenda. ' +
        'Colírio hipotensor e anti-inflamatório pós-procedimento. Controlo da pressão intraocular.',
      risksOfNoTreatment:
        'Manutenção da baixa de visão por opacificação capsular progressiva.',
    },
  }
];

export default templates;
