// @flow

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import type {Match} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import AsyncRoute from './AsyncRoute';
import Search from './Search';
import Details from './Details';
import dataPilem from '../data.json';

const FourOFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props => (
            <AsyncRoute props={props} loadingPromise={import('./Landing')} />
          )}
        />
        <Route
          path="/search"
          component={props => <Search shows={dataPilem.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props: {match: Match}) => {
            const selectedShow = dataPilem.shows.find(
              show => props.match.params.id === show.imdbID,
            );

            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
