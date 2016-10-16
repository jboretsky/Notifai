import React from 'react';

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
  render() {
    return (
      <div>
        <input />
      </div>
    );
  }
}
