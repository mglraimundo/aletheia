import cir from './cir';
import cornea from './cornea';
import estrabismo from './estrabismo';
import glaucoma from './glaucoma';
import imunopatologia from './imunopatologia';
import oculoplastica from './oculoplastica';
import outros from './outros';
import pediatrica from './pediatrica';
import retina from './retina';
import type { ConsentTemplate } from '../types';
import * as demo from '../templates_demo/index';

export { cir, cornea, estrabismo, glaucoma, imunopatologia, oculoplastica, outros, pediatrica, retina };

const realTemplates: ConsentTemplate[] = [
  ...cir,
  ...cornea,
  ...estrabismo,
  ...glaucoma,
  ...imunopatologia,
  ...oculoplastica,
  ...outros,
  ...pediatrica,
  ...retina,
];

const realOrder = [
  'CIR',
  'Córnea',
  'Estrabismo',
  'Glaucoma',
  'Imunopatologia',
  'Oculoplástica',
  'Outros',
  'Pediátrica',
  'Retina',
];

const isDemo = new URLSearchParams(window.location.search).has('demo');

export const ALL_TEMPLATES: ConsentTemplate[] = isDemo ? demo.ALL_TEMPLATES : realTemplates;
export const SUBSPECIALTY_ORDER: string[] = isDemo ? demo.SUBSPECIALTY_ORDER : realOrder;
