"use client";

import { Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ContentContainer from "@/components/layout/content-container";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    description: "Pour les petits projets",
    features: [
      "Calculs de base",
      "Accès à la bibliothèque standard",
      "5 calculs par jour",
    ],
    limitations: [
      "Pas d&apos;export PDF",
      "Pas de sauvegarde des calculs",
      "Support communautaire uniquement",
    ],
    buttonText: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    price: "29€",
    period: "par mois",
    description: "Pour les professionnels",
    features: [
      "Calculs illimités",
      "Export PDF",
      "Bibliothèque complète",
      "Sauvegarde des calculs",
      "Support prioritaire",
      "Mises à jour en avant-première",
    ],
    buttonText: "Commencer l&apos;essai gratuit",
    popular: true,
  },
  {
    name: "Entreprise",
    price: "99€",
    period: "par mois",
    description: "Pour les équipes",
    features: [
      "Tout le plan Pro",
      "Utilisateurs illimités",
      "API d&apos;accès",
      "Intégration personnalisée",
      "Support dédié",
      "Formation sur mesure",
    ],
    buttonText: "Contacter les ventes",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-muted/50">
      <ContentContainer>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Plans d&apos;abonnement</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos besoins. Tous les plans incluent une période d&apos;essai gratuite de 14 jours.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-2">
                        <Check className="h-5 w-5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations && (
                    <div className="space-y-2">
                      {plan.limitations.map((limitation) => (
                        <div key={limitation} className="flex gap-2">
                          <Check className="h-5 w-5 shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
