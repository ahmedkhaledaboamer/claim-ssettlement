'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { StarIcon, CheckIcon } from 'lucide-react';

// ─── Image per level ──────────────────────────────────────────────────────────
const LEVEL_IMAGES: Record<number, string> = {
  0: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80', // documents / file prep
  1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',   // data analytics
  2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', // execution / team
  3: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', // strategy / charts
  4: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80', // VIP handshake
};

const serviceLevels = [
  { level: 'المستوى الأساسي',             description: 'تجهيز ملف + تقديمه للجهة التمويلية.',                                       color: 'stone',    featured: false },
  { level: 'المستوى المتقدم',             description: 'تحليل + تجهيز ملف + متابعة + تفاوض.',                                       color: 'emerald',  featured: false },
  { level: 'المستوى التنفيذي',            description: 'إدارة العملية بالكامل حتى الموافقة.',                                       color: 'violet',   featured: false },
  { level: 'المستوى الاستراتيجي',         description: 'بناء خطة تمويل + اختيار جهات + إدارة مفاوضات متعددة.',                    color: 'charcoal', featured: false },
  { level: 'المستوى الخاص برجال الأعمال', description: 'خدمة شخصية بسرية كاملة وإدارة ملفات حساسة.',                             color: 'copper',   featured: true  },
];

const getCardStyles = (color: string, featured: boolean) => {
  if (featured) {
    return { wrapper: 'gradient-copper text-white shadow-xl shadow-copper-500/20 scale-105 z-10', header: 'bg-white/10', text: 'text-copper-50' };
  }
  switch (color) {
    case 'emerald': return { wrapper: 'bg-white border border-stone-200 hover:border-emerald-300', header: 'gradient-emerald',  text: 'text-stone-500' };
    case 'violet':  return { wrapper: 'bg-white border border-stone-200 hover:border-violet-300',  header: 'gradient-violet',   text: 'text-stone-500' };
    case 'charcoal':return { wrapper: 'bg-white border border-stone-200 hover:border-charcoal-400',header: 'bg-charcoal-800',   text: 'text-stone-500' };
    default:        return { wrapper: 'bg-white border border-stone-200',                           header: 'bg-stone-300',      text: 'text-stone-500' };
  }
};

// accent colour for image overlay per card
const OVERLAY_COLORS: Record<string, string> = {
  stone:    'rgba(120,113,108,0.45)',
  emerald:  'rgba(5,150,105,0.45)',
  violet:   'rgba(109,40,217,0.45)',
  charcoal: 'rgba(30,30,30,0.55)',
  copper:   'rgba(185,121,50,0.50)',
};

export function ServiceLevelsSection() {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-stone-50">
      <div className="p-[5%]" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-cairo font-bold text-charcoal-900 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            مستويات الخدمة
          </h2>
          <p
            className="font-tajawal text-charcoal-600"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            نقدّم خدماتنا عبر مستويات تشغيل مختلفة تناسب كل عميل
          </p>
        </motion.div>

        {/* ── Wide hero image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-12 rounded-3xl overflow-hidden relative h-52 md:h-64 lg:h-72"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="Corporate towers"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-charcoal-900/75 via-charcoal-900/35 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-end px-8 md:px-14">
            <div className="text-right max-w-md">
              <p
                className="font-cairo font-bold text-white mb-2 leading-snug"
                style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)' }}
              >
                خدمة مصمَّمة لكل مرحلة من مراحل نموّك
              </p>
              <p className="font-tajawal text-stone-300 text-sm leading-relaxed">
                من أول ملف تمويلي حتى إدارة المفاوضات الكبرى
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
          {serviceLevels.map((service, index) => {
            const styles  = getCardStyles(service.color, service.featured);
            const imgSrc  = LEVEL_IMAGES[index];
            const overlay = OVERLAY_COLORS[service.color] ?? 'rgba(0,0,0,0.4)';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl overflow-hidden transition-all duration-300 group ${styles.wrapper}`}
              >
                {/* ── Image thumbnail ── */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={service.level}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* coloured overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                    style={{ background: overlay, opacity: 0.5 }}
                  />
                  {/* fade into card body */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-12"
                    style={{ background: service.featured ? 'linear-gradient(to top, rgba(185,121,50,0.9), transparent)' : 'linear-gradient(to top, white, transparent)' }}
                  />

                  {/* VIP badge */}
                  {service.featured && (
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-white font-cairo text-xs font-bold">
                      <StarIcon className="w-3 h-3 fill-current" /> VIP
                    </div>
                  )}

                  {/* Step number chip */}
                  <div
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-cairo font-bold text-sm shadow ${service.featured ? 'bg-white text-amber-700' : 'bg-white/90 text-charcoal-800'}`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* ── Coloured header strip ── */}
                <div className={`px-5 pt-4 pb-3 ${styles.header} relative`}>
                  <h3
                    className="font-cairo font-bold text-white"
                    style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
                  >
                    {service.level}
                  </h3>
                </div>

                {/* ── Body ── */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckIcon
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.featured ? 'text-copper-200' : 'text-emerald-500'}`}
                    />
                    <p
                      className={`font-tajawal leading-relaxed ${service.featured ? 'text-copper-50' : 'text-charcoal-600'}`}
                      style={{ fontSize: 'clamp(0.85rem, 1vw, 0.95rem)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom dual image strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Left panel */}
          <div className="relative rounded-3xl overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80"
              alt="Professional office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/65 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 text-right">
              <p className="font-cairo font-bold text-white" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
                نبدأ معك من حيث أنت
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div className="relative rounded-3xl overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
              alt="Client consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-violet-900/65 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-end p-6 text-right">
              <p className="font-cairo font-bold text-white" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
                ونصل بك إلى القمة
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}