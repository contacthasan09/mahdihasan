/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { FiCode, FiUsers, FiTrendingUp, FiClock, FiGlobe, FiStar } from 'react-icons/fi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: <FiCode />, value: 35, suffix: '+', label: 'Projects Completed', prefix: '', color: 'from-blue-500 to-cyan-500' },
    { icon: <FiUsers />, value: 25, suffix: '+', label: 'Happy Clients', prefix: '', color: 'from-green-500 to-emerald-500' },
    { icon: <FiTrendingUp />, value: 100, suffix: '%', label: 'Client Satisfaction', prefix: '', color: 'from-purple-500 to-pink-500' },
    { icon: <FiClock />, value: 3, suffix: '+', label: 'Years Experience', prefix: '', color: 'from-orange-500 to-red-500' },
    { icon: <FiGlobe />, value: 8, suffix: '+', label: 'Countries Served', prefix: '', color: 'from-teal-500 to-green-500' },
    { icon: <FiStar />, value: 5, suffix: '/5', label: 'Client Rating', prefix: '', color: 'from-yellow-500 to-amber-500' },
  ];

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover"
            >
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                <div className="text-4xl text-white">
                  {stat.icon}
                </div>
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