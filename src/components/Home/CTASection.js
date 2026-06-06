/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 animate-gradient" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-light/70 text-lg mb-8">
            Schedule a free 15-minute growth audit. We'll look at your current ecosystem 
            and tell you exactly where the leaks are.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="large" icon={<FiClock />}>
              Claim My Free Audit
            </Button>
            <Button variant="outline" size="large" icon={<FiArrowRight />}>
              Book a Call
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-light/50 text-sm">
            <span>✅ No obligation</span>
            <span>✅ 15-minute strategy session</span>
            <span>✅ Actionable insights</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;