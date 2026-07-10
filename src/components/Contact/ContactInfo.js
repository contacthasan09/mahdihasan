/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiGithub, FiLinkedin, FiGlobe, FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  // Social media links
  const socialLinks = [
    { 
      icon: <FiGithub className="text-2xl" />, 
      label: 'GitHub', 
      value: 'github.com/contacthasan09', 
      link: 'https://github.com/contacthasan09',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: <FiLinkedin className="text-2xl" />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/mahdi-hasan', 
      link: 'https://www.linkedin.com/in/mahdi-hasan-a4a55938a/',
      color: 'hover:bg-[#0077b5]'
    },
    { 
      icon: <FaWhatsapp className="text-2xl" />, 
      label: 'WhatsApp', 
      value: '+8801660157557', 
      link: 'https://wa.me/8801660157557',
      color: 'hover:bg-[#25d366]'
    },
  ];

  const contactDetails = [
    { icon: <FiPhone className="text-2xl" />, label: 'Phone', value: '+8801660157557', link: 'tel:+8801660157557' },
    { icon: <FiMail className="text-2xl" />, label: 'Email', value: 'contacthasan09@gmail.com', link: 'mailto:contacthasan09@gmail.com' },
    { icon: <FiMapPin className="text-2xl" />, label: 'Location', value: 'Mirpur DOHS, Dhaka, Bangladesh', link: null },
    { icon: <FiGlobe className="text-2xl" />, label: 'Available for', value: 'Remote work worldwide', link: null },
  ];

  const steps = [
    { number: 1, title: 'Initial Discussion', description: 'We discuss your project requirements, goals, and timeline in a free consultation call.' },
    { number: 2, title: 'Project Planning', description: 'I create a detailed project roadmap, tech stack recommendations, and timeline estimate.' },
    { number: 3, title: 'Development & Delivery', description: 'I build your project with regular updates, testing, and on-time delivery.' },
    { number: 4, title: 'Launch & Support', description: 'I deploy your application and provide ongoing maintenance and support.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Connect Directly Section */}
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-display font-bold text-light mb-6">Connect Directly</h2>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl hover:glass-effect transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* Social Media Section */}
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-display font-bold text-light mb-6">Follow Me</h2>
        <div className="space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl hover:glass-effect transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${social.color}`}>
                {social.icon}
              </div>
              <div>
                <p className="text-light/50 text-sm">{social.label}</p>
                <p className="text-light group-hover:text-primary transition-colors">
                  {social.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* My Process Section */}
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-display font-bold text-light mb-6">My Process</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
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

      {/* Response Time Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-2xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <FiClock className="text-primary text-2xl" />
          <h3 className="text-light font-semibold">Response Time</h3>
        </div>
        <p className="text-light/60 text-sm">
          I typically respond within <span className="text-primary font-semibold">24 hours</span>. 
          For urgent inquiries, please mention "URGENT" in your subject line.
        </p>
      </motion.div>

      {/* GitHub Stats Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-effect rounded-2xl p-4 text-center"
      >
        <div className="flex items-center justify-center gap-2">
          <FiGithub className="text-primary" />
          <span className="text-light/60 text-xs">83 contributions in the last year</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;