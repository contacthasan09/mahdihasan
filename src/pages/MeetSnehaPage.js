/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/MeetSneha/AboutHero';
import Philosophy from '../components/MeetSneha/Philosophy';
import ExpertiseStack from '../components/MeetSneha/ExpertiseStack';
import Journey from '../components/MeetSneha/Journey';

const MeetMahdiPage = () => {
  return (
    <>
      <Helmet>
        <title>Meet Mahdi Hasan - Full-Stack Developer & Cross-Platform Expert</title>
        <meta name="description" content="Meet Mahdi Hasan, a creative full-stack developer with 3+ years of experience in Flutter, React, Node.js, and cross-platform app development. Based in Dhaka, Bangladesh." />
      </Helmet>
      <AboutHero />
      <Philosophy />
      <ExpertiseStack />
      <Journey />
    </>
  );
};

export default MeetMahdiPage;