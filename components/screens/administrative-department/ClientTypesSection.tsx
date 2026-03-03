'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { clientTypes } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Client type images
const clientImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
  2: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  3: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
  4: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
  5: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
  6: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
  7: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
  8: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop'
};
export function ClientTypesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <section
      id="clients"
      className="relative py-24 overflow-hidden bg-slate-50">

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
            <span className="text-slate-900">من</span>
            <span className="gradient-text-gold"> نخدم</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            نقدم حلولاً تمويلية متخصصة لمختلف أنواع العملاء والقطاعات
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => {
            const IconComponent =
              lucideIcons[client.icon] || Icons.UserIcon;
            return (
              <motion.div
                key={client.id}
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
                  delay: index * 0.08
                }}
                whileHover={{
                  y: -8
                }}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
                style={{
                  borderBottom: `3px solid ${client.color}`
                }}>

                {/* Client Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={clientImages[client.id]}
                    alt={client.titleAr}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy" />

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: client.color
                    }} />


                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <IconComponent
                      className="w-6 h-6"
                      style={{
                        color: client.color
                      }} />

                  </div>
                </div>

                <div className="p-6">
                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-slate-900"
                    style={{
                      color: client.color
                    }}>

                    {client.titleAr}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {client.descriptionAr}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: client.color
                      }}>

                      اكتشف المزيد
                    </span>
                    <Icons.ArrowLeftIcon
                      className="w-4 h-4"
                      style={{
                        color: client.color
                      }} />

                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}