'use client';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  TrendingUpIcon,
  BuildingIcon,
  Building2Icon,
  RocketIcon,
  BookOpenIcon,
  ExpandIcon,
  LightbulbIcon,
  CpuIcon,
  GlobeIcon,
  WalletIcon,
  HandshakeIcon
} from 'lucide-react';
import { FadeUp } from './ScrollAnimations';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const services = [
  {
    id: 'commercial',
    icon: BriefcaseIcon,
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
  },
  {
    id: 'investment',
    icon: TrendingUpIcon,
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
  },
  {
    id: 'realEstate',
    icon: BuildingIcon,
    color: 'coral',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
  },
  {
    id: 'corporate',
    icon: Building2Icon,
    color: 'navy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  },
  {
    id: 'sme',
    icon: RocketIcon,
    color: 'green',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80'
  },
  {
    id: 'islamic',
    icon: BookOpenIcon,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80'
  },
  {
    id: 'expansion',
    icon: ExpandIcon,
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
  },
  {
    id: 'newProjects',
    icon: LightbulbIcon,
    color: 'teal',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
  },
  {
    id: 'innovationTech',
    icon: CpuIcon,
    color: 'coral',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
  },
  {
    id: 'fdi',
    icon: GlobeIcon,
    color: 'navy',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80'
  },
  {
    id: 'workingCapital',
    icon: WalletIcon,
    color: 'green',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80'
  },
  {
    id: 'mergersAcquisitions',
    icon: HandshakeIcon,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80'
  }
];

const colorMap: Record<
  string,
  {
    badge: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
  }> =
{
  gold: {
    badge: 'bg-gold-100',
    badgeText: 'text-gold-700',
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-600'
  },
  teal: {
    badge: 'bg-teal-100',
    badgeText: 'text-teal-700',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  coral: {
    badge: 'bg-coral-100',
    badgeText: 'text-coral-700',
    iconBg: 'bg-coral-50',
    iconColor: 'text-coral-600'
  },
  navy: {
    badge: 'bg-navy-100',
    badgeText: 'text-navy-700',
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-600'
  },
  green: {
    badge: 'bg-green-100',
    badgeText: 'text-green-700',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  purple: {
    badge: 'bg-purple-100',
    badgeText: 'text-purple-700',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  }
};
function ServiceCard({
  service,
  index
}: {
  service: (typeof services)[0];
  index: number;
  t: ReturnType<typeof useTranslations>;
}) {
  const t = useTranslations('home.services.items');
  const IconComponent = service.icon;
  const colors = colorMap[service.color];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -4
      }}
      className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-full flex flex-col overflow-hidden group"
    >

      {/* Header Image */}
      <div className="h-32 w-full overflow-hidden relative">
        <Image
          width={100}
          height={100}
          src={service.image}
          alt={t(`${service.id}.title`)}
          className="w-full h-full object-cover img-fluid-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1 text-center ">
        {/* Badge */}
        <span
          className={`inline-block w-fit mx-auto  ${colors.badge} ${colors.badgeText} px-3 py-1 rounded-full text-fluid-label font-cairo font-bold mb-4`}
        >
          {t(`${service.id}.badge`)}
        </span>

        {/* Icon */}
        <div
          className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 mx-auto`}
        >
          <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-fluid-card-title font-cairo font-bold text-navy-900 mb-2 leading-tight">
          {t(`${service.id}.title`)}
        </h3>

        {/* Description */}
        <p className="text-fluid-body text-navy-500 font-tajawal leading-relaxed flex-1">
          {t(`${service.id}.description`)}
        </p>
      </div>
    </motion.div>
  );
}
export function ServicesSection() {
  const t = useTranslations('home.services');
  return (
    <section
      id="services"
      className="relative bg-alabaster py-24 md:py-32 overflow-hidden px-[5%] py-[2%]">

      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-coral-400/5 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-fluid-label tracking-wider mb-4">
              {t('badge')}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-6">
              {t('titleMain')}{' '}
              <span className="gradient-text-teal">{t('titleHighlight')}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-fluid-section-lead text-navy-600 mx-auto">
              {t('lead')}
            </p>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} t={t} />
          ))}
        </div>
      </div>

      {/* Subtle separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />
    </section>);

}