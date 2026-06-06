/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaGoogle,
  FaTiktok,
  FaShopify,
  FaChartLine,
} from 'react-icons/fa';
import { SiGoogleanalytics, SiLooker, SiGooglecloud } from 'react-icons/si';

const ExpertiseStack = () => {
  const tools = [
    { name: 'Meta Ads Manager', icon: <FaFacebook />, color: 'from-blue-600 to-blue-400' },
    { name: 'Google Ads (PMax)', icon: <FaGoogle />, color: 'from-red-600 to-red-400' },
    { name: 'TikTok Ads', icon: <FaTiktok />, color: 'from-gray-800 to-gray-600' },
    { name: 'Google Tag Manager', icon: <SiGooglecloud />, color: 'from-blue-500 to-blue-300' },
    { name: 'Conversions API', icon: <FaChartLine />, color: 'from-purple-600 to-purple-400' },
    { name: 'GA4 Analytics', icon: <SiGoogleanalytics />, color: 'from-yellow-600 to-yellow-400' },
    { name: 'Shopify Plus', icon: <FaShopify />, color: 'from-green-600 to-green-400' },
    { name: 'Looker Studio', icon: <SiLooker />, color: 'from-indigo-600 to-indigo-400' },
    { name: 'Google Merchant Center', icon: <FaGoogle />, color: 'from-teal-600 to-teal-400' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark to-dark/95">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
            The Stack Behind The <span className="gradient-text">Success</span>
          </h2>
          <p className="text-light/70 text-lg">
            Deeply integrated with the world's most powerful growth platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${tool.color} mb-4`}>
                <div className="text-2xl text-white">{tool.icon}</div>
              </div>
              <h4 className="text-light font-semibold">{tool.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseStack;