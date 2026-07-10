/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import { FiClock, FiArrowRight, FiCode, FiMessageCircle, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi';

const CTASection = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleStartProject = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleViewWork = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-5"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ x: `${particle.x}%`, y: `${particle.y}%`, scale: 0 }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-white/10 shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <span className="text-xs font-semibold text-primary">Available for Projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-3xl md:text-5xl font-display font-bold text-light mb-4"
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Ready to Bring Your{' '}
            <span className="gradient-text">Digital Vision</span> to Life?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-light/70 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss your project and turn your ideas into a high-quality, scalable application.
            Whether it's a mobile app, web platform, or full-stack solution, I'm here to help.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-1 text-primary text-sm"
              >
                <FiCode />
                <span className="font-semibold">35+</span>
              </motion.div>
              <p className="text-light/40 text-xs">Projects</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-1 text-primary text-sm"
              >
                <FiStar />
                <span className="font-semibold">5.0</span>
              </motion.div>
              <p className="text-light/40 text-xs">Rating</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-1 text-primary text-sm"
              >
                <FiTrendingUp />
                <span className="font-semibold">100%</span>
              </motion.div>
              <p className="text-light/40 text-xs">Satisfaction</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="large" 
                icon={<FiMessageCircle />}
                onClick={handleStartProject}
              >
                Start Your Project
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="large" 
                icon={<FiCode />}
                onClick={handleViewWork}
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-light/50 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <FiCheckCircle className="text-green-500 text-sm" />
              <span>Free consultation</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <FiCheckCircle className="text-green-500 text-sm" />
              <span>No obligation</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <FiCheckCircle className="text-green-500 text-sm" />
              <span>24h response time</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <FiCheckCircle className="text-green-500 text-sm" />
              <span>Flexible pricing</span>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 pt-4 border-t border-white/10"
          >
            <p className="text-light/30 text-xs">
              Join 25+ satisfied clients who trusted me with their digital projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;