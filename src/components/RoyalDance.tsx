import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import TopJumbotron from './TopJumbotron/TopJumbotron';

function RoyalDance() {
  return (
  <Router>
    <Switch>
      <Route path="/">
       <TopJumbotron/>
      </Route>
    </Switch>
  </Router>
  );
}

export default RoyalDance;
