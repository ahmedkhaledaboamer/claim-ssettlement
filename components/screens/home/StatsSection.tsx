'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UsersIcon,
  BanknoteIcon,
  Building2Icon,
  CheckCircleIcon,
  CalendarIcon,
  FolderIcon,
  GlobeIcon,
  HandshakeIcon
} from 'lucide-react';
import { useTranslations } from 'next-intl';
interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
  isInView: boolean;
}
const colorMap: Record<
  string,
  {
    border: string;
    iconBg: string;
    text: string;
  }> =
{
  '#FBBF24': {
    border: 'border-r-gold-500',
    iconBg: 'bg-gold-50',
    text: 'text-gold-600'
  },
  '#14B8A6': {
    border: 'border-r-teal-500',
    iconBg: 'bg-teal-50',
    text: 'text-teal-600'
  },
  '#F43F5E': {
    border: 'border-r-coral-500',
    iconBg: 'bg-coral-50',
    text: 'text-coral-600'
  },
  '#10B981': {
    border: 'border-r-green-500',
    iconBg: 'bg-green-50',
    text: 'text-green-600'
  },
  '#8B5CF6': {
    border: 'border-r-purple-500',
    iconBg: 'bg-purple-50',
    text: 'text-purple-600'
  }
};
function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  delay,
  isInView
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const colors = colorMap[color] || colorMap['#FBBF24'];
  useEffect(() => {
    if (!isInView) return;
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
  }, [value, delay, isInView]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {}
      }
      transition={{
        duration: 0.5,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -4
      }}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-r-4 ${colors.border}`}>

      <div className="flex flex-col items-center md:flex-row gap-4 text-center">
        {/* Icon */}
        <div
          className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>

          <Icon
            className="w-7 h-7"
            style={{
              color
            }} />

        </div>

        {/* Content */}
        <div className="flex-1">
          <div
            className={`text-fluid-stat font-cairo font-bold ${colors.text} stat-number`}>

            {count}
            {suffix}
          </div>
          <div className="text-navy-600  text-fluid-body mt-1">
            {label}
          </div>
        </div>
      </div>
    </motion.div>);

}
export function StatsSection() {
  const t = useTranslations('home.stats');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const stats = [
    {
      id: 'clients',
      icon: UsersIcon,
      value: 500,
      suffix: '+',
      color: '#FBBF24'
    },
    {
      id: 'fundingVolume',
      icon: BanknoteIcon,
      value: 2,
      suffix: '+',
      color: '#14B8A6'
    },
    {
      id: 'fundingPartners',
      icon: Building2Icon,
      value: 50,
      suffix: '+',
      color: '#F43F5E'
    },
    {
      id: 'approvalRate',
      icon: CheckCircleIcon,
      value: 98,
      suffix: '%',
      color: '#10B981'
    },
    {
      id: 'yearsExperience',
      icon: CalendarIcon,
      value: 15,
      suffix: '+',
      color: '#8B5CF6'
    },
    {
      id: 'fundedProjects',
      icon: FolderIcon,
      value: 1000,
      suffix: '+',
      color: '#FBBF24'
    },
    {
      id: 'countries',
      icon: GlobeIcon,
      value: 12,
      suffix: '+',
      color: '#14B8A6'
    },
    {
      id: 'bankingPartners',
      icon: HandshakeIcon,
      value: 30,
      suffix: '+',
      color: '#F43F5E'
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-pearl px-[5%] py-[2%]">

      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-coral-400/5 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0
                }
              : {}
          }
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-600 font-cairo font-bold text-xl tracking-wider mb-4">
            {t('badge')}
          </span>
          <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-4">
            {t('titleMain')}{' '}
            <span className="gradient-text-gold">{t('titleHighlight')}</span>
          </h2>
          <p className="text-navy-600 mx-auto text-fluid-section-lead">
            {t('lead')}
          </p>
        </motion.div>

        {/* Stats Grid - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.slice(0, 4).map((stat, index) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={t(`items.${stat.id}`)}
              color={stat.color}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Animated Separator */}
        <motion.div
          initial={{
            scaleX: 0
          }}
          animate={
            isInView
              ? {
                  scaleX: 1
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-8"
        />


        {/* Stats Grid - Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {stats.slice(4).map((stat, index) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={t(`items.${stat.id}`)}
              color={stat.color}
              delay={(index + 4) * 100 + 200}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>);

}