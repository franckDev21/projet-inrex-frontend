"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const installationTypes = [
  {
    id: "conduit",
    name: "Conduit",
    description: "Câble dans un conduit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16"></path>
        <path d="M4 20h16"></path>
        <path d="M4 4v16"></path>
        <path d="M20 4v16"></path>
        <path d="M9 9h6"></path>
        <path d="M12 9v6"></path>
      </svg>
    ),
  },
  {
    id: "buried",
    name: "Enterré",
    description: "Câble enterré directement",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20"></path>
        <path d="M12 12v6"></path>
        <path d="M8 18h8"></path>
        <path d="M12 2v6"></path>
        <path d="M8 12h8"></path>
      </svg>
    ),
  },
  {
    id: "surface",
    name: "En surface",
    description: "Posé en surface sur un mur",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 7h10v10H7z"></path>
      </svg>
    ),
  },
  {
    id: "tray",
    name: "Chemin de câbles",
    description: "Sur un chemin de câbles",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8a4 4 0 0 0-4-4H7.5"></path>
        <path d="M2 12h20"></path>
        <path d="M2 16h6"></path>
        <path d="M2 20h6"></path>
        <path d="M9 20a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
        <path d="M5 8V4"></path>
      </svg>
    ),
  },
  {
    id: "duct",
    name: "Gaine",
    description: "Câble dans une gaine",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"></path>
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
    ),
  },
  {
    id: "air",
    name: "En l'air",
    description: "Suspendu en l'air",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5 12 12l5.5-5.5"></path>
        <path d="M6.5 17.5 12 12l5.5 5.5"></path>
      </svg>
    ),
  },
];

interface InstallationTypeSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function InstallationTypeSelector({
  value,
  onValueChange,
}: InstallationTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {installationTypes.map((type) => (
        <div
          key={type.id}
          className={cn(
            "border rounded-lg p-4 cursor-pointer transition-colors hover:bg-muted/50",
            value === type.id
              ? "border-primary bg-primary/5"
              : "border-border"
          )}
          onClick={() => onValueChange(type.id)}
        >
          <div className="flex flex-col items-center text-center gap-2">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              value === type.id
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            )}>
              {type.icon}
            </div>
            <div>
              <p className="font-medium text-sm">{type.name}</p>
              <p className="text-xs text-muted-foreground">{type.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}