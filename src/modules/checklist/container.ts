import { ChecklistUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as MiddleEarth from '../middle-earth-state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';
import * as Actions from './actions';

interface StateProps {
  frodoIsSelected: boolean;
  samwiseIsSelected: boolean;
  peregrinIsSelected: boolean;
  meriadocIsSelected: boolean;
  selectAllValue: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.middleEarthLens,
  (state) => {
    return {
      frodoIsSelected: MiddleEarth.frodoSelectedLens(state),
      samwiseIsSelected: MiddleEarth.samwiseSelectedLens(state),
      peregrinIsSelected: MiddleEarth.peregrinSelectedLens(state),
      meriadocIsSelected: MiddleEarth.meriadocSelectedLens(state),
      selectAllValue: MiddleEarth.selectAllLens(state),
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
