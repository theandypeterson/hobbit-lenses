import { ActionTypeKeys, ActionTypes } from './actions';
import * as LocalState from './state';

const checklistReducer = (state = LocalState.InitialState, action: ActionTypes): LocalState.Type => {
  switch (action.type) {
    case ActionTypeKeys.FrodoCheckboxClicked:
      return LocalState.frodoSelectedLens.update(state, (v) => !v);
    case ActionTypeKeys.SamwiseCheckboxClicked:
      return LocalState.samwiseSelectedLens.update(state, (v) => !v);
    default:
      return state;
  }
};

export default checklistReducer;

