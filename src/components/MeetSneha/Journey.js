/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import { FiAward, FiBriefcase, FiTrendingUp } from 'react-icons/fi';

const Journey = () => {
  const milestones = [
    { year: '2022', title: 'Started Journey', description: 'Began digital marketing journey', icon: <FiTrendingUp /> },
    { year: '2023', title: 'Founded Waydigita', description: 'Launched own marketing agency', icon: <FiBriefcase /> },
    { year: '2024', title: '$100k+ Managed', description: 'Crossed major milestone', icon: <FiAward /> },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-6">
              The Person Behind the <span className="gradient-text">Performance</span>
            </h2>
            <div className="space-y-4 text-light/70">
              <p>
                I began my journey in digital marketing in 2022, driven by a fascination for how data can be used to tell a brand's story. Based in Dhaka, Bangladesh, I eventually founded Waydigita, a marketing agency built on the principle that real growth requires a seat at the table, not just a service provider.
              </p>
              <p>
                To me, your business isn't just a client; I treat every account I manage as if it were my own capital on the line.
              </p>
              <p>
                Since I started, I have partnered with 30+ local and international brands, including names like Pride Limited, Clinicall, MyGPS, SmartAir, AmarLab, and Tooth Planet.
              </p>
              <p>
                The digital landscape is moving faster than ever, and I am deeply passionate about learning and adapting to stay ahead. Today, that means integrating AI-driven strategies into digital marketing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 glass-effect rounded-2xl p-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl text-white">
                  {milestone.icon}
                </div>
                <div>
                  <div className="text-primary font-bold text-lg">{milestone.year}</div>
                  <h3 className="text-xl font-display font-bold text-light">{milestone.title}</h3>
                  <p className="text-light/50">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="glass-effect rounded-2xl p-8 text-center mt-8">
              <h3 className="text-2xl font-display font-bold text-light mb-4">
                Not sure which service is right for you?
              </h3>
              <Button variant="primary" size="medium">
                Contact With Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;