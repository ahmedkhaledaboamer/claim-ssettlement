'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { operatingLayers } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Layer images
const layerImages: string[] = [
'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'];

export function OperatingSystemSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeLayer, setActiveLayer] = useState(0);
  return (
    <section id="system" className="relative py-24 overflow-hidden bg-white">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
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
            <span className="text-slate-900">نظام</span>
            <span className="gradient-text-gold"> التشغيل</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            ٥ طبقات متكاملة تعمل بتناغم لضمان أفضل النتائج
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

            <div className="space-y-3">
              {operatingLayers.map((layer, index) => {
                const IconComponent = lucideIcons[layer.icon] || Icons.LayersIcon;
                const isActive = activeLayer === index;
                return (
                  <motion.button
                    key={layer.id}
                    whileHover={{
                      x: 10
                    }}
                    onClick={() => setActiveLayer(index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${isActive ? 'bg-teal-50 border-teal-200' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                    style={{
                      borderRight: isActive ?
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
                      className={`font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>

                      {layer.titleAr}
                    </span>

                    {/* Arrow */}
                    <Icons.ChevronLeftIcon
                      className={`w-5 h-5 mr-auto transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                      style={{
                        color: layer.color
                      }} />

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
              <div className="relative h-44 overflow-hidden">
                <img
                  src={layerImages[activeLayer]}
                  alt={operatingLayers[activeLayer].titleAr}
                  className="w-full h-full object-cover"
                  loading="lazy" />

                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, white, ${operatingLayers[activeLayer].color}20)`
                  }} />

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

                      الطبقة {operatingLayers[activeLayer].id}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                      {operatingLayers[activeLayer].titleAr}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  {operatingLayers[activeLayer].descriptionAr}
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