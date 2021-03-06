import React from 'react';

import {connect} from 'react-redux';
import EventActions from '../actions/EventActions';

import Notifai from '../components/Notifai';

require('../assets/favicon.ico');
require('file?name=graph.png!../assets/Notifai-Graph.png');

class AppContainer extends React.Component {
  render() {
    const {events, onEventAdd} = this.props;
    return (
      <Notifai />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEventAdd: (value, date) => {
      dispatch(EventActions.addEvent(value, date))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
