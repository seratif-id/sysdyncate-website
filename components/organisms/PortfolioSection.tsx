import React from 'react';
import Image from 'next/image';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import {projects} from "@/constants/projects"

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <Typography variant="caption" className="mb-2 text-primary font-bold">Our Work</Typography>
            <Typography variant="h2" className="text-primary-dark">Featured Projects</Typography>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex text-primary hover:bg-primary/5">
            View All Projects →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className={`aspect-video rounded-2xl mb-4 overflow-hidden relative ${project.color}`}>
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute h-full top-0 left-full group-hover:left-1/2 p-6 bg-black/80 translate-x-full group-hover:translate-x-0 transition-transform duration-500" >
                    <Typography variant="h3" className="text-white">{project.title}</Typography>
                    <p className="text-white pt-4">{project.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-foreground/60">{project.category}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Button variant="ghost" className="text-primary hover:bg-primary/5">
                View All Projects →
            </Button>
        </div>
      </Container>
    </section>
  );
};
