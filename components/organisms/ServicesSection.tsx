import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { ServiceCard } from '../molecules/ServiceCard';

const services = [
  {
    title: 'Penelitian Akademik',
    description: 'Pendampingan dan pembuatan model System Dynamics untuk kebutuhan skripsi, tesis, dan disertasi. Kami memastikan model Anda memenuhi standar validitas akademis yang ketat.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Analisis Kebijakan Publik',
    description: 'Simulasi skenario kebijakan (policy exercise) untuk memprediksi dampak jangka panjang. Bantu pengambil keputusan merancang intervensi yang efektif dalam sistem yang kompleks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Pelatihan & Workshop',
    description: 'Program pelatihan komprehensif metodologi System Dynamics. Dari pemahaman dasar CLD hingga simulasi tingkat lanjut untuk akademisi dan profesional.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Keahlian Kami
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Solusi pemodelan dinamika sistem terdepan untuk mendukung penelitian mendalam dan perumusan kebijakan yang tepat sasaran.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
