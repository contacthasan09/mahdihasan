/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Button from '../Common/Button';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-2xl p-8"
    >
      <h2 className="text-2xl font-display font-bold text-light mb-6">Send a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-light/70 text-sm mb-2">Full Name *</label>
            <input
              {...register('fullName', { required: 'Name is required' })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label className="block text-light/70 text-sm mb-2">Business Name *</label>
            <input
              {...register('businessName', { required: 'Business name is required' })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
              placeholder="Your Company Name"
            />
            {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-light/70 text-sm mb-2">Email *</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
          </div>
          
          <div>
            <label className="block text-light/70 text-sm mb-2">Phone Number</label>
            <input
              {...register('phone')}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-light/70 text-sm mb-2">Service Interested In</label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
          >
            <option value="">Select Your Service</option>
            <option>Meta Ads Management</option>
            <option>Google Ads Management</option>
            <option>Data Analytics & Attribution</option>
            <option>Full Funnel Strategy</option>
          </select>
        </div>
        
        <div>
          <label className="block text-light/70 text-sm mb-2">Monthly Ad Budget (Optional)</label>
          <select
            {...register('budget')}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
          >
            <option>Under $500</option>
            <option>$500 - $2,000</option>
            <option>$2,000 - $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-light/70 text-sm mb-2">Message</label>
          <textarea
            {...register('message')}
            rows="5"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-light"
            placeholder="Tell me more about your idea"
          />
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : submitSuccess ? '✓ Message Sent!' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;