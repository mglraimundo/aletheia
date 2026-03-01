import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'trabeculectomia',
    name: 'Trabeculectomia',
    subspecialty: 'Glaucoma',
    aliases: ['trabe', 'trabeculo', 'filtrante', 'filtragem', 'ampola', 'mmc', 'mitomicina', '5fu', 'pressao intraocular', 'pio'],
    fields: {
      diagnosis: 'Glaucoma com pressão intraocular não controlada sob terapêutica médica máxima tolerada',
      description:
        'Trabeculectomia: cirurgia filtrante do glaucoma. Criação de uma fístula escleral protegida por uma ampola ' +
        'de filtração subconjuntival, permitindo a drenagem controlada do humor aquoso e redução da pressão intraocular. ' +
        'Realizada sob anestesia local com eventual sedação.',
      benefits:
        'Redução significativa e sustentada da pressão intraocular. ' +
        'Abrandamento ou paragem da progressão do glaucoma e da perda de campo visual. ' +
        'Possível redução ou eliminação de colírios hipotensores.',
      risks:
        'Hipotonia ocular, endoftalmite, falência da ampola, catarata, descolamento coroideu, ' +
        'hemorragia supracoroideia, diplopia, perda de visão. Necessidade de revisão cirúrgica ou ' +
        'injecções de 5-fluorouracilo/mitomicina C no pós-operatório.',
      alternatives:
        'Trabeculectomia com ou sem antimetabolito (mitomicina C ou 5-fluorouracilo). ' +
        'Anestesia local (peribulbar/subtenoniana) com sedação monitorizada. ' +
        'Seguimento pós-operatório intensivo com possível suturolise a laser.',
      risksOfNoTreatment:
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
      diagnosis: 'Glaucoma de ângulo aberto ou hipertensão ocular com indicação para trabeculoplastia laser',
      description:
        'Trabeculoplastia Laser Selectiva (SLT): aplicação de laser Nd:YAG de dupla frequência sobre o trabéculo ' +
        'para estimular a fagocitose e melhorar a drenagem do humor aquoso, reduzindo a pressão intraocular.',
      benefits:
        'Redução da pressão intraocular sem intervenção cirúrgica. Procedimento ambulatório, repetível. ' +
        'Pode reduzir a necessidade de colírios hipotensores.',
      risks:
        'Aumento transitório da pressão intraocular nas primeiras horas, inflamação anterior, ' +
        'eficácia que pode diminuir ao longo do tempo, necessidade de repetição.',
      alternatives:
        'SLT em lâmpada de fenda com lente de goniolaser. Colírio anti-inflamatório e hipotensor pós-procedimento. ' +
        'Controlo da pressão intraocular após 1 hora.',
      risksOfNoTreatment:
        'Progressão do glaucoma com perda de campo visual e possível necessidade de cirurgia.',
    },
  },
  {
    id: 'iridotomia-laser',
    name: 'Iridotomia Laser (LPI)',
    subspecialty: 'Glaucoma',
    aliases: ['iridotomia', 'lpi', 'laser iridotomia', 'angulo fechado', 'glaucoma agudo', 'fechamento angular'],
    fields: {
      diagnosis: 'Glaucoma de ângulo fechado, ângulo estreito ou suspeita de bloqueio pupilar',
      description:
        'Iridotomia periférica por laser Nd:YAG: criação de uma abertura na periferia da íris para equalizar a pressão ' +
        'entre câmara anterior e posterior, eliminando o bloqueio pupilar e abrindo o ângulo iridocorneal.',
      benefits:
        'Prevenção e tratamento do glaucoma de ângulo fechado por bloqueio pupilar. Procedimento ambulatório rápido. ' +
        'Elimina o risco de crises agudas de glaucoma.',
      risks:
        'Hemorragia iridiana transitória, aumento transitório da pressão intraocular, inflamação, ' +
        'diplopia ou halos por posicionamento da iridotomia, encerramento da iridotomia.',
      alternatives:
        'Iridotomia periférica por laser Nd:YAG em lâmpada de fenda. ' +
        'Colírio hipotensor e anti-inflamatório pós-procedimento.',
      risksOfNoTreatment:
        'Risco de crise aguda de glaucoma com dor, baixa de visão súbita e dano irreversível do nervo óptico.',
    },
  },
  {
    id: 'ahmed',
    name: 'Implante de Dispositivo de Drenagem (Válvula de Ahmed)',
    subspecialty: 'Glaucoma',
    aliases: ['ahmed', 'baerveldt', 'valvula', 'tubo', 'shunt', 'dispositivo drenagem', 'glaucoma refractario'],
    fields: {
      diagnosis: 'Glaucoma refractário com falência ou contraindicação para trabeculectomia',
      description:
        'Implante de dispositivo de drenagem do humor aquoso (válvula de Ahmed ou similar). ' +
        'Um tubo é inserido na câmara anterior e conectado a um reservatório subconjuntival equatorial ' +
        'para controlo da pressão intraocular.',
      benefits:
        'Controlo da pressão intraocular em glaucomas complexos e refractários. ' +
        'Alternativa eficaz após falência de cirurgia filtrante prévia.',
      risks:
        'Hipotonia, diplopia por restrição muscular, erosão da superfície ocular pelo tubo, ' +
        'endoftalmite, descompensação corneal, encapsulamento do reservatório, perda de visão.',
      alternatives:
        'Implante de válvula de Ahmed sob anestesia local com sedação ou anestesia geral. ' +
        'Seguimento pós-operatório regular com controlo tensional.',
      risksOfNoTreatment:
        'Progressão do glaucoma refractário com perda irreversível de campo visual e cegueira.',
    },
  },
  {
    id: 'istent',
    name: 'Cirurgia Minimamente Invasiva do Glaucoma (MIGS — iStent)',
    subspecialty: 'Glaucoma',
    aliases: ['migs', 'istent', 'microstent', 'trabecular micro-bypass', 'glaucoma minimo invasivo'],
    fields: {
      diagnosis: 'Glaucoma de ângulo aberto ligeiro a moderado, combinado com cirurgia de catarata',
      description:
        'Implante de micro-stent trabecular (iStent inject) por via ab interno, combinado com facoemulsificação. ' +
        'O dispositivo cria um canal de drenagem directo entre a câmara anterior e o canal de Schlemm.',
      benefits:
        'Redução da pressão intraocular com mínimo trauma cirúrgico. Combinável com cirurgia de catarata. ' +
        'Recuperação rápida. Preserva opções cirúrgicas futuras.',
      risks:
        'Mal posicionamento do stent, obstrução, hifema, eficácia hipotensora limitada em glaucomas avançados.',
      alternatives:
        'Implante de iStent inject por via ab interno sob visualização gonioscópica, combinado com facoemulsificação. ' +
        'Anestesia tópica ou local.',
      risksOfNoTreatment:
        'Progressão do glaucoma com aumento da pressão intraocular e perda de campo visual.',
    },
  },
  {
    id: 'ciclofotocoagulacao',
    name: 'Ciclofotocoagulação Transescleral',
    subspecialty: 'Glaucoma',
    aliases: ['ciclofotocoagulacao', 'cfc', 'ciclodiodo', 'laser ciliar', 'glaucoma terminal'],
    fields: {
      diagnosis: 'Glaucoma refractário ou em olho com baixo potencial visual, não controlado por outras terapêuticas',
      description:
        'Ciclofotocoagulação transescleral por laser díodo: ablação do corpo ciliar para redução da produção de humor aquoso ' +
        'e consequente diminuição da pressão intraocular.',
      benefits:
        'Controlo da pressão intraocular em casos refractários. Alívio da dor em glaucoma terminal. ' +
        'Procedimento ambulatório ou em bloco operatório sem incisão.',
      risks:
        'Hipotonia, phthisis bulbi, inflamação intensa, dor pós-operatória, ' +
        'perda adicional de visão, necessidade de repetição.',
      alternatives:
        'Ciclofotocoagulação transescleral com laser díodo sob anestesia local (peribulbar/retrobulbar). ' +
        'Corticosteroide subconjuntival no final. Seguimento com controlo tensional.',
      risksOfNoTreatment:
        'Dor incontrolável e progressão do glaucoma refractário.',
    },
  },
  {
    id: 'goniotomia',
    name: 'Goniotomia / Trabeculotomia',
    subspecialty: 'Glaucoma',
    aliases: ['goniotomia', 'trabeculotomia', 'ab interno', 'gonioscopia', 'glaucoma congenito', 'glaucoma juvenil'],
    fields: {
      diagnosis: 'Glaucoma congénito ou juvenil com indicação para cirurgia ab interno do trabéculo',
      description:
        'Goniotomia ou trabeculotomia: secção directa do tecido trabecular por via ab interno sob visualização gonioscópica, ' +
        'para melhorar a drenagem do humor aquoso no glaucoma congénito e juvenil.',
      benefits:
        'Tratamento cirúrgico de primeira linha no glaucoma congénito. ' +
        'Normalização da pressão intraocular e preservação do desenvolvimento visual.',
      risks:
        'Hifema, lesão do cristalino ou íris, infecção, necessidade de reintervenção, falência cirúrgica.',
      alternatives:
        'Goniotomia sob visualização com goniolente ou endoscópio. Anestesia geral. ' +
        'Seguimento pós-operatório regular para controlo tensional.',
      risksOfNoTreatment:
        'Progressão do glaucoma congénito com dano irreversível do nervo óptico e cegueira.',
    },
  },
];

export default templates;
