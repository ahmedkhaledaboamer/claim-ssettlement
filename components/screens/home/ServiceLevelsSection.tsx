'use client';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  TrendingUpIcon,
  CrownIcon,
  TargetIcon,
  ShieldIcon,
  StarIcon,
  SparklesIcon,
  RocketIcon
} from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from './ScrollAnimations';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const serviceLevels = [
  {
    id: 'basic',
    icon: FileTextIcon,
    highlighted: false,
    color: 'teal',
    image: '/imgs/113 A funding performance eval/image_27.webp'
  },
  {
    id: 'advanced',
    icon: TrendingUpIcon,
    highlighted: false,
    color: 'coral',
    image: '/imgs/114 An innovation lab for fina/image_28.webp'
  },
  {
    id: 'executive',
    icon: CrownIcon,
    highlighted: true,
    color: 'gold',
    image: '/imgs/115 A challenge management pla/image_29.webp'
  },
  {
    id: 'strategic',
    icon: TargetIcon,
    highlighted: false,
    color: 'purple',
    image: '/imgs/116 An advanced financial advi/image_30.webp'
  },
  {
    id: 'businessOwners',
    icon: ShieldIcon,
    highlighted: false,
    color: 'navy',
    image: '/imgs/117 A final evaluation chamber/image_31.webp'
  },
  {
    id: 'strategicPartnership',
    icon: RocketIcon,
    highlighted: false,
    color: 'indigo',
    image: '/imgs/118 A powerful boardlevel conc/image_32.webp'
  }
];

export function ServiceLevelsSection() {
  const t = useTranslations('home.serviceLevels');
  const levelsT = useTranslations('home.serviceLevels.levels');
  return (
    <section className="relative section-padding overflow-hidden px-[5%] py-[2%]">
      {/* Background Image */}
      <div className="absolute inset-0 min-h-[280px]">
        <Image
          width={1920}
          height={1080}
          sizes="100vw"
          src="/imgs/12 A trustbased operational en/image_11.webp"
          alt={t('badge')}
          className="w-full h-full object-cover opacity-5 min-h-[280px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-champagne to-alabaster" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-60 h-60 bg-imperial-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-jade/10 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-xl tracking-wider mb-4">
              {t('badge')}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-6">
              {t('titleMain')}{' '}
              <span className="gradient-text-gold">{t('titleHighlight')}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-fluid-section-lead text-navy-600 mx-auto">
              {t('lead')}
            </p>
          </FadeUp>
        </div>

        {/* Service Levels Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}>

          {serviceLevels.map((level, index) => {
            const IconComponent = level.icon;
            const features = levelsT.raw(`${level.id}.features`) as string[];
            return (
              <StaggerItem key={level.id}>
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                  className={`relative rounded-3xl h-full transition-all duration-300 overflow-hidden group ${level.highlighted ? 'bg-gradient-to-b from-gold-500 to-gold-600 text-navy-900 shadow-gold-xl' : 'bg-white shadow-xl hover:shadow-2xl'}`}>

                  {/* Animated Border for Highlighted */}
                  {level.highlighted &&
                  <>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 rounded-3xl opacity-75 blur animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-b from-gold-500 to-gold-600 rounded-3xl" />
                    </>
                  }

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header Image */}
                    <div className="h-56 sm:h-64 lg:h-[380px] xl:h-[450px] w-full relative overflow-hidden ">
                      <Image
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        src={level.image}
                        alt={levelsT(`${level.id}.title`)}
                        className="w-full h-full object-cover img-fluid-cover transition-transform duration-500 group-hover:scale-105" />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${level.highlighted ? 'from-gold-500/40 via-gold-500/10 to-transparent' : 'from-white/80 via-white/20 to-transparent'}`} />


                      {/* Recommended Badge */}
                      {level.highlighted &&
                        <div className="absolute top-4 right-4 bg-navy-900 text-gold-400 px-4 py-1 rounded-full text-fluid-label font-cairo font-bold flex items-center gap-1 shadow-lg z-20">
                          <StarIcon className="w-3 h-3" />
                          {t('mostRequested')}
                        </div>
                      }
                    </div>

                    {/* Content Area */}
                    <div className="p-8 pt-0 flex-1 flex flex-col relative z-10">
                      {/* Sparkles for Highlighted */}
                      {level.highlighted &&
                      <>
                          <motion.div
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0
                          }}
                          className="absolute top-0 left-4">

                            <SparklesIcon className="w-4 h-4 text-navy-900/30" />
                          </motion.div>
                          <motion.div
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                          className="absolute bottom-20 right-4">

                            <SparklesIcon className="w-3 h-3 text-navy-900/20" />
                          </motion.div>
                        </>
                      }

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 -mt-8 relative z-20 shadow-lg mx-auto lg:mx-0 ${level.highlighted ? 'bg-navy-900/20 backdrop-blur-sm' : level.color === 'teal' ? 'bg-teal-50 text-teal-600' : level.color === 'coral' ? 'bg-coral-50 text-coral-600' : level.color === 'purple' ? 'bg-purple-50 text-purple-600' : level.color === 'navy' ? 'bg-navy-50 text-navy-600' : 'bg-gold-50 text-gold-600'}`}>

                        <IconComponent
                          className={`w-7 h-7 ${level.highlighted ? 'text-navy-900' : ''}`} />

                      </div>

                      {/* Title */}
                      <h3
                        className={`text-fluid-body-lg font-cairo font-bold mb-4 ${level.highlighted ? 'text-navy-900' : 'text-navy-900'}`}>
                        {levelsT(`${level.id}.title`)}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-fluid-body  mb-6 leading-relaxed ${level.highlighted ? 'text-navy-800' : 'text-navy-600'}`}>
                        {levelsT(`${level.id}.description`)}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1 text-start">
                        {features.map((feature, fIndex) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div
                            className={`w-1.5 h-1.5 rounded-full ${level.highlighted ? 'bg-navy-900' : level.color === 'teal' ? 'bg-teal-500' : level.color === 'coral' ? 'bg-coral-500' : level.color === 'purple' ? 'bg-purple-500' : level.color === 'navy' ? 'bg-navy-500' : 'bg-gold-500'}`} />

                            <span
                            className={`text-fluid-body  ${level.highlighted ? 'text-navy-800' : 'text-navy-600'}`}>

                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>);

          })}
        </StaggerContainer>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full">

          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F7E7CE" />

        </svg>
      </div>
    </section>);

}