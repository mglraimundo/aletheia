import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'ppv',
    name: 'Vitrectomia Pars Plana (PPV)',
    subspecialty: 'Retina',
    aliases: ['ppv', 'vitrectomia', 'vitreorretina', 'vitreo', 'pars plana'],
    fields: {
      diagnostico: 'Patologia vitreorretiniana com indicação para vitrectomia pars plana',
      descricao:
        'Vitrectomia pars plana (PPV): remoção do vítreo e tratamento cirúrgico da patologia retiniana associada. ' +
        'Realizada por microcânulas de 23G/25G/27G com instrumentação de alta velocidade.',
      beneficios:
        'Tratamento de patologia retiniana grave com preservação ou recuperação da função visual. ' +
        'Acesso directo à cavidade vítrea para manobras cirúrgicas precisas.',
      riscos:
        'Descolamento de retina, endoftalmite, hemorragia, catarata, glaucoma, ' +
        'membrana epirretiniana, recorrência da patologia, perda de visão.',
      atos:
        'PPV com instrumentação 23G/25G. Tamponamento com gás (SF6/C3F8) ou óleo de silicone conforme indicação. ' +
        'Anestesia local com sedação ou anestesia geral.',
      riscosNaoTratamento:
        'Progressão da patologia vitreorretiniana com perda permanente e irreversível de visão.',
    },
  },
  {
    id: 'buckle-escleral',
    name: 'Buckle Escleral (Cerclage)',
    subspecialty: 'Retina',
    aliases: ['buckle', 'cerclage', 'explante escleral', 'descolamento retina convencional', 'banda escleral'],
    fields: {
      diagnostico: 'Descolamento de retina regmatogéneo com indicação para cirurgia escleral',
      descricao:
        'Cirurgia de descolamento de retina por via escleral: indentação da esclera com banda ou esponja de silicone ' +
        'para encerramento das rotures retinianas, combinada com crioterapia e drenagem subretiniana conforme necessário.',
      beneficios:
        'Reencostamento da retina com preservação da acomodação e ausência de catarata induzida. ' +
        'Alternativa eficaz à PPV em descolamentos seleccionados.',
      riscos:
        'Diplopia por restrição muscular, elevação da pressão intraocular, infecção, extrusão do explante, ' +
        'oclusão vascular, falência do reencostamento retiniano, perda de visão.',
      atos:
        'Cirurgia escleral com banda/esponja de silicone, crioterapia e drenagem subretiniana. ' +
        'Anestesia local com sedação ou anestesia geral.',
      riscosNaoTratamento:
        'Progressão do descolamento de retina com perda visual permanente.',
    },
  },
  {
    id: 'injecao-intravitrea',
    name: 'Injecção Intravítrea (Anti-VEGF / Corticosteroide)',
    subspecialty: 'Retina',
    aliases: ['ivt', 'intravitrea', 'anti-vegf', 'avastin', 'lucentis', 'eylea', 'bevacizumab', 'ranibizumab', 'aflibercept', 'dme', 'dmla', 'oclusao venosa'],
    fields: {
      diagnostico: 'Patologia retiniana com indicação para injecção intravítrea (DMLA exsudativa, edema macular diabético, oclusão venosa retiniana)',
      descricao:
        'Injecção intravítrea de agente anti-VEGF (bevacizumab, ranibizumab, aflibercept, faricimab) ou corticosteroide ' +
        '(triancinolona, dexametasona — Ozurdex) para tratamento de patologia retiniana exsudativa.',
      beneficios:
        'Estabilização ou melhoria da acuidade visual. Redução do edema macular e da atividade neovascular. ' +
        'Procedimento ambulatório minimamente invasivo.',
      riscos:
        'Endoftalmite, descolamento de retina, hemorragia vítrea, aumento transitório da pressão intraocular, ' +
        'catarata (corticosteroide), dor ou desconforto ocular.',
      atos:
        'Injecção intravítrea em bloco ou sala de tratamentos com técnica asséptica. ' +
        'Colírio de povidona iodada pré-injecção. Controlo da pressão intraocular pós-procedimento. ' +
        'Tratamento mensal ou conforme protocolo (treat-and-extend).',
      riscosNaoTratamento:
        'Progressão da neovascularização ou edema macular com perda visual irreversível.',
    },
  },
  {
    id: 'laser-retina',
    name: 'Fotocoagulação Laser Retiniana',
    subspecialty: 'Retina',
    aliases: ['laser retina', 'fotocoagulação', 'fotocoagulacao', 'panfotocoagulacao', 'pfr', 'retinopatia diabetica laser'],
    fields: {
      diagnostico: 'Retinopatia diabética proliferativa, rotura retiniana, isquemia retiniana ou outra patologia retiniana com indicação para laser',
      descricao:
        'Fotocoagulação retiniana por laser argon ou díodo para tratamento de neovascularização, ' +
        'isquemia retiniana, rotures periféricas ou edema macular focal. ' +
        'Aplicação de queimaduras controladas para cicatrização e ablação de áreas isquémicas.',
      beneficios:
        'Prevenção de progressão da retinopatia e neovascularização. Redução do risco de hemorragia vítrea. ' +
        'Tratamento de rotures para prevenir descolamento de retina.',
      riscos:
        'Perda de campo visual periférico, diminuição da visão nocturna, edema macular, ' +
        'desconforto durante o procedimento, cicatrizes expansivas.',
      atos:
        'Fotocoagulação laser em lâmpada de fenda com lente de contacto. Anestesia tópica. ' +
        'Controlo com retinografia/OCT no seguimento.',
      riscosNaoTratamento:
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
      diagnostico: 'Membrana epirretiniana com metamorfopsia e baixa de acuidade visual com indicação cirúrgica',
      descricao:
        'Vitrectomia pars plana com peeling de membrana epirretiniana e eventual peeling de membrana limitante interna (MLI). ' +
        'Remoção cuidadosa da membrana que causa tracção e distorção macular.',
      beneficios:
        'Melhoria da acuidade visual e redução da metamorfopsia. Recuperação da arquitectura macular normal.',
      riscos:
        'Catarata, descolamento de retina, defeito do campo visual, infecção, recorrência da membrana, ' +
        'melhoria visual limitada ou perda adicional de visão.',
      atos:
        'PPV com peeling de MER e MLI sob visualização com corante (azul brilhante G). ' +
        'Tamponamento com gás ou ar. Anestesia local com sedação.',
      riscosNaoTratamento:
        'Progressão da metamorfopsia e deterioração da acuidade visual com distorção macular crónica.',
    },
  },
  {
    id: 'buraco-macular',
    name: 'Buraco Macular',
    subspecialty: 'Retina',
    aliases: ['buraco macular', 'macular hole', 'bm', 'mlh'],
    fields: {
      diagnostico: 'Buraco macular de espessura total com indicação cirúrgica',
      descricao:
        'Vitrectomia pars plana com peeling da membrana limitante interna (MLI) e tamponamento com gás de longa duração ' +
        '(SF6 ou C3F8) para encerramento do buraco macular.',
      beneficios:
        'Encerramento do buraco macular com recuperação significativa da acuidade visual central em mais de 90% dos casos.',
      riscos:
        'Catarata (muito frequente), descolamento de retina, infecção, recorrência do buraco, ' +
        'limitação de viagem aérea enquanto persiste a bolha de gás.',
      atos:
        'PPV com peeling de MLI com azul brilhante G e tamponamento com gás (SF6/C3F8). ' +
        'Posicionamento em decúbito ventral obrigatório no pós-operatório. Anestesia local com sedação.',
      riscosNaoTratamento:
        'Persistência ou alargamento do buraco macular com perda progressiva da visão central.',
    },
  },
  {
    id: 'oil-silicone',
    name: 'Remoção de Óleo de Silicone',
    subspecialty: 'Retina',
    aliases: ['oleo silicone', 'silicone oil', 'remocao silicone', 'silicone tamponamento'],
    fields: {
      diagnostico: 'Olho com óleo de silicone intravítreo após cirurgia retiniana prévia, com retina aplicada e indicação para remoção',
      descricao:
        'Vitrectomia pars plana para remoção do óleo de silicone intravítreo previamente utilizado como tamponamento retiniano.',
      beneficios:
        'Eliminação das complicações do silicone a longo prazo (glaucoma, catarata, emulsificação). ' +
        'Melhoria da qualidade óptica e recuperação visual.',
      riscos:
        'Recorrência do descolamento de retina, hemorragia, catarata, hipotonia, infecção.',
      atos:
        'PPV com extracção activa e passiva de óleo de silicone. ' +
        'Anestesia local com sedação ou geral conforme complexidade.',
      riscosNaoTratamento:
        'Emulsificação do silicone com glaucoma secundário, queratopatia e catarata progressiva.',
    },
  },
  {
    id: 'crioterapia-retina',
    name: 'Crioterapia Retiniana',
    subspecialty: 'Retina',
    aliases: ['crioterapia', 'cryo', 'criocirurgia retina', 'rotura periferica'],
    fields: {
      diagnostico: 'Rotura retiniana periférica, degenerescência retiniana com risco de descolamento ou patologia neovascular periférica',
      descricao:
        'Aplicação de crioterapia transescleral para selagem de rotures retinianas periféricas ou ablação de áreas degenerativas, ' +
        'criando uma aderência coriorretiniana cicatricial à volta da lesão.',
      beneficios:
        'Prevenção do descolamento de retina por encerramento de rotures periféricas. ' +
        'Procedimento ambulatório, aplicável sem acesso intraocular.',
      riscos:
        'Desconforto durante o procedimento, edema conjuntival transitório, descolamento coroideu, ' +
        'falência do encerramento da rotura.',
      atos:
        'Crioterapia transescleral sob visualização por oftalmoscópio binocular indirecto. ' +
        'Anestesia tópica com infiltração ou peribulbar.',
      riscosNaoTratamento:
        'Progressão para descolamento de retina com perda visual grave.',
    },
  },
];

export default templates;
