import { Lens } from '@atomic-object/lenses/lib';

interface HobbitState {
  isSelected: boolean;
}

interface ChecklistState {
  frodo: HobbitState;
  samwise: HobbitState;
  peregrin: HobbitState;
  meriadoc: HobbitState;
}

export type Type = ChecklistState;

export const InitialState: ChecklistState = {
  frodo: {
    isSelected: false,
  },
  samwise: {
    isSelected: false,
  },
  peregrin: {
    isSelected: false,
  },
  meriadoc: {
    isSelected: false,
  },
};

const frodoLens = Lens.from<ChecklistState>().prop('frodo');
const samwiseLens = Lens.from<ChecklistState>().prop('samwise');
const peregrinLens = Lens.from<ChecklistState>().prop('peregrin');
const meriadocLens = Lens.from<ChecklistState>().prop('meriadoc');
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
export const samwiseSelectedLens = samwiseLens.comp(hobbitSelectedLens);
export const peregrinSelectedLens = peregrinLens.comp(hobbitSelectedLens);
export const meriadocSelectedLens = meriadocLens.comp(hobbitSelectedLens);

