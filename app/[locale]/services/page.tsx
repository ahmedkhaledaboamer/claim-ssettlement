'use client';
import { motion } from 'framer-motion'
 import { Hero } from '@/components/screens/services/Hero'
 import { ServiceCard } from '@/components/screens/services/ServiceCard'
   import {
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  CheckCircleIcon,
} from 'lucide-react'
const services = [
  {
    title: 'وساطة التمويل',
    description: 'نربطك بالجهات التمويلية المناسبة بأفضل الشروط.',
    features: [
      'تحليل احتياجك',
      'تجهيز ملف احترافي',
      'التفاوض',
      'الإغلاق النهائي',
    ],
    icon: 'briefcase',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    title: 'تمويل الشركات',
    description: 'حلول مالية تدعم توسع الشركات ونموها.',
    features: ['رأس مال عامل', 'شراء أصول', 'توسعات تشغيلية'],
    icon: 'building',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع التجارية',
    description: 'تمويل مخصص للمشاريع التي تحتاج دفعة تشغيلية.',
    features: ['تأسيس', 'تشغيل', 'توسع'],
    icon: 'building2',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع الصناعية',
    description: 'دعم مالي للمصانع وخطوط الإنتاج.',
    features: ['معدات', 'مواد خام', 'توسعات صناعية'],
    icon: 'factory',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'التمويل العقاري',
    description: 'حلول عقارية للمستثمرين والمطورين.',
    features: ['شراء', 'تطوير', 'إعادة تمويل'],
    icon: 'home',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    title: 'التمويل التجاري',
    description: 'تمويل عمليات البيع والشراء والتوريد.',
    features: ['أوامر شراء', 'توريد', 'تحصيل'],
    icon: 'cart',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    title: 'التمويل الإسلامي',
    description: 'حلول شرعية متوافقة مع أحكام الشريعة.',
    features: ['مرابحة', 'إجارة', 'مضاربة'],
    icon: 'moon',
    image:
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80',
  },
  {
    title: 'فتح الاعتمادات البنكية',
    description: 'دعم كامل للتجارة الخارجية.',
    features: ['LC', 'ضمانات', 'متابعة شحنات'],
    icon: 'credit',
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
  },
  {
    title: 'وساطة التمويل الاستثماري',
    description: 'نوصلك بالمستثمر المناسب في الوقت المناسب.',
    features: ['صفقات', 'شراكات', 'تفاوض'],
    icon: 'trending',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    title: 'الاستشارات المالية',
    description: 'رؤية مالية تساعدك على اتخاذ قرار قوي.',
    features: ['تحليل', 'تقييم مخاطر', 'خطط تمويل'],
    icon: 'calculator',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    title: 'تمويل رواد الأعمال',
    description: 'حلول مرنة لأصحاب المشاريع.',
    features: ['تأسيس', 'توسع', 'معدات'],
    icon: 'rocket',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  },
  {
    title: 'تمويل التوسع المؤسسي',
    description: 'دعم نمو الشركات القائمة.',
    features: ['فروع جديدة', 'تطوير أنظمة', 'توسع إقليمي'],
    icon: 'expand',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    title: 'تمويل الابتكار والتقنية',
    description: 'دعم المشاريع الرقمية والتكنولوجية.',
    features: ['برمجيات', 'أنظمة', 'مشاريع تقنية'],
    icon: 'cpu',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع الجديدة',
    description: 'تمويل يغطي مراحل التأسيس والتشغيل.',
    features: ['تأسيس', 'تشغيل', 'توسع مبكر'],
    icon: 'sparkles',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    title: 'تمويل الشراكات',
    description: 'حلول مالية للمشاريع المشتركة.',
    features: ['JV', 'تحالفات', 'شراكات عبر الحدود'],
    icon: 'users',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
  },
  {
    title: 'تمويل التجارة الدولية',
    description: 'دعم كامل لعمليات الاستيراد والتصدير.',
    features: ['استيراد', 'تصدير', 'شحنات دولية'],
    icon: 'globe',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع الخارجية',
    description: 'توسع آمن خارج الدولة.',
    features: ['مشاريع دولية', 'أصول خارجية', 'توسعات إقليمية'],
    icon: 'mappin',
    image:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
  },
  {
    title: 'تمويل الشحن والنقل',
    description: 'حلول لوجستية مالية.',
    features: ['شحن بحري', 'شحن جوي', 'نقل تجاري'],
    icon: 'truck',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    title: 'وساطة التمويل الأجنبي المباشر',
    description: 'ربطك برؤوس الأموال العالمية.',
    features: ['صفقات FDI', 'ملفات استثمارية', 'تفاوض دولي'],
    icon: 'landmark',
    image:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع الصغيرة والمتوسطة',
    description: 'حلول مرنة وسريعة.',
    features: ['رأس مال', 'توسع', 'معدات'],
    icon: 'store',
    image:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80',
  },
  {
    title: 'تمويل إعادة الهيكلة',
    description: 'إعادة ترتيب التزاماتك المالية.',
    features: ['جدولة', 'إعادة تمويل', 'تحسين التدفقات'],
    icon: 'refresh',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    title: 'تمويل سلاسل الإمداد',
    description: 'دعم كامل لحركة التوريد.',
    features: ['مخزون', 'موردين', 'عقود توريد'],
    icon: 'link',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  },
  {
    title: 'تمويل العقود الحكومية',
    description: 'حلول للمشاريع الرسمية.',
    features: ['تنفيذ عقود', 'تجهيزات', 'دفعات مقدمة'],
    icon: 'file',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    title: 'تمويل المعدات الثقيلة',
    description: 'دعم المشاريع الصناعية والإنشائية.',
    features: ['معدات', 'أصول', 'تشغيل'],
    icon: 'harddrive',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    title: 'تمويل الامتياز التجاري',
    description: 'دعم دخولك عالم الفرانشايز.',
    features: ['رسوم', 'تجهيزات', 'تشغيل'],
    icon: 'award',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    title: 'تمويل التحول الرقمي',
    description: 'دعم تطوير الأنظمة والتقنيات.',
    features: ['ERP', 'أتمتة', 'حلول سحابية'],
    icon: 'monitor',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'تمويل التوسع الدولي',
    description: 'دعم دخول أسواق جديدة.',
    features: ['فروع', 'أصول', 'تشغيل خارجي'],
    icon: 'plane',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  },
  {
    title: 'تمويل الاستحواذات',
    description: 'حلول لشراء الشركات والحصص.',
    features: ['استحواذ', 'اندماج', 'شراء حصص'],
    icon: 'merge',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
  },
  {
    title: 'تمويل رأس المال الجريء',
    description: 'دعم الشركات الناشئة عالية النمو.',
    features: ['جولات استثمار', 'توسع سريع', 'منتجات جديدة'],
    icon: 'zap',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',
  },
  {
    title: 'تمويل المشاريع الخدمية',
    description: 'حلول للقطاعات غير الصناعية.',
    features: ['طبية', 'تعليمية', 'لوجستية'],
    icon: 'heart',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
]
const features = [
  {
    icon: SparklesIcon,
    title: 'حلول مخصصة',
    description: 'نصمم حلولاً تمويلية تناسب احتياجاتك الفريدة',
  },
  {
    icon: ShieldCheckIcon,
    title: 'موثوقية عالية',
    description: 'شراكات مع أفضل المؤسسات المالية المرخصة',
  },
  {
    icon: ClockIcon,
    title: 'سرعة الإنجاز',
    description: 'موافقات سريعة وإجراءات مبسطة',
  },
  {
    icon: UsersIcon,
    title: 'دعم متواصل',
    description: 'فريق متخصص يرافقك في كل خطوة',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]" dir="rtl">
     
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-[clamp(48px,10vh,96px)] bg-white">
        <div className="p-[clamp(16px,4vw,48px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,3vw,32px)]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-[clamp(24px,3vw,32px)]"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <div className="w-[clamp(56px,8vw,72px)] h-[clamp(56px,8vw,72px)] bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-[clamp(28px,4vw,36px)] h-[clamp(28px,4vw,36px)] text-[#D4AF37]" />
                </div>
                <h3 className="font-heading font-bold text-fluid-lg text-[#0A1628] mb-2">
                  {feature.title}
                </h3>
                <p className="text-fluid-sm text-[#64748B]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="  bg-[#FDF8F3]"
      >
        <div className="p-[5%]">
          {/* Section Header */}
          <motion.div
            className="text-center mb-[clamp(48px,8vh,80px)]"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-block text-fluid-sm font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              خدماتنا المتكاملة
            </span>
             
            <p className="text-fluid-lg text-[#64748B]  ">
              نقدم مجموعة شاملة من الحلول التمويلية المصممة لتلبية احتياجات
              الأفراد والشركات بمختلف أحجامها
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2.5vw,24px)]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                index={index}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[clamp(64px,12vh,128px)] bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative   px-[clamp(16px,4vw,48px)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(32px,6vw,80px)] items-center">
            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <span className="inline-block text-fluid-sm font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                لماذا نحن؟
              </span>
              <h2 className="font-heading font-bold text-fluid-4xl text-black mb-6">
                شريكك الموثوق في رحلة النجاح المالي
              </h2>
              <p className="text-fluid-lg text-black/70 mb-8">
                نمتلك خبرة تمتد لأكثر من 15 عاماً في مجال الوساطة المالية
                والتمويل، ونفخر بشراكاتنا مع أكبر المؤسسات المالية في المنطقة.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-fluid-base font-bold text-black">
                      شبكة واسعة من الشركاء
                    </div>
                    <div className="text-fluid-sm text-black/60">
                      +50 مؤسسة مالية مرخصة
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-fluid-base font-bold text-black">
                      نسبة نجاح عالية
                    </div>
                    <div className="text-fluid-sm text-black/60">
                      95% من طلبات التمويل تحصل على موافقة
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-fluid-base font-bold text-black">
                      دعم متخصص
                    </div>
                    <div className="text-fluid-sm text-black/60">
                      فريق من الخبراء الماليين المعتمدين
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="فريق العمل"
                  className="w-full h-[clamp(350px,45vh,500px)] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
              </div>

              {/* Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="text-fluid-3xl font-heading font-bold text-[#D4AF37]">
                  +2B
                </div>
                <div className="text-fluid-sm text-[#64748B]">
                  ريال تمويلات منجزة
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
       
    </div>
  )
}
