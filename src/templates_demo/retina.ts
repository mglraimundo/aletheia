import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'ppv',
    name: 'Vitrectomia Pars Plana (PPV)',
    subspecialty: 'Retina',
    aliases: ['ppv', 'vitrectomia', 'vitreorretina', 'vitreo', 'pars plana'],
    fields: {
      diagnosis: 'Patologia vitreorretiniana com indicação para vitrectomia pars plana',
      description:
        'Vitrectomia pars plana (PPV): remoção do vítreo e tratamento cirúrgico da patologia retiniana associada. ' +
        'Realizada por microcânulas de 23G/25G/27G com instrumentação de alta velocidade.',
      benefits:
        'Tratamento de patologia retiniana grave com preservação ou recuperação da função visual. ' +
        'Acesso directo à cavidade vítrea para manobras cirúrgicas precisas.',
      risks:
        'Descolamento de retina, endoftalmite, hemorragia, catarata, glaucoma, ' +
        'membrana epirretiniana, recorrência da patologia, perda de visão.',
      alternatives:
        'PPV com instrumentação 23G/25G. Tamponamento com gás (SF6/C3F8) ou óleo de silicone conforme indicação. ' +
        'Anestesia local com sedação ou anestesia geral.',
      risksOfNoTreatment:
        'Progressão da patologia vitreorretiniana com perda permanente e irreversível de visão.',
    },
  },
  {
    id: 'buckle-escleral',
    name: 'Buckle Escleral (Cerclage)',
    subspecialty: 'Retina',
    aliases: ['buckle', 'cerclage', 'explante escleral', 'descolamento retina convencional', 'banda escleral'],
    fields: {
      diagnosis: 'Descolamento de retina regmatogéneo com indicação para cirurgia escleral',
      description:
        'Cirurgia de descolamento de retina por via escleral: indentação da esclera com banda ou esponja de silicone ' +
        'para encerramento das rotures retinianas, combinada com crioterapia e drenagem subretiniana conforme necessário.',
      benefits:
        'Reencostamento da retina com preservação da acomodação e ausência de catarata induzida. ' +
        'Alternativa eficaz à PPV em descolamentos seleccionados.',
      risks:
        'Diplopia por restrição muscular, elevação da pressão intraocular, infecção, extrusão do explante, ' +
        'oclusão vascular, falência do reencostamento retiniano, perda de visão.',
      alternatives:
        'Cirurgia escleral com banda/esponja de silicone, crioterapia e drenagem subretiniana. ' +
        'Anestesia local com sedação ou anestesia geral.',
      risksOfNoTreatment:
        'Progressão do descolamento de retina com perda visual permanente.',
    },
  },
  {
    id: 'injecao-intravitrea',
    name: 'Injecção Intravítrea (Anti-VEGF / Corticosteroide)',
    subspecialty: 'Retina',
    aliases: ['ivt', 'intravitrea', 'anti-vegf', 'avastin', 'lucentis', 'eylea', 'bevacizumab', 'ranibizumab', 'aflibercept', 'dme', 'dmla', 'oclusao venosa'],
    fields: {
      diagnosis: 'Patologia retiniana com indicação para injecção intravítrea (DMLA exsudativa, edema macular diabético, oclusão venosa retiniana)',
      description:
        'Injecção intravítrea de agente anti-VEGF (bevacizumab, ranibizumab, aflibercept, faricimab) ou corticosteroide ' +
        '(triancinolona, dexametasona — Ozurdex) para tratamento de patologia retiniana exsudativa.',
      benefits:
        'Estabilização ou melhoria da acuidade visual. Redução do edema macular e da atividade neovascular. ' +
        'Procedimento ambulatório minimamente invasivo.',
      risks:
        'Endoftalmite, descolamento de retina, hemorragia vítrea, aumento transitório da pressão intraocular, ' +
        'catarata (corticosteroide), dor ou desconforto ocular.',
      alternatives:
        'Injecção intravítrea em bloco ou sala de tratamentos com técnica asséptica. ' +
        'Colírio de povidona iodada pré-injecção. Controlo da pressão intraocular pós-procedimento. ' +
        'Tratamento mensal ou conforme protocolo (treat-and-extend).',
      risksOfNoTreatment:
        'Progressão da neovascularização ou edema macular com perda visual irreversível.',
    },
  },
  {
    id: 'laser-retina',
    name: 'Fotocoagulação Laser Retiniana',
    subspecialty: 'Retina',
    aliases: ['laser retina', 'fotocoagulação', 'fotocoagulacao', 'panfotocoagulacao', 'pfr', 'retinopatia diabetica laser'],
    fields: {
      diagnosis: 'Retinopatia diabética proliferativa, rotura retiniana, isquemia retiniana ou outra patologia retiniana com indicação para laser',
      description:
        'Fotocoagulação retiniana por laser argon ou díodo para tratamento de neovascularização, ' +
        'isquemia retiniana, rotures periféricas ou edema macular focal. ' +
        'Aplicação de queimaduras controladas para cicatrização e ablação de áreas isquémicas.',
      benefits:
        'Prevenção de progressão da retinopatia e neovascularização. Redução do risco de hemorragia vítrea. ' +
        'Tratamento de rotures para prevenir descolamento de retina.',
      risks:
        'Perda de campo visual periférico, diminuição da visão nocturna, edema macular, ' +
        'desconforto durante o procedimento, cicatrizes expansivas.',
      alternatives:
        'Fotocoagulação laser em lâmpada de fenda com lente de contacto. Anestesia tópica. ' +
        'Controlo com retinografia/OCT no seguimento.',
      risksOfNoTreatment:
        'Progressão da retinopatia com hemorragia vítrea, descolamento de retina por tracção ou neovascular, ' +
        'e perda grave de visão.',
    },
  },
  {
    id: 'membrana-epirretiniana',
    name: 'Membrana Epirretiniana (MER) / Pucker Macular',
    subspecialty: 'Retina',
    aliases: ['mer', 'membrana epirretiniana', 'pucker macular', 'epirretiniana', 'peeling membrana'],
    fields: {
      diagnosis: 'Membrana epirretiniana com metamorfopsia e baixa de acuidade visual com indicação cirúrgica',
      description:
        'Vitrectomia pars plana com peeling de membrana epirretiniana e eventual peeling de membrana limitante interna (MLI). ' +
        'Remoção cuidadosa da membrana que causa tracção e distorção macular.',
      benefits:
        'Melhoria da acuidade visual e redução da metamorfopsia. Recuperação da arquitectura macular normal.',
      risks:
        'Catarata, descolamento de retina, defeito do campo visual, infecção, recorrência da membrana, ' +
        'melhoria visual limitada ou perda adicional de visão.',
      alternatives:
        'PPV com peeling de MER e MLI sob visualização com corante (azul brilhante G). ' +
        'Tamponamento com gás ou ar. Anestesia local com sedação.',
      risksOfNoTreatment:
        'Progressão da metamorfopsia e deterioração da acuidade visual com distorção macular crónica.',
    },
  },
  {
    id: 'buraco-macular',
    name: 'Buraco Macular',
    subspecialty: 'Retina',
    aliases: ['buraco macular', 'macular hole', 'bm', 'mlh'],
    fields: {
      diagnosis: 'Buraco macular de espessura total com indicação cirúrgica',
      description:
        'Vitrectomia pars plana com peeling da membrana limitante interna (MLI) e tamponamento com gás de longa duração ' +
        '(SF6 ou C3F8) para encerramento do buraco macular.',
      benefits:
        'Encerramento do buraco macular com recuperação significativa da acuidade visual central em mais de 90% dos casos.',
      risks:
        'Catarata (muito frequente), descolamento de retina, infecção, recorrência do buraco, ' +
        'limitação de viagem aérea enquanto persiste a bolha de gás.',
      alternatives:
        'PPV com peeling de MLI com azul brilhante G e tamponamento com gás (SF6/C3F8). ' +
        'Posicionamento em decúbito ventral obrigatório no pós-operatório. Anestesia local com sedação.',
      risksOfNoTreatment:
        'Persistência ou alargamento do buraco macular com perda progressiva da visão central.',
    },
  },
  {
    id: 'oil-silicone',
    name: 'Remoção de Óleo de Silicone',
    subspecialty: 'Retina',
    aliases: ['oleo silicone', 'silicone oil', 'remocao silicone', 'silicone tamponamento'],
    fields: {
      diagnosis: 'Olho com óleo de silicone intravítreo após cirurgia retiniana prévia, com retina aplicada e indicação para remoção',
      description:
        'Vitrectomia pars plana para remoção do óleo de silicone intravítreo previamente utilizado como tamponamento retiniano.',
      benefits:
        'Eliminação das complicações do silicone a longo prazo (glaucoma, catarata, emulsificação). ' +
        'Melhoria da qualidade óptica e recuperação visual.',
      risks:
        'Recorrência do descolamento de retina, hemorragia, catarata, hipotonia, infecção.',
      alternatives:
        'PPV com extracção activa e passiva de óleo de silicone. ' +
        'Anestesia local com sedação ou geral conforme complexidade.',
      risksOfNoTreatment:
        'Emulsificação do silicone com glaucoma secundário, queratopatia e catarata progressiva.',
    },
  },
  {
    id: 'crioterapia-retina',
    name: 'Crioterapia Retiniana',
    subspecialty: 'Retina',
    aliases: ['crioterapia', 'cryo', 'criocirurgia retina', 'rotura periferica'],
    fields: {
      diagnosis: 'Rotura retiniana periférica, degenerescência retiniana com risco de descolamento ou patologia neovascular periférica',
      description:
        'Aplicação de crioterapia transescleral para selagem de rotures retinianas periféricas ou ablação de áreas degenerativas, ' +
        'criando uma aderência coriorretiniana cicatricial à volta da lesão.',
      benefits:
        'Prevenção do descolamento de retina por encerramento de rotures periféricas. ' +
        'Procedimento ambulatório, aplicável sem acesso intraocular.',
      risks:
        'Desconforto durante o procedimento, edema conjuntival transitório, descolamento coroideu, ' +
        'falência do encerramento da rotura.',
      alternatives:
        'Crioterapia transescleral sob visualização por oftalmoscópio binocular indirecto. ' +
        'Anestesia tópica com infiltração ou peribulbar.',
      risksOfNoTreatment:
        'Progressão para descolamento de retina com perda visual grave.',
    },
  },
];

export default templates;
