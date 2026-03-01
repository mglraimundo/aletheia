import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'blefaroplastia-superior',
    name: 'Blefaroplastia Superior',
    subspecialty: 'Oculoplástica',
    aliases: ['blefaroplastia', 'palpebra superior', 'excesso pele palpebral', 'dermatocalase'],
    fields: {
      diagnosis: 'Dermatocalase da pálpebra superior com limitação funcional do campo visual superior e/ou queixas estéticas',
      description:
        'Blefaroplastia superior: excisão de pele e músculo orbiticular excedentários da pálpebra superior, ' +
        'com eventual excisão de gordura orbitária herniada, por via cutânea na prega palpebral.',
      benefits:
        'Melhoria do campo visual superior e alívio da sensação de peso palpebral. ' +
        'Rejuvenescimento do terço superior da face com resultado estético natural.',
      risks:
        'Assimetria, lagoftalmia, lesão da glândula lacrimal, hematoma, infecção, ' +
        'cicatriz visível, excesso ou insuficiência de excisão, ptose iatrogénica.',
      alternatives:
        'Excisão cutânea e muscular palpebral superior com eventual lipectomia. ' +
        'Anestesia local com sedação ligeira. Sutura da prega palpebral.',
      risksOfNoTreatment:
        'Progressão da dermatocalase com agravamento da limitação funcional e estética.',
    },
  },
  {
    id: 'blefaroplastia-inferior',
    name: 'Blefaroplastia Inferior',
    subspecialty: 'Oculoplástica',
    aliases: ['blefaroplastia inferior', 'palpebra inferior', 'bolsas gordura', 'hernias gordura'],
    fields: {
      diagnosis: 'Hérnia de gordura orbitária das pálpebras inferiores com indicação cirúrgica',
      description:
        'Blefaroplastia inferior: abordagem transcutânea ou transconjuntival para remoção e/ou reposicionamento ' +
        'da gordura orbitária herniada das pálpebras inferiores, com ou sem excisão de pele excedentária.',
      benefits:
        'Eliminação das bolsas de gordura palpebral inferior com rejuvenescimento da área periocular.',
      risks:
        'Ectrópio cicatricial, scleral show, hematoma retrobulbar (raro mas grave), infecção, ' +
        'assimetria, olho seco agravado, cicatriz visível.',
      alternatives:
        'Abordagem transconjuntival ou transcutânea com remoção/reposicionamento de gordura. ' +
        'Anestesia local com sedação. Penso oclusivo no pós-operatório imediato.',
      risksOfNoTreatment:
        'Manutenção das hernias de gordura com impacto estético.',
    },
  },
  {
    id: 'ptose-palpebral',
    name: 'Correcção de Ptose Palpebral',
    subspecialty: 'Oculoplástica',
    aliases: ['ptose', 'ptosis', 'queda palpebra', 'levantamento palpebra', 'levantador'],
    fields: {
      diagnosis: 'Ptose palpebral superior com compromisso do eixo visual e/ou impacto funcional significativo',
      description:
        'Correcção cirúrgica da ptose palpebral por adelgaçamento do músculo elevador da pálpebra superior (ressecção do levantador) ' +
        'por via anterior, ou suspensão ao frontal por faixa de silicone ou fáscia lata em casos de função do levantador ausente.',
      benefits:
        'Elevação da pálpebra com desobstrução do eixo visual e melhoria estética e funcional.',
      risks:
        'Sobrecorrecção com lagoftalmia e exposição corneal, subcorrecção, assimetria, ' +
        'infecção, hematoma, lesão corneal, necessidade de reintervenção.',
      alternatives:
        'Ressecção do levantador da pálpebra superior ou suspensão ao frontal. ' +
        'Anestesia local com colaboração do doente (adultos) ou anestesia geral (crianças).',
      risksOfNoTreatment:
        'Progressão da ptose com obstrução do eixo visual, risco de ambliopia (crianças) e impacto funcional.',
    },
  },
  {
    id: 'dcr',
    name: 'Dacriocistorrinostomia (DCR)',
    subspecialty: 'Oculoplástica',
    aliases: ['dcr', 'dacriocistorrinostomia', 'vias lacrimais', 'epifora', 'obstrução lacrimal', 'dacriocistite'],
    fields: {
      diagnosis: 'Obstrução das vias lacrimais nasolacrimal com epífora crónica e/ou dacriocistite recorrente',
      description:
        'Dacriocistorrinostomia (DCR) externa ou endoscópica: criação de uma anastomose directa entre o saco lacrimal ' +
        'e a cavidade nasal por osteotomia, com colocação de tubo de silicone intubação bicanalicular.',
      benefits:
        'Resolução da epífora e prevenção de episódios de dacriocistite. Restabelecimento da drenagem lacrimal.',
      risks:
        'Hemorragia (epistaxis), falência da anastomose, infecção, cicatriz cutânea (DCR externa), ' +
        'sinequias nasais, necessidade de reintervenção.',
      alternatives:
        'DCR externa (incisão cutânea medial) ou endoscópica. Osteotomia e anastomose mucosa. ' +
        'Intubação bicanalicular com silicone. Anestesia geral.',
      risksOfNoTreatment:
        'Manutenção da epífora com dacriocistite recorrente e possível progressão para abcesso lacrimal.',
    },
  },
  {
    id: 'enucleacao',
    name: 'Enucleação / Evisceração',
    subspecialty: 'Oculoplástica',
    aliases: ['enucleacao', 'evisceração', 'evisceração', 'olho cego doloroso', 'melanoma', 'implante orbitario'],
    fields: {
      diagnosis: 'Olho com patologia irreversível com indicação para enucleação/evisceração (tumor intraocular, olho cego doloroso, traumatismo grave)',
      description:
        'Enucleação (remoção completa do globo ocular) ou evisceração (remoção do conteúdo ocular com preservação da esclera), ' +
        'com implante orbitário para manutenção do volume e mobilidade da prótese ocular subsequente.',
      benefits:
        'Tratamento definitivo da patologia (tumor, dor intratável). Preservação do volume orbitário. ' +
        'Excelente resultado funcional com prótese ocular.',
      risks:
        'Extrusão do implante, infecção, migração, assimetria, síndrome do socket contráctil, ' +
        'risco de disseminação tumoral (enucleação por melanoma).',
      alternatives:
        'Enucleação ou evisceração com implante de esfera de polietileno poroso (Medpor) ou silicone. ' +
        'Anestesia geral. Conformador e prótese ocular após cicatrização.',
      risksOfNoTreatment:
        'Persistência de dor intratável, progressão tumoral ou manutenção de olho desfigurado.',
    },
  },
];

export default templates;
