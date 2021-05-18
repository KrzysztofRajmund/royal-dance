import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import TopJumbotron from './TopJumbotron/TopJumbotron';
import TopNav from './TopNav/TopNav';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import FamilyDance from './Offers/FamilyDance';
import SportDance from './Offers/SportDance';
import Rental from './Offers/Rental';

const RoyalDance: React.FC = () => {
  return (
    <Router>
      <TopNav />

      <Switch>
        <Route path="/onas">
          <About />
        </Route>
        <Route path="/taniec-rekreacyjny">
          <FamilyDance />
        </Route>
        <Route path="/taniec-sportowy">
          <SportDance />
        </Route>
        <Route path="/wynajem-studia">
          <Rental />
        </Route>
        <Route path="/galeria">
          <Gallery />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
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
