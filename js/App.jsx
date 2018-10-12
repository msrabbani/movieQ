// @flow 

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import dataPilem from '../data.json';

const FourOFour = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/details/:id" component={(props: { match: Match }) => {
              const selectedShow= dataPilem.shows.find(show => props.match.params.id === show.imdbID);

              return <Details show={selectedShow} {...props} />
          }} />
          <Route component={FourOFour} />
        </Switch>
      </div>

    </BrowserRouter>
);

export default App;
