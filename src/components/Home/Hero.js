/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiPause } from 'react-icons/fi';
import Button from '../Common/Button';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

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
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  // Split text into words for animation
  const headingText = "Result-Focused Paid Media That Drives Results";
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

  // Letter animation for gradient text
  const gradientText = "Paid Media That Drives Results";
  const gradientLetters = gradientText.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Video with Motion Effect */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-animation-3943-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Animated Heading with Word-by-Word Effect */}
            <div className="mb-6 overflow-visible">
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {words.map((word, index) => {
                  // Check if this word should have gradient (from "Paid" onward)
                  const isGradientWord = index >= 2;
                  return (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold inline-block ${
                        isGradientWord ? 'gradient-text' : 'text-light'
                      }`}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* Animated Subtitle with Typewriter Effect */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-light/70 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Helping brands scale through data-driven Meta and Google Ads. 
              I create full-funnel strategies designed to capture leads, drive sales, and maximize your bottom line.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="medium" icon={<FiArrowRight />}>
                View Case Studies
              </Button>
              <Button variant="outline" size="medium" icon={<FiPlay />}>
                Watch Overview
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['Meta Blueprint Certified', 'Google Ads Certified', '4.8x Avg ROAS'].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="glass-effect backdrop-blur-md px-3 py-1.5 rounded-full cursor-default"
                >
                  <span className="text-light/80 text-xs font-medium">{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Animation */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block -mt-20"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              {/* Glow Effect Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse" />
              
              {/* Main Image Card */}
              <div className="relative glass-effect rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="relative">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
                  )}
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop"
                    alt="Sneha - Digital Marketing Specialist"
                    className="w-full h-auto max-h-[450px] object-cover transition-all duration-700"
                    onLoad={() => setImageLoaded(true)}
                    style={{ objectPosition: 'top center' }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  
                  {/* Stats Overlay */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: '30+', label: 'Brands' },
                        { value: '4.8x', label: 'Avg ROAS' },
                        { value: '85%', label: 'Retention' }
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <motion.p 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + idx * 0.1, type: 'spring' }}
                            className="text-xl font-bold text-primary"
                          >
                            {stat.value}
                          </motion.p>
                          <p className="text-xs text-light/60">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0], 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-3 glass-effect rounded-lg p-2 backdrop-blur-md shadow-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold">Available for Work</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -10, 0], 
                  y: [0, 5, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-3 glass-effect rounded-lg p-2 backdrop-blur-md shadow-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <div>
                    <p className="text-xs font-semibold">Top Rated</p>
                    <p className="text-[10px] text-light/50">5.0 / 5.0</p>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs text-light/40 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-t from-primary to-secondary rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;  