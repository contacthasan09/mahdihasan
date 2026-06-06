/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaWhatsapp className="text-2xl" />, label: 'WhatsApp', value: '+8801779322237', link: 'https://wa.me/8801779322237' },
    { icon: <FiMail className="text-2xl" />, label: 'Email', value: 'contact@anindyasneha.com', link: 'mailto:contact@anindyasneha.com' },
    { icon: <FiMapPin className="text-2xl" />, label: 'Location', value: 'Dhaka, Bangladesh', link: null },
  ];

  const steps = [
    { number: 1, title: 'Data Review', description: 'I personally review your application and current website/assets within 24 hours.' },
    { number: 2, title: 'Audit Call', description: 'If it\'s a fit, we schedule a 15-min call to dive into your current account bottlenecks.' },
    { number: 3, title: 'Scaling Roadmap', description: 'I present a 90-day strategy to fix tracking, test creative, and scale spend.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-display font-bold text-light mb-6">Connect Directly</h2>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl hover:glass-effect transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                {detail.icon}
              </div>
              <div>
                <p className="text-light/50 text-sm">{detail.label}</p>
                {detail.link ? (
                  <a href={detail.link} className="text-light hover:text-primary transition-colors">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-light">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-display font-bold text-light mb-6">What happens next?</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="text-light font-semibold">{step.title}</h3>
                <p className="text-light/60 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;