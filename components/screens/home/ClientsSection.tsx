'use client';
import { motion } from 'framer-motion';
import {
  UserIcon,
  Building2Icon,
  BuildingIcon,
  FactoryIcon,
  HomeIcon,
  CpuIcon,
  TrendingUpIcon,
  RocketIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const clientTypes = [
{
  icon: UserIcon,
  title: 'رجال ورواد الأعمال',
  count: '+120',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  color: 'gold',
  size: 'large'
},
{
  icon: Building2Icon,
  title: 'الشركات الصغيرة والمتوسطة',
  count: '+85',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  color: 'teal',
  size: 'large'
},
{
  icon: BuildingIcon,
  title: 'الشركات الكبرى',
  count: '+45',
  image:
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80',
  color: 'coral',
  size: 'medium'
},
{
  icon: FactoryIcon,
  title: 'المشاريع التجارية والصناعية',
  count: '+60',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  color: 'green',
  size: 'medium'
},
{
  icon: HomeIcon,
  title: 'المستثمرون العقاريون',
  count: '+90',
  image:
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  color: 'gold',
  size: 'small'
},
{
  icon: CpuIcon,
  title: 'المشاريع التقنية والابتكارية',
  count: '+35',
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  color: 'purple',
  size: 'small'
},
{
  icon: TrendingUpIcon,
  title: 'الشركات الراغبة في توسع أو إعادة هيكلة',
  count: '+50',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  color: 'teal',
  size: 'small'
},
{
  icon: RocketIcon,
  title: 'المشاريع الاستثمارية الجديدة',
  count: '+75',
  image:
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  color: 'coral',
  size: 'small'
}];

const colorMap: Record<
  string,
  {
    gradient: string;
    badge: string;
    shadow: string;
  }> =
{
  gold: {
    gradient: 'from-gold-500/80 to-gold-600/80',
    badge: 'bg-gold-500',
    shadow: 'shadow-gold-lg'
  },
  teal: {
    gradient: 'from-teal-500/80 to-teal-600/80',
    badge: 'bg-teal-500',
    shadow: 'shadow-teal-lg'
  },
  coral: {
    gradient: 'from-coral-500/80 to-coral-600/80',
    badge: 'bg-coral-500',
    shadow: 'shadow-coral-lg'
  },
  green: {
    gradient: 'from-green-500/80 to-green-600/80',
    badge: 'bg-green-500',
    shadow: 'shadow-green-lg'
  },
  purple: {
    gradient: 'from-purple-500/80 to-purple-600/80',
    badge: 'bg-purple-500',
    shadow: 'shadow-purple-lg'
  }
};
function BentoCard({
  client,
  index



}: {client: (typeof clientTypes)[0];index: number;}) {
  const IconComponent = client.icon;
  const colors = colorMap[client.color];
  // Determine grid span based on size
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1'
  };
  // Determine animation direction
  const animations = [
  {
    x: -50,
    y: 0
  },
  {
    x: 50,
    y: 0
  },
  {
    x: 0,
    y: 50
  },
  {
    x: 0,
    y: -50
  },
  {
    x: -30,
    y: 30
  },
  {
    x: 30,
    y: -30
  },
  {
    x: -30,
    y: -30
  },
  {
    x: 30,
    y: 30
  }];

  const animation = animations[index % animations.length];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animation.x,
        y: animation.y
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${sizeClasses[client.size as keyof typeof sizeClasses]} ${client.size === 'large' ? 'min-h-[300px] md:min-h-[400px]' : client.size === 'medium' ? 'min-h-[250px] md:min-h-[400px]' : 'min-h-[200px]'}`}>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={client.image}
          alt={client.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{
          opacity: 0
        }}
        whileHover={{
          opacity: 1
        }}
        className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} backdrop-blur-sm transition-all duration-300`} />


      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Count Badge */}
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            delay: index * 0.1 + 0.3
          }}
          className={`absolute top-4 left-4 ${colors.badge} text-white px-3 py-1.5 rounded-full font-cairo font-bold text-sm ${colors.shadow}`}>

          {client.count}
        </motion.div>

        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5
          }}
          className={`w-14 h-14 md:w-16 md:h-16 ${colors.badge} rounded-2xl flex items-center justify-center mb-4 ${colors.shadow}`}>

          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3
          className={`font-cairo font-bold text-white leading-tight ${client.size === 'large' ? 'text-2xl md:text-3xl' : client.size === 'medium' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>

          {client.title}
        </h3>

        {/* Hover Arrow */}
        <motion.div
          initial={{
            opacity: 0,
            x: -10
          }}
          whileHover={{
            opacity: 1,
            x: 0
          }}
          className="absolute bottom-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">

          <svg
            className="w-5 h-5 text-white rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3" />

          </svg>
        </motion.div>
      </div>

      {/* Depth Shadow */}
      <div
        className={`absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none`} />

    </motion.div>);

}
export function ClientsSection() {
  return (
    <section className="relative bg-pearl py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-teal-600 font-cairo font-bold text-sm tracking-wider mb-4">
              شركاء النجاح
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              من <span className="gradient-text-teal">نخدم؟</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-navy-600 font-tajawal max-w-2xl mx-auto">
              نفخر بخدمة مجموعة متنوعة من العملاء في مختلف القطاعات
            </p>
          </FadeUp>
        </div>

        {/* Bento Grid - Desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 gap-4 lg:gap-6">
          {clientTypes.map((client, index) =>
          <BentoCard key={index} client={client} index={index} />
          )}
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-4">
          {clientTypes.map((client, index) =>
          <BentoCard
            key={index}
            client={{
              ...client,
              size: 'large'
            }}
            index={index} />

          )}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full">

          <path
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 65C1248 60 1344 60 1392 60L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#FFD700" />

        </svg>
      </div>
    </section>);

}