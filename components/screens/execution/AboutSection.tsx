'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { TrendingUp, Shield, Award, Sparkles } from 'lucide-react';
export function AboutSection() {
  const { ref, controls } = useScrollReveal();
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 md:py-44 bg-section-cream relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-400/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-teal-500/15 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, #0A1929 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="lg:w-1/2">

            {/* Section badge */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="flex items-center gap-4 mb-8">

              <div className="h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-gold-600 font-bold tracking-wider text-sm uppercase">
                  من نحن
                </span>
              </span>
            </motion.div>

            <motion.h2
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
                delay: 0.1
              }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-tajawal font-black text-navy-900 mb-8 leading-[1.15]">

              في قطاع مالي لا يرحم التردد،{' '}
              <span className="text-gradient-teal">
                ولا يتسامح مع القرارات غير المحسوبة
              </span>
            </motion.h2>

            <div className="space-y-6 text-gray-700 font-cairo text-lg leading-[2]">
              <motion.p
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
                  delay: 0.2
                }}>

                اعتمد مجلس إدارة كيه إي بي مسارًا تنفيذيًا يمثل الإطار الذي
                تُدار من خلاله كل خطوة في رحلة العميل التمويلية، مسارًا لا يقوم
                على الاجتهاد الفردي، بل على منهج مؤسسي يجمع بين الحوكمة، الأمان،
                الامتثال، الرقابة، والتحليل العميق.
              </motion.p>

              <motion.p
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
                  delay: 0.3
                }}>

                هذا المسار لم يُصمم ليكون مجرد سلسلة إجراءات، بل ليكون بنية
                تشغيلية متكاملة تضمن أن كل ملف ينتقل عبر مراحل مدروسة تُبنى على
                بيانات دقيقة، وتقييم صارم، وتخطيط محكم، وتفاوض محسوب، وإغلاق لا
                يترك مجالًا للخطأ.
              </motion.p>

              {/* Enhanced Quote Block */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.4
                }}
                className="relative mt-10">

                <div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-teal-500 to-gold-500 rounded-2xl opacity-30 blur-sm animate-gradient-shift"
                  style={{
                    backgroundSize: '200% 200%'
                  }} />

                <div className="relative bg-white rounded-xl shadow-xl p-6 border-r-4 border-gold-500">
                  <p className="font-bold text-navy-800 text-xl leading-[1.9]">
                    نحن لا نبحث عن التمويل كغاية، بل نبحث عن قرار مالي آمن،
                    مستدام، ومبني على رؤية مجلس إدارة.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Team strip */}
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
                delay: 0.5
              }}
              className="flex items-center gap-6 mt-12">

              <div className="flex -space-x-4 space-x-reverse">
                {[
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80'].
                map((src, i) =>
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  className="w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover"
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10
                  }} />

                )}
              </div>
              <div>
                <p className="text-lg font-bold text-navy-900">
                  +500 عميل راضٍ
                </p>
                <p className="text-sm text-gray-500">يثقون في خدماتنا</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <div className="lg:w-1/2 relative h-[700px] md:h-[800px] w-full">
            {/* Main large image */}
            <motion.div
              style={{
                y: y1,
                rotate: rotate1
              }}
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="absolute top-0 right-0 w-[70%] h-64 md:h-72 rounded-3xl overflow-hidden shadow-2xl z-20 group">

              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent z-10 group-hover:opacity-70 transition-opacity" />
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                alt="Business Meeting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Golden overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            </motion.div>

            {/* Second image */}
            <motion.div
              style={{
                y: y2
              }}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="absolute bottom-32 right-8 w-[65%] h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl z-30 group">

              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Finance Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            </motion.div>

            {/* Third image */}
            <motion.div
              style={{
                rotate: rotate2
              }}
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
                duration: 0.8,
                delay: 0.6
              }}
              className="absolute top-1/4 left-0 w-[55%] h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl z-10 group">

              <div className="absolute inset-0 bg-gradient-to-t from-coral-900/40 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80"
                alt="Modern Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            </motion.div>

            {/* Fourth image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}
              className="absolute bottom-0 left-4 w-[45%] h-56 rounded-3xl overflow-hidden shadow-2xl z-25 group">

              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/40 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            </motion.div>

            {/* Fifth small image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 1
              }}
              className="absolute top-[15%] left-[35%] w-[30%] h-40 rounded-2xl overflow-hidden shadow-xl z-35 group">

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
                alt="Handshake"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

            </motion.div>

            {/* Floating Badge - Governance */}
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                delay: 1.1
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5
              }}
              className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 z-40 bg-navy-900 text-white w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-cream-100">

              <Shield className="w-7 h-7 text-gold-400 mb-1" />
              <span className="text-2xl md:text-3xl font-black text-gold-400">
                100%
              </span>
              <span className="text-xs font-tajawal text-center">حوكمة</span>
            </motion.div>

            {/* Floating Badge - Steps */}
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                delay: 1.3
              }}
              whileHover={{
                scale: 1.1,
                rotate: -5
              }}
              className="absolute top-12 left-1/3 z-40 bg-gradient-to-br from-teal-500 to-teal-700 text-white w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-cream-100">

              <TrendingUp className="w-6 h-6 text-white mb-1" />
              <span className="text-xl md:text-2xl font-black">40+</span>
              <span className="text-xs font-tajawal">مرحلة</span>
            </motion.div>

            {/* Floating Badge - Award */}
            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                delay: 1.5
              }}
              whileHover={{
                scale: 1.1
              }}
              className="absolute bottom-24 right-0 z-40 bg-gradient-to-br from-gold-500 to-gold-700 text-navy-900 w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-cream-100">

              <Award className="w-5 h-5 mb-1" />
              <span className="text-lg md:text-xl font-black">99%</span>
              <span className="text-[10px] font-tajawal">رضا</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}