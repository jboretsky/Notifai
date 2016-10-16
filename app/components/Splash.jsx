import React from 'react';

import Brand from './parts/Brand.jsx';
import FacebookLogin from 'react-facebook-login';
import Clarifai from 'clarifai';

export default class Splash extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
  };

  render() {
    return (
      <div className="splash container"> 
        <div className="columns">
          <div className="column col-3 col-sm-1"></div>
          <div className="column col-6 col-sm-10">
            <h1><Brand/></h1>
            <p>Notifai keeps an eye on your Facebook tags so you don't have to.</p>
            <FacebookAuth
              onLoginSuccess = {this.props.onLoginSuccess}
            />
          </div>
        </div>
      </div>
    );
  }
}

export class FacebookAuth extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
  }

  constructor() {
    super();
    this.callback = this._callback.bind(this);
    this.state = {
      clicked: false,
    }
  }

  _callback(response) {
    this.props.onLoginSuccess(response);
  }

  _componentClicked() {
    this.setState({clicked: true});
  }

  render() {
    return (
      <FacebookLogin
        appId="878588115605831"
        autoLoad={true}
        textButton=" Connect to Facebook"
        cssClass= {"btn btn-lg btn-primary" + (this.state.clicked ? " loading" : "") }
        icon="fa-facebook"
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.callback}
        scope="user_photos"
      />
    );
  }
}
