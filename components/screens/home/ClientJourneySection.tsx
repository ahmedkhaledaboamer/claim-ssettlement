'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  SearchIcon, BarChart2Icon, BuildingIcon, FolderOpenIcon,
  HandshakeIcon, CheckCircle2Icon, HeartHandshakeIcon,
} from 'lucide-react';

const STEP_IMAGES: Record<number, string> = {
  0: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&q=80',
};

type JourneyStep = {
  number: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const journeySteps: JourneyStep[] = [
  { number: '1', icon: SearchIcon,         title: 'جلسة فهم وتحليل احتياج',          description: 'نستمع لك، نقرأ مشروعك، ونحدد احتياجك المالي بدقة.',     color: '#10b981', bg: '#f0fdf4' },
  { number: '2', icon: BarChart2Icon,      title: 'تقييم الوضع المالي والتشغيلي',    description: 'نحلل التدفقات، الالتزامات، والقدرة على السداد.',         color: '#0ea5e9', bg: '#f0f9ff' },
  { number: '3', icon: BuildingIcon,       title: 'اختيار الجهة التمويلية المناسبة', description: 'نرشح لك افضل الخيارات حسب نشاطك وحجمك.',                color: '#8b5cf6', bg: '#faf5ff' },
  { number: '4', icon: FolderOpenIcon,     title: 'تجهيز ملف تمويلي احترافي',        description: 'نرتب المستندات ونبني ملفا قويا يزيد فرص الموافقة.',      color: '#f59e0b', bg: '#fffbeb' },
  { number: '5', icon: HandshakeIcon,      title: 'التفاوض على الشروط',               description: 'نضمن لك افضل سعر، مدة، وضمانات.',                      color: '#ef4444', bg: '#fef2f2' },
  { number: '6', icon: CheckCircle2Icon,   title: 'المتابعة حتى الموافقة',           description: 'نرافقك حتى توقيع العقد واستلام التمويل.',               color: '#10b981', bg: '#f0fdf4' },
  { number: '7', icon: HeartHandshakeIcon, title: 'دعم ما بعد التمويل',              description: 'نساعدك في ادارة الالتزامات وتحسين التدفقات.',           color: '#b97932', bg: '#fdf8f0' },
];

const headerVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = (i: number) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } },
});

function StepCard({
  step, index, isInView,
}: { step: JourneyStep; index: number; isLast: boolean; isInView: boolean }) {
  const Icon = step.icon;
  const imgSrc = STEP_IMAGES[index];

  return (
    <motion.div
      variants={cardVariants(index)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{
        border: `1.5px solid ${step.color}22`,
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 12px 40px ${step.color}28`;
        el.style.borderColor = `${step.color}55`;
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
        el.style.borderColor = `${step.color}22`;
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={imgSrc}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{ background: `linear-gradient(160deg, ${step.color}55, ${step.color}11)`, opacity: 0.38 }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-16"
          style={{ background: 'linear-gradient(to top, white, transparent)' }}
        />
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white font-cairo font-bold shadow"
          style={{ fontSize: '0.65rem', background: step.color }}
        >
          {index + 1}
        </div>
      </div>

      {/* Floating icon */}
      <div className="px-5 -mt-5 relative z-10 flex justify-end">
        <motion.div
          whileHover={{ scale: 1.15, rotate: -6 }}
          transition={{ duration: 0.22 }}
          className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md"
          style={{ background: `${step.color}18`, border: `1.5px solid ${step.color}33` }}
        >
          <Icon className="w-5 h-5" style={{ color: step.color }} />
        </motion.div>
      </div>

      {/* Text */}
      <div className="px-5 pt-3 pb-5 flex-1 flex flex-col text-right relative">
        <div
          className="absolute -bottom-2 -left-3 font-cairo font-bold opacity-[0.05] leading-none select-none pointer-events-none"
          style={{ fontSize: '5.5rem', color: step.color }}
        >
          {step.number}
        </div>
        <h3
          className="font-cairo font-bold text-charcoal-900 mb-2 leading-snug relative z-10"
          style={{ fontSize: 'clamp(0.9rem, 1.05vw, 1rem)' }}
        >
          {step.title}
        </h3>
        <p
          className="font-tajawal text-stone-500 leading-[1.75] relative z-10 flex-1"
          style={{ fontSize: 'clamp(0.78rem, 0.88vw, 0.85rem)' }}
        >
          {step.description}
        </p>
        <div
          className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"
          style={{ background: `linear-gradient(to left, ${step.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export function ClientJourneySection() {
  const ref      = useRef(null);
  const bgRef    = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="journey"
      dir="rtl"
      ref={bgRef}
      className="relative overflow-hidden p-[5%]"
      style={{ background: 'linear-gradient(180deg, #f8faf9 0%, #f0f5f2 100%)' }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-1/4 h-[110%] hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt=""
            className="w-full h-full object-cover"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 100%)',
              opacity: 0.18,
            }}
          />
        </motion.div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
      </div>

      <div className="relative z-10   " ref={ref}>

        {/* ── Header: centered ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-l from-emerald-500 to-transparent" />
            <span
              className="font-tajawal text-emerald-700 font-semibold tracking-widest uppercase"
              style={{ fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)' }}
            >
              مسار واضح
            </span>
            <div className="h-px w-10 bg-gradient-to-r from-emerald-500 to-transparent" />
          </div>

          <h2
            className="font-cairo font-bold text-charcoal-900 mb-5 leading-[1.15]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            رحلة العميل{' '}
            <span style={{
              background: 'linear-gradient(135deg, #059669 0%, #10b981 60%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              معنا
            </span>
          </h2>

          <p
            className="font-tajawal text-stone-500   leading-[1.85]"
            style={{ fontSize: 'clamp(0.95rem, 1.35vw, 1.1rem)' }}
          >
            رحلتك التمويلية معنا ليست معاملة، هي مسار مالي كامل نرافقك فيه خطوة بخطوة
          </p>
        </motion.div>

         
        {/* ── Step cards: 4-col responsive grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {journeySteps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isLast={i === journeySteps.length - 1} isInView={isInView} />
          ))}

          {/* Extra editorial image card fills remaining cell */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="relative rounded-3xl overflow-hidden min-h-[260px]"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="Financial planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 text-right">
              <p className="font-cairo font-bold text-white mb-1" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)' }}>
                نخطط معك
              </p>
              <p className="font-tajawal text-emerald-100 text-sm leading-relaxed">
                كل خطوة مدروسة لضمان نجاحك المالي
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: image + CTA ── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="rounded-3xl overflow-hidden relative h-52 lg:h-full min-h-[220px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Support team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/55 to-transparent" />
            <div className="absolute inset-0 flex items-end p-7 text-right">
              <p className="font-cairo font-bold text-white" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}>
                فريق خبراء يرافقك<br />في كل مرحلة
              </p>
            </div>
          </motion.div>

          {/* CTA – centered */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center gap-6 p-8 lg:p-10 rounded-3xl border border-emerald-100"
            style={{
              background: 'linear-gradient(135deg, #f0fdf8 0%, #ecfdf5 100%)',
              boxShadow: '0 4px 32px rgba(16,185,129,0.09)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
              style={{ background: 'linear-gradient(135deg, #059669, #34d399)' }}
            >
              <HeartHandshakeIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p
                className="font-cairo font-bold text-charcoal-900 mb-2"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
              >
                مستعد تبدأ رحلتك التمويلية؟
              </p>
              <p className="font-tajawal text-stone-500 text-sm leading-relaxed  ">
                تواصل معنا اليوم واحصل على استشارة مجانية من فريق خبرائنا
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-4 rounded-2xl font-cairo font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                boxShadow: '0 8px 28px rgba(16,185,129,0.32)',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ابدأ الآن
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}