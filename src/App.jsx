import React from 'react';
// import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, Newslatter } from './components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Memory from './components/Memory';
import Explore from './components/Explore';
import Advertise from './components/Advertise';
import Pricings from './components/Pricings';

import Banner from './components/Banner';
import Newslatter from './components/Newslatter';

import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travigodata';

const App = () => {
  return (
   <>
      <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
        <Advertise brands={brands} />
        <Pricings pricingapi={pricingapi} />
        <Banner bannerAPI={bannerAPI} />
        <Newslatter />
      <Footer footerAPI={footerAPI} />
   </>
  );
};

export default App;