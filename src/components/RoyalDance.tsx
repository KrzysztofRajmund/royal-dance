import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import FooterComponent from './FooterComponent';
import LandingPage from './Home/LandingPage';

function RoyalDance() {
  return (
  <Router>
    <Switch>
<Route path="/">
<LandingPage/>
</Route>
    </Switch>
    <FooterComponent/>
  </Router>
  );
}

export default RoyalDance;
