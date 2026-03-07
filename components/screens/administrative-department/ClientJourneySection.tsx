'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { journeySteps } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
// Journey step images
const journeyImages: string[] = [
  '/imgs/A powerful executive command c/image_46.webp', '/imgs/A powerful executive command c/image_48.webp', '/imgs/A precision qualitycontrol env/image_61.webp', '/imgs/A precisiondriven quality cont/image_43.webp',
  '/imgs/A precisiondriven quality cont/image_52.webp', '/imgs/A premium corporate lobby inte/image_50.webp', '/imgs/A premium executive portfolio/image_8.webp', '/imgs/A premium financial services e/image_50.webp', '/imgs/A premium financial services v/image_41.webp'
];

export function ClientJourneySection({ locale }: { locale: string }) {
  const t = useTranslations('administrativeDepartmentPage.clientJourney');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeStep, setActiveStep] = useState(0);
  const isRTL = locale === 'ar';
  const getStepTitle = (step: (typeof journeySteps)[0]) => t(`steps.${step.id}.title`);
  const getStepDescription = (step: (typeof journeySteps)[0]) => t(`steps.${step.id}.description`);
  const getStepDuration = (step: (typeof journeySteps)[0]) => t(`steps.${step.id}.duration`);

  return (
    <section
      id="journey"
      className="relative p-[5%] overflow-hidden bg-slate-50">

      <div ref={ref} className="relative z-10   ">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">

          <h2 className="text-fluid-section-title font-black mb-6">
            <span className="text-slate-900">{t('headingMain')}</span>
            <span className="gradient-text-gold">{t('headingHighlight')}</span>
          </h2>
          <p className="text-fluid-section-lead text-slate-600  ">
            {t('description')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="absolute top-8 right-8 left-8 h-0.5 bg-gradient-to-l from-teal-500 via-cyan-400 to-teal-300 hidden lg:block" />

          {/* Mobile / tablet slider */}
          <div className="lg:hidden">
            <div
              className="flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {journeySteps.map((step, index) => {
              const IconComponent =
              (Icons[step.icon as keyof typeof Icons] ??
                Icons.CircleIcon) as LucideIcon;
                const title = getStepTitle(step);
                const duration = getStepDuration(step);
                const isActive = activeStep === index;
                return (
                  <motion.div
                    key={step.id}
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    animate={
                    isVisible ?
                    {
                      opacity: 1,
                      y: 0
                    } :
                    {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08
                    }}
                    className="relative min-w-[160px] snap-start">

                    {/* Step Node */}
                    <motion.button
                      whileHover={{
                        scale: 1.05
                      }}
                      whileTap={{
                        scale: 0.97
                      }}
                      onClick={() => setActiveStep(index)}
                      className={`cursor-pointer relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isActive ? 'ring-4 ring-offset-2 ring-offset-slate-50' : 'border-slate-200 bg-white'}`}
                      style={{
                        backgroundColor: isActive ? step.color : '#FFFFFF',
                        borderColor: isActive ? step.color : '#E2E8F0'
                      }}>

                      <IconComponent
                        className="w-7 h-7 transition-colors duration-300"
                        style={{
                          color: isActive ? '#FFFFFF' : step.color
                        }} />

                    </motion.button>

                    {/* Step Number */}
                    <div
                      className="absolute -top-2 -right-0 md:-right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                      style={{
                        backgroundColor: step.color
                      }}>

                      {step.id}
                    </div>

                    {/* Step Title */}
                    <div className="mt-4 text-center">
                      <h3
                        className={`text-fluid-body font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>

                        {title}
                      </h3>
                      <div
                        className="text-fluid-label mt-1"
                        style={{
                          color: step.color
                        }}>

                        {duration}
                      </div>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>

          {/* Desktop grid timeline */}
          <div className="hidden lg:grid lg:grid-cols-9 gap-4 lg:gap-2">
            {journeySteps.map((step, index) => {
            const IconComponent =
            (Icons[step.icon as keyof typeof Icons] ??
              Icons.CircleIcon) as LucideIcon;
              const title = getStepTitle(step);
              const duration = getStepDuration(step);
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  animate={
                  isVisible ?
                  {
                    opacity: 1,
                    y: 0
                  } :
                  {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08
                  }}
                  className="relative">

                  {/* Step Node */}
                  <motion.button
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isActive ? 'ring-4 ring-offset-2 ring-offset-slate-50' : 'border-slate-200 bg-white'}`}
                    style={{
                      backgroundColor: isActive ? step.color : '#FFFFFF',
                      borderColor: isActive ? step.color : '#E2E8F0'
                    }}>

                    <IconComponent
                      className="w-7 h-7 transition-colors duration-300"
                      style={{
                        color: isActive ? '#FFFFFF' : step.color
                      }} />

                  </motion.button>

                  {/* Step Number */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                    style={{
                      backgroundColor: step.color
                    }}>

                    {step.id}
                  </div>

                  {/* Step Title */}
                  <div className="mt-4 text-center">
                    <h3
                      className={`text-fluid-body font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>

                      {title}
                    </h3>
                    <div
                      className="text-fluid-label mt-1"
                      style={{
                        color: step.color
                      }}>

                      {duration}
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>

        {/* Active Step Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="mt-12 bg-white rounded-3xl overflow-hidden max-w-7xl mx-auto border border-slate-200 shadow-md"
            style={{
              borderTop: `4px solid ${journeySteps[activeStep].color}`
            }}>

            {/* Step Image */}
            <div className="relative h-44 md:h-100 min-h-[220px] overflow-hidden">
              <Image
                src={journeyImages[activeStep]}
                alt={getStepTitle(journeySteps[activeStep])}
                className="w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 500px"
                />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(255, 255, 255, 0.5), ${journeySteps[activeStep].color}50)`
                }} />

            </div>

            <div className="p-8">
                <div className="flex items-start gap-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${journeySteps[activeStep].color}10`
                  }}>

                  {(() => {
                  const IconComponent =
                  (Icons[journeySteps[activeStep].icon as keyof typeof Icons] ??
                    Icons.CircleIcon) as LucideIcon;
                  return (
                    <IconComponent
                      className="w-8 h-8"
                      style={{
                        color: journeySteps[activeStep].color
                      }} />);
                  })()}
                </div>

                {/* Content */}
                  <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-fluid-label font-bold text-white"
                      style={{
                        backgroundColor: journeySteps[activeStep].color
                      }}>

                      {t('stageLabel', { id: journeySteps[activeStep].id })}
                    </span>
                    <span className="text-fluid-label text-slate-500">
                      {t('durationLabel', {
                        duration: getStepDuration(journeySteps[activeStep])
                      })}
                    </span>
                  </div>
                  <h3 className="text-fluid-2xl font-bold text-slate-900 mb-3">
                    {getStepTitle(journeySteps[activeStep])}
                  </h3>
                  <p className="text-fluid-body text-slate-600 leading-relaxed">
                    {getStepDescription(journeySteps[activeStep])}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="cursor-pointer flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">

                  {isRTL ? <Icons.ChevronRightIcon className="w-4 h-4" /> : <Icons.ChevronLeftIcon className="w-4 h-4" />}
                  {t('prevStage')}
                </button>
                <button
                  onClick={() =>
                  setActiveStep(
                    Math.min(journeySteps.length - 1, activeStep + 1)
                  )
                  }
                  disabled={activeStep === journeySteps.length - 1}
                  className="cursor-pointer flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">

                  {t('nextStage')}
                  {isRTL ? <Icons.ChevronLeftIcon className="w-4 h-4" /> : <Icons.ChevronRightIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}