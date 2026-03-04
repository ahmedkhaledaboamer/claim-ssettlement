"use client";
import { motion } from 'framer-motion';
import { Building2Icon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
const partners = [
'البنك الأهلي',
'بنك الراجحي',
'بنك الرياض',
'البنك السعودي الفرنسي',
'بنك البلاد',
'بنك الجزيرة',
'بنك الإنماء',
'صندوق التنمية'];

export function PartnersSection() {
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section className="p-[5%] bg-cream-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-10 md:mb-14">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-tajawal font-bold text-navy-900 mb-3">
            شركاؤنا في النجاح
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            نفخر بشراكتنا مع أبرز المؤسسات المالية في المملكة
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-6">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream-100 to-transparent z-10" />
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream-100 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="marquee-track">
            {/* First set */}
            {partners.map((partner, index) =>
            <PartnerCard
              key={`first-${index}`}
              name={partner}
              index={index} />

            )}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) =>
            <PartnerCard
              key={`second-${index}`}
              name={partner}
              index={index} />

            )}
          </div>
        </div>
      </div>
    </section>);

}
function PartnerCard({ name, index }: {name: string;index: number;}) {
  const colors = [
  'from-gold-500/20 to-gold-600/10 border-gold-500/30',
  'from-teal-500/20 to-teal-600/10 border-teal-500/30',
  'from-navy-700/20 to-navy-800/10 border-navy-700/30',
  'from-coral-500/20 to-coral-600/10 border-coral-500/30'];

  const colorClass = colors[index % colors.length];
  return (
    <div
      className={`flex-shrink-0 mx-4 px-8 py-6 rounded-2xl bg-gradient-to-br ${colorClass} backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]`}>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
          <Building2Icon className="w-5 h-5 text-navy-800" />
        </div>
        <span className="font-tajawal font-bold text-navy-900 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>);

}