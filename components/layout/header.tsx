"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import ContentContainer from '@/components/layout/content-container';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "w-full transition-all duration-200",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <ContentContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">ELEC<span className="text-primary">size</span></span>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Accueil
            </Link>
            <Link href="/calculateur" className="text-foreground/80 hover:text-foreground transition-colors">
              Calculateur
            </Link>
            <Link href="/bibliotheque" className="text-foreground/80 hover:text-foreground transition-colors">
              Bibliothèque
            </Link>
            <Link href="/normes" className="text-foreground/80 hover:text-foreground transition-colors">
              Normes
            </Link>
            <Link href="/aide" className="text-foreground/80 hover:text-foreground transition-colors">
              Aide
            </Link>

          </nav>
          
          <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Connexion</Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link href="/auth/register">S&apos;inscrire</Link>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(mobileMenuOpen ? "hidden" : "block")}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(mobileMenuOpen ? "block" : "hidden")}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </div>
        </div>
        </ContentContainer>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        )}>
          <div className="pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/calculateur" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculateur
            </Link>
            <Link 
              href="/bibliotheque" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bibliothèque
            </Link>
            <Link 
              href="/normes" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Normes
            </Link>
            <Link 
              href="/aide" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aide
            </Link>
            <Link 
              href="/abonnement" 
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Abonnement
            </Link>
            <div className="pt-2">
              <Button variant="default" size="sm" className="w-full">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}