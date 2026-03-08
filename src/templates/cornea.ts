import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'membrana-amniotica',
    name: 'Membrana Amniótica',
    subspecialty: 'Córnea',
    aliases: [],
    fields: {
      diagnosis:
        'A cirurgia de aplicação de membrana amniótica pode ser realizada por várias razões. Alguns dos diagnósticos mais comuns incluem inflamação da córnea, doenças degenerativas, infeções, lesões ou traumas, ou complicações de outras cirurgias oculares.',
      description:
        'A membrana amniótica é uma camada fina e avascular, de origem placentária, que é aplicada na superfície ocular como forma de promover a cicatrização da córnea. A realização da cirurgia pode implicar a necessidade de anestesia para que o procedimento decorra nas melhores condições de segurança e conforto. A anestesia é realizada por um médico anestesiologista que acompanha todo o processo e é responsável pela escolha da técnica, de acordo com o estado clínico do doente e o procedimento proposto.',
      benefits:
        'A membrana amniótica possui propriedades anti-inflamatórias e antimicrobianas, promove a cicatrização de feridas através de fatores de crescimento que estimulam a proliferação celular e a migração de queratinócitos e fibroblastos, e fornece suporte estrutural temporário prevenindo a formação de aderências entre os tecidos. Estas propriedades podem ser benéficas em casos de lesões teciduais, úlceras e outras condições inflamatórias da superfície ocular.',
      risks:
        'Os riscos associados à aplicação de membrana amniótica podem variar ligeiramente, dependendo das condições específicas do doente. Apesar dos testes serológicos e microbiológicos realizados na altura da colheita existe a possibilidade muito rara de transmissão de um agente infeccioso.',
      alternatives:
        'As alternativas à aplicação da membrana amniótica dependem da doença específica e da gravidade da patologia ocular. Nalguns casos a manutenção de terapêutica médica pode permitir protelar ou evitar a utilização de membrana amniótica. Existem, contudo, múltiplas situações em que o transplante de córnea é a única opção terapêutica.',
      risksOfNoTreatment:
        'A cirurgia proposta é considerada depois de esgotadas todas as alternativas terapêuticas e não tendo estas sido capazes de curar ou deter a evolução da doença. No entanto, considere-se que existe mais risco para a visão e/ou para a integridade do olho, se não se submeter a esta cirurgia. Ao não ser operado, poderá ter sequelas visuais, que em alguns casos, são potencialmente irreversíveis.',
    },
  },
  {
    id: 'queratoplastia',
    name: 'Queratoplastia',
    subspecialty: 'Córnea',
    aliases: ['qp', 'dsaek', 'dmek', 'dalk'],
    fields: {
      diagnosis:
        'A cirurgia de transplante de córnea pode ser realizada por várias razões. Alguns dos diagnósticos mais comuns incluem opacidades da córnea, doenças degenerativas, infeções, lesões ou traumas, ou complicações de outras cirurgias oculares.',
      description:
        'O transplante de córnea, também conhecido como queratoplastia, consiste na substituição da córnea danificada ou doente por uma córnea saudável de um dador. O transplante pode incluir todas as camadas da córnea (queratoplastia penetrante) ou apenas as camadas afetadas: a camada interna/endotélio (transplante lamelar endotelial) ou as camadas anteriores (transplante lamelar anterior profundo). A decisão técnica final é tomada de acordo com a patologia e as condições intraoperatórias. A cirurgia pode implicar anestesia loco-regional, sedação ou anestesia geral, de acordo com o estado clínico do doente e o procedimento proposto.',
      benefits:
        'O transplante de córnea permite restaurar a transparência, formato e integridade estrutural da córnea. Dependendo da situação clínica de cada doente, isso pode permitir recuperar a visão, melhorar sintomas e estabilizar ou reverter o curso de algumas doenças oculares.',
      risks:
        'Os riscos variam dependendo das condições do doente e do tipo de transplante. Apesar dos testes serológicos e microbiológicos na colheita, existe possibilidade muito rara de transmissão de agente infeccioso. Riscos graves incluem rejeição ou falência do enxerto, infeções, descolamento da retina ou coróide. Riscos frequentes incluem astigmatismo irregular, hipertensão intraocular/glaucoma ou catarata. Pode haver necessidade de intervenções cirúrgicas adicionais, e de óculos, lentes de contacto ou cirurgias para correção do erro refrativo residual. O tempo até melhoria da acuidade visual pode demorar semanas ou meses.',
      alternatives:
        'As alternativas ao transplante de córnea dependem da doença específica e da gravidade da patologia ocular. Alguns doentes podem alcançar uma melhoria relativa da visão com a utilização de óculos ou lentes de contacto, ou com a realização de cirurgias refrativas. Noutros casos, a utilização de terapêutica medicamentosa pode permitir evitar a necessidade de um transplante. Existem, contudo, múltiplas situações em que o transplante de córnea é a única opção terapêutica.',
      risksOfNoTreatment:
        'A cirurgia proposta é considerada depois de esgotadas todas as alternativas terapêuticas e não tendo estas sido capazes de curar ou deter a evolução da doença. No entanto, considere-se que existe mais risco para a visão e/ou para a integridade do olho, se não se submeter a esta cirurgia. Ao não ser operado, poderá ter sequelas visuais, que em alguns casos, são potencialmente irreversíveis.',
    },
  },
];

export default templates;
