import React from 'react';
import moment from 'moment';

import AppHeader from '../AppHeader.jsx';

export default class Notifai extends React.Component {

  constructor() {
    super();
    this.onLoginSuccess = this._onLoginSuccess.bind(this);
    this.state = {
      loggedIn: false,
    }
  }

  _onLoginSuccess() {
    console.log("Hello");
    this.setState({
      loggedIn: true,
    })
  }

  render() {
    return (
      <div className='app'>
        <AppHeader 
          onLoginSuccess = {this.onLoginSuccess}
          loggedIn = {this.state.loggedIn}
        />
      </div>
    );
  }
}
