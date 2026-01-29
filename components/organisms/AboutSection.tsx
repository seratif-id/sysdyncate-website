import React from 'react';
import Image from 'next/image';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-primary/5">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-l-full -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Floating Image & Visuals */}
          <div className="relative order-2 lg:order-1 px-4">
             {/* Main Image with Soft Mask/Shadow */}
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative aspect-[4/3]">
                   <Image src="/about.png" alt="Collaborative Ecosystem" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
             </div>
             
             {/* Floating Decorative Elements */}
             <div className="absolute -top-6 -left-6 z-20 glass-card p-4 rounded-2xl animate-float">
                <div className="flex items-center gap-3">
                   <span className="text-2xl">🌍</span>
                   <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Impact</div>
                      <div className="text-sm font-bold text-slate-800">Global Reach</div>
                   </div>
                </div>
             </div>

             <div className="absolute -bottom-8 -right-4 z-20 glass-card p-4 rounded-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">SDG</div>
                   <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Focus</div>
                      <div className="text-sm font-bold text-slate-800">Sustainable Goals</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">About Our Mission</span>
            </div>
            
            <Typography variant="h2" className="mb-6 text-slate-800">
              Innovating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Purpose.</span>
            </Typography>
            
            <Typography variant="body" className="mb-6 text-slate-600 text-lg">
              We believe technology is a living extension of human potential. At Serative, we don't just write code; we cultivate digital ecosystems that grow, adapt, and sustain.
            </Typography>
            
            <Typography variant="body" className="mb-8 text-slate-600">
              From complex data simulations to user-centric platforms, our work is rooted in the principles of System Dynamics—connecting the dots between efficiency, sustainability, and experience.
            </Typography>
            
            {/* Stats - Soft Glass Cards */}
            <div className="flex gap-6">
              <div className="flex-1 glass-card p-5 rounded-xl border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-slate-800 mb-1">20+</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Projects <br/>Delivered</div>
              </div>
              
              <div className="flex-1 glass-card p-5 rounded-xl border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
                 <div className="text-3xl font-bold text-slate-800 mb-1">100%</div>
                 <div className="text-xs font-bold text-slate-500 uppercase">Client <br/>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
