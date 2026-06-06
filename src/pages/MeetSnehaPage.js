/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/MeetSneha/AboutHero';
import Philosophy from '../components/MeetSneha/Philosophy';
import ExpertiseStack from '../components/MeetSneha/ExpertiseStack';
import Journey from '../components/MeetSneha/Journey';

const MeetSnehaPage = () => {
  return (
    <>
      <Helmet>
        <title>Meet Sneha Anindya - Performance Marketing Expert & Growth Partner</title>
        <meta name="description" content="Meet Sneha, a certified paid media specialist with $100k+ ad spend managed. Learn about her philosophy, expertise, and journey in digital marketing." />
      </Helmet>
      <AboutHero />
      <Philosophy />
      <ExpertiseStack />
      <Journey />
    </>
  );
};

export default MeetSnehaPage;