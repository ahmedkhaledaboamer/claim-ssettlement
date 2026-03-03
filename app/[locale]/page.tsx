import { HeroSection } from '@/components/screens/home/HeroSection';
import { AboutSection } from '@/components/screens/home/AboutSection';
import { ServicesSection } from '@/components/screens/home/ServicesSection';
import { OfferingsSection } from '@/components/screens/home/OfferingsSection';
import { StatsSection } from '@/components/screens/home/StatsSection';
import { JourneySection } from '@/components/screens/home/JourneySection';
import { SystemSection } from '@/components/screens/home/SystemSection';
import { ServiceLevelsSection } from '@/components/screens/home/ServiceLevelsSection';
import { QualitySection } from '@/components/screens/home/QualitySection';
import { ClientsSection } from '@/components/screens/home/ClientsSection';
import { PromiseSection } from '@/components/screens/home/PromiseSection';
import { PartnersSection } from '@/components/screens/home/PartnersSection';
import { ContactCTASection } from '@/components/screens/home/ContactCTASection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfferingsSection />
      <StatsSection />
      <JourneySection />
      <SystemSection />
      <ServiceLevelsSection />
      <QualitySection />
      <ClientsSection />
      <PromiseSection />
      <PartnersSection />
      <ContactCTASection />
    </main>);

}