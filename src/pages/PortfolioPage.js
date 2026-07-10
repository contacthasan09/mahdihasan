/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');

  return (
    <>
      <Helmet>
        <title>Mahdi Hasan - Portfolio | Web & Mobile App Development Projects</title>
        <meta name="description" content="Explore my portfolio of web and mobile app development projects. See real-world examples of Flutter, React, Node.js applications I've built for clients worldwide." />
        <meta name="keywords" content="Portfolio, Web Development, Mobile Apps, Flutter, React, Node.js, Full-Stack Developer" />
      </Helmet>
      <PortfolioHero filter={filter} setFilter={setFilter} />
      <PortfolioGrid filter={filter} />
    </>
  );
};

export default PortfolioPage;