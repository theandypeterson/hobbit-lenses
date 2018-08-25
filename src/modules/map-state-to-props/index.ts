import * as GlobalState from '../global-state';
import { Lens } from '@atomic-object/lenses';

export const makeMapStateToPropsFunction = <LocalState, StateProps, OwnProps>(
  lens: Lens<GlobalState.Type, LocalState>,
  mapStateToPropsFunction: (state: LocalState, props: OwnProps) => StateProps,
) => {
  return (state: GlobalState.Type, props: OwnProps) => {
    return mapStateToPropsFunction(lens(state), props);
  };
};
