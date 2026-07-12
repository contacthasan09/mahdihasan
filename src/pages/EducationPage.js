/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiAward, FiCalendar, FiMapPin, FiBook, FiCode, FiSmartphone, FiUsers, FiGlobe, FiMonitor, FiDatabase, FiServer, FiCloud } from 'react-icons/fi';

const EducationPage = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'United International University',
      location: 'Dhaka, Bangladesh',
      period: '2021 - 2025',
      description: 'Comprehensive education in computer science fundamentals, software engineering, algorithms, data structures, and modern programming paradigms. Participated in various projects and research initiatives.',
      icon: <FiBook />,
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Operating Systems',
        'Computer Networks',
        'Web Technologies',
        'Mobile App Development',
        'Machine Learning',
        'Artificial Intelligence',
        'Cloud Computing'
      ],
    },
    {
      degree: 'Flutter Development Certification',
      institution: 'Google Developers & Online Platforms',
      location: 'Online',
      period: '2023',
      description: 'Comprehensive training in cross-platform mobile app development using Flutter framework. Mastered UI design, state management, Firebase integration, and app deployment.',
      icon: <FiSmartphone />,
      courses: ['Flutter UI Design', 'State Management', 'Firebase Integration', 'App Deployment', 'REST API Integration'],
    },
    {
      degree: 'Full-Stack Web Development',
      institution: 'Self-Directed Learning & Industry Projects',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2024',
      description: 'Intensive self-study and practical projects covering modern web technologies, full-stack development practices, and industry-standard tools.',
      icon: <FiCode />,
      courses: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL', 'REST APIs/GraphQL', 'Docker/AWS', 'CI/CD Pipelines'],
    },
  ];

  const onlineCourses = [
    { name: 'The Complete Flutter Development Bootcamp', platform: 'Udemy', year: '2023', icon: <FiSmartphone /> },
    { name: 'React - The Complete Guide', platform: 'Udemy', year: '2023', icon: <FiMonitor /> },
    { name: 'Node.js: The Complete Guide', platform: 'Udemy', year: '2023', icon: <FiServer /> },
    { name: 'MongoDB - The Complete Guide', platform: 'Udemy', year: '2024', icon: <FiDatabase /> },
    { name: 'AWS Cloud Practitioner', platform: 'AWS Training', year: '2024', icon: <FiCloud /> },
    { name: 'Git & GitHub Masterclass', platform: 'Online', year: '2023', icon: <FiCode /> },
  ];

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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 15
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }),
    hover: {
      scale: 1.08,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Education - Mahdi Hasan | Full-Stack Developer</title>
        <meta name="description" content="Learn about Mahdi Hasan's educational background in Computer Science & Engineering at United International University, along with certifications and online courses." />
      </Helmet>

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 section-padding relative overflow-hidden">
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
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [Math.random() * 100, Math.random() * 100 - 100],
                x: [Math.random() * 50, Math.random() * 50 - 50],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-xs sm:text-sm font-semibold text-primary mb-4">
                📚 My Education
              </span>
            </motion.div>
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-light mb-3 sm:mb-4"
            >
              Learning <span className="gradient-text">Journey</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg md:text-xl text-light/70 max-w-3xl mx-auto px-4"
            >
              A combination of formal education and self-directed learning that shaped my development skills.
            </motion.p>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="glass-effect rounded-2xl p-6 sm:p-8 card-hover"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {edu.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-light mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium text-sm sm:text-base">{edu.institution}</p>
                <div className="flex items-center gap-2 text-light/50 text-xs sm:text-sm mt-2">
                  <FiMapPin size={14} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-light/50 text-xs sm:text-sm mb-3 sm:mb-4">
                  <FiCalendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <p className="text-light/60 text-xs sm:text-sm mb-4 leading-relaxed">{edu.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {edu.courses.slice(0, 5).map((course, idx) => (
                    <motion.span 
                      key={idx} 
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 text-light/60 text-[10px] sm:text-xs"
                    >
                      {course}
                    </motion.span>
                  ))}
                  {edu.courses.length > 5 && (
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 text-light/40 text-[10px] sm:text-xs">
                      +{edu.courses.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Online Courses Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 sm:mt-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-xs sm:text-sm font-semibold text-primary mb-4">
                🎯 Online Courses
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-light mb-3">
                Certifications & <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-light/60 text-sm sm:text-base max-w-2xl mx-auto">
                Additional learning from online platforms to expand my knowledge
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-effect rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary text-lg sm:text-xl flex-shrink-0">
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-light truncate">{course.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-light/50">
                      <span>{course.platform}</span>
                      <span className="w-1 h-1 bg-light/30 rounded-full"></span>
                      <span>{course.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Courses Completed', value: '15+', icon: <FiBook />, color: 'from-blue-500 to-cyan-500' },
              { label: 'Certifications', value: '6+', icon: <FiAward />, color: 'from-purple-500 to-pink-500' },
              { label: 'Hackathons', value: '5+', icon: <FiUsers />, color: 'from-orange-500 to-red-500' },
              { label: 'Projects Built', value: '35+', icon: <FiCode />, color: 'from-green-500 to-emerald-500' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="glass-effect rounded-xl p-3 sm:p-4 text-center"
              >
                <div className={`inline-block p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white text-lg sm:text-xl mb-1 sm:mb-2`}>
                  {stat.icon}
                </div>
                <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-light/50">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 glass-effect rounded-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md">
              <FiAward className="text-primary text-lg sm:text-xl" />
              <span className="text-light/80 text-xs sm:text-sm font-medium">
                🎓 BSc in CSE • 6+ Certifications • Lifelong Learner
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;