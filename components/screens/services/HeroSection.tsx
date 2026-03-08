'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection({ locale }: { locale: string }) {
  const isRtl = locale === 'ar';
  const t = useTranslations('servicesPage.hero');
  return (
    <section className="px-[5%] pt-[3%] relative min-h-[70vh] flex items-center bg-gradient-to-b from-[#0A1628] via-[#0A1628] to-[#111827] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-[#D4AF37]/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto px-[clamp(16px,4vw,48px)] py-[clamp(80px,12vh,128px)] grid lg:grid-cols-2 gap-[clamp(32px,6vw,80px)] items-center text-center lg:text-left">
        <motion.div
          className={`flex flex-col items-center lg:items-start ${isRtl ? 'lg:text-right lg:items-end' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
            <SparklesIcon className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-fluid-label font-medium text-[#D4AF37]">
              {t('badge')}
            </span>
          </div>

          <h1 className="font-heading font-bold text-fluid-hero text-white mb-4 leading-tight">
            {t('headlinePrefix')}
            <span className="text-[#D4AF37]"> {t('headlineHighlight')} </span>
            {t('headlineSuffix')}
          </h1>

          <p className="text-fluid-section-lead text-white/70 mb-8">
            {t('subheadline')}
          </p>

          <div
            className={`flex flex-wrap gap-4 justify-center ${
              isRtl ? 'lg:justify-end' : 'lg:justify-start'
            }`}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-gold text-[#0A1628] font-heading font-bold text-fluid-sm px-6 py-3 rounded-lg shadow-lg"
            >
              {t('primaryCta')}
              {!isRtl ? <ArrowRightIcon className="w-4 h-4" /> : <ArrowLeftIcon className="w-4 h-4" />}
            </motion.a>
            <span className="text-fluid-sm text-white/60">
              {t('meta')}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[350px]">
            <Image
              src="/imgs/92 An operational monitoring r/image_3.webp"
              alt="خدمات تمويلية"
              width={1920}
              height={1080}
              className="w-full h-[clamp(350px,45vh,500px)] min-h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-6 bg-white/95 rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="font-heading font-bold text-[#0A1628]">
                {t('cardTitle')}
              </div>
              <div className="text-fluid-xs text-[#64748B]">
                {t('cardSubtitle')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

