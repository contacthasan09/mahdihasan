/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiClock, 
  FiArrowRight, 
  FiX, 
  FiUser, 
  FiTag, 
  FiHeart, 
  FiShare2,
  FiBookmark,
  FiMessageCircle,
  FiCode,
  FiSmartphone
} from 'react-icons/fi';

const ArticleCard = ({ article, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Network images for articles
  const getArticleImage = (title) => {
    const images = {
      'Building Cross-Platform Apps with Flutter: A Complete Guide': {
        main: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
      },
      'React vs Next.js: Which Framework Should You Choose?': {
        main: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
      },
      'Node.js Backend Best Practices for Scalable Applications': {
        main: 'https://images.unsplash.com/photo-1627398242454-45a1415d727a?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1627398242454-45a1415d727a?w=1200&h=600&fit=crop',
      },
      'Firebase vs MongoDB: Choosing the Right Database': {
        main: 'https://images.unsplash.com/photo-1544383835-bda2bc66a164?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a164?w=1200&h=600&fit=crop',
      },
      'Real-time Features with Socket.io: A Practical Guide': {
        main: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=600&fit=crop',
      },
      'UI/UX Design Principles for Developers': {
        main: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop',
        detail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=600&fit=crop',
      },
    };
    return images[title] || {
      main: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      detail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    };
  };

  const articleImages = getArticleImage(article.title);

  // Get full article content
  const getFullArticle = () => {
    return {
      author: article.author || 'Mahdi Hasan',
      authorRole: article.authorRole || 'Full-Stack Developer',
      readTime: article.readTime,
      date: article.date,
      category: article.category || 'Development',
      tags: article.tags || ['Development', 'Programming', 'Tech'],
      content: article.content || `
        <p class="text-light/80 leading-relaxed mb-4">In this comprehensive guide, we'll explore ${article.title.toLowerCase()}. Drawing from real-world project experience, I'll share practical insights and best practices.</p>
        
        <h2 class="text-2xl font-display font-bold text-light mt-8 mb-4">Why This Matters</h2>
        <p class="text-light/80 leading-relaxed mb-4">The tech landscape is evolving rapidly. Staying updated with the latest trends and best practices is crucial for building modern, scalable applications.</p>
        
        <h2 class="text-2xl font-display font-bold text-light mt-8 mb-4">Key Takeaways</h2>
        <ul class="list-disc list-inside text-light/80 leading-relaxed mb-4 space-y-2">
          <li>Understanding core concepts leads to better architecture decisions</li>
          <li>Practical implementation matters more than theory</li>
          <li>Continuous learning is essential in tech</li>
          <li>Real-world experience shapes best practices</li>
        </ul>
        
        <div class="glass-effect rounded-2xl p-6 my-8 border-l-4 border-primary">
          <p class="text-light italic">"The best way to learn is by building. Theory is important, but practice makes perfect."</p>
          <p class="text-primary text-sm mt-2">— Mahdi Hasan</p>
        </div>
        
        <h2 class="text-2xl font-display font-bold text-light mt-8 mb-4">Practical Application</h2>
        <p class="text-light/80 leading-relaxed mb-4">Apply these concepts to your projects gradually. Start with small implementations, test thoroughly, and iterate based on feedback and results.</p>
        
        <div class="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 my-8">
          <h3 class="text-xl font-display font-bold text-light mb-3">Key Insights</h3>
          <ul class="list-disc list-inside text-light/80 leading-relaxed space-y-1">
            <li>Start with a solid foundation</li>
            <li>Test and iterate continuously</li>
            <li>Learn from real projects</li>
            <li>Share knowledge with the community</li>
          </ul>
        </div>
      `,
    };
  };

  const fullArticle = getFullArticle();

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        {/* Image Container with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={articleImages.main}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary backdrop-blur-md">
            {fullArticle.category}
          </span>
          
          {/* Read Time Badge */}
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass-effect text-xs text-light/70 backdrop-blur-md flex items-center gap-1">
            <FiClock size={12} />
            {article.readTime}
          </span>
        </div>
        
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-light/50 mb-4">
            <span className="flex items-center gap-1">
              <FiCalendar /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <FiUser size={12} /> {fullArticle.author}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-light/60 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          
          {/* Read More Button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            Read More <FiArrowRight />
          </motion.button>
        </div>
      </motion.article>

      {/* Modal Popup for Full Article */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-dark to-dark/95 border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 glass-effect rounded-full p-2 text-light/70 hover:text-primary transition-colors"
              >
                <FiX size={20} />
              </motion.button>

              {/* Hero Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={articleImages.detail}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-dark to-transparent">
                  <h1 className="text-2xl md:text-4xl font-display font-bold text-light mb-3">
                    {article.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-light/60">
                    <span className="flex items-center gap-1">
                      <FiUser /> {fullArticle.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {fullArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock /> {fullArticle.readTime}
                    </span>
                    <span className="px-2 py-1 rounded-full glass-effect text-xs">
                      {fullArticle.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">
                {/* Action Buttons */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-sm transition-colors ${
                        isLiked ? 'text-red-500' : 'text-light/60 hover:text-red-500'
                      }`}
                    >
                      <FiHeart className={isLiked ? 'fill-red-500' : ''} />
                      {isLiked ? 'Liked' : 'Like'}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-sm transition-colors ${
                        isBookmarked ? 'text-primary' : 'text-light/60 hover:text-primary'
                      }`}
                    >
                      <FiBookmark className={isBookmarked ? 'fill-primary' : ''} />
                      {isBookmarked ? 'Saved' : 'Save'}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-sm text-light/60 hover:text-primary transition-colors"
                    >
                      <FiShare2 />
                      Share
                    </motion.button>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect text-sm text-light/60 hover:text-primary transition-colors"
                  >
                    <FiMessageCircle />
                    Leave Comment
                  </motion.button>
                </div>

                {/* Full Article Content */}
                <div dangerouslySetInnerHTML={{ __html: fullArticle.content }} />
                
                {/* Tags Section */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-light mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {fullArticle.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full glass-effect text-xs text-light/60 hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <FiTag size={10} />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Author Section */}
                <div className="mt-8 p-6 rounded-2xl glass-effect">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-2xl text-white font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-light">{fullArticle.author}</h4>
                      <p className="text-sm text-light/60">{fullArticle.authorRole}</p>
                      <p className="text-xs text-light/40 mt-1">Building digital solutions with modern tech stacks</p>
                    </div>
                  </div>
                </div>

                {/* Related Articles CTA */}
                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                  >
                    Explore More Articles
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArticleCard;