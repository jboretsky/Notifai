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
        <div className="controls">
          <a className="btn btn-primary btn-sm" 
          href={"https://www.facebook.com/logout.php?next=" + window.location.href
              + "&access_token=" + this.props.user.accessToken}>
          <i className="typcn typcn-eject"></i> Logout
          </a>
          <figure className="avatar">
              <img src={this.props.user.profileImg} />
              <img src={fb_logo} className="avatar-icon" />
          </figure>
        </div>
      </div>
    );
  }
}