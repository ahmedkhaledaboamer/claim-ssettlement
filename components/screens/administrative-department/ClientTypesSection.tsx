'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { clientTypes } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Client type images
const clientImages: Record<number, string> = {
  1: '/imgs/A premium financial services w/image_54.webp', 2: '/imgs/A premium influence concept in/image_14.webp', 3: '/imgs/A prestigious governance counc/image_49.webp', 4: '/imgs/A prestigious institutional su/image_12.webp',
  5: '/imgs/A principlesbased structure co/image_59.webp', 6: '/imgs/A professional funding file co/image_60.webp', 7: '/imgs/A project finance visualizatio/image_31.webp', 8: '/imgs/A promisedriven executive conc/image_60.webp'
};
export function ClientTypesSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.clientTypes');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
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
            <span className="text-slate-900">{t('headingMain')}</span>
            <span className="gradient-text-gold">{t('headingHighlight')}</span>
          </h2>
          <p className="text-fluid-section-lead text-slate-600  ">
            {t('description')}
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => {
            const IconComponent =
              lucideIcons[client.icon] || Icons.UserIcon;
            const title = t(`types.${client.id}.title`);
            const description = t(`types.${client.id}.description`);
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
                <div className="relative h-40 md:h-48 xl:h-94 overflow-hidden">
                  <Image
                    src={clientImages[client.id]}
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