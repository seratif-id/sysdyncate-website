import React from 'react';
import { Container } from '../atoms/Container';
import { Logo } from '../atoms/Logo';
import { Typography } from '../atoms/Typography';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-emerald-100 bg-gradient-to-t from-emerald-50/50 to-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <Typography variant="body" className="max-w-sm mb-6 !text-foreground/80">
              Empowering businesses through digital innovation and sustainable practices. Building the future, one pixel at a time.
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-foreground font-bold">Company</Typography>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a></li>
              <li><a href="#sdg" className="text-secondary hover:text-primary transition-colors">Goal</a></li>
            </ul>
          </div>

          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-foreground font-bold">Legal</Typography>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary/10 text-center text-secondary text-sm">
          &copy; {new Date().getFullYear()} Serative Corp. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
