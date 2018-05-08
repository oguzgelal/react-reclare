// TODO: find a better solution to this
// import { startReclare, registerMiddleware } from 'reclare';
import { startReclare, registerMiddleware } from '../../reclare/src';

import getStateHooks from './hooks/getState';
import setStateHooks from './hooks/setState';

export default ({
  provider,
  declarations,
  initialState,
  options = {},
}) => {

  // register hooks
  registerMiddleware({
    onGetState: getStateHooks(provider),
    onAfterSetState: setStateHooks(provider)
  });

  // initialize reclare context
  startReclare({
    declarations,
    initialState,
    options,
  });
};
