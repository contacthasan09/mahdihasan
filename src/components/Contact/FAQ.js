/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCode, FiSmartphone, FiGlobe, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';
import SectionHeader from '../Common/SectionHeader';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Flutter for cross-platform mobile apps, React/Next.js for web development, and Node.js with MongoDB/PostgreSQL for backend. I also have experience with Firebase, Socket.io, and various cloud platforms like AWS and Vercel.',
      icon: <FiCode />,
    },
    {
      question: 'How long does it typically take to develop an app?',
      answer: 'Timeline varies based on project complexity. A simple MVP can take 4-8 weeks, while a full-featured application might take 3-6 months. I provide detailed timelines after understanding your requirements and can work with tight deadlines when needed.',
      icon: <FiClock />,
    },
    {
      question: 'Do you only work with clients in Bangladesh?',
      answer: 'No, I work with clients worldwide! I have experience collaborating with international clients across different time zones. I offer flexible working hours to accommodate global clients and ensure smooth communication throughout the project.',
      icon: <FiGlobe />,
    },
    {
      question: 'What is your development process like?',
      answer: 'My process includes: 1) Discovery & Requirements Gathering, 2) UI/UX Design & Prototyping, 3) Development & Regular Updates, 4) Testing & Quality Assurance, 5) Deployment & Launch, and 6) Post-launch Support & Maintenance. I believe in transparent communication and regular progress updates.',
      icon: <FiSmartphone />,
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Absolutely! I offer ongoing maintenance and support packages after launch. This includes bug fixes, performance optimization, feature updates, and technical support. I ensure your application runs smoothly and stays up-to-date with the latest technologies.',
      icon: <FiUsers />,
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'I offer flexible pricing models based on your needs: fixed-price for well-defined projects, hourly rates for ongoing work, or monthly retainer for long-term partnerships. I provide transparent quotes with no hidden costs and can work within your budget constraints.',
      icon: <FiDollarSign />,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Got Questions?"
          subtitle="Everything you need to know about working with me"
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <span className="text-light font-semibold text-lg">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <FiChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 pl-16"
                  >
                    <p className="text-light/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA after FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-light/60 mb-4">
            Still have questions? I'm here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;