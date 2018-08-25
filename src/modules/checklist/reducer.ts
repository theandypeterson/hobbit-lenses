import { ActionTypeKeys, ActionTypes } from './actions';
import * as ShireState from '../shire-state';

const toggle = (v: boolean) => !v;
const checklistReducer = (state = ShireState.InitialState, action: ActionTypes): ShireState.Type => {
  switch (action.type) {
    case ActionTypeKeys.FrodoCheckboxClicked:
      return ShireState.frodoSelectedLens.update(state, toggle);

    case ActionTypeKeys.SamwiseCheckboxClicked:
      return ShireState.samwiseSelectedLens.update(state, toggle);

    case ActionTypeKeys.PeregrinCheckboxClicked:
      return ShireState.peregrinSelectedLens.update(state, toggle);

    case ActionTypeKeys.MeriadocCheckboxClicked:
      return ShireState.meriadocSelectedLens.update(state, toggle);

    case ActionTypeKeys.MeriadocCheckboxClicked:
      return ShireState.meriadocSelectedLens.update(state, toggle);

    case ActionTypeKeys.SelectAllClicked:
      return ShireState.selectAllLens.update(state, toggle);

    default:
      return state;
  }
};

export default checklistReducer;

