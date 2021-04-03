import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import TopJumbotron from './TopJumbotron/TopJumbotron';
import TopNav from './TopNav/TopNav';
import Cards from './Cards/Cards';

function RoyalDance() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/">
          <TopJumbotron />
        </Route>
        <Route path="/">
          <Cards />
        </Route>
      </Switch>
    </Router>
  );
}

export default RoyalDance;
