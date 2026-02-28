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

export { cir, cornea, estrabismo, glaucoma, imunopatologia, oculoplastica, outros, pediatrica, retina };

export const SUBSPECIALTY_ORDER = [
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

export const ALL_TEMPLATES: ConsentTemplate[] = [
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
