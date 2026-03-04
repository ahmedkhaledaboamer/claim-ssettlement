"use client";
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { ArrowLeft, Sparkles } from 'lucide-react';
const services = [
{
  title: 'التمويل العقاري',
  desc: 'حلول تمويلية متكاملة لامتلاك أو تطوير العقارات التجارية والسكنية بشروط تنافسية.',
  img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  color: 'teal',
  icon: '🏢'
},
{
  title: 'التمويل التجاري',
  desc: 'دعم السيولة النقدية وتمويل رأس المال العامل لضمان استمرارية ونمو أعمالك التجارية.',
  img: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&q=80',
  color: 'gold',
  icon: '💼'
},
{
  title: 'تمويل المنشآت',
  desc: 'برامج مخصصة لدعم الشركات الصغيرة والمتوسطة والمشاريع الكبرى بخطط سداد مرنة.',
  img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  color: 'coral',
  icon: '🏭'
},
{
  title: 'إعادة الهيكلة',
  desc: 'دراسة وإعادة هيكلة الالتزامات المالية الحالية لتحسين التدفقات النقدية وتخفيف الأعباء.',
  img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
  color: 'purple',
  icon: '🔄'
},
{
  title: 'الاستشارات المالية',
  desc: 'توجيه استراتيجي مبني على تحليل دقيق للسوق والبيانات المالية لاتخاذ قرارات استثمارية صائبة.',
  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  color: 'fuchsia',
  icon: '📊'
},
{
  title: 'التمويل الشخصي',
  desc: 'حلول تمويلية للأفراد تلبي احتياجاتهم المتنوعة بإجراءات سريعة وميسرة.',
  img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',
  color: 'green',
  icon: '👤'
}];

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
  index



}: {service: (typeof services)[0];index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const config = colorConfig[service.color as keyof typeof colorConfig];
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
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl ${config.shadow} ${config.glow} transition-all duration-500 border border-gray-100 ${config.border} flex flex-col h-full cursor-pointer`}>

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
      <div className="relative h-56 md:h-64 overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${config.overlay} to-transparent z-10 transition-opacity duration-500`} />

        <motion.img
          src={service.img}
          alt={service.title}
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
          className="absolute bottom-6 right-6 text-2xl md:text-3xl font-tajawal font-black text-white z-20 drop-shadow-lg"
          style={{
            transform: 'translateZ(25px)'
          }}>

          {service.title}
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
          {service.desc}
        </p>

        <motion.div
          className="flex items-center text-gold-600 font-bold text-base group-hover:text-gold-500 transition-colors"
          whileHover={{
            x: -10
          }}>

          <span>اكتشف المزيد</span>
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform" />
        </motion.div>
      </div>

      {/* Shine effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </motion.div>);

}
export function ServicesSection() {
  const { ref, controls, variants } = useScrollReveal();
  return (
    <section
      id="services"
      className="p-[5%] bg-white relative overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=20"
          alt=""
          className="w-full h-full object-cover opacity-[0.02]" />

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


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center   mb-20">

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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">

            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-gold-600 font-bold tracking-wider text-sm uppercase">
              ماذا نقدم
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
            className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-navy-900 mb-6">

            خدماتنا <span className="text-gradient-teal">التمويلية</span>
          </motion.h2>

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
            className="text-gray-600 text-lg md:text-xl leading-relaxed ">

            نقدم مجموعة متكاملة من الحلول المالية المصممة خصيصاً لتلبية احتياجات
            قطاع الأعمال والأفراد وفق أعلى معايير الجودة والامتثال.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          style={{
            perspective: '1000px'
          }}>

          {services.map((service, index) =>
          <ServiceCard key={index} service={service} index={index} />
          )}
        </div>
      </div>
    </section>);

}