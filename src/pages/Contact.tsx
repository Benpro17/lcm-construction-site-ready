
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-lcm-dark">
              Contactez-nous
            </h1>
            <div className="h-1 w-20 bg-lcm-gold mx-auto my-4"></div>
            <p className="text-lcm-gray mt-4">
              Vous avez un projet ? N'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="animate-fade-up bg-white/80 p-8 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
