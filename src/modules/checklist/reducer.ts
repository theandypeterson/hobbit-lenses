import { ActionTypeKeys, ActionTypes } from './actions';
import * as LocalState from './state';

const toggle = (v: boolean) => !v;
const checklistReducer = (state = LocalState.InitialState, action: ActionTypes): LocalState.Type => {
  switch (action.type) {
    case ActionTypeKeys.FrodoCheckboxClicked:
      return LocalState.frodoSelectedLens.update(state, toggle);
    case ActionTypeKeys.SamwiseCheckboxClicked:
      return LocalState.samwiseSelectedLens.update(state, toggle);
    case ActionTypeKeys.PeregrinCheckboxClicked:
      return LocalState.peregrinSelectedLens.update(state, toggle);
    case ActionTypeKeys.MeriadocCheckboxClicked:
      return LocalState.meriadocSelectedLens.update(state, toggle);
    default:
      return state;
  }
};

export default checklistReducer;

