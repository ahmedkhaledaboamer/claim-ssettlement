'use client';
import { HeroSection } from '@/components/screens/identity/HeroSection';
import { ContentSections } from '@/components/screens/identity/ContentSections';
import { ClientJourney } from '@/components/screens/identity/ClientJourney';
import { ContentSection } from '@/data/contentData';
import { useLocale, useMessages } from 'next-intl';

const FIRST_HALF_IDS = ['intro', 'identity', 'philosophy', 'mission', 'vision', 'principles'] as const;
const SECOND_HALF_IDS = ['reading', 'building', 'partners', 'clients', 'admin', 'results'] as const;

function buildSections(
  sections: Record<string, { title: string; content: string[]; bullets?: string[]; conclusion?: string }>,
  ids: readonly string[]
): ContentSection[] {
  return ids.map((id) => {
    const section = sections[id];
    if (!section) return { id, title: '', content: [] };
    return { id, ...section };
  });
}

export default function IdentityPage() {
  const locale = useLocale();
  const messages = useMessages();
  const isRTL = locale === 'ar';
  const identityPage = (messages?.identityPage as Record<string, unknown>) ?? {};
  const sectionsObj = (identityPage.sections as Record<string, { title: string; content: string[]; bullets?: string[]; conclusion?: string }>) ?? {};
  const firstHalfContent = buildSections(sectionsObj, FIRST_HALF_IDS);
  const secondHalfContent = buildSections(sectionsObj, SECOND_HALF_IDS);
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-KIB-light text-KIB-muted font-body selection:bg-KIB-gold/30 selection:text-KIB-text">
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