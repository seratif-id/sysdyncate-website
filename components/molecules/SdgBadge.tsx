import React from 'react';

interface SdgBadgeProps {
  goalNumber: number;
  title: string;
  color: string;
}

export const SdgBadge = ({ goalNumber, title, color }: SdgBadgeProps) => {
  return (
    <div 
      className="relative flex items-center p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 group overflow-hidden"
      style={{ '--sdg-color': color } as React.CSSProperties}
    >
      <div 
        className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white rounded-lg shadow-lg mr-4 relative z-10"
        style={{ backgroundColor: color }}
      >
        {goalNumber}
      </div>
      
      <div className="flex-1 relative z-10">
        <h4 className="text-foreground font-semibold text-sm leading-tight group-hover:text-primary transition-all">
          {title}
        </h4>
      </div>

      {/* Ambient Glow */}
      <div 
        className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
