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
import { ContactCTASection } from '@/components/screens/home/ContactCTASection';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  return {
    title: t('pages.home.title'),
    description: t('pages.home.description'),
  };
}

export default function Home() {
  const locale = useLocale();

  return (
    <main
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`text-center ${(locale === 'ar') ? 'text-right' : 'text-left'}`}
    >
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
      <ContactCTASection locale={locale} />
    </main>
  );
}