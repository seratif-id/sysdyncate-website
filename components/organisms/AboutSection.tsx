import React from 'react';
import Image from 'next/image';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-3xl rounded-l-full -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Floating Image & Visuals */}
          <div className="relative order-2 lg:order-1 px-4">
             {/* Main Image with Soft Mask/Shadow */}
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/5 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative aspect-[4/3]">
                   <Image src="/about-sysdyn.png" alt="Collaborative Ecosystem" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
             </div>
             
             {/* Floating Decorative Elements */}
             <div className="absolute -top-6 -left-6 z-20 sys-card p-4 rounded-2xl animate-float">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-bold">1</div>
                   <div>
                      <div className="text-xs font-bold text-secondary-light uppercase">- Structure Determines Behavior</div>
                      <div className="text-xs font-bold text-secondary-light uppercase">- Feedback</div>
                   </div>
                </div>
             </div>

             <div className="absolute -bottom-8 -right-4 z-20 sys-card p-4 rounded-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-primary font-bold">2</div>
                   <div>
                      <div className="text-xs font-bold text-secondary-light uppercase">- Mental Models</div>
                      <div className="text-xs font-bold text-secondary-light uppercase">- Boundary and Dynamic Complexity</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
               <span className="text-xs font-bold text-secondary uppercase tracking-widest">Tentang Kami</span>
            </div>
            
            <Typography variant="h2" className="mb-6 text-foreground">
              Menggali Dinamika, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Merancang Solusi.</span>
            </Typography>
            
            <Typography variant="body" className="mb-6 text-secondary text-lg">
              Sysdyncate adalah komunitas yang berdedikasi pada pengembangan dan penerapan metodologi <strong>System Dynamics</strong>. Kami membangun model simulasi yang presisi untuk mendukung penelitian akademis, tugas akhir, serta analisis kebijakan publik yang berdampak.
            </Typography>
            
            <Typography variant="body" className="mb-8 text-secondary">
              Dengan pendekatan berbasis data dan pemodelan sistem yang kompleks, kami membantu peneliti dan pembuat kebijakan memahami struktur umpan balik (feedback loops) dan perilaku sistem untuk pengambilan keputusan yang lebih efektif dan berkelanjutan.
            </Typography>
            
            {/* Stats - Soft Cards */}
            <div className="flex gap-6">
              <div className="flex-1 sys-card p-5 rounded-xl border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                <div className="text-xs font-bold text-secondary-light uppercase">Model <br/>Dikembangkan</div>
              </div>
              
              <div className="flex-1 sys-card p-5 rounded-xl border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                 <div className="text-3xl font-bold text-foreground mb-1">80+</div>
                 <div className="text-xs font-bold text-secondary-light uppercase">Pelatihan <br/>& Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
