import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Stats from './Stats';
import Process from './Process';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
