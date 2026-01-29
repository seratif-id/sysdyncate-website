import React from 'react';
import { Container } from '../atoms/Container';
import { Logo } from '../atoms/Logo';
import { Typography } from '../atoms/Typography';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-secondary/20 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <Typography variant="body" className="max-w-sm mb-6 !text-foreground/80">
              Memberdayakan bisnis melalui inovasi digital dan praktik berkelanjutan. Membangun masa depan, satu sistem pada satu waktu.
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-foreground font-bold">Perusahaan</Typography>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-secondary hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#sdg" className="text-secondary hover:text-primary transition-colors">Tujuan</a></li>
            </ul>
          </div>

          <div>
            <Typography variant="h3" className="mb-6 !text-lg !text-foreground font-bold">Legal</Typography>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors">Syarat Layanan</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary/10 text-center text-secondary text-sm">
          &copy; {new Date().getFullYear()} Sysdyncate. Hak Cipta Dilindungi.
        </div>
      </Container>
    </footer>
  );
};
