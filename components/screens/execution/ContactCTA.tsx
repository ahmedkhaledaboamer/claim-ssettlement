"use client";
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Award,
  Sparkles,
  Phone,
  MessageCircle } from
'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
export function ContactCTA() {
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section className="relative py-36 md:py-48 bg-cream-50 overflow-hidden">
      {/* Background photo - visible and light */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern Office"
          className="w-full h-full object-cover opacity-10" />

      </div>

      {/* Soft floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Photo side */}
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
            className="lg:w-1/2 hidden lg:block">

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Corporate Building"
                  className="w-full h-[500px] object-cover" />

              </div>
              {/* Overlapping smaller photo */}
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
                  once: true
                }}
                transition={{
                  delay: 0.3
                }}
                className="absolute -bottom-8 -right-8 w-64 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">

                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
                  alt="Business Handshake"
                  className="w-full h-full object-cover" />

              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="lg:w-1/2 text-center lg:text-right">

            {/* Badge */}
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
                once: true
              }}
              className="mb-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 bg-gold-500/10">

              <Sparkles className="w-5 h-5 text-gold-600" />
              <span className="text-gold-700 text-sm md:text-base font-bold tracking-wider">
                بصوت مجلس الإدارة
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-navy-900 mb-8 leading-[1.15]">

              التمويل ليس معاملة...{' '}
              <span className="text-gradient-gold block mt-2">
                بل صناعة تُدار بمنهج وتُغلق بثقة
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="text-lg md:text-xl text-gray-600 leading-[1.9] mb-14 font-light">

              وفي ختام هذا المسار، يؤكد مجلس إدارة كيه إي بي أن هذا النموذج
              التنفيذي لم يُبنَ ليكون مجرد إطار تنظيمي، بل ليكون درعًا ماليًا
              يحمي العميل من المخاطر.
            </motion.p>

            {/* CTA Buttons */}
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
                once: true
              }}
              transition={{
                delay: 0.3
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-14">

              {/* Primary CTA */}
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="group inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-navy-900 px-12 py-6 md:px-16 md:py-7 rounded-full font-bold text-xl md:text-2xl transition-all shadow-lg hover:shadow-gold-500/30">

                <span>ابدأ معنا اليوم</span>
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.a
                href="tel:+966112345678"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-10 py-6 rounded-full font-bold text-lg transition-all shadow-lg">

                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
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
                delay: 0.4
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">

              {[
              {
                icon: ShieldCheck,
                text: 'حوكمة معتمدة'
              },
              {
                icon: Lock,
                text: 'أمان 100%'
              },
              {
                icon: Award,
                text: 'سرية تامة'
              },
              {
                icon: MessageCircle,
                text: 'دعم 24/7'
              }].
              map((badge, i) =>
              <motion.div
                key={badge.text}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm">

                  <badge.icon className="w-5 h-5 text-gold-600" />
                  <span className="text-navy-900 text-sm font-medium">
                    {badge.text}
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Final message */}
            <motion.p
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.5
              }}
              className="mt-12 text-gray-500 text-base md:text-lg">

              ودع المسار التنفيذي يصبح الطريق الذي يرفع مشروعك إلى مستوى أعلى من
              الاستقرار، والنمو، والقدرة على المنافسة.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>);

}