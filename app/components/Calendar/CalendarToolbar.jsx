import React from 'react';

export default class CalendarBody extends React.Component {
  render() {
    return (
        <div className='calendar-options'>
          <span className='calendar-options-month'>{this.props.displayMonth}</span>
          <button onClick={this.props.onPrevMonth}><span className='glyphicon glyphicon-chevron-left' /></button>
          <button onClick={this.props.onNextMonth}><span className='glyphicon glyphicon-chevron-right' /></button>
        </div>
    );
  }
}
