'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { journeySteps } from '@/data/journeyData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
// Journey step images
const journeyImages: string[] = [
'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop'];

export function ClientJourneySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section
      id="journey"
      className="relative py-24 overflow-hidden bg-slate-50">

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
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

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-slate-900">رحلة</span>
            <span className="gradient-text-gold"> العميل</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            ٩ مراحل متكاملة نرافقك فيها من اللحظة الأولى حتى ما بعد التمويل
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 right-8 left-8 h-0.5 bg-gradient-to-l from-teal-500 via-cyan-400 to-teal-300 hidden lg:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4 lg:gap-2">
            {journeySteps.map((step, index) => {
            const IconComponent =
            (Icons[step.icon as keyof typeof Icons] ??
              Icons.CircleIcon) as LucideIcon;
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
                    className={`relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isActive ? 'ring-4 ring-offset-2 ring-offset-slate-50' : 'border-slate-200 bg-white'}`}
                    style={{
                      backgroundColor: isActive ? step.color : '#FFFFFF',
                      borderColor: isActive ? step.color : '#E2E8F0'
                    }}>

                    <IconComponent
                      className={`w-7 h-7 transition-colors duration-300`}
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
                      className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>

                      {step.titleAr}
                    </h3>
                    <div
                      className="text-xs mt-1"
                      style={{
                        color: step.color
                      }}>

                      {step.duration}
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
            className="mt-12 bg-white rounded-3xl overflow-hidden max-w-3xl mx-auto border border-slate-200 shadow-md"
            style={{
              borderTop: `4px solid ${journeySteps[activeStep].color}`
            }}>

            {/* Step Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={journeyImages[activeStep]}
                alt={journeySteps[activeStep].titleAr}
                className="w-full h-full object-cover"
                loading="lazy" />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, white, ${journeySteps[activeStep].color}20)`
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
                      className="px-3 py-1 rounded-full text-sm font-bold text-white"
                      style={{
                        backgroundColor: journeySteps[activeStep].color
                      }}>

                      المرحلة {journeySteps[activeStep].id}
                    </span>
                    <span className="text-sm text-slate-500">
                      المدة: {journeySteps[activeStep].duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {journeySteps[activeStep].titleAr}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {journeySteps[activeStep].descriptionAr}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">

                  <Icons.ChevronRightIcon className="w-4 h-4" />
                  المرحلة السابقة
                </button>
                <button
                  onClick={() =>
                  setActiveStep(
                    Math.min(journeySteps.length - 1, activeStep + 1)
                  )
                  }
                  disabled={activeStep === journeySteps.length - 1}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">

                  المرحلة التالية
                  <Icons.ChevronLeftIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}