'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function WhyUsSection({ locale }: { locale: string }) {
  const isRtl = locale === 'ar';
  const t = useTranslations('servicesPage.whyUs');
  return (
    <section className="py-[clamp(64px,12vh,128px)] bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="relative max-w-[95%] md:max-w-[70%] mx-auto px-[clamp(16px,4vw,48px)]">
        <div className="grid lg:grid-cols-2 gap-[clamp(32px,6vw,80px)] items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="inline-block text-fluid-sm font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              {t('badge')}
            </span>
            <h2 className={`font-heading font-bold text-4xl text-white mb-6 ${!isRtl ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
              {t('title')}
            </h2>
            <p className={`text-fluid-lg text-white/70 mb-8 ${!isRtl ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
              {t('description')}
            </p>

            <ul className="space-y-4 self-start">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-fluid-base font-bold text-white">
                    {t('bullets.partners.title')}
                  </div>
                  <div className="text-fluid-sm text-white/60">
                    {t('bullets.partners.subtitle')}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-fluid-base font-bold text-white">
                    {t('bullets.successRate.title')}
                  </div>
                  <div className="text-fluid-sm text-white/60">
                    {t('bullets.successRate.subtitle')}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-fluid-base font-bold text-white">
                    {t('bullets.expertSupport.title')}
                  </div>
                  <div className="text-fluid-sm text-white/60">
                    {t('bullets.expertSupport.subtitle')}
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[350px]">
              <Image
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 800px"
                src="/imgs/An executive negotiation envir/image_50.webp"
                alt="فريق العمل"
                className="w-full h-[clamp(350px,45vh,500px)] min-h-[350px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center text-fluid-3xl font-heading font-bold text-[#D4AF37]">
                +2B
              </div>
              <div className="text-center text-fluid-sm text-[#64748B]">
                {t('cardSubtitle')}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

