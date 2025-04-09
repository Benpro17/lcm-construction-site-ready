
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-lcm-dark">
              Contactez-nous
            </h1>
            <div className="h-1 w-20 bg-lcm-blue mx-auto my-4"></div>
            <p className="text-lcm-gray mt-4">
              Vous avez un projet ? N'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/80 p-8 rounded-lg shadow-sm">
                <ContactForm />
              </div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/80 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6 text-lcm-dark">Informations</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1">
                      <Phone className="h-5 w-5 text-lcm-blue mr-3" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lcm-dark">Téléphone</h3>
                      <p className="text-lcm-gray mt-1">Contactez-nous par téléphone</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1">
                      <MapPin className="h-5 w-5 text-lcm-blue mr-3" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lcm-dark">Adresse</h3>
                      <p className="text-lcm-gray mt-1">France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1">
                      <Clock className="h-5 w-5 text-lcm-blue mr-3" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lcm-dark">Horaires</h3>
                      <p className="text-lcm-gray mt-1">Du lundi au vendredi, de 9h à 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
