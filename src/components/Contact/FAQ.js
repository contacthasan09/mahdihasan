/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SectionHeader from '../Common/SectionHeader';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need a specific minimum budget to work with you?',
      answer: 'I don\'t believe in a "one-size-fits-all" number. Instead, I look for brands with enough momentum to scale and a readiness to invest in growth—I treat your business goals as my own to ensure we find the right path forward.',
    },
    {
      question: 'Do you just "run ads" on the platforms?',
      answer: 'No, my approach goes far beyond media buying. I act as a strategic partner, handling everything from full-funnel strategy and content planning to technical data tracking to ensure your budget is actually building a business, not just buying clicks.',
    },
    {
      question: 'How do you help my brand stay ahead of the competition?',
      answer: 'I am relentlessly passionate about learning and adapting to stay ahead of market shifts. By integrating AI-driven insights with a deep understanding of your specific business, I treat your brand as my own to ensure we are always innovating and scaling profitably.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader
          badge="Questions You Might Have"
          title="LET'S CONNECT"
          subtitle="Everything you need to know before we start"
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-light font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-light/60">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;