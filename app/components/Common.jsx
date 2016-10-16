import React from 'react';

export class CalendarBodyWrapper extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
