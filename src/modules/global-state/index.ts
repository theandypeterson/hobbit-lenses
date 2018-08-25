import * as ShireState from '../shire-state';
import { Lens } from '@atomic-object/lenses';

interface GlobalState {
  shire: ShireState.Type,
}

export type Type = GlobalState;

export const checklistLens = Lens.from<GlobalState>().prop('shire');
