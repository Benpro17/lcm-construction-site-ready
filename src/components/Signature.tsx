
import React from 'react';
import Logo from './Logo';

const Signature = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <Logo />
        <div className="divider"></div>
        <div className="text-left">
          <h3 className="font-bold text-lcm-dark text-lg">L.C.M</h3>
          <p className="text-lcm-gray text-sm">Siret : 900 578 725 00013</p>
        </div>
      </div>
    </div>
  );
};

export default Signature;
