'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  SearchIcon,
  FileTextIcon,
  SendIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  LifeBuoyIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const serviceIcons = [SearchIcon, ShieldIcon, FileTextIcon, UsersIcon, SendIcon, ScaleIcon, ClockIcon, CheckCircleIcon, LifeBuoyIcon, TrendingUpIcon];
const serviceColors = ['#046307', '#FFBF00', '#9966CC', '#0F52BA', '#0047AB', '#D97706', '#B87333', '#DC143C', '#0E7490', '#DC143C'];
const serviceImages = [
  '/imgs/A secured financing concept sh/image_51.webp',
  '/imgs/A sophisticated financial ecos/image_53.webp',
  '/imgs/A stability and competitivenes/image_4.webp',
  '/imgs/A strategic capital planning s/image_44.webp',
  '/imgs/A strategic expansion visualiz/image_16.webp',
  '/imgs/A strategic financial analysis/image_48.webp',
  '/imgs/A strategic financial partners/image_6.webp',
  '/imgs/A structured financial ecosyst/image_47.webp',
  '/imgs/A structured financial ecosyst/image_60.webp',
  '/imgs/A structured information envir/image_62.webp'
];

export function WhatWeDoSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.whatWeDo');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
  const services = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ({
    icon: serviceIcons[i],
    title: t(`services.${i}.title`),
    description: t(`services.${i}.description`),
    color: serviceColors[i],
    image: serviceImages[i]
  }));
  const _headingTitle =
    locale === 'ar'
      ? { main: 'ماذا', highlight: ' نقدم' }
      : locale === 'fr'
      ? { main: 'Ce que', highlight: ' nous offrons' }
      : { main: 'What', highlight: ' we do' };

  const headingDescription =
    locale === 'ar'
      ? 'خدمات متكاملة تغطي كل جوانب رحلتك التمويلية من البداية حتى ما بعد الإغلاق'
      : locale === 'fr'
      ? 'Des services intégrés qui couvrent tous les aspects de votre parcours de financement, du début jusqu’après la clôture.'
      : 'Integrated services that cover every aspect of your financing journey from start to post‑closing.';
  return (
    <section id="services" className="relative p-[5%] overflow-hidden bg-white">
      <div ref={ref} className="relative z-10  ">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">

          <h2 className="text-fluid-section-title font-black mb-6">
            <span className="text-slate-900">{t('headingMain')}</span>
            <span className="gradient-text-gold">{t('headingHighlight')}</span>
          </h2>
          <p className="text-fluid-section-lead text-slate-600  ">
            {t('description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title = service.title;
            const description = service.description;
            return (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                animate={
                isVisible ?
                {
                  opacity: 1,
                  y: 0
                } :
                {}
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}
                whileHover={{
                  y: -5
                }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">

                {/* Service Image */}
                <div className="relative h-[clamp(180px,22vw,500px)]   overflow-hidden">
                  <Image
                    src={service.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    />

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: service.color
                    }} />

                </div>

                <div className={`p-5 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                      isRTL ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'
                    }`}
                    style={{
                      backgroundColor: `${service.color}10`
                    }}>

                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: service.color
                      }} />

                  </div>

                  {/* Content */}
                  <h3 className="text-fluid-card-title font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {title}
                  </h3>
                  <p className="text-fluid-body text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: service.color
                  }} />

              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}