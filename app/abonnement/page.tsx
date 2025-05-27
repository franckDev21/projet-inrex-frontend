"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { useState } from "react";

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
      "Pas d'export PDF",
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
    buttonText: "Commencer l'essai gratuit",
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
      "API d'accès",
      "Intégration personnalisée",
      "Support dédié",
      "Formation sur mesure",
    ],
    buttonText: "Contacter les ventes",
    popular: false,
  },
];

export default function AbonnementPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = async (planName: string) => {
    setSelectedPlan(planName);
    // Here we would integrate with Stripe for payment processing
    console.log(`Subscribing to ${planName} plan`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CreditCard className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Plans d&apos;abonnement</h1>
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
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Inclus :</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.limitations && (
                  <div>
                    <h4 className="font-medium mb-2">Limitations :</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <span>• {limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSubscribe(plan.name)}
                disabled={selectedPlan === plan.name}
              >
                {selectedPlan === plan.name ? "En cours..." : plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}