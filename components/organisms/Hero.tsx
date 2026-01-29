

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
              Komunitas System Dynamics
            </span>
          </div>

          <Typography variant="h1" className="mb-6 leading-tight text-foreground font-bold text-5xl lg:text-6xl">
            Menavigasi Kompleksitas dengan <span className="text-brand-accent">Berpikir Sistem.</span>
          </Typography>

          <Typography variant="body" className="mb-8 text-xl text-secondary max-w-lg">
            Kami membantu organisasi memvisualisasikan, mensimulasikan, dan mengoptimalkan sistem yang kompleks untuk pengambilan keputusan berbasis data yang berkelanjutan.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollTo("location")} size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20 border-none">
              Mulai Konsultasi
            </Button>
            <Button onClick={() => scrollTo("portfolio")} variant="outline" size="lg" className="border-secondary/20 text-foreground hover:bg-surface hover:border-brand-accent/50">
              Lihat Riset Kami
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
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-brand-accent/30 overflow-visible" viewBox="0 0 320 320">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
                <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                </marker>
              </defs>
      
              {/* Step 1: Line 1 -> 2 - Animated */}
              <g className="step-1">
                {/* Drawing line animation */}
                <path d="M 202 72 Q 320 137 288 227" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500" strokeDasharray="200" strokeDashoffset="200">
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="200" 
                    to="0" 
                    dur="1.5s" 
                    begin="0s;4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="line1-animate"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    to="200"
                    dur="0.01s" 
                    begin="4.49s;8.99s;13.49s;17.99s;22.49s;26.99s;31.49s;35.99s;40.49s;44.99s" 
                    fill="freeze" 
                    id="line1-reset"
                  />
                </path>
                {/* Complete line with arrowhead - appears when animation completes */}
                <path d="M 202 72 Q 320 137 288 227" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="text-red-500" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="1.4s;5.9s;10.4s;14.9s;19.4s;23.9s;28.4s;32.9s;37.4s;41.9s;46.4s" 
                    fill="freeze" 
                    id="arrow1-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="arrow1-hide"
                  />
                </path>
                {/* Minus sign for Line 1 -> 2 */}
                <text x="300" y="232" fill="#ef4444" fontSize="20" fontWeight="bold" opacity="0">−
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="1.4s;5.9s;10.4s;14.9s;19.4s;23.9s;28.4s;32.9s;37.4s;41.9s;46.4s" 
                    fill="freeze" 
                    id="minus1-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="minus1-hide"
                  />
                </text>
              </g>
      
              {/* Step 2a: Line 2 -> 3 - Animated */}
              <g className="step-2">
                <path d="M 238 306 Q 160 380 82 306" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500" strokeDasharray="200" strokeDashoffset="200" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2a-show"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="200" 
                    to="0" 
                    dur="1.5s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2a-animate"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    to="200"
                    dur="0.01s" 
                    begin="4.49s;8.99s;13.49s;17.99s;22.49s;26.99s;31.49s;35.99s;40.49s;44.99s" 
                    fill="freeze" 
                    id="line2a-reset"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="line2a-hide"
                  />
                </path>
                <path d="M 238 306 Q 160 380 82 306" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-red)" className="text-red-500" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="arrow2a-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="arrow2a-hide"
                  />
                </path>
                <text x="75" y="335" fill="#ef4444" fontSize="20" fontWeight="bold" opacity="0">−
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="minus2a-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="minus2a-hide"
                  />
                </text>
              </g>
      
              {/* Step 2b: Line 3 -> 2 (Upward Curve) - Animated */}
              <g className="step-2">
                <path d="M 84 240 Q 160 173 236 240" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" strokeDasharray="200" strokeDashoffset="200" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2b-show"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="200" 
                    to="0" 
                    dur="1.5s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2b-animate"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    to="200"
                    dur="0.01s" 
                    begin="4.49s;8.99s;13.49s;17.99s;22.49s;26.99s;31.49s;35.99s;40.49s;44.99s" 
                    fill="freeze" 
                    id="line2b-reset"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="line2b-hide"
                  />
                </path>
                <path d="M 84 240 Q 160 173 236 240" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-blue)" className="text-blue-500" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="arrow2b-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="arrow2b-hide"
                  />
                </path>
                <text x="240" y="225" fill="#3b82f6" fontSize="20" fontWeight="bold" opacity="0">+
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="plus2b-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="plus2b-hide"
                  />
                </text>
              </g>
      
              {/* Step 2c: Line 3 -> 1 - Animated */}
              <g className="step-2">
                <path d="M 32 227 Q 0 137 118 72" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" strokeDasharray="200" strokeDashoffset="200" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2c-show"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="200" 
                    to="0" 
                    dur="1.5s" 
                    begin="1.5s;6s;10.5s;15s;19.5s;24s;28.5s;33s;37.5s;42s;46.5s" 
                    fill="freeze" 
                    id="line2c-animate"
                  />
                  <animate 
                    attributeName="stroke-dashoffset" 
                    to="200"
                    dur="0.01s" 
                    begin="4.49s;8.99s;13.49s;17.99s;22.49s;26.99s;31.49s;35.99s;40.49s;44.99s" 
                    fill="freeze" 
                    id="line2c-reset"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="line2c-hide"
                  />
                </path>
                <path d="M 32 227 Q 0 137 118 72" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead-blue)" className="text-blue-500" opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="arrow2c-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="arrow2c-hide"
                  />
                </path>
                <text x="90" y="60" fill="#3b82f6" fontSize="20" fontWeight="bold" opacity="0">+
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    keyTimes="0;1" 
                    dur="0.1s" 
                    begin="2.9s;7.4s;11.9s;16.4s;20.9s;25.4s;29.9s;34.4s;38.9s;43.4s;47.9s" 
                    fill="freeze" 
                    id="plus2c-show"
                  />
                  <animate 
                    attributeName="opacity" 
                    to="0"
                    dur="0.01s" 
                    begin="4.5s;9s;13.5s;18s;22.5s;27s;31.5s;36s;40.5s;45s" 
                    fill="freeze" 
                    id="plus2c-hide"
                  />
                </text>
              </g>
            </svg>
    
            {/* Floating Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};
