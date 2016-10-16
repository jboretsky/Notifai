import React from 'react';

import NavBar from './parts/NavBar.jsx'

export default class Splash extends React.Component {
  static propTypes = {
  	user: React.PropTypes.object
  };

  render() {
  	console.log(this.props.user);
    return (
      <div className="account">
      	<NavBar user={this.props.user} />
      </div>
    );
  }
}