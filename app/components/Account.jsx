import React from 'react';

import NavBar from './parts/Navbar.jsx'

export default class Splash extends React.Component {
  static propTypes = {
  	user: React.PropTypes.object
  };

  render() {
    return (
      <div className="account">
      	<NavBar user={this.props.user} />
      </div>
    );
  }
}