import { HeroSection } from '@/components/screens/services/HeroSection';
import { AboutSection } from '@/components/screens/services/AboutSection';
import { MissionVisionSection } from '@/components/screens/services/MissionVisionSection';
import { ServicesSection } from '@/components/screens/services/ServicesSection';
import { ClientJourneySection } from '@/components/screens/services/ClientJourneySection';
import { OperatingSystemSection } from '@/components/screens/services/OperatingSystemSection';
import { ServiceLevelsSection } from '@/components/screens/services/ServiceLevelsSection';
import { QualityPrinciplesSection } from '@/components/screens/services/QualityPrinciplesSection';
import { WhoWeServeSection } from '@/components/screens/services/WhoWeServeSection';
import { ContactSection } from '@/components/screens/services/ContactSection';
export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesSection />
      <ClientJourneySection />
      <OperatingSystemSection />
      <ServiceLevelsSection />
      <QualityPrinciplesSection />
      <WhoWeServeSection />
      <ContactSection />
    </main>);

}