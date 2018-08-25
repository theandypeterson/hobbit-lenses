import { Lens } from '@atomic-object/lenses/lib';
// import * as R from 'ramda';

interface HobbitState {
  isSelected: boolean;
}

interface MiddleEarthState {
  frodo: HobbitState;
  samwise: HobbitState;
  peregrin: HobbitState;
  meriadoc: HobbitState;
}

export type Type = MiddleEarthState;

export const InitialState: MiddleEarthState = {
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

const frodoLens = Lens.from<MiddleEarthState>().prop('frodo');
const samwiseLens = Lens.from<MiddleEarthState>().prop('samwise');
const peregrinLens = Lens.from<MiddleEarthState>().prop('peregrin');
const meriadocLens = Lens.from<MiddleEarthState>().prop('meriadoc');
const hobbitSelectedLens = Lens.from<HobbitState>().prop('isSelected');
export const frodoSelectedLens = frodoLens.comp(hobbitSelectedLens);
export const samwiseSelectedLens = samwiseLens.comp(hobbitSelectedLens);
export const peregrinSelectedLens = peregrinLens.comp(hobbitSelectedLens);
export const meriadocSelectedLens = meriadocLens.comp(hobbitSelectedLens);
