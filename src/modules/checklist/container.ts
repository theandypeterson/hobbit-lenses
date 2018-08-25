import { ChecklistUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as LocalState from './state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';
import * as Actions from './actions';

interface StateProps {
  frodoIsSelected: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.checklistLens,
  (state) => {
    return {
      frodoIsSelected: LocalState.frodoSelectedLens(state),
    };
  },
);

interface DispatchProps {
  onFrodoCheckboxClicked(): void;
}
const mapDispatchToProps = {
  onFrodoCheckboxClicked: Actions.frodoCheckboxClicked,
};

export const ChecklistContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ChecklistUI);
