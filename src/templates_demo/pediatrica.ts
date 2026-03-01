import type { ConsentTemplate } from '../types';

const templates: ConsentTemplate[] = [
  {
    id: 'exame-anestesia-geral',
    name: 'Exame sob Anestesia Geral',
    subspecialty: 'Pediátrica',
    aliases: ['exame anestesia', 'eag', 'exame sob anestesia', 'avaliacao retinopatia', 'glaucoma congenito avaliacao'],
    fields: {
      diagnostico: 'Criança com patologia ocular que não permite exame adequado em consulta, com indicação para exame sob anestesia geral',
      descricao:
        'Exame oftalmológico completo sob anestesia geral incluindo refracção sob cicloplegia, ' +
        'biomicroscopia, fundoscopia, tonometria e eventuais procedimentos diagnósticos/terapêuticos adicionais. ' +
        'Realizado em bloco operatório com suporte de anestesista.',
      beneficios:
        'Avaliação oftalmológica completa e fiável em crianças que não cooperam para exame em consulta. ' +
        'Permite diagnóstico precoce e orientação terapêutica adequada.',
      riscos:
        'Riscos inerentes à anestesia geral pediátrica (laringoespasmo, reação anestésica, raramente complicações graves). ' +
        'Risco de hipertermia maligna em doentes predispostos.',
      atos:
        'Exame sob anestesia geral com biomicroscopia, tonometria (Perkins/iCare), fundoscopia e refracção. ' +
        'Procedimentos adicionais conforme achados intraoperatórios.',
      riscosNaoTratamento:
        'Impossibilidade de avaliação adequada com atraso no diagnóstico e tratamento de patologia ocular potencialmente grave.',
    },
  },
  {
    id: 'sondagem-vias-lacrimais',
    name: 'Sondagem das Vias Lacrimais',
    subspecialty: 'Pediátrica',
    aliases: ['sondagem lacrimal', 'vias lacrimais', 'dacriocistocelhe', 'obstrucao lacrimal pediatrica', 'epifora pediatrica'],
    fields: {
      diagnostico: 'Obstrução congénita das vias lacrimais (imperforação da válvula de Hasner) com epífora e secreção persistente',
      descricao:
        'Sondagem e irrigação das vias lacrimais sob anestesia geral para desobstrução da membrana nasolacrimal distal. ' +
        'Pode incluir intubação bicanalicular com silicone em casos de obstrução complexa ou recidivante.',
      beneficios:
        'Desobstrução das vias lacrimais com resolução da epífora e infecções oculares recorrentes.',
      riscos:
        'Falsa via, sangramento, falência da sondagem com necessidade de DCR futura, ' +
        'riscos anestésicos pediátricos.',
      atos:
        'Sondagem nasolacrimal com sonda de Bowman sob anestesia geral. ' +
        'Irrigação de controlo com soro fisiológico. Eventual intubação com tubo de silicone.',
      riscosNaoTratamento:
        'Manutenção da obstrução com epífora, infecções oculares recorrentes e eventual dacriocistite.',
    },
  },
  {
    id: 'catarata-pediatrica',
    name: 'Cirurgia de Catarata Pediátrica',
    subspecialty: 'Pediátrica',
    aliases: ['catarata congenita', 'catarata pediatrica', 'criança catarata', 'leucocoria'],
    fields: {
      diagnostico: 'Catarata congénita ou adquirida na infância com indicação cirúrgica (catarata visualmente significativa)',
      descricao:
        'Facoemulsificação ou lensectomia com vitrectomia anterior e implante de lente intraocular (se indicado pela idade) ' +
        'para tratamento da catarata pediátrica. Inclui planeamento de correcção óptica e tratamento da ambliopia.',
      beneficios:
        'Prevenção e tratamento da ambliopia. Desenvolvimento visual adequado e recuperação da acuidade visual.',
      riscos:
        'Ambliopia persistente, glaucoma, opacificação capsular precoce, descolamento de retina, ' +
        'endoftalmite, sobrecrescimento de membrana posterior, riscos anestésicos pediátricos.',
      atos:
        'Facoemulsificação/lensectomia com capsulectomia posterior primária e vitrectomia anterior. ' +
        'Anestesia geral. Correcção óptica pós-operatória e oclusão terapêutica.',
      riscosNaoTratamento:
        'Ambliopia profunda e irreversível com perda permanente da visão se não tratada em período crítico.',
    },
  },
  {
    id: 'rop-laser',
    name: 'Laser para Retinopatia da Prematuridade (ROP)',
    subspecialty: 'Pediátrica',
    aliases: ['rop', 'retinopatia prematuridade', 'prematuro retina', 'laser rop'],
    fields: {
      diagnostico: 'Retinopatia da prematuridade em zona I ou zona II posterior com doença tipo 1 ou pré-limiar agressiva',
      descricao:
        'Fotocoagulação laser da retina avascular periférica para ablação do tecido isquémico estimulador de neovascularização, ' +
        'reduzindo o risco de progressão para descolamento de retina tratável.',
      beneficios:
        'Prevenção da progressão da ROP para estadios avançados e descolamento de retina. ' +
        'Preservação da visão central.',
      riscos:
        'Miopia induzida, perda de campo visual periférico, progressão apesar do tratamento, ' +
        'complicações anestésicas em neonato prematuro.',
      atos:
        'Fotocoagulação laser da retina avascular sob anestesia geral ou sedação profunda. ' +
        'Realizado em unidade de cuidados intensivos neonatais ou bloco operatório com suporte neonatal.',
      riscosNaoTratamento:
        'Progressão para descolamento de retina traccional com cegueira.',
    },
  },
  {
    id: 'injecao-intravitrea-pediatrica',
    name: 'Injecção Intravítrea Pediátrica (Anti-VEGF)',
    subspecialty: 'Pediátrica',
    aliases: ['intravitrea pediatrica', 'anti-vegf pediatrico', 'rop anti-vegf', 'bevacizumab crianca'],
    fields: {
      diagnostico: 'Retinopatia da prematuridade zona I ou doença agressiva posterior com indicação para terapêutica anti-VEGF intravítrea',
      descricao:
        'Injecção intravítrea de agente anti-VEGF (bevacizumab ou ranibizumab) para tratamento de ROP em zonas posteriores, ' +
        'onde o laser é de difícil aplicação ou como complemento ao mesmo.',
      beneficios:
        'Regressão rápida e eficaz da neovascularização em ROP zona I. ' +
        'Preservação da retina periférica com menor indução de miopia que o laser.',
      riscos:
        'Recorrência tardia (necessitando vigilância prolongada), efeitos sistémicos do anti-VEGF no neonato prematuro, ' +
        'endoftalmite, complicações anestésicas.',
      atos:
        'Injecção intravítrea sob anestesia geral ou sedação profunda em ambiente hospitalar com suporte neonatal. ' +
        'Vigilância oftalmológica semanal subsequente.',
      riscosNaoTratamento:
        'Progressão da ROP com descolamento de retina e cegueira.',
    },
  },
];

export default templates;
