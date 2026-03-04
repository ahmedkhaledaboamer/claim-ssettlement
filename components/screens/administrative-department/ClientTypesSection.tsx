'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { clientTypes } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

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
export function ClientTypesSection({ locale }: { locale: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
  const headingTitle =
    locale === 'ar'
      ? { main: 'من', highlight: ' نخدم' }
      : locale === 'fr'
      ? { main: 'Qui', highlight: ' servons‑nous ?' }
      : { main: 'Who', highlight: ' do we serve?' };

  const headingDescription =
    locale === 'ar'
      ? 'نقدم حلولاً تمويلية متخصصة لمختلف أنواع العملاء والقطاعات'
      : locale === 'fr'
      ? 'Nous proposons des solutions de financement spécialisées pour différents types de clients et de secteurs.'
      : 'We provide specialized financing solutions for different client types and sectors.';
  return (
    <section
      id="clients"
      className="relative p-[5%] overflow-hidden bg-slate-50">

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
            <span className="text-slate-900">{headingTitle.main}</span>
            <span className="gradient-text-gold">{headingTitle.highlight}</span>
          </h2>
          <p className="text-fluid-section-lead text-slate-600  ">
            {headingDescription}
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => {
            const IconComponent =
              lucideIcons[client.icon] || Icons.UserIcon;
            const title =
              locale === 'ar'
                ? client.titleAr
                : locale === 'fr'
                ? client.titleFr
                : client.titleEn;
            const description =
              locale === 'ar'
                ? client.descriptionAr
                : locale === 'fr'
                ? client.descriptionFr
                : client.descriptionEn;
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
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
                style={{
                  borderBottom: `3px solid ${client.color}`
                }}>

                {/* Client Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={clientImages[client.id]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={300}
                    />

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: client.color
                    }} />


                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-3 md:translate-x-0 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <IconComponent
                      className="w-6 h-6"
                      style={{
                        color: client.color
                      }} />

                  </div>
                </div>

                <div className={`p-6 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                  {/* Content */}
                  <h3
                    className="text-fluid-card-title font-bold mb-3 transition-colors duration-300 group-hover:text-slate-900"
                    style={{
                      color: client.color
                    }}>

                    {title}
                  </h3>
                  <p className="text-fluid-body text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}