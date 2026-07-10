/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp, FaHeart, FaTwitter } from 'react-icons/fa';
import { FiMail, FiCode } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', color: 'hover:bg-[#1877f2]' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', color: 'hover:bg-[#0077b5]' },
    { icon: <FaGithub />, url: 'https://github.com', color: 'hover:bg-[#333333]' },
    { icon: <FaWhatsapp />, url: 'https://whatsapp.com', color: 'hover:bg-[#25d366]' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Meet Mahdi', path: '/meet-mahdi' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark to-dark/95 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-4"
            >
              <span className="gradient-text">Mahdi</span>
              <span className="text-light">.</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-light/60 mb-6 max-w-md"
            >
              Turning ideas into digital reality with clean code and beautiful design. 
              Specialized in full-stack and cross-platform app development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-light/70 hover:text-light transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div>
            <h4 className="text-light font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-light/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-light font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-light/60 text-sm mb-4">
              Get weekly insights on web development and tech trends.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:border-primary text-light/80"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-r-lg text-white"
              >
                <FiMail />
              </motion.button>
            </div>
            <p className="text-light/40 text-xs mt-2">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-light/40 text-sm flex items-center justify-center gap-2 flex-wrap">
            © 2026 Mahdi Hasan. All rights reserved. Made with{' '}
            <FaHeart className="inline text-red-500 animate-pulse" /> in Dhaka
            <span className="mx-1">•</span>
            <FiCode className="inline text-primary" />
            <span>35+ projects delivered</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;