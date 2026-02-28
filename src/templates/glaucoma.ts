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
];

export default templates;
