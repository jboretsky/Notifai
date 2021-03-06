import React from 'react';
import moment from 'moment';

import Splash from './Splash.jsx';
import Account from './Account.jsx';

export default class Notifai extends React.Component {

  constructor() {
    super();
    this.onLoginSuccess = this._onLoginSuccess.bind(this);
    this.clarifai = new Clarifai.App(
      '7bpbR9ZvvkBkGXQVB1XzaObA3fmqTIKOJnocm3o1',
      'Y9Ouy0La2AjBJ1GleJkyE0EwmNohks6X-GCib680'
    );
    this.state = {
      user: null
    }
  }

  _onLoginSuccess(response) {
    this.setState({
      user: {
        accessToken: response.accessToken,
        email : response.email,
        name: response.name,
        profileImg: response.picture.data.url,
        uid: response.id,
      }
    })
  }
  render() {
    if (this.state.user) {
      return (<Account user={this.state.user} clarifai={this.clarifai}/>); 
    } else {
      return (<Splash onLoginSuccess={this.onLoginSuccess}/>);
    }
  }
}
