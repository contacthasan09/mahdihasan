import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiFolder, FiUser, FiBookOpen, FiMail, FiBriefcase, FiArrowRight, FiStar } from 'react-icons/fi';
import BookCallModal from '../Common/BookCallModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const location = useLocation();
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home', icon: <FiHome />, glow: 'from-blue-500 to-cyan-500' },
    { path: '/portfolio', name: 'Portfolio', icon: <FiFolder />, glow: 'from-purple-500 to-pink-500' },
    { path: '/meet-mahdi', name: 'Meet Mahdi', icon: <FiUser />, glow: 'from-green-500 to-emerald-500' },
    { path: '/articles', name: 'Articles', icon: <FiBookOpen />, glow: 'from-orange-500 to-red-500' },
    { path: '/contact', name: 'Contact', icon: <FiMail />, glow: 'from-teal-500 to-cyan-500' },
  ];

  // Eye-catching animations for Hire Me button
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
      boxShadow: "0 0 30px rgba(107, 33, 165, 0.7)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 },
    glow: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 0px rgba(107, 33, 165, 0)",
        "0 0 25px rgba(107, 33, 165, 0.8)",
        "0 0 0px rgba(107, 33, 165, 0)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    initial: { x: 0, rotate: 0 },
    hover: {
      x: [0, 6, -6, 4, -4, 0],
      rotate: [0, 15, -15, 10, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  const navLinkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, type: "spring" }
    }),
    hover: {
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.5, rotateY: 180 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 0.6, type: "spring" }
    },
    hover: {
      scale: 1.08,
      textShadow: "0 0 8px rgba(107, 33, 165, 0.5)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <>
      <motion.nav
        style={{ opacity: navbarOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-effect shadow-2xl py-2 md:py-3 border-b border-white/10' 
            : 'bg-dark/60 backdrop-blur-md py-3 md:py-5'
        }`}
      >
        {/* Animated gradient border on scroll */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        )}
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo with 3D animation */}
            <Link to="/" className="relative group">
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-xl sm:text-2xl font-display font-bold relative"
              >
                <span className="gradient-text">Mahdi</span>
                <span className="text-light">.</span>
                
                {/* Animated underline effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  variants={navLinkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-light/80 hover:text-light transition-all duration-300 group ${
                        isActive ? 'text-primary' : ''
                      }`
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-2 text-sm lg:text-base">
                      <motion.span
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.icon}
                      </motion.span>
                      {link.name}
                    </span>
                    
                    {/* Active indicator with glow */}
                    <NavLink to={link.path}>
                      {({ isActive }) => (
                        isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )
                      )}
                    </NavLink>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particle on hover */}
                    <motion.span
                      className="absolute -top-6 left-1/2 text-primary text-xs opacity-0 pointer-events-none"
                      whileHover={{ opacity: 1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      ✦
                    </motion.span>
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Eye-Catching Hire Me Button */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                {/* Pulsing background rings */}
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-40 blur-md"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"
                />
                
                {/* Main Button */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate="glow"
                  onClick={() => setIsModalOpen(true)}
                  className="relative px-5 py-2 lg:px-7 lg:py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all duration-300 overflow-hidden group text-sm lg:text-base shadow-lg"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Button content */}
                  <span className="relative flex items-center gap-2 lg:gap-3 z-10">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                      className="text-yellow-300"
                    >
                      ✦
                    </motion.span>
                    Hire Me
                    <motion.span
                      variants={iconVariants}
                      initial="initial"
                      animate={isHovered ? "hover" : "initial"}
                    >
                      <FiArrowRight size={14} className="lg:w-4 lg:h-4" />
                    </motion.span>
                  </span>
                </motion.button>
                
                {/* Sparkle effects on hover */}
                {isHovered && typeof window !== 'undefined' && !('ontouchstart' in window) && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                        animate={{ 
                          scale: [0, 1, 0], 
                          opacity: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 40],
                          y: [0, (Math.random() - 0.5) * 40 - 20]
                        }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="absolute text-yellow-400 text-xs pointer-events-none"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                      >
                        {i % 2 === 0 ? '✨' : '⚡'}
                      </motion.div>
                    ))}
                  </>
                )}
              </motion.div>
            </div>

            {/* Mobile Menu Button with animation */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 90 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-xl sm:text-2xl text-light p-2 relative"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Enhanced with animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass-effect md:hidden overflow-y-auto"
            style={{ paddingTop: '80px' }}
          >
            {/* Animated background pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
              }}
            />
            
            <div className="flex flex-col items-center gap-4 p-6 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 text-xl py-4 text-light/80 hover:text-light hover:bg-white/10 rounded-xl transition-all duration-300 w-full group"
                  >
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      className="text-primary"
                    >
                      {link.icon}
                    </motion.span>
                    {link.name}
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-primary text-sm"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Hire Me Button with Enhanced Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-full flex justify-center mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold overflow-hidden group shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center justify-center gap-2 z-10">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                    >
                      ✦
                    </motion.span>
                    Hire Me
                    <FiArrowRight />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Call Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;