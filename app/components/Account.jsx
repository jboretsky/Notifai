import React from 'react';

import NavBar from './parts/Navbar.jsx'

export default class Splash extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="account">
      	<NavBar/>
      </div>
    );
  }
}