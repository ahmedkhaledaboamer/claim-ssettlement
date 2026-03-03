'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { serviceLevels } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
export function ServiceLevelsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedLevel, setSelectedLevel] = useState(2);
  return (
    <section id="levels" className="relative py-24 overflow-hidden bg-slate-50">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
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

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-slate-900">مستويات</span>
            <span className="gradient-text-gold"> الخدمة</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            ٥ مستويات خدمة مصممة لتلبية احتياجاتك مهما كان حجم مشروعك
          </p>
        </motion.div>

        {/* Pyramid Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
          {serviceLevels.map((level, index) => {
            const IconComponent = lucideIcons[level.icon] || Icons.StarIcon;
            const isSelected = selectedLevel === index;
            const height = 200 + index * 40;
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
                  className={`w-full bg-white rounded-2xl p-6 transition-all duration-300 border ${isSelected ? 'ring-2 border-transparent shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
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

                    المستوى {level.id}
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
                    className="text-lg font-bold text-center mb-3"
                    style={{
                      color: isSelected ? level.color : '#0F172A'
                    }}>

                    {level.titleAr}
                  </h3>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    {level.features.slice(0, 3).map((feature, i) =>
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-500">

                        <Icons.CheckIcon
                        className="w-3 h-3 flex-shrink-0"
                        style={{
                          color: level.color
                        }} />

                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    )}
                    {level.features.length > 3 &&
                    <div
                      className="text-xs text-center"
                      style={{
                        color: level.color
                      }}>

                        +{level.features.length - 3} مزايا أخرى
                      </div>
                    }
                  </div>

                  {/* Popular Badge for Executive */}
                  {index === 2 &&
                  <div className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
                      الأكثر طلباً
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
          className="mt-12 bg-white rounded-3xl p-8 max-w-4xl mx-auto border border-slate-200 shadow-md"
          style={{
            borderTop: `4px solid ${serviceLevels[selectedLevel].color}`
          }}>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Info */}
            <div className="flex-1">
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: serviceLevels[selectedLevel].color
                }}>

                {serviceLevels[selectedLevel].titleAr}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {serviceLevels[selectedLevel].descriptionAr}
              </p>
              <button
                className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{
                  backgroundColor: serviceLevels[selectedLevel].color
                }}>

                اختر هذا المستوى
              </button>
            </div>

            {/* Features */}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                المزايا المتضمنة:
              </h4>
              <div className="space-y-3">
                {serviceLevels[selectedLevel].features.map((feature, i) =>
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

                    <Icons.CheckCircleIcon
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: serviceLevels[selectedLevel].color
                    }} />

                    <span className="text-slate-700">{feature}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}