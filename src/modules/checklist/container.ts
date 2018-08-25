import { ChecklistUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as LocalState from './state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';
import * as Actions from './actions';

interface StateProps {
  frodoIsSelected: boolean;
  samwiseIsSelected: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.checklistLens,
  (state) => {
    return {
      frodoIsSelected: LocalState.frodoSelectedLens(state),
      samwiseIsSelected: LocalState.samwiseSelectedLens(state),
    };
  },
);

interface DispatchProps {
  onFrodoCheckboxClicked(): void;
  onSamwiseCheckboxClicked(): void;
}
const mapDispatchToProps = {
  onFrodoCheckboxClicked: Actions.frodoCheckboxClicked,
  onSamwiseCheckboxClicked: Actions.samwiseCheckboxClicked,
};

export const ChecklistContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ChecklistUI);
