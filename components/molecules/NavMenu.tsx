'use client';

import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

export const NavMenu = ({ items }: { items: NavItem[] }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <a 
          key={item.label} 
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className="text-foreground/70 hover:text-primary text-sm font-medium transition-colors duration-200 relative group cursor-pointer"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
};
