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
        <title>Contact Sneha Anindya - Start Scaling Your Brand Today</title>
        <meta name="description" content="Ready to scale your brand with data-driven paid media? Contact Sneha for a free growth audit and start your journey to measurable results." />
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