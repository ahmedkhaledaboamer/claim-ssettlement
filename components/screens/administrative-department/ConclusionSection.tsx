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
import Image from 'next/image';
export function ConclusionSection({ locale }: { locale: string }) {
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt="مكتب حديث"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
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
            {locale === 'ar'
              ? 'الخلاصة'
              : locale === 'fr'
              ? 'En résumé'
              : 'In summary'}
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

          {locale === 'ar' && (
            <>
              <span className="gradient-text-gold">شريكك الاستراتيجي</span>
              <br />
              <span className="text-slate-900">في رحلة التمويل</span>
            </>
          )}
          {locale === 'en' && (
            <>
              <span className="gradient-text-gold">Your strategic partner</span>
              <br />
              <span className="text-slate-900">on the financing journey</span>
            </>
          )}
          {locale === 'fr' && (
            <>
              <span className="gradient-text-gold">Votre partenaire stratégique</span>
              <br />
              <span className="text-slate-900">dans votre parcours de financement</span>
            </>
          )}
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

          {locale === 'ar' && (
            <>
              جهاز إداري متكامل من{' '}
              <span className="text-teal-600 font-bold">15 منصباً تنفيذياً</span>{' '}
              يعمل بتناغم تام لتحويل طموحاتك التمويلية إلى واقع ملموس. من التحليل
              المالي الأولي حتى دعم ما بعد التمويل، نحن معك في كل خطوة.
            </>
          )}
          {locale === 'en' && (
            <>
              An integrated administrative apparatus of{' '}
              <span className="text-teal-600 font-bold">15 executive positions</span>{' '}
              working in complete harmony to turn your financing ambitions into reality.
              From initial financial analysis to post‑financing support, we are with you
              at every step.
            </>
          )}
          {locale === 'fr' && (
            <>
              Un appareil administratif intégré composé de{' '}
              <span className="text-teal-600 font-bold">15 postes exécutifs</span>{' '}
              qui travaillent en parfaite harmonie pour transformer vos ambitions de
              financement en réalité. De la première analyse financière à
              l’accompagnement post‑financement, nous sommes à vos côtés à chaque étape.
            </>
          )}
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
                {locale === 'ar'
                  ? 'عميل راضٍ'
                  : locale === 'fr'
                  ? 'Clients satisfaits'
                  : 'Satisfied clients'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <CheckCircleIcon className="w-8 h-8 text-data-emerald" />
            <div className="text-right">
              <div className="text-fluid-stat font-black text-data-emerald">94٪</div>
              <div className="text-fluid-body text-slate-500">
                {locale === 'ar'
                  ? 'نسبة النجاح'
                  : locale === 'fr'
                  ? 'Taux de réussite'
                  : 'Success rate'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <AwardIcon className="w-8 h-8 text-relations-blue" />
            <div className="text-right">
              <div className="text-fluid-stat font-black text-relations-blue">50+</div>
              <div className="text-fluid-body text-slate-500">
                {locale === 'ar'
                  ? 'جهة تمويلية'
                  : locale === 'fr'
                  ? 'Institutions financières'
                  : 'Funding institutions'}
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

          <motion.a
            href="/execution"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-lg shadow-lg overflow-hidden">

            <span className="relative z-10 flex items-center justify-center gap-2">
              {locale === 'ar'
                ? 'ابدأ رحلتك الآن'
                : locale === 'fr'
                ? 'Commencez votre parcours maintenant'
                : 'Start your journey now'}
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
              }} />

          </motion.a>

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
            {locale === 'ar'
              ? 'مجلس الإدارة'
              : locale === 'fr'
              ? 'Conseil d’administration'
              : 'Board of Directors'}
          </div>
          <div className="text-slate-500 text-sm">KIB Financing Brokerage</div>
        </motion.div>
      </div>
    </section>);

}