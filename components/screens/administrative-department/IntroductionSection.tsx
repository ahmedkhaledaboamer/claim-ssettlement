'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  TargetIcon,
  UsersIcon,
  ShieldCheckIcon,
  TrendingUpIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const featureIcons = [TargetIcon, UsersIcon, ShieldCheckIcon, TrendingUpIcon];
const featureColors = ['#0E7490', '#0F52BA', '#DC143C', '#D97706'];
const featureImages = [
  '/imgs/A refined financial identity w/image_0.webp',
  '/imgs/A refined real estate financin/image_22.webp',
  '/imgs/A resultsoriented visualizatio/image_62.webp',
  '/imgs/A risk management control room/image_24.webp'
];

export function IntroductionSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.introduction');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
  const features = [
    { title: t('features.0.title'), description: t('features.0.description'), icon: featureIcons[0], color: featureColors[0], image: featureImages[0] },
    { title: t('features.1.title'), description: t('features.1.description'), icon: featureIcons[1], color: featureColors[1], image: featureImages[1] },
    { title: t('features.2.title'), description: t('features.2.description'), icon: featureIcons[2], color: featureColors[2], image: featureImages[2] },
    { title: t('features.3.title'), description: t('features.3.description'), icon: featureIcons[3], color: featureColors[3], image: featureImages[3] }
  ];
  return (
    <section id="introduction" className="relative p-[5%] overflow-hidden bg-slate-50">
      <div ref={ref} className="relative z-10 ">
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
          <p className="text-fluid-section-lead text-slate-600   leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const title = feature.title;
            const description = feature.description;
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
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="group relative">

                <div className="bg-white rounded-2xl overflow-hidden h-full border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
                  {/* Feature Image */}
                  <div className="relative h-[clamp(180px,22vw,600px)]   overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={title}
                      width={500}
                      height={320}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy" />

                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundColor: feature.color
                      }} />

                  </div>

                    <div className={`p-6 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                        isRTL ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'
                      }`}
                      style={{
                        backgroundColor: `${feature.color}10`
                      }}>

                      <Icon
                        className="w-7 h-7"
                        style={{
                          color: feature.color
                        }} />

                    </div>

                    {/* Content */}
                    <h3 className="text-fluid-body-lg font-bold text-slate-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-fluid-body text-slate-500">
                      {description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div
                    className="w-[95%] mx-auto absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: feature.color
                    }} />

                </div>
              </motion.div>);

          })}
        </div>

        {/* Quote */}
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
            duration: 0.8,
            delay: 0.5
          }}
          className="mt-16 text-center">

          <blockquote className="text-fluid-section-lead text-slate-700 italic ">
            {t('quote')}
          </blockquote>
          <div className="mt-4 text-teal-600 font-semibold text-fluid-body">
            {t('quoteAuthor')}
          </div>
        </motion.div>
      </div>
    </section>);

}