import React from 'react';
import moment from 'moment';

import CalendarToolbar from './CalendarToolbar';
import CalendarDay from './CalendarDay';
import {
  CalendarBodyWrapper
} from '../Common';

import EventActions from '../../actions/EventActions';

export default class CalendarBody extends React.Component {
  constructor() {
    super();

    this.onPrevMonth = this._onPrevMonth.bind(this);
    this.onNextMonth = this._onNextMonth.bind(this);
    this.onNewEntry = this._onNewEntry.bind(this);
    this.storeChanged = this._storeChanged.bind(this);

    this.state = this.getState()
  }

  getState() {
    return {
      currentDisplayDate: moment(),
      events: {},
    }
  }

  _storeChanged(state) {
    this.setState(state);
  }

  _onPrevMonth() {
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.subtract(1, 'month')
    })
  }

  _onNextMonth() {
    this.setState({
      currentDisplayDate: this.state.currentDisplayDate.add(1, 'month')
    })
  }

  _onNewEntry(id,value) {
    if(!value.trim()) {
      return;
    }
    this.props.onEventAdd(value,id);
  }

  getMonth() {
    const reference = this.state.currentDisplayDate.clone()
    const month = {
      month: reference.format('MMMM'),
      display: []
    }

    const daysInMonth = reference.daysInMonth();
    const firstDayOfMonth = reference.startOf('month').day();

    for(let i=firstDayOfMonth;i < firstDayOfMonth + daysInMonth; i+=1) {
      const day = i-firstDayOfMonth+1;
      month.display[i] = {
        day,
        month: reference.format('MMMM'),
        year: reference.format('YYYY'),
        id: reference.format('YYYY-'+day+'-MM')
      }
    }

    let lastDayOfPrevMonth = reference.subtract(1,'month').daysInMonth();

    if(firstDayOfMonth > 0){
      for(let i = firstDayOfMonth-1; i >= 0; i -= 1){
        const day = lastDayOfPrevMonth--;
        month.display[i] = {
          day,
          month: reference.format('MMMM'),
          year: reference.format('YYYY'),
          id: reference.format('YYYY-'+day+'-MM')
        }
      }
    }

    reference.add(2,'months');
    let i = 1;
    while(month.display.length%7) {
      const day = i++;
      month.display.push({
        day,
        month: reference.format('MMMM'),
        year: reference.format('YYYY'),
        id: reference.format('YYYY-'+day+'-MM')
      });
    }

    month.numRows = (month.display.length/7);
    return month;
  }

  render() {
    const thisMonth = this.getMonth();
    return (
      <CalendarBodyWrapper>
        <CalendarToolbar
          displayMonth={thisMonth.month}
          onPrevMonth={this.onPrevMonth}
          onNextMonth={this.onNextMonth}
        />
      {thisMonth.display.map(dayObject => {
          return <CalendarDay
            key={dayObject.id}
            currMonth={thisMonth.month}
            dayObject={dayObject}
            onNewEntry={this.onNewEntry.bind(this, dayObject.id)}
            events={this.props.events.filter(event => event.date === dayObject.id)}
          />
        })}
      </CalendarBodyWrapper>
    );
  }
}
