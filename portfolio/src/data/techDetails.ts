export type { TechDetail, ContentItem } from './types';
import type { TechDetail } from './types';

import { scriptEngine } from './techDetails/script-engine';
import { ar } from './techDetails/ar';
import { unity } from './techDetails/unity';
import { multiplay } from './techDetails/multiplay';
import { frontend } from './techDetails/frontend';
import { backend } from './techDetails/backend';
import { problemSolving } from './techDetails/problem-solving';
import { metaverse } from './techDetails/metaverse';

export const coreCompetencies = [
    { id: 'script-engine', name: 'RuntimeScript Engine', icon: '📜' },
    { id: 'ar', name: 'AR', icon: '📱' },
    { id: 'unity', name: 'Unity', icon: '🎮' },
    { id: 'multiplay', name: 'MultiPlay', icon: '🌐' },
    { id: 'metaverse', name: 'Metaverse', icon: '🌌' },
    { id: 'frontend', name: 'Frontend', icon: '💻' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'problem-solving', name: 'Problem Solving', icon: '💡' },
];

export const techDetails: TechDetail[] = [
  scriptEngine,
  ar,
  unity,
  multiplay,
  frontend,
  backend,
  problemSolving,
  metaverse,
];

