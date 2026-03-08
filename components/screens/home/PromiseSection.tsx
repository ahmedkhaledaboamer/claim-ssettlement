'use client';
import { motion } from 'framer-motion';
import { SparklesIcon, CheckCircleIcon, ShieldCheckIcon } from 'lucide-react';
import { FadeUp } from './ScrollAnimations';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function PromiseSection() {
  const t = useTranslations('home.promise');
  const lines = t.raw('lines') as string[];
  const badges = t.raw('badges') as { fullCommitment: string; totalTransparency: string; absoluteConfidentiality: string };

  return (
    <section className="relative section-padding overflow-hidden px-[5%] py-[2%]">
      {/* Background Image */}
      <div className="absolute inset-0 min-h-[320px]">
        <Image
          width={1920}
          height={1080}
          sizes="100vw"
          src="/imgs/32 A project finance environme/image_39.webp"
          alt="خلفية"
          className="w-full h-full object-cover img-fluid-cover min-h-[320px]" />

        <div className="absolute inset-0 bg-gradient-to-br from-imperial-500/95 via-imperial-500/90 to-imperial-600/95" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-20 right-20 w-40 h-40 border-4 border-navy-900/10 rounded-full" />

        <motion.div
          animate={{
            rotate: [360, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-20 left-20 w-60 h-60 border-4 border-white/10 rounded-full" />

        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-2xl rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-navy-900/5 rounded-full" />

        {/* Particle Effects */}
        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i % 3 * 25}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3
          }} />

        )}
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Trust Seal */}
        <FadeUp>
          <div className="relative inline-block mb-8">
            {/* Rotating Border */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                'conic-gradient(from 0deg, transparent, rgba(15, 23, 42, 0.3), transparent)',
                padding: '3px'
              }}>

              <div className="w-full h-full bg-gold-500 rounded-full" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-24 h-24 bg-navy-900/10 rounded-full flex items-center justify-center">

              <ShieldCheckIcon className="w-12 h-12 text-navy-900" />
            </motion.div>
          </div>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.1}>
          <h2 className="text-fluid-7xl font-cairo font-bold text-navy-900 mb-12">
            {t('title')}
          </h2>
        </FadeUp>

        {/* Promise Text */}
        <FadeUp delay={0.2}>
          <div className="space-y-8">
            {lines.map((line) => (
              <p
                key={line}
                className="text-fluid-2xl  text-navy-800 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>
        </FadeUp>

        {/* Signature Line Effect */}
        <FadeUp delay={0.3}>
          <div className="mt-14 flex items-center justify-center gap-4">
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: 64
              }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className="h-1 bg-navy-900/20 rounded-full" />

            <motion.div
              initial={{
                scale: 0
              }}
              whileInView={{
                scale: 1
              }}
              transition={{
                duration: 0.5,
                delay: 1
              }}
              className="w-4 h-4 bg-navy-900/30 rounded-full" />

            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: 64
              }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className="h-1 bg-navy-900/20 rounded-full" />

          </div>
        </FadeUp>

        {/* Trust Badges */}
        <FadeUp delay={0.4}>
          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <div className="flex items-center gap-2 bg-navy-900/10 rounded-full px-5 py-2.5">
              <CheckCircleIcon className="w-5 h-5 text-navy-900" />
              <span className=" text-navy-900 text-fluid-body">
                {badges.fullCommitment}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-navy-900/10 rounded-full px-5 py-2.5">
              <SparklesIcon className="w-5 h-5 text-navy-900" />
              <span className=" text-navy-900 text-fluid-body">
                {badges.totalTransparency}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-navy-900/10 rounded-full px-5 py-2.5">
              <ShieldCheckIcon className="w-5 h-5 text-navy-900" />
              <span className=" text-navy-900 text-fluid-body">
                {badges.absoluteConfidentiality}
              </span>
            </div>
          </div>
        </FadeUp>
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
            fill="#F2F0E6" />

        </svg>
      </div>
    </section>);

}