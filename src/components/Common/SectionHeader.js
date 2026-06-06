/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-light/60 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;