/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import { FiAward, FiBriefcase, FiTrendingUp, FiCode, FiSmartphone, FiGlobe, FiHeart } from 'react-icons/fi';

const Journey = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const milestones = [
    { year: '2021', title: 'Started Coding Journey', description: 'Began learning web and mobile development', icon: <FiCode /> },
    { year: '2022', title: 'First Client Project', description: 'Completed first professional freelance project', icon: <FiBriefcase /> },
    { year: '2023', title: '35+ Projects Delivered', description: 'Crossed major milestone in project completion', icon: <FiTrendingUp /> },
    { year: '2024', title: 'Global Recognition', description: 'Working with international clients worldwide', icon: <FiGlobe /> },
  ];

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary mb-4">
              My Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-6">
              My Journey as a{' '}
              <span className="gradient-text">Developer</span>
            </h2>
            <div className="space-y-4 text-light/70 leading-relaxed">
              <p>
                I began my coding journey in 2021, driven by a passion for creating digital solutions that make a difference. What started as curiosity quickly turned into a full-time career as I discovered the power of technology to solve real-world problems.
              </p>
              <p>
                Based in Dhaka, Bangladesh, I've had the opportunity to work with startups, agencies, and established brands across the globe. Each project has taught me something new and helped me grow as a developer.
              </p>
              <p>
                My approach combines clean code with user-centric design, ensuring every application I build is not only functional but also enjoyable to use. I specialize in Flutter for cross-platform apps and modern web technologies for responsive web applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new backend technologies, contributing to open-source projects, or enjoying a good cup of coffee while architecting new database schemas.
              </p>
            </div>
            
            {/* Passion Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2"
            >
              <FiHeart className="text-red-500" />
              <span className="text-sm text-light/70">Passionate about building great products</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-6 glass-effect rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {milestone.icon}
                </div>
                <div>
                  <div className="text-primary font-bold text-lg">{milestone.year}</div>
                  <h3 className="text-xl font-display font-bold text-light group-hover:text-primary transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-light/50 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Contact CTA */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 text-center mt-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-bold text-light mb-4">
                Have a project in mind?
              </h3>
              <p className="text-light/60 mb-6 text-sm">
                Let's discuss how I can help bring your digital vision to life.
              </p>
              <Button variant="primary" size="medium" onClick={handleContact}>
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;