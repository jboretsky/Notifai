import React from 'react';

import Brand from './Brand.jsx';
import FacebookLogin from 'react-facebook-login';


export default class Splash extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
    loggedIn: React.PropTypes.bool,
  };

  render() {
    return (
      <div className="container"> 
        <div className="splash columns">
          <div className="column col-3 col-sm-1"></div>
          <div className="column col-6 col-sm-10">
            <h1><Brand/></h1>
            <p>Notifai keeps an eye on your Facebook tags so you don't have to.</p>
            <FacebookAuth
              onLoginSuccess = {this.props.onLoginSuccess}
              loggedIn = {this.props.loggedIn}
              imageUrl = {this.props.imageUrl}
              userName = {this.props.userName}
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
    loggedIn: React.PropTypes.bool,
  }

  constructor() {
    super();
    this.componentClicked = this._componentClicked.bind(this);
    this.callback = this._callback.bind(this);
    this.state = {
      clicked: false
    };
  }

  _callback(response) {
    this.props.onLoginSuccess(response);
  }

  _componentClicked(){
    this.setState({clicked: true});
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <FacebookLogin
          appId="616102381854407"
          autoLoad={true}
          textButton=" Connect to Facebook"
          cssClass= {"btn btn-lg btn-primary" + (this.state.clicked ? " loading" : "") }
          icon={<i className='typcn typcn-social-facebook'></i>}
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
    }
  }
}
