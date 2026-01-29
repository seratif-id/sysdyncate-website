import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="relative h-12 w-48 transition-transform duration-300 hover:scale-105 cursor-pointer drop-shadow-sm">
      <Image 
        src="/logo/sysdyncate.png" 
        alt="Sysdyncate - We help organizations visualize, simulate, and optimize complex systems to make data-driven decisions that last." 
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
};
