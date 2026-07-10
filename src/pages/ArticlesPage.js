/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ArticlesHero from '../components/Articles/ArticlesHero';
import ArticleGrid from '../components/Articles/ArticleGrid';

const ArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>Articles & Insights - Mahdi Hasan | Web Development Blog</title>
        <meta name="description" content="Practical insights on web development, mobile app development, Flutter, React, Node.js, and full-stack development. Learn from real-world project experiences." />
        <meta name="keywords" content="Web Development, Mobile Apps, Flutter, React, Node.js, Programming Tutorials, Development Tips" />
      </Helmet>
      <ArticlesHero />
      <ArticleGrid />
    </>
  );
};

export default ArticlesPage;