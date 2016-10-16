import React from 'react';

export default class CalenderEvent extends React.Component {
  static propTypes = {
    event: React.PropTypes.object
  }

  eventClick(e) {
    e.stopPropagation();
    console.log('event was clicked');
    console.log(this.props.event);
  }

  render() {
    return <div className="calendar-event-card" onClick={this.eventClick.bind(this)}>
      {this.props.event.value}
    </div>
  }
}
