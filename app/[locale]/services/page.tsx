import { FeaturesSection } from '@/components/screens/services/FeaturesSection';
import { ServicesSection } from '@/components/screens/services/ServicesSection';
import { WhyUsSection } from '@/components/screens/services/WhyUsSection';
import { HeroSection } from '@/components/screens/services/HeroSection';
import { useLocale } from 'next-intl';

export default function ServicesPage() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-[#FDF8F3]" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <main>
        <HeroSection locale={locale}/>
        <FeaturesSection />
        <ServicesSection />
        <WhyUsSection locale={locale}/>
      </main>
    </div>
  );
}