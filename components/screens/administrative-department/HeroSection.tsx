'use client';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  locale: string;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('administrativeDepartmentPage.hero');
  const scrollToTeam = () => {
    document.getElementById('introduction')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/A powerful commitment visualiz/image_13.webp"
          alt={t('backgroundAlt')}
          className="w-full h-full object-cover min-h-[50vh]"
          loading="eager"
          width={1920}
          height={1080}
          sizes="100vw"
          />

        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-white/80 to-white/95" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
            'radial-gradient(circle, rgba(14, 116, 144, 0.15) 0%, transparent 70%)'
          }} />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)'
          }} />

      </div>

      {/* Content */}
      <div className="relative z-10   text-center">
        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">

          <SparklesIcon className="w-4 h-4 text-teal-600" />
          <span className="text-fluid-label text-slate-600">
            {t('badge')}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-fluid-hero font-black mb-6">
          <span className="gradient-text-gold">{t('titleLine1')}</span>
          <br />
          <span className="text-slate-900">{t('titleLine2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-fluid-section-lead text-slate-600   mb-12 leading-relaxed">
          {t('subtitle')}
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">

          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-fluid-stat font-black gradient-text-gold mb-2">
              {t('stat1')}
            </div>
            <div className="text-fluid-body text-slate-500">
              {t('stat1Label')}
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-fluid-stat font-black gradient-text-gold mb-2">
              {t('stat2')}
            </div>
            <div className="text-fluid-body text-slate-500">
              {t('stat2Label')}
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-fluid-stat font-black gradient-text-gold mb-2">
              {t('stat3')}
            </div>
            <div className="text-fluid-body text-slate-500">
              {t('stat3Label')}
            </div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-fluid-stat font-black gradient-text-gold mb-2">
              {t('stat4')}
            </div>
            <div className="text-fluid-body text-slate-500">
              {t('stat4Label')}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.8
          }}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={scrollToTeam}
          className="cursor-pointer group relative px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-fluid-body-lg shadow-lg overflow-hidden">

          <span className="relative z-10">
            {t('cta')}
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400"
            initial={{
              x: '100%'
            }}
            whileHover={{
              x: 0
            }}
            transition={{
              duration: 0.3
            }} />

        </motion.button>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>);

}