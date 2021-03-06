import { Lens } from '@atomic-object/lenses/lib';
import * as R from 'ramda';

interface HobbitState {
  isSelected: boolean;
}

interface MiddleEarthState {
  frodo: HobbitState;
  samwise: HobbitState;
  isengard: {
    peregrin: HobbitState;
    meriadoc: HobbitState;
  }
}

export type Type = MiddleEarthState;

export const InitialState: MiddleEarthState = {
  frodo: {
    isSelected: false,
  },
  samwise: {
    isSelected: false,
  },
  isengard: {
    peregrin: {
      isSelected: false,
    },
    meriadoc: {
      isSelected: false,
    },
  }
};

const frodoLens = Lens.from<MiddleEarthState>().prop('frodo');
const samwiseLens = Lens.from<MiddleEarthState>().prop('samwise');
const isengardLens = Lens.from<MiddleEarthState>().prop('isengard');
const peregrinLens = isengardLens.comp(Lens.from<MiddleEarthState['isengard']>().prop('peregrin'));
const meriadocLens = isengardLens.comp(Lens.from<MiddleEarthState['isengard']>().prop('meriadoc'));
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
export const samwiseSelectedLens = samwiseLens.comp(hobbitSelectedLens);
export const peregrinSelectedLens = peregrinLens.comp(hobbitSelectedLens);
export const meriadocSelectedLens = meriadocLens.comp(hobbitSelectedLens);

export const selectAllLens = Lens.of<MiddleEarthState, boolean>({
  get: (state) => {
    return frodoSelectedLens(state)
      && samwiseSelectedLens(state)
      && peregrinSelectedLens(state)
      && meriadocSelectedLens(state);
  },
  set: (state, value) => {
    const setFrodoSelected = frodoSelectedLens.set(value);
    return R.pipe(
      setFrodoSelected,
      samwiseSelectedLens.set(value),
      peregrinSelectedLens.set(value),
      meriadocSelectedLens.set(value),
    )(state);
  },
});
