import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function AidePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <HelpCircle className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Aide</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Guide d&apos;utilisation</CardTitle>
            <CardDescription>Comment utiliser le calculateur de câbles</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Notre calculateur de câbles est conçu pour vous aider à déterminer la section appropriée 
              de vos câbles électriques. Suivez les étapes simples dans l&apos;interface pour obtenir 
              des résultats précis basés sur vos besoins spécifiques.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support technique</CardTitle>
            <CardDescription>Besoin d&apos;assistance supplémentaire ?</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Si vous avez des questions ou rencontrez des difficultés, notre équipe de support 
              technique est là pour vous aider. N&apos;hésitez pas à nous contacter pour obtenir 
              une assistance personnalisée.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}