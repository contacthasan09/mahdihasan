/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiSocketdotio,
  SiGraphql,
  SiRedux,
  SiJest,
  SiVercel,
  SiFirebase,  // Changed from FaFirebase to SiFirebase
} from 'react-icons/si';

const ExpertiseStack = () => {
  const tools = [
    { name: 'Flutter', icon: <SiFlutter />, color: 'from-blue-600 to-blue-400' },
    { name: 'React', icon: <FaReact />, color: 'from-cyan-600 to-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'from-gray-800 to-gray-600' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'from-green-600 to-green-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'from-blue-500 to-blue-300' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-500 to-green-300' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'from-indigo-600 to-indigo-400' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'from-yellow-600 to-yellow-400' },  // Fixed here
    { name: 'Socket.io', icon: <SiSocketdotio />, color: 'from-gray-700 to-gray-500' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'from-pink-600 to-pink-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-teal-600 to-teal-400' },
    { name: 'Redux', icon: <SiRedux />, color: 'from-purple-600 to-purple-400' },
    { name: 'Jest', icon: <SiJest />, color: 'from-red-600 to-red-400' },
    { name: 'AWS', icon: <FaAws />, color: 'from-orange-600 to-orange-400' },
    { name: 'Docker', icon: <FaDocker />, color: 'from-blue-500 to-blue-300' },
    { name: 'Vercel', icon: <SiVercel />, color: 'from-gray-800 to-gray-600' },
    { name: 'Git', icon: <FaGitAlt />, color: 'from-red-600 to-red-400' },
    { name: 'Figma', icon: <FaFigma />, color: 'from-purple-600 to-purple-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const toolVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-dark to-dark/95 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary mb-4">
            Tech Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Modern tools and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={toolVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="glass-effect rounded-2xl p-4 text-center card-hover group cursor-pointer"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${tool.color} mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <div className="text-2xl text-white">{tool.icon}</div>
              </div>
              <h4 className="text-light font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 backdrop-blur-md">
            <span className="text-light/80 text-sm font-medium">
              18+ Technologies • Constantly Learning • Always Evolving
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseStack;