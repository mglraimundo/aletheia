import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'catarata',
    name: 'Catarata',
    subspecialty: 'CIR',
    aliases: ['faco', 'phaco', 'catarata', 'lio', 'lente intraocular'],
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
  {
    id: 'lio-subluxada',
    name: 'LIO subluxada',
    subspecialty: 'CIR',
    aliases: [],
    fields: {
      diagnosis:
        'A subluxação da lente intraocular (LIO) consiste no deslocamento da lente da sua posição original devido à degradação das estruturas de suporte. Este quadro é potenciado por fatores como a pseudoesfoliação, traumatismos ou especificidades técnicas de cirurgias prévias. Os sintomas incluem a diminuição da quantidade e qualidade da visão. Uma vez que a alteração da refração (graduação) em óculos ou lentes de contacto não restaura a função visual nesta situação, a intervenção cirúrgica torna-se a única solução eficaz.',
      description:
        'A cirurgia visa o reposicionamento ou a substituição da LIO. Sempre que viável, a lente original é fixada numa posição estável; caso contrário, procede-se à sua remoção e ao implante de uma nova LIO com suporte alternativo (fixação escleral, à íris ou no sulco ciliar). A decisão técnica final é, frequentemente, tomada no período intraoperatório. É frequente a aplicação de suturas (pontos) nas incisões. O cálculo da nova lente baseia-se em fórmulas biométricas pré-operatórias para atingir o alvo refrativo pretendido. O procedimento é realizado em ambulatório, sob anestesia loco-regional, sedação ou anestesia geral.',
      benefits:
        'Existe na maioria dos casos recuperação da visão (quantidade e qualidade) num perído de semanas após a intervenção cirúrgica. O prognóstico funcional depende muito da integridade de outras estruturas, nomeadamente a córnea, retina e o nervo óptico. Mesmo na ausência de qualquer complicação, a qualidade e quantidade de visão obtida é frequentemente inferior aquela que teve após a cirurgia original, mesmo com óculos. Na maioria dos casos será necessária a prescrição de novos óculos para otimizar o resultado visual final.',
      risks:
        'Esta reintervenção apresenta riscos superiores à cirurgia de catarata primária. Complicações comuns incluem: afaquia temporária (impossibilidade de implante imediato), ametropia significativa (miopia/hipermetropia e astigmatismo) hifema/hemovítreo, luxação da LIO para a cavidade vítrea, edema macular cistóide, descompensação corneana, hipertensão ocular/glaucoma e descolamento de retina. Complicações raras mas graves incluem a endoftalmite (1/4.000) e a hemorragia expulsiva (1/10.000). Pode haver necessidade de novas intervenções cirúrgicas para tratar complicações. A anestesia, embora segura, não é isenta de riscos sistémicos ou oculares. ',
      alternatives:
        'O único tratamento da subluxação da lente intra-ocular é a cirurgia.',
      risksOfNoTreatment:
        'A ausência de tratamento mantém ou agrava a perturbação da visão, pela progressão do deslocamento da LIO, podendo atingir a cegueira funcional. O adiamento da cirurgia aumenta a complexidade técnica, podendo resultar na queda total da lente para o segmento posterior, exigindo uma vitrectomia posterior associada.',
    },
  },
  {
    id: 'afaquia',
    name: 'Afaquia',
    subspecialty: 'CIR',
    aliases: [],
    fields: {
      diagnosis:
        'A afaquia é o estado de ausência de lente intra-ocular no seguimento de cirurgia oftalmológica prévia (p.ex de catarata) ou de traumatismo. Os sintomas associados incluem uma diminuição grande da acuidade visual associada a um erro refrativo significativo.',
      description:
        'A cirurgia visa o implante de uma LIO numa localização anatómica estável (saco capsular, sulco ciliar, fixação escleral ou à íris). A decisão técnica final é, frequentemente, tomada no período intraoperatório. É frequente a aplicação de suturas (pontos) nas incisões. O cálculo da nova lente baseia-se em fórmulas biométricas pré-operatórias para atingir o alvo refrativo pretendido. O procedimento é realizado em ambulatório, sob anestesia loco-regional, sedação ou anestesia geral.',
      benefits:
        'Existe na maioria dos casos recuperação da visão (quantidade e qualidade) num perído de semanas após a intervenção cirúrgica. O prognóstico funcional depende muito da integridade de outras estruturas, nomeadamente a córnea, retina e o nervo óptico. Mesmo na ausência de qualquer complicação, a qualidade e quantidade de visão obtida é frequentemente inferior aquela que é obtida após uma cirurgia de catarata sem interocorrências com colocação de lente intra-ocular no saco capsular no mesmo ato cirúrgico. Na maioria dos casos será necessária a prescrição de novos óculos para otimizar o resultado visual final.',
      risks:
        'Complicações comuns incluem: manutenção do estado de afaquia (por impossibilidade de implante), ametropia significativa (miopia/hipermetropia e astigmatismo) hifema/hemovítreo, luxação da LIO para a cavidade vítrea, edema macular cistóide, descompensação corneana, hipertensão ocular/glaucoma e descolamento de retina. Complicações raras mas graves incluem a endoftalmite (1/4.000) e a hemorragia expulsiva (1/10.000). Pode haver necessidade de novas intervenções cirúrgicas para tratar complicações. A anestesia, embora segura, não é isenta de riscos sistémicos ou oculares. ',
      alternatives:
        'A afaquia pode em alguns casos ser tratada por óculos (de graduação muito elevada) ou lentes de contacto. Nem sempre esta correção refrativa é possível, confortável ou bem tolerada, pelo que a cirurgia é frequentemente realizada nestas situações. ',
      risksOfNoTreatment:
        'A ausência de tratamento mantém a perturbação da visão, que muitas vezes corresponde a um estado de cegueira funcional.',
    },
  },
  {
    id: 'troca-lio',
    name: 'Troca LIO',
    subspecialty: 'CIR',
    aliases: [],
    fields: {
      diagnosis:
        'A troca da lente intraocular (LIO) é proposta em múltiplas situações clínicas: graduação pós-operatória muito diferente do planeado, diferença de graduação pós-operatória significativa entre os dois olhos (anisometropia intolerável), intolerância às propriedades ópticas da LIO, dano da LIO, entre outros quadros clínicos.',
      description:
        'A cirurgia visa a substituição da LIO. A LIO original é removida e uma nova LIO é implantada, na mesma localização (se tecnicamente viável, nomeadamente no saco capsular) ou em localização alternativa (fixação escleral, à íris ou no sulco ciliar). A decisão técnica é, frequentemente, tomada no período intraoperatório. É frequente a aplicação de suturas (pontos) nas incisões. O cálculo da nova lente baseia-se em fórmulas biométricas pré-operatórias para atingir o alvo refrativo pretendido. O procedimento é realizado em ambulatório, sob anestesia loco-regional, sedação ou anestesia geral.',
      benefits:
        'Existe na maioria dos casos recuperação da visão (quantidade e qualidade) num período de semanas após a intervenção cirúrgica. O prognóstico funcional depende muito da integridade de outras estruturas, nomeadamente a córnea, retina e o nervo óptico. Mesmo na ausência de qualquer complicação, a qualidade e quantidade de visão obtida é por vezes inferior àquela que teve após a cirurgia original, mesmo com óculos, em relação com as propriedades e localização da nova LIO. Em muitos casos será necessária a prescrição de óculos para otimizar o resultado visual final.',
      risks:
        'Esta reintervenção apresenta riscos habitualmente superiores à cirurgia de catarata primária. Complicações comuns incluem: afaquia temporária (impossibilidade de implante imediato), ametropia significativa (miopia/hipermetropia e astigmatismo), hifema/hemovítreo, luxação da LIO para a cavidade vítrea, edema macular cistóide, descompensação corneana, hipertensão ocular/glaucoma e descolamento de retina. Complicações raras mas graves incluem a endoftalmite (1/4.000) e a hemorragia expulsiva (1/10.000). Pode haver necessidade de novas intervenções cirúrgicas para tratar complicações. A anestesia, embora segura, não é isenta de riscos sistémicos ou oculares. ',
      alternatives:
        'No caso de troca de LIO motivada por erro refrativo, a utilização de óculos e/ou lentes de contacto poderá ser uma alternativa. Nas situações de troca de LIO motivada pelo desenho óptico da lente intraocular não existem habitualmente alternativas à cirurgia.',
      risksOfNoTreatment:
        'A não realização da cirurgia mantém a perturbação da visão.',
    },
  },
  {
    id: 'troca-lio-ugh',
    name: 'Troca LIO (UGH)',
    subspecialty: 'CIR',
    aliases: [],
    fields: {
      diagnosis:
        'No síndrome uveíte-glaucoma-hifema (UGH) existe um contacto anómalo entre a lente intraocular (LIO) e a face posterior da íris, levando às manifestações do síndrome: inflamação (uveíte), hipertensão ocular (que pode levar a glaucoma) e hemorragia (hifema). A troca ou reposicionamento da LIO é proposta neste contexto como forma de eliminar este contacto.',
      description:
        'A cirurgia visa a troca da LIO ou, em alguns casos, o seu reposicionamento. Se possível, a LIO original é preservada, mas a sua posição anatómica é ajustada para eliminar o contacto com a íris. Em muitos casos é necessária a remoção da LIO e implante de nova LIO numa localização alternativa (fixação escleral, à íris ou no sulco ciliar). A decisão técnica é, frequentemente, tomada no período intraoperatório. É frequente a aplicação de suturas (pontos) nas incisões. O cálculo da nova lente baseia-se em fórmulas biométricas pré-operatórias para atingir o alvo refrativo pretendido. O procedimento é realizado em ambulatório, sob anestesia loco-regional, sedação ou anestesia geral.',
      benefits:
        'A cirurgia visa eliminar a causa do síndrome UGH, levando a redução da incidência de uveíte e hifema e, em muitos casos, melhoria do controlo da pressão intraocular. Existindo glaucoma, uma neuropatia óptica, o dano existente não é reversível e a doença pode continuar a progredir, necessitando de outros tratamentos médicos ou cirúrgicos. O prognóstico funcional depende muito da integridade de outras estruturas, nomeadamente a córnea, retina e o nervo óptico. Mesmo na ausência de qualquer complicação, a qualidade e quantidade de visão obtida é por vezes inferior àquela que teve após a cirurgia original, mesmo com óculos, em relação com as propriedades e localização da nova LIO. Em muitos casos será necessária a prescrição de óculos para otimizar o resultado visual final.',
      risks:
        'Esta reintervenção apresenta riscos habitualmente superiores à cirurgia de catarata primária. Complicações comuns incluem: afaquia temporária (impossibilidade de implante imediato), ametropia significativa (miopia/hipermetropia e astigmatismo), hifema/hemovítreo, luxação da LIO para a cavidade vítrea, edema macular cistóide, descompensação corneana, hipertensão ocular/glaucoma e descolamento de retina. Complicações raras mas graves incluem a endoftalmite (1/4.000) e a hemorragia expulsiva (1/10.000). Pode haver necessidade de novas intervenções cirúrgicas para tratar complicações. A anestesia, embora segura, não é isenta de riscos sistémicos ou oculares. ',
      alternatives:
        'Não existe tratamento alternativo à troca/reposicionamento de LIO no que diz respeito a eliminar a causa do síndrome UGH. As manifestações individuais do síndrome são passíveis de outros tratamentos médicos ou cirúrgicos.',
      risksOfNoTreatment:
        'A não realização da cirurgia perpetua a causa do síndrome UGH e, por conseguinte, das suas manifestações. Em particular, a hipertensão ocular/glaucoma, se existentes, estão associados a dano progressivo e irreversível no nervo óptico.',
    },
  },
  {
    id: 'ametropia-icl',
    name: 'Ametropia (ICL)',
    subspecialty: 'CIR',
    aliases: [],
    fields: {
      diagnosis:
        'O erro refrativo (miopia, hipermetropia e/ou astigmatismo) é uma condição em que o olho não foca corretamente a luz na retina, resultando em visão desfocada. Em graus elevados, a dependência de óculos ou lentes de contacto é significativa e pode limitar a qualidade de vida e o desempenho de atividades quotidianas. A cirurgia refrativa com implante de lente ICL (Implantable Collamer Lens) é uma opção para doentes que pretendem reduzir ou eliminar a dependência de correção ótica externa, particularmente quando a cirurgia corneana (LASIK, PRK) não é indicada ou desejável.',
      description:
        'A cirurgia consiste no implante de uma lente fáquica (ICL) na câmara posterior do olho, entre a íris e o cristalino natural, que é preservado. A lente é introduzida através de uma microincisão corneana, sendo posicionada no sulco ciliar. O cálculo da potência da lente baseia-se na refração pré-operatória e o tamanho da lente com base em medições biométricas pré-operatórias, para atingir o alvo refrativo pretendido. O procedimento é realizado em ambulatório, sob sedação ou anestesia geral, com uma duração média de 15 a 20 minutos.',
      benefits:
        'A cirurgia visa reduzir ou eliminar a dependência de óculos ou lentes de contacto. Os resultados visuais são habitualmente obtidos nos primeiros dias após a intervenção. A lente é potencialmente removível ou substituível, conferindo reversibilidade ao procedimento. A independência total de correção ótica não é garantida, podendo ser necessário o uso de óculos para algumas atividades.',
      risks:
        'A maioria das cirurgias decorre sem intercorrências. A independência total de óculos não é garantida. Pode haver necessidade de troca ou remoção da ICL por vault inadequado ou de rotação da ICL (no caso das lentes tóricas). Surgem com frequência fenómenos visuais (disfotópsias) associadas ao desenho óptico da ICL, como disfotópsias anelares ou nocturnas (halos/glare), habitualmente clinicamente não significativos. Outras complicações, mais raras, com necessidade de tratamento médico e/ou cirúrgico incluem: aumento da pressão intraocular, catarata, perda de células endoteliais corneanas, dispersão pigmentar, glaucoma, endoftalmite (1/4.000) e o descolamento de retina (risco inerente na alta miopia, mas que a cirurgia pode incrementar). A anestesia, embora segura, não é isenta de riscos. ',
      alternatives:
        'A correção do erro refrativo pode ser feita com óculos ou lentes de contacto. Em alguns casos a cirurgia corneana a LASER (LASIK, PRK, SMILE) pode ser uma alternativa (em muitos não é possível). Em doentes com presbiopia ou catarata associada, habitualmente de idade superior, a extração do cristalino com implante de lente intra-ocular pode ser considerada.',
      risksOfNoTreatment:
        'A ausência de tratamento mantém a dependência de óculos ou lentes de contacto. Não há risco associado à não realização da cirurgia. É um procedimento eletivo.',
    },
  },
];

export default templates;
