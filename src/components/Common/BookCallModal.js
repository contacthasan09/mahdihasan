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
  FiClock
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const BookCallModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setStep(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setStep(1);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
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
    { number: 2, title: 'Business Details', icon: <FiBriefcase /> },
    { number: 3, title: 'Review & Submit', icon: <FiCheckCircle /> }
  ];

  const services = [
    'Meta Ads Management',
    'Google Ads Management',
    'Data Analytics & Attribution',
    'Full Funnel Strategy',
    'Custom Package'
  ];

  const budgets = [
    'Under $500',
    '$500 - $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const contactMethods = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+8801779322237', link: 'https://wa.me/8801779322237' },
    { icon: <FiMail />, label: 'Email', value: 'contact@anindyasneha.com', link: 'mailto:contact@anindyasneha.com' },
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
                  Schedule Your <span className="gradient-text">Growth Call</span>
                </motion.h2>
                <motion.p variants={childVariants} className="text-light/60 text-sm mt-2">
                  Let's discuss how to scale your brand with data-driven strategies
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
                    {contactMethods.map((method, idx) => (
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
                      { step: 1, title: 'Data Review', desc: 'I personally review your application and current website/assets within 24 hours.' },
                      { step: 2, title: 'Audit Call', desc: 'We schedule a 15-min call to dive into your current account bottlenecks.' },
                      { step: 3, title: 'Scaling Roadmap', desc: 'I present a 90-day strategy to fix tracking, test creative, and scale spend.' }
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
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Business Name *</label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                            placeholder="Your Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Service Interested In</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                          >
                            <option value="">Select Your Service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Monthly Ad Budget</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light"
                          >
                            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-light/70 text-sm mb-1">Message</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-light resize-none"
                            placeholder="Tell me more about your idea"
                          />
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
                            <p><span className="text-light/50">Business:</span> {formData.businessName}</p>
                            <p><span className="text-light/50">Service:</span> {formData.service || 'Not selected'}</p>
                            <p><span className="text-light/50">Budget:</span> {formData.budget || 'Not specified'}</p>
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
                          onClick={() => setStep(step - 1)}
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
                          onClick={() => setStep(step + 1)}
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