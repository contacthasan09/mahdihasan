/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiHeart, FiCompass, FiShield, FiZap, FiCloud } from 'react-icons/fi';

const Philosophy = () => {
  const principles = [
    {
      icon: <FiCode className="text-3xl" />,
      title: 'Clean Code Matters',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time. Quality code leads to quality products.',
    },
    {
      icon: <FiLayout className="text-3xl" />,
      title: 'User-First Design',
      description: 'Creating intuitive interfaces that users love and enjoy interacting with. Great UX leads to better engagement and retention.',
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Data-Driven Decisions',
      description: 'Using analytics and user feedback to guide development priorities. Build what users actually need, not what you assume.',
    },
    {
      icon: <FiCloud className="text-3xl" />,
      title: 'Cloud Native',
      description: 'Building applications designed to scale seamlessly in the cloud. Modern apps need modern infrastructure.',
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Security First',
      description: 'Implementing best practices to protect user data and privacy. Security is not an afterthought, it\'s a foundation.',
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'Performance Obsessed',
      description: 'Optimizing every aspect for speed and efficiency. Fast apps create happy users and better conversion rates.',
    },
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary mb-4">
            My Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
            Development <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Great backend architecture is invisible — it feels intuitive, seamless, and delightful. 
            I build with purpose, precision, and passion.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="text-center glass-effect rounded-2xl p-8 group cursor-pointer"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="inline-block p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-6 shadow-lg"
              >
                {principle.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-light mb-4 group-hover:text-primary transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="text-light/60 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 rounded-2xl glass-effect max-w-2xl mx-auto"
        >
          <p className="text-light/70 italic text-lg">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p className="text-primary text-sm mt-2">— Cory House</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;