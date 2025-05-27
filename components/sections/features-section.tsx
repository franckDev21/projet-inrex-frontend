import { CircleCheckBig, PlugZap, Settings, Shield, Zap } from "lucide-react";
import ContentContainer from "@/components/layout/content-container";

export default function FeaturesSection() {
  return (
    <div className="bg-muted/50 py-16 md:py-24">
      <ContentContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Fonctionnalités clés</h2>
          <p className="text-muted-foreground text-lg">
            ELECsize offre tous les outils nécessaires pour dimensionner vos câbles électriques
            selon les normes en vigueur, avec précision et simplicité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calculs précis et automatisés</h3>
            <p className="text-muted-foreground">
              Déterminez la section de câble idéale en tenant compte de tous les facteurs pertinents : 
              courant, tension, longueur, type de pose, température ambiante, etc.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Facteurs de correction intégrés</h3>
            <p className="text-muted-foreground">
              Intègre automatiquement les corrections nécessaires pour garantir la conformité 
              de votre installation aux normes en vigueur.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <CircleCheckBig className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interface conviviale</h3>
            <p className="text-muted-foreground">
              Optimisez l&apos;exploitation de vos installations grâce à des calculs intuitive des données 
              et des résultats clairs et détaillés.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conformité aux normes</h3>
            <p className="text-muted-foreground">
              Assurez-vous que vos installations sont conformes aux normes électriques en vigueur
              grâce à notre base de données régulièrement mise à jour.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <PlugZap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bibliothèque de câbles</h3>
            <p className="text-muted-foreground">
              Accédez à une vaste bibliothèque de types de câbles avec leurs caractéristiques 
              techniques complètes pour faire le meilleur choix.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="8" height="14" x="8" y="6" rx="4"></rect><path d="m19 7-3 2"></path><path d="m5 7 3 2"></path><path d="m19 19-3-2"></path><path d="m5 19 3-2"></path><path d="M20 13h-4"></path><path d="M4 13h4"></path><path d="m10 4 1 2"></path><path d="m14 4-1 2"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Recommandations optimisées</h3>
            <p className="text-muted-foreground">
              Obtenez des recommandations optimisées pour chaque situation, prenant en compte
              l&apos;efficacité énergétique et les coûts des matériaux.
            </p>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}