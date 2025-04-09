
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo-border inline-block">
      <img 
        src="/lcm-logo.png" 
        alt="LCM Logo" 
        className="h-16 w-auto object-contain"
        onError={(e) => {
          console.error("Logo failed to load");
          e.currentTarget.src = "https://placehold.co/200x80/F9F6F0/B8860B/?text=LCM";
        }}
      />
    </div>
  );
};

export default Logo;
