import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'ahmed',
    name: 'Ahmed',
    subspecialty: 'Glaucoma',
    aliases: ['Ahmed'],
    fields: {
      diagnosis:
        'O glaucoma é uma patologia que provoca danos no nervo ótico, geralmente devido ao aumento da pressão intraocular. Quando o tratamento com colírios ou outras cirurgias não é eficaz, é necessário o implante de um dispositivo de drenagem valvulado para controlar a pressão e evitar a perda progressiva de visão. A alteração da graduação dos óculos não permite restaurar a visão perdida pela progressão desta doença.',
      description:
        'A cirurgia consiste no implante de um dispositivo de drenagem (Válvula de Ahmed). Trata-se de um dispositivo com um mecanismo de válvula que regula a saída do humor aquoso, evitando que a pressão desça excessivamente no pós-operatório imediato. O tubo do dispositivo é inserido no interior do olho e a placa de drenagem é fixada sob a conjuntiva. Pode ser necessária a utilização de um enxerto de tecido (como esclera ou pericárdio) para cobrir o tubo e evitar a sua exposição. Pode ainda ser necessário a aplicação de um antimetabolito como a Mitomicina C para reduzir a cicatrização. A cirurgia é realizada geralmente em ambulatório, sob anestesia tópica, loco-regional ou, em casos específicos, sob sedação ou anestesia geral.',
      benefits:
        'O principal objetivo é o controlo da pressão intraocular para travar a progressão do glaucoma e preservar a acuidade visual restante. Este dispositivo é particularmente útil em glaucomas complexos ou onde outras cirurgias falharam. Pretende-se maximizar a estabilidade ocular e, se possível, reduzir a dependência de medicação hipotensora (colírios).',
      risks:
        'A cirurgia é geralmente segura, mas existem riscos que podem exigir reintervenção. Complicações específicas: Obstrução do tubo, mau posicionamento do dispositivo, hipertensão ocular na fase de encapsulamento da placa ("fase hipertensiva") ou exposição do tubo. Riscos gerais mas raros: Hemorragia ocular, descolamento de retina, inflamação persistente ou infeção grave (endoftalmite). Pode ocorrer aceleração da formação de catarata em olhos que ainda mantêm o cristalino natural.',
      alternatives:
        'As alternativas incluem o tratamento médico contínuo, ciclocrioterapia, trabeculectomia ou o implante de outros tipos de dispositivos de drenagem (não valvulados).',
      risksOfNoTreatment:
        'A progressão do glaucoma sem o devido controlo da pressão intraocular leva à perda progressiva e irreversível de visão, podendo evoluir para a cegueira total.',
    },
  },
  {
    id: 'ciclo',
    name: 'Ciclofotocoagulação',
    subspecialty: 'Glaucoma',
    aliases: ['CICLO'],
    fields: {
      diagnosis:
        'O glaucoma é uma doença que causa dano progressivo no nervo ótico, geralmente devido a uma pressão intraocular elevada. Quando o tratamento com colírios ou cirurgias incisionais não é suficiente, ou quando estas não estão indicadas, é necessário intervir diretamente na produção do fluido ocular (humor aquoso) para controlar a pressão e evitar a perda progressiva de visão. A alteração da graduação dos óculos não permite restaurar a visão perdida pela progressão desta patologia.',
      description:
        'A Ciclofotocoagulação Laser (transescleral) consiste na aplicação de energia laser (geralmente laser de díodo) sobre o corpo ciliar, a estrutura do olho responsável pela produção do humor aquoso. O objetivo é destruir de forma controlada parte do corpo ciliar para reduzir a produção de líquido e, consequentemente, baixar a pressão intraocular. A intervenção é realizada sob anestesia loco-regional (bloqueio peri ou retrobulbar) ou, em casos específicos, sob sedação ou anestesia geral, tendo uma duração média curta.',
      benefits:
        'O principal benefício é a redução da pressão intraocular para estabilizar a doença e prevenir a dor ocular em casos de glaucoma avançado. Pretende-se a preservação da visão restante (não visa recuperar visão já perdida pelo glaucoma). Pode permitir a redução da carga terapêutica (número de colírios aplicados diariamente). Pode diminuir ainda a sensação de dor associada a glaucomas terminais.',
      risks:
        'O procedimento é geralmente seguro, mas não é isento de complicações: Frequentes: Inflamação ocular (uveíte), dor pós-operatória transitória, hifema (sangue na câmara anterior) ou flutuações da pressão intraocular. Específicos: Hipotonia (pressão demasiado baixa que pode levar à atrofia do globo ocular ou phtisis bulbi), edema macular ou diminuição da acuidade visual. Raros e graves: Hemorragia intraocular, queimaduras conjuntivais ou endoftalmite (infeção grave). Pode ser necessária a repetição do tratamento se a redução da pressão for insuficiente.',
      alternatives:
        'As alternativas incluem a otimização do tratamento médico (colírios), outros tipos de laser (como a trabeculoplastia) ou cirurgias de drenagem (trabeculectomia ou implante de tubos).',
      risksOfNoTreatment:
        'A ausência de controlo da pressão intraocular leva à progressão inevitável da cegueira e, em fases avançadas, pode resultar em olhos dolorosos e cegos por hipertensão ocular grave.',
    },
  },
  {
    id: 'faco-gonio',
    name: 'FACO+LIO+GONIO',
    subspecialty: 'Glaucoma',
    aliases: ['faco', 'gonio'],
    fields: {
      diagnosis:
        'A catarata corresponde à opacificação da lente natural do olho, o cristalino, provocando a diminuição da quantidade e/ou qualidade da visão. O glaucoma é uma condição coexistente onde a resistência ao escoamento do fluido ocular eleva a pressão intraocular, podendo causar danos irreversíveis no nervo ótico. Nestes casos, a alteração da graduação dos óculos não permite restaurar a visão na presença de catarata significativa ou dano avançado de glaucoma.',
      description:
        'A intervenção combina dois procedimentos no mesmo tempo operatório: Facoemulsificação: Remoção do cristalino opacificado por ultrassom através de uma incisão de pequenas dimensões, seguida da implantação de uma lente artificial (LIO) no saco capsular. Goniotomia com microgancho de Tanito: Utilização de um instrumento específico (microgancho) para realizar uma abertura no canal de drenagem interno do olho (trabéculo). O objetivo é facilitar a saída do humor aquoso e reduzir a pressão intraocular. A cirurgia é realizada quase sempre em ambulatório sob anestesia tópica ou loco-regional, podendo alguns casos requerer sedação, tendo uma duração média de 20 minutos habituais da cirurgia isolada.',
      benefits:
        'Recuperação visual: Na presença de catarata, existe recuperação da acuidade visual em mais de 90% dos casos num período curto após a intervenção. Controlo tensional: A goniotomia visa reduzir a pressão intraocular e, potencialmente, diminuir a dependência de colírios hipotensores. Independência de óculos: Pretende-se maximizar a independência (nunca garantida) de óculos para diferentes distâncias, consoante o tipo de lente implantada.',
      risks:
        'A cirurgia combinada tem baixo risco, mas complicações podem exigir reintervenção. Relacionados com a catarata: Rutura capsular posterior (~2%), queda de fragmentos no vítreo, ou erro refrativo residual que exija óculos ou nova cirurgia. Relacionados com a goniotomia: Hifema (presença de sangue na câmara anterior, geralmente transitório), inflamação ocular aumentada ou hipertensão ocular transitória no pós-operatório imediato. Raros e graves: Hemorragia expulsiva (1/10.000), endoftalmite (1/4.000), descolamento de retina ou edema macular.',
      alternatives:
        'As alternativas incluem a realização apenas da cirurgia de catarata mantendo o tratamento médico do glaucoma, ou a associação da catarata a outras técnicas de drenagem (como a trabeculectomia ou implantes de drenagem).',
      risksOfNoTreatment:
        'A progressão da catarata leva à perda progressiva de visão. O não tratamento do glaucoma associado pode resultar na progressão de danos no nervo ótico e perda irreversível do campo visual, evoluindo para cegueira funcional.',
    },
  },
  {
    id: 'paul',
    name: 'Paul',
    subspecialty: 'Glaucoma',
    aliases: ['paul'],
    fields: {
      diagnosis:
        'O glaucoma é uma doença do nervo ótico geralmente associada a valores elevados de pressão intraocular. Quando o tratamento com colírios, laser ou cirurgias filtrantes convencionais não é suficiente ou não está indicado, torna-se necessário o implante de um dispositivo de drenagem para controlar a pressão e evitar a perda progressiva e irreversível da visão.',
      description:
        'A cirurgia consiste no implante de um dispositivo de drenagem de glaucoma (Tubo PAUL). O procedimento envolve a inserção de um micro-tubo flexível de silicone na câmara anterior do olho, que encaminha o humor aquoso para uma placa fixada sob a conjuntiva na parte externa do globo ocular. O objetivo é criar uma via alternativa de drenagem para reduzir a pressão intraocular. Pode ser necessária a aplicação de antimetabolitos como a Mitomicina-C para diminuir a cicatrização e facilitar a eficácia da drenagem a longo prazo. Pode ser necessária a utilização de um enxerto de tecido (esclera ou outro material) para recobrir o tubo. A cirurgia é realizada em bloco operatório, geralmente sob anestesia loco-regional ou geral, dependendo da avaliação clínica.',
      benefits:
        'O principal benefício é o controlo da pressão intraocular em casos complexos de glaucoma, onde outras intervenções falharam ou têm menor probabilidade de sucesso. Pretende-se a estabilização da doença e a preservação da visão restante (não visa recuperar visão já perdida pelo glaucoma). Pode permitir a redução do número de medicamentos hipotensores (colírios) utilizados diariamente.',
      risks:
        'A cirurgia é considerada de baixo risco, mas podem ocorrer complicações que exijam reintervenção. Complicações possíveis: Hipotonia (pressão muito baixa), hipertensão ocular transitória, obstrução do tubo, erosão da conjuntiva sobre o dispositivo ou contacto do tubo com a córnea (descompensação corneana). Raras e graves: Hemorragia expulsiva, descolamento da retina ou infeção interna grave (endoftalmite). No pós-operatório, podem surgir fenómenos visuais transitórios ou necessidade de ajustar a medicação.',
      alternatives:
        'As alternativas incluem outros tipos de dispositivos de drenagem (valvulados ou não valvulados), cirurgias filtrantes (como a trabeculectomia) ou procedimentos de ciclofotocoagulação a laser.',
      risksOfNoTreatment:
        'A recusa ou o adiamento da cirurgia perante um glaucoma descontrolado levará à progressão inevitável da lesão no nervo ótico, resultando em perda de campo visual e cegueira definitiva.',
    },
  },
  {
    id: 'preserflo',
    name: 'Preserflo',
    subspecialty: 'Glaucoma',
    aliases: ['Preserflo'],
    fields: {
      diagnosis:
        'O glaucoma caracteriza-se por dano progressivo no nervo ótico, frequentemente associado a uma pressão intraocular elevada. Quando o tratamento médico (colírios) não controla a progressão da doença, é necessária uma intervenção cirúrgica para reduzir a pressão e prevenir a perda irreversível da visão. A alteração da graduação dos óculos não soluciona a perda de visão causada pelo glaucoma.',
      description:
        'A cirurgia consiste no implante do micro-shunt PRESERFLO®, um dispositivo médico muito pequeno e biocompatível (feito de material sintético estável). O dispositivo é inserido através de uma pequena incisão para criar um canal de drenagem do humor aquoso desde o interior do olho até ao espaço sob a conjuntiva (formando uma bolha de filtração). É frequentemente utilizada a aplicação de Mitomicina C durante o procedimento para modular a cicatrização e assegurar o funcionamento do canal a longo prazo. A cirurgia é habitualmente realizada em regime de ambulatório, sob anestesia tópica ou loco-regional, podendo em casos específicos requerer sedação, com uma duração média aproximada de 20 a 30 minutos.',
      benefits:
        'O principal objetivo é a redução eficaz e sustentada da pressão intraocular para travar ou retardar a progressão do glaucoma. Pretende-se preservar a visão atual do doente, embora a cirurgia não recupere a visão já perdida pela doença. Visa-se, sempre que possível, reduzir a necessidade de medicação hipotensora diária (colírios).',
      risks:
        'Embora seja uma técnica minimamente invasiva e de baixo risco, podem ocorrer complicações que exijam nova intervenção. Frequentes: Hipotonia (pressão demasiado baixa), hifema (sangue na câmara anterior), ou necessidade de manipulação da bolha de filtração no pós-operatório. Riscos do dispositivo: Obstrução do micro-shunt, deslocamento ou erosão da conjuntiva sobre o tubo. Raras e graves: Infeção ocular grave (endoftalmite), hemorragia coroideia ou descolamento de retina. Como em qualquer cirurgia intraocular, existe o risco de progressão de catarata ou edema macular.',
      alternatives:
        'As alternativas incluem a continuação do tratamento médico, laser (trabeculoplastia), cirurgias filtrantes convencionais (como a trabeculectomia) ou outros dispositivos de drenagem (tubos ou válvulas).',
      risksOfNoTreatment:
        'A ausência de tratamento adequado para o glaucoma resulta na progressão da perda de campo visual, podendo culminar em cegueira funcional irreversível.',
    },
  },
  {
    id: 'trab',
    name: 'Trabeculectomia',
    subspecialty: 'Glaucoma',
    aliases: ['trab'],
    fields: {
      diagnosis:
        'O glaucoma é uma neuropatia ótica progressiva, geralmente associada a uma pressão intraocular elevada, que causa danos irreversíveis no nervo ótico e perda do campo visual. Quando o tratamento com fármacos (colírios) ou laser não é suficiente para controlar a pressão e travar a progressão da doença, a cirurgia torna-se necessária. A alteração da graduação dos óculos não resolve a perda de visão causada pelo dano no nervo ótico.',
      description:
        'A Trabeculectomia Ab Externo é o procedimento cirúrgico convencional para o tratamento do glaucoma. Consiste na criação de uma pequena via de drenagem (fístula) na esclera (a parte branca do olho), permitindo que o excesso de humor aquoso saia do interior do olho para um reservatório sob a conjuntiva (bolha de filtração), baixando assim a pressão intraocular. Pode ser utilizada a aplicação de fármacos antimetabolitos (como a Mitomicina C) durante a cirurgia para modelar a cicatrização e aumentar a taxa de sucesso. A cirurgia é realizada geralmente sob anestesia loco-regional (com ou sem sedação) ou anestesia geral, com uma duração média de 30-45 minutos.',
      benefits:
        'O principal objetivo é a redução e estabilização da pressão intraocular para prevenir ou retardar a perda adicional de visão.  Pretende-se interromper a progressão da doença e, em muitos casos, reduzir ou eliminar a necessidade de utilização diária de colírios hipotensores.  Nota importante: Esta cirurgia não visa recuperar a visão já perdida pelo glaucoma, mas sim preservar a visão restante.',
      risks:
        'A cirurgia tem riscos que podem exigir reintervenções. Complicações frequentes: hipotonia (pressão demasiado baixa), hifema (sangue na câmara anterior), descolamento coroideu ou necessidade de manipulação da bolha de filtração no pós-operatório. Longo prazo: Aceleração da formação de catarata e falência da fístula por cicatrização excessiva. Raras e graves: Infeção ocular grave (endoftalmite), hemorragia expulsiva ou perda total de visão. ',
      alternatives:
        'As alternativas incluem a continuação do tratamento médico com colírios, tratamentos laser (como a trabeculoplastia) ou outros tipos de cirurgia de glaucoma (implantes de drenagem ou cirurgia minimamente invasiva - MIGS), dependendo da gravidade do caso. Contudo, para casos em que a trabeculectomia está indicada este tipo de tratamentos menos invasivos são menos eficazes no controlo da pressão intraocular e subsequentemente no controlo da progressão da doença.',
      risksOfNoTreatment:
        'A ausência de tratamento ou a recusa da cirurgia quando indicada leva à progressão inevitável do dano no nervo ótico, resultando em perda progressiva do campo visual e, eventualmente, cegueira irreversível.',
    },
  },
];

export default templates;
