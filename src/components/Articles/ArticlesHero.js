/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiBookOpen, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget, 
  FiBarChart2, 
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiStar,
  FiCode,
  FiSmartphone,
  FiServer
} from 'react-icons/fi';

const ArticlesHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredTopic, setHoveredTopic] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 150,
      },
    }),
  };

  const topics = [
    { name: 'Mobile Development', icon: <FiSmartphone />, color: 'from-primary to-secondary', articles: 12 },
    { name: 'Web Development', icon: <FiServer />, color: 'from-blue-500 to-cyan-500', articles: 10 },
    { name: 'Backend & APIs', icon: <FiCode />, color: 'from-green-500 to-emerald-500', articles: 8 },
    { name: 'UI/UX Design', icon: <FiTarget />, color: 'from-orange-500 to-red-500', articles: 6 },
  ];

  const stats = [
    { value: '30+', label: 'Articles Published', icon: <FiBookOpen />, delay: 0.8 },
    { value: '5k+', label: 'Monthly Readers', icon: <FiUsers />, delay: 0.9 },
    { value: '4.9', label: 'Reader Rating', icon: <FiStar />, delay: 1.0 },
  ];

  const featuredArticle = {
    title: 'The Future of Cross-Platform Development in 2024',
    readTime: '8 min read',
    date: 'Jan 15, 2024',
    category: 'Trends',
  };

  const titleText = "Articles & Insights".split('');

  return (
    <section ref={ref} className="pt-32 pb-20 section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        
        {/* Floating Code Effect */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-32 right-20 opacity-10"
        >
          <FiCode size={80} />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-32 left-20 opacity-10"
        >
          <FiSmartphone size={60} />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-5xl mx-auto"
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
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-light/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Practical insights, tutorials, and expert perspectives on{' '}
            <span className="text-primary font-semibold">mobile development</span>,{' '}
            <span className="text-secondary font-semibold">web applications</span>, and{' '}
            <span className="text-accent font-semibold">full-stack development</span>, based on real-world project experience.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="glass-effect rounded-2xl px-6 py-4 backdrop-blur-md border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <motion.p
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: stat.delay, type: 'spring' }}
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

          {/* Featured Article Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 backdrop-blur-md border border-primary/20 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 text-primary mb-3 justify-center">
                <FiStar className="text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wider">Featured Article</span>
              </div>
              <h3 className="text-xl font-bold text-light mb-2">
                {featuredArticle.title}
              </h3>
              <div className="flex items-center justify-center gap-4 text-xs text-light/50 mb-3">
                <span className="flex items-center gap-1">
                  <FiCalendar size={12} />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock size={12} />
                  {featuredArticle.readTime}
                </span>
                <span className="px-2 py-1 rounded-full glass-effect text-xs">
                  {featuredArticle.category}
                </span>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm mx-auto"
              >
                Read Featured Article <FiArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Popular Topics */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-light/60 text-sm mb-4 uppercase tracking-wider">Popular Topics</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {topics.map((topic, index) => (
                <motion.button
                  key={index}
                  variants={cardVariants}
                  custom={index + 3}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                  }}
                  onMouseEnter={() => setHoveredTopic(index)}
                  onMouseLeave={() => setHoveredTopic(null)}
                  className="relative px-4 py-2 rounded-full glass-effect backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-lg">
                      {topic.icon}
                    </span>
                    <span className="text-light/80 text-sm font-medium">
                      {topic.name}
                    </span>
                    <span className="text-xs text-light/40">
                      ({topic.articles})
                    </span>
                  </div>
                  
                  {/* Hover Ripple Effect */}
                  {hoveredTopic === index && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-primary/20 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Animated Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2"
          >
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              animate={{ width: [0, 60, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
            />
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 backdrop-blur-md"
            >
              <p className="text-light/70 text-sm mb-3">
                Get weekly development insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light/80 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold"
                >
                  Subscribe Now
                </motion.button>
              </div>
              <p className="text-xs text-light/40 mt-3">
                No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-light/40">Explore Articles</span>
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

export default ArticlesHero;