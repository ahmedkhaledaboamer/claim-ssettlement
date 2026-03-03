'use client';
import { motion } from 'framer-motion';
import { FadeUp } from './ScrollAnimations';
const partners = [
'بنك أبوظبي الأول',
'بنك الإمارات دبي الوطني',
'بنك المشرق',
'بنك دبي الإسلامي',
'بنك الاتحاد الوطني',
'مصرف الهلال',
'بنك رأس الخيمة الوطني',
'بنك الفجيرة الوطني'];

function PartnerLogo({ name, index }: {name: string;index: number;}) {
  const colors = [
  'from-gold-500/20 to-gold-600/20 border-gold-500/30',
  'from-navy-700/20 to-navy-800/20 border-navy-500/30',
  'from-teal-500/20 to-teal-600/20 border-teal-500/30',
  'from-coral-500/20 to-coral-600/20 border-coral-500/30'];

  const colorClass = colors[index % colors.length];
  return (
    <div
      className={`flex-shrink-0 w-56 h-28 bg-gradient-to-br ${colorClass} border rounded-xl flex items-center justify-center px-4 mx-4 shadow-lg hover:shadow-xl transition-shadow`}>

      <span className="text-navy-800 font-cairo font-bold text-base text-center leading-tight">
        {name}
      </span>
    </div>);

}
export function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];
  return (
    <section className="relative bg-gradient-to-b from-alabaster to-pearl py-24 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-60 h-60 bg-imperial-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-jade rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-4">
              شبكة شراكاتنا
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-4">
              شركاؤنا في <span className="gradient-text-gold">النجاح</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نفخر بشراكتنا مع أبرز المؤسسات المالية في المنطقة
            </p>
          </FadeUp>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear'
                }
              }}>

              {duplicatedPartners.map((partner, index) =>
              <PartnerLogo key={index} name={partner} index={index} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-10 mt-16">
            <div className="flex items-center gap-2 text-navy-600">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="font-tajawal text-base">شراكات موثوقة</span>
            </div>
            <div className="flex items-center gap-2 text-navy-600">
              <div className="w-3 h-3 bg-gold-500 rounded-full" />
              <span className="font-tajawal text-base">+50 جهة تمويلية</span>
            </div>
            <div className="flex items-center gap-2 text-navy-600">
              <div className="w-3 h-3 bg-teal-500 rounded-full" />
              <span className="font-tajawal text-base">تغطية شاملة</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>);

}