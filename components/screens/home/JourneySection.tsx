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
  HeadphonesIcon
} from 'lucide-react';
import { FadeUp } from './ScrollAnimations';
import { useTranslations, useLocale } from 'next-intl';

const journeySteps = [
  {
    id: 'discovery',
    number: '01',
    icon: MessageSquareIcon,
    image: '/imgs/106 A future risk management v/image_10.webp',
    color: 'teal'
  },
  {
    id: 'evaluation',
    number: '02',
    icon: BarChart3Icon,
    image: '/imgs/107 An innovationdriven execut/image_21.webp',
    color: 'gold'
  },
  {
    id: 'lenderSelection',
    number: '03',
    icon: SearchIcon,
    image: '/imgs/108 An advanced analytics plat/image_22.webp',
    color: 'coral'
  },
  {
    id: 'filePreparation',
    number: '04',
    icon: FileTextIcon,
    image: '/imgs/109 A financial forecasting ce/image_23.webp',
    color: 'teal'
  },
  {
    id: 'negotiation',
    number: '05',
    icon: HandshakeIcon,
    image: '/imgs/110 A restructuring chamber wi/image_24.webp',
    color: 'gold'
  },
  {
    id: 'approval',
    number: '06',
    icon: CheckCircle2Icon,
    image: '/imgs/111 A cash flow optimization p/image_25.webp',
    color: 'coral'
  },
  {
    id: 'postFunding',
    number: '07',
    icon: HeadphonesIcon,
    image: '/imgs/112 A longterm relationship ma/image_26.webp',
    color: 'teal'
  }
];

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
  const t = useTranslations('home.journey.steps');
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
          className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ${colors.ring} min-h-[80px]`}>

          <img
            src={step.image}
            alt={t(`${step.id}.title`)}
            width={300}
            height={200}
            className="w-full h-full object-cover img-fluid-cover group-hover:scale-110 transition-transform duration-500" />

        </div>

        <div className={`flex-1 ${isRight ? 'text-right' : 'text-left'}`}>
          {/* Icon Badge */}
          <div
            className={`inline-flex w-10 h-10 ${colors.bg} rounded-lg items-center justify-center mb-3 ${colors.glow}`}>

            <IconComponent className="w-5 h-5 text-white" />
          </div>

          <h3 className="text-fluid-body-lg font-cairo font-bold text-navy-900 mb-2">
            {t(`${step.id}.title`)}
          </h3>
          <p className="text-navy-600 font-tajawal text-fluid-body leading-relaxed">
            {t(`${step.id}.description`)}
          </p>
        </div>
      </div>
    </motion.div>);

}
export function JourneySection() {
  const t = useTranslations('home.journey');
  const locale = useLocale();
  const isRTL = locale === 'ar';
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
      className="relative bg-alabaster py-24 md:py-32 overflow-hidden px-[5%] py-[2%]"
      ref={containerRef}>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-jade/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-60 h-60 bg-imperial-500/10 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <span className="inline-block text-jade font-cairo font-bold text-xl tracking-wider mb-4">
              {t('badge')}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-fluid-section-title font-cairo font-bold text-midnight mb-6">
              {t('titleMain')}{' '}
              <span className="gradient-text-teal">{t('titleHighlight')}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-fluid-section-lead text-midnight/70 mx-auto">
              {t('lead')}
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

                      <span className="text-white font-cairo font-bold text-fluid-body-lg">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Card (for odd indices) */}
                  <div className={!isRight ? 'invisible' : ''}>
                    {isRight && <JourneyCard step={step} index={index} isRight={true} />}
                  </div>
                </div>);

            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">

          <div className="space-y-8">
            {journeySteps.map((step, index) => {
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
                  className="relative flex items-start gap-4">

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
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0 min-h-[56px]">
                        <img
                          src={step.image}
                          alt={t(`steps.${step.id}.title`)}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover img-fluid-cover" />

                      </div>
                      <div>
                        <h3 className="text-fluid-body-lg font-cairo font-bold text-navy-900 mb-1">
                          {t(`steps.${step.id}.title`)}
                        </h3>
                        <p className="text-navy-600 font-tajawal text-fluid-body leading-relaxed">
                          {t(`steps.${step.id}.description`)}
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