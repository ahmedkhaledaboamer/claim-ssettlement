'use client';
import { useLocale } from 'next-intl';
import { HeroSection } from '@/components/screens/execution/HeroSection';
import { AboutSection } from '@/components/screens/execution/AboutSection';
import { ExecutivePathSection } from '@/components/screens/execution/ExecutivePathSection';
import { ServicesSection } from '@/components/screens/execution/ServicesSection';
import { BenefitsSection } from '@/components/screens/execution/BenefitsSection';
import { StatsSection } from '@/components/screens/execution/StatsSection';
import { WhyUsSection } from '@/components/screens/execution/WhyUsSection';
import { FAQSection } from '@/components/screens/execution/FAQSection';
import { ContactCTA } from '@/components/screens/execution/ContactCTA';

export default function ExecutionPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`font-cairo overflow-x-hidden bg-cream-50 text-navy-900 selection:bg-gold-500 selection:text-navy-900 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <main>
        <HeroSection />
        <AboutSection />
        <ExecutivePathSection isRTL={isRTL} />
        <ServicesSection />
        <BenefitsSection />
        <StatsSection />
        <WhyUsSection />
        <FAQSection />
        <ContactCTA />
      </main>
    </div>);

}