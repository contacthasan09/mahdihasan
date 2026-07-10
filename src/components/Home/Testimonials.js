/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUserTie, FaBriefcase, FaGlobe } from 'react-icons/fa';
import SectionHeader from '../Common/SectionHeader';
import { testimonialsData } from '../../data/testimonialsData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  // Custom testimonials data for Mahdi Hasan
  const mahdiTestimonials = [
    {
      id: 1,
      name: 'Ahmed Raza',
      role: 'CEO',
      company: 'TechStart Inc.',
      quote: "Mahdi transformed our digital presence completely. His attention to detail and technical expertise brought our vision to life. The e-commerce platform he built for us exceeded all expectations and our sales have tripled since launch.",
      rating: 5,
      initial: 'A',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'Product Manager',
      company: 'HealthCare Plus',
      quote: "Working with Mahdi on our doctor appointment app was a game-changer. He understood our requirements perfectly and delivered a solution that our patients love. His expertise in Flutter and backend integration is outstanding.",
      rating: 5,
      initial: 'F',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Rafiqul Islam',
      role: 'Founder',
      company: 'Smart Solutions BD',
      quote: "Mahdi's ability to handle both frontend and backend development is rare. He built our SaaS dashboard from scratch and the performance is incredible. Our users love the interface and the real-time analytics features.",
      rating: 5,
      initial: 'R',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'Shamim Ahmed',
      role: 'CTO',
      company: 'FinTech Bangladesh',
      quote: "The mobile banking app Mahdi developed is secure, fast, and user-friendly. His knowledge of fintech security standards and payment integrations is impressive. We've received excellent feedback from our customers.",
      rating: 5,
      initial: 'S',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Nadia Sultana',
      role: 'Director',
      company: 'Foodies Restaurant Chain',
      quote: "Mahdi created a complete restaurant management system for our chain. The online ordering, table reservation, and loyalty features have increased our efficiency by 60%. Highly recommended!",
      rating: 5,
      initial: 'N',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'Tanvir Hossain',
      role: 'Operations Manager',
      company: 'RideShare BD',
      quote: "The ride-sharing app built by Mahdi has revolutionized our service. Real-time tracking, seamless payments, and an intuitive interface - everything works perfectly. Our user base has grown 200% since launch.",
      rating: 5,
      initial: 'T',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeader
          badge="Client Success Stories"
          title="What Clients Say"
          subtitle="Don't just take my word for it. Here's what clients say about working with me."
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="testimonial-swiper"
          >
            {mahdiTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="glass-effect rounded-2xl p-8 h-full card-hover"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="text-yellow-500" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-4xl text-primary/30 mb-4" />
                  
                  {/* Testimonial Text */}
                  <p className="text-light/80 mb-6 leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.initial}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark"></div>
                    </div>
                    <div>
                      <h4 className="text-light font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <FaUserTie className="text-primary text-xs" />
                        <p className="text-light/50 text-xs">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBriefcase className="text-primary/50 text-xs" />
                        <p className="text-light/40 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Statistics Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 backdrop-blur-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-sm" />
              ))}
            </div>
            <span className="text-light/80 text-sm font-medium">
              5.0 Average Rating from 25+ Clients
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

export default Testimonials;