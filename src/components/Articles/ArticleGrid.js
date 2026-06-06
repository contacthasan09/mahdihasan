/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import { articlesData } from '../../data/articlesData';

const ArticleGrid = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;