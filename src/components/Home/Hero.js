/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiPause, FiCode, FiSmartphone, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../Common/Button';

const Hero = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current && isVideoPlaying) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
        setIsVideoPlaying(false);
      });
    }
  }, [isVideoPlaying]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleViewWork = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  // Split text into words for animation
  const headingText = "Creative Developer & Designer";
  const words = headingText.split(" ");

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
        delay: i * 0.08,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }),
  };

  // Get the correct image path - your file is profile.jpeg
  const getImageSrc = () => {
    if (imageError) {
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop';
    }
    return '/images/profile.jpeg';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Video with Code Theme */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-programming-background-with-code-2192-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        
        {/* Animated Code Particles Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                y: [Math.random() * 100, Math.random() * 100 - 100]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute text-primary font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 10 + 8}px`
              }}
            >
              {['{ }', '() =>', 'const', 'let', 'function', 'return', 'import', 'export', 'async', 'await', '< />', '...'][Math.floor(Math.random() * 12)]}
            </motion.div>
          ))}
        </div>
        
        {/* Video Control Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 z-30 glass-effect rounded-full p-3 hover:scale-110 transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isVideoPlaying ? (
            <FiPause className="text-white text-xl group-hover:text-primary transition-colors" />
          ) : (
            <FiPlay className="text-white text-xl group-hover:text-primary transition-colors" />
          )}
        </motion.button>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect text-xs md:text-sm font-semibold text-primary backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
                </span>
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-3 md:mb-4 leading-tight"
            >
              Mahdi <span className="gradient-text">Hasan</span>
            </motion.h1>

            {/* Animated Heading with Word-by-Word Effect */}
            <div className="mb-4 md:mb-6 overflow-visible">
              <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-3 md:gap-y-2">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-light/80 inline-block"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-light/70 mb-6 md:mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              I craft digital experiences that blend beautiful design with clean, efficient code. 
              Specialized in Flutter, React, and Node.js for cross-platform and full-stack development.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button variant="primary" size="medium" icon={<FiArrowRight />} onClick={handleViewWork}>
                View My Work
              </Button>
              <Button variant="outline" size="medium" icon={<FiMail />} onClick={handleContact}>
                Get In Touch
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Flutter Expert', 'React/Next.js', 'Node.js', 'MongoDB', '35+ Projects'].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="glass-effect backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full cursor-default"
                >
                  <span className="text-light/80 text-[10px] sm:text-xs font-medium">{badge}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 md:gap-4 mt-6 md:mt-8">
              <motion.a
                href="https://github.com/contacthasan09"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="glass-effect p-2 md:p-3 rounded-full text-light/70 hover:text-primary transition-colors"
              >
                <FiGithub size={18} className="md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mahdi-hasan-a4a55938a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="glass-effect p-2 md:p-3 rounded-full text-light/70 hover:text-primary transition-colors"
              >
                <FiLinkedin size={18} className="md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href="mailto:contacthasan09@gmail.com"
                whileHover={{ y: -3, scale: 1.1 }}
                className="glass-effect p-2 md:p-3 rounded-full text-light/70 hover:text-primary transition-colors"
              >
                <FiMail size={18} className="md:w-5 md:h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Animation */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl sm:blur-2xl opacity-30 animate-pulse" />
              
              {/* Main Image Card */}
              <div className="relative glass-effect rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 shadow-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto">
                <div className="relative aspect-[3/4]">
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
                  )}
                  <img
                    src={getImageSrc()}
                    alt="Mahdi Hasan - Full-Stack Developer"
                    className="w-full h-full object-cover object-[center_20%] transition-all duration-700"
                    onLoad={() => {
                      setImageLoaded(true);
                      setImageError(false);
                      console.log("Image loaded successfully!");
                    }}
                    onError={(e) => {
                      console.log("Image failed to load, trying fallback");
                      setImageError(true);
                      // Try alternative extensions
                      if (e.target.src.includes('profile.jpeg')) {
                        e.target.src = '/images/profile.jpg';
                      } else if (e.target.src.includes('profile.jpg')) {
                        e.target.src = '/images/profile.JPG';
                      } else if (e.target.src.includes('profile.JPG')) {
                        e.target.src = '/images/profile.png';
                      } else {
                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop';
                      }
                    }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  
                  {/* Stats Overlay - Responsive */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-dark to-transparent"
                  >
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      {[
                        { value: '3+', label: 'Years' },
                        { value: '35+', label: 'Projects' },
                        { value: '25+', label: 'Clients' }
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <motion.p 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + idx * 0.1, type: 'spring' }}
                            className="text-sm sm:text-base md:text-xl font-bold text-primary"
                          >
                            {stat.value}
                          </motion.p>
                          <p className="text-[8px] sm:text-[10px] md:text-xs text-light/60">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ 
                  x: [0, 8, 0], 
                  y: [0, -3, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 left-0 sm:-top-3 sm:left-3 glass-effect rounded-lg p-1.5 sm:p-2 backdrop-blur-md shadow-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold">Available</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -8, 0], 
                  y: [0, 3, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-0 sm:-bottom-3 sm:-right-3 glass-effect rounded-lg p-1.5 sm:p-2 backdrop-blur-md shadow-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-yellow-400">★★★★★</span>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold hidden sm:block">Top Rated</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs text-light/40 uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-light/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gradient-to-t from-primary to-secondary rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;