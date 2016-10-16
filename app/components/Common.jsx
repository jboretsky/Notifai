import React from 'react';

export class CalendarBodyWrapper extends React.Component {
  render() {
    return (
      <div className="calendar-body">
        {this.props.children}
      </div>
    );
  }
}
