"use client";
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Eye,
  CheckCircle,
  LineChart,
  Clock,
  Key,
  Award } from
'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
const benefits = [
{
  icon: ShieldCheck,
  title: 'حوكمة صارمة',
  desc: 'إطار تنظيمي يضمن سلامة الإجراءات وتوافقها مع الأنظمة.',
  color: 'teal',
  percent: 100
},
{
  icon: Lock,
  title: 'أمان مالي',
  desc: 'حماية كاملة لمصالح العميل وتقليل المخاطر المحتملة.',
  color: 'gold',
  percent: 99
},
{
  icon: Eye,
  title: 'رقابة شاملة',
  desc: 'متابعة دقيقة لكل خطوة في مسار التمويل لضمان الجودة.',
  color: 'coral',
  percent: 100
},
{
  icon: CheckCircle,
  title: 'شفافية كاملة',
  desc: 'وضوح تام في الشروط، الرسوم، والالتزامات دون مفاجآت.',
  color: 'green',
  percent: 100
},
{
  icon: LineChart,
  title: 'تحليل عميق',
  desc: 'دراسة مستفيضة للبيانات المالية لضمان القدرة على السداد.',
  color: 'navy',
  percent: 98
},
{
  icon: Clock,
  title: 'متابعة مستمرة',
  desc: 'دعم متواصل حتى بعد صرف التمويل لضمان استقرار العميل.',
  color: 'purple',
  percent: 100
},
{
  icon: Key,
  title: 'سرية تامة',
  desc: 'بروتوكولات صارمة لحماية بيانات العميل ومعلوماته الحساسة.',
  color: 'teal',
  percent: 100
},
{
  icon: Award,
  title: 'جودة عالية',
  desc: 'معايير مهنية رفيعة في إعداد الملفات والتفاوض مع الجهات.',
  color: 'gold',
  percent: 99
}];

const colorConfig = {
  teal: {
    bg: 'bg-teal-500',
    light: 'bg-teal-50',
    text: 'text-teal-600',
    bar: 'bg-teal-500'
  },
  gold: {
    bg: 'bg-gold-500',
    light: 'bg-gold-50',
    text: 'text-gold-600',
    bar: 'bg-gold-500'
  },
  coral: {
    bg: 'bg-coral-500',
    light: 'bg-coral-50',
    text: 'text-coral-600',
    bar: 'bg-coral-500'
  },
  green: {
    bg: 'bg-green-500',
    light: 'bg-green-50',
    text: 'text-green-600',
    bar: 'bg-green-500'
  },
  navy: {
    bg: 'bg-navy-700',
    light: 'bg-navy-50',
    text: 'text-navy-700',
    bar: 'bg-navy-700'
  },
  purple: {
    bg: 'bg-purple-500',
    light: 'bg-purple-50',
    text: 'text-purple-600',
    bar: 'bg-purple-500'
  }
};
export function BenefitsSection() {
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, #0A1929 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />


      {/* Soft floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gold-400/5 blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:w-2/3">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="text-center lg:text-right mb-14">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-navy-900 mb-5">
                القيمة <span className="text-gradient-gold">المضافة</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
                نحن لا نعد العميل بتمويل فقط، بل نعده بمنظومة متكاملة تعمل خلفه
                بثبات وتدير ملفه بثقة.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {benefits.map((benefit, index) => {
                const config =
                colorConfig[benefit.color as keyof typeof colorConfig];
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.9
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    className="relative bg-white rounded-2xl p-5 md:p-7 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 hover:border-gold-300 overflow-hidden">

                    {/* Large Background Number */}
                    <span className="absolute -top-2 -right-2 text-7xl md:text-8xl font-bold text-gray-100 opacity-40 font-tajawal select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${config.light} flex items-center justify-center ${config.text} mb-4 shadow-inner`}>

                        <benefit.icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <h3 className="text-lg md:text-xl font-tajawal font-bold text-navy-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {benefit.desc}
                      </p>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{
                            width: 0
                          }}
                          whileInView={{
                            width: `${benefit.percent}%`
                          }}
                          viewport={{
                            once: true
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + 0.5
                          }}
                          className={`h-full ${config.bar} rounded-full`} />

                      </div>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {benefit.percent}%
                      </span>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>

          {/* Side Images */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-1/3 hidden lg:block">

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Modern Office"
                  className="w-full h-64 object-cover" />

              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80"
                  alt="Financial Analysis"
                  className="w-full h-48 object-cover" />

              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                  alt="Team Collaboration"
                  className="w-full h-56 object-cover" />

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}