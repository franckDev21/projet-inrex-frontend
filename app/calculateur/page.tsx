"use client";

import Calculator from "@/components/calculator/calculator";

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Calculateur de Section de Câble</h1>
      <Calculator />
    </div>
  );
}