'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3Icon,
  SettingsIcon,
  LinkIcon,
  MessageSquareIcon,
  CheckCircle2Icon,
  ChevronDownIcon
} from 'lucide-react';
import { FadeUp } from './ScrollAnimations';
import { useTranslations } from 'next-intl';

const systemLayers = [
  {
    id: 'financialAnalysis',
    icon: BarChart3Icon,
    color: 'teal',
    image: '/imgs/33 A mergers and acquisitions/image_24.webp'
  },
  { id: 'operationalAssessment', icon: SettingsIcon, color: 'navy', image: '/imgs/34 A treasury operations scene/image_40.webp' },
  { id: 'matching', icon: LinkIcon, color: 'gold', image: '/imgs/35 A portfolio diversification/image_25.webp' },
  { id: 'negotiation', icon: MessageSquareIcon, color: 'teal', image: '/imgs/36 A financial stability conce/image_41.webp' },
  { id: 'closure', icon: CheckCircle2Icon, color: 'navy', image: '/imgs/37 A capital injection scene s/image_26.webp' }
];

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
}: {
  layer: (typeof systemLayers)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const IconComponent = layer.icon;
  const colors = colorMap[layer.color];
  const t = useTranslations('home.system.layers');
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
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-5 text-center sm:text-left">
            {/* Layer Number */}
            <div className="hidden sm:flex w-12 h-16 items-center justify-center flex-shrink-0">
              <span className="text-fluid-stat font-cairo font-bold text-navy-100">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Thumbnail Image */}
            <div className="hidden sm:block w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm min-h-[80px]">
              <img
                src={layer.image}
                alt={t(`${layer.id}.title`)}
                width={300}
                height={200}
                className="w-full h-full object-cover img-fluid-cover transition-transform duration-500 group-hover:scale-110" />

            </div>

            {/* Icon */}
            <div
              className={`w-12 h-12 md:w-14 md:h-14 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}>

              <IconComponent
                className={`w-6 h-6 md:w-7 md:h-7 ${colors.iconColor}`} />

            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className={`text-fluid-body-lg font-cairo font-bold ${colors.text} mb-2`}
              >
                {t(`${layer.id}.title`)}
              </h3>
              <p className="text-navy-600 font-tajawal text-fluid-body leading-relaxed">
                {t(`${layer.id}.description`)}
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
                      <p className="text-navy-500 font-tajawal text-fluid-body leading-relaxed">
                        {t(`${layer.id}.details`)}
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
  const t = useTranslations('home.system');
  return (
    <section className="relative bg-pearl py-24 md:py-32 overflow-hidden px-[5%] py-[2%]">
      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-navy-400/5 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-navy-600 font-cairo font-bold text-fluid-label tracking-wider mb-4">
              {t('badge')}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-6">
              {t('titleMain')}{' '}
              <span className="gradient-text-navy">{t('titleHighlight')}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-fluid-section-lead text-navy-600 mx-auto">
              {t('lead')}
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