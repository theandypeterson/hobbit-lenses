import { ImageGridUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as LocalState from '../shire-state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';

interface StateProps {
  showFrodo: boolean;
  showSamwise: boolean;
  showPeregrin: boolean;
  showMeriadoc: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.checklistLens,
  (state) => {
    return {
      showFrodo: LocalState.frodoSelectedLens(state),
      showSamwise: LocalState.samwiseSelectedLens(state),
      showPeregrin: LocalState.peregrinSelectedLens(state),
      showMeriadoc: LocalState.meriadocSelectedLens(state),
    };
  },
);


export const ImageGridContainer = connect<StateProps>(mapStateToProps)(ImageGridUI);
