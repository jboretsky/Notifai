import React from 'react';

import NavBar from './parts/NavBar.jsx'
import Content from './Content'

export default class Splash extends React.Component {
  static propTypes = {
  	user: React.PropTypes.object
  };

  render() {
    return (
      <div className="account">
      	<NavBar user={this.props.user} />
        <Content 
          clarify={this.props.clarify}
          accessToken={this.props.user.accessToken}
          uid={this.props.user.uid}
         />
      </div>
    );
  }
}