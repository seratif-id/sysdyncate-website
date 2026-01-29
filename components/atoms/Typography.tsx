import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'gradient-h1';
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ variant = 'body', children, className = '', ...props }: TypographyProps) => {
  const variants = {
    'h1': "text-5xl md:text-7xl font-bold tracking-tight text-foreground",
    'gradient-h1': "text-5xl md:text-7xl font-bold tracking-tight text-foreground pb-2",
    'h2': "text-3xl md:text-4xl font-semibold text-foreground/90 tracking-wide",
    'h3': "text-xl md:text-2xl font-medium text-foreground/80",
    'body': "text-base md:text-lg text-foreground/70 leading-relaxed",
    'caption': "text-sm text-secondary font-semibold uppercase tracking-wider",
  };

  const Tag = variant.includes('h1') ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'p';

  return (
    <Tag className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
