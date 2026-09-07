/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FiAward, FiTrendingUp, FiUsers, FiStar, FiHeart, FiBriefcase, FiCode, FiSmartphone, FiDownload } from 'react-icons/fi';
import Button from '../Common/Button';

const AboutHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  // Mouse movement effect for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Navigation handlers
  const handleViewWork = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume/Mahdi_Hasan_Resume.pdf'; // Path to your resume PDF
    link.download = 'Mahdi_Hasan_Resume.pdf'; // Download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const floatingBadgeVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Animated heading text split into words
  const headingText = "Turning Ideas Into Digital Reality";
  const headingWords = headingText.split(" ");

  // Word animation variants
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }),
  };

  const stats = [
    { value: '3+', label: 'Years Exp', icon: <FiBriefcase />, delay: 0.8 },
    { value: '35+', label: 'Projects', icon: <FiCode />, delay: 0.9 },
    { value: '25+', label: 'Clients', icon: <FiUsers />, delay: 1.0 },
    { value: '5.0', label: 'Rating', icon: <FiStar />, delay: 1.1 },
  ];

  // Updated profile images - with fallback handling
  const getProfileImage = () => {
    // Try different extensions for Vercel compatibility
    if (imageError) {
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
    }
    return '/images/profile.jpeg';
  };

  return (
    <section ref={ref} className="pt-32 pb-20 section-padding relative overflow-hidden">
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl"
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                CREATIVE DEVELOPER & DESIGNER
              </span>
            </motion.div>

            {/* Animated Heading with Word-by-Word Effect */}
            <div className="mb-6 overflow-visible">
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {headingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-4xl md:text-6xl font-display font-bold inline-block"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {word}
                    {index === 2 && (
                      <motion.span
                        className="gradient-text"
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                      >
                        {' '}
                      </motion.span>
                    )}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-light/70 mb-8 leading-relaxed">
              With over 3 years of experience in full-stack and cross-platform app development, I've had the privilege of working with startups, agencies, and established brands to bring their digital visions to life across web, mobile, and desktop platforms.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Button variant="primary" size="large" icon={<FiCode />} onClick={handleViewWork}>
                View My Work
              </Button>
              <Button variant="outline" size="large" icon={<FiDownload />} onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay }}
                  className="text-center"
                >
                  <div className="text-2xl text-primary mb-1 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.p
                    className="text-2xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: stat.delay + 0.2, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-light/50">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Profile Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="relative"
            onMouseMove={handleMouseMove}
            style={{
              perspective: 1000,
            }}
          >
            {/* Main Profile Card with 3D Tilt */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative"
            >
              {/* Glow Effect Behind Image */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30"
              />

              {/* Main Image Container */}
              <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-dark overflow-hidden relative">
                  {!imageLoaded && !imageError && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <img
                    src={getProfileImage()}
                    alt="Mahdi Hasan - Full-Stack Developer"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'scale-100' : 'scale-110'
                    }`}
                    onLoad={() => {
                      setImageLoaded(true);
                      setImageError(false);
                    }}
                    onError={(e) => {
                      console.log("Local image failed, trying fallback...");
                      setImageError(true);
                      // Try alternative extension
                      if (e.target.src.includes('profile.jpeg')) {
                        e.target.src = '/images/profile.JPEG';
                      } else if (e.target.src.includes('profile.JPEG')) {
                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                      }
                    }}
                    style={{ objectPosition: 'top center' }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end justify-center pb-6"
                  >
                    <span className="text-white font-semibold text-sm">✨ Full-Stack Developer</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              custom={0}
              className="absolute -top-6 -right-6 glass-effect rounded-2xl p-3 backdrop-blur-md shadow-xl z-20"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <FiAward className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-xs text-light/50">Expert Developer</p>
                  <p className="text-sm font-bold gradient-text">Full-Stack</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              custom={1}
              className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-3 backdrop-blur-md shadow-xl z-20"
              whileHover={{ scale: 1.05 }}
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                  <FiHeart className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-xs text-light/50">Client Satisfaction</p>
                  <p className="text-sm font-bold gradient-text">100% Positive</p>
                </div>
              </div>
            </motion.div>

            {/* Achievement Ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
            >
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="rgba(107, 33, 165, 0.2)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="220"
                    initial={{ strokeDashoffset: 220 }}
                    animate={{ strokeDashoffset: 44 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                </svg>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B21A5" />
                    <stop offset="100%" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">35+</span>
                </div>
              </div>
            </motion.div>

            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-2 right-8 glass-effect rounded-full px-3 py-1 backdrop-blur-md"
            >
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-light/60">(25+ reviews)</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Animated Border */}
      <motion.div
        animate={{
          x: [0, window.innerWidth - 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-light/40">Discover More</span>
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

export default AboutHero;