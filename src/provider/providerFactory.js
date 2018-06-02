import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from '../context';

let provider = null;

class ReclareProvider extends React.Component {
  constructor(props, context) {
    super(props, context);

    provider = this;

    this.state = {
      value: {},
    };
  }

  componentWillMount() {

    const context = this.props.context;

    this.setState({
      value: { ...context.state }
    })

    context.subscribe([{
      situation: ({ hasChange }) => hasChange(),
      reaction: ({ state }) => this.setState({ value: { ...state } })
    }])
  }

  render() {
    return <Provider value={this.state.value}>{this.props.children}</Provider>;
  }
}

ReclareProvider.propTypes = {
  children: PropTypes.any,
  context: PropTypes.object,
};

export { provider };
export default ReclareProvider;
