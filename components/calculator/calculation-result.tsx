"use client";

import { AlertCircle, Check, Download, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CalculationResultProps {
  result: {
    recommendedSection: number;
    minimumSectionCurrent: number;
    minimumSectionVoltage: number;
    voltageDropPercentage: number;
    correctionFactors: {
      temperature: number;
      installation: number;
      grouping: number;
    };
    notes: string[];
    compliant: boolean;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  // Function to handle PDF export (placeholder)
  const handleExport = () => {
    console.log("Exporting calculation as PDF...");
    // Implementation would go here
    alert("Export fonctionnalité à implémenter.");
  };

  return (
    <div className="space-y-4">
      {/* Main result */}
      <div className="rounded-lg border bg-card p-4 flex flex-col items-center text-center">
        <div className="text-sm font-medium text-muted-foreground mb-1">
          Section recommandée
        </div>
        <div className="text-4xl font-bold">
          {result.recommendedSection} mm²
        </div>
        
        {result.compliant ? (
          <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-500">
            <Check className="mr-1 h-4 w-4" />
            <span>Conforme aux normes</span>
          </div>
        ) : (
          <div className="mt-2 flex items-center text-sm text-destructive">
            <AlertCircle className="mr-1 h-4 w-4" />
            <span>Non conforme aux normes</span>
          </div>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4"
          onClick={handleExport}
        >
          <Download className="mr-2 h-4 w-4" />
          Exporter le calcul
        </Button>
      </div>

      {/* Detailed results */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Détails du calcul</h4>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
            <span className="text-muted-foreground">Section min. (courant)</span>
            <span className="font-medium">{result.minimumSectionCurrent} mm²</span>
          </div>
          
          <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
            <span className="text-muted-foreground">Section min. (chute de tension)</span>
            <span className="font-medium">{result.minimumSectionVoltage} mm²</span>
          </div>
          
          <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
            <div className="flex items-center">
              <span className="text-muted-foreground">Chute de tension</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Chute de tension calculée avec la section recommandée
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className="font-medium">{result.voltageDropPercentage.toFixed(2)}%</span>
          </div>
          
          <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
            <div className="flex items-center">
              <span className="text-muted-foreground">Facteur global</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 ml-1 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Produit de tous les facteurs de correction
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className="font-medium">
              {(
                result.correctionFactors.temperature * 
                result.correctionFactors.installation * 
                result.correctionFactors.grouping
              ).toFixed(2)}
            </span>
          </div>
        </div>
        
        <h4 className="text-sm font-medium pt-2">Facteurs de correction</h4>
        
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
            <span className="text-xs text-muted-foreground">Température</span>
            <span className="font-medium">{result.correctionFactors.temperature.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
            <span className="text-xs text-muted-foreground">Installation</span>
            <span className="font-medium">{result.correctionFactors.installation.toFixed(2)}</span>
          </div>
          
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
            <span className="text-xs text-muted-foreground">Groupement</span>
            <span className="font-medium">{result.correctionFactors.grouping.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Notes section */}
      {result.notes && result.notes.length > 0 && (
        <div className="pt-2">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Notes</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                {result.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}