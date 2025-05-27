import Link from 'next/link';
import { Zap } from 'lucide-react';
import ContentContainer from "@/components/layout/content-container";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 border-t border-border">
      <ContentContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">ELEC<span className="text-primary">size</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Dimensionnez vos câbles électriques en toute simplicité et sécurité avec notre logiciel de référence.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</Link></li>
              <li><Link href="/calculateur" className="text-muted-foreground hover:text-foreground transition-colors">Calculateur</Link></li>
              <li><Link href="/normes" className="text-muted-foreground hover:text-foreground transition-colors">Normes</Link></li>
              <li><Link href="/aide" className="text-muted-foreground hover:text-foreground transition-colors">Aide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">Guides techniques</Link></li>
              <li><Link href="/normes" className="text-muted-foreground hover:text-foreground transition-colors">Normes électriques</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/conditions" className="text-muted-foreground hover:text-foreground transition-colors">Conditions d&apos;utilisation</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ELECsize. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}