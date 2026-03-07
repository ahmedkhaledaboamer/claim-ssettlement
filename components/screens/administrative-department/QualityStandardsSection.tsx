'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { qualityStandards } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
function QualityGauge({
  standard,
  index,
  isVisible
}: {
  standard: (typeof qualityStandards)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp({
    end: standard.value,
    duration: 2000,
    delay: index * 200,
    enabled: isVisible
  });
  const IconComponent =
    lucideIcons[standard.icon] || Icons.TargetIcon;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - count / 100 * circumference;
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={
      isVisible ?
      {
        opacity: 1,
        scale: 1
      } :
      {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className="bg-white rounded-3xl p-6 text-center group border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">

      {/* Gauge */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="8" />

          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={standard.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference
            }}
            animate={{
              strokeDashoffset: isVisible ? strokeDashoffset : circumference
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              ease: 'easeOut'
            }} />

        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-black text-fluid-2xl"
            style={{
              color: standard.color
            }}>

            {count}٪
          </span>
        </div>
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${standard.color}10`
        }}>

        <IconComponent
          className="w-6 h-6"
          style={{
            color: standard.color
          }} />

      </div>

      {/* Title */}
      <h3 className="text-fluid-body-lg font-bold text-slate-900">
        {standard.titleAr}
      </h3>
    </motion.div>);

}
export function QualityStandardsSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.qualityStandards');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <section id="quality" className="relative p-[5%] overflow-hidden bg-white">
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

        {/* Quality Gauges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {qualityStandards.map((standard, index) =>
          <QualityGauge
            key={standard.id}
            standard={{
              ...standard,
              titleAr: t(`standards.${standard.id}`)
            }}
            index={index}
            isVisible={isVisible} />

          )}
        </div>

        {/* Bottom Statement */}
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
            delay: 0.6
          }}
          className="mt-16 text-center">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
            <Icons.AwardIcon className="w-6 h-6 text-teal-600" />
            <span className="text-slate-700 font-medium text-fluid-body">
              {t('approvedBy')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}