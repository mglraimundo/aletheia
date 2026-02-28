import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'facoemulsificacao',
    name: 'Facoemulsificação (Catarata)',
    subspecialty: 'Cirurgia Implanto-Refrativa',
    aliases: ['faco', 'phaco', 'catarata', 'cata', 'cristalino', 'lio', 'lente intraocular'],
    fields: {
      diagnostico: 'Catarata',
      descricao:
        'Cirurgia de facoemulsificação com implante de lente intraocular (LIO). ' +
        'Consiste na remoção do cristalino opacificado por ultrassom através de uma incisão de pequenas dimensões, ' +
        'seguida da implantação de uma lente artificial no saco capsular.',
      beneficios:
        'Recuperação da acuidade visual. Melhoria da qualidade de vida e autonomia nas actividades diárias. ' +
        'Possível redução ou eliminação da dependência de óculos, dependendo da lente escolhida.',
      riscos:
        'Infecção intraocular (endoftalmite), hemorragia, descolamento da retina, edema macular cistóide, ' +
        'opacificação da cápsula posterior, luxação da lente intraocular, aumento da pressão intraocular, ' +
        'perda de visão (rara). Anestesia local: reacção alérgica, hemorragia retrobulbar.',
      atos:
        'Facoemulsificação com implante de lente intraocular monofocal, multifocal ou tórica. ' +
        'Anestesia tópica ou local (peribulbar/retrobulbar). Medicação pré e pós-operatória.',
      riscosNaoTratamento:
        'Progressão da catarata com perda progressiva de visão, podendo evoluir para cegueira funcional. ' +
        'Risco de glaucoma facomórfico ou facolítico em casos avançados.',
    },
  },
  {
    id: 'icl',
    name: 'ICL (Lente Fácica)',
    subspecialty: 'Cirurgia Implanto-Refrativa',
    aliases: ['lente facica', 'lente fácica', 'implantable collamer', 'visian', 'miopia', 'hipermetropia', 'astigmatismo', 'refrativa'],
    fields: {
      diagnostico: 'Ametropia (miopia, hipermetropia e/ou astigmatismo) com indicação para implante de lente fácica ICL',
      descricao:
        'Implante de lente fácica de câmara posterior (ICL — Implantable Collamer Lens) para correcção de ametropia. ' +
        'A lente é colocada entre a íris e o cristalino através de uma microincisão, sem remoção de tecido ocular.',
      beneficios:
        'Correcção de ametropias elevadas não adequadas para laser. Procedimento reversível. ' +
        'Excelente qualidade visual com manutenção da acomodação. Recuperação visual rápida.',
      riscos:
        'Aumento da pressão intraocular, catarata subcapsular anterior, endoftalmite, descolamento da retina, ' +
        'perda de células endoteliais da córnea, halos e glare nocturnos, descentração da lente. ' +
        'Necessidade de reintervenção.',
      atos:
        'Iridotomia laser pré-operatória (se indicada). Implante de lente ICL sob anestesia tópica ou local. ' +
        'Seguimento com controlo da pressão intraocular e contagem de células endoteliais.',
      riscosNaoTratamento:
        'Manutenção da ametropia com dependência de óculos ou lentes de contacto. ' +
        'Sem risco imediato para a integridade ocular, mas com limitação funcional significativa.',
    },
  },
];

export default templates;
