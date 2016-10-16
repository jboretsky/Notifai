import React from 'react';

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
          imageUrl = {this.props.imageUrl}
          userName = {this.props.userName}
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

  _callback(response) {
    console.log(response);
    this.props.onLoginSuccess(response);
  }

  _componentClicked() {
  }

  render() {
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
        <div>
        <span>Hello, {this.props.userName}</span>
        <img src={this.props.imageUrl}/>
        </div>
      );
      {/* Logged in */}
    }
  }
}
