import { VanillaConfig } from './vanilla';
import { Legacy1Game } from './legacy-1';
import { Legacy2Config } from './legacy-2';

export const games = [
    {
        name: 'Vanilla',
        config: VanillaConfig,
        engine: undefined,
    },
    Legacy1Game,
    {
        name: 'Legacy Season 2',
        config: Legacy2Config,
        engine: undefined,
    }
];
