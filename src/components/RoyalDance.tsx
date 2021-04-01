import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import MainComponent from './Home/MainComponent';

function RoyalDance() {
  return (
  <Router>
    <Switch>
      <Route path="/">
       <MainComponent/>
      </Route>
    </Switch>
  </Router>
  );
}

export default RoyalDance;
