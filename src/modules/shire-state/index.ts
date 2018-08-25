import { Lens } from '@atomic-object/lenses/lib';
import * as R from 'ramda';

interface HobbitState {
  isSelected: boolean;
}

interface ShireState {
  frodo: HobbitState;
  samwise: HobbitState;
  peregrin: HobbitState;
  meriadoc: HobbitState;
}

export type Type = ShireState;

export const InitialState: ShireState = {
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

const frodoLens = Lens.from<ShireState>().prop('frodo');
const samwiseLens = Lens.from<ShireState>().prop('samwise');
const peregrinLens = Lens.from<ShireState>().prop('peregrin');
const meriadocLens = Lens.from<ShireState>().prop('meriadoc');
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
export const samwiseSelectedLens = samwiseLens.comp(hobbitSelectedLens);
export const peregrinSelectedLens = peregrinLens.comp(hobbitSelectedLens);
export const meriadocSelectedLens = meriadocLens.comp(hobbitSelectedLens);

export const selectAllLens = Lens.of<ShireState, boolean>({
  get: (state) => {
    return frodoSelectedLens(state) &&
      samwiseSelectedLens(state) &&
      peregrinSelectedLens(state) &&
      meriadocSelectedLens(state);
  },
  set: (state, value) => {
    return R.pipe(
      frodoSelectedLens.set(value),
      samwiseSelectedLens.set(value),
      peregrinSelectedLens.set(value),
      meriadocSelectedLens.set(value),
    )(state);
  },
});