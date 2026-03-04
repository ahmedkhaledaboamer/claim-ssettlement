"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Shield,
  Database,
  Search,
  LineChart,
  Activity,
  AlertTriangle,
  Scale,
  Lock,
  Target,
  FileText,
  CheckSquare,
  Handshake,
  Send,
  Clock,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  DollarSign,
  RefreshCw,
  Eye,
  Award,
  ClipboardList,
  Key,
  FileBarChart,
  ShieldCheck,
  Star,
  Users,
  Compass,
  Settings,
  BarChart3,
  PieChart,
  Wrench,
  ArrowUpRight,
  HeartHandshake,
  ActivitySquare,
  Lightbulb,
  Flag,
  HeadphonesIcon,
  FlagTriangleRight,
  X,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
const allSteps = [
{
  id: 1,
  title: 'منصة الاستقبال التنفيذي',
  desc: 'استقبال رسمي يُدار بمستوى إداري رفيع لتحديد هوية العميل واحتياجه الحقيقي.',
  icon: UserCheck,
  phase: 1
},
{
  id: 2,
  title: 'بوابة التحقق الأولي',
  desc: 'مراجعة هوية العميل، نشاطه، مصادره، وامتثاله للمعايير التنظيمية.',
  icon: Shield,
  phase: 1
},
{
  id: 3,
  title: 'مركز جمع البيانات التشغيلية',
  desc: 'تجميع شامل للبيانات المالية، التشغيلية، القانونية، والمستندات الحساسة.',
  icon: Database,
  phase: 1
},
{
  id: 4,
  title: 'غرفة التدقيق الأولي',
  desc: 'مراجعة أولية للتأكد من صحة البيانات قبل بدء التحليل المتقدم.',
  icon: Search,
  phase: 1
},
{
  id: 5,
  title: 'منصة التحليل المالي الاستراتيجي',
  desc: 'تحليل التدفقات، الالتزامات، الاستدامة، والقدرة على السداد بمنهجية مؤسسية.',
  icon: LineChart,
  phase: 1
},
{
  id: 6,
  title: 'مركز تقييم القدرة الائتمانية',
  desc: 'قياس القوة المالية، استقرار النشاط، ونقاط الضعف المحتملة.',
  icon: Activity,
  phase: 1
},
{
  id: 7,
  title: 'مختبر تقييم المخاطر',
  desc: 'تحليل المخاطر التشغيلية، المالية، السوقية، والهيكلية وفق نموذج مخاطر داخلي.',
  icon: AlertTriangle,
  phase: 1
},
{
  id: 8,
  title: 'مجلس الحوكمة والامتثال',
  desc: 'مراجعة الملف لضمان توافقه مع الأنظمة والسياسات والمعايير الرقابية.',
  icon: Scale,
  phase: 1
},
{
  id: 9,
  title: 'نظام حماية البيانات والسرية',
  desc: 'تطبيق بروتوكولات تشفير، حماية، وضبط وصول للمعلومات الحساسة.',
  icon: Lock,
  phase: 1
},
{
  id: 10,
  title: 'منصة التخطيط التمويلي',
  desc: 'صياغة خطة تنفيذية تشمل النوع، المبلغ، المدة، الجهة المناسبة، واستراتيجية التفاوض.',
  icon: Target,
  phase: 1
},
{
  id: 11,
  title: 'مركز إعداد الملف التنفيذي',
  desc: 'إعداد ملف احترافي يعكس قوة العميل ويعالج نقاط الضعف ويبرز مبررات التمويل.',
  icon: FileText,
  phase: 2
},
{
  id: 12,
  title: 'لجنة التدقيق الداخلي',
  desc: 'مراجعة الملف من قبل فريق متخصص لضمان أعلى مستوى من الجودة والامتثال.',
  icon: CheckSquare,
  phase: 2
},
{
  id: 13,
  title: 'منصة المطابقة التمويلية',
  desc: 'اختيار الجهة المناسبة بناءً على معايير النشاط، المخاطر، والقدرة الائتمانية.',
  icon: Handshake,
  phase: 2
},
{
  id: 14,
  title: 'قناة التقديم الرسمي',
  desc: 'رفع الملف للجهة التمويلية بصياغة تنفيذية واضحة ومقنعة.',
  icon: Send,
  phase: 2
},
{
  id: 15,
  title: 'غرفة المتابعة التشغيلية',
  desc: 'متابعة مستمرة لضمان سير الملف دون تأخير أو نقص.',
  icon: Clock,
  phase: 2
},
{
  id: 16,
  title: 'مركز إدارة الاستفسارات',
  desc: 'الرد على طلبات الجهة التمويلية باحترافية وسرعة، مع معالجة أي ملاحظات.',
  icon: MessageSquare,
  phase: 2
},
{
  id: 17,
  title: 'منصة التفاوض التنفيذي',
  desc: 'تحسين السعر، المدة، الضمانات، الرسوم، وشروط الإغلاق لصالح العميل.',
  icon: TrendingUp,
  phase: 2
},
{
  id: 18,
  title: 'مجلس الإغلاق المالي',
  desc: 'مراجعة العقود، اعتماد البنود، وضمان تنفيذ الإغلاق دون أخطاء أو مخاطر.',
  icon: CheckCircle,
  phase: 2
},
{
  id: 19,
  title: 'قناة صرف التمويل',
  desc: 'متابعة عملية الصرف حتى اكتمالها بشكل رسمي وآمن.',
  icon: DollarSign,
  phase: 2
},
{
  id: 20,
  title: 'مركز ما بعد التمويل',
  desc: 'متابعة الالتزامات، مراقبة التدفقات، تقديم التوصيات، ودعم إعادة الهيكلة عند الحاجة.',
  icon: RefreshCw,
  phase: 2
},
{
  id: 21,
  title: 'إدارة الرقابة التشغيلية',
  desc: 'مراقبة جودة التنفيذ، الالتزام بالسياسات، وضمان عدم حدوث أي تجاوزات.',
  icon: Eye,
  phase: 3
},
{
  id: 22,
  title: 'إدارة ضمان الجودة',
  desc: 'تقييم الأداء، مراجعة النتائج، واعتماد التحسينات التشغيلية.',
  icon: Award,
  phase: 3
},
{
  id: 23,
  title: 'إدارة التدقيق الدوري',
  desc: 'إجراء مراجعات داخلية لضمان الالتزام بمعايير الحوكمة والامتثال.',
  icon: ClipboardList,
  phase: 3
},
{
  id: 24,
  title: 'إدارة السرية والمعلومات الحساسة',
  desc: 'ضبط الوصول، حماية المستندات، وتطبيق أعلى معايير الأمان.',
  icon: Key,
  phase: 3
},
{
  id: 25,
  title: 'إدارة التقارير التنفيذية',
  desc: 'إعداد تقارير شاملة توضح ما تم، وما تحقق، وما يجب تطويره.',
  icon: FileBarChart,
  phase: 3
},
{
  id: 26,
  title: 'إدارة الامتثال المستمر',
  desc: 'متابعة التغيرات التنظيمية وتحديث السياسات التشغيلية وفقًا لها.',
  icon: ShieldCheck,
  phase: 3
},
{
  id: 27,
  title: 'إدارة النزاهة والشفافية',
  desc: 'ضمان أن كل خطوة تُنفّذ وفق أعلى معايير النزاهة المهنية.',
  icon: Star,
  phase: 3
},
{
  id: 28,
  title: 'إدارة العلاقة مع الجهات التمويلية',
  desc: 'تعزيز الثقة، تحسين التواصل، وضمان استمرارية التعاون.',
  icon: Users,
  phase: 3
},
{
  id: 29,
  title: 'إدارة المخاطر المستقبلية',
  desc: 'توقع المخاطر المحتملة ووضع خطط استباقية لمعالجتها.',
  icon: Compass,
  phase: 3
},
{
  id: 30,
  title: 'إدارة تطوير المسار التنفيذي',
  desc: 'تحديث المسار بشكل دوري لضمان مواكبته للتغيرات المالية والتنظيمية.',
  icon: Settings,
  phase: 3
},
{
  id: 31,
  title: 'منصة التحليل المتقدم',
  desc: 'تحليل البيانات التاريخية للعميل لتحديد فرص تحسين الأداء المالي.',
  icon: BarChart3,
  phase: 4
},
{
  id: 32,
  title: 'مركز التوقعات المالية',
  desc: 'بناء نماذج توقعات تساعد في اتخاذ قرارات تمويلية مستقبلية.',
  icon: PieChart,
  phase: 4
},
{
  id: 33,
  title: 'غرفة إعادة الهيكلة',
  desc: 'تقديم حلول لإعادة هيكلة الالتزامات عند الحاجة.',
  icon: Wrench,
  phase: 4
},
{
  id: 34,
  title: 'منصة تحسين التدفقات النقدية',
  desc: 'تقديم توصيات لتحسين السيولة واستقرار التدفقات.',
  icon: ArrowUpRight,
  phase: 4
},
{
  id: 35,
  title: 'مركز إدارة العلاقات طويلة المدى',
  desc: 'بناء علاقة مستدامة مع العميل لضمان استمرارية الدعم المالي.',
  icon: HeartHandshake,
  phase: 4
},
{
  id: 36,
  title: 'منصة تقييم الأداء التمويلي',
  desc: 'قياس أثر التمويل على نشاط العميل بعد التنفيذ.',
  icon: ActivitySquare,
  phase: 4
},
{
  id: 37,
  title: 'غرفة تطوير المنتجات التمويلية',
  desc: 'ابتكار حلول تمويلية جديدة تتناسب مع احتياجات السوق.',
  icon: Lightbulb,
  phase: 4
},
{
  id: 38,
  title: 'منصة إدارة التحديات',
  desc: 'معالجة أي عقبات تواجه العميل خلال فترة التمويل.',
  icon: Flag,
  phase: 4
},
{
  id: 39,
  title: 'مركز الاستشارات المالية المتقدمة',
  desc: 'تقديم استشارات تساعد العميل على اتخاذ قرارات مالية استراتيجية.',
  icon: HeadphonesIcon,
  phase: 4
},
{
  id: 40,
  title: 'منصة التقييم النهائي للمسار',
  desc: 'إعداد تقرير شامل يوضح ما تم، وما تحقق، وما يجب تطويره مستقبلًا.',
  icon: FlagTriangleRight,
  phase: 4
}];

const phases = [
{
  id: 1,
  title: 'الاستقبال والتحقق',
  subtitle: 'التحليل والتقييم',
  color: 'teal',
  gradient: 'from-teal-500 to-teal-700',
  bgColor: 'bg-teal-500',
  textColor: 'text-teal-400',
  steps: 10
},
{
  id: 2,
  title: 'التنفيذ والإغلاق',
  subtitle: 'التقديم والتفاوض',
  color: 'gold',
  gradient: 'from-gold-500 to-gold-700',
  bgColor: 'bg-gold-500',
  textColor: 'text-gold-400',
  steps: 10
},
{
  id: 3,
  title: 'الرقابة والامتثال',
  subtitle: 'الجودة والمتابعة',
  color: 'navy',
  gradient: 'from-sapphire-800 to-navy-900',
  bgColor: 'bg-sapphire-800',
  textColor: 'text-blue-400',
  steps: 10
},
{
  id: 4,
  title: 'التطوير والاستدامة',
  subtitle: 'النمو المستقبلي',
  color: 'coral',
  gradient: 'from-coral-500 to-coral-700',
  bgColor: 'bg-coral-500',
  textColor: 'text-coral-400',
  steps: 10
}];

// Station component for the subway map
function Station({
  step,
  phaseColor,
  isActive,
  onClick,
  index,
  totalInPhase







}: {step: (typeof allSteps)[0];phaseColor: string;isActive: boolean;onClick: () => void;index: number;totalInPhase: number;}) {
  const Icon = step.icon;
  return (
    <motion.button
      onClick={onClick}
      initial={{
        scale: 0,
        opacity: 0
      }}
      whileInView={{
        scale: 1,
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.05,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{
        scale: 1.15
      }}
      className={`relative group flex flex-col items-center`}>

      {/* Station dot */}
      <div
        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full ${phaseColor} flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'ring-4 ring-gray-300 scale-110' : ''}`}>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full ${phaseColor} blur-md opacity-0 group-hover:opacity-40`}
          animate={
          isActive ?
          {
            opacity: [0.2, 0.5, 0.2]
          } :
          {}
          }
          transition={{
            duration: 2,
            repeat: Infinity
          }} />

        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />

        {/* Step number badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-navy-950 text-xs font-bold flex items-center justify-center border border-gray-200 shadow-sm">
          {step.id}
        </span>
      </div>

      {/* Station name */}
      <span
        className={`mt-2 text-xs md:text-sm font-medium text-center   leading-tight transition-colors ${isActive ? 'text-navy-950' : 'text-gray-500 group-hover:text-navy-900'}`}>

        {step.title.split(' ').slice(0, 2).join(' ')}
      </span>
    </motion.button>);

}
// Step detail modal
function StepModal({
  step,
  onClose,
  phaseColor




}: {step: (typeof allSteps)[0] | null;onClose: () => void;phaseColor: string;}) {
  if (!step) return null;
  const Icon = step.icon;
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-xl"
      onClick={onClose}>

      <motion.div
        initial={{
          scale: 0.9,
          y: 50
        }}
        animate={{
          scale: 1,
          y: 0
        }}
        exit={{
          scale: 0.9,
          y: 50
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-navy-900 rounded-3xl p-8 md:p-10   w-full border border-white/10 shadow-2xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all">

          <X className="w-5 h-5" />
        </button>

        {/* Step number */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${phaseColor} text-white text-sm font-bold mb-6`}>

          <span>المرحلة {step.id}</span>
        </div>

        {/* Icon */}
        <div
          className={`w-20 h-20 rounded-2xl ${phaseColor} flex items-center justify-center mb-6 shadow-lg`}>

          <Icon className="w-10 h-10 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-tajawal font-bold text-white mb-4">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">{step.desc}</p>

        {/* Phase indicator */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-500">
            ضمن مرحلة:{' '}
            <span className="text-gold-400 font-medium">
              {phases.find((p) => p.id === step.phase)?.title}
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>);

}
export function ExecutivePathSection() {
  const [selectedStep, setSelectedStep] = useState<(typeof allSteps)[0] | null>(
    null
  );
  const [activePhase, setActivePhase] = useState(1);
  const { ref, controls, variants } = useScrollReveal();
  const getPhaseColor = (phaseId: number) => {
    const phase = phases.find((p) => p.id === phaseId);
    return phase?.bgColor || 'bg-gold-500';
  };
  return (
    <section
      id="executive-path"
      className="py-28 md:py-40 bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(10,25,41,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }} />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center   mb-16 md:mb-24">

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

            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-700 text-sm font-medium">
              40 مرحلة متكاملة
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-tajawal font-black text-gradient-gold mb-6">
            المسار التنفيذي
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed ">
            رحلة مدروسة عبر 40 محطة تضمن انتقال ملفك التمويلي بدقة متناهية، من
            التحليل الأولي وحتى الإغلاق الناجح
          </p>
        </motion.div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {phases.map((phase) =>
          <motion.button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className={`relative px-5 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base transition-all ${activePhase === phase.id ? `bg-gradient-to-r ${phase.gradient} text-white shadow-lg` : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 border border-gray-200'}`}>

              <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${phase.bgColor}`} />
                {phase.title}
              </span>
              {activePhase === phase.id &&
            <motion.div
              layoutId="activePhaseIndicator"
              className="absolute inset-0 rounded-2xl border-2 border-white/30" />

            }
            </motion.button>
          )}
        </div>

        {/* Subway Map Visualization */}
        <div className="relative">
          {/* Phase sections */}
          {phases.map((phase) => {
            const phaseSteps = allSteps.filter((s) => s.phase === phase.id);
            const isActive = activePhase === phase.id;
            return (
              <motion.div
                key={phase.id}
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  height: isActive ? 'auto' : 0
                }}
                transition={{
                  duration: 0.5
                }}
                className="overflow-hidden">

                {isActive &&
                <div className="relative">
                    {/* Phase header */}
                    <div className="flex items-center gap-4 mb-10">
                      <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-xl`}>

                        {phase.id}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-tajawal font-bold text-navy-950">
                          مرحلة {phase.title}
                        </h3>
                        <p className="text-gray-500">
                          {phase.subtitle} • {phase.steps} محطات
                        </p>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-gray-200 to-transparent mr-4" />
                    </div>

                    {/* Subway line with stations */}
                    <div className="relative py-8">
                      {/* The line */}
                      <div
                      className={`absolute top-1/2 left-0 right-0 h-2 ${phase.bgColor} rounded-full -translate-y-1/2 opacity-20`} />

                      <motion.div
                      className={`absolute top-1/2 left-0 h-2 ${phase.bgColor} rounded-full -translate-y-1/2 opacity-60`}
                      initial={{
                        width: '0%'
                      }}
                      whileInView={{
                        width: '100%'
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1.5,
                        ease: 'easeOut'
                      }} />


                      {/* Animated train */}
                      <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 ${phase.bgColor} rounded-lg shadow-lg z-20`}
                      animate={{
                        x: ['0%', '100%']
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      style={{
                        left: '-2%'
                      }}>

                        <div className="absolute inset-0 rounded-lg bg-white/20" />
                      </motion.div>

                      {/* Stations grid */}
                      <div className="relative grid grid-cols-5 md:grid-cols-10 gap-4 md:gap-6">
                        {phaseSteps.map((step, index) =>
                      <Station
                        key={step.id}
                        step={step}
                        phaseColor={phase.bgColor}
                        isActive={selectedStep?.id === step.id}
                        onClick={() => setSelectedStep(step)}
                        index={index}
                        totalInPhase={phaseSteps.length} />

                      )}
                      </div>
                    </div>
                  </div>
                }
              </motion.div>);

          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            {phases.map((phase) =>
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`w-3 h-3 rounded-full transition-all ${activePhase === phase.id ? `${phase.bgColor} scale-125` : 'bg-gray-300 hover:bg-gray-400'}`} />

            )}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            onClick={() => setActivePhase((prev) => prev > 1 ? prev - 1 : 4)}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:text-white transition-all border border-gray-200">

            <ChevronRight className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            onClick={() => setActivePhase((prev) => prev < 4 ? prev + 1 : 1)}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:text-white transition-all border border-gray-200">

            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Step detail modal */}
      <AnimatePresence>
        {selectedStep &&
        <StepModal
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
          phaseColor={getPhaseColor(selectedStep.phase)} />

        }
      </AnimatePresence>

      {/* Bottom Wave Divider */}
      <div className="wave-divider-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white" />

        </svg>
      </div>
    </section>);

}