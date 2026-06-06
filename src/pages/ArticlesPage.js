/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ArticlesHero from '../components/Articles/ArticlesHero';
import ArticleGrid from '../components/Articles/ArticleGrid';

const ArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>Articles & Insights - Sneha Anindya | Performance Marketing Blog</title>
        <meta name="description" content="Practical insights on performance marketing, paid advertising, and business growth. Learn strategies to scale your Meta and Google Ads campaigns." />
      </Helmet>
      <ArticlesHero />
      <ArticleGrid />
    </>
  );
};

export default ArticlesPage;