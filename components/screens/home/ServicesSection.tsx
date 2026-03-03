'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SearchIcon,
  FileTextIcon,
  HandshakeIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
  LightbulbIcon,
  TargetIcon,
  BuildingIcon,
  TrendingUpIcon,
  HomeIcon,
  BriefcaseIcon,
  UsersIcon,
  BookOpenIcon,
  RocketIcon,
  CpuIcon,
  GlobeIcon,
  ArrowLeftIcon,
} from 'lucide-react';

// ─── Unsplash image map for core services ────────────────────────────────────
const SERVICE_IMAGES: Record<string, string> = {
  commercial:   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', // high-rise buildings
  investment:   'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', // stock charts
  real_estate:  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', // property
  corporate:    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', // boardroom
  sme:          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', // small team
  islamic:      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', // mosque architecture
  expansion:    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', // growth graph
  startup:      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', // startup office
  tech:         'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', // tech circuits
  fdi:          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', // global network
};

const whatWeOffer = [
  { icon: SearchIcon,         title: 'تحليل احتياجاتك المالية',                                  color: 'emerald', span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { icon: TargetIcon,         title: 'اختيار الجهة التمويلية المناسبة',                           color: 'copper',  span: 'col-span-1' },
  { icon: FileTextIcon,       title: 'تجهيز ملف تمويلي احترافي',                                 color: 'violet',  span: 'col-span-1' },
  { icon: HandshakeIcon,      title: 'التفاوض على أفضل الشروط',                                  color: 'coral',   span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { icon: ClipboardCheckIcon, title: 'متابعة الطلب حتى الموافقة',                                color: 'emerald', span: 'col-span-1' },
  { icon: HeadphonesIcon,     title: 'دعمك بعد الحصول على التمويل',                              color: 'copper',  span: 'col-span-1' },
  { icon: LightbulbIcon,      title: 'تقديم استشارات مالية تساعدك على اتخاذ قرار صحيح',         color: 'violet',  span: 'col-span-1 md:col-span-2 lg:col-span-2' },
];

const coreServices = [
  { icon: BuildingIcon,  title: 'وساطة التمويل التجاري',                   color: 'emerald', imgKey: 'commercial'  },
  { icon: TrendingUpIcon,title: 'وساطة التمويل الاستثماري',               color: 'copper',  imgKey: 'investment'  },
  { icon: HomeIcon,      title: 'وساطة التمويل العقاري',                   color: 'violet',  imgKey: 'real_estate' },
  { icon: BriefcaseIcon, title: 'وساطة تمويل الشركات',                    color: 'emerald', imgKey: 'corporate'   },
  { icon: UsersIcon,     title: 'وساطة تمويل المشاريع الصغيرة والمتوسطة', color: 'copper',  imgKey: 'sme'         },
  { icon: BookOpenIcon,  title: 'وساطة التمويل الإسلامي',                  color: 'violet',  imgKey: 'islamic'     },
  { icon: RocketIcon,    title: 'وساطة تمويل التوسع والتطوير',             color: 'emerald', imgKey: 'expansion'   },
  { icon: LightbulbIcon, title: 'وساطة تمويل المشاريع الجديدة',            color: 'copper',  imgKey: 'startup'     },
  
];

// ─── Color helper ─────────────────────────────────────────────────────────────
const getColorClasses = (color: string) => {
  switch (color) {
    case 'emerald': return { bg: 'bg-emerald-50', text: 'text-emerald-700',  iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-100', gradient: 'gradient-emerald', overlay: 'bg-emerald-900/50'  };
    case 'copper':  return { bg: 'bg-amber-50',   text: 'text-amber-800',    iconBg: 'bg-amber-100',   iconText: 'text-amber-600',   border: 'border-amber-100',   gradient: 'gradient-copper',  overlay: 'bg-amber-900/50'    };
    case 'violet':  return { bg: 'bg-violet-50',  text: 'text-violet-800',   iconBg: 'bg-violet-100',  iconText: 'text-violet-600',  border: 'border-violet-100',  gradient: 'gradient-violet',  overlay: 'bg-violet-900/50'   };
    case 'coral':   return { bg: 'bg-red-50',     text: 'text-red-800',      iconBg: 'bg-red-100',     iconText: 'text-red-600',     border: 'border-red-100',     gradient: 'bg-gradient-to-br from-red-500 to-red-600', overlay: 'bg-red-900/50' };
    default:        return { bg: 'bg-stone-50',   text: 'text-stone-800',    iconBg: 'bg-stone-200',   iconText: 'text-stone-600',   border: 'border-stone-200',   gradient: 'bg-stone-500',     overlay: 'bg-stone-900/50'    };
  }
};

// ─── Component ────────────────────────────────────────────────────────────────
export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="bg-stone-50 relative">
      <div className="p-[5%]" ref={ref}>

        {/* ── SECTION HEADER ─────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div variants={itemVariants} >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-emerald-500" />
                <span
                  className="font-tajawal text-emerald-700 font-semibold tracking-wide"
                  style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)' }}
                >
                  منظومة متكاملة
                </span>
              </div>
              <h2
                className="font-cairo font-bold text-charcoal-900 mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                ماذا نقدّم؟
              </h2>
              <p
                className="font-tajawal text-charcoal-600"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
              >
                نقدّم منظومة وساطة تمويلية متكاملة تبدأ من فهم احتياجك وتنتهي بتحقيق هدفك.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── FULL-WIDTH IMAGE STRIP ──────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 rounded-3xl overflow-hidden relative h-64 md:h-80 lg:h-96"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
            alt="Business handshake"
            className="w-full h-full object-cover"
          />
          {/* gradient overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/80 via-emerald-900/40 to-transparent flex items-end p-8 md:p-12">
            <div className="text-right ">
              <p
                className="font-cairo font-bold text-white mb-2"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
              >
                شراكة تمويلية موثوقة
              </p>
              <p className="font-tajawal text-emerald-100 text-sm md:text-base">
                نربطك بأفضل الجهات التمويلية لتحقيق أهدافك بثقة واحترافية
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── BENTO GRID : WHAT WE OFFER ─────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

            {/* Image Card 1 – tall left column */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-2 lg:col-span-1 rounded-3xl overflow-hidden relative h-56 lg:h-auto min-h-[260px]"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6e?w=800&q=80"
                alt="Financial charts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/25 mix-blend-overlay" />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                <span className="font-cairo text-emerald-800 font-semibold text-sm">تحليل دقيق • قرار سليم</span>
              </div>
            </motion.div>

            {/* Service cards */}
            {whatWeOffer.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${service.span} ${colors.bg} border ${colors.border} rounded-3xl p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-7 h-7 ${colors.iconText}`} />
                  </div>
                  <h3
                    className={`font-cairo font-bold ${colors.text}`}
                    style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)' }}
                  >
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}

            

            

          </div>
        </motion.div>

        {/* ── HORIZONTAL SCROLL : CORE SERVICES ─────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-10">
            <h2
              className="font-cairo font-bold text-charcoal-900"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              خدماتنا الأساسية
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {coreServices.map((service, index) => {
                const colors = getColorClasses(service.color);
                const imgSrc = SERVICE_IMAGES[service.imgKey];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image thumbnail */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* coloured overlay */}
                      <div className={`absolute inset-0 ${colors.overlay} opacity-30 group-hover:opacity-10 transition-opacity duration-300`} />
                      {/* floating icon chip */}
                      <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl ${colors.iconBg} backdrop-blur-sm flex items-center justify-center shadow-md`}>
                        <service.icon className={`w-5 h-5 ${colors.iconText}`} />
                      </div>
                    </div>

                    {/* Top color bar */}
                    <div className={`h-1 w-full ${colors.gradient}`} />

                    <div className="p-5">
                      <h3
                        className="font-cairo font-semibold text-charcoal-900 mb-4 h-14"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 1.1rem)' }}
                      >
                        {service.title}
                      </h3>

                      <div className="flex items-center gap-2 text-stone-400 group-hover:text-emerald-600 transition-colors font-tajawal text-sm font-medium">
                        <span>اكتشف المزيد</span>
                        <ArrowLeftIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}