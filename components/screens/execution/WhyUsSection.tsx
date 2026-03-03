"use client";
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowLeft,
  TrendingUp,
  Shield,
  Users,
  Lock,
  Clock,
  Award } from
'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
const reasons = [
{
  text: 'منهجية مؤسسية لا تعتمد على الاجتهاد الفردي.',
  icon: Shield,
  color: 'gold',
  percent: 100
},
{
  text: 'تحليل مالي استراتيجي يضمن القدرة على السداد.',
  icon: TrendingUp,
  color: 'teal',
  percent: 98
},
{
  text: 'تفاوض تنفيذي يحسن الشروط لصالح العميل.',
  icon: Users,
  color: 'coral',
  percent: 95
},
{
  text: 'حماية تامة للبيانات والمعلومات الحساسة.',
  icon: Lock,
  color: 'green',
  percent: 100
},
{
  text: 'متابعة مستمرة حتى بعد الإغلاق المالي.',
  icon: Clock,
  color: 'purple',
  percent: 100
},
{
  text: 'فريق متخصص يضم نخبة من الخبراء الماليين.',
  icon: Award,
  color: 'navy',
  percent: 99
}];

const colorConfig = {
  gold: {
    bg: 'bg-gold-100',
    text: 'text-gold-600',
    bar: 'bg-gold-500'
  },
  teal: {
    bg: 'bg-teal-100',
    text: 'text-teal-600',
    bar: 'bg-teal-500'
  },
  coral: {
    bg: 'bg-coral-100',
    text: 'text-coral-600',
    bar: 'bg-coral-500'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    bar: 'bg-green-500'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    bar: 'bg-purple-500'
  },
  navy: {
    bg: 'bg-navy-100',
    text: 'text-navy-700',
    bar: 'bg-navy-700'
  }
};
export function WhyUsSection() {
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section
      id="why-us"
      className="py-28 md:py-36 bg-white relative overflow-hidden">

      {/* Decorative Background Shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }} />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Side */}
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
            className="lg:w-1/2 relative">

            <div className="space-y-6">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20">
                <div className="absolute inset-0 bg-navy-900/10 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Business Handshake"
                  className="w-full h-80 object-cover" />

              </div>

              {/* Secondary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/20 mr-16">
                <div className="absolute inset-0 bg-teal-900/10 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-64 object-cover" />

              </div>
            </div>

            {/* Floating Success Badge */}
            <motion.div
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <p className="font-tajawal font-bold text-navy-900 text-lg">
                    نسبة نجاح
                  </p>
                  <p className="text-3xl font-bold text-gold-500">98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="lg:w-1/2">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-navy-900 mb-5">
              لماذا تختار <span className="text-gradient-gold">كيه إي بي؟</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-10 leading-[1.8]">
              نحن نقدم درعًا ماليًا يحمي العميل من المخاطر، ويضمن له مسارًا
              آمنًا، وقرارًا مدروسًا، ونتيجة يمكن الاعتماد عليها في مواجهة
              متطلبات الجهات التمويلية.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => {
                const config =
                colorConfig[reason.color as keyof typeof colorConfig];
                return (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.1 + 0.3
                    }}
                    className="flex items-start gap-4 bg-gray-50 p-4 md:p-5 rounded-xl hover:bg-white hover:shadow-lg transition-all">

                    <div
                      className={`mt-0.5 flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full ${config.bg} flex items-center justify-center ${config.text}`}>

                      <reason.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-base md:text-lg text-navy-800 font-medium block mb-2 leading-snug">
                        {reason.text}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{
                              width: 0
                            }}
                            whileInView={{
                              width: `${reason.percent}%`
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
                        <span className="text-sm font-bold text-gray-500">
                          {reason.percent}%
                        </span>
                      </div>
                    </div>
                  </motion.li>);

              })}
            </ul>

            {/* CTA Button */}
            <motion.button
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.8
              }}
              className="mt-10 group flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-gold-500/30">

              <span>ابدأ رحلتك معنا</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>);

}