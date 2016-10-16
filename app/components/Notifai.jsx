import React from 'react';
import moment from 'moment';

import Splash from './Splash.jsx';

import Clarifai from 'clarifai';

export default class Notifai extends React.Component {

  constructor() {
    super();
    this.onLoginSuccess = this._onLoginSuccess.bind(this);
    this.app = new Clarifai.App(
      '7bpbR9ZvvkBkGXQVB1XzaObA3fmqTIKOJnocm3o1',
      'Y9Ouy0La2AjBJ1GleJkyE0EwmNohks6X-GCib680'
    );
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
    // example of image prediction on profile picture
    if (this.state.loggedIn) {
      this.app.models.predict(Clarifai.GENERAL_MODEL, this.state.imageUrl).then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.error(err);
        }
      );
    }
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
