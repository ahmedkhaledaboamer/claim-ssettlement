'use client';
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  TargetIcon, ZapIcon, EyeIcon,
  RefreshCwIcon, AwardIcon, ShieldIcon, CheckIcon,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const qualityStandards = [
  { icon: TargetIcon,    title: 'دقة في تحليل الاحتياج',     color: '#10b981', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { icon: ZapIcon,       title: 'سرعة في تجهيز الملفات',     color: '#b97932', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80' },
  { icon: EyeIcon,       title: 'شفافية في كل خطوة',         color: '#8b5cf6', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { icon: RefreshCwIcon, title: 'متابعة مستمرة',             color: '#ef4444', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80' },
  { icon: AwardIcon,     title: 'التزام بالنتيجة',           color: '#10b981', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
  { icon: ShieldIcon,    title: 'سرية تامة في التعامل',      color: '#1e293b', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80' },
];

const entityLanguage = [
  'لغة تعتمد على الأرقام',
  'لغة تحترم وقت العميل',
  'لغة مبنية على المعلومة',
  'لغة بلا وعود مبالغ فيها',
  'لغة تعتمد على النتيجة فقط',
];

const principles = [
  'نلتزم قبل أن نعد',
  'نوضح قبل أن نطلب',
  'نتابع قبل أن تُسأل',
  'نعمل بصمت… ونُظهر النتائج فقط',
  'نضع مصلحة العميل فوق كل شيء',
  'نقيس الأداء… ونطوّر باستمرار',
];

// ─── Quality Card ─────────────────────────────────────────────────────────────
function QualityCard({ standard, index, isInView }: { standard: typeof qualityStandards[0]; index: number; isInView: boolean }) {
  const Icon = standard.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
    >
      {/* Background image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={standard.image}
          alt={standard.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        {/* Accent colour wash on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ background: standard.color }}
        />

        {/* Icon chip */}
        <div
          className="absolute top-4 right-4 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
          style={{ background: `${standard.color}cc` }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Title at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          {/* Accent line */}
          <div
            className="h-0.5 w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
            style={{ background: standard.color }}
          />
          <h3
            className="font-cairo font-bold text-white leading-snug"
            style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)' }}
          >
            {standard.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function QualitySection() {
  const ref    = useRef(null);
  const bgRef  = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} dir="rtl">

      {/* ══════════════════════════════════════════════════
          PART 1 – QUALITY STANDARDS  (dark theme)
      ══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}>
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        <div className="relative z-10 p-[5%]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-emerald-500" />
                <span className="font-tajawal text-emerald-400 font-semibold text-sm tracking-widest uppercase">
                  التميز في العمل
                </span>
              </div>
              <h2
                className="font-cairo font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                معايير{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  الجودة
                </span>
              </h2>
            </div>
            <p
              className="font-tajawal text-slate-400   leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}
            >
              كل معيار من معاييرنا مبني على ممارسة فعلية، لا على شعارات
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {qualityStandards.map((standard, index) => (
              <QualityCard key={index} standard={standard} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          PART 2 – ENTITY LANGUAGE  (image + list)
      ══════════════════════════════════════════════════ */}
      <div ref={bgRef} className="relative overflow-hidden bg-stone-50">
        <div className="p-[5%]  ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-emerald-500" />
                <span className="font-tajawal text-emerald-700 font-semibold text-sm">كيف نتحدث؟</span>
              </div>
              <h2
                className="font-cairo font-bold text-charcoal-900 mb-10"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                لغة الكيان
              </h2>
              <ul className="space-y-5">
                {entityLanguage.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + index * 0.09 }}
                    className="group flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50/50 transition-all duration-300"
                  >
                    <span
                      className="font-cairo font-black text-2xl leading-none w-9 text-center flex-shrink-0 transition-colors duration-300 group-hover:text-emerald-500"
                      style={{ color: '#d4a96a', opacity: 0.7 }}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className="font-tajawal text-charcoal-800 font-medium leading-snug"
                      style={{ fontSize: 'clamp(1rem, 1.35vw, 1.15rem)' }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image side — with parallax + floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <motion.div style={{ y: parallaxY }} className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6e?w=800&q=80"
                    alt="Professional"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Floating stat card – top left */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-stone-100"
                >
                  <p className="font-cairo font-bold text-2xl text-emerald-600 leading-none mb-1">٩٤٪</p>
                  <p className="font-tajawal text-stone-500 text-xs">نسبة الموافقة</p>
                </motion.div>

                {/* Floating stat card – bottom right */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-stone-100"
                >
                  <p className="font-cairo font-bold text-2xl text-amber-600 leading-none mb-1">+٣٠٠</p>
                  <p className="font-tajawal text-stone-500 text-xs">عميل موثوق</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          PART 3 – PRINCIPLES  (dark image mosaic)
      ══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.88) 100%)' }} />
        </div>

        <div className="relative z-10 p-[5%] ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-l from-emerald-500 to-transparent" />
              <span className="font-tajawal text-emerald-400 font-semibold text-sm tracking-widest uppercase">فلسفتنا</span>
              <div className="h-px w-10 bg-gradient-to-r from-emerald-500 to-transparent" />
            </div>
            <h2
              className="font-cairo font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              مبادئنا
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.09 }}
                className={`group relative rounded-2xl p-6 border border-white/8 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 ${
                  index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p
                    className="font-tajawal text-slate-200 leading-[1.8] group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}
                  >
                    {principle}
                  </p>
                </div>
              </motion.div>
            ))}

           
          </div>
        </div>
      </div>

    </section>
  );
}