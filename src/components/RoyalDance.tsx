import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import TopJumbotron from './TopJumbotron/TopJumbotron';
import TopNav from './TopNav/TopNav';
import Cards from './Cards/Cards';
import Cards2 from './Cards/Cards2';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

const RoyalDance: React.FC = () => {
  return (
    <Router>
      <TopNav />

      <Switch>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/">
          <TopJumbotron />
          <Cards />
          <Cards2 />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default RoyalDance;
