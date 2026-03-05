'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/screens/services/ServiceCard';
import { useTranslations } from 'next-intl';

type ServiceConfig = {
  id: string;
  icon: string;
  image: string;
  featureKeys: string[];
};

const services: ServiceConfig[] = [
  {
    id: 'financeBrokerage',
    icon: 'briefcase',
    image: '/imgs/image_2708.webp',
    featureKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
  },
  {
    id: 'companyFinance',
    icon: 'building',
    image: '/imgs/image_2709.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'commercialProjects',
    icon: 'building2',
    image: '/imgs/image_2710.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'industrialProjects',
    icon: 'factory',
    image: '/imgs/image_2711.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'realEstateFinance',
    icon: 'home',
    image: '/imgs/image_2712.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'tradeFinance',
    icon: 'cart',
    image: '/imgs/image_2713.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'islamicFinance',
    icon: 'moon',
    image: '/imgs/image_2714.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'lettersOfCredit',
    icon: 'credit',
    image: '/imgs/j67.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'investmentFinance',
    icon: 'trending',
    image: '/imgs/n62.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'financialAdvisory',
    icon: 'calculator',
    image: '/imgs/n68.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'entrepreneursFinance',
    icon: 'rocket',
    image: '/imgs/t66.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'corporateExpansion',
    icon: 'expand',
    image: '/imgs/v69.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'innovationTechFinance',
    icon: 'cpu',
    image: '/imgs/z63.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'newProjectsFinance',
    icon: 'sparkles',
    image: '/imgs/z65.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'partnershipFinance',
    icon: 'users',
    image: '/imgs/z85.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'internationalTradeFinance',
    icon: 'globe',
    image: '/imgs/An operational scaling visuali/image_43.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'overseasProjects',
    icon: 'mappin',
    image: '/imgs/A cashflow continuity visualiz/image_37.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'shippingLogisticsFinance',
    icon: 'truck',
    image: '/imgs/z85.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'foreignDirectInvestment',
    icon: 'landmark',
    image: '/imgs/A clarityfocused communication/image_48.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'smeFinance',
    icon: 'store',
    image: '/imgs/A clarityfocused communication/image_67.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'restructuringFinance',
    icon: 'refresh',
    image: '/imgs/A clarityfocused executive wor/image_57.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'supplyChainFinance',
    icon: 'link',
    image: '/imgs/A centralized data operations/image_79.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'governmentContracts',
    icon: 'file',
    image: '/imgs/A complete financial managemen/image_39.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'heavyEquipmentFinance',
    icon: 'harddrive',
    image: '/imgs/A complete financial managemen/image_49.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'franchiseFinance',
    icon: 'award',
    image: '/imgs/A complete financial managemen/image_54.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'digitalTransformationFinance',
    icon: 'monitor',
    image: '/imgs/A futuristic verification gate/image_47.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'internationalExpansion',
    icon: 'plane',
    image: '/imgs/A layered operational framewor/image_51.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'acquisitionFinance',
    icon: 'merge',
    image: '/imgs/A commercial development fundi/image_58.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'ventureCapitalFinance',
    icon: 'zap',
    image: '/imgs/A financial roadmap visualizat/image_68.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'serviceProjectsFinance',
    icon: 'heart',
    image: '/imgs/A financial stability concept/image_35.webp',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
];

export function ServicesSection() {
  const t = useTranslations('servicesPage.grid');
  return (
    <section
      id="services"
      className=" bg-[#FDF8F3] "
    >
      <div className="mx-auto px-[5%] py-[2%] ">
        <motion.div
          className="text-center mb-[clamp(48px,8vh,80px)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-fluid-label font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="font-heading font-bold text-fluid-section-title text-[#0A1628] mb-4">
            {t('title')}
          </h2>
          <p className="text-fluid-section-lead text-[#64748B] mx-auto">
            {t('lead')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.5vw,24px)]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={t(`services.${service.id}.title`)}
              description={t(`services.${service.id}.description`)}
              features={service.featureKeys.map((key) =>
                t(`services.${service.id}.${key}`)
              )}
              icon={service.icon}
              index={index}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

