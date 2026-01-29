'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { teamMembers } from '@/constants/teamMembers';



export const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <Typography variant="caption" className="mb-2 text-primary font-bold uppercase tracking-wider">
            Tim Ahli Kami
          </Typography>
          <Typography variant="h2" className="mb-4 text-primary-dark">
            Mengenal Tim Sysdyncate
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto text-secondary text-lg">
            Kolaborasi para ahli lintas disiplin untuk memberikan solusi pemodelan sistem yang komprehensif dan berdampak nyata.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-all">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <Typography variant="h3" className="text-xl font-bold text-primary-dark mb-1">
                  {member.name}
                </Typography>
                <div className="text-sm font-semibold text-brand-accent mb-3">
                  {member.role}
                </div>
                <div className="text-xs text-secondary-light font-medium italic mb-4">
                  {member.education}
                </div>
                <Typography variant="body" className="text-sm text-secondary line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {member.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
