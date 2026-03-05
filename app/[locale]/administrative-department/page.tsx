import { ParticleCanvas } from '@/components/screens/administrative-department/ParticleCanvas';
import { HeroSection } from '@/components/screens/administrative-department/HeroSection';
import { IntroductionSection } from '@/components/screens/administrative-department/IntroductionSection';
import { TeamShowcase } from '@/components/screens/administrative-department/TeamShowcase';
import { WhatWeDoSection } from '@/components/screens/administrative-department/WhatWeDoSection';
import { ClientJourneySection } from '@/components/screens/administrative-department/ClientJourneySection';
import { OperatingSystemSection } from '@/components/screens/administrative-department/OperatingSystemSection';
import { ServiceLevelsSection } from '@/components/screens/administrative-department/ServiceLevelsSection';
import { QualityStandardsSection } from '@/components/screens/administrative-department/QualityStandardsSection';
import { ClientTypesSection } from '@/components/screens/administrative-department/ClientTypesSection';
import { FAQSection } from '@/components/screens/administrative-department/FAQSection';
import { ConclusionSection } from '@/components/screens/administrative-department/ConclusionSection';
import { useLocale } from 'next-intl';

export default function AdministrativeApparatusPage() {
  const locale = useLocale();

  return (
    <div className="relative min-h-screen bg-white">
      <ParticleCanvas />
      <main
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`text-center ${locale === 'ar' ? 'text-right' : 'text-left'}`}
      >
        <HeroSection locale={locale} />
        <div className="section-divider" />
        <IntroductionSection locale={locale} />
        <div className="section-divider" />
          <div className="section-divider" />
        <WhatWeDoSection locale={locale} />
        <div className="section-divider" />
        <ClientJourneySection locale={locale} />
        <div className="section-divider" />
        <OperatingSystemSection locale={locale} />
        <div className="section-divider" />
        <ServiceLevelsSection locale={locale} />
        <div className="section-divider" />
        <QualityStandardsSection locale={locale} />
        <div className="section-divider" />
        <ClientTypesSection locale={locale} />
        <div className="section-divider" />
        <FAQSection locale={locale} />
        <ConclusionSection locale={locale} />
      </main>
    </div>
  );
}