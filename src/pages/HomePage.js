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
        <title>Sneha Anindya - Result-Focused Paid Media Specialist | Meta & Google Ads Expert</title>
        <meta name="description" content="Scale your brand with data-driven Meta and Google Ads. 4.8x average ROAS. Certified professional helping businesses maximize ROI through strategic paid media." />
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