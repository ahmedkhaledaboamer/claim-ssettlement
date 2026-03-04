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
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
  },
  {
    id: 'companyFinance',
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'commercialProjects',
    icon: 'building2',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'industrialProjects',
    icon: 'factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'realEstateFinance',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'tradeFinance',
    icon: 'cart',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'islamicFinance',
    icon: 'moon',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'lettersOfCredit',
    icon: 'credit',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'investmentFinance',
    icon: 'trending',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'financialAdvisory',
    icon: 'calculator',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'entrepreneursFinance',
    icon: 'rocket',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'corporateExpansion',
    icon: 'expand',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'innovationTechFinance',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'newProjectsFinance',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'partnershipFinance',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'internationalTradeFinance',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'overseasProjects',
    icon: 'mappin',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'shippingLogisticsFinance',
    icon: 'truck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'foreignDirectInvestment',
    icon: 'landmark',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'smeFinance',
    icon: 'store',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'restructuringFinance',
    icon: 'refresh',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'supplyChainFinance',
    icon: 'link',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'governmentContracts',
    icon: 'file',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'heavyEquipmentFinance',
    icon: 'harddrive',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'franchiseFinance',
    icon: 'award',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'digitalTransformationFinance',
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'internationalExpansion',
    icon: 'plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'acquisitionFinance',
    icon: 'merge',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'ventureCapitalFinance',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',
    featureKeys: ['feature1', 'feature2', 'feature3'],
  },
  {
    id: 'serviceProjectsFinance',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
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

