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
import Offers from './Offers/Offers';

const RoyalDance: React.FC = () => {
  return (
    <Router>
      <TopNav />

      <Switch>
        <Route path="/onas">
          <About />
        </Route>
        <Route path="/oferta">
          <Offers />
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
