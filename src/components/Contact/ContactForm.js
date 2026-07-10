/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiSend, FiCheckCircle, FiUser, FiBriefcase, FiMail, FiPhone, FiMessageSquare, FiCode, FiSmartphone, FiDollarSign, FiClock } from 'react-icons/fi';
import Button from '../Common/Button';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(false);
    setErrorMessage('');
    
    try {
      const response = await fetch('https://formspree.io/f/mbdlpwwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.companyName,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          contactMethod: data.contactMethod,
          message: data.message,
          _subject: `New Project Inquiry from ${data.fullName} - ${data.projectType}`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      setErrorMessage('Failed to send message. Please email me directly at contacthasan09@gmail.com');
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="glass-effect rounded-2xl p-8"
    >
      {/* Success Message */}
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-green-400" />
            <span>Message sent successfully! I'll get back to you within 24 hours.</span>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>{errorMessage}</span>
          </div>
        </motion.div>
      )}
      
      <motion.h2 variants={inputVariants} className="text-2xl font-display font-bold text-light mb-2">
        Start Your Project
      </motion.h2>
      <motion.p variants={inputVariants} className="text-light/50 text-sm mb-6">
        Fill out the form and I'll get back to you within 24 hours
      </motion.p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiUser size={14} /> Full Name *
            </label>
            <input
              {...register('fullName', { required: 'Name is required' })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light placeholder:text-light/40 transition-all duration-300"
              placeholder="Mahdi Hasan"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiBriefcase size={14} /> Company/Project Name
            </label>
            <input
              {...register('companyName')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light placeholder:text-light/40 transition-all duration-300"
              placeholder="Your Company or Project Name"
            />
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiMail size={14} /> Email *
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light placeholder:text-light/40 transition-all duration-300"
              placeholder="contacthasan09@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiPhone size={14} /> Phone Number
            </label>
            <input
              {...register('phone')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light placeholder:text-light/40 transition-all duration-300"
              placeholder="+880xxxxxxxxx"
            />
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiCode size={14} /> Project Type *
            </label>
            <select
              {...register('projectType', { required: 'Project type is required' })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light transition-all duration-300"
              style={{ color: '#e5e7eb' }}
            >
              <option value="" className="bg-dark text-light/70">Select Project Type</option>
              <option className="bg-dark text-light">Mobile App Development (Flutter)</option>
              <option className="bg-dark text-light">Web Application (React/Next.js)</option>
              <option className="bg-dark text-light">Full-Stack Development</option>
              <option className="bg-dark text-light">UI/UX Design</option>
              <option className="bg-dark text-light">API Development</option>
              <option className="bg-dark text-light">Backend Development</option>
              <option className="bg-dark text-light">Cross-Platform App</option>
              <option className="bg-dark text-light">Other</option>
            </select>
            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiDollarSign size={14} /> Budget Range
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light transition-all duration-300"
              style={{ color: '#e5e7eb' }}
            >
              <option value="" className="bg-dark text-light/70">Select Budget Range</option>
              <option className="bg-dark text-light">Under $1,000</option>
              <option className="bg-dark text-light">$1,000 - $3,000</option>
              <option className="bg-dark text-light">$3,000 - $5,000</option>
              <option className="bg-dark text-light">$5,000 - $10,000</option>
              <option className="bg-dark text-light">$10,000 - $25,000</option>
              <option className="bg-dark text-light">$25,000+</option>
            </select>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiClock size={14} /> Timeline
            </label>
            <select
              {...register('timeline')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light transition-all duration-300"
              style={{ color: '#e5e7eb' }}
            >
              <option value="" className="bg-dark text-light/70">Select Expected Timeline</option>
              <option className="bg-dark text-light">ASAP (Within 2 weeks)</option>
              <option className="bg-dark text-light">1 - 2 months</option>
              <option className="bg-dark text-light">2 - 3 months</option>
              <option className="bg-dark text-light">3 - 6 months</option>
              <option className="bg-dark text-light">Flexible</option>
            </select>
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
              <FiSmartphone size={14} /> Preferred Contact Method
            </label>
            <select
              {...register('contactMethod')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light transition-all duration-300"
              style={{ color: '#e5e7eb' }}
            >
              <option value="" className="bg-dark text-light/70">Select Contact Method</option>
              <option className="bg-dark text-light">Email</option>
              <option className="bg-dark text-light">Phone</option>
              <option className="bg-dark text-light">WhatsApp</option>
              <option className="bg-dark text-light">Video Call</option>
            </select>
          </motion.div>
        </div>
        
        <motion.div variants={inputVariants}>
          <label className="block text-light/70 text-sm mb-2 flex items-center gap-2">
            <FiMessageSquare size={14} /> Project Details *
          </label>
          <textarea
            {...register('message', { required: 'Project details are required' })}
            rows="5"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary focus:bg-white/15 text-light placeholder:text-light/40 transition-all duration-300 resize-none"
            placeholder="Tell me about your project idea, requirements, features, and any specific technologies you prefer..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </motion.div>
        
        <motion.div variants={inputVariants}>
          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Message <FiSend />
              </span>
            )}
          </Button>
        </motion.div>
        
        <motion.p variants={inputVariants} className="text-light/40 text-xs text-center mt-4">
          I respect your privacy. Your information is safe with me.
        </motion.p>
      </form>
    </motion.div>
  );
};

export default ContactForm;