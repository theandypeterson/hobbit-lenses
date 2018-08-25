import * as ChecklistState from '../checklist/state';
import { Lens } from '@atomic-object/lenses';

interface GlobalState {
  checklist: ChecklistState.Type,
}

export type Type = GlobalState;

export const checklistLens = Lens.from<GlobalState>().prop('checklist');
