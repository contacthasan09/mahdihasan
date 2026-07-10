/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Services from '../components/Home/Services';
import CaseStudies from '../components/Home/CaseStudies';
import Testimonials from '../components/Home/Testimonials';
import CTASection from '../components/Home/CTASection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Mahdi Hasan - Creative Full-Stack Developer | Flutter & React Expert</title>
        <meta name="description" content="Creative Full-Stack Developer specializing in Flutter, React, and Node.js. 35+ projects delivered, 100% client satisfaction. Let's bring your digital vision to life." />
        <meta name="keywords" content="Full-Stack Developer, Flutter Developer, React Developer, Node.js, Mobile App Development, Web Development, Bangladesh" />
        <meta name="author" content="Mahdi Hasan" />
      </Helmet>
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default HomePage;