import React from 'react';
import moment from 'moment';

import Splash from './Splash.jsx';

export default class Notifai extends React.Component {

  constructor() {
    super();
    this.onLoginSuccess = this._onLoginSuccess.bind(this);
    this.state = {
      loggedIn: false,
      accessToken: "",
      email: "",
      name: "",
      imageUrl: "",
    }
  }

  _onLoginSuccess(response) {
    this.setState({
      loggedIn: true,
      accessToken: response.accessToken,
      email : response.email,
      name: response.name,
      imageUrl: response.picture.data.url,
    })
  }

  render() {
    return (
        <Splash
          onLoginSuccess = {this.onLoginSuccess}
          loggedIn = {this.state.loggedIn}
          imageUrl = {this.state.imageUrl}
          userName = {this.state.name}
        />
    );
  }
}
