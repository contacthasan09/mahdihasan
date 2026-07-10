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
  FiImage,
  FiCode,
  FiSmartphone,
  FiServer
} from 'react-icons/fi';

const PortfolioCard = ({ project, index, onExplore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  // Define multiple images for each development project using reliable Unsplash images
  const getProjectImages = (title) => {
    const imagesDatabase = {
      'E-Commerce Platform': [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop',
      ],
      'Doctor Appointment Booking': [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      ],
      'SaaS Analytics Dashboard': [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      ],
      'Mobile Banking App': [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      ],
      'Restaurant Ordering System': [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      ],
      'Ride Sharing App': [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
      ],
      'Project Management Tool': [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      ],
      'Social Media Dashboard': [
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
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
    console.log('Image failed to load:', imageUrl);
    setImageErrors(prev => ({ ...prev, [imageUrl]: true }));
  };

  const getCurrentImageUrl = () => {
    const url = projectImages[currentImageIndex];
    if (imageErrors[url]) {
      return `https://placehold.co/600x400/6B21A5/FFFFFF?text=${encodeURIComponent(project.title)}+Preview`;
    }
    return url;
  };

  // Get platform icon
  const getPlatformIcon = () => {
    if (project.platform === 'Web App') return <FiServer className="text-primary text-sm" />;
    if (project.platform === 'Mobile App') return <FiSmartphone className="text-primary text-sm" />;
    return <FiCode className="text-primary text-sm" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl glass-effect card-hover cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onExplore && onExplore(project)}
    >
      {/* Glow Effect on Hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        initial={false}
        whileHover={{ scale: 1.05 }}
      />
      
      {/* Image Slider Section */}
      <div className="relative h-56 overflow-hidden group/image">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={getCurrentImageUrl()}
            alt={`${project.title} - Project Image ${currentImageIndex + 1}`}
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
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full glass-effect text-xs font-semibold text-white backdrop-blur-md z-10 flex items-center gap-1">
          <FiImage size={10} />
          <span>{currentImageIndex + 1}/{totalImages}</span>
        </div>

        {/* Platform Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary backdrop-blur-md z-10 flex items-center gap-1">
          {getPlatformIcon()}
          {project.platform}
        </span>

        {/* Category Badge */}
        {project.category && (
          <span className="absolute top-3 right-16 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-secondary backdrop-blur-md z-10">
            {project.category}
          </span>
        )}

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
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {projectImages.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
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
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-display font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-light/60 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        {/* Results Section with Icons */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {project.results && project.results.roas && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiTrendingUp className="text-primary text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">Impact</p>
              <p className="text-primary font-bold text-xs">{project.results.roas}</p>
            </div>
          )}
          {project.results && project.results.revenue && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiDollarSign className="text-green-500 text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">Growth</p>
              <p className="text-light font-semibold text-xs">+{project.results.revenue}</p>
            </div>
          )}
          {project.results && project.results.cpa && (
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <FiUsers className="text-blue-500 text-sm mx-auto mb-1" />
              <p className="text-xs text-light/40">Metric</p>
              <p className="text-light font-semibold text-xs">{project.results.cpa}</p>
            </div>
          )}
        </div>
        
        {/* Technologies Used (Optional) */}
        {project.technologies && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-[10px] text-light/40 bg-white/5 px-1.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-2">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={(e) => {
              e.stopPropagation();
              onExplore && onExplore(project);
            }}
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-xs font-medium"
          >
            Explore Details <FiArrowRight size={12} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={(e) => e.stopPropagation()}
            className="text-light/40 hover:text-primary transition-colors"
          >
            <FiExternalLink size={12} />
          </motion.button>
        </div>
      </div>
      
      {/* Progress Bar Animation on Hover */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PortfolioCard;