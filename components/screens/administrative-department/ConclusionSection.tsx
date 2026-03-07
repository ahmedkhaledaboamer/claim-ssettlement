'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import {
  ArrowLeftIcon,
  SparklesIcon,
  UsersIcon,
  CheckCircleIcon,
  AwardIcon,
  ArrowRightIcon } from
'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export function ConclusionSection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.conclusion');
  const isRTL = locale === 'ar';
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const clientCount = useCountUp({
    end: 850,
    duration: 2500,
    enabled: isVisible
  });
  return (
    <section className="relative p-[5%] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/A powerful executive command c/image_40.webp"
          alt={t('officeAlt')}
          className="w-full h-full object-cover min-h-[40vh]"
          loading="lazy"
          width={1920}
          height={1080}
          sizes="100vw"
          />

        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
            'radial-gradient(circle, rgba(14, 116, 144, 0.15) 0%, transparent 70%)'
          }} />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)'
          }} />

      </div>

      <div
        ref={ref}
        className="relative z-10   text-center">

        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
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
            duration: 0.6
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">

          <SparklesIcon className="w-4 h-4 text-teal-600" />
          <span className="text-fluid-label text-slate-600">
            {t('badge')}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
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
          duration: 0.8,
          delay: 0.1
          }}
          className="text-fluid-section-title font-black mb-8">

          <span className="gradient-text-gold">{t('titleLine1')}</span>
          <br />
          <span className="text-slate-900">{t('titleLine2')}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20
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
          duration: 0.8,
          delay: 0.2
          }}
          className="text-fluid-section-lead text-slate-600   mb-12 leading-relaxed">

          {t('description')}
          </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
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
            duration: 0.8,
            delay: 0.3
          }}
          className="flex flex-wrap justify-center gap-8 mb-12">

          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <UsersIcon className="w-8 h-8 text-teal-600" />
            <div className="text-right">
              <div className="text-fluid-stat font-black text-teal-600">
                {clientCount}+
              </div>
              <div className="text-fluid-body text-slate-500">
                {t('statClients')}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <CheckCircleIcon className="w-8 h-8 text-data-emerald" />
            <div className="text-right">
              <div className="text-fluid-stat font-black text-data-emerald">94٪</div>
              <div className="text-fluid-body text-slate-500">
                {t('statSuccess')}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <AwardIcon className="w-8 h-8 text-relations-blue" />
            <div className="text-right">
              <div className="text-fluid-stat font-black text-relations-blue">50+</div>
              <div className="text-fluid-body text-slate-500">
                {t('statInstitutions')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
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
            duration: 0.8,
            delay: 0.4
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center">

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/execution"
              className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-lg shadow-lg overflow-hidden block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('cta')}
                {isRTL ? <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400"
                initial={{
                  x: '100%'
                }}
                whileHover={{
                  x: 0
                }}
                transition={{
                  duration: 0.3
                }}
              />
            </Link>
          </motion.div>

        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={
          isVisible ?
          {
            opacity: 1
          } :
          {}
          }
          transition={{
            duration: 1,
            delay: 0.6
          }}
          className="mt-16 pt-8 border-t border-slate-200">

          <div className="text-teal-600 font-bold text-lg mb-2">
            {t('signature')}
          </div>
          <div className="text-slate-500 text-sm">{t('signatureSub')}</div>
        </motion.div>
      </div>
    </section>);

}