'use client';
import { motion } from 'framer-motion';
import { ChevronDownIcon, SparklesIcon } from 'lucide-react';
export function HeroSection() {
  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="مبنى مكتبي حديث"
          className="w-full h-full object-cover"
          loading="eager" />

        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
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
          <span className="text-sm text-slate-600">
            KEP Financing Brokerage
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
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">

          <span className="gradient-text-gold">الجهاز الإداري</span>
          <br />
          <span className="text-slate-900">المتكامل</span>
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
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">

          فريق متكامل من{' '}
          <span className="text-teal-600 font-bold">١٥ منصباً تنفيذياً</span>{' '}
          يعمل بتناغم تام
          <br className="hidden md:block" />
          لتحويل طموحاتك التمويلية إلى واقع ملموس
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
            <div className="text-4xl md:text-5xl font-black gradient-text-gold mb-2">
              ١٥
            </div>
            <div className="text-sm text-slate-500">منصب تنفيذي</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl font-black gradient-text-gold mb-2">
              ٩
            </div>
            <div className="text-sm text-slate-500">مراحل متكاملة</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl font-black gradient-text-gold mb-2">
              ٥
            </div>
            <div className="text-sm text-slate-500">مستويات خدمة</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-4xl md:text-5xl font-black gradient-text-gold mb-2">
              ٩٤٪
            </div>
            <div className="text-sm text-slate-500">نسبة النجاح</div>
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
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-lg shadow-lg overflow-hidden">

          <span className="relative z-10">اكتشف الفريق التنفيذي</span>
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToTeam}>

            <span className="text-xs text-slate-400">اكتشف المزيد</span>
            <ChevronDownIcon className="w-6 h-6 text-teal-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>);

}