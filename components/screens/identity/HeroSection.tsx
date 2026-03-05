'use client';
import { useCallback, useEffect, useState, useMemo } from 'react';
import {
  Shield,
  ChevronDown,
  Sparkles} from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMessages } from 'next-intl';

const HERO_IMAGES = [
  { bg: '/imgs/6 A premium service portfolio/image_5.webp', thumb: '/imgs/81 A minimalist audit chamber/image_0.webp' },
  { bg: '/imgs/7 A capital journey corridor i/image_6.webp', thumb: '/imgs/82 A strategic financial analy/image_1.webp' },
  { bg: '/imgs/8 A layered financial operatio/image_7.webp', thumb: '/imgs/83 A credit evaluation center/image_2.webp' },
];

export function HeroSection() {
  const messages = useMessages();
  const hero = (messages?.identityPage as Record<string, unknown>)?.hero as {
    badge?: string;
    exploreCta?: string;
    journeyCta?: string;
    scrollAria?: string;
    goToSlideAria?: string;
    slides?: Array<{ title: string; titleAccent: string; subtitle: string; label: string }>;
  } | undefined;
  const defaultSlides = [
    { title: 'Financial identity', titleAccent: 'that defines us', subtitle: 'Not just a broker… a financial entity with a vision, a methodology, and operational capacity managed at board level.', label: 'Our identity' },
    { title: 'Strategic vision', titleAccent: 'for financing', subtitle: 'We read the financial reality in depth and build financing files to professional standards that ensure the best terms and lowest risks.', label: 'Our vision' },
    { title: 'Reliable', titleAccent: 'and sustainable results', subtitle: 'We measure our success by approval rates, quality of terms, and client satisfaction.', label: 'Our results' },
  ];
  const heroSlides = useMemo(() => {
    const slides = (hero?.slides?.length ? hero.slides : defaultSlides) as Array<{ title: string; titleAccent: string; subtitle: string; label: string }>;
    return slides.map((s, id) => ({
      id,
      ...(HERO_IMAGES[id] ?? { bg: '', thumb: '' }),
      title: s.title,
      titleAccent: s.titleAccent,
      subtitle: s.subtitle,
      label: s.label,
    }));
  }, [hero?.slides]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
    },
    [activeSlide]
  );
  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);
  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);
  const slide = heroSlides[activeSlide];
  const bgVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.1
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.5
      }
    })
  };
  const contentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: 40,
      x: dir * 30
    }),
    center: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: -20,
      x: dir * -30,
      transition: {
        duration: 0.3
      }
    })
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center p-[5%] overflow-hidden">

      {/* Animated Background */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0 min-h-[70vh]">

          <img src={slide.bg} alt="" width={1200} height={800} className="w-full h-full object-cover min-h-[70vh]" />
          <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-KIB-text/65 via-KIB-text/45 to-KIB-gold/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-KIB-light" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative floating shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-32 right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-KIB-gold/10 backdrop-blur-xl border border-KIB-gold/20 hidden md:block z-[1]" />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-40 left-[10%] w-24 h-24 md:w-40 md:h-40 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hidden md:block rotate-12 z-[1]" />

      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-1/2 left-[5%] w-16 h-16 rounded-full bg-KIB-gold/15 backdrop-blur-lg hidden lg:block z-[1]" />


      {/* Content */}
      <div className="relative z-10    px-6 sm:px-8 lg:px-12 text-center">
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
          className="inline-flex items-center justify-center p-4 px-6 mb-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]">

          <Shield className="w-7 h-7 text-KIB-gold mr-3" />
          <span className="text-white font-heading font-bold tracking-wider ml-3 text-fluid-label">
            {hero?.badge ?? 'KIB Financing Brokerage'}
          </span>
          <Sparkles className="w-5 h-5 text-KIB-gold/70 mr-3" />
        </motion.div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit">

            <h1 className="text-fluid-hero font-heading font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {slide.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-KIB-goldLight via-KIB-gold to-yellow-300">
                {slide.titleAccent}
              </span>
            </h1>
            <p className="text-fluid-section-lead text-white/80 font-body   leading-relaxed mb-12 font-medium">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

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
            duration: 0.6,
            delay: 0.6
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">

          <a
            href="#identity"
            className="w-full sm:w-auto px-10 py-5 bg-KIB-gold hover:bg-KIB-goldLight text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_8px_30px_rgba(197,160,40,0.4)] text-fluid-body-lg">

            {hero?.exploreCta ?? 'Explore our identity'}
          </a>
          <a
            href="#journey"
            className="w-full sm:w-auto px-10 py-5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-fluid-body-lg">

            {hero?.journeyCta ?? 'Client journey'}
          </a>
        </motion.div>

        {/* Slide Navigation Thumbnails */}
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
            duration: 0.7,
            delay: 0.9
          }}
          className="flex justify-center items-center gap-5">

          {heroSlides.map((s, i) =>
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            className={`cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.25)] group
                ${activeSlide === i ? 'w-32 h-32 md:w-40 md:h-40 border-3 border-KIB-gold ring-4 ring-KIB-gold/30 scale-105' : 'w-24 h-24 md:w-32 md:h-32 border-2 border-white/25 opacity-60 hover:opacity-90 hover:scale-105'}`}
            aria-label={hero?.goToSlideAria?.replace('{label}', s.label) ?? `Go to ${s.label}`}>

              <img
              src={s.thumb}
              alt={s.label}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 min-h-[120px]" />

              <div
              className={`absolute inset-0 transition-all duration-300 ${activeSlide === i ? 'bg-KIB-gold/10' : 'bg-black/30 group-hover:bg-black/10'}`} />

              <div
              className={`absolute bottom-0 inset-x-0 p-2 text-center transition-all duration-300 ${activeSlide === i ? 'bg-KIB-gold/80 backdrop-blur-sm' : 'bg-black/50 backdrop-blur-sm'}`}>

                <span className="text-white font-heading font-bold text-fluid-label">
                  {s.label}
                </span>
              </div>
            </button>
          )}
        </motion.div>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mt-6">
          {heroSlides.map((_, i) =>
          <div
            key={i}
            className="h-1 rounded-full overflow-hidden bg-white/20 w-16">

              {activeSlide === i &&
            <motion.div
              className="h-full bg-KIB-gold rounded-full"
              initial={{
                width: '0%'
              }}
              animate={{
                width: '100%'
              }}
              transition={{
                duration: 6,
                ease: 'linear'
              }}
              key={`progress-${activeSlide}`} />

            }
            </div>
          )}
        </div>
      </div>

      <motion.div
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">

        <a
          href="#identity"
          aria-label={hero?.scrollAria ?? 'Scroll down'}
          className="text-white/60 hover:text-KIB-gold transition-colors">

          <ChevronDown className="w-10 h-10" />
        </a>
      </motion.div>
    </section>);

}