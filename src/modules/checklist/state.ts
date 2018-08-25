import { Lens } from '@atomic-object/lenses/lib';

interface HobbitState {
  isSelected: boolean;
}

interface ChecklistState {
  frodo: HobbitState;
}

export type Type = ChecklistState;

export const InitialState: ChecklistState = {
  frodo: {
    isSelected: false,
  },
};

const frodoLens = Lens.from<ChecklistState>().prop('frodo');
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
