import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'trabeculectomia',
    name: 'Trabeculectomia',
    subspecialty: 'Glaucoma',
    aliases: ['trabe', 'trabeculo', 'filtrante', 'filtragem', 'ampola', 'mmc', 'mitomicina', '5fu', 'pressao intraocular', 'pio'],
    fields: {
      diagnostico: 'Glaucoma com pressão intraocular não controlada sob terapêutica médica máxima tolerada',
      descricao:
        'Trabeculectomia: cirurgia filtrante do glaucoma. Criação de uma fístula escleral protegida por uma ampola ' +
        'de filtração subconjuntival, permitindo a drenagem controlada do humor aquoso e redução da pressão intraocular. ' +
        'Realizada sob anestesia local com eventual sedação.',
      beneficios:
        'Redução significativa e sustentada da pressão intraocular. ' +
        'Abrandamento ou paragem da progressão do glaucoma e da perda de campo visual. ' +
        'Possível redução ou eliminação de colírios hipotensores.',
      riscos:
        'Hipotonia ocular, endoftalmite, falência da ampola, catarata, descolamento coroideu, ' +
        'hemorragia supracoroideia, diplopia, perda de visão. Necessidade de revisão cirúrgica ou ' +
        'injecções de 5-fluorouracilo/mitomicina C no pós-operatório.',
      atos:
        'Trabeculectomia com ou sem antimetabolito (mitomicina C ou 5-fluorouracilo). ' +
        'Anestesia local (peribulbar/subtenoniana) com sedação monitorizada. ' +
        'Seguimento pós-operatório intensivo com possível suturolise a laser.',
      riscosNaoTratamento:
        'Progressão irreversível do glaucoma com perda de campo visual e eventual cegueira. ' +
        'Agravamento progressivo apesar da terapêutica médica máxima.',
    },
  },
  {
    id: 'slt',
    name: 'Trabeculoplastia Laser Selectiva (SLT)',
    subspecialty: 'Glaucoma',
    aliases: ['slt', 'trabeculoplastia', 'laser glaucoma', 'laser trabecular'],
    fields: {
      diagnostico: 'Glaucoma de ângulo aberto ou hipertensão ocular com indicação para trabeculoplastia laser',
      descricao:
        'Trabeculoplastia Laser Selectiva (SLT): aplicação de laser Nd:YAG de dupla frequência sobre o trabéculo ' +
        'para estimular a fagocitose e melhorar a drenagem do humor aquoso, reduzindo a pressão intraocular.',
      beneficios:
        'Redução da pressão intraocular sem intervenção cirúrgica. Procedimento ambulatório, repetível. ' +
        'Pode reduzir a necessidade de colírios hipotensores.',
      riscos:
        'Aumento transitório da pressão intraocular nas primeiras horas, inflamação anterior, ' +
        'eficácia que pode diminuir ao longo do tempo, necessidade de repetição.',
      atos:
        'SLT em lâmpada de fenda com lente de goniolaser. Colírio anti-inflamatório e hipotensor pós-procedimento. ' +
        'Controlo da pressão intraocular após 1 hora.',
      riscosNaoTratamento:
        'Progressão do glaucoma com perda de campo visual e possível necessidade de cirurgia.',
    },
  },
  {
    id: 'iridotomia-laser',
    name: 'Iridotomia Laser (LPI)',
    subspecialty: 'Glaucoma',
    aliases: ['iridotomia', 'lpi', 'laser iridotomia', 'angulo fechado', 'glaucoma agudo', 'fechamento angular'],
    fields: {
      diagnostico: 'Glaucoma de ângulo fechado, ângulo estreito ou suspeita de bloqueio pupilar',
      descricao:
        'Iridotomia periférica por laser Nd:YAG: criação de uma abertura na periferia da íris para equalizar a pressão ' +
        'entre câmara anterior e posterior, eliminando o bloqueio pupilar e abrindo o ângulo iridocorneal.',
      beneficios:
        'Prevenção e tratamento do glaucoma de ângulo fechado por bloqueio pupilar. Procedimento ambulatório rápido. ' +
        'Elimina o risco de crises agudas de glaucoma.',
      riscos:
        'Hemorragia iridiana transitória, aumento transitório da pressão intraocular, inflamação, ' +
        'diplopia ou halos por posicionamento da iridotomia, encerramento da iridotomia.',
      atos:
        'Iridotomia periférica por laser Nd:YAG em lâmpada de fenda. ' +
        'Colírio hipotensor e anti-inflamatório pós-procedimento.',
      riscosNaoTratamento:
        'Risco de crise aguda de glaucoma com dor, baixa de visão súbita e dano irreversível do nervo óptico.',
    },
  },
  {
    id: 'ahmed',
    name: 'Implante de Dispositivo de Drenagem (Válvula de Ahmed)',
    subspecialty: 'Glaucoma',
    aliases: ['ahmed', 'baerveldt', 'valvula', 'tubo', 'shunt', 'dispositivo drenagem', 'glaucoma refractario'],
    fields: {
      diagnostico: 'Glaucoma refractário com falência ou contraindicação para trabeculectomia',
      descricao:
        'Implante de dispositivo de drenagem do humor aquoso (válvula de Ahmed ou similar). ' +
        'Um tubo é inserido na câmara anterior e conectado a um reservatório subconjuntival equatorial ' +
        'para controlo da pressão intraocular.',
      beneficios:
        'Controlo da pressão intraocular em glaucomas complexos e refractários. ' +
        'Alternativa eficaz após falência de cirurgia filtrante prévia.',
      riscos:
        'Hipotonia, diplopia por restrição muscular, erosão da superfície ocular pelo tubo, ' +
        'endoftalmite, descompensação corneal, encapsulamento do reservatório, perda de visão.',
      atos:
        'Implante de válvula de Ahmed sob anestesia local com sedação ou anestesia geral. ' +
        'Seguimento pós-operatório regular com controlo tensional.',
      riscosNaoTratamento:
        'Progressão do glaucoma refractário com perda irreversível de campo visual e cegueira.',
    },
  },
  {
    id: 'istent',
    name: 'Cirurgia Minimamente Invasiva do Glaucoma (MIGS — iStent)',
    subspecialty: 'Glaucoma',
    aliases: ['migs', 'istent', 'microstent', 'trabecular micro-bypass', 'glaucoma minimo invasivo'],
    fields: {
      diagnostico: 'Glaucoma de ângulo aberto ligeiro a moderado, combinado com cirurgia de catarata',
      descricao:
        'Implante de micro-stent trabecular (iStent inject) por via ab interno, combinado com facoemulsificação. ' +
        'O dispositivo cria um canal de drenagem directo entre a câmara anterior e o canal de Schlemm.',
      beneficios:
        'Redução da pressão intraocular com mínimo trauma cirúrgico. Combinável com cirurgia de catarata. ' +
        'Recuperação rápida. Preserva opções cirúrgicas futuras.',
      riscos:
        'Mal posicionamento do stent, obstrução, hifema, eficácia hipotensora limitada em glaucomas avançados.',
      atos:
        'Implante de iStent inject por via ab interno sob visualização gonioscópica, combinado com facoemulsificação. ' +
        'Anestesia tópica ou local.',
      riscosNaoTratamento:
        'Progressão do glaucoma com aumento da pressão intraocular e perda de campo visual.',
    },
  },
  {
    id: 'ciclofotocoagulacao',
    name: 'Ciclofotocoagulação Transescleral',
    subspecialty: 'Glaucoma',
    aliases: ['ciclofotocoagulacao', 'cfc', 'ciclodiodo', 'laser ciliar', 'glaucoma terminal'],
    fields: {
      diagnostico: 'Glaucoma refractário ou em olho com baixo potencial visual, não controlado por outras terapêuticas',
      descricao:
        'Ciclofotocoagulação transescleral por laser díodo: ablação do corpo ciliar para redução da produção de humor aquoso ' +
        'e consequente diminuição da pressão intraocular.',
      beneficios:
        'Controlo da pressão intraocular em casos refractários. Alívio da dor em glaucoma terminal. ' +
        'Procedimento ambulatório ou em bloco operatório sem incisão.',
      riscos:
        'Hipotonia, phthisis bulbi, inflamação intensa, dor pós-operatória, ' +
        'perda adicional de visão, necessidade de repetição.',
      atos:
        'Ciclofotocoagulação transescleral com laser díodo sob anestesia local (peribulbar/retrobulbar). ' +
        'Corticosteroide subconjuntival no final. Seguimento com controlo tensional.',
      riscosNaoTratamento:
        'Dor incontrolável e progressão do glaucoma refractário.',
    },
  },
  {
    id: 'goniotomia',
    name: 'Goniotomia / Trabeculotomia',
    subspecialty: 'Glaucoma',
    aliases: ['goniotomia', 'trabeculotomia', 'ab interno', 'gonioscopia', 'glaucoma congenito', 'glaucoma juvenil'],
    fields: {
      diagnostico: 'Glaucoma congénito ou juvenil com indicação para cirurgia ab interno do trabéculo',
      descricao:
        'Goniotomia ou trabeculotomia: secção directa do tecido trabecular por via ab interno sob visualização gonioscópica, ' +
        'para melhorar a drenagem do humor aquoso no glaucoma congénito e juvenil.',
      beneficios:
        'Tratamento cirúrgico de primeira linha no glaucoma congénito. ' +
        'Normalização da pressão intraocular e preservação do desenvolvimento visual.',
      riscos:
        'Hifema, lesão do cristalino ou íris, infecção, necessidade de reintervenção, falência cirúrgica.',
      atos:
        'Goniotomia sob visualização com goniolente ou endoscópio. Anestesia geral. ' +
        'Seguimento pós-operatório regular para controlo tensional.',
      riscosNaoTratamento:
        'Progressão do glaucoma congénito com dano irreversível do nervo óptico e cegueira.',
    },
  },
];

export default templates;
