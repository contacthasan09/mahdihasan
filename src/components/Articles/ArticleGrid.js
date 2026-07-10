/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArticleCard from './ArticleCard';
import { articlesData } from '../../data/articlesData';

const ArticleGrid = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="section-padding pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articlesData.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </motion.div>

        {/* Load More Button (Optional) */}
        {articlesData.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full glass-effect text-light font-semibold hover:border-primary/50 transition-all duration-300"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ArticleGrid;