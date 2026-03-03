'use client';
import { motion } from 'framer-motion';
import {
  TargetIcon,
  ZapIcon,
  EyeIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  LockIcon,
  HashIcon,
  ClockIcon,
  FileTextIcon,
  AlertCircleIcon,
  AwardIcon,
  HeartIcon,
  MessageSquareIcon,
  VolumeXIcon,
  UsersIcon } from
'lucide-react';
import { FadeUp } from './ScrollAnimations';
const qualityStandards = [
{
  icon: TargetIcon,
  text: 'دقة في تحليل الاحتياج'
},
{
  icon: ZapIcon,
  text: 'سرعة في تجهيز الملفات'
},
{
  icon: EyeIcon,
  text: 'شفافية في كل خطوة'
},
{
  icon: RefreshCwIcon,
  text: 'متابعة مستمرة'
},
{
  icon: CheckCircleIcon,
  text: 'التزام بالنتيجة'
},
{
  icon: LockIcon,
  text: 'سرية تامة في التعامل'
}];

const entityLanguage = [
{
  icon: HashIcon,
  text: 'لغة تعتمد على الأرقام'
},
{
  icon: ClockIcon,
  text: 'لغة تحترم وقت العميل'
},
{
  icon: FileTextIcon,
  text: 'لغة مبنية على المعلومة'
},
{
  icon: AlertCircleIcon,
  text: 'لغة بلا وعود مبالغ فيها'
},
{
  icon: AwardIcon,
  text: 'لغة تعتمد على النتيجة فقط'
}];

const dealingPrinciples = [
{
  icon: HeartIcon,
  text: 'نلتزم قبل أن نعد'
},
{
  icon: MessageSquareIcon,
  text: 'نوضح قبل أن نطلب'
},
{
  icon: RefreshCwIcon,
  text: 'نتابع قبل أن تُسأل'
},
{
  icon: VolumeXIcon,
  text: 'نعمل بصمت… ونُظهر النتائج فقط'
},
{
  icon: UsersIcon,
  text: 'نضع مصلحة العميل فوق كل شيء'
}];

function HexagonItem({
  icon: Icon,
  text,
  color,
  delay





}: {icon: React.ElementType;text: string;color: 'gold' | 'teal' | 'coral';delay: number;}) {
  const colorMap = {
    gold: {
      bg: 'bg-gold-50',
      border: 'border-gold-200',
      icon: 'text-gold-600',
      hoverBg: 'hover:bg-gold-100'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      icon: 'text-teal-600',
      hoverBg: 'hover:bg-teal-100'
    },
    coral: {
      bg: 'bg-coral-50',
      border: 'border-coral-200',
      icon: 'text-coral-600',
      hoverBg: 'hover:bg-coral-100'
    }
  };
  const colors = colorMap[color];
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        rotate: -30
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{
        scale: 1.05,
        y: -5
      }}
      className="group">

      <div
        className={`relative ${colors.bg} ${colors.border} border-2 ${colors.hoverBg} p-4 md:p-5 transition-all duration-300 shadow-lg hover:shadow-xl`}
        style={{
          clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          aspectRatio: '1 / 1.15'
        }}>

        <div className="flex flex-col items-center justify-center h-full text-center">
          <Icon className={`w-6 h-6 md:w-8 md:h-8 ${colors.icon} mb-2`} />
          <span className="text-navy-800 font-tajawal text-xs md:text-sm leading-tight font-medium">
            {text}
          </span>
        </div>
      </div>
    </motion.div>);

}
function CategoryHeader({
  icon: Icon,
  title,
  count,
  color





}: {icon: React.ElementType;title: string;count: number;color: 'gold' | 'teal' | 'coral';}) {
  const colorMap = {
    gold: {
      bg: 'bg-gold-500',
      text: 'text-gold-600',
      border: 'border-gold-500'
    },
    teal: {
      bg: 'bg-teal-500',
      text: 'text-teal-600',
      border: 'border-teal-500'
    },
    coral: {
      bg: 'bg-coral-500',
      text: 'text-coral-600',
      border: 'border-coral-500'
    }
  };
  const colors = colorMap[color];
  return (
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
      className="text-center mb-8">

      {/* Large Hexagon Header */}
      <div className="relative inline-block mb-4">
        <div
          className={`w-20 h-20 md:w-24 md:h-24 ${colors.bg} flex items-center justify-center mx-auto shadow-lg`}
          style={{
            clipPath:
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}>

          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        {/* Count Badge */}
        <div
          className={`absolute -top-2 -right-2 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white font-cairo font-bold text-sm shadow-lg`}>

          {count}
        </div>
      </div>

      <h3
        className={`text-2xl md:text-3xl font-cairo font-bold ${colors.text}`}>

        {title}
      </h3>
    </motion.div>);

}
export function QualitySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-champagne">
      {/* Decorative Blurs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral-400/5 rounded-full blur-3xl" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 -right-20 w-96 h-96 border border-gold-300/20 rounded-full" />

        <motion.div
          animate={{
            rotate: [360, 0]
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 border border-teal-300/20 rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-4">
              التزامنا تجاهك
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-6">
              قيمنا <span className="gradient-text-gold">ومبادئنا</span>
            </h2>
          </FadeUp>
        </div>

        {/* Three Columns with Hexagonal Grids */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Quality Standards */}
          <div>
            <CategoryHeader
              icon={CheckCircleIcon}
              title="معايير الجودة"
              count={qualityStandards.length}
              color="gold" />


            {/* Honeycomb Grid */}
            <div className="grid grid-cols-2 gap-3">
              {qualityStandards.map((item, index) =>
              <HexagonItem
                key={index}
                icon={item.icon}
                text={item.text}
                color="gold"
                delay={index * 0.1} />

              )}
            </div>
          </div>

          {/* Entity Language */}
          <div>
            <CategoryHeader
              icon={MessageSquareIcon}
              title="لغة الكيان"
              count={entityLanguage.length}
              color="teal" />


            {/* Honeycomb Grid */}
            <div className="grid grid-cols-2 gap-3">
              {entityLanguage.map((item, index) =>
              <HexagonItem
                key={index}
                icon={item.icon}
                text={item.text}
                color="teal"
                delay={index * 0.1 + 0.3} />

              )}
              {/* Empty cell for odd number */}
              <div className="hidden md:block" />
            </div>
          </div>

          {/* Dealing Principles */}
          <div>
            <CategoryHeader
              icon={HeartIcon}
              title="مبادئ التعامل"
              count={dealingPrinciples.length}
              color="coral" />


            {/* Honeycomb Grid */}
            <div className="grid grid-cols-2 gap-3">
              {dealingPrinciples.map((item, index) =>
              <HexagonItem
                key={index}
                icon={item.icon}
                text={item.text}
                color="coral"
                delay={index * 0.1 + 0.6} />

              )}
              {/* Empty cell for odd number */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent" />
    </section>);

}