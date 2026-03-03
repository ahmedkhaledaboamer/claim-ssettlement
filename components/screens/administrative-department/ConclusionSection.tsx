 'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import {
  ArrowLeftIcon,
  SparklesIcon,
  UsersIcon,
  CheckCircleIcon,
  AwardIcon } from
'lucide-react';
export function ConclusionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const clientCount = useCountUp({
    end: 850,
    duration: 2500,
    enabled: isVisible
  });
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt="مكتب حديث"
          className="w-full h-full object-cover"
          loading="lazy" />

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
        className="relative z-10 max-w-5xl mx-auto px-6 text-center">

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
          <span className="text-sm text-slate-600">الخلاصة</span>
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
          className="text-4xl md:text-6xl font-black mb-8">

          <span className="gradient-text-gold">شريكك الاستراتيجي</span>
          <br />
          <span className="text-slate-900">في رحلة التمويل</span>
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
          className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">

          جهاز إداري متكامل من{' '}
          <span className="text-teal-600 font-bold">١٥ منصباً تنفيذياً</span>{' '}
          يعمل بتناغم تام لتحويل طموحاتك التمويلية إلى واقع ملموس. من التحليل
          المالي الأولي حتى دعم ما بعد التمويل، نحن معك في كل خطوة.
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
              <div className="text-2xl font-black text-teal-600">
                {clientCount}+
              </div>
              <div className="text-sm text-slate-500">عميل راضٍ</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <CheckCircleIcon className="w-8 h-8 text-data-emerald" />
            <div className="text-right">
              <div className="text-2xl font-black text-data-emerald">٩٤٪</div>
              <div className="text-sm text-slate-500">نسبة النجاح</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
            <AwardIcon className="w-8 h-8 text-relations-blue" />
            <div className="text-right">
              <div className="text-2xl font-black text-relations-blue">٥٠+</div>
              <div className="text-sm text-slate-500">جهة تمويلية</div>
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

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-lg shadow-lg overflow-hidden">

            <span className="relative z-10 flex items-center justify-center gap-2">
              ابدأ رحلتك الآن
              <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
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

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="px-10 py-4 rounded-full bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">

            تواصل مع الفريق
          </motion.button>
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
            مجلس الإدارة
          </div>
          <div className="text-slate-500 text-sm">KEP Financing Brokerage</div>
        </motion.div>
      </div>
    </section>);

}