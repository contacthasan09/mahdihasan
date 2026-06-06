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
        <title>Portfolio - Sneha Anindya | Success Stories & Case Studies</title>
        <meta name="description" content="Explore real-world success stories from brands that scaled with data-driven Meta and Google Ads campaigns. See proven results and ROAS improvements." />
      </Helmet>
      <PortfolioHero filter={filter} setFilter={setFilter} />
      <PortfolioGrid filter={filter} />
    </>
  );
};

export default PortfolioPage;