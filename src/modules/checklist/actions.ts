import { Action } from 'redux';

export type ActionTypes =
  FrodoCheckboxClickedAction |
  SamwiseCheckboxClickedAction;

export enum ActionTypeKeys {
  FrodoCheckboxClicked = 'App/FrodoCheckboxClicked',
  SamwiseCheckboxClicked = 'App/SamewiseCheckboxClicked',
};

interface FrodoCheckboxClickedAction extends Action {
  type: ActionTypeKeys.FrodoCheckboxClicked;
}

export const frodoCheckboxClicked = (): FrodoCheckboxClickedAction => {
  return {
    type: ActionTypeKeys.FrodoCheckboxClicked,
  };
}

interface SamwiseCheckboxClickedAction extends Action {
  type: ActionTypeKeys.SamwiseCheckboxClicked;
}

export const samwiseCheckboxClicked = (): SamwiseCheckboxClickedAction => {
  return {
    type: ActionTypeKeys.SamwiseCheckboxClicked,
  };
}