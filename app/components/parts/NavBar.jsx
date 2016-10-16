import React from 'react';

import Brand from './Brand.jsx';

const fb_logo = require('../../assets/fb.svg');

export default class NavBar extends React.Component {
  static propTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="navbar">
        <Brand />
      	<figure className="avatar">
            <img src={this.props.user.profileImg} />
            <img src={fb_logo} className="avatar-icon" />
        </figure>
      </div>
    );
  }
}