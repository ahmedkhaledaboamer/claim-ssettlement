'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2Icon,
  UsersIcon,
  BanknoteIcon,
  TrendingUpIcon,
  AwardIcon,
  QuoteIcon,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  'تحليل احتياجاتك المالية',
  'تقييم وضعك التشغيلي',
  'اختيار الجهة التمويلية الأنسب',
  'تجهيز ملف تمويلي قوي',
  'التفاوض على أفضل الشروط',
  'متابعة الطلب حتى الموافقة النهائية',
];

type StatColor = 'emerald' | 'amber' | 'violet' | 'rose';

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: StatColor;
};

const stats: Stat[] = [
  { icon: UsersIcon,     value: '+500',  label: 'عميل راضٍ',     color: 'emerald' },
  { icon: BanknoteIcon,  value: '+2B',   label: 'درهم تمويل',    color: 'amber'   },
  { icon: TrendingUpIcon,value: '98%',   label: 'نسبة الموافقة', color: 'violet'  },
  { icon: AwardIcon,     value: '+10',   label: 'سنوات خبرة',    color: 'rose'    },
];

const colorMap: Record<StatColor, {
  bg: string;
  icon: string;
  border: string;
  accent: string;
  ring: string;
}> = {
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200', accent: 'bg-emerald-500', ring: 'ring-emerald-200' },
  amber:   { bg: 'bg-amber-50',   icon: 'text-amber-600',   border: 'border-amber-200',   accent: 'bg-amber-500',   ring: 'ring-amber-200'   },
  violet:  { bg: 'bg-violet-50',  icon: 'text-violet-600',  border: 'border-violet-200',  accent: 'bg-violet-500',  ring: 'ring-violet-200'  },
  rose:    { bg: 'bg-rose-50',    icon: 'text-rose-600',    border: 'border-rose-200',    accent: 'bg-rose-500',    ring: 'ring-rose-200'    },
};

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const slideLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.8, delay: 0.15 } },
};

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label, color }: Stat & { index: number }) {
  const c = colorMap[color as StatColor];
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`relative bg-white rounded-2xl p-6 text-center border ${c.border} shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden`}
    >
      {/* Background accent blob */}
      <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${c.bg} opacity-60 group-hover:scale-150 transition-transform duration-500`} />

      <div className={`relative w-13 h-13 mx-auto ${c.bg} rounded-2xl flex items-center justify-center mb-4 ring-4 ring-white group-hover:ring-2 ${c.ring} transition-all duration-300`}
        style={{ width: '3.25rem', height: '3.25rem' }}>
        <Icon className={`w-6 h-6 ${c.icon}`} />
      </div>

      <h3
        className="font-cairo font-bold text-charcoal-900 mb-1 leading-none"
        style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)' }}
      >
        {value}
      </h3>
      <p className="font-tajawal text-stone-500 font-medium" style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)' }}>
        {label}
      </p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 inset-x-0 h-0.5 ${c.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`} />
    </motion.div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

export function AboutSection() {
  const ref     = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="about"
      dir="rtl"
      className="relative bg-white overflow-hidden"
    >
      {/* ── Background Decoration ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Diagonal tinted half */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full opacity-60"
          style={{ background: 'linear-gradient(160deg, #f8faf9 0%, #f0f5f2 100%)' }}
        />
        {/* Radial glow top-right */}
        <div
          className="absolute top-0 right-0 w-[40%] h-[50%]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 100% 0%, rgba(16,185,129,0.07) 0%, transparent 80%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '56px 56px' }}
        />
      </div>

      <div className="relative z-10 p-[5%]" ref={ref}>

        {/* ══ Main Grid ══════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center mb-20">

          {/* ── Text Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            {/* Section label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-gradient-to-l from-amber-500 to-transparent" />
              <span className="font-tajawal text-amber-700 font-semibold tracking-widest uppercase" style={{ fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)' }}>
                من نحن
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-cairo font-bold text-charcoal-900 mb-6 leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)' }}
            >
              شريكك الاستراتيجي في{' '}
              <span style={{
                background: 'linear-gradient(135deg, #059669 0%, #10b981 60%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                النمو المالي
              </span>
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="font-tajawal text-stone-600 mb-8 leading-[1.9]"
              style={{ fontSize: 'clamp(0.95rem, 1.35vw, 1.15rem)' }}
            >
              نحن شركة متخصصة في وساطة التمويل وتوفير حلول مالية متقدمة للشركات،
              رواد الأعمال، والمشاريع الاستثمارية. نساعدك على الوصول إلى التمويل
              المناسب عبر:
            </motion.p>

            {/* Services checklist */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-3 mb-10"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: -4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors duration-200 group cursor-default"
                >
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span
                    className="font-tajawal text-charcoal-800 font-medium leading-snug"
                    style={{ fontSize: 'clamp(0.85rem, 1.15vw, 1rem)' }}
                  >
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Callout quote */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f0fdf8 0%, #ecfdf5 100%)',
                borderRight: '4px solid #10b981',
                boxShadow: '0 4px 24px rgba(16,185,129,0.08)',
              }}
            >
              <div className="absolute top-4 left-4 text-emerald-100">
                <QuoteIcon className="w-12 h-12" style={{ transform: 'scaleX(-1)' }} />
              </div>
              <p
                className="font-cairo font-semibold text-charcoal-900 leading-relaxed relative z-10"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
              >
                نحن لا نبحث عن "تمويل فقط"…
                <span
                  className="block mt-1.5 font-medium"
                  style={{
                    background: 'linear-gradient(90deg, #059669, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  نبحث عن تمويل صحيح يخدم هدفك ويعزز نموك ويقلل مخاطرك.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* ── Image Collage Column ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 relative h-[480px] lg:h-[580px]"
            ref={imageRef}
          >
            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -left-6 w-28 h-28 opacity-20 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#10B981 2px, transparent 2px)', backgroundSize: '16px 16px' }}
            />

            {/* Main image — top-right, parallax */}
            <motion.div
              style={{ y: imgY }}
              className="absolute top-0 right-0 w-[72%] h-[68%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Business meeting"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(1.05) contrast(1.02)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,150,105,0.18) 0%, transparent 60%)' }} />
            </motion.div>

            {/* Secondary image — bottom-left */}
            <div className="absolute bottom-0 left-0 w-[58%] h-[42%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80"
                alt="Handshake"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(1.05)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 60%)' }} />
            </div>

            {/* Tertiary image — top-left peek */}
            <div className="absolute top-10 left-2 w-[30%] h-[30%] rounded-[1.5rem] overflow-hidden shadow-lg z-0 border-4 border-white/60">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                alt="Laptop work"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-[38%] right-[-1rem] lg:right-[-2rem] z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-3 border border-white"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                <AwardIcon className="w-5 h-5" />
              </div>
              <div dir="rtl">
                <p className="font-cairo font-bold text-charcoal-900 text-lg leading-none mb-0.5">+10</p>
                <p className="font-tajawal text-stone-400 text-xs">سنوات في السوق</p>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div
              className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(180,121,50,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
            />
          </motion.div>
        </div>

        {/* ══ Stats Row ══════════════════════════════════════════════════════ */}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px mb-16 origin-right"
          style={{ background: 'linear-gradient(to left, #10b981, rgba(16,185,129,0.15), transparent)' }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}