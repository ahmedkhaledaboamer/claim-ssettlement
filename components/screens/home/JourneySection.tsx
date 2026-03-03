'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageSquareIcon,
  BarChart3Icon,
  SearchIcon,
  FileTextIcon,
  HandshakeIcon,
  CheckCircle2Icon,
  HeadphonesIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const journeySteps = [
{
  number: '01',
  icon: MessageSquareIcon,
  title: 'جلسة فهم وتحليل احتياج',
  description: 'نستمع لك، نقرأ مشروعك، ونحدد احتياجك المالي بدقة.',
  image:
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80',
  color: 'teal'
},
{
  number: '02',
  icon: BarChart3Icon,
  title: 'تقييم الوضع المالي والتشغيلي',
  description: 'نحلل التدفقات، الالتزامات، والقدرة على السداد.',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80',
  color: 'gold'
},
{
  number: '03',
  icon: SearchIcon,
  title: 'اختيار الجهة التمويلية المناسبة',
  description: 'نرشّح لك أفضل الخيارات حسب نشاطك وحجمك.',
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80',
  color: 'coral'
},
{
  number: '04',
  icon: FileTextIcon,
  title: 'تجهيز ملف تمويلي احترافي',
  description: 'نرتّب المستندات ونبني ملفًا قويًا يزيد فرص الموافقة.',
  image:
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&q=80',
  color: 'teal'
},
{
  number: '05',
  icon: HandshakeIcon,
  title: 'التفاوض على الشروط',
  description: 'نضمن لك أفضل سعر، مدة، وضمانات.',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&q=80',
  color: 'gold'
},
{
  number: '06',
  icon: CheckCircle2Icon,
  title: 'المتابعة حتى الموافقة',
  description: 'نرافقك حتى توقيع العقد واستلام التمويل.',
  image:
  'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=300&q=80',
  color: 'coral'
},
{
  number: '07',
  icon: HeadphonesIcon,
  title: 'دعم ما بعد التمويل',
  description: 'نساعدك في إدارة الالتزامات وتحسين التدفقات.',
  image:
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80',
  color: 'teal'
}];

const colorMap: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    glow: string;
    ring: string;
  }> =
{
  teal: {
    bg: 'bg-teal-500',
    border: 'border-teal-500',
    text: 'text-teal-400',
    glow: 'shadow-teal',
    ring: 'ring-teal-500'
  },
  gold: {
    bg: 'bg-gold-500',
    border: 'border-gold-500',
    text: 'text-gold-400',
    glow: 'shadow-gold',
    ring: 'ring-gold-500'
  },
  coral: {
    bg: 'bg-coral-500',
    border: 'border-coral-500',
    text: 'text-coral-400',
    glow: 'shadow-coral',
    ring: 'ring-coral-500'
  }
};
function JourneyCard({
  step,
  index,
  isRight




}: {step: (typeof journeySteps)[0];index: number;isRight: boolean;}) {
  const IconComponent = step.icon;
  const colors = colorMap[step.color];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isRight ? 60 : -60
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">

      <div
        className={`flex items-start gap-4 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>

        {/* Thumbnail */}
        <div
          className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ${colors.ring}`}>

          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

        </div>

        <div className={`flex-1 ${isRight ? 'text-right' : 'text-left'}`}>
          {/* Icon Badge */}
          <div
            className={`inline-flex w-10 h-10 ${colors.bg} rounded-lg items-center justify-center mb-3 ${colors.glow}`}>

            <IconComponent className="w-5 h-5 text-white" />
          </div>

          <h3 className="text-xl font-cairo font-bold text-navy-900 mb-2">
            {step.title}
          </h3>
          <p className="text-navy-600 font-tajawal text-base leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>);

}
export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  // Animate the timeline progress line
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ['0%', '100%']);
  return (
    <section
      id="journey"
      className="relative bg-alabaster py-24 md:py-32 overflow-hidden"
      ref={containerRef}>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-jade/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-60 h-60 bg-imperial-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <span className="inline-block text-jade font-cairo font-bold text-sm tracking-wider mb-4">
              مسار واضح ومحدد
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-midnight mb-6">
              رحلة العميل <span className="gradient-text-teal">معنا</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-midnight/70 font-tajawal max-w-2xl mx-auto">
              رحلتك التمويلية معنا ليست معاملة… هي مسار مالي كامل نرافقك فيه
              خطوة بخطوة
            </p>
          </FadeUp>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative" ref={timelineRef}>
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-200 via-gold-200 to-coral-200 rounded-full" />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-teal-500 via-gold-500 to-coral-500 rounded-full origin-top"
              style={{
                height: lineHeight
              }} />

          </div>

          {/* Journey Steps */}
          <div className="relative space-y-16">
            {journeySteps.map((step, index) => {
              const isRight = index % 2 === 0;
              const colors = colorMap[step.color];
              return (
                <div
                  key={index}
                  className="relative grid grid-cols-[1fr_auto_1fr] gap-8 items-center">

                  {/* Left Card (for even indices) */}
                  <div className={isRight ? 'invisible' : ''}>
                    {!isRight &&
                    <JourneyCard step={step} index={index} isRight={false} />
                    }
                  </div>

                  {/* Center Number Badge */}
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1
                    }}
                    viewport={{
                      once: true,
                      margin: '-50px'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1
                    }}
                    className="relative z-10">

                    <div
                      className={`w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center shadow-lg ${colors.glow} ring-4 ring-alabaster`}>

                      <span className="text-white font-cairo font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Card (for odd indices) */}
                  <div className={!isRight ? 'invisible' : ''}>
                    {isRight &&
                    <JourneyCard step={step} index={index} isRight={true} />
                    }
                  </div>
                </div>);

            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-gold-500 to-coral-500 rounded-full" />

          <div className="space-y-8">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const colors = colorMap[step.color];
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  className="relative flex items-start gap-4 pr-4">

                  {/* Number Node */}
                  <div
                    className={`relative z-10 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>

                    <span className="text-white font-cairo font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 shadow-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover" />

                      </div>
                      <div>
                        <h3 className="text-lg font-cairo font-bold text-navy-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-navy-600 font-tajawal text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pearl to-transparent" />
    </section>);

}