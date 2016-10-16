import React from 'react';
import moment from 'moment';

import CalendarEvent from './CalendarEvent';

import {
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

export default class CalendarDay extends React.Component {
  getActiveStatus() {
    if(this.props.currMonth !== this.props.dayObject.month){
      return 'calendar-day-inactive';
    }
    return 'calendar-day';
  }

  checkEnter(e) {
    if (e.key === "Enter") {
      this.props.onNewEntry(e.target.value);
    }
  }

  get popover() {
    return (
      <Popover title={"New Event for " + (moment(this.props.dayObject.id, 'YYYY-D-MM').format('dddd')) + ", "+ this.props.dayObject.month + " " + this.props.dayObject.day + ", " + this.props.dayObject.year}>
        <input
          className="calendar-day-modal-input"
          type="text"
          autoFocus={true}
          onKeyPress={this.checkEnter.bind(this)} />
        <button>Done</button>
      </Popover>
    );
  }

  render() {
    return (
      <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.popover}>
        <div className={this.getActiveStatus()}>
          {this.props.dayObject.day}
          {this.props.events.map(event => {
            return <CalendarEvent key={event.id} event={event} />
          })}
        </div>
      </OverlayTrigger>
    );
  }
}
