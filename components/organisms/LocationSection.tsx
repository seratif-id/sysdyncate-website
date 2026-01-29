import React from 'react';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-surface-hover relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Typography variant="caption" className="mb-2 text-primary font-bold">Our Headquarters</Typography>
            <Typography variant="h2" className="mb-6 text-primary-dark">Visit Us</Typography>
            
            <div className="space-y-6 text-foreground/70">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-bold text-foreground">Address</h4>
                    <p>Jl. Mekarwangi No. 21,<br/>Sariwangi, Parongpong, Bandung Barat,<br/>Jawa Barat 40559</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                   <h4 className="font-bold text-foreground">Email Us</h4>
                   <p>anasera.digital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.201625966453!2d107.57140437573886!3d-6.866418893132174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b91122d647%3A0x6b77215286241b77!2sJl.%20Sariwangi%20No.21%2C%20Sariwangi%2C%20Kec.%20Parongpong%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat%2040559!5e0!3m2!1sen!2sid!4v1706371234567!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-700"
             ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};
