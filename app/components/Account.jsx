import React from 'react';

import NavBar from './parts/NavBar.jsx'
import Feed from './Feed.jsx'

export default class Account extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    clarifai: React.PropTypes.object
  };

  render() {
    return (
      <div className="account">
        <NavBar user={this.props.user} />
        <div className="container">
          <Feed user={this.props.user} clarifai={this.props.clarifai} />
        </div>
      </div>
    );
  }
}