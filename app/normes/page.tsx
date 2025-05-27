"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";

export default function NormesPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Normes Électriques</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Guide des Normes Électriques</CardTitle>
          <CardDescription>
            Référence complète des normes électriques applicables pour les installations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] rounded-md border p-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Normes Générales</h2>
                <p className="text-muted-foreground mb-4">
                  Les normes électriques garantissent la sécurité et la fiabilité des installations électriques.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Protection contre les surcharges électriques</li>
                  <li>Mise à la terre et liaison équipotentielle</li>
                  <li>Dimensionnement des conducteurs</li>
                  <li>Protection différentielle</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">Réglementations Spécifiques</h2>
                <p className="text-muted-foreground mb-4">
                  Chaque type d&apos;installation peut avoir des exigences particulières.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Installations résidentielles</li>
                  <li>Locaux professionnels</li>
                  <li>Environnements spéciaux</li>
                  <li>Installations temporaires</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">Sécurité</h2>
                <p className="text-muted-foreground mb-4">
                  La sécurité est primordiale dans toute installation électrique.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dispositifs de protection</li>
                  <li>Distances de sécurité</li>
                  <li>Signalisation</li>
                  <li>Maintenance préventive</li>
                </ul>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  );
}