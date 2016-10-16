import uuid from 'node-uuid';

const eventActions = {
    addEvent: (value, date) => {
    return {
      type: 'ADD_EVENT',
      id: uuid.v4(),
      value,
      date,
    }
  }
}

export default eventActions;
