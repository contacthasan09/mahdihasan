/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiCloud,
  FiZap,
  FiArrowRight,
  FiX,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import SectionHeader from '../Common/SectionHeader';
import Button from '../Common/Button';

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      id: 1,
      icon: <FiSmartphone className="text-3xl" />,
      title: 'Cross-Platform Apps',
      shortDesc: 'Build once, deploy everywhere with Flutter.',
      description: 'High-performance mobile apps for iOS, Android, and web from a single codebase. I create beautiful, fast, and responsive cross-platform applications that save time and money.',
      features: ['Flutter Development', 'Native Performance', 'App Store Deployment', 'Cross-Platform UI', 'State Management', 'Custom Animations'],
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
      timeline: '4-8 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1526498460520-4c246339d76a?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 2,
      icon: <FiCode className="text-3xl" />,
      title: 'Web Applications',
      shortDesc: 'Modern, responsive web apps with React & Next.js.',
      description: 'I build fast, SEO-friendly, and user-centric web applications using cutting-edge technologies. Perfect for startups and established businesses.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Server-side Rendering'],
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple',
      timeline: '3-6 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 3,
      icon: <FiServer className="text-3xl" />,
      title: 'Backend Development',
      shortDesc: 'Robust and scalable backend systems.',
      description: 'I design and implement powerful backend architectures that handle millions of requests. RESTful APIs, GraphQL, and real-time features.',
      features: ['Node.js/Express', 'REST APIs', 'GraphQL', 'Authentication', 'Security', 'Scalable Architecture'],
      gradient: 'from-green-500 to-emerald-500',
      color: 'green',
      timeline: '4-8 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 4,
      icon: <FiDatabase className="text-3xl" />,
      title: 'Database Design',
      shortDesc: 'Efficient database architecture.',
      description: 'Optimized database solutions using MongoDB, PostgreSQL, and Firebase. Data modeling, query optimization, and scalable storage.',
      features: ['MongoDB', 'PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization', 'Backup Strategies'],
      gradient: 'from-orange-500 to-red-500',
      color: 'orange',
      timeline: '2-4 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1544383835-bda2bc66a164?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 5,
      icon: <FiCloud className="text-3xl" />,
      title: 'Cloud Deployment',
      shortDesc: 'Seamless deployment and scaling.',
      description: 'Expert deployment on AWS, Vercel, and Firebase. CI/CD pipelines, containerization, and DevOps best practices.',
      features: ['AWS Services', 'Vercel Hosting', 'CI/CD Pipelines', 'Docker', 'Auto-scaling', 'Monitoring'],
      gradient: 'from-teal-500 to-green-500',
      color: 'teal',
      timeline: '1-2 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      ],
    },
    {
      id: 6,
      icon: <FiZap className="text-3xl" />,
      title: 'Real-time Features',
      shortDesc: 'Live updates and instant notifications.',
      description: 'Build engaging real-time applications with WebSockets and Socket.io. Perfect for chat apps, live tracking, and collaborative tools.',
      features: ['WebSocket', 'Socket.io', 'Live Updates', 'Push Notifications', 'Presence System', 'Video Calling'],
      gradient: 'from-yellow-500 to-amber-500',
      color: 'yellow',
      timeline: '3-5 weeks',
      price: 'Custom Quote',
      images: [
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
      ],
    },
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.4 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  return (
    <>
      <section ref={ref} className="section-padding relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
          <SectionHeader
            badge="What I Offer"
            title="Development Services"
            subtitle="I don't just write code — I build solutions. Every service is designed to deliver high-quality, scalable applications."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="glass-effect rounded-xl p-6 cursor-pointer group transition-all duration-300 hover:border-primary/30"
                onClick={() => {
                  setSelectedService(service);
                  setCurrentImageIndex(0);
                }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`inline-block p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4 shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-light/60 text-sm mb-4">{service.shortDesc}</p>
                
                <motion.div 
                  className="flex items-center gap-2 text-primary text-sm font-medium"
                  whileHover={{ gap: 8 }}
                >
                  Learn More <FiArrowRight size={14} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal with Slider */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-dark to-dark/95 border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 glass-effect rounded-full p-2 text-light/70 hover:text-primary transition-colors"
              >
                <FiX size={20} />
              </motion.button>

              {/* Image Slider */}
              <div className="relative h-72 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={selectedService.images[currentImageIndex]}
                    alt={`${selectedService.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                
                {/* Slider Navigation */}
                {selectedService.images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 z-20"
                    >
                      <FiChevronLeft className="text-white text-xl" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 z-20"
                    >
                      <FiChevronRight className="text-white text-xl" />
                    </motion.button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                      {selectedService.images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.2 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === idx 
                              ? 'bg-primary w-6' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-block p-2 rounded-lg bg-gradient-to-r ${selectedService.gradient} mb-3 shadow-lg`}
                  >
                    <div className="text-white text-xl">{selectedService.icon}</div>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-display font-bold text-light"
                  >
                    {selectedService.title}
                  </motion.h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-light/80 leading-relaxed mb-6"
                >
                  {selectedService.description}
                </motion.p>

                {/* Quick Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect rounded-xl p-3 text-center"
                  >
                    <FiClock className="text-primary text-xl mx-auto mb-1" />
                    <p className="text-xs text-light/50">Timeline</p>
                    <p className="text-light font-semibold text-sm">{selectedService.timeline}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect rounded-xl p-3 text-center"
                  >
                    <FiDollarSign className="text-primary text-xl mx-auto mb-1" />
                    <p className="text-xs text-light/50">Pricing</p>
                    <p className="text-light font-semibold text-sm">{selectedService.price}</p>
                  </motion.div>
                </motion.div>

                {/* Features */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg font-display font-bold text-light mb-3"
                >
                  What's Included
                </motion.h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {selectedService.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.05 }}
                      >
                        <FiCheck className="text-green-500 text-sm" />
                      </motion.div>
                      <span className="text-light/70 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(107, 33, 165, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  >
                    Get a Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/contact'}
                    className="flex-1 px-4 py-2 rounded-lg glass-effect text-light font-semibold border border-white/20 hover:border-primary/50 transition-all"
                  >
                    Contact Me
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;