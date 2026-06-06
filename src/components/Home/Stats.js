/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { FiTrendingUp, FiUsers, FiDollarSign, FiAward } from 'react-icons/fi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: <FiTrendingUp />, value: 4.8, suffix: 'x', label: 'Average Portfolio ROAS', prefix: '' },
    { icon: <FiUsers />, value: 85, suffix: '%', label: 'Average Retention', prefix: '' },
    { icon: <FiDollarSign />, value: 100, suffix: 'k+', label: 'Ad Spend Managed', prefix: '$' },
    { icon: <FiAward />, value: 30, suffix: '+', label: 'Brands Partnered', prefix: '' },
  ];

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className="text-4xl text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-light mb-2">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>
              <p className="text-light/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;