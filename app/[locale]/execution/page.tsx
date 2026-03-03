import { HeroSection } from '@/components/screens/execution/HeroSection';
import { AboutSection } from '@/components/screens/execution/AboutSection';
import { ExecutivePathSection } from '@/components/screens/execution/ExecutivePathSection';
import { ServicesSection } from '@/components/screens/execution/ServicesSection';
import { BenefitsSection } from '@/components/screens/execution/BenefitsSection';
import { StatsSection } from '@/components/screens/execution/StatsSection';
import { PartnersSection } from '@/components/screens/execution/PartnersSection';
import { WhyUsSection } from '@/components/screens/execution/WhyUsSection';
import { FAQSection } from '@/components/screens/execution/FAQSection';
import { ContactCTA } from '@/components/screens/execution/ContactCTA';
export default function ExecutionPage() {
  return (
    <div
      className="font-cairo text-right overflow-x-hidden bg-cream-50 text-navy-900 selection:bg-gold-500 selection:text-navy-900">

      <main>
        <HeroSection />
        <AboutSection />
        <ExecutivePathSection />
        <ServicesSection />
        <BenefitsSection />
        <StatsSection />
        <PartnersSection />
        <WhyUsSection />
        <FAQSection />
        <ContactCTA />
      </main>
    </div>);

}