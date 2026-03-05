"use client";
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const servicesConfig = [
  { key: 'realEstate', img: '/imgs/A corporate expansion visualiz/image_18.webp', color: 'teal', icon: '🏢' },
  { key: 'commercial', img: '/imgs/A corporate refinancing concep/image_38.webp', color: 'gold', icon: '💼' },
  { key: 'facilities', img: '/imgs/A corporate refinancing concep/image_45.webp', color: 'coral', icon: '🏭' },
  { key: 'restructuring', img: '/imgs/A financial restructuring conc/image_19.webp', color: 'purple', icon: '🔄' },
  { key: 'advisory', img: '/imgs/A financial forecasting center/image_51.webp', color: 'fuchsia', icon: '📊' },
  { key: 'personal', img: '/imgs/A financial optimization visua/image_17.webp', color: 'green', icon: '👤' },
];

const colorConfig = {
  teal: {
    overlay: 'from-teal-900/90 via-teal-800/70',
    shadow: 'hover:shadow-teal-500/30',
    border: 'hover:border-teal-500/50',
    badge: 'bg-gradient-to-r from-teal-500 to-teal-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,166,147,0.4)]'
  },
  gold: {
    overlay: 'from-gold-900/90 via-gold-800/70',
    shadow: 'hover:shadow-gold-500/30',
    border: 'hover:border-gold-500/50',
    badge: 'bg-gradient-to-r from-gold-500 to-gold-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]'
  },
  coral: {
    overlay: 'from-coral-900/90 via-coral-800/70',
    shadow: 'hover:shadow-coral-500/30',
    border: 'hover:border-coral-500/50',
    badge: 'bg-gradient-to-r from-coral-500 to-coral-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(224,17,95,0.4)]'
  },
  purple: {
    overlay: 'from-purple-900/90 via-purple-800/70',
    shadow: 'hover:shadow-purple-500/30',
    border: 'hover:border-purple-500/50',
    badge: 'bg-gradient-to-r from-purple-500 to-purple-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]'
  },
  fuchsia: {
    overlay: 'from-fuchsia-900/90 via-fuchsia-800/70',
    shadow: 'hover:shadow-fuchsia-500/30',
    border: 'hover:border-fuchsia-500/50',
    badge: 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]'
  },
  green: {
    overlay: 'from-green-900/90 via-green-800/70',
    shadow: 'hover:shadow-green-500/30',
    border: 'hover:border-green-500/50',
    badge: 'bg-gradient-to-r from-green-500 to-green-700',
    glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]'
  }
};
// 3D Tilt Card Component
function ServiceCard({
  service,
  index,
  title,
  desc,
  discoverMore,
  isRTL,
}: {
  service: (typeof servicesConfig)[0];
  index: number;
  title: string;
  desc: string;
  discoverMore: string;
  isRTL: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const config = colorConfig[service.color as keyof typeof colorConfig];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15
  });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={cardRef}
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
        delay: index * 0.1,
        duration: 0.6
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl ${config.shadow} ${config.glow} transition-all duration-500 border border-gray-100 ${config.border} flex flex-col h-full`}>

      {/* Number Badge */}
      <motion.div
        className={`absolute top-4 left-4 z-30 ${config.badge} text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg`}
        style={{
          transform: 'translateZ(30px)'
        }}>

        {String(index + 1).padStart(2, '0')}
      </motion.div>

      {/* Emoji Icon */}
      <motion.div
        className="absolute top-4 right-4 z-30 text-3xl"
        style={{
          transform: 'translateZ(40px)'
        }}
        animate={{
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3
        }}>

        {service.icon}
      </motion.div>

      {/* Image Container */}
      <div className="relative h-56 md:h-72 xl:h-96 2xl:h-120 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${config.overlay} to-transparent z-10 transition-opacity duration-500`} />

        <motion.img
          src={service.img}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover"
          style={{
            transform: 'translateZ(-20px) scale(1.1)'
          }}
          whileHover={{
            scale: 1.15
          }}
          transition={{
            duration: 0.7
          }} />


        {/* Title on image */}
        <motion.h4
          className={`absolute bottom-6 text-2xl md:text-3xl font-tajawal font-black text-white z-20 drop-shadow-lg ${isRTL ? 'right-6' : 'left-6'}`}
          style={{
            transform: 'translateZ(25px)'
          }}
        >
          {title}
        </motion.h4>

        {/* Lens flare effect */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/30 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            transform: 'translateZ(15px)'
          }} />

      </div>

      {/* Content */}
      <div
        className="p-6 md:p-8 flex flex-col flex-1"
        style={{
          transform: 'translateZ(20px)'
        }}>

        <p className="text-gray-600 text-base md:text-lg mb-6 flex-1 leading-relaxed">
          {desc}
        </p>

      </div>

      {/* Shine effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </motion.div>);

}
export function ServicesSection() {
  const t = useTranslations('executionPage.services');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section
      id="services"
        className="px-[5%] py-[2%] bg-white relative overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 min-h-[320px]">
        <img
          src="/imgs/A financial restructuring envi/image_7.webp"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-[0.02] min-h-[320px]" />

      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold-400/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 3
        }} />


      <div className="w-full mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-gold-600 font-bold tracking-wider text-sm uppercase">{t('badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-navy-900 mb-6"
          >
            {t('title')} <span className="text-gradient-teal">{t('titleHighlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed text-center"
          >
            {t('lead')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          style={{ perspective: '1000px' }}
        >
          {servicesConfig.map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              index={index}
              title={t(`${service.key}.title`)}
              desc={t(`${service.key}.desc`)}
              discoverMore={t('discoverMore')}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>);

}