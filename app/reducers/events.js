// always make sure to make a new object in the state
// otherwise the reference will not change and the app
// will not rerender! Object.assign makes a new reference
// but we could also use Immutablejs

// reducers simply take the state, do something to it
// and pass it on to the store
// the store will actually hold the state of the app.

// as we add things to the state, we can split
// them into different reducers
const initialState = {
  events: [],
};

function app(state = initialState, action) {
  switch(action.type) {
    case 'ADD_EVENT':
      return Object.assign({}, state, {
        events: [
          ...state.events,
          {
            value: action.value,
            date: action.date,
            id: action.id
          }
        ]
      })
    default:
      return state;
  }
}

export default app;
