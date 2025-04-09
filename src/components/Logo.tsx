
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo-border inline-block">
      <img 
        src="/lovable-uploads/e8d3d391-9515-4a05-a5df-59d09ffcedda.png" 
        alt="LCM Logo" 
        className="h-16 w-auto object-contain"
        onError={(e) => {
          console.error("Logo failed to load");
          e.currentTarget.src = "https://placehold.co/200x80/F9F6F0/D4AF37/?text=LCM";
        }}
      />
    </div>
  );
};

export default Logo;
