import * as MiddleEarthState from '../middle-earth-state';
import { Lens } from '@atomic-object/lenses';

interface GlobalState {
  middleEarth: MiddleEarthState.Type,
}

export type Type = GlobalState;

export const middleEarthLens = Lens.from<GlobalState>().prop('middleEarth');
