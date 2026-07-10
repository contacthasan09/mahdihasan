/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiMail, 
  FiPhone, 
  FiMessageCircle, 
  FiSend, 
  FiCheckCircle,
  FiArrowRight,
  FiBriefcase,
  FiDollarSign,
  FiUser,
  FiClock,
  FiCode,
  FiSmartphone
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const BookCallModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    contactMethod: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setStep(1);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.projectType) {
      newErrors.projectType = 'Project Type is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Project Details are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setStep(1);
      setErrors({});
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        contactMethod: '',
        message: ''
      });
    }, 3000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
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
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const steps = [
    { number: 1, title: 'Basic Info', icon: <FiUser /> },
    { number: 2, title: 'Project Details', icon: <FiCode /> },
    { number: 3, title: 'Review & Submit', icon: <FiCheckCircle /> }
  ];

  const projectTypes = [
    'Mobile App Development (Flutter)',
    'Web Application (React/Next.js)',
    'Full-Stack Development',
    'UI/UX Design',
    'API Development',
    'Backend Development',
    'Cross-Platform App',
    'Other'
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const timelines = [
    'ASAP (Within 2 weeks)',
    '1 - 2 months',
    '2 - 3 months',
    '3 - 6 months',
    'Flexible'
  ];

  const contactMethods = [
    'Email',
    'Phone',
    'WhatsApp',
    'Video Call'
  ];

  const contactInfo = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+8801660157557', link: 'https://wa.me/8801660157557' },
    { icon: <FiMail />, label: 'Email', value: 'contacthasan09@gmail.com', link: 'mailto:contacthasan09@gmail.com' },
    { icon: <FiMessageCircle />, label: 'Live Chat', value: 'Available 24/7', link: '#' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-dark/95 to-dark/90 border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 glass-effect rounded-full p-2 text-light/70 hover:text-primary transition-colors"
            >
              <FiX size={22} />
            </motion.button>

            {/* Header Section */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
              <div className="relative p-6 md:p-8 text-center border-b border-white/10">
                <motion.div variants={childVariants} className="mb-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-semibold text-primary">
                    <FiClock size={12} />
                    Free 15-Minute Consultation
                  </span>
                </motion.div>
                <motion.h2 variants={childVariants} className="text-2xl md:text-3xl font-display font-bold text-light">
                  Schedule Your <span className="gradient-text">Project Call</span>
                </motion.h2>
                <motion.p variants={childVariants} className="text-light/60 text-sm mt-2">
                  Let's discuss your project and how I can help bring your vision to life
                </motion.p>

                {/* Steps Indicator */}
                <motion.div variants={childVariants} className="flex justify-center gap-4 mt-6">
                  {steps.map((s, idx) => (
                    <div key={idx} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step > s.number
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : step === s.number
                            ? 'bg-primary text-white ring-2 ring-primary/50'
                            : 'glass-effect text-light/40'
                        }`}
                      >
                        {step > s.number ? <FiCheckCircle /> : s.number}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className={`w-8 h-px mx-1 ${step > s.number ? 'bg-primary' : 'bg-white/20'}`} />
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="grid lg:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Left Side - Contact Info */}
              <motion.div
                variants={childVariants}
                className="space-y-6"
              >
                <div className="glass-effect rounded-2xl p-5">
                  <h3 className="text-lg font-display font-bold text-light mb-4 flex items-center gap-2">
                    <FiMessageCircle className="text-primary" />
                    Connect Directly
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.map((method, idx) => (
                      <motion.a
                        key={idx}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:glass-effect transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-xs text-light/50">{method.label}</p>
                          <p className="text-sm text-light font-medium group-hover:text-primary transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-5">
                  <h3 className="text-lg font-display font-bold text-light mb-4 flex items-center gap-2">
                    <FiClock className="text-primary" />
                    What happens next?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: 'Initial Discussion', desc: 'We discuss your project requirements, goals, and timeline in a free consultation call.' },
                      { step: 2, title: 'Project Planning', desc: 'I create a detailed project roadmap, tech stack recommendations, and timeline estimate.' },
                      { step: 3, title: 'Development & Delivery', desc: 'I build your project with regular updates, testing, and on-time delivery.' }
                    ].map((item) => (
                      <motion.div
                        key={item.step}
                        whileHover={{ x: 5 }}
                        className="flex gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                          {item.step}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-light">{item.title}</p>
                          <p className="text-xs text-light/50">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                variants={childVariants}
                className="glass-effect rounded-2xl p-5"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 && (
                      <>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                              errors.fullName ? 'border-red-500' : 'border-white/10'
                            } focus:outline-none focus:border-primary text-light placeholder:text-light/40`}
                            placeholder="Mahdi Hasan"
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                              errors.email ? 'border-red-500' : 'border-white/10'
                            } focus:outline-none focus:border-primary text-light placeholder:text-light/40`}
                            placeholder="contacthasan09@gmail.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                              errors.phone ? 'border-red-500' : 'border-white/10'
                            } focus:outline-none focus:border-primary text-light placeholder:text-light/40`}
                            placeholder="+880xxxxxxxxx"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Company/Project Name</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light placeholder:text-light/40"
                            placeholder="Your Company or Project Name"
                          />
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Project Type *</label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                              errors.projectType ? 'border-red-500' : 'border-white/10'
                            } focus:outline-none focus:border-primary text-light appearance-none`}
                            style={{ color: '#e5e7eb' }}
                          >
                            <option value="" className="bg-dark text-light/70">Select Project Type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type} className="bg-dark text-light">
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.projectType && (
                            <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light appearance-none"
                            style={{ color: '#e5e7eb' }}
                          >
                            <option value="" className="bg-dark text-light/70">Select Budget Range</option>
                            {budgets.map((budget) => (
                              <option key={budget} value={budget} className="bg-dark text-light">
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light appearance-none"
                            style={{ color: '#e5e7eb' }}
                          >
                            <option value="" className="bg-dark text-light/70">Select Expected Timeline</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline} className="bg-dark text-light">
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Preferred Contact Method</label>
                          <select
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light appearance-none"
                            style={{ color: '#e5e7eb' }}
                          >
                            <option value="" className="bg-dark text-light/70">Select Contact Method</option>
                            {contactMethods.map((method) => (
                              <option key={method} value={method} className="bg-dark text-light">
                                {method}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Project Details *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${
                              errors.message ? 'border-red-500' : 'border-white/10'
                            } focus:outline-none focus:border-primary text-light placeholder:text-light/40 resize-none`}
                            placeholder="Tell me about your project idea, requirements, features, and any specific technologies you prefer..."
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                          )}
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="glass-effect rounded-xl p-4">
                          <h4 className="text-light font-semibold mb-3">Review Your Information</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-light/50">Name:</span> {formData.fullName}</p>
                            <p><span className="text-light/50">Email:</span> {formData.email}</p>
                            <p><span className="text-light/50">Phone:</span> {formData.phone || 'Not provided'}</p>
                            <p><span className="text-light/50">Company:</span> {formData.companyName || 'Not provided'}</p>
                            <p><span className="text-light/50">Project Type:</span> {formData.projectType || 'Not selected'}</p>
                            <p><span className="text-light/50">Budget:</span> {formData.budget || 'Not specified'}</p>
                            <p><span className="text-light/50">Timeline:</span> {formData.timeline || 'Not specified'}</p>
                            <p><span className="text-light/50">Contact Method:</span> {formData.contactMethod || 'Not specified'}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 pt-4">
                      {step > 1 && (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleBack}
                          className="flex-1 px-4 py-2 rounded-lg glass-effect text-light font-medium"
                        >
                          Back
                        </motion.button>
                      )}
                      {step < 3 ? (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleNext}
                          className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2"
                        >
                          Continue <FiArrowRight />
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Schedule Call <FiSend />
                            </>
                          )}
                        </motion.button>
                      )}
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4"
                    >
                      <FiCheckCircle className="text-white text-3xl" />
                    </motion.div>
                    <h3 className="text-xl font-display font-bold text-light mb-2">Request Sent!</h3>
                    <p className="text-light/60 text-sm">
                      Thank you for reaching out! I'll review your information and get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 text-center">
              <p className="text-xs text-light/40">
                By scheduling a call, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookCallModal;