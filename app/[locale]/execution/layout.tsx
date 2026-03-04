import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  return {
    title: t('pages.execution.title'),
    description: t('pages.execution.description'),
  };
}

export default function ExecutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
