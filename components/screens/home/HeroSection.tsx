'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, SparklesIcon } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  borderColor: string;
}
const heroImages = [
'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80',
'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1920&q=80'];

// Luxury particles (champagne bubbles effect)
const particles = Array.from({
  length: 20
}).map((_, i) => ({
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 8 + 3,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 10,
  horizontalOffset: Math.random() * 100 - 50
}));
function StatItem({ value, suffix, label, delay, borderColor }: StatItemProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return (
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
        delay: delay / 1000 + 0.5,
        duration: 0.8,
        ease: 'easeOut'
      }}
      className={`text-center relative p-4 border-r border-white/10`}>

      <div className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-imperial-500 to-transparent opacity-50" />
      <div className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold gradient-text-imperial text-gold-400 mb-2 drop-shadow-lg">
        {suffix === '%' ? count : `+${count}`}
        {suffix === '%' ? '%' : ''}
      </div>
      <div className="text-white/70 font-tajawal text-sm md:text-base tracking-wide">
        {label}
      </div>
    </motion.div>);

}
function TypingText({ text, delay = 0 }: {text: string;delay?: number;}) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-blink text-imperial-400">|</span>}
    </span>);

}
export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">

      {/* Cinematic Background Slideshow */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 z-0">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Luxury Financial District"
            initial={{
              opacity: 0,
              scale: 1.05
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 w-full h-full object-cover" />

        </AnimatePresence>
        {/* Luxury Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/80 to-midnight/95" />
        {/* Subtle Color Shift Overlay */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 bg-gradient-to-tr from-royal-900/40 via-transparent to-sapphire-900/40 mix-blend-overlay" />

      </motion.div>

      {/* Rising Golden Particles (Champagne Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((particle, index) =>
        <motion.div
          key={index}
          className="absolute rounded-full bg-imperial-400"
          style={{
            left: particle.x,
            bottom: '-5%',
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            opacity: 0
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, particle.horizontalOffset],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear'
          }} />

        )}
      </div>

      {/* Elegant Floating Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] border border-imperial-500/10 rounded-full" />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] border border-white/5 rounded-full" />

      </div>

      {/* Main Content */}
      <motion.div
        style={{
          opacity
        }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">

        {/* Luxury Badge */}
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
            delay: 0.2,
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="relative inline-flex items-center justify-center mb-10 group">

          <div className="absolute inset-0 bg-imperial-500/20 blur-xl rounded-full group-hover:bg-imperial-500/30 transition-all duration-500" />
          <div className="relative glass-luxury rounded-full px-6 py-2.5 flex items-center gap-3">
            <SparklesIcon className="w-4 h-4 text-imperial-400 animate-pulse" />
            <span className="text-white/90 font-tajawal text-sm tracking-wider">
              كيه إي بي لوساطة التمويل ش.ذ.م.م
            </span>
            <SparklesIcon className="w-4 h-4 text-imperial-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Grand Headline */}
        <div className="mb-12">
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
              delay: 0.4,
              duration: 1,
              ease: 'easeOut'
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-cairo font-bold text-white leading-[1.1] drop-shadow-2xl">

            نربطك بالتمويل المناسب...
            <br />
            ونصنع لك طريقًا ماليًا{' '}
            <span className="gradient-text-imperial relative inline-block">
              آمنًا للنمو
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-imperial-400 to-transparent"
                initial={{
                  scaleX: 0
                }}
                animate={{
                  scaleX: 1
                }}
                transition={{
                  delay: 1.5,
                  duration: 1.5
                }} />

            </span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 1
          }}
          className="text-lg md:text-xl lg:text-2xl text-white/70 font-tajawal max-w-4xl mx-auto mb-16 leading-relaxed min-h-[5rem] font-light">

          <TypingText
            text="في بيئة مالية تتغير فيها الشروط بسرعة، وتزداد فيها متطلبات التوسع، نحن ذراعك المالية التنفيذية — نحلل، نرتّب، نفاوض، ونغلق لك التمويل الذي يناسب حجمك وطموحك."
            delay={1400} />

        </motion.p>

        {/* Luxury Stats Strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1.8,
            duration: 1
          }}
          className="relative max-w-5xl mx-auto">

          <div className="absolute inset-0 bg-imperial-500/5 blur-3xl rounded-full" />
          <div className="relative glass-dark-luxury rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
              <StatItem
                value={500}
                suffix="+"
                label="عميل راضٍ"
                delay={2000}
                borderColor="border-imperial-500" />

              <StatItem
                value={2}
                suffix="+"
                label="مليار درهم تمويل"
                delay={2200}
                borderColor="border-sapphire-500" />

              <StatItem
                value={50}
                suffix="+"
                label="جهة تمويلية"
                delay={2400}
                borderColor="border-emerald-500" />

              <StatItem
                value={98}
                suffix="%"
                label="نسبة الموافقة"
                delay={2600}
                borderColor="border-ruby-500" />

            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2.5,
          duration: 1
        }}
        className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">

        <span className="cursor-pointer text-imperial-400/70 font-tajawal text-lg uppercase tracking-[0.2em]">
          اكتشف المسار
        </span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-imperial-400 to-transparent" />

        </div>
      </motion.div>

      {/* Luxury Gradient Fade Transition (Replaces Wave) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-pearl to-transparent z-20" />
    </section>);

}