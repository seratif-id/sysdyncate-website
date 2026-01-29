'use client';

import React from 'react';
import { Container } from '../atoms/Container';
import { Logo } from '../atoms/Logo';
import { NavMenu } from '../molecules/NavMenu';
import { SideNavButton } from '../molecules/SideNavButton';
import { Button } from '../atoms/Button';
import { User, Zap, Briefcase, Users, MapPin, ArrowUp, Menu, X, type LucideIcon } from 'lucide-react';

interface NavItemConfig {
  label: string;
  href: string;
  id: string;
  icon: LucideIcon;
  activeColorClass: string;
  hoverColorClass: string;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Configuration for Navigation Items
  const navItems: NavItemConfig[] = React.useMemo(() => [
    { 
      label: 'About', 
      href: '#about', 
      id: 'about', 
      icon: User,
      activeColorClass: 'bg-primary text-white shadow-lg scale-105',
      hoverColorClass: 'glass-pill text-secondary hover:text-primary hover:bg-white'
    },
    { 
      label: 'Expertise', 
      href: '#services', 
      id: 'services', 
      icon: Zap,
      activeColorClass: 'bg-primary text-white shadow-lg scale-105',
      hoverColorClass: 'glass-pill text-secondary hover:text-primary hover:bg-white'
    },
    { 
      label: 'Work', 
      href: '#portfolio', 
      id: 'portfolio', 
      icon: Briefcase,
      activeColorClass: 'bg-primary text-white shadow-lg scale-105',
      hoverColorClass: 'glass-pill text-secondary hover:text-primary hover:bg-white'
    },
    { 
      label: 'Clients', 
      href: '#clients', 
      id: 'clients', 
      icon: Users,
      activeColorClass: 'bg-primary text-white shadow-lg scale-105',
      hoverColorClass: 'glass-pill text-secondary hover:text-primary hover:bg-white'
    },
    { 
      label: 'Contact', 
      href: '#location', 
      id: 'location', 
      icon: MapPin,
      activeColorClass: 'bg-primary text-white hover:bg-primary-light shadow-xl',
      hoverColorClass: 'glass-pill text-secondary hover:text-primary hover:bg-white'
    },
  ], []);

  const desktopNavItems = React.useMemo(() => navItems.filter(i => i.id !== 'location'), [navItems]);

  const scrollTo = (id: string) => {
    // Strip # if present
    const targetId = id.replace('#', '');
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); 
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      setIsScrolled(window.scrollY > scrollThreshold);

      // Determine active section
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? '-translate-y-full opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100 bg-transparent py-6' 
        }`}
      >
        <Container className="flex items-center justify-between">
          <Logo />
          
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
             <NavMenu items={desktopNavItems} />
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="primary" 
              size="sm" 
              className="hidden md:inline-flex shadow-lg shadow-primary/20"
              onClick={() => scrollTo('location')}
            >
              Contact
            </Button>

            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(false)}
        >
           <X className="w-8 h-8" />
        </button>
        
        <nav className="flex flex-col items-center gap-8">
           {navItems.map((item) => (
             <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
             >
               {item.label}
             </button>
           ))}
        </nav>
      </div>

      {/* Side Navigation (Scrolled State) */}
      <div 
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isScrolled ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
        }`}
      >
        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full bg-white/50 backdrop-blur-sm text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 group relative shadow-sm hover:shadow-md hover:-translate-y-1"
          title="Back to Top"
        >
          <ArrowUp className="w-6 h-6" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary-dark text-gray-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            Top
          </span>
        </button>

        {/* Dynamic Nav Items */}
        {navItems.map((item) => (
           <React.Fragment key={item.label}>
             {item.id === 'location' && <div className="w-8 h-px bg-slate-300 my-2" />}
             
             <SideNavButton 
               {...item}
               isActive={activeSection === item.id}
               onClick={scrollTo}
               isContact={item.id === 'location'}
             />
           </React.Fragment>
        ))}
      </div>
      
      {/* Persistent Logo */}
      <div 
        className={`w-full fixed pt-6 top-0 pl-6 left-0 z-50 transition-all duration-500 ${
            isScrolled ? 'opacity-100 translate-y-0  glass' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
          <div className="scale-75 origin-top-left cursor-pointer drop-shadow-md" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>
      </div>
    </>
  );
};
