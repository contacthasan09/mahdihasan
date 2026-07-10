/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import FAQ from '../components/Contact/FAQ';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Mahdi Hasan - Full-Stack Developer | Hire Me</title>
        <meta name="description" content="Ready to bring your digital ideas to life? Contact Mahdi Hasan for full-stack development, Flutter apps, web development, and cross-platform solutions." />
      </Helmet>
      <ContactHero />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default ContactPage;