import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'faco-lio',
    name: 'FACO+LIO',
    subspecialty: 'CIR',
    aliases: ['facoemulsificação', 'phaco', 'catarata', 'lio', 'lente intraocular'],
    fields: {
      diagnosis:
        'A catarata corresponde à opacificação da lente natural do olho, o cristalino, pelo envelhecimento (mais frequente) ou outras causas (como traumatismo, fármacos, ...). Os sintomas associados são a diminuição da quantidade e/ou qualidade da visão. A alteração da refracção (graduação) dos óculos ou lentes de contacto não permite restaurar a qualidade/quantidade de visão na presença de catarata significativa. Noutros casos, o doente pode não ter uma catarata significativa, mas procura a cirurgia para correção de erros refrativos (miopia, hipermetropia, astigmatismo) ou presbiopia (dificuldade em focar ao perto associada à idade), através da extração do cristalino relativamente transparente e implante de uma lente intra-ocular.',
      description:
        'Cirurgia de facoemulsificação do cristalino com implante de lente intraocular (LIO). Consiste na remoção do cristalino opacificado por ultrassom através de uma incisão de pequenas dimensões, seguida da implantação de uma lente artificial no saco capsular. Situações específicas podem determinar alteração da técnica cirúrgica, da lente intra-ocular e do local do seu implante. A lente implantada é estimada por fórmulas matemáticas com base em medições feitas em exame pré-operatório (biometria) para atingir um determinado alvo refrativo. Na presença de astigmatismo corneano regular significativo pode eventualmente ser colocada uma lente que também corrige astigmatismo (monofocal tórica). A cirurgia é realizada quase sempre em ambulatório sob anestesia tópica ou loco-regional, podendo alguns casos requerer sedação ou anestesia geral, tendo uma duração média de 20 minutos. ',
      benefits:
        'Na presença de catarata existe recuperação da acuidade visual (quantidade e qualidade) em mais de 90% dos casos (principalmente na ausência de outra patologia ocular que comprometa o prognóstico) num perído curto após a intervenção cirúrgica. Quer na cirurgia de catarata quer na cirurgia com intuito refrativo (cristalino transparente) pretende-se maximizar a independência (nunca garantida) de óculos ou lentes de contacto na visão de longe e/ou intermédia e/ou de perto, consoante o tipo de lente implantada (monofocal ou lente de correção de presbiopia, p.ex com tecnologia multifocal ou EDoF).',
      risks:
        'A cirurgia tem baixo risco, mas eventuais complicações (lista não exaustiva) podem exigir reintervenção. Fatores individuais agravam-no. Complicações incluem rutura capsular posterior (~2%), alteração da LIO planeada, afaquia (sem LIO implantada), queda de fragmentos de cristalino no vítreo. Raras e graves: hemorragia expulsiva (1/10.000) e endoftalmite (1/4.000). Risco de descolamento de retina, descompensação corneana, edema macular, glaucoma ou luxação da LIO. Erros esféricos (>0,5D em 20%) ou cilíndricos (astigmatismo) podem exigir óculos permanentes ou nova cirurgia. Risco de fenómenos visuais indesejados (disfotópsias, mais noturnas), sobretudo com LIOs de correção de presbiopia. A opacificação capsular é frequente e tratável com LASER YAG. A anestesia tem riscos não desprezíveis.',
      alternatives: 'O único tratamento da catarata é a cirurgia.',
      risksOfNoTreatment:
        'Progressão da catarata com perda progressiva de visão, podendo evoluir para cegueira funcional. Ao protelar a cirurgia por muito tempo é possível que a progressão da catarata possa estar associada a maior complexidade e risco cirúrgico no futuro.',
    },
  },
];

export default templates;
