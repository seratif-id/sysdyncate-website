

'use client';

import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left animate-fade-in-down">
          <div className="glass-pill px-4 py-1.5 rounded-full mb-8 animate-fade-in-up border border-secondary/20">
            <span className="text-sm font-medium text-foreground/80 tracking-wide uppercase">
              System Dynamics Syndicate
            </span>
          </div>

          <Typography variant="h1" className="mb-6 leading-tight text-foreground font-bold text-5xl lg:text-6xl">
            Navigating Complexity with <span className="text-brand-accent">Systems Thinking.</span>
          </Typography>

          <Typography variant="body" className="mb-8 text-xl text-secondary max-w-lg">
            We help organizations visualize, simulate, and optimize complex systems to make data-driven decisions that last.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollTo("location")} size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20 border-none">
              Start Consultation
            </Button>
            <Button onClick={() => scrollTo("portfolio")} variant="outline" size="lg" className="border-secondary/20 text-foreground hover:bg-surface hover:border-brand-accent/50">
              Explore Our Research
            </Button>
          </div>
        </div>

        {/* Right Column: Abstract Visual (Causal Loop Motif) */}
        <div className="hidden lg:flex relative items-center justify-center h-[500px]">
          {/* Subtle Blue Glow Background */}
          <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-full scale-75" />

          {/* Central Node Visual */}
          <div className="relative w-80 h-80">
            {/* Circle 1 (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-brand-accent/30 bg-background flex items-center justify-center z-10 shadow-lg shadow-brand-accent/10">
                <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse" />
            </div>
            
            {/* Circle 2 (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full border border-secondary/20 bg-surface flex items-center justify-center z-10 shadow-sm">
                <div className="w-3 h-3 bg-foreground/80 rounded-full" />
            </div>

            {/* Circle 3 (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full border border-secondary/20 bg-surface flex items-center justify-center z-10 shadow-sm">
               <div className="w-3 h-3 bg-foreground/80 rounded-full" />
            </div>

            {/* Connecting Lines (Simulated using borders/transforms) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-brand-accent/30" viewBox="0 0 320 320">
               {/* Line 1 -> 2 */}
               <path d="M160 50 Q 280 100 280 270" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
               {/* Line 2 -> 3 */}
               <path d="M280 270 Q 160 300 40 270" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
               {/* Line 3 -> 1 */}
               <path d="M40 270 Q 40 100 160 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            
            {/* Floating Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};
