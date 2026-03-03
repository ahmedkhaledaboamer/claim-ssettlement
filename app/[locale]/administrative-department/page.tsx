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
export default function AdministrativeApparatusPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <ParticleCanvas />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <IntroductionSection />
        <div className="section-divider" />
        <TeamShowcase />
        <div className="section-divider" />
        <WhatWeDoSection />
        <div className="section-divider" />
        <ClientJourneySection />
        <div className="section-divider" />
        <OperatingSystemSection />
        <div className="section-divider" />
        <ServiceLevelsSection />
        <div className="section-divider" />
        <QualityStandardsSection />
        <div className="section-divider" />
        <ClientTypesSection />
        <div className="section-divider" />
        <FAQSection />
        <ConclusionSection />
      </main>
    </div>);

}