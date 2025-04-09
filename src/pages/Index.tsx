
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
          <div className="relative rounded-xl overflow-hidden h-[400px] shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
                filter: "brightness(0.7)"
              }}
            />
            <div className="absolute inset-0 bg-lcm-dark/30 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 animate-fade-up">
                <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  Votre projet prêt à construire !
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
