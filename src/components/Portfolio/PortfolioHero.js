/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGrid, FiTrendingUp, FiAward, FiBarChart2 } from 'react-icons/fi';

const PortfolioHero = ({ filter, setFilter }) => {
  const [isHovered, setIsHovered] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const filters = [
    { name: 'All', icon: <FiGrid />, color: 'from-purple-500 to-pink-500' },
    { name: 'Meta Ads', icon: <FiTrendingUp />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Google Ads', icon: <FiBarChart2 />, color: 'from-green-500 to-emerald-500' },
  ];

  const stats = [
    { value: '30+', label: 'Successful Projects', icon: <FiAward /> },
    { value: '4.8x', label: 'Average ROAS', icon: <FiTrendingUp /> },
    { value: '$100k+', label: 'Ad Spend Managed', icon: <FiBarChart2 /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const titleText = "PROVEN PERFORMANCE".split('');

  return (
    <section ref={ref} className="relative pt-32 pb-20 section-padding overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* Animated Title with Letter-by-Letter Effect */}
          <motion.div className="mb-6 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-1">
              {titleText.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={controls}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-2"
            >
              <span className="gradient-text text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              </span>
            </motion.div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-light/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Real-world results for brands ready to scale. See how I transform{' '}
            <span className="text-primary font-semibold">Meta</span> and{' '}
            <span className="text-secondary font-semibold">Google Ads</span> spend 
            into measurable business growth.
          </motion.p>

          {/* Animated Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="glass-effect rounded-2xl px-6 py-3 backdrop-blur-md border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <motion.p
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                      className="text-2xl font-bold gradient-text"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-light/50">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            {filters.map((f, index) => (
              <motion.button
                key={f.name}
                custom={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: 'spring', stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(f.name)}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                  filter === f.name
                    ? 'text-white shadow-lg'
                    : 'glass-effect text-light/70 hover:text-light'
                }`}
              >
                {filter === f.name && (
                  <motion.div
                    layoutId="activeFilter"
                    className={`absolute inset-0 bg-gradient-to-r ${f.color}`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                
                <motion.span
                  animate={{ 
                    rotate: isHovered === index ? [0, 10, -10, 0] : 0,
                    scale: isHovered === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-lg"
                >
                  {f.icon}
                </motion.span>
                
                <span className="relative z-10 font-semibold">
                  {f.name}
                </span>

                {isHovered === index && filter !== f.name && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-white/20 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Animated Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mt-8"
          >
            <motion.div
              animate={{ width: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              animate={{ width: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-light/40">Scroll to explore</span>
          <div className="w-5 h-8 border border-light/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioHero;