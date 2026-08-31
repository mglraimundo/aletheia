import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'buraco-macular-vitrectomia',
    name: 'Buraco macular',
    subspecialty: 'Retina',
    aliases: ['buraco'],
    fields: {
      diagnosis:
        'O buraco macular consiste numa solução de continuidade da retina neurossensorial ao nível da fóvea. Os sintomas incluem diminuição da acuidade visual central, metamorfopsias (distorção das imagens) e, nos casos mais avançados, perceção de uma mancha ou escotoma central.',
      description:
        'Cirurgia de vitrectomia via pars plana, com pelagem da membrana limitante interna em redor do buraco macular, para encerrar o buraco macular. Em casos selecionados o buraco pode ser encerrado com outros componentes (membrana amniótica, concentrado de plaquetas...). No final da cirurgia é habitualmente realizado tamponamento intraocular com gás (SF6 ou C3F8) para promover a aposição dos bordos do buraco durante a cicatrização.  A cirurgia de retina pode ser combinada com facoemulsificação do cristalino e implante de lente intraocular quando clinicamente indicado, sobretudo em doentes fáquicos de idade mais avançada. Realizada habitualmente sob anestesia locorregional (subtenoniana), podendo alguns casos requerer sedação ou anestesia geral.',
      benefits:
        'A cirurgia visa o encerramento anatómico do buraco macular, com melhoria ou estabilização da acuidade visual central e da distorção das imagens (metamorfopsias). A taxa de encerramento anatómico é elevada, sendo a recuperação funcional variável e dependente de fatores como o tamanho e a duração do buraco macular antes da cirurgia.',
      risks:
        'A cirurgia comporta riscos, nomeadamente falência do encerramento do buraco macular ou reabertura tardia, catarata, descolamento de retina, hemorragia vítrea, aumento da pressão intraocular e endoftalmite. A anestesia, embora segura, não é isenta de riscos. Certas complicações podem exigir reintervenção.',
      alternatives:
        'Não existe alternativa não cirúrgica eficaz para o encerramento definitivo de um buraco macular de espessura total já estabelecido.',
      risksOfNoTreatment:
        'Progressão do buraco macular, com aumento das suas dimensões, agravamento da distorção das imagens e da diminuição da acuidade visual central. Quanto maior o tempo decorrido entre o diagnóstico e a cirurgia, menor tende a ser a probabilidade de recuperação funcional completa.',
    },
  },
  {
    id: 'descolamento-de-retina-retinopexia-pneumatica',
    name: 'Descolamento de retina (RP)',
    subspecialty: 'Retina',
    aliases: ['descolamento'],
    fields: {
      diagnosis:
        'Descolamento de retina regmatogénico com características anatómicas favoráveis a este procedimento, nomeadamente defeitos retinianos únicos ou grupo de defeitos de pequenas dimensões, localizados na metade superior da retina, sem sinais significativos de proliferação vitreorretiniana, e com meios oculares suficientemente transparentes para uma boa visualização do fundo ocular.',
      description:
        'A retinopexia pneumática consiste na injeção de uma bolha de gás (C3F8 ou SF6) na cavidade vítrea, associada ao tratamento do(s) defeito(s) retiniano(s) com fotocoagulação a laser. A bolha de gás tampona o defeito e permite, com o posicionamento adequado da cabeça nos dias seguintes, a reabsorção espontânea do líquido sub-retiniano e a reaplicação da retina. É realizada habitualmente em regime ambulatório, sob anestesia local. É exigido posicionamento pós-operatório rigoroso, por vezes durante vários dias, e existe contraindicação absoluta de viagens aéreas ou de deslocação a grande altitude enquanto persistir a bolha de gás intraocular, pelo risco de aumento perigoso da pressão intraocular. Caso não se obtenha a reaplicação da retina com esta técnica, é necessário realizar cirurgia (vitrectomia) para o tratamento do descolamento de retina.',
      benefits:
        'Procedimento minimamente invasivo, com o intuito de evitar uma cirurgia intraocular major, associado a recuperação mais rápida e menor desconforto pós-operatório.',
      risks:
        'Falência da reaplicação retiniana ou redescolamento, formação de novos defeitos retinianos, proliferação vitreorretiniana, hemorragia vítrea e endoftalmite. Pode ocorrer um aumento transitório e por vezes significativo da pressão intraocular após a injeção de gás. Pode ocorrer migração da bolha de gás para a câmara anterior, sobretudo em olhos afáquicos ou com fragilidade zonular/rutura da cápsula.  Existe risco, embora baixo, de catarata traumática em doentes fáquicos. A anestesia local, embora segura, não é isenta de riscos.',
      alternatives:
        'Vitrectomia via pars plana, com ou sem indentação escleral associada, ou indentação escleral isolada, consoante a localização e o número de roturas, a presença de proliferação vitreorretiniana, o estado do cristalino e a capacidade do doente para cumprir o posicionamento pós-operatório exigido pela retinopexia pneumática.',
      risksOfNoTreatment:
        'Progressão do descolamento com envolvimento macular e perda de visão central potencialmente irreversível, podendo evoluir para descolamento total da retina e perda funcional grave ou total da visão do olho afetado. Quanto maior o tempo decorrido entre o diagnóstico e o tratamento, pior tende a ser o prognóstico visual final.',
    },
  },
  {
    id: 'descolamento-de-retina-vitrectomia',
    name: 'Descolamento de retina (VPP)',
    subspecialty: 'Retina',
    aliases: ['descolamento'],
    fields: {
      diagnosis:
        'O descolamento de retina consiste na separação da retina neurossensorial do epitélio pigmentar subjacente, mais frequentemente devido a uma rasgadura ou buraco retiniano (descolamento regmatogénico), podendo também resultar de tração vitreorretiniana (tracional). Os sintomas associados incluem aparecimento súbito ou aumento de moscas volantes (miodesópsias), flashes de luz (fotópsias), perceção de sombra, cortina ou véu no campo visual e, se a mácula estiver envolvida, diminuição marcada da acuidade visual central.',
      description:
        'Cirurgia de vitrectomia via pars plana (VPP), podendo ser associada a indentação escleral em casos selecionados. O procedimento inclui remoção do vítreo, drenagem de líquido sub-retiniano, tratamento dos defeitos retinianos com laser ou crioterapia, e tamponamento intraocular com gás ou óleo de silicone para manter a retina aplicada durante a cicatrização. Pode ser combinada com facoemulsificação do cristalino quando clinicamente indicado.  A técnica é escolhida em função da localização, extensão e características do descolamento, sendo habitualmente realizada sob anestesia locorregional (subtenoniana), podendo alguns casos requerer sedação ou anestesia geral. Duração média de 45 a 90 minutos, podendo prolongar-se em casos mais complexos.',
      benefits:
        'A cirurgia visa reaplicar a retina e preservar ou recuperar a função visual, evitando a progressão para perda visual grave ou cegueira do olho afetado. A recuperação da acuidade visual depende de fatores como o envolvimento macular prévio, a duração do descolamento antes da cirurgia e a eventual presença de proliferação vitreorretiniana.',
      risks:
        'A cirurgia comporta riscos, nomeadamente redescolamento de retina, proliferação vitreorretiniana, catarata, hemorragia vítrea, aumento da pressão intraocular, hipotonia ocular, endoftalmite, hemorragia expulsiva e descolamento coroideu.  Podem ocorrer diplopia (mais associada à indentação) e ptose palpebral transitória. Em casos extremos, e de forma rara, existe risco de perda visual grave ou perda do olho. A anestesia, embora segura, não é isenta de riscos. Certas complicações podem exigir reintervenção.',
      alternatives:
        'Em casos selecionados, nomeadamente defeitos retinianos sem descolamento associado ou defeitos com ou sem descolamentos muito localizados, pode ser considerado tratamento com laser ou retinopexia pneumática, consoante as características específicas do caso.',
      risksOfNoTreatment:
        'Progressão do descolamento com envolvimento macular e perda de visão central potencialmente irreversível, podendo evoluir para descolamento total da retina e perda funcional grave ou total da visão do olho afetado. Quanto maior o tempo decorrido entre o diagnóstico e a cirurgia, pior tende a ser o prognóstico visual final.',
    },
  },
  {
    id: 'endoftalmite-injecao-iv-de-antibiotico',
    name: 'Endoftalmite (IIV)',
    subspecialty: 'Retina',
    aliases: ['endoftalmite'],
    fields: {
      diagnosis:
        'A endoftalmite é uma infeção intraocular grave, geralmente de causa bacteriana ou, mais raramente, fúngica. Ocorre mais frequentemente após cirurgia intraocular (catarata, injeções intravítreas ou cirurgia vitreorretiniana), na sequência de traumatismo ocular penetrante, ou, mais raramente, por via endógena, através de disseminação hematogénica a partir de um foco infecioso à distância. Constitui uma emergência oftalmológica com necessidade de tratamento a curto prazo para tentar preservar a visão e a integridade do olho.',
      description:
        'Injeção intravítrea de antibióticos, habitualmente uma associação de dois fármacos com espetro de ação complementar (por exemplo, vancomicina e ceftazidima, podendo o esquema ser ajustado consoante o contexto clínico ou o resultado de exames microbiológicos), administrada por via pars plana com agulha fina, em ambiente asséptico. É frequentemente associada à colheita prévia de uma amostra de humor vítreo e/ou aquoso para exame microbiológico (Gram, cultura e antibiograma, eventualmente PCR), de modo a orientar o tratamento. Realizada sob anestesia tópica ou sedação/anestesia geral, com duração curta. Consoante a evolução clínica, pode ser necessário repetir a injeção 48 horas depois, ou associar vitrectomia via pars plana nos casos mais graves ou com má resposta inicial ao tratamento.',
      benefits:
        'A administração direta do antibiótico na cavidade vítrea permite atingir rapidamente concentrações intraoculares elevadas e eficazes, muito superiores às obtidas por via sistémica, possibilitando o controlo mais rápido da infeção e limitando o dano estrutural e funcional ao globo ocular. É fundamental para tentar preservar a visão e, nos casos mais graves, o próprio olho.',
      risks:
        'Hemorragia vítrea, catarata traumática (lesão do cristalino durante a injeção), descolamento de retina, aumento da pressão intraocular e hipotonia ocular. Pode ocorrer dor, hiperemia e desconforto local no período pós-injeção imediato. É possível ocorrer toxicidade retiniana relacionada com o antibiótico utilizado. Outras complicações incluem introdução ou agravamento de infeção associada ao próprio procedimento, persistência ou recorrência da infeção apesar do tratamento (podendo exigir nova injeção ou vitrectomia adicional), e, em casos extremos de infeção não controlada, perda anatómica do olho, com eventual necessidade de evisceração ou enucleação. A anestesia é segura, mas o procedimento não é isento de risco.',
      alternatives:
        'Nos quadros de endoftalmite estabelecida, a injeção intravítrea de antibióticos, associada ou não a vitrectomia consoante a gravidade e a acuidade visual à apresentação, constitui o tratamento de primeira linha, não existindo alternativa eficaz não invasiva. A antibioticoterapia sistémica isolada é, na generalidade dos casos, insuficiente para atingir concentrações intravítreas terapêuticas.',
      risksOfNoTreatment:
        'Progressão rápida da infeção intraocular, com destruição das estruturas oculares e perda visual grave e habitualmente irreversível, podendo evoluir para perda anatómica do olho, com necessidade de evisceração ou enucleação. Existe ainda risco, ainda que raro, de disseminação sistémica da infeção.',
    },
  },
  {
    id: 'luxacao-posterior-de-lio-vitrectomia-e-troca-de-lio',
    name: 'Luxação posterior LIO',
    subspecialty: 'Retina',
    aliases: ['luxação'],
    fields: {
      diagnosis:
        'A luxação (ou subluxação) da lente intraocular (LIO) corresponde ao deslocamento parcial ou total da lente previamente implantada da sua posição anatómica normal no saco capsular ou sulco ciliar, podendo em casos mais graves cair para a cavidade vítrea. As causas mais frequentes incluem fragilidade zonular, rutura capsular durante a cirurgia inicial de catarata, traumatismo ocular ou degradação progressiva do suporte capsular, anos após a cirurgia original.',
      description:
        'Cirurgia de vitrectomia via pars plana, com remoção da lente intraocular pré-existente e substituição por uma nova LIO.  Realizada habitualmente sob anestesia locorregional, podendo alguns casos requerer sedação ou anestesia geral, com duração média de 45 a 90 minutos.',
      benefits: 'Melhoria da acuidade visual.',
      risks:
        'A cirurgia comporta riscos, nomeadamente hemorragia vítrea, edema macular cistoide, descolamento de retina, aumento da pressão intraocular, astigmatismo induzido, endoftalmite e hemorragia expulsiva. A anestesia, embora segura, não é isenta de riscos. Algumas complicações podem exigir reintervenção.',
      alternatives:
        'Não existe alternativa não cirúrgica eficaz para a correção definitiva da posição da lente intraocular.',
      risksOfNoTreatment:
        'Permanência da lente intraocular na cavidade vítrea, com manutenção ou agravamento da acuidade visual. Existe risco de inflamação ocular crónica por reação a corpo estranho, aumento da pressão intraocular ou glaucoma secundário, tração vitreorretiniana com possível descolamento de retina, e hemorragia vítrea recorrente.',
    },
  },
  {
    id: 'mer-vitrectomia',
    name: 'Membrana epirretiniana',
    subspecialty: 'Retina',
    aliases: ['membrana'],
    fields: {
      diagnosis:
        'A membrana epirretiniana consiste na proliferação de tecido fibrocelular na superfície da retina, mais frequentemente na região macular, provocando tração e distorção da arquitetura retiniana normal. Pode ser idiopática (a forma mais frequente, associada ao envelhecimento e ao descolamento do vítreo posterior) ou secundária a outras patologias oculares, como descolamento de retina prévio, uveíte, retinopatia diabética, oclusões vasculares retinianas, traumatismo ocular ou cirurgia intraocular prévia. Os sintomas incluem diminuição progressiva da acuidade visual e metamorfopsias (perceção distorcida ou ondulada de linhas retas), podendo em casos mais avançados surgir diplopia monocular ou um escotoma (mancha) na visão central.',
      description:
        'Propõe-se cirurgia de vitrectomia via pars plana (VPP) com peeling da membrana epirretiniana, habitualmente associada à remoção da membrana limitante interna com auxílio da utilização de corante. Pode ser combinada com facoemulsificação do cristalino e implante de lente intraocular no mesmo tempo cirúrgico em doentes fáquicos. Realizada habitualmente sob anestesia locorregional, podendo alguns casos requerer sedação ou anestesia geral, com duração média de 30 a 60 minutos, sendo a maioria dos casos realizada em regime ambulatório.',
      benefits:
        'Melhoria da acuidade visual e redução das metamorfopsias, embora a recuperação seja habitualmente parcial, lenta e gradual. O objetivo principal é estabilizar ou melhorar a função visual e prevenir a progressão da distorção retiniana. Nem sempre existe melhoria completa da visão, sobretudo se a membrana for de longa duração ou já existir dano estrutural retiniano significativo prévio à cirurgia.',
      risks:
        'A cirurgia tem riscos associados, nomeadamente catarata, aumento da pressão intraocular, hemorragia vítrea, rasgaduras retinianas iatrogénicas, descolamento de retina, recidiva, defeitos de campo visual paracentrais e edema macular. Riscos mais raros incluem endoftalmite e hemorragia expulsiva.  A anestesia, embora segura, não é isenta de riscos. Certas complicações podem exigir reintervenção.',
      alternatives:
        'Não existe tratamento médico eficaz para a remoção da membrana epirretiniana. Em casos assintomáticos ou com sintomas ligeiros e sem impacto funcional relevante, pode optar-se por vigilância clínica periódica, sendo a cirurgia reservada para quando existe compromisso funcional significativo da visão.',
      risksOfNoTreatment:
        'Progressão da distorção visual e perda gradual de acuidade visual. A membrana pode espessar e tornar-se mais aderente à retina ao longo do tempo, dificultando tecnicamente a cirurgia e podendo comprometer o resultado visual final caso a intervenção seja protelada.',
    },
  },
];

export default templates;
