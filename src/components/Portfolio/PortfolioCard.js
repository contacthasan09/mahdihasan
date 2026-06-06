/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiTrendingUp, 
  FiUsers, 
  FiDollarSign, 
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiImage
} from 'react-icons/fi';

const PortfolioCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  // Define multiple images for each project
  const getProjectImages = (title) => {
    const imagesDatabase = {
      'BonoLife': [
        'https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop',
      ],
      'Pride Limited': [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1557804506-5b8c9f4e5b9d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop',
      ],
      'Smart Air BD': [
        'https://images.unsplash.com/photo-1535224206242-487f1e1441c7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1535224206242-487f1e1441c7?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=600&h=400&fit=crop',
      ],
      'Clinicall': [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      ],
      'Clinicall: App Install': [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      ],
    };

    return imagesDatabase[title] || [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1573804633927-b8cd4c7b988b?w=600&h=400&fit=crop',
    ];
  };

  const projectImages = getProjectImages(project.title);
  const totalImages = projectImages.length;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleImageError = (imageUrl) => {
    setImageErrors(prev => ({ ...prev, [imageUrl]: true }));
  };

  const getCurrentImageUrl = () => {
    const url = projectImages[currentImageIndex];
    return imageErrors[url] ? getPlaceholderImage() : url;
  };

  const getPlaceholderImage = () => {
    return 'https://placehold.co/600x400/6B21A5/FFFFFF?text=Campaign+Preview';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl glass-effect card-hover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow Effect on Hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        initial={false}
        whileHover={{ scale: 1.05 }}
      />
      
      {/* Image Slider Section */}
      <div className="relative h-64 overflow-hidden group/image">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={getCurrentImageUrl()}
            alt={`${project.title} - Campaign Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onError={() => handleImageError(projectImages[currentImageIndex])}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-2 py-1 rounded-full glass-effect text-xs font-semibold text-white backdrop-blur-md z-10 flex items-center gap-1">
          <FiImage size={10} />
          <span>{currentImageIndex + 1}/{totalImages}</span>
        </div>

        {/* Platform Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary backdrop-blur-md z-10">
          {project.platform}
        </span>

        {/* Navigation Buttons - Show on Hover */}
        {totalImages > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 0 : -20 }}
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 hover:bg-primary/80 transition-all duration-300 z-20"
              whileHover={{ scale: 1.1 }}
            >
              <FiChevronLeft className="text-white text-lg" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 0 : 20 }}
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-2 hover:bg-primary/80 transition-all duration-300 z-20"
              whileHover={{ scale: 1.1 }}
            >
              <FiChevronRight className="text-white text-lg" />
            </motion.button>
          </>
        )}

        {/* Image Indicators/Dots */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {projectImages.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === idx 
                    ? 'bg-primary w-4' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-light/60 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Results Section with Icons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.results.roas && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiTrendingUp className="text-primary text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">ROAS</p>
              <p className="text-primary font-bold text-sm">{project.results.roas}</p>
            </div>
          )}
          {project.results.revenue && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiDollarSign className="text-green-500 text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">Revenue</p>
              <p className="text-light font-semibold text-sm">+{project.results.revenue}</p>
            </div>
          )}
          {project.results.cpa && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiUsers className="text-blue-500 text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">CPA</p>
              <p className="text-light font-semibold text-sm">{project.results.cpa}</p>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4">
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm"
          >
            Explore full campaign strategy <FiArrowRight />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-light/40 hover:text-primary transition-colors"
          >
            <FiExternalLink size={14} />
          </motion.button>
        </div>
      </div>
      
      {/* Progress Bar Animation on Hover */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />

      {/* Auto-rotate images when hovering over image area */}
      {isHovering && totalImages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 z-20"
          style={{ top: '64px' }}
        />
      )}
    </motion.div>
  );
};

export default PortfolioCard;