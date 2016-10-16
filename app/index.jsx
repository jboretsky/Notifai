import './styles/main.less';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import LoginPage from './components/Login/LoginPage';

import EventActions from './actions/EventActions';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import app from './reducers/events';

import { Router, Route, browserHistory } from 'react-router';

// as a 2nd argument, can specify the initial state
// do so if initializing from server
// the store listens to the root reducer! The root reducer is a function that returns new state every time
// therefore it knows the entire apps state.
// this means we can send store.getState() to the server to store in a database
let store = createStore(app);

/* sample of how to use redux
// we have actions, which we call with store.dispatch(action...)
// actions pass the data along to reducers
// reducers take previous state, and action data
// and produce a new state.

console.log(store.getState())

// store.subscribe(store.getState()) would return the new state.
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(addEvent('new event', 'yyyy-d-mm'));
store.dispatch(addEvent('event2', 'yyda-dad-mmd'));

unsubscribe();
*/

// we create the store here and pass it down to our top most component..

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/login" component={LoginPage} />
    </Router>
</Provider>
), document.getElementById('app'));
