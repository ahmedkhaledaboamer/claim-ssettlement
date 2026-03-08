'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { operatingLayers } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Layer images
const layerImages: string[] = [
  '/imgs/A promisedriven executive scen/image_55.webp', '/imgs/A promisedriven executive scen/image_57.webp', '/imgs/A refined executive financial/image_31.webp', '/imgs/A refined executive financial/image_53.webp', '/imgs/A refined executive reception/image_33.webp'
];

export function OperatingSystemSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.operatingSystem');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeLayer, setActiveLayer] = useState(0);
  const isRTL = locale === 'ar';
  return (
    <section id="system" className="relative p-[5%] overflow-hidden bg-white">
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

        {/* Layers Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Layer Stack */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative">

            <div className="space-y-3 p-5">
              {operatingLayers.map((layer, index) => {
                const IconComponent = lucideIcons[layer.icon] || Icons.LayersIcon;
                const isActive = activeLayer === index;
                const layerTitle = t(`layers.${layer.id}.title`);
                return (
                  <motion.button
                    key={layer.id}
                    whileHover={{
                      x: 10
                    }}
                    onClick={() => setActiveLayer(index)}
                    className={`cursor-pointer w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isActive ? 'bg-teal-50 border-teal-200' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                    style={{
                      borderRight: isRTL && isActive ?
                      `4px solid ${layer.color}` :
                      '4px solid transparent',
                      borderLeft: !isRTL && isActive ?
                      `4px solid ${layer.color}` :
                      '4px solid transparent'
                    }}>

                    {/* Layer Number */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{
                        backgroundColor: isActive ?
                        layer.color :
                        `${layer.color}15`,
                        color: isActive ? '#fff' : layer.color
                      }}>

                      {layer.id}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${layer.color}10`
                      }}>

                      <IconComponent
                        className="w-5 h-5"
                        style={{
                          color: layer.color
                        }} />

                    </div>

                    {/* Title */}
                    <span
                      className={`${!isRTL ? 'text-left' : 'text-right'} md:text-center font-bold text-fluid-body-lg transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>

                      {layerTitle}
                    </span>

                    {/* Arrow */}
                    {!isRTL ? <Icons.ChevronRightIcon className="w-5 h-5 mr-auto transition-all duration-300" /> : <Icons.ChevronLeftIcon className="w-5 h-5 mr-auto transition-all duration-300" />}
                  </motion.button>);

              })}
            </div>
          </motion.div>

          {/* Layer Details */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.8,
              delay: 0.4
            }}>

            <motion.div
              key={activeLayer}
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md"
              style={{
                borderTop: `4px solid ${operatingLayers[activeLayer].color}`
              }}>

              {/* Layer Image */}
              <div className="relative h-48 md:h-56 min-h-120 overflow-hidden">
                <Image
                  src={layerImages[activeLayer]}
                  alt={t(`layers.${operatingLayers[activeLayer].id}.title`)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy" />

              </div>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${operatingLayers[activeLayer].color}10`
                    }}>

                    {(() => {
                      const IconComponent =
                        lucideIcons[operatingLayers[activeLayer].icon] || Icons.LayersIcon;
                      return (
                        <IconComponent
                          className="w-8 h-8"
                          style={{
                            color: operatingLayers[activeLayer].color
                          }} />);


                    })()}
                  </div>
                  <div>
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${operatingLayers[activeLayer].color}10`,
                        color: operatingLayers[activeLayer].color
                      }}>

                      {t('layerLabel', { id: operatingLayers[activeLayer].id })}
                    </span>
                    <h3 className="md:text-fluid-2xl text-fluid-xl font-bold text-slate-900 mt-2">
                      {t(`layers.${operatingLayers[activeLayer].id}.title`)}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-fluid-body text-slate-600 leading-relaxed">
                  {t(`layers.${operatingLayers[activeLayer].id}.description`)}
                </p>

                {/* Visual Indicator */}
                <div className="mt-8 flex gap-2">
                  {operatingLayers.map((layer, index) =>
                  <div
                    key={layer.id}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${index <= activeLayer ? '' : 'opacity-30'}`}
                    style={{
                      backgroundColor: layer.color
                    }} />

                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}