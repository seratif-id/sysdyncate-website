import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="relative h-12 w-48 transition-transform duration-300 hover:scale-105 cursor-pointer drop-shadow-sm">
      <Image 
        src="/logo.png" 
        alt="Seratif - Building Web and App Ideas with Purpose" 
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
};
