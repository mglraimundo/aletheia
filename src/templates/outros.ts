import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'remocao-corpo-estranho',
    name: 'Remoção de Corpo Estranho Ocular',
    subspecialty: 'Outros',
    aliases: ['corpo estranho', 'ce', 'corpo estranho intraocular', 'ceio', 'traumatismo ocular'],
    fields: {
      diagnostico: 'Corpo estranho ocular (corneal, subconjuntival ou intraocular) com indicação para remoção cirúrgica',
      descricao:
        'Remoção de corpo estranho ocular superficial (córnea, conjuntiva) sob lâmpada de fenda ' +
        'ou intraocular por via pars plana (PPV) conforme localização e natureza do corpo estranho.',
      beneficios:
        'Remoção do corpo estranho com prevenção de complicações infecciosas, inflamatórias e mecânicas.',
      riscos:
        'Infecção (endoftalmite), hemorragia, descolamento de retina, lesão do cristalino, perda de visão, ' +
        'necessidade de reintervenção, corpos estranhos múltiplos residuais.',
      atos:
        'Remoção do corpo estranho corneal/subconjuntival com agulha ou pinça sob biomicroscopia, ' +
        'ou via PPV para corpo estranho intraocular. Anestesia tópica ou local/geral conforme localização.',
      riscosNaoTratamento:
        'Progressão de infecção (endoftalmite), toxicidade ocular do material retido, ou dano mecânico progressivo.',
    },
  },
  {
    id: 'lavagem-camara-anterior',
    name: 'Lavagem / Irrigação da Câmara Anterior',
    subspecialty: 'Outros',
    aliases: ['lavagem ca', 'irrigacao camara anterior', 'hifema lavagem', 'hipopion lavagem', 'viscoelastico retido'],
    fields: {
      diagnostico: 'Hifema denso, hipopião, material viscoelástico retido ou outra patologia da câmara anterior com indicação para lavagem cirúrgica',
      descricao:
        'Irrigação e aspiração da câmara anterior por via paracentética para remoção de sangue, ' +
        'pus, viscoelástico retido ou outro material da câmara anterior.',
      beneficios:
        'Controlo da pressão intraocular, prevenção de sinéquias e complicações da câmara anterior.',
      riscos:
        'Infecção, hemorragia, lesão do endotélio corneal ou do cristalino, necessidade de reintervenção.',
      atos:
        'Paracentese e irrigação/aspiração da câmara anterior com cânula e solução balanceada. ' +
        'Anestesia tópica ou local conforme complexidade.',
      riscosNaoTratamento:
        'Progressão da patologia com sinéquias, hipertensão ocular, descompensação corneal ou recorrência.',
    },
  },
  {
    id: 'laser-capsulotomia-yag-posterior',
    name: 'Iridoplastia Laser (Gonioplastia)',
    subspecialty: 'Outros',
    aliases: ['iridoplastia', 'gonioplastia', 'laser iridoplastia', 'iris plateau', 'angulo estreito nao-pupilar'],
    fields: {
      diagnostico: 'Íris em plateau ou ângulo camerular estreito por mecanismo não-pupilar com indicação para iridoplastia laser',
      descricao:
        'Iridoplastia laser periférica (gonioplastia): aplicação de laser argon na íris periférica para contracção ' +
        'e retracção do estroma iridiano, abrindo o ângulo camerular por mecanismo não-pupilar.',
      beneficios:
        'Abertura do ângulo iridocorneal e prevenção de encerramento angular em casos de íris plateau. ' +
        'Procedimento complementar à iridotomia laser.',
      riscos:
        'Aumento transitório da pressão intraocular, inflamação anterior, sinéquias anteriores periféricas, ' +
        'atrofia iridiana.',
      atos:
        'Iridoplastia periférica com laser argon em lâmpada de fenda. ' +
        'Colírio hipotensor e anti-inflamatório pós-procedimento.',
      riscosNaoTratamento:
        'Risco de crises de encerramento angular com hipertensão ocular aguda e dano do nervo óptico.',
    },
  },
];

export default templates;
