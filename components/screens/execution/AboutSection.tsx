'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { TrendingUp, Shield, Award, Sparkles } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('executionPage.about');
  const locale = useLocale();
  const isRTL = locale === 'ar';
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
      className="px-[5%] py-[2%] bg-section-cream relative overflow-hidden">

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


      <div className="w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`lg:w-1/2 text-center md:text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >

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
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className={`h-px w-16 bg-gradient-to-r from-gold-500 to-transparent ${isRTL ? '' : 'rotate-180'}`} />
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-gold-600 font-bold tracking-wider text-sm uppercase">
                  {t('badge')}
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
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-black text-navy-900 mb-8 leading-[1.3]"
            >
              {t('titlePart1')}{' '}
              <span className="text-gradient-teal">
                {t('titlePart2')}
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
                }}
              >
                {t('p1')}
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
                }}
              >
                {t('p2')}
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
                className="relative mt-10"
              >
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-teal-500 to-gold-500 rounded-2xl opacity-30 blur-sm animate-gradient-shift"
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
                <div className={`relative bg-white rounded-xl shadow-xl p-6 ${isRTL ? 'border-r-4' : 'border-l-4'} border-gold-500`}>
                  <p className="font-bold text-navy-800 text-xl leading-[1.9]">
                    {t('quote')}
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
              className="flex items-center justify-center lg:justify-start gap-6 mt-12"
            >
              <div className={`flex -space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                {[
                  '/imgs/A missioncentered executive en/image_58.webp', '/imgs/A monumental executive operati/image_46.webp', '/imgs/A monumental financial operati/image_52.webp', '/imgs/A multinational corporate land/image_10.webp',
                ].map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt=""
                    width={112}
                    height={112}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover min-w-[56px] min-h-[56px]"
                    whileHover={{
                      scale: 1.1,
                      zIndex: 10
                    }}
                  />
                ))}
              </div>
              <div className="text-center lg:text-left">
                <p className="text-lg font-bold text-navy-900">
                  {t('teamLabel')}
                </p>
                <p className="text-sm text-gray-500">{t('teamSub')}</p>
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
              <Image
                src="/imgs/A panoramic executive tower in/image_1.webp"
                alt="Business Meeting"
                width={800}
                height={600}
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
              <Image
                src="/imgs/A partnershipdriven executive/image_61.webp"
                alt="Finance Work"
                width={800}
                height={600}
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
              <Image
                src="/imgs/A philosophydriven funding con/image_72.webp"
                alt="Modern Office"
                width={800}
                height={600}
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
              <Image
                src="/imgs/A portfolio diversification vi/image_34.webp"
                alt="Team Collaboration"
                width={800}
                height={600}
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

              <Image
                src="/imgs/A powerful boardlevel executiv/image_38.webp"
                alt="Handshake"
                width={400}
                height={300}
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
              <span className="text-xs  text-center">{t('governance')}</span>
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
              <span className="text-xs ">{t('phase')}</span>
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
              <span className="text-[10px] ">{t('satisfaction')}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}