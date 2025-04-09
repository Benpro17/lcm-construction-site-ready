
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-lcm-dark">
              Site en construction
            </h1>
            <div className="h-1 w-20 bg-lcm-bronze mx-auto"></div>
            <p className="text-xl md:text-2xl text-lcm-gray font-light mt-6">
              Votre projet prêt à construire !
            </p>
            <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact">
                <Button size="lg" className="px-8 bg-lcm-bronze hover:bg-lcm-gold">
                  Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white/50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-lcm-dark mb-12">
              Notre site sera bientôt disponible
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-lcm-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lcm-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Projets sur mesure</h3>
                <p className="text-lcm-gray">Des solutions adaptées à vos besoins spécifiques</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-lcm-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lcm-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Qualité garantie</h3>
                <p className="text-lcm-gray">Un travail soigné et des matériaux de qualité</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-lcm-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lcm-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Délais respectés</h3>
                <p className="text-lcm-gray">Livraison dans les temps et suivi régulier</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
