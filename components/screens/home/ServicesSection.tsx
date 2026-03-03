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
  GlobeIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const services = [
{
  icon: BriefcaseIcon,
  title: 'وساطة التمويل التجاري',
  description: 'حلول تمويلية متكاملة للأنشطة التجارية',
  badge: 'تجاري',
  color: 'gold',
  image:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
},
{
  icon: TrendingUpIcon,
  title: 'وساطة التمويل الاستثماري',
  description: 'تمويل المشاريع الاستثمارية الواعدة',
  badge: 'استثماري',
  color: 'teal',
  image:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
},
{
  icon: BuildingIcon,
  title: 'وساطة التمويل العقاري',
  description: 'تمويل شراء وتطوير العقارات',
  badge: 'عقاري',
  color: 'coral',
  image:
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
},
{
  icon: Building2Icon,
  title: 'وساطة تمويل الشركات',
  description: 'حلول مالية للشركات الكبرى',
  badge: 'شركات',
  color: 'navy',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
},
{
  icon: RocketIcon,
  title: 'وساطة تمويل المشاريع الصغيرة والمتوسطة',
  description: 'دعم نمو المشاريع الناشئة',
  badge: 'SME',
  color: 'green',
  image:
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80'
},
{
  icon: BookOpenIcon,
  title: 'وساطة التمويل الإسلامي',
  description: 'تمويل متوافق مع الشريعة الإسلامية',
  badge: 'إسلامي',
  color: 'purple',
  image:
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80'
},
{
  icon: ExpandIcon,
  title: 'وساطة تمويل التوسع والتطوير',
  description: 'تمويل خطط التوسع والنمو',
  badge: 'توسع',
  color: 'gold',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
},
{
  icon: LightbulbIcon,
  title: 'وساطة تمويل المشاريع الجديدة',
  description: 'تمويل الأفكار والمشاريع الجديدة',
  badge: 'جديد',
  color: 'teal',
  image:
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
},
{
  icon: CpuIcon,
  title: 'وساطة تمويل الابتكار والتقنية',
  description: 'تمويل المشاريع التقنية المبتكرة',
  badge: 'تقنية',
  color: 'coral',
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
},
{
  icon: GlobeIcon,
  title: 'وساطة التمويل الخارجي (FDI)',
  description: 'جذب الاستثمارات الأجنبية المباشرة',
  badge: 'دولي',
  color: 'navy',
  image:
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80'
}];

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



}: {service: (typeof services)[0];index: number;}) {
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
      className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-full flex flex-col overflow-hidden group">

      {/* Header Image */}
      <div className="h-32 w-full overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Badge */}
        <span
          className={`inline-block self-start ${colors.badge} ${colors.badgeText} px-3 py-1 rounded-full text-xs font-cairo font-bold mb-4`}>

          {service.badge}
        </span>

        {/* Icon */}
        <div
          className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>

          <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-cairo font-bold text-navy-900 mb-2 leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-navy-500 font-tajawal leading-relaxed flex-1">
          {service.description}
        </p>
      </div>
    </motion.div>);

}
export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-alabaster py-24 md:py-32 overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-coral-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-4">
              حلول تمويلية متكاملة
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              خدماتنا <span className="gradient-text-teal">الأساسية</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نقدّم منظومة وساطة تمويلية متكاملة تغطي جميع احتياجاتك المالية
            </p>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {services.map((service, index) =>
          <ServiceCard key={index} service={service} index={index} />
          )}
        </div>
      </div>

      {/* Subtle separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />
    </section>);

}