/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiTarget,
  FiSearch,
  FiBarChart2,
  FiUsers,
  FiTrendingUp,
  FiDatabase,
} from 'react-icons/fi';
import SectionHeader from '../Common/SectionHeader';
import Button from '../Common/Button';

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: <FiTarget className="text-4xl" />,
      title: 'Meta Ads Management',
      description: 'High-ROAS campaigns across Facebook and Instagram with advanced audience targeting and creative testing.',
      features: ['Audience Research', 'Dynamic Creative Testing', 'Campaign Scaling', 'ROAS Optimization'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <FiSearch className="text-4xl" />,
      title: 'Google Ads Management',
      description: 'Capturing high-intent traffic through Search, Shopping, and YouTube campaigns.',
      features: ['Keyword Research', 'Search & PMax Excellence', 'Display Ads', 'Conversion Tracking'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiBarChart2 className="text-4xl" />,
      title: 'Data Analytics & Attribution',
      description: 'Stop guessing which ads are working. Get 100% clarity on your ROAS and customer lifetime value.',
      features: ['Funnel Mapping', 'GA4 & GTM Implementation', 'Custom Looker Studio Reports', 'Server-Side Tracking'],
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeader
          badge="What I Do"
          title="Strategic Paid Media Services"
          subtitle="I don't sell 'services,' I sell growth. Every offering is a component of a larger machine built to maximize your ROI."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
              <div className="glass-effect rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:scale-105">
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-light mb-4">
                  {service.title}
                </h3>
                <p className="text-light/60 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 text-light/70 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="small">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;