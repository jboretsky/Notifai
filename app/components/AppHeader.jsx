import React from 'react';
import {Button} from 'react-bootstrap';


export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <SearchBar />
      </div>
    );
  }
}

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.auth = this._auth.bind(this);
  }

  _auth() {
  }

  render() {
    return (
      <div>
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
      </div>
    );
  }
}
