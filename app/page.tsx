import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { SdgSection } from "@/components/organisms/SdgSection";
import { Footer } from "@/components/organisms/Footer";
import { AboutSection } from "@/components/organisms/AboutSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { ClientsSection } from "@/components/organisms/ClientsSection";
import { LocationSection } from "@/components/organisms/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <AboutSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="clients">
        <ClientsSection />
      </div>
      {/* <div id="sdg">
        <SdgSection />
      </div> */}
      <div id="location">
        <LocationSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
