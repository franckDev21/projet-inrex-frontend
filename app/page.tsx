import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import Calculator from '@/components/calculator/calculator';
import PricingSection from '@/components/sections/pricing-section';
import ContentContainer from '@/components/layout/content-container';

export default function Home() {
  return (
    <div className="w-full">
        <HeroSection />
        <div className="py-12">
          <ContentContainer>
            <h2 className="text-3xl font-bold text-center mb-8">Calculateur de Section de Câble</h2>
            <Calculator />
          </ContentContainer>
        </div>
        <FeaturesSection />
        <PricingSection />
    </div>
  );
}