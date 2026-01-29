import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SideNavButtonProps {
  label: string;
  id: string;
  icon: LucideIcon;
  isActive: boolean;
  activeColorClass: string;
  hoverColorClass: string;
  onClick: (id: string) => void;
  isContact?: boolean;
}

export const SideNavButton = ({
  label,
  id,
  icon: Icon,
  isActive,
  activeColorClass,
  hoverColorClass,
  onClick,
  isContact = false,
}: SideNavButtonProps) => {
  return (
    <button 
      onClick={() => onClick(id)}
      className={`p-3 rounded-full transition-all duration-300 group relative ${
        isContact 
           ? 'bg-primary text-white hover:bg-primary-dark shadow-xl' 
           : isActive 
              ? activeColorClass 
              : hoverColorClass
      }`}
      title={label}
    >
      <Icon className="w-6 h-6" />
      <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
        {label}
      </span>
    </button>
  );
};
