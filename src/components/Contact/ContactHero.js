/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  FiMessageCircle, 
  FiMail, 
  FiSend, 
  FiSmile,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiStar,
  FiArrowRight,
  FiCode,
  FiSmartphone
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactHero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeStat, setActiveStat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // WhatsApp handler
  const handleWhatsApp = () => {
    const phoneNumber = '8801660157557'; // Your WhatsApp number
    const message = encodeURIComponent('Hello Mahdi, I\'m interested in working with you on a project.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Email handler
  const handleEmail = () => {
    const email = 'contacthasan09@gmail.com';
    const subject = encodeURIComponent('Project Inquiry - Mahdi Hasan');
    const body = encodeURIComponent('Hello Mahdi,\n\nI came across your portfolio and would like to discuss a project with you.\n\nBest regards,');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // View My Work handler
  const handleViewWork = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  // Start Conversation handler - Opens WhatsApp
  const handleStartConversation = () => {
    const phoneNumber = '8801660157557';
    const message = encodeURIComponent('Hello Mahdi, I came across your portfolio and would like to discuss a project with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        delay: i * 0.03,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const statCardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    }),
  };

  const floatingIconVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const titleText = "LET'S CONNECT".split('');
  
  const stats = [
    { value: '24h', label: 'Response Time', icon: <FiSend />, color: 'from-primary to-secondary', delay: 0.8 },
    { value: '100%', label: 'Client Satisfaction', icon: <FiSmile />, color: 'from-green-500 to-emerald-500', delay: 0.9 },
    { value: '35+', label: 'Projects Done', icon: <FiCode />, color: 'from-blue-500 to-cyan-500', delay: 1.0 },
    { value: '5.0', label: 'Client Rating', icon: <FiStar />, color: 'from-yellow-500 to-orange-500', delay: 1.1 },
  ];

  const contactMethods = [
    { method: 'Email', response: 'Within 2 hours', icon: <FiMail />, action: handleEmail },
    { method: 'WhatsApp', response: 'Instant reply', icon: <FaWhatsapp />, action: handleWhatsApp },
    { method: 'Video Call', response: 'Schedule meeting', icon: <FiTrendingUp />, action: handleStartConversation },
  ];

  return (
    <section ref={ref} className="pt-32 pb-20 section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        <motion.div
          variants={floatingIconVariants}
          initial="initial"
          animate="animate"
          className="absolute top-32 left-20 text-primary/20 hidden lg:block"
        >
          <FiCode size={60} />
        </motion.div>
        
        <motion.div
          variants={floatingIconVariants}
          initial="initial"
          animate="animate"
          custom={1}
          className="absolute bottom-32 right-20 text-secondary/20 hidden lg:block"
          style={{ animationDelay: '1s' }}
        >
          <FiSmartphone size={50} />
        </motion.div>
        
        <motion.div
          variants={floatingIconVariants}
          initial="initial"
          animate="animate"
          custom={2}
          className="absolute top-1/2 right-32 text-accent/20 hidden lg:block"
          style={{ animationDelay: '2s' }}
        >
          <FiSend size={40} />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>

        {/* Animated Gradient Border */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
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
                  className="text-3xl md:text-5xl lg:text-6xl font-display font-bold inline-block"
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
            Have a project in mind? Let's discuss how I can help bring your digital vision to life. 
            Whether it's a{' '}
            <span className="text-primary font-semibold">mobile app</span>,{' '}
            <span className="text-secondary font-semibold">web application</span>, or{' '}
            <span className="text-accent font-semibold">full-stack solution</span>, I'm here to help.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statCardVariants}
                custom={index}
                onMouseEnter={() => setActiveStat(index)}
                onMouseLeave={() => setActiveStat(null)}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="relative glass-effect rounded-2xl p-4 backdrop-blur-md border border-white/10 cursor-pointer overflow-hidden group"
              >
                {/* Animated Background Gradient */}
                {activeStat === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color}`}
                  />
                )}
                
                <div className="relative z-10">
                  <div className="text-3xl text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
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
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods Badges - Now Clickable */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.button
                key={index}
                variants={statCardVariants}
                custom={index + 4}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className="glass-effect rounded-full px-6 py-3 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary text-xl">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-light font-semibold text-sm">{method.method}</p>
                    <p className="text-xs text-light/40">{method.response}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartConversation}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <FiMessageCircle />
              Start a Conversation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewWork}
              className="px-8 py-3 rounded-full glass-effect text-light font-semibold border border-white/20 hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
            >
              <FiCode />
              View My Work
            </motion.button>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 backdrop-blur-md"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <span className="text-xs text-light/60">Available for freelance work</span>
            <span className="text-xs text-primary font-semibold">Let's talk!</span>
          </motion.div>

          {/* Animated Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <motion.div
              animate={{ width: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              animate={{ width: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
            />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-8 text-light/40 text-xs"
          >
            <span className="flex items-center gap-1">
              <FiAward size={12} />
              35+ Projects
            </span>
            <span>•</span>
            <span>100% Satisfaction</span>
            <span>•</span>
            <span>Fast Delivery</span>
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
          <span className="text-xs text-light/40">Get in touch</span>
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

export default ContactHero;