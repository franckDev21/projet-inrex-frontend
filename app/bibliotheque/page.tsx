import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database } from "lucide-react";

interface CableType {
  name: string;
  description: string;
  applications: string[];
  specifications: {
    [key: string]: string;
  };
  standards: string[];
}

const cableTypes: { [key: string]: CableType[] } = {
  "basse-tension": [
    {
      name: "U-1000 R2V",
      description: "Câble industriel pour installations fixes",
      applications: [
        "Distribution d'énergie",
        "Installations industrielles",
        "Bâtiments tertiaires"
      ],
      specifications: {
        "Tension nominale": "0.6/1 kV",
        "Température max": "90°C",
        "Isolation": "PR/PVC",
        "Conducteur": "Cuivre ou Aluminium"
      },
      standards: ["NF C 32-321", "IEC 60502-1"]
    },
    {
      name: "H07V-U",
      description: "Câble rigide pour installations domestiques",
      applications: [
        "Installations domestiques",
        "Pose sous conduit",
        "Tableaux électriques"
      ],
      specifications: {
        "Tension nominale": "450/750 V",
        "Température max": "70°C",
        "Isolation": "PVC",
        "Conducteur": "Cuivre"
      },
      standards: ["NF C 32-201", "HD 21.3"]
    },
    {
      name: "XVB",
      description: "Câble pour installations fixes",
      applications: [
        "Distribution d'énergie",
        "Installations résidentielles",
        "Bâtiments commerciaux"
      ],
      specifications: {
        "Tension nominale": "0.6/1 kV",
        "Température max": "70°C",
        "Isolation": "XLPE/PVC",
        "Conducteur": "Cuivre"
      },
      standards: ["NBN C 32-131", "HD 603"]
    }
  ],
  "moyenne-tension": [
    {
      name: "NF C 33-226",
      description: "Câble moyenne tension pour réseaux souterrains",
      applications: [
        "Réseaux de distribution",
        "Industries",
        "Installations souterraines"
      ],
      specifications: {
        "Tension nominale": "12/20 kV",
        "Température max": "90°C",
        "Isolation": "PR",
        "Conducteur": "Aluminium"
      },
      standards: ["NF C 33-226", "IEC 60502-2"]
    },
    {
      name: "HN33-S-23",
      description: "Câble unipolaire à isolation synthétique",
      applications: [
        "Réseaux urbains",
        "Installations industrielles",
        "Postes de transformation"
      ],
      specifications: {
        "Tension nominale": "8.7/15 kV",
        "Température max": "90°C",
        "Isolation": "PR",
        "Conducteur": "Cuivre/Aluminium"
      },
      standards: ["HN 33-S-23", "IEC 60502-2"]
    }
  ],
  "special": [
    {
      name: "PYROFEU",
      description: "Câble de sécurité résistant au feu",
      applications: [
        "Systèmes de sécurité",
        "Éclairage de secours",
        "Alarmes incendie"
      ],
      specifications: {
        "Tension nominale": "0.6/1 kV",
        "Résistance au feu": "2h à 850°C",
        "Isolation": "Silicone",
        "Conducteur": "Cuivre"
      },
      standards: ["NF C 32-070", "IEC 60331"]
    },
    {
      name: "H07 RN-F",
      description: "Câble souple pour usage intensif",
      applications: [
        "Chantiers",
        "Industries",
        "Applications mobiles"
      ],
      specifications: {
        "Tension nominale": "450/750 V",
        "Température max": "60°C",
        "Isolation": "EPR",
        "Conducteur": "Cuivre"
      },
      standards: ["NF C 32-102", "HD 22.4"]
    }
  ]
};

export default function BibliothequeDesCables() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Database className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Bibliothèque des Câbles</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Guide des Types de Câbles</CardTitle>
          <CardDescription>
            Explorez notre bibliothèque complète de câbles électriques avec leurs spécifications et applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basse-tension" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basse-tension">Basse Tension</TabsTrigger>
              <TabsTrigger value="moyenne-tension">Moyenne Tension</TabsTrigger>
              <TabsTrigger value="special">Câbles Spéciaux</TabsTrigger>
            </TabsList>

            {Object.entries(cableTypes).map(([category, cables]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {cables.map((cable, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{cable.name}</CardTitle>
                      <CardDescription>{cable.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="font-medium mb-2">Applications</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {cable.applications.map((app, i) => (
                              <li key={i}>{app}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Spécifications</h3>
                          <dl className="space-y-1">
                            {Object.entries(cable.specifications).map(([key, value], i) => (
                              <div key={i} className="grid grid-cols-2 text-sm">
                                <dt className="text-muted-foreground">{key}</dt>
                                <dd className="font-medium">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-medium mb-2">Normes applicables</h3>
                        <p className="text-sm text-muted-foreground">
                          {cable.standards.join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}