'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  UsersIcon,
  FileTextIcon,
  HandshakeIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
  MessageCircleIcon,
  SparklesIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const offerings = [
{
  icon: SearchIcon,
  title: 'تحليل احتياجاتك المالية',
  description: 'نفهم متطلباتك بدقة ونحدد الحل الأمثل',
  angle: 0
},
{
  icon: UsersIcon,
  title: 'اختيار الجهة التمويلية المناسبة',
  description: 'نطابق احتياجك مع أفضل الجهات التمويلية',
  angle: 51.4
},
{
  icon: FileTextIcon,
  title: 'تجهيز ملف تمويلي احترافي',
  description: 'نبني ملفًا قويًا يزيد فرص الموافقة',
  angle: 102.8
},
{
  icon: HandshakeIcon,
  title: 'التفاوض على أفضل الشروط',
  description: 'نضمن لك أفضل سعر ومدة وضمانات',
  angle: 154.3
},
{
  icon: ClipboardCheckIcon,
  title: 'متابعة الطلب حتى الموافقة',
  description: 'نرافقك في كل خطوة حتى استلام التمويل',
  angle: 205.7
},
{
  icon: HeadphonesIcon,
  title: 'دعمك بعد الحصول على التمويل',
  description: 'نساعدك في إدارة الالتزامات والتدفقات',
  angle: 257.1
},
{
  icon: MessageCircleIcon,
  title: 'تقديم استشارات مالية',
  description: 'نساعدك على اتخاذ قرارات مالية صحيحة',
  angle: 308.5
}];

function OrbitNode({
  offering,
  index,
  isActive,
  onClick,
  radius
}: {offering: (typeof offerings)[0];index: number;isActive: boolean;onClick: () => void;radius: number;}) {
  const IconComponent = offering.icon;
  const angleRad = offering.angle * Math.PI / 180;
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        delay: index * 0.1 + 0.5,
        type: 'spring',
        stiffness: 200
      }}
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)'
      }}>

      {/* Connection Line */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: radius + 40,
          height: radius + 40,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) rotate(${offering.angle + 180}deg)`
        }}>

        <motion.line
          x1="50%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#lineGradientLight)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{
            pathLength: 0
          }}
          animate={{
            pathLength: 1
          }}
          transition={{
            delay: index * 0.1 + 0.8,
            duration: 0.5
          }} />

        {/* Animated Particle */}
        <motion.circle
          r="3"
          fill="#E5A00D"
          animate={{
            cx: ['50%', '100%', '50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'linear'
          }}
          cy="50%" />

      </svg>

      {/* Node */}
      <motion.button
        onClick={onClick}
        whileHover={{
          scale: 1.15
        }}
        whileTap={{
          scale: 0.95
        }}
        className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gold-500 shadow-gold-lg' : 'bg-white border-2 border-gold-300 hover:border-gold-500 shadow-lg'}`}>

        <IconComponent
          className={`w-7 h-7 md:w-8 md:h-8 ${isActive ? 'text-navy-900' : 'text-gold-600'}`} />


        {/* Pulse Ring */}
        {isActive &&
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold-400"
          animate={{
            scale: [1, 1.5],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }} />

        }
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isActive &&
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 10,
            scale: 0.9
          }}
          className="absolute top-full mt-4 right-1/2 translate-x-1/2 w-64 bg-white rounded-xl p-4 border border-gold-200 shadow-xl z-20">

            <h4 className="text-gold-600 font-cairo font-bold text-base mb-2 text-center">
              {offering.title}
            </h4>
            <p className="text-navy-600 font-tajawal text-sm text-center leading-relaxed">
              {offering.description}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}
export function OfferingsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const radius =
  typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 200;
  return (
    <section className="relative bg-alabaster py-24 md:py-32 overflow-hidden min-h-screen">
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-4">
              قيمة مضافة حقيقية
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              ماذا <span className="gradient-text-gold">نقدّم؟</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نقدّم منظومة وساطة تمويلية متكاملة تشمل كل ما تحتاجه للوصول إلى
              التمويل المناسب
            </p>
          </FadeUp>
        </div>

        {/* Desktop: Orbital Constellation */}
        <div className="hidden md:block relative h-[600px]">
          {/* SVG Gradient Definition */}
          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient
                id="lineGradientLight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">

                <stop offset="0%" stopColor="#E5A00D" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E5A00D" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbit Ring */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-gold-300/50" />


          {/* Central Hub */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: 0.3
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="absolute inset-0 bg-gold-400/30 rounded-full blur-2xl scale-150" />


            {/* Hub Circle */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-gold-xl">
              <SparklesIcon className="w-12 h-12 text-navy-900" />
            </div>

            {/* Rotating Ring */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/50"
              style={{
                margin: '-8px'
              }} />

          </motion.div>

          {/* Orbit Nodes */}
          {offerings.map((offering, index) =>
          <OrbitNode
            key={index}
            offering={offering}
            index={index}
            isActive={activeIndex === index}
            onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
            }
            radius={radius} />

          )}
        </div>

        {/* Mobile: Vertical List with Connecting Line */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-teal-500 to-coral-500" />

          <div className="space-y-6">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
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

                  {/* Node */}
                  <div className="relative z-10 w-12 h-12 bg-white border-2 border-gold-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <IconComponent className="w-5 h-5 text-gold-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-4 border border-navy-100 shadow-lg">
                    <h4 className="text-gold-600 font-cairo font-bold text-base mb-1">
                      {offering.title}
                    </h4>
                    <p className="text-navy-600 font-tajawal text-sm">
                      {offering.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>

        {/* Instruction Text */}
        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 2
          }}
          className="hidden md:block text-center text-navy-400 font-tajawal text-sm mt-12">

          انقر على أي عنصر لمعرفة المزيد
        </motion.p>
      </div>

      {/* Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>);

}