// @flow
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
    compose( // this code from reduxDevTools Documentation
        applyMiddleware(thunk),
        typeof window === 'object' && window.devToolsExtension !== 'undifined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
