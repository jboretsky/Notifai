import React from 'react';

import Brand from './Brand.jsx';
import ClickableImage from './ClickableImage';
import FacebookLogin from 'react-facebook-login';
import Clarifai from 'clarifai';


export default class Splash extends React.Component {
  static propTypes = {
    onLoginSuccess: React.PropTypes.func,
    loggedIn: React.PropTypes.bool,
    imageUrl: React.PropTypes.string,
    userName: React.PropTypes.string,
    accessToken: React.PropTypes.string,
    uid: React.PropTypes.string,
    clarify: React.PropTypes.object,
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
              loggedIn = {this.props.loggedIn}
              imageUrl = {this.props.imageUrl}
              userName = {this.props.userName}
              accessToken = {this.props.accessToken}
              uid = {this.props.uid}
              clarify = {this.props.clarify}
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
    imageUrl: React.PropTypes.string,
    userName: React.PropTypes.string,
    accessToken: React.PropTypes.string,
    uid: React.PropTypes.string,
    clarify: React.PropTypes.object,
  }

  constructor() {
    super();
    this.componentClicked = this._componentClicked.bind(this);
    this.callback = this._callback.bind(this);
    this.getImgs = this._getImgs.bind(this);
    this.state = {
      clicked: false,
      removablePhotos: [],
    };
  }

  _callback(response) {
    this.props.onLoginSuccess(response);
  }

  _componentClicked() {
    this.setState({clicked: true});
  }

  isBad(concepts) {
    for (let i = 0; i < concepts.length; i++) {
      if (concepts[i].value >= .40) {
        return true;
      }
    }
    return false;
  }

  runClarifai(data) {
    let clarify = this.props.clarify;
    let img;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < data.length; i++) {
        let func = (img) => {
          clarify.models.predict('b931c49945d649eba9e1cd2830cdc9ef', img.source)
          .then((response) => {
            if (this.isBad(response.data.outputs[0].data.concepts)) {
              let obj = {
                imageUrl: img.source,
                keyWord: response.data.outputs[0].data.concepts[0].name,
                imgId: img.id,
              };
              let rem = this.state.removablePhotos;
              rem.push(obj);
              this.setState({
                removablePhotos: rem,
              });
            }
          });
        }
        func(data[i])
      }
    });
  }

  _getImgs() {
    let uid = this.props.uid;
    let access_token = this.props.accessToken;

    new Promise((resolve, reject) => {
      FB.api(
        `/${uid}/photos/`,
        (response) => {
          if (response && !response.error) {
            this.runClarifai(response.data);
          }
        });
    });
  }

  render() {
    if (!this.props.loggedIn) {
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
    } else {
      return (
        <div>
          <span>Hello, {this.props.userName}</span>
          <img src={this.props.imageUrl}/>
          <button type="button" onClick={this.getImgs}>Click Me!</button>
          {this.state.removablePhotos.map((obj) => {
            return <ClickableImage obj = {obj} />
          })}
        </div>
      );
    }
  }
}
