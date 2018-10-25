// @flow
import {createStore, compose} from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
    compose( // this code from reduxDevTools Documentation
    typeof window === 'object' && window.devToolsExtension !== 'undifined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
