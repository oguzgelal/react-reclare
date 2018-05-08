import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from '../context';
import initialize from '../initialize';

let provider = null;

class ReclareProvider extends React.Component {
  constructor(props, context) {
    super(props, context);

    provider = this;

    this.state = {};
  }

  componentWillMount() {
    const { declarations, initialState = {}, options = {} } = this.props;

    // initialize the reclare & react-reclare
    initialize({ provider, declarations, initialState, options });

    // set the for the first load
    this.setState({ value: initialState });
  }

  render() {
    return <Provider value={this.state.value}>{this.props.children}</Provider>;
  }
}

ReclareProvider.propTypes = {
  declarations: PropTypes.array,
  initialState: PropTypes.object,
  options: PropTypes.object,
};

export { provider };
export default ReclareProvider;
