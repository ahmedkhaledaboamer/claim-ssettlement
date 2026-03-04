'use client';
import { useCallback, useEffect, useState } from 'react';
import {
  Shield,
  ChevronDown,
  Sparkles} from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const heroSlides = [
{
  id: 0,
  bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
  thumb: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300',
  title: 'الهوية المالية',
  titleAccent: 'التمويلية',
  subtitle:
  'ليس مجرد وسيط… بل كيان مالي يمتلك رؤية، ومنهج، وقدرة تشغيلية تُدار بمستوى مجلس إدارة.',
  label: 'هويتنا'
},
{
  id: 1,
  bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
  thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300',
  title: 'رؤية استراتيجية',
  titleAccent: 'للتمويل',
  subtitle:
  'نقرأ الواقع المالي بعمق، ونبني ملفات تمويلية بمعايير احترافية تضمن أفضل الشروط وأقل المخاطر.',
  label: 'رؤيتنا'
},
{
  id: 2,
  bg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200',
  thumb: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300',
  title: 'نتائج موثوقة',
  titleAccent: 'ومستدامة',
  subtitle:
  'نقيس نجاحنا بنسبة الموافقات، وجودة الشروط، ورضا العميل. لا نعدك بتمويل… نعدك بطريق واضح إليه.',
  label: 'نتائجنا'
}];

export function HeroSection() {
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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Animated Background */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0">

          <img src={slide.bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-kep-text/65 via-kep-text/45 to-kep-gold/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-kep-light" />
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
        className="absolute top-32 right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-kep-gold/10 backdrop-blur-xl border border-kep-gold/20 hidden md:block z-[1]" />

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
        className="absolute top-1/2 left-[5%] w-16 h-16 rounded-full bg-kep-gold/15 backdrop-blur-lg hidden lg:block z-[1]" />


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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

          <Shield className="w-7 h-7 text-kep-gold mr-3" />
          <span className="text-white font-heading font-bold tracking-wider ml-3 text-base md:text-lg">
            كيه إي بي لوساطة التمويل
          </span>
          <Sparkles className="w-5 h-5 text-kep-gold/70 mr-3" />
        </motion.div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit">

            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {slide.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kep-goldLight via-kep-gold to-yellow-300">
                {slide.titleAccent}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-body max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
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
            className="w-full sm:w-auto px-10 py-5 bg-kep-gold hover:bg-kep-goldLight text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_8px_30px_rgba(197,160,40,0.4)] text-lg">

            استكشف هويتنا
          </a>
          <a
            href="#journey"
            className="w-full sm:w-auto px-10 py-5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-lg">

            رحلة العميل
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
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.25)] group
                ${activeSlide === i ? 'w-32 h-32 md:w-40 md:h-40 border-3 border-kep-gold ring-4 ring-kep-gold/30 scale-105' : 'w-24 h-24 md:w-32 md:h-32 border-2 border-white/25 opacity-60 hover:opacity-90 hover:scale-105'}`}
            aria-label={`الانتقال إلى ${s.label}`}>

              <img
              src={s.thumb}
              alt={s.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              <div
              className={`absolute inset-0 transition-all duration-300 ${activeSlide === i ? 'bg-kep-gold/10' : 'bg-black/30 group-hover:bg-black/10'}`} />

              <div
              className={`absolute bottom-0 inset-x-0 p-2 text-center transition-all duration-300 ${activeSlide === i ? 'bg-kep-gold/80 backdrop-blur-sm' : 'bg-black/50 backdrop-blur-sm'}`}>

                <span className="text-white font-heading font-bold text-xs md:text-sm">
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
              className="h-full bg-kep-gold rounded-full"
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
          aria-label="التمرير للأسفل"
          className="text-white/60 hover:text-kep-gold transition-colors">

          <ChevronDown className="w-10 h-10" />
        </a>
      </motion.div>
    </section>);

}