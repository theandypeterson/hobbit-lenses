import { ChecklistUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as LocalState from './state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';
import * as Actions from './actions';

interface StateProps {
  frodoIsSelected: boolean;
  samwiseIsSelected: boolean;
  peregrinIsSelected: boolean;
  meriadocIsSelected: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.checklistLens,
  (state) => {
    return {
      frodoIsSelected: LocalState.frodoSelectedLens(state),
      samwiseIsSelected: LocalState.samwiseSelectedLens(state),
      peregrinIsSelected: LocalState.peregrinSelectedLens(state),
      meriadocIsSelected: LocalState.meriadocSelectedLens(state),
    };
  },
);

interface DispatchProps {
  onFrodoCheckboxClicked(): void;
  onSamwiseCheckboxClicked(): void;
  onPeregrinCheckboxClicked(): void;
  onMeriadocCheckboxClicked(): void;
}
const mapDispatchToProps = {
  onFrodoCheckboxClicked: Actions.frodoCheckboxClicked,
  onSamwiseCheckboxClicked: Actions.samwiseCheckboxClicked,
  onPeregrinCheckboxClicked: Actions.peregrinCheckboxClicked,
  onMeriadocCheckboxClicked: Actions.meriadocCheckboxClicked,
};

export const ChecklistContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ChecklistUI);
