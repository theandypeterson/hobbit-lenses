import { ChecklistUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as ShireState from '../shire-state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';
import * as Actions from './actions';

interface StateProps {
  frodoIsSelected: boolean;
  samwiseIsSelected: boolean;
  peregrinIsSelected: boolean;
  meriadocIsSelected: boolean;
  allSelected: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.checklistLens,
  (state) => {
    return {
      frodoIsSelected: ShireState.frodoSelectedLens(state),
      samwiseIsSelected: ShireState.samwiseSelectedLens(state),
      peregrinIsSelected: ShireState.peregrinSelectedLens(state),
      meriadocIsSelected: ShireState.meriadocSelectedLens(state),
      allSelected: ShireState.selectAllLens(state),
    };
  },
);

interface DispatchProps {
  onFrodoCheckboxClicked(): void;
  onSamwiseCheckboxClicked(): void;
  onPeregrinCheckboxClicked(): void;
  onMeriadocCheckboxClicked(): void;
  onSelectAllClicked(): void;
}
const mapDispatchToProps = {
  onFrodoCheckboxClicked: Actions.frodoCheckboxClicked,
  onSamwiseCheckboxClicked: Actions.samwiseCheckboxClicked,
  onPeregrinCheckboxClicked: Actions.peregrinCheckboxClicked,
  onMeriadocCheckboxClicked: Actions.meriadocCheckboxClicked,
  onSelectAllClicked: Actions.selectAllClicked,
};

export const ChecklistContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ChecklistUI);
