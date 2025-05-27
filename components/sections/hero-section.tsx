import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import ContentContainer from '@/components/layout/content-container';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 dark:from-blue-950/40 dark:to-violet-950/40" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <ContentContainer >
        <div className="relative py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Zap size={16} />
                <span>Logiciel professionnel pour électriciens</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Dimensionnez vos câbles électriques en toute{" "}
                <span className="text-primary">simplicité</span> et{" "}
                <span className="text-primary">sécurité</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                ELECsize est le logiciel de référence pour le dimensionnement optimal 
                de vos câbles électriques, conforme aux normes en vigueur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/calculateur">
                    Démarrer le calcul <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/documentation">
                    Consulter la documentation
                  </Link>
                </Button>
              </div>
              
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Calculs précis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Conforme aux normes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Interface intuitive</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-violet-600 p-6 flex items-center justify-center">
                <div className="w-full max-w-md bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Calcul rapide</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Courant (A)</p>
                          <div className="h-8 bg-muted rounded-md flex items-center px-3 text-sm">16</div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Tension (V)</p>
                          <div className="h-8 bg-muted rounded-md flex items-center px-3 text-sm">230</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Longueur (m)</p>
                          <div className="h-8 bg-muted rounded-md flex items-center px-3 text-sm">25</div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Type de pose</p>
                          <div className="h-8 bg-muted rounded-md flex items-center px-3 text-sm">Conduit</div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button className="w-full bg-primary text-primary-foreground h-9 rounded-md text-sm font-medium">
                          Calculer
                        </button>
                      </div>
                      <div className="flex justify-between items-center rounded-md border p-3 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Section recommandée</p>
                          <p className="text-xl font-semibold">2,5 mm²</p>
                        </div>
                        <Zap className="h-8 w-8 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
      
    </div>
  );
}