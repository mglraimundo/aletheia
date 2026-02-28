import implantoRefrativa from './implanto-refrativa';
import glaucoma from './glaucoma';
import cornea from './cornea';
import type { ConsentTemplate } from '../types';

export const SUBSPECIALTY_ORDER = [
  'Cirurgia Implanto-Refrativa',
  'Glaucoma',
  'Córnea',
];

export const ALL_TEMPLATES: ConsentTemplate[] = [
  ...implantoRefrativa,
  ...glaucoma,
  ...cornea,
];
