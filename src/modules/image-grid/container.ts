import { ImageGridUI } from './ui';
import { connect } from 'react-redux';
import * as GlobalState from '../global-state';
import * as MiddleEarthState from '../middle-earth-state';
import { makeMapStateToPropsFunction } from '../map-state-to-props';

interface StateProps {
  showFrodo: boolean;
  showSamwise: boolean;
  showPeregrin: boolean;
  showMeriadoc: boolean;
}
const mapStateToProps = makeMapStateToPropsFunction(
  GlobalState.middleEarthLens,
  (state) => {
    return {
      showFrodo: MiddleEarthState.frodoSelectedLens(state),
      showSamwise: MiddleEarthState.samwiseSelectedLens(state),
      showPeregrin: MiddleEarthState.peregrinSelectedLens(state),
      showMeriadoc: MiddleEarthState.meriadocSelectedLens(state),
    };
  },
);


export const ImageGridContainer = connect<StateProps>(mapStateToProps)(ImageGridUI);
