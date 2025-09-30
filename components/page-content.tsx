// components/page-content.tsx

"use client"

import { useSearchParams } from 'next/navigation'

// Importa todas tus secciones
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { BenefitsSection } from "@/components/benefits-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export function PageContent() {
  // Esta línea necesita estar dentro de un Suspense
  const searchParams = useSearchParams(); 

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <WhatsAppFloat />
    </>
  );
}