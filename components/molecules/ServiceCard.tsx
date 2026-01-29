import React from 'react';
import { Typography } from '../atoms/Typography';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl group hover:bg-white transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/20 hover:shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(37,121,178,0.2)]">
          {icon || <div className="w-6 h-6 bg-current rounded-full" />}
        </div>
        
        <Typography variant="h3" className="mb-3 text-foreground transition-colors group-hover:text-primary">
          {title}
        </Typography>
        
        <Typography variant="body" className="text-foreground/60 group-hover:text-foreground/80">
          {description}
        </Typography>
      </div>
    </div>
  );
};
