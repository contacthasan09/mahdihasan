/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCompass, FiShield } from 'react-icons/fi';

const Philosophy = () => {
  const principles = [
    {
      icon: <FiCompass className="text-3xl" />,
      title: 'Data with Purpose',
      description: 'No guesswork. I use proven frameworks to let the market tell us what works.',
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: 'Creative that Connects',
      description: 'Ads should feel like conversations, not noise. Focus on psychological hooks.',
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Technical Trust',
      description: 'Post-IOS 14, standard pixels aren\'t enough. I build CAPI and Server-Side tagging.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
            CORE <span className="gradient-text">PHILOSOPHY</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            In a world of noise, Creative is the variable that scales. Data is the compass that guides it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center glass-effect rounded-2xl p-8 card-hover"
            >
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-6">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-light mb-4">
                {principle.title}
              </h3>
              <p className="text-light/60">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;