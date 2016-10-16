import React from 'react';
import moment from 'moment';

import AppHeader from '../AppHeader.jsx';

export default class Notifai extends React.Component {
  render() {
    console.log(this.props.events);
    return (
      <div className='app'>
        <AppHeader />
      </div>
    );
  }
}
