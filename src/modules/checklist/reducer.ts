import { ActionTypeKeys, ActionTypes } from './actions';
import * as MiddleEarthState from '../middle-earth-state';

const toggle = (v: boolean) => !v;
const checklistReducer = (state = MiddleEarthState.InitialState, action: ActionTypes): MiddleEarthState.Type => {
  switch (action.type) {
    case ActionTypeKeys.FrodoCheckboxClicked:
      return MiddleEarthState.frodoSelectedLens.update(state, toggle);

    case ActionTypeKeys.SamwiseCheckboxClicked:
      return MiddleEarthState.samwiseSelectedLens.update(state, toggle);

    case ActionTypeKeys.PeregrinCheckboxClicked:
      return MiddleEarthState.peregrinSelectedLens.update(state, toggle);

    case ActionTypeKeys.MeriadocCheckboxClicked:
      return MiddleEarthState.meriadocSelectedLens.update(state, toggle);

    case ActionTypeKeys.MeriadocCheckboxClicked:
      return MiddleEarthState.meriadocSelectedLens.update(state, toggle);

    case ActionTypeKeys.SelectAllClicked:
      return MiddleEarthState.selectAllLens.update(state, toggle);

    default:
      return state;
  }
};

export default checklistReducer;

