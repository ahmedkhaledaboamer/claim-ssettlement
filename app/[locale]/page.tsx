 import { AboutSection } from "@/components/screens/home/AboutSection";
import { ClientJourneySection } from "@/components/screens/home/ClientJourneySection";
import { ClientsSection } from "@/components/screens/home/ClientsSection";
import { ContactSection } from "@/components/screens/home/ContactSection";
import { HeroSection } from "@/components/screens/home/HeroSection";
import { MissionVisionSection } from "@/components/screens/home/MissionVisionSection";
import { OperatingSystemSection } from "@/components/screens/home/OperatingSystemSection";
 import { QualitySection } from "@/components/screens/home/QualitySection";
import { ServiceLevelsSection } from "@/components/screens/home/ServiceLevelsSection";
import { ServicesSection } from "@/components/screens/home/ServicesSection";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("page");

  return (
    <section>
 <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <ServicesSection />
        <ClientJourneySection />
        <OperatingSystemSection />
        <ServiceLevelsSection />
        <QualitySection />
        <ClientsSection />
         <ContactSection />
     </section>
  );
}
