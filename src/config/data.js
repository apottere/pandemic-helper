import { VanillaConfig } from './vanilla';
import { Legacy1Config } from './legacy-1';
import { Legacy2Config } from './legacy-2';

export const games = [
    {
        name: 'Vanilla',
        config: VanillaConfig,
    },
    {
        name: 'Legacy Season 1',
        config: Legacy1Config,
    },
    {
        name: 'Legacy Season 2',
        config: Legacy2Config,
    }
];
