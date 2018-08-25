import { Action } from 'redux';

export type ActionTypes =
  FrodoCheckboxClickedAction |
  SamwiseCheckboxClickedAction |
  PeregrinCheckboxClickedAction |
  MeriadocCheckboxClickedAction;

export enum ActionTypeKeys {
  FrodoCheckboxClicked = 'App/FrodoCheckboxClicked',
  SamwiseCheckboxClicked = 'App/SamewiseCheckboxClicked',
  PeregrinCheckboxClicked = 'App/PeregrinCheckboxClicked',
  MeriadocCheckboxClicked = 'App/MeriadocCheckboxClicked',
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

interface PeregrinCheckboxClickedAction extends Action {
  type: ActionTypeKeys.PeregrinCheckboxClicked;
}
export const peregrinCheckboxClicked = (): PeregrinCheckboxClickedAction => {
  return {
    type: ActionTypeKeys.PeregrinCheckboxClicked,
  };
}

interface MeriadocCheckboxClickedAction extends Action {
  type: ActionTypeKeys.MeriadocCheckboxClicked;
}
export const meriadocCheckboxClicked = (): MeriadocCheckboxClickedAction => {
  return {
    type: ActionTypeKeys.MeriadocCheckboxClicked,
  };
}