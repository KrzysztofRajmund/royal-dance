import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import TopJumbotron from './TopJumbotron/TopJumbotron';
import TopNav from './TopNav/TopNav';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

const RoyalDance: React.FC = () => {
  return (
    <Router>
      <TopNav />

      <Switch>
        <Route path="/">
          <TopJumbotron />
          <Cards />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default RoyalDance;
