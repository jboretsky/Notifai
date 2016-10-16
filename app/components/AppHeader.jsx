import React from 'react';
import {Button} from 'react-bootstrap';

import FacebookLogin from 'react-facebook-login';


export default class AppHeader extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
    loggedIn: React.PropTypes.bool,
  };

  render() {
    return (
      <div className="header">
        <SearchBar 
          onLoginSuccess = {this.props.onLoginSuccess}
          loggedIn = {this.props.loggedIn}
        />
      </div>
    );
  }
}

export class SearchBar extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
    loggedIn: React.PropTypes.bool,
  }

  constructor() {
    super();
    this.componentClicked = this._componentClicked.bind(this);
    this.callback = this._callback.bind(this);
  }

  _callback() {
    this.props.onLoginSuccess();
  }

  _componentClicked() {
  }

  render() {
    console.log(this.props);
    if (!this.props.loggedIn) {
      return (
        <FacebookLogin
          appId="1777897672498356"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.callback} 
        />
      );
    } else {
      return (
        <div>Hello</div>
      );
      {/* Logged in */}
    }
  }
}
