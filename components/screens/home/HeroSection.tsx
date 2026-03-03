'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDownIcon,
  ArrowLeftIcon,
  TrendingUpIcon,
  UsersIcon,
  AwardIcon,
  ShieldCheckIcon,
} from 'lucide-react';

// ─── Animation Variants ──────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatDelayedVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
  },
};

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label, iconBg, iconColor, motionVariants, className, initial, animate, transition }: { icon: React.ElementType, value: string, label: string, iconBg: string, iconColor: string, motionVariants: any, className: string, initial: any, animate: any, transition: any }) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={`absolute bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-2xl shadow-charcoal-900/10 border border-white/80 flex items-center gap-4 ${className}`}
    >
      <motion.div variants={motionVariants} animate="animate">
        {/* intentionally empty — motion wrapper on parent handles float */}
      </motion.div>
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div dir="rtl">
        <p className="font-cairo font-bold text-charcoal-900 text-xl leading-none mb-1">{value}</p>
        <p className="font-tajawal text-stone-500 text-sm leading-none">{label}</p>
      </div>
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      dir="rtl"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8faf9 0%, #f0f5f2 40%, #eef3f8 100%)' }}
    >
      {/* ── Layered Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial mesh */}
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(180,120,60,0.07) 0%, transparent 70%)' }} />

        {/* Animated blobs */}
        <div className="absolute top-16 right-16 w-80 h-80 rounded-full opacity-40 animate-blob"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-48 left-8 w-64 h-64 rounded-full opacity-30 animate-blob animation-delay-2000"
          style={{ background: 'radial-gradient(circle, rgba(180,120,60,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-25 animate-blob animation-delay-4000"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 min-h-screen px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 xl:gap-16 items-center py-24 lg:py-0">

          {/* ── Text Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
            className="order-2 lg:order-1 text-right"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-7 inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-tajawal text-charcoal-700 font-medium" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>
                شريكك المالي الموثوق في الإمارات
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-cairo font-bold text-charcoal-900 mb-5 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)' }}
            >
              كيه إي بي
              <span className="block mt-2" style={{
                background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                لوساطة التمويل
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-cairo font-semibold mb-6"
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                background: 'linear-gradient(90deg, #92400e, #b97932)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              نربطك بالتمويل المناسب… ونصنع لك طريقًا ماليًا آمنًا للنمو
            </motion.p>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="font-tajawal text-stone-600 mb-10 leading-[1.9]   lg:ml-0"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}
            >
              في بيئة مالية تتغير فيها الشروط بسرعة، وتزداد فيها متطلبات التوسع،
              تحتاج الشركات ورجال الأعمال إلى جهة تفهم احتياجاتهم المالية بعمق،
              وتعرف كيف تختار لهم الجهة التمويلية المناسبة، وتضمن لهم أفضل
              الشروط وأسرع الموافقات.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-xl overflow-hidden font-cairo font-bold text-white flex items-center justify-center gap-3 shadow-lg"
                style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
                  background: 'linear-gradient(135deg, #b97932 0%, #d4922a 50%, #c48228 100%)',
                  boxShadow: '0 8px 32px rgba(180,121,50,0.35)',
                }}
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">ابدأ رحلتك</span>
                <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform relative" />
              </motion.button>

              {/* Secondary */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#about')}
                className="w-full sm:w-auto px-8 py-4 bg-white/70 backdrop-blur-sm text-emerald-800 border border-emerald-200/80 font-cairo font-semibold rounded-xl shadow-sm hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}
              >
                تعرّف علينا
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 flex-wrap"
            >
              {[
                { icon: ShieldCheckIcon, text: 'مرخّص رسمياً' },
                { icon: AwardIcon, text: '+١٠ سنوات خبرة' },
                { icon: TrendingUpIcon, text: 'أفضل الشروط مضمونة' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-stone-500">
                  <Icon className="w-4 h-4 text-emerald-500" />
                  <span className="font-tajawal text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative dot grid */}
            <div
              className="absolute -top-8 -right-8 w-36 h-36 opacity-25 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#10B981 2px, transparent 2px)', backgroundSize: '18px 18px' }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-28 h-28 opacity-20 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#b97932 2px, transparent 2px)', backgroundSize: '14px 14px' }}
            />

            {/* Main image frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 0 0 8px rgba(255,255,255,0.9)' }}>
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80"
                alt="Dubai aerial view"
                className="w-full h-[420px] lg:h-[560px] object-cover"
                style={{ filter: 'saturate(1.1) contrast(1.02)' }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,150,105,0.35) 0%, transparent 60%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />

              {/* Bottom caption strip */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center gap-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-tajawal text-white/90 text-sm">دبي — مركز التمويل الإقليمي</span>
              </div>
            </div>

            {/* ── Stat: Clients ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-4 lg:-left-10"
            >
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/80 flex items-center gap-4"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <UsersIcon className="w-5 h-5" />
                  </div>
                  <div dir="rtl">
                    <p className="font-cairo font-bold text-charcoal-900 text-xl leading-none mb-1">+500</p>
                    <p className="font-tajawal text-stone-400 text-sm">عميل راضٍ</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Stat: Approval ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-10 -right-4 lg:-right-10"
            >
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/80 flex items-center gap-4"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <TrendingUpIcon className="w-5 h-5" />
                  </div>
                  <div dir="rtl">
                    <p className="font-cairo font-bold text-charcoal-900 text-xl leading-none mb-1">98%</p>
                    <p className="font-tajawal text-stone-400 text-sm">نسبة الموافقة</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Stat: Award (new) ── */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-14"
              style={{ top: '58%' }}
            >
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}>
                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/80 flex items-center gap-4"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 flex-shrink-0">
                    <AwardIcon className="w-5 h-5" />
                  </div>
                  <div dir="rtl">
                    <p className="font-cairo font-bold text-charcoal-900 text-xl leading-none mb-1">+١٠</p>
                    <p className="font-tajawal text-stone-400 text-sm">سنوات خبرة</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.button
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-2 text-stone-400 hover:text-emerald-600 transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="font-tajawal text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
            اكتشف
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-11 rounded-full border-2 border-current flex justify-center pt-2"
          >
            <div className="w-1 h-2.5 bg-current rounded-full" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}