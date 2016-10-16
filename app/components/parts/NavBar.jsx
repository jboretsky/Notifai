import React from 'react';

import Brand from './Brand.jsx';

const fb_logo = require('../../assets/fb.svg');

export default class NavBar extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="navbar">
        <Brand />
      	<figure className="avatar">
            <img src="https://picturepan2.github.io/spectre/demo/img/avatar-2.png" />
            <img src={fb_logo} className="avatar-icon" />
        </figure>
      </div>
    );
  }
}