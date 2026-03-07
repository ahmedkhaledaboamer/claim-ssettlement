'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { serviceLevels } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
export function ServiceLevelsSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.serviceLevels');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedLevel, setSelectedLevel] = useState(2);
  const isRTL = locale === 'ar';
  return (
    <section id="levels" className="relative p-[5%] overflow-hidden bg-slate-50">
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

        {/* Pyramid Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
          {serviceLevels.map((level, index) => {
            const IconComponent = lucideIcons[level.icon] || Icons.StarIcon;
            const isSelected = selectedLevel === index;
            const height = 200 + index * 40;
            const title = t(`levels.${level.id}.title`);
            const features = t.raw(`levels.${level.id}.features`) as string[];
            return (
              <motion.div
                key={level.id}
                initial={{
                  opacity: 0,
                  y: 50
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
                className="relative">

                <motion.button
                  whileHover={{
                    y: -10
                  }}
                  onClick={() => setSelectedLevel(index)}
                  className={`cursor-pointer w-full bg-white rounded-2xl p-6 transition-all duration-300 border ${isSelected ? 'ring-2 border-transparent shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
                  style={{
                    minHeight: height,
                    borderTop: `4px solid ${level.color}`
                  }}>

                  {/* Level Badge */}
                  <div
                    className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      backgroundColor: level.color
                    }}>

                    {t('levelLabel', { id: level.id })}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: `${level.color}10`
                    }}>

                    <IconComponent
                      className="w-7 h-7"
                      style={{
                        color: level.color
                      }} />

                  </div>

                  {/* Title */}
                  <h3
                    className="text-fluid-body-lg font-bold text-center mb-3"
                    style={{
                      color: isSelected ? level.color : '#0F172A'
                    }}>

                    {title}
                  </h3>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    {features.slice(0, 3).map((feature, i) =>
                    <div
                      key={i}
                      className="flex items-center gap-2 text-fluid-body text-slate-500">

                        <Icons.CheckIcon
                        className="w-3 h-3 flex-shrink-0"
                        style={{
                          color: level.color
                        }} />

                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    )}
                    {features.length > 3 &&
                    <div
                      className="text-fluid-label text-center"
                      style={{
                        color: level.color
                      }}>

                        {t('moreFeatures', { count: features.length - 3 })}
                      </div>
                    }
                  </div>

                  {/* Popular Badge for Executive */}
                  {index === 2 &&
                  <div className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
                      {t('mostPopular')}
                    </div>
                  }
                </motion.button>
              </motion.div>);

          })}
        </div>

        {/* Selected Level Details */}
        <motion.div
          key={selectedLevel}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="mt-12 bg-white rounded-3xl p-8   border border-slate-200 shadow-md"
          style={{
            borderTop: `4px solid ${serviceLevels[selectedLevel].color}`
          }}>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Info */}
            <div className="flex-1">
              <h3
                className="text-fluid-2xl font-bold mb-4"
                style={{
                  color: serviceLevels[selectedLevel].color
                }}>

                {t(`levels.${serviceLevels[selectedLevel].id}.title`)}
              </h3>
              <p className="text-fluid-body text-slate-600 leading-relaxed mb-6">
                {t(`levels.${serviceLevels[selectedLevel].id}.description`)}
              </p>
            </div>

            {/* Features */}
            <div className="flex-1">
              <h4 className="text-fluid-body-lg font-bold text-slate-900 mb-4">
                {t('includedFeatures')}
              </h4>
              <div className="space-y-3">
                {(t.raw(`levels.${serviceLevels[selectedLevel].id}.features`) as string[]).map((feature, i) =>
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

                    <Icons.CheckCircleIcon
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: serviceLevels[selectedLevel].color
                    }} />

                    <span className="text-fluid-body text-slate-700">{feature}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}