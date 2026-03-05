"use client";
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Lock,
  Award,
  Sparkles,
  Phone,
  MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { useTranslations, useLocale } from 'next-intl';

export function ContactCTA() {
  const t = useTranslations('executionPage.contactCta');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const { ref, controls, variants } = useScrollReveal();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const trustBadges = [
    { key: 'governance' as const, icon: ShieldCheck },
    { key: 'security' as const, icon: Lock },
    { key: 'confidentiality' as const, icon: Award },
    { key: 'support' as const, icon: MessageCircle },
  ];
  return (
    <section className="relative px-[5%] py-[2%] bg-cream-50 overflow-hidden">
      {/* Background photo - visible and light */}
      <div className="absolute inset-0 z-0 min-h-[320px]">
        <img
          src="/imgs/A cash flow continuity concept/image_28.webp"
          alt="Modern Office"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-10 min-h-[320px]" />

      </div>

      {/* Soft floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      <div className="w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Photo side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-1/2 hidden lg:block">

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
                <img
                  src="/imgs/A corporate advisory workspace/image_27.webp"
                  alt="Corporate Building"
                  width={800}
                  height={600}
                  className="w-full h-[500px] min-h-[400px] object-cover" />

              </div>
              {/* Overlapping smaller photo */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.3
                }}
                className="absolute -bottom-8 -right-8 w-64 h-52 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white min-h-[200px]">

                <img
                  src="/imgs/A debt restructuring scene whe/image_30.webp"
                  alt="Business Handshake"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover" />

              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`lg:w-1/2 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 bg-gold-500/10"
            >
              <Sparkles className="w-5 h-5 text-gold-600" />
              <span className="text-gold-700 text-sm md:text-base font-bold tracking-wider">
                {t('badge')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-navy-900 mb-8 leading-[1.15]"
            >
              {t('title')}{' '}
              <span className="text-gradient-gold block mt-2">
                {t('titleHighlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-[1.9] mb-14 font-light"
            >
              {t('lead')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
            >

              <motion.a
                href="tel:+0000000000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-10 py-6 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>{t('ctaSecondary')}</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.key}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <badge.icon className="w-5 h-5 text-gold-600" />
                  <span className="text-navy-900 text-sm font-medium">
                    {t(badge.key)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-gray-500 text-base md:text-lg text-center lg:text-start"
            >
              {t('finalMessage')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>);

}