import { Lens } from '@atomic-object/lenses/lib';

interface HobbitState {
  isSelected: boolean;
}

interface ChecklistState {
  frodo: HobbitState;
  samwise: HobbitState;
}

export type Type = ChecklistState;

export const InitialState: ChecklistState = {
  frodo: {
    isSelected: false,
  },
  samwise: {
    isSelected: false,
  }
};

const frodoLens = Lens.from<ChecklistState>().prop('frodo');
const samwiseLens = Lens.from<ChecklistState>().prop('samwise');
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
export const samwiseSelectedLens = samwiseLens.comp(hobbitSelectedLens);
