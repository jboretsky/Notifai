import React from 'react';
import moment from 'moment';

import AppHeader from '../AppHeader.jsx';
import CalendarBody from './CalendarBody.jsx';

export default class Calendar extends React.Component {
  render() {
    console.log(this.props.events);
    return (
      <div className='app'>
        <AppHeader />
        <CalendarBody
          events={this.props.events}
          onEventAdd={this.props.onEventAdd}
        />
      </div>
    );
  }
}
