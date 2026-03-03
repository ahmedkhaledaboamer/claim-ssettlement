'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircleIcon, TargetIcon, EyeIcon } from 'lucide-react';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  SlideIn } from
'./ScrollAnimations';
const expertiseAreas = [
{
  label: 'تحليل مالي',
  percentage: 95
},
{
  label: 'تفاوض',
  percentage: 90
},
{
  label: 'إعداد ملفات',
  percentage: 98
},
{
  label: 'متابعة',
  percentage: 100
}];

function ProgressBar({
  label,
  percentage,
  delay
}: {label: string;percentage: number;delay: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-navy-700 font-tajawal text-base">{label}</span>
        <span className="text-gold-600 font-cairo font-bold text-base">
          {percentage}%
        </span>
      </div>
      <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
        <motion.div
          initial={{
            width: 0
          }}
          animate={
          isInView ?
          {
            width: `${percentage}%`
          } :
          {
            width: 0
          }
          }
          transition={{
            duration: 1.5,
            delay,
            ease: 'easeOut'
          }}
          className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />

      </div>
    </div>);

}
export function AboutSection() {
  const bulletPoints = [
  'تحليل احتياجاتك المالية',
  'تقييم وضعك التشغيلي',
  'اختيار الجهة التمويلية الأنسب',
  'تجهيز ملف تمويلي قوي',
  'التفاوض على أفضل الشروط',
  'متابعة الطلب حتى الموافقة النهائية'];

  const images = [
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    alt: 'فريق عمل محترف في اجتماع',
    height: 'h-72'
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    alt: 'بيئة عمل احترافية',
    height: 'h-48'
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    alt: 'تعاون وعمل جماعي',
    height: 'h-56'
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    alt: 'اجتماع عمل',
    height: 'h-40'
  }];

  return (
    <section
      id="about"
      className="relative bg-alabaster section-padding overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-coral-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-28 lg:mb-32">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <span className="inline-block text-gold-600 font-cairo font-bold text-sm tracking-wider mb-5">
                تعرّف علينا
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-navy-900 mb-8">
                من <span className="gradient-text-gold">نحن؟</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-navy-700 font-tajawal leading-relaxed mb-6">
                نحن شركة متخصصة في وساطة التمويل وتوفير حلول مالية متقدمة
                للشركات، رواد الأعمال، والمشاريع الاستثمارية.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-navy-600 font-tajawal text-base md:text-lg mb-6">
                نساعدك على الوصول إلى التمويل المناسب عبر:
              </p>
            </FadeUp>

            <StaggerContainer className="space-y-3 mb-10" staggerDelay={0.08}>
              {bulletPoints.map((point, index) =>
              <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-teal">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-navy-700 font-tajawal text-base md:text-lg">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>

            {/* Progress Bars */}
            <FadeUp delay={0.5}>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h4 className="text-lg font-cairo font-bold text-navy-900 mb-4">
                  مجالات خبرتنا
                </h4>
                {expertiseAreas.map((area, index) =>
                <ProgressBar
                  key={index}
                  label={area.label}
                  percentage={area.percentage}
                  delay={0.2 * index} />

                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="bg-navy-900 rounded-2xl p-6 shadow-xl shadow-navy/20">
                <p className="text-white/90 font-tajawal text-base md:text-lg leading-relaxed">
                  نحن لا نبحث عن &quot;تمويل فقط&quot;…{' '}
                  <span className="text-gold-400 font-bold">
                    نبحث عن تمويل صحيح
                  </span>{' '}
                  يخدم هدفك ويعزز نموك ويقلل مخاطرك.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Images - Masonry Style */}
          <div className="order-1 lg:order-2 relative">
            <SlideIn direction="left" className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) =>
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03
                  }}
                  className={`relative overflow-hidden rounded-2xl shadow-xl group ${image.height} ${index === 0 ? 'col-span-2' : ''}`}>

                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-tajawal text-sm">
                        {image.alt}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </SlideIn>

            {/* Decorative accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-400/20 rounded-full -z-10" />
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-coral-400/15 rounded-xl rotate-12 -z-10" />
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Mission Card */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{
                y: -8
              }}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-r-4 border-teal-500 h-full overflow-hidden group">

              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73b7651ba67?w=600&q=80"
                  alt=""
                  className="w-full h-full object-cover" />

              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-teal">
                  <TargetIcon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-cairo font-bold text-navy-900 mb-4">
                  رسالتنا
                </h3>
                <p className="text-navy-700 font-tajawal text-base md:text-lg leading-relaxed mb-4">
                  أن نكون الجهة التي تمنح العميل وضوحًا ماليًا، وتقوده نحو
                  التمويل المناسب عبر إدارة احترافية، تضمن له شروطًا أفضل، وقتًا
                  أقل، ومخاطر أقل.
                </p>
                <div className="bg-teal-50 rounded-xl p-4">
                  <p className="text-teal-700 font-tajawal text-sm">
                    رسالتنا ليست مجرد كلمات… بل{' '}
                    <span className="font-bold">التزام تشغيلي</span> نطبّقه في
                    كل ملف، وفي كل خطوة، ومع كل عميل.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* Vision Card */}
          <FadeUp delay={0.3}>
            <motion.div
              whileHover={{
                y: -8
              }}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border-r-4 border-gold-500 h-full overflow-hidden group">

              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <img
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80"
                  alt=""
                  className="w-full h-full object-cover" />

              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                  <EyeIcon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-cairo font-bold text-navy-900 mb-4">
                  رؤيتنا
                </h3>
                <p className="text-navy-700 font-tajawal text-base md:text-lg leading-relaxed mb-4">
                  أن نصبح الكيان المالي الذي يُشار إليه عند الحديث عن:
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <span className="bg-gold-50 text-gold-700 px-3 py-1.5 rounded-lg text-sm font-tajawal text-center shadow-sm">
                    الوساطة الاحترافية
                  </span>
                  <span className="bg-gold-50 text-gold-700 px-3 py-1.5 rounded-lg text-sm font-tajawal text-center shadow-sm">
                    الملفات القوية
                  </span>
                  <span className="bg-coral-50 text-coral-700 px-3 py-1.5 rounded-lg text-sm font-tajawal text-center shadow-sm">
                    النتائج الثابتة
                  </span>
                  <span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-sm font-tajawal text-center shadow-sm">
                    التنفيذ السريع
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-tajawal text-center col-span-2 shadow-sm">
                    السرية الكاملة
                  </span>
                </div>
                <p className="text-navy-600 font-tajawal text-sm italic">
                  نحن لا نطمح أن نكون &quot;الأكبر&quot;… بل نطمح أن نكون{' '}
                  <span className="font-bold text-gold-600">
                    الأدق، الأقوى، والأكثر ثقة.
                  </span>
                </p>
              </div>
            </motion.div>
          </FadeUp>
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
            d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FDF5E6" />

        </svg>
      </div>
    </section>);

}