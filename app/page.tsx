import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section"; // <-- Asegurémonos de que esta línea esté presente
import { ComparisonSection } from "@/components/comparison-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection /> {/* <-- Y que el componente se renderice aquí al principio */}
        <ComparisonSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <WhatsAppFloat />
    </div>
  );
}