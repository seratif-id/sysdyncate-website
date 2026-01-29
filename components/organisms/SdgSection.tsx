import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { SdgBadge } from '../molecules/SdgBadge';

const sdgs = [
  { goalNumber: 8, title: 'Decent Work and Economic Growth', color: '#A21942' },
  { goalNumber: 9, title: 'Industry, Innovation and Infrastructure', color: '#FD6925' },
  { goalNumber: 12, title: 'Responsible Consumption and Production', color: '#BF8B2E' },
  { goalNumber: 13, title: 'Climate Action', color: '#3F7E44' },
];

export const SdgSection = () => {
  return (
    <section id="sdg" className="py-24 relative bg-white">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Committed to Impact
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Seratif takes the Sustainable Development Goals seriously. We build technology that empowers people and protects our planet.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgs.map((sdg) => (
            <SdgBadge key={sdg.goalNumber} {...sdg} />
          ))}
        </div>
      </Container>
    </section>
  );
};
