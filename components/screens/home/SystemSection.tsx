'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3Icon,
  SettingsIcon,
  LinkIcon,
  MessageSquareIcon,
  CheckCircle2Icon,
  ChevronDownIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const systemLayers = [
{
  icon: BarChart3Icon,
  title: 'طبقة التحليل المالي',
  description: 'نقرأ الأرقام، المؤشرات، والقدرة التمويلية.',
  color: 'teal',
  details:
  'نحلل البيانات المالية بدقة لفهم وضعك الحالي وتحديد أفضل مسار للتمويل.',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80'
},
{
  icon: SettingsIcon,
  title: 'طبقة التقييم التشغيلي',
  description: 'نقيّم قوة المشروع واستدامته.',
  color: 'navy',
  details: 'نراجع العمليات التشغيلية والهيكل الإداري لضمان جاهزيتك للتمويل.',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80'
},
{
  icon: LinkIcon,
  title: 'طبقة المطابقة التمويلية',
  description: 'نطابق احتياجك مع الجهة المناسبة.',
  color: 'gold',
  details: 'نختار من شبكة شركائنا الجهة التمويلية الأنسب لطبيعة مشروعك.',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80'
},
{
  icon: MessageSquareIcon,
  title: 'طبقة التفاوض',
  description: 'نضمن لك أفضل الشروط الممكنة.',
  color: 'teal',
  details: 'نتفاوض باحترافية للحصول على أفضل معدلات الفائدة والشروط.',
  image:
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80'
},
{
  icon: CheckCircle2Icon,
  title: 'طبقة الإغلاق والمتابعة',
  description: 'نغلق الصفقة ونتابع التنفيذ حتى النهاية.',
  color: 'navy',
  details: 'نرافقك حتى استلام التمويل ونتابع معك لضمان نجاح المشروع.',
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80'
}];

const colorMap: Record<
  string,
  {
    border: string;
    iconBg: string;
    iconColor: string;
    text: string;
    dot: string;
  }> =
{
  teal: {
    border: 'border-t-teal-500',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    text: 'text-teal-600',
    dot: 'bg-teal-500'
  },
  navy: {
    border: 'border-t-navy-700',
    iconBg: 'bg-navy-50',
    iconColor: 'text-navy-600',
    text: 'text-navy-600',
    dot: 'bg-navy-700'
  },
  gold: {
    border: 'border-t-gold-500',
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-600',
    text: 'text-gold-600',
    dot: 'bg-gold-500'
  }
};
function LayerCard({
  layer,
  index,
  isActive,
  onClick





}: {layer: (typeof systemLayers)[0];index: number;isActive: boolean;onClick: () => void;}) {
  const IconComponent = layer.icon;
  const colors = colorMap[layer.color];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative">

      {/* Connecting dot on the line (desktop only) */}
      <div className="hidden md:block absolute right-0 top-8 translate-x-1/2 z-10">
        <motion.div
          animate={
          isActive ?
          {
            scale: [1, 1.3, 1]
          } :
          {
            scale: 1
          }
          }
          transition={{
            duration: 0.5,
            repeat: isActive ? Infinity : 0,
            repeatDelay: 1
          }}
          className={`w-4 h-4 ${colors.dot} rounded-full ring-4 ring-pearl shadow-lg`} />

      </div>

      {/* Card */}
      <div
        onClick={onClick}
        className={`bg-white rounded-2xl shadow-lg border-t-4 ${colors.border} overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl md:mr-8 group`}>

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 md:gap-5">
            {/* Layer Number */}
            <div className="hidden sm:flex w-12 h-16 items-center justify-center flex-shrink-0">
              <span className="text-4xl md:text-5xl font-cairo font-bold text-navy-100">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Thumbnail Image */}
            <div className="hidden sm:block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <img
                src={layer.image}
                alt={layer.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

            </div>

            {/* Icon */}
            <div
              className={`w-12 h-12 md:w-14 md:h-14 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>

              <IconComponent
                className={`w-6 h-6 md:w-7 md:h-7 ${colors.iconColor}`} />

            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className={`text-xl md:text-2xl font-cairo font-bold ${colors.text} mb-2`}>

                {layer.title}
              </h3>
              <p className="text-navy-600 font-tajawal text-base leading-relaxed">
                {layer.description}
              </p>

              {/* Expanded Details */}
              <AnimatePresence>
                {isActive &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  className="overflow-hidden">

                    <div className="mt-4 pt-4 border-t border-navy-100">
                      <p className="text-navy-500 font-tajawal text-sm leading-relaxed">
                        {layer.details}
                      </p>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>

            {/* Expand Indicator */}
            <motion.div
              animate={{
                rotate: isActive ? 180 : 0
              }}
              transition={{
                duration: 0.3
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? colors.iconBg : 'bg-navy-50'}`}>

              <ChevronDownIcon
                className={`w-5 h-5 transition-colors ${isActive ? colors.iconColor : 'text-navy-400'}`} />

            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>);

}
export function SystemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <section className="relative bg-pearl py-24 md:py-32 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-navy-400/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-navy-600 font-cairo font-bold text-sm tracking-wider mb-4">
              منهجية عمل متكاملة
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              نظام التشغيل <span className="gradient-text-navy">المالي</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نظامنا مبني على طبقات تشغيلية دقيقة تعمل معًا لتقديم أفضل نتيجة
            </p>
          </FadeUp>
        </div>

        {/* Layers Container */}
        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute right-0 top-8 bottom-8 w-1 bg-gradient-to-b from-teal-500 via-gold-500 to-navy-700 rounded-full" />

          {/* Layer Cards */}
          <div className="space-y-6">
            {systemLayers.map((layer, index) =>
            <LayerCard
              key={index}
              layer={layer}
              index={index}
              isActive={activeIndex === index}
              onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
              } />

            )}
          </div>
        </div>
      </div>

      {/* Diagonal Clip Transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-champagne"
        style={{
          clipPath: 'polygon(0 100%, 100% 50%, 100% 100%, 0 100%)'
        }} />

    </section>);

}