import { Action } from 'redux';

export type ActionTypes =
  FrodoCheckboxClickedAction;

export enum ActionTypeKeys {
  FrodoCheckboxClicked = 'App/FrodoCheckboxClicked',
};

interface FrodoCheckboxClickedAction extends Action {
  type: ActionTypeKeys.FrodoCheckboxClicked;
}

export const frodoCheckboxClicked = (): FrodoCheckboxClickedAction => {
  return {
    type: ActionTypeKeys.FrodoCheckboxClicked,
  };
}

