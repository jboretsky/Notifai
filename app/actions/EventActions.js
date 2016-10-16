import uuid from 'node-uuid';

const eventActions = {
    login: (value, date) => {
    return {
      type: 'FB_LOG_IN',
      value,
      date,
    }
  }
}

export default eventActions;
