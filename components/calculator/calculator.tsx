"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { calculateCableSection } from "@/lib/cable-calculations";
import { CalculationResult } from "@/components/calculator/calculation-result";
import { InstallationTypeSelector } from "@/components/calculator/installation-type-selector";

// Define the form schema with Zod
const formSchema = z.object({
  current: z.coerce.number().positive({
    message: "Le courant doit être un nombre positif.",
  }),
  voltage: z.coerce.number().positive({
    message: "La tension doit être un nombre positif.",
  }),
  length: z.coerce.number().positive({
    message: "La longueur doit être un nombre positif.",
  }),
  installationType: z.string({
    required_error: "Sélectionnez un type d'installation.",
  }),
  ambientTemperature: z.coerce.number().min(-10).max(60, {
    message: "La température doit être entre -10 et 60°C.",
  }),
  conductorMaterial: z.enum(["copper", "aluminum"], {
    required_error: "Sélectionnez un matériau conducteur.",
  }),
  insulationType: z.enum(["pvc", "xlpe", "epr"], {
    required_error: "Sélectionnez un type d'isolation.",
  }),
  voltageDrop: z.coerce.number().min(0).max(10, {
    message: "La chute de tension doit être entre 0 et 10%.",
  }),
});

export default function Calculator() {
  const [result, setResult] = useState<any>(null);
  
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      current: 16,
      voltage: 230,
      length: 25,
      installationType: "conduit",
      ambientTemperature: 30,
      conductorMaterial: "copper",
      insulationType: "pvc",
      voltageDrop: 3,
    },
  });
  
  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Calculate cable section
    const calculationResult = calculateCableSection(values);
    setResult(calculationResult);
    
    // Log form data
    console.log(values);
    console.log(calculationResult);
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Paramètres du Câble</CardTitle>
          <CardDescription>
            Saisissez les informations nécessaires pour dimensionner votre câble électrique.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic parameters */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Paramètres de base</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="current"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Courant (A)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormDescription>
                          Intensité maximale du courant
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="voltage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tension (V)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                          Tension nominale
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Longueur (m)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormDescription>
                          Longueur du câble
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="installationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type d&apos;installation</FormLabel>
                      <FormControl>
                        <InstallationTypeSelector 
                          value={field.value} 
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>
                        Sélectionnez la méthode d&apos;installation du câble
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Separator />
              
              {/* Advanced parameters */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Paramètres avancés</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="ambientTemperature"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Température ambiante (°C)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="conductorMaterial"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Matériau conducteur</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un matériau" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="copper">Cuivre</SelectItem>
                            <SelectItem value="aluminum">Aluminium</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="insulationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type d&apos;isolation</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un type d'isolation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pvc">PVC</SelectItem>
                            <SelectItem value="xlpe">XLPE</SelectItem>
                            <SelectItem value="epr">EPR</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="voltageDrop"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chute de tension maximale acceptable (%)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Généralement entre 3% et 5% pour les installations résidentielles
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full sm:w-auto">Calculer la section</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {/* Results Card */}
      <div className="lg:col-span-2">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="results">Résultats</TabsTrigger>
            <TabsTrigger value="info">Informations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Résultats du calcul</CardTitle>
                <CardDescription>
                  Section de câble recommandée selon les paramètres fournis
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <CalculationResult result={result} />
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Remplissez le formulaire et cliquez sur &quot;Calculer la section&quot</p>
                    <p className="text-sm mt-2">Les résultats apparaîtront ici</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Guide de référence</CardTitle>
                <CardDescription>
                  Informations utiles pour le dimensionnement des câbles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Sections standards de câbles (mm²)</h4>
                  <p className="text-sm text-muted-foreground">
                    1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Chutes de tension maximales recommandées</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Éclairage : 3%</li>
                    <li>• Autres usages (prises, etc.) : 5%</li>
                    <li>• Installations industrielles : 8%</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Facteurs de correction</h4>
                  <p className="text-sm text-muted-foreground">
                    Les facteurs de correction sont appliqués pour tenir compte des conditions d&apos;installation
                    réelles qui diffèrent des conditions standard.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Normes applicables</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• NF C 15-100 (France)</li>
                    <li>• IEC 60364 (International)</li>
                    <li>• CEI 60364 (Europe)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}