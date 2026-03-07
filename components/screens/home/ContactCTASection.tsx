'use client';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { FadeUp } from './ScrollAnimations';
import { useTranslations } from 'next-intl';

export function ContactCTASection({ locale }: { locale: string }) {
  const isRTL = locale === 'ar';
  const t = useTranslations('home.contactCta');
  return (
    <section
      id="contact"
      className="relative py-28 md:py-32 overflow-hidden bg-pearl">

      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-coral-400/5 rounded-full blur-3xl" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 right-20 w-40 h-40 border-2 border-gold-300/30 rounded-full" />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-60 h-60 border-2 border-teal-300/20 rounded-full" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/3 left-1/4 w-20 h-20 border border-coral-300/20"
          style={{
            clipPath:
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }} />

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-200/20 rounded-xl rotate-12" />

      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <FadeUp>
          <span className="inline-block text-gold-600 font-cairo font-bold text-xl tracking-wider mb-6">
            {t('badge')}
          </span>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-6">
            {t('titleMain')}{' '}
            <span className="gradient-text-gold">{t('titleHighlight')}</span>
          </h2>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.2}>
          <p className="text-fluid-section-lead text-navy-600 mx-auto mb-12 leading-relaxed">
            {t('lead')}
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/execution"
                className="btn-luxury-gold px-10 py-5 rounded-full font-cairo font-bold text-fluid-body-lg flex items-center gap-3 shadow-gold-lg"
              >
                {t('primaryCta')}
                <motion.span
                  animate={{
                    x: [0, -5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  {!isRTL ? <ArrowRightIcon size={20} /> : <ArrowLeftIcon size={20} />}
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </FadeUp>

        {/* Contact Info Grid */}
        <FadeUp delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <a
              href="tel:+971521068882"
              className="flex flex-col items-center gap-3 bg-white rounded-2xl p-7 md:p-8 hover:shadow-xl transition-shadow group border border-navy-100 shadow-lg">

              <div className="w-16 h-16 bg-gold-100 group-hover:bg-gold-200 rounded-xl flex items-center justify-center transition-colors">
                <PhoneIcon className="w-7 h-7 text-gold-600" />
              </div>
              <span className="text-navy-600 font-tajawal text-fluid-body" dir="ltr">
                +971521068882
              </span>
            </a>

            <a
              href="mailto:info@shazmlc.com"
              className="flex flex-col items-center gap-3 bg-white rounded-2xl p-7 md:p-8 hover:shadow-xl transition-shadow group border border-navy-100 shadow-lg">

              <div className="w-16 h-16 bg-teal-100 group-hover:bg-teal-200 rounded-xl flex items-center justify-center transition-colors">
                <MailIcon className="w-7 h-7 text-teal-600" />
              </div>
              <span className="text-navy-600 font-tajawal text-fluid-body">
                info@shazmlc.com
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>);

}