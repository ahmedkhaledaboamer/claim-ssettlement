"use client";
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUpSec';
import {
  TrendingUp,
  Users,
  Award,
  Clock,
  Building2,
  Handshake,
  Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

const statsConfig = [
  { key: 'stage', icon: TrendingUp, value: 40, suffix: '+', color: 'gold' as const },
  { key: 'clients', icon: Users, value: 500, suffix: '+', color: 'teal' as const },
  { key: 'satisfaction', icon: Award, value: 99, suffix: '%', color: 'coral' as const },
  { key: 'experience', icon: Clock, value: 10, suffix: '+', color: 'fuchsia' as const },
  { key: 'projects', icon: Building2, value: 200, suffix: '+', color: 'purple' as const },
  { key: 'partners', icon: Handshake, value: 15, suffix: '+', color: 'sapphire' as const },
];

const colorConfig = {
  gold: {
    text: 'text-gold-600',
    bg: 'bg-gold-50',
    ring: 'ring-gold-200',
    gradient: 'from-gold-500 to-gold-700',
    bar: 'bg-gold-500'
  },
  teal: {
    text: 'text-teal-600',
    bg: 'bg-teal-50',
    ring: 'ring-teal-200',
    gradient: 'from-teal-500 to-teal-700',
    bar: 'bg-teal-500'
  },
  coral: {
    text: 'text-coral-600',
    bg: 'bg-coral-50',
    ring: 'ring-coral-200',
    gradient: 'from-coral-500 to-coral-700',
    bar: 'bg-coral-500'
  },
  fuchsia: {
    text: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    ring: 'ring-fuchsia-200',
    gradient: 'from-fuchsia-500 to-fuchsia-700',
    bar: 'bg-fuchsia-500'
  },
  purple: {
    text: 'text-purple-600',
    bg: 'bg-purple-50',
    ring: 'ring-purple-200',
    gradient: 'from-purple-500 to-purple-700',
    bar: 'bg-purple-500'
  },
  sapphire: {
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    ring: 'ring-blue-200',
    gradient: 'from-blue-500 to-blue-700',
    bar: 'bg-blue-500'
  }
};
function StatBox({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  color,
  isInView,
  delay,
  index










}: {icon: React.ElementType;value: number;suffix: string;label: string;description: string;color: keyof typeof colorConfig;isInView: boolean;delay: number;index: number;}) {
  const count = useCountUp(value, 2500, isInView);
  const config = colorConfig[color];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0,
        scale: 1
      } :
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      }
      }
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      className="relative group">

      <div className="relative flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Background glow on hover */}
        <motion.div
          className={`absolute inset-0 ${config.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />


        {/* Animated ring */}
        <div className="relative mb-5">
          <motion.div
            className={`absolute inset-0 ${config.bg} rounded-full`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }} />

          <div
            className={`relative w-16 h-16 md:w-20 md:h-20 ${config.bg} rounded-2xl flex items-center justify-center ring-2 ${config.ring} shadow-sm`}>

            <Icon className={`w-8 h-8 md:w-10 md:h-10 ${config.text}`} />
          </div>
        </div>

        {/* Number with animation */}
        <div className="relative flex items-baseline gap-1 mb-2">
          <motion.span
            className={`text-4xl md:text-5xl lg:text-6xl font-black ${config.text} font-tajawal`}>

            {count}
          </motion.span>
          <span className="text-2xl md:text-3xl font-bold text-navy-900">
            {suffix}
          </span>
        </div>

        {/* Label */}
        <span className="text-lg md:text-xl text-navy-900 font-bold mb-1">
          {label}
        </span>
        <span className="text-sm text-gray-500">{description}</span>

        {/* Mini chart visualization */}
        <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${config.bar} rounded-full`}
            initial={{
              width: 0
            }}
            animate={
            isInView ?
            {
              width: `${Math.min(value, 100)}%`
            } :
            {
              width: 0
            }
            }
            transition={{
              duration: 1.5,
              delay: delay + 0.5,
              ease: 'easeOut'
            }} />

        </div>

        {/* Sparkle effect on hover */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}>

          <Sparkles className={`w-5 h-5 ${config.text}`} />
        </motion.div>
      </div>
    </motion.div>);

}
export function StatsSection() {
  const t = useTranslations('executionPage.stats');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  return (
    <section className="relative px-[5%] py-[2%] bg-gradient-to-b from-cream-50 via-white to-cream-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, #0A1929 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />


      {/* Floating orbs - softer for light */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[180px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      {/* Side decorative images */}
      <motion.div
        style={{
          y: y2
        }}
        initial={{
          opacity: 0,
          x: -100
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-96 rounded-r-3xl overflow-hidden shadow-2xl hidden xl:block z-10">

        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80"
          alt="Business Success"
          className="w-full h-full object-cover" />

      </motion.div>

      <motion.div
        style={{
          y: y1
        }}
        initial={{
          opacity: 0,
          x: 100
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-96 rounded-l-3xl overflow-hidden shadow-2xl hidden xl:block z-10">

        <div className="absolute inset-0 bg-gradient-to-l from-cream-50/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80"
          alt="Finance"
          className="w-full h-full object-cover" />

      </motion.div>

      <div className="w-full mx-auto px-4 md:px-6 relative z-20" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-gold-700 text-sm font-medium">{t('badge')}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-navy-900 mb-5">
            {t('title')} <span className="text-gradient-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl text-center">
            {t('lead')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {statsConfig.map((stat, index) => (
            <StatBox
              key={stat.key}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={t(`${stat.key}.label`)}
              description={t(`${stat.key}.desc`)}
              color={stat.color}
              isInView={isInView}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {(['badgeBoard', 'badgeGovernance', 'badgeTransparency'] as const).map((key, i) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm "
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
              >
                <Sparkles className="w-4 h-4 text-gold-500" />
              </motion.div>
              <span className="text-navy-900 text-sm font-medium">{t(key)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>);

}