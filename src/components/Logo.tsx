
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo-border inline-block">
      <img 
        src="/lcm-logo.png" 
        alt="LCM Logo" 
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
