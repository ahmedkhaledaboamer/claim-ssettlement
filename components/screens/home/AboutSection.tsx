'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircleIcon, TargetIcon, EyeIcon } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem, SlideIn } from './ScrollAnimations';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

const expertiseAreas = [
  { key: 'financialAnalysis', percentage: 95 },
  { key: 'negotiation', percentage: 90 },
  { key: 'filePreparation', percentage: 98 },
  { key: 'followUp', percentage: 100 }
];

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
        <span className="text-navy-700 text-fluid-body">{label}</span>
        <span className="text-gold-600 font-cairo font-bold text-fluid-body">{percentage}%</span>
      </div>
      <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={
            isInView
              ? {
                  width: `${percentage}%`
                }
              : {
                  width: 0
                }
          }
          transition={{
            duration: 1.5,
            delay,
            ease: 'easeOut'
          }}
          className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full"
        />
      </div>
    </div>
  );
}
export function AboutSection() {
  const t = useTranslations('home.about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const bulletPoints = t.raw('bulletPoints') as string[];

  const images = [
    {
      src: '/imgs/101 A secure information manag/image_18.webp',
      alt: t('images.team', { defaultValue: t('badge') }),
      height: 'h-64 sm:h-72 lg:h-[420px] xl:h-[600px]'
    },
    {
      src: '/imgs/102 An executive reporting stu/image_8.webp',
      alt: t('images.workspace', { defaultValue: t('badge') }),
      height: 'h-56 sm:h-64 lg:h-[380px] xl:h-[600px]'
    },
    {
      src: '/imgs/103 A continuous compliance op/image_19.webp',
      alt: t('images.collaboration', { defaultValue: t('badge') }),
      height: 'h-56 sm:h-64 lg:h-[380px] xl:h-[600px]'
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-alabaster section-padding overflow-hidden px-[5%] py-[2%]">

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-coral-400/5 rounded-full blur-3xl" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-28 lg:mb-32">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeUp className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <span className="inline-block mx-auto text-gold-600 font-cairo font-bold text-xl tracking-wider mb-5">
                {t('badge')}
              </span>
            </FadeUp>

            <FadeUp delay={0.1} className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <h2
                className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-8"
              >
                {t('titleMain')}{' '}
                <span className="gradient-text-gold">{t('titleHighlight')}</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-fluid-section-lead text-navy-700 font-tajawal leading-relaxed mb-6">
                {t('lead')}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-navy-600 font-tajawal text-fluid-body mb-6">
                {t('helpIntro')}
              </p>
            </FadeUp>

            <StaggerContainer className="space-y-3 mb-10" staggerDelay={0.08}>
              {bulletPoints.map((point, index) =>
              <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-teal">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-navy-700 font-tajawal text-fluid-body">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>

            {/* Progress Bars */}
            <FadeUp delay={0.5}>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h4 className="text-fluid-body-lg font-cairo font-bold text-navy-900 mb-4">
                  {t('expertiseTitle')}
                </h4>
                {expertiseAreas.map((area, index) => (
                  <ProgressBar
                    key={area.key}
                    label={t(`expertise.${area.key}`)}
                    percentage={area.percentage}
                    delay={0.2 * index}
                  />
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="bg-navy-900 rounded-2xl p-6 shadow-xl shadow-navy/20">
                <p className="text-white/90 font-tajawal text-fluid-body leading-relaxed">
                  {t('commitmentText')}
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
                  className={`relative overflow-hidden rounded-2xl shadow-xl group min-h-[200px] ${index === 0 ? 'min-h-[280px] col-span-2' : ''} ${image.height}`}>

                    <Image
                    width={800}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover img-fluid-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-tajawal text-fluid-body">
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
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity min-h-[200px]">
                <Image
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/imgs/104 An integrityfocused corpor/image_9.webp"
                  alt=""
                  className="w-full h-full object-cover img-fluid-cover" />

              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-teal">
                  <TargetIcon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-fluid-2xl font-cairo font-bold text-navy-900 mb-4">
                  {t('missionCardTitle')}
                </h3>
                <p className="text-navy-700 font-tajawal text-fluid-body leading-relaxed mb-4">
                  {t('missionCardParagraph')}
                </p>
                <div className="bg-teal-50 rounded-xl p-4">
                  <p className="text-teal-700 font-tajawal text-fluid-body">
                    {t('missionCardBoxText')}
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
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity min-h-[200px]">
                <Image
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="/imgs/105 A longterm institutional r/image_20.webp"
                  alt=""
                  className="w-full h-full object-cover img-fluid-cover" />

              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                  <EyeIcon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-fluid-2xl font-cairo font-bold text-navy-900 mb-4">
                  {t('visionCardTitle')}
                </h3>
                <p className="text-navy-700 font-tajawal text-fluid-body leading-relaxed mb-4">
                  {t('visionIntro')}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4 w-full">
                  {(
                    t.raw('visionTags') as string[]
                  ).map((tag, index) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-lg text-fluid-body font-tajawal text-center shadow-sm ${
                        index < 2
                          ? 'bg-gold-50 text-gold-700'
                          : index === 2
                          ? 'bg-coral-50 text-coral-700'
                          : index === 3
                          ? 'bg-teal-50 text-teal-700'
                          : 'bg-purple-50 text-purple-700 col-span-2'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-navy-600 font-tajawal text-fluid-body italic">
                  {t('visionQuote')}
                </p>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>

    </section>);

}