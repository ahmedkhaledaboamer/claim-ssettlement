import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });
  return {
    title: t('pages.administrativeDepartment.title'),
    description: t('pages.administrativeDepartment.description'),
  };
}

export default function AdministrativeDepartmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
