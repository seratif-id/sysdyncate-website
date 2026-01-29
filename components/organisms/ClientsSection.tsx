import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import {clients} from "@/constants/clients"
import Image from 'next/image';

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-primary/5 border-y border-primary/5">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="body" className="text-foreground/50 font-medium uppercase tracking-widest">
            Trusted by Respective Clients
          </Typography>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center">
          {clients.map((i) => (
            <div key={i.name} className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <Image 
                src={i.img} 
                alt={i.name} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
