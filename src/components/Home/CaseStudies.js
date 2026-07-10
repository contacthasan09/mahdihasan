/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiChevronLeft, 
  FiChevronRight, 
  FiTrendingUp, 
  FiUsers, 
  FiDollarSign,
  FiCode,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiCloud,
  FiStar,
  FiArrowRight
} from 'react-icons/fi';
import SectionHeader from '../Common/SectionHeader';
import Button from '../Common/Button';

// Development Projects Data
const portfolioData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    platform: 'Full-Stack',
    category: 'Web App',
    description: 'A modern shopping experience with seamless checkout flow and real-time inventory management. Built with Flutter and Node.js.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    results: {
      roas: '10k+',
      revenue: 'Users',
      cpa: 'Active',
    },
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe', 'REST API'],
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Doctor Appointment Booking',
    platform: 'Healthcare',
    category: 'Mobile App',
    description: 'A modern healthcare platform enabling patients to book, manage, and track medical appointments seamlessly.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    results: {
      roas: '5k+',
      revenue: 'Bookings',
      cpa: 'Monthly',
    },
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Zegocloud', 'REST API'],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/doctor-appointment',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    platform: 'Analytics',
    category: 'Web App',
    description: 'Analytics dashboard with interactive charts, user management, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    results: {
      roas: '500+',
      revenue: 'Users',
      cpa: 'Active',
    },
    technologies: ['React', 'Next.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/saas-dashboard',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    platform: 'Fintech',
    category: 'Mobile App',
    description: 'Secure fintech application with biometric authentication and instant transfers.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    results: {
      roas: '25k+',
      revenue: 'Downloads',
      cpa: 'Users',
    },
    technologies: ['Flutter', 'Firebase', 'Plaid', 'REST API', 'Biometric'],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/mobile-banking',
  },
  {
    id: 5,
    title: 'Restaurant Ordering App',
    platform: 'Food & Beverage',
    category: 'Mobile App',
    description: 'A complete restaurant management system with online ordering, table reservation, and loyalty rewards.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    results: {
      roas: '15k+',
      revenue: 'Orders',
      cpa: 'Monthly',
    },
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/restaurant-app',
  },
  {
    id: 6,
    title: 'Ride Sharing App',
    platform: 'Transportation',
    category: 'Mobile App',
    description: 'A modern ride-sharing platform enabling users to book, manage, and track rides seamlessly with real-time GPS tracking.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
    results: {
      roas: '20k+',
      revenue: 'Rides',
      cpa: 'Completed',
    },
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Socket.io'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1494517186945-df8131a1a2d8?w=800&h=500&fit=crop',
    ],
    fullCaseStudy: '/work/ride-sharing-app',
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const featuredCases = portfolioData;

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
        staggerChildren: 0.1
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <section className="section-padding relative bg-gradient-to-b from-dark to-dark/95 overflow-hidden">
        {/* Animated Background Elements */}
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
            badge="Featured Projects"
            title="Projects I'm Proud Of"
            subtitle="Real-world solutions delivering real results. Here are some of my favorite projects."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 mt-16"
          >
            {/* Main Featured Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={featuredCases[activeIndex]?.image}
                    alt={featuredCases[activeIndex]?.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                
                {/* Content Overlay */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary mb-2 backdrop-blur-md">
                    {featuredCases[activeIndex]?.platform}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-light mb-2">
                    {featuredCases[activeIndex]?.title}
                  </h3>
                  <p className="text-light/70 mb-4 line-clamp-2">
                    {featuredCases[activeIndex]?.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => openModal(featuredCases[activeIndex])}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
                  >
                    Explore full project details <FiArrowRight />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Project List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {featuredCases.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveIndex(index)}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? 'glass-effect border-l-4 border-primary'
                      : 'hover:glass-effect'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-display font-bold text-light">
                      {caseStudy.title}
                    </h4>
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="text-primary font-bold text-sm"
                    >
                      {caseStudy.results.roas} {caseStudy.results.revenue}
                    </motion.span>
                  </div>
                  <p className="text-light/60 text-sm mb-3 line-clamp-2">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs text-light/40 bg-white/5 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="primary" size="large">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-dark to-dark/95 border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 glass-effect rounded-full p-2 text-light/70 hover:text-primary transition-colors"
              >
                <FiX size={20} />
              </motion.button>

              {/* Image Slider */}
              <div className="relative h-80 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={selectedProject.images && selectedProject.images[currentImageIndex] ? selectedProject.images[currentImageIndex] : selectedProject.image}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x500/6B21A5/FFFFFF?text=Project+Image';
                    }}
                  />
                </AnimatePresence>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                
                {/* Slider Navigation */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 z-20 hover:bg-primary/20 transition-colors"
                    >
                      <FiChevronLeft className="text-white text-xl" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 z-20 hover:bg-primary/20 transition-colors"
                    >
                      <FiChevronRight className="text-white text-xl" />
                    </motion.button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                      {selectedProject.images.map((_, idx) => (
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
                  >
                    <span className="inline-block px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary mb-2 backdrop-blur-md">
                      {selectedProject.platform}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-light">
                      {selectedProject.title}
                    </h2>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-light/80 leading-relaxed mb-6"
                >
                  {selectedProject.description}
                </motion.p>

                {/* Results Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-4 mb-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect rounded-xl p-3 text-center"
                  >
                    <FiTrendingUp className="text-primary text-xl mx-auto mb-1" />
                    <p className="text-xs text-light/50">Total {selectedProject.results.revenue}</p>
                    <p className="text-light font-bold text-lg">{selectedProject.results.roas}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect rounded-xl p-3 text-center"
                  >
                    <FiCode className="text-green-500 text-xl mx-auto mb-1" />
                    <p className="text-xs text-light/50">Technologies</p>
                    <p className="text-light font-bold text-sm">{selectedProject.technologies.length}+ tools</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass-effect rounded-xl p-3 text-center"
                  >
                    <FiStar className="text-yellow-500 text-xl mx-auto mb-1" />
                    <p className="text-xs text-light/50">Client Rating</p>
                    <p className="text-light font-bold text-lg">5.0/5</p>
                  </motion.div>
                </motion.div>

                {/* Technologies Used */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg font-display font-bold text-light mb-3"
                >
                  Technologies Used
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {selectedProject.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full glass-effect text-xs text-light/70"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(107, 33, 165, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  >
                    Request Similar Project
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

export default CaseStudies;