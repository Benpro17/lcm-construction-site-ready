
import React from 'react';
import Signature from './Signature';

const Footer = () => {
  return (
    <footer className="py-8 mt-auto">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Signature />
          <p className="text-lcm-gray text-sm mt-4">
            © {new Date().getFullYear()} L.C.M - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
