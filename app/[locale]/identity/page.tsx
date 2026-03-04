import { HeroSection } from '@/components/screens/identity/HeroSection';
import { ContentSections } from '@/components/screens/identity/ContentSections';
import { ClientJourney } from '@/components/screens/identity/ClientJourney';
import { contentData } from '@/data/contentData';
export default function IdentityPage() {
  const firstHalfContent = contentData.slice(0, 6);
  const secondHalfContent = contentData.slice(6);
  return (
    <div className="min-h-screen bg-kep-light text-kep-muted font-body selection:bg-kep-gold/30 selection:text-kep-text">
      <main>
        <HeroSection />

        <div id="identity">
          <ContentSections sections={firstHalfContent} />
        </div>

        <ClientJourney />

        <div id="methodology">
          <ContentSections sections={secondHalfContent} />
        </div>
      </main>
    </div>
  );
}