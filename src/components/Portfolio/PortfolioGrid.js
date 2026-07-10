/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiChevronLeft, FiChevronRight, FiTrendingUp, FiUsers, FiDollarSign, FiCode, FiStar, FiArrowRight } from 'react-icons/fi';
import PortfolioCard from './PortfolioCard';
import { portfolioData } from '../../data/portfolioData';

const PortfolioGrid = ({ filter }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
      <section ref={ref} className="section-padding pt-0">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <PortfolioCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onExplore={openModal}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
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
                onClick={closeModal}
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
                      e.target.src = 'https://placehold.co/800x500/6B21A5/FFFFFF?text=Project+Preview';
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
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-effect text-xs font-semibold backdrop-blur-md">
                    {selectedProject.platform}
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-light">
                      {selectedProject.title}
                    </h2>
                    <p className="text-light/60 text-sm mt-1">{selectedProject.category}</p>
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
                  {selectedProject.results.roas && (
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-effect rounded-xl p-3 text-center"
                    >
                      <FiTrendingUp className="text-primary text-xl mx-auto mb-1" />
                      <p className="text-xs text-light/50">Impact</p>
                      <p className="text-light font-bold text-lg">{selectedProject.results.roas}</p>
                    </motion.div>
                  )}
                  {selectedProject.results.revenue && (
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-effect rounded-xl p-3 text-center"
                    >
                      <FiDollarSign className="text-green-500 text-xl mx-auto mb-1" />
                      <p className="text-xs text-light/50">Growth</p>
                      <p className="text-light font-bold text-lg">+{selectedProject.results.revenue}</p>
                    </motion.div>
                  )}
                  {selectedProject.results.cpa && (
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-effect rounded-xl p-3 text-center"
                    >
                      <FiUsers className="text-blue-500 text-xl mx-auto mb-1" />
                      <p className="text-xs text-light/50">Metric</p>
                      <p className="text-light font-bold text-lg">{selectedProject.results.cpa}</p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Technologies Used */}
                {selectedProject.technologies && (
                  <>
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
                  </>
                )}

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
                    onClick={() => window.location.href = '/contact'}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  >
                    Request Similar Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/portfolio'}
                    className="flex-1 px-4 py-2 rounded-lg glass-effect text-light font-semibold border border-white/20 hover:border-primary/50 transition-all"
                  >
                    View More Projects
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

export default PortfolioGrid;