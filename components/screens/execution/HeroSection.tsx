'use client';
import { useRef, cloneElement } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring } from
'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
  Play,
  Star } from
'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useCountUp } from '@/hooks/useCountUpSec';

type ParticleConfig = {
  delay: number;
  duration: number;
  startX: string;
  startY: string;
  x1: number;
  x2: number;
};

const PARTICLE_CONFIGS: ParticleConfig[] = Array.from(
  {
    length: 30
  },
  () => ({
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    startX: `${Math.random() * 100}%`,
    startY: `${80 + Math.random() * 20}%`,
    x1: Math.random() * 50 - 25,
    x2: Math.random() * 100 - 50
  })
);
// Particle component for the network effect
function Particle({
  delay,
  duration,
  startX,
  startY,
  x1,
  x2





}: {delay: number;duration: number;startX: string;startY: string;x1: number;x2: number;}) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-gold-500 rounded-full"
      style={{
        left: startX,
        top: startY
      }}
      animate={{
        y: [0, -100, -200],
        x: [0, x1, x2],
        opacity: [0, 1, 0],
        scale: [0, 1, 0.5]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut'
      }} />);


}
// Floating stat card with 3D rotation
function FloatingStatCard({
  icon,
  value,
  label,
  color,
  delay






}: {icon: React.ReactNode;value: string;label: string;color: string;delay: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotateY: -30
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateY: 0
      }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring'
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10
      }}
      className="glass-luxury rounded-2xl p-4 md:p-5 transform-gpu"
      style={{
        transformStyle: 'preserve-3d'
      }}>

      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>

          {icon}
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold text-white font-tajawal">
            {value}
          </p>
          <p className="text-xs md:text-sm text-gray-300">{label}</p>
        </div>
      </div>
    </motion.div>);

}
export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.1);
    mouseY.set((e.clientY - centerY) * 0.1);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  const t = useTranslations('executionPage.hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const titleText = t('title');
  const titleWords = titleText.split(' ');
  const ArrowCta = isRTL ? ArrowLeft : ArrowRight;
  // Generate particles
  const particles = PARTICLE_CONFIGS;
  // Sparkle positions
  const sparkles = [
  {
    top: '10%',
    right: '8%',
    delay: 0,
    size: 'w-3 h-3'
  },
  {
    top: '20%',
    right: '88%',
    delay: 0.5,
    size: 'w-2 h-2'
  },
  {
    top: '55%',
    right: '12%',
    delay: 1,
    size: 'w-2.5 h-2.5'
  },
  {
    top: '65%',
    right: '82%',
    delay: 1.5,
    size: 'w-2 h-2'
  },
  {
    top: '35%',
    right: '5%',
    delay: 2,
    size: 'w-3 h-3'
  },
  {
    top: '25%',
    right: '92%',
    delay: 2.5,
    size: 'w-2 h-2'
  },
  {
    top: '75%',
    right: '20%',
    delay: 0.8,
    size: 'w-2.5 h-2.5'
  },
  {
    top: '15%',
    right: '75%',
    delay: 1.2,
    size: 'w-2 h-2'
  },
  {
    top: '45%',
    right: '95%',
    delay: 1.8,
    size: 'w-3 h-3'
  },
  {
    top: '85%',
    right: '45%',
    delay: 2.2,
    size: 'w-2 h-2'
  }];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Layer 1: Deep Background with Ken Burns */}
      <motion.div
        style={{
          y: y1,
          scale
        }}
        className="absolute inset-0 w-full h-full z-0">

        <div className="absolute inset-0 bg-gradient-to-b from-plum-800/95 via-navy-950/90 to-sapphire-800/95 z-10" />
        <img
          src="/imgs/A highlevel financial operatio/image_46.webp"
          alt="Dubai Skyline at Golden Hour"
          width={1920}
          height={1080}
          className="w-full h-full object-cover ken-burns min-h-[70vh]" />

      </motion.div>

      {/* Layer 2: Mid-ground with different parallax */}
      <motion.div
        style={{
          y: y2
        }}
        className="absolute inset-0 w-full h-full z-[1] opacity-40">

        <img
          src="/imgs/A liquidity support concept po/image_26.webp"
          alt="Luxury Boardroom"
          width={1920}
          height={1080}
          className="w-full h-full object-cover mix-blend-overlay min-h-[70vh]" />

      </motion.div>

      {/* Layer 3: Foreground elements */}
      <motion.div
        style={{
          y: y3
        }}
        className="absolute inset-0 w-full h-full z-[2] opacity-20">

        <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 via-transparent to-transparent" />
      </motion.div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 z-[3] bg-mesh-gold opacity-60" />

      {/* Animated Beam Sweeps */}
      <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          animate={{
            x: ['-100%', '500%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 3
          }} />

        <motion.div
          className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
          animate={{
            x: ['-100%', '700%']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 5,
            delay: 2
          }} />

      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Large Gold Orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/20 blur-[100px]"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />


        {/* Teal Orb */}
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-600/15 blur-[120px]"
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }} />


        {/* Fuchsia Orb */}
        <motion.div
          className="absolute top-1/2 right-1/6 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-[80px]"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }} />


        {/* Coral Orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-coral-500/10 blur-[90px]"
          animate={{
            y: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }} />


        {/* Animated Hexagons */}
        <motion.svg
          className="absolute top-16 left-16 w-32 h-32 text-gold-500/15"
          viewBox="0 0 100 100"
          animate={{
            rotate: 360,
            y: [0, -25, 0]
          }}
          transition={{
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}>

          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="currentColor" />

        </motion.svg>

        <motion.svg
          className="absolute bottom-32 right-16 w-20 h-20 text-teal-500/15"
          viewBox="0 0 100 100"
          animate={{
            rotate: -360,
            y: [0, 20, 0]
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}>

          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="currentColor" />

        </motion.svg>

        {/* Sparkle Particles */}
        {sparkles.map((sparkle, i) =>
        <motion.div
          key={i}
          className={`absolute ${sparkle.size} bg-gold-400 rounded-full`}
          style={{
            top: sparkle.top,
            right: sparkle.right
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut'
          }} />

        )}
      </div>

      {/* Rising Golden Particles */}
      <div className="absolute inset-0 z-[11] overflow-hidden pointer-events-none">
        {particles.map((p, i) =>
        <Particle key={i} {...p} />
        )}
      </div>

      {/* Main Content */}
      <div
        className="relative z-20 w-full mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center py-[5%] min-h-screen pt-24 pb-40"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>

        {/* Animated Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            type: 'spring'
          }}
          className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10">

          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500 via-teal-500 to-fuchsia-500 animate-gradient-shift opacity-40"
            style={{
              backgroundSize: '200% 200%'
            }} />

          <div className="absolute inset-[2px] rounded-full bg-navy-950/90 backdrop-blur-xl" />
          <motion.span
            className="relative w-2.5 h-2.5 rounded-full bg-gold-500"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }} />

          <span className="relative text-gold-400 text-sm md:text-base font-semibold tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t('badge')}
          </span>
        </motion.div>

        {/* Animated Title - Word by Word with Elastic Bounce */}
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-tajawal font-black text-white mb-8 leading-[1.05] flex flex-wrap justify-center gap-4 md:gap-6">
          {titleWords.map((word, i) =>
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: 80,
              rotateX: -90
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2 + 0.4,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
            className="text-gradient-gold drop-shadow-2xl inline-block"
            style={{
              textShadow: '0 0 60px rgba(212,175,55,0.5)'
            }}>

              {word}
            </motion.span>
          )}
        </h1>

        {/* Subtitle with Character Animation */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 leading-relaxed mb-14 font-light text-center md:text-center">

          {t('subtitle')}
        </motion.p>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
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
            delay: 1.2
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">

          {/* Primary CTA - Magnetic Button */}
          <motion.button
            style={{
              x: magneticX,
              y: magneticY
            }}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="relative w-full sm:w-auto group flex items-center justify-center gap-3 px-10 py-5 md:px-14 md:py-6 rounded-full font-bold text-lg md:text-xl transition-all overflow-hidden cursor-pointer"
          >

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-[length:200%_100%] animate-gradient-shift" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(212,175,55,0.6)] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.8)] transition-shadow" />
            {/* Shine sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ['0%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }} />

            </div>
            <span className="relative text-navy-950 z-10">
              {t('ctaPrimary')}
            </span>
            <ArrowCta className={`relative w-5 h-5 md:w-6 md:h-6 text-navy-950 z-10 transition-transform ${isRTL ? 'group-hover:translate-x-2' : 'group-hover:-translate-x-2'}`} />
          </motion.button>

          {/* Secondary CTA */}
          <motion.a
            href="#executive-path"
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/15 text-white border border-white/30 hover:border-gold-500/60 px-10 py-5 md:px-14 md:py-6 rounded-full font-bold text-lg md:text-xl transition-all backdrop-blur-md group cursor-pointer"
          >
            <Play className="w-5 h-5 group-hover:text-gold-400 transition-colors" />
            <span>{t('ctaSecondary')}</span>
          </motion.a>
        </motion.div>

        {/* Floating Stat Cards */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5
          }}
          className="flex flex-wrap justify-center gap-4 md:gap-6">

          <FloatingStatCard
            icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6" />}
            value="40+"
            label={t('statStage')}
            color="bg-gradient-to-br from-gold-500 to-gold-700"
            delay={1.6} />

          <FloatingStatCard
            icon={<ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />}
            value="100%"
            label={t('statGovernance')}
            color="bg-gradient-to-br from-teal-500 to-teal-700"
            delay={1.8} />

          <FloatingStatCard
            icon={<Star className="w-5 h-5 md:w-6 md:h-6" />}
            value={t('statBoardValue')}
            label={t('statBoard')}
            color="bg-gradient-to-br from-fuchsia-500 to-fuchsia-700"
            delay={2.0} />

        </motion.div>
      </div>

      {/* Bottom Stats Strip */}
      <motion.div
        style={{
          opacity
        }}
        className="absolute bottom-0 left-0 right-0 z-30 bg-navy-950/95 backdrop-blur-2xl border-t border-gold-500/20">

        <div className="w-full mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-x-reverse divide-white/10">
            <StatItem
              icon={<TrendingUp />}
              value={40}
              suffix="+"
              label={t('statStage')}
              delay={1.2}
              color="gold" />

            <StatItem
              icon={<ShieldCheck />}
              value={100}
              suffix="%"
              label={t('statGovernance')}
              delay={1.4}
              color="teal" />

            <StatItem
              icon={<Users />}
              value={360}
              suffix="°"
              label={t('stat360')}
              delay={1.6}
              color="coral" />

            <StatItem
              icon={<Clock />}
              value={24}
              suffix="/7"
              label={t('stat24')}
              delay={1.8}
              color="fuchsia" />

          </div>
        </div>
      </motion.div>

    </section>);

}
function StatItem({
  icon,
  value,
  suffix,
  label,
  delay,
  color







}: {icon: React.ReactElement<{ className?: string }>;value: number;suffix: string;label: string;delay: number;color: 'gold' | 'teal' | 'coral' | 'fuchsia';}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  const count = useCountUp(value, 2000, isInView);
  const colorClasses = {
    gold: 'text-gold-500 bg-gold-500/15',
    teal: 'text-teal-400 bg-teal-500/15',
    coral: 'text-coral-400 bg-coral-500/15',
    fuchsia: 'text-fuchsia-400 bg-fuchsia-500/15'
  };
  const numberColors = {
    gold: 'text-gold-400',
    teal: 'text-teal-400',
    coral: 'text-coral-400',
    fuchsia: 'text-fuchsia-400'
  };
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {
        opacity: 0,
        y: 25
      }
      }
      transition={{
        duration: 0.7,
        delay
      }}
      className="flex flex-col items-center text-center px-4">

      <motion.div
        className={`${colorClasses[color]} p-3 md:p-4 rounded-2xl mb-3`}
        whileHover={{
          scale: 1.1,
          rotate: 5
        }}>

        {cloneElement(icon, {
          className: 'w-6 h-6 md:w-7 md:h-7'
        })}
      </motion.div>
      <div className="flex items-baseline gap-1 mb-1">
        <span
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${numberColors[color]} font-tajawal`}>

          {count}
        </span>
        <span className="text-xl md:text-2xl font-bold text-white">
          {suffix}
        </span>
      </div>
      <span className="text-sm md:text-base text-gray-400">{label}</span>
    </motion.div>);

}