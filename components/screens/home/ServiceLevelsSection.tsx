'use client';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  TrendingUpIcon,
  CrownIcon,
  TargetIcon,
  ShieldIcon,
  StarIcon,
  SparklesIcon } from
'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from './ScrollAnimations';
const serviceLevels = [
{
  icon: FileTextIcon,
  title: 'المستوى الأساسي',
  description: 'تجهيز ملف + تقديمه للجهة التمويلية.',
  features: ['تجهيز الملف', 'تقديم للجهة التمويلية'],
  highlighted: false,
  color: 'teal',
  image:
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80'
},
{
  icon: TrendingUpIcon,
  title: 'المستوى المتقدم',
  description: 'تحليل + تجهيز ملف + متابعة + تفاوض.',
  features: ['تحليل مالي', 'تجهيز الملف', 'متابعة', 'تفاوض'],
  highlighted: false,
  color: 'coral',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80'
},
{
  icon: CrownIcon,
  title: 'المستوى التنفيذي',
  description: 'إدارة العملية بالكامل حتى الموافقة.',
  features: ['إدارة كاملة', 'متابعة مستمرة', 'تفاوض احترافي', 'حتى الموافقة'],
  highlighted: true,
  color: 'gold',
  image:
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80'
},
{
  icon: TargetIcon,
  title: 'المستوى الاستراتيجي',
  description: 'بناء خطة تمويل + اختيار جهات + إدارة مفاوضات متعددة.',
  features: ['خطة تمويل', 'اختيار جهات', 'مفاوضات متعددة'],
  highlighted: false,
  color: 'purple',
  image:
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
},
{
  icon: ShieldIcon,
  title: 'المستوى الخاص برجال الأعمال',
  description: 'خدمة شخصية بسرية كاملة وإدارة ملفات حساسة.',
  features: ['خدمة شخصية', 'سرية كاملة', 'ملفات حساسة'],
  highlighted: false,
  color: 'navy',
  image:
  'https://images.unsplash.com/photo-1507679799987-c73b7651ba67?w=600&q=80'
}];

export function ServiceLevelsSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="خلفية"
          className="w-full h-full object-cover opacity-5" />

        <div className="absolute inset-0 bg-gradient-to-b from-champagne to-alabaster" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-60 h-60 bg-imperial-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-jade/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-4">
              خدمات مخصصة لكل احتياج
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              مستويات <span className="gradient-text-gold">الخدمة</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نقدّم خدماتنا عبر مستويات تشغيل مختلفة تناسب كل عميل
            </p>
          </FadeUp>
        </div>

        {/* Service Levels Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}>

          {serviceLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <StaggerItem key={index}>
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
                    <div className="h-40 w-full relative overflow-hidden">
                      <img
                        src={level.image}
                        alt={level.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${level.highlighted ? 'from-gold-500 via-gold-500/80 to-transparent' : 'from-white via-white/80 to-transparent'}`} />


                      {/* Recommended Badge */}
                      {level.highlighted &&
                      <div className="absolute top-4 right-4 bg-navy-900 text-gold-400 px-4 py-1 rounded-full text-xs font-cairo font-bold flex items-center gap-1 shadow-lg z-20">
                          <StarIcon className="w-3 h-3" />
                          الأكثر طلبًا
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
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 -mt-8 relative z-20 shadow-lg ${level.highlighted ? 'bg-navy-900/20 backdrop-blur-sm' : level.color === 'teal' ? 'bg-teal-50 text-teal-600' : level.color === 'coral' ? 'bg-coral-50 text-coral-600' : level.color === 'purple' ? 'bg-purple-50 text-purple-600' : level.color === 'navy' ? 'bg-navy-50 text-navy-600' : 'bg-gold-50 text-gold-600'}`}>

                        <IconComponent
                          className={`w-7 h-7 ${level.highlighted ? 'text-navy-900' : ''}`} />

                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-cairo font-bold mb-4 ${level.highlighted ? 'text-navy-900' : 'text-navy-900'}`}>

                        {level.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-base font-tajawal mb-6 leading-relaxed ${level.highlighted ? 'text-navy-800' : 'text-navy-600'}`}>

                        {level.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {level.features.map((feature, fIndex) =>
                        <li key={fIndex} className="flex items-center gap-2">
                            <div
                            className={`w-1.5 h-1.5 rounded-full ${level.highlighted ? 'bg-navy-900' : level.color === 'teal' ? 'bg-teal-500' : level.color === 'coral' ? 'bg-coral-500' : level.color === 'purple' ? 'bg-purple-500' : level.color === 'navy' ? 'bg-navy-500' : 'bg-gold-500'}`} />

                            <span
                            className={`text-base font-tajawal ${level.highlighted ? 'text-navy-800' : 'text-navy-600'}`}>

                              {feature}
                            </span>
                          </li>
                        )}
                      </ul>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full py-4 rounded-xl font-cairo font-bold text-base transition-all mt-auto ${level.highlighted ? 'bg-navy-900 text-gold-400 hover:bg-navy-800' : 'bg-navy-900/10 text-navy-900 hover:bg-navy-900 hover:text-white'}`}
                        whileHover={{
                          scale: 1.02
                        }}
                        whileTap={{
                          scale: 0.98
                        }}>

                        اختر هذا المستوى
                      </motion.button>
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