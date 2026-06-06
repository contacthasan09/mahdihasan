/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../Common/SectionHeader';
import Button from '../Common/Button';
import { portfolioData } from '../../data/portfolioData';

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredCases = portfolioData.slice(0, 4);

  return (
    <section className="section-padding relative bg-gradient-to-b from-dark to-dark/95">
      <div className="container mx-auto">
        <SectionHeader
          badge="Proven Results"
          title="High-Performance Case Studies"
          subtitle="Real results for real brands. See how we transformed ad spend into measurable growth."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden glass-effect">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={featuredCases[activeIndex]?.image}
                  alt={featuredCases[activeIndex]?.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary mb-2">
                  {featuredCases[activeIndex]?.platform}
                </span>
                <h3 className="text-2xl font-display font-bold text-light mb-2">
                  {featuredCases[activeIndex]?.title}
                </h3>
                <p className="text-light/70 mb-4">
                  {featuredCases[activeIndex]?.description}
                </p>
                <Button variant="ghost" size="small">
                  Explore full campaign strategy →
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'glass-effect border-l-4 border-primary'
                    : 'hover:glass-effect'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-display font-bold text-light">
                    {caseStudy.title}
                  </h4>
                  <span className="text-primary font-semibold">
                    {caseStudy.results.roas}
                  </span>
                </div>
                <p className="text-light/60 text-sm mb-3">{caseStudy.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-light/50">📈 +{caseStudy.results.revenue}</span>
                  <span className="text-light/50">🎯 {caseStudy.results.cpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="large">
            View All Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;