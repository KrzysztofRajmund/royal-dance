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
import Prices from './Prices/Prices';
import FamilyDance from './Offers/FamilyDance';
import SportDance from './Offers/SportDance';
import Rental from './Offers/Rental';
import GalleryHome from './Gallery/GalleryHome';
import HeaderHome from './Offers/HeaderHome';
//assets
import Image from "./../assets/sportdance.jpg"

const RoyalDance: React.FC = () => {
  return (
    <Router>
      <TopNav />

      <Switch>
        <Route path="/onas">
          <About />
        </Route>
        <Route path="/cennik">
          <Prices />
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
          <HeaderHome image={Image} title={window.innerWidth < 380 ? "Taniec" : "Zapisz się na tańce"} desc={(window.innerWidth < 445 ? "Rekreacyjny i Sportowy" : "Taniec rekreacyjny i sportowy")} />


          <GalleryHome />
          <About />
          <Cards />

        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default RoyalDance;
