'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  SearchIcon,
  FileTextIcon,
  SendIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  LifeBuoyIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import Image from 'next/image';

const services = [
{
  icon: SearchIcon,
  titleAr: 'التحليل المالي الشامل',
  titleEn: 'Comprehensive financial analysis',
  titleFr: 'Analyse financière complète',
  descriptionAr: 'تحليل عميق للبيانات المالية والتدفقات النقدية',
  descriptionEn: 'In‑depth analysis of financial data and cash flows.',
  descriptionFr: 'Analyse approfondie des données financières et des flux de trésorerie.',
  color: '#046307',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
},
{
  icon: ShieldIcon,
  titleAr: 'تقييم المخاطر',
  titleEn: 'Risk assessment',
  titleFr: 'Évaluation des risques',
  descriptionAr: 'تحديد وتقييم المخاطر المحتملة ووضع استراتيجيات التخفيف',
  descriptionEn: 'Identifying and assessing potential risks and defining mitigation strategies.',
  descriptionFr:
  'Identification et évaluation des risques potentiels, avec définition de stratégies d’atténuation.',
  color: '#FFBF00',
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop'
},
{
  icon: FileTextIcon,
  titleAr: 'تجهيز الملفات',
  titleEn: 'File preparation',
  titleFr: 'Préparation des dossiers',
  descriptionAr: 'إعداد ملفات تمويلية متكاملة ومحترفة',
  descriptionEn: 'Preparing complete, professional financing files.',
  descriptionFr: 'Préparation de dossiers de financement complets et professionnels.',
  color: '#9966CC',
  image:
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=200&fit=crop'
},
{
  icon: UsersIcon,
  titleAr: 'العلاقات مع جهات التمويل',
  titleEn: 'Relationships with funding institutions',
  titleFr: 'Relations avec les institutions financières',
  descriptionAr: 'شبكة واسعة من العلاقات مع البنوك والمؤسسات المالية',
  descriptionEn: 'A wide network of relationships with banks and financial institutions.',
  descriptionFr:
  'Un vaste réseau de relations avec les banques et les institutions financières.',
  color: '#0F52BA',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop'
},
{
  icon: SendIcon,
  titleAr: 'تقديم الملفات',
  titleEn: 'File submission',
  titleFr: 'Soumission des dossiers',
  descriptionAr: 'تقديم احترافي للملفات للجهات المناسبة',
  descriptionEn: 'Professional submission of files to the right institutions.',
  descriptionFr:
  'Soumission professionnelle des dossiers auprès des institutions appropriées.',
  color: '#0047AB',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop'
},
{
  icon: ScaleIcon,
  titleAr: 'التفاوض',
  titleEn: 'Negotiation',
  titleFr: 'Négociation',
  descriptionAr: 'تفاوض خبير للحصول على أفضل الشروط',
  descriptionEn: 'Expert negotiation to obtain the best terms.',
  descriptionFr: 'Négociation experte pour obtenir les meilleures conditions.',
  color: '#D97706',
  image:
  'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=200&fit=crop'
},
{
  icon: ClockIcon,
  titleAr: 'المتابعة المستمرة',
  titleEn: 'Continuous follow‑up',
  titleFr: 'Suivi continu',
  descriptionAr: 'متابعة دقيقة حتى الحصول على الموافقة',
  descriptionEn: 'Diligent follow‑up until approval is obtained.',
  descriptionFr: 'Suivi attentif jusqu’à l’obtention de l’approbation.',
  color: '#B87333',
  image:
  'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop'
},
{
  icon: CheckCircleIcon,
  titleAr: 'الإغلاق المالي',
  titleEn: 'Financial closing',
  titleFr: 'Clôture financière',
  descriptionAr: 'إتمام الصفقة بسلاسة واحترافية',
  descriptionEn: 'Smooth and professional deal closing.',
  descriptionFr: 'Clôture de l’opération de manière fluide et professionnelle.',
  color: '#DC143C',
  image:
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop'
},
{
  icon: LifeBuoyIcon,
  titleAr: 'دعم ما بعد التمويل',
  titleEn: 'Post‑financing support',
  titleFr: 'Accompagnement post‑financement',
  descriptionAr: 'دعم مستمر ومتابعة بعد إتمام التمويل',
  descriptionEn: 'Ongoing support and follow‑up after financing is completed.',
  descriptionFr:
  'Accompagnement continu et suivi après la mise en place du financement.',
  color: '#0E7490',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop'
},
{
  icon: TrendingUpIcon,
  titleAr: 'تطوير الأعمال',
  titleEn: 'Business development',
  titleFr: 'Développement des affaires',
  descriptionAr: 'استشارات لتطوير وتوسيع أعمالك',
  descriptionEn: 'Advisory services to develop and expand your business.',
  descriptionFr:
  'Conseils pour développer et étendre votre activité.',
  color: '#DC143C',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
}];

export function WhatWeDoSection({ locale }: { locale: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
  const headingTitle =
    locale === 'ar'
      ? { main: 'ماذا', highlight: ' نقدم' }
      : locale === 'fr'
      ? { main: 'Ce que', highlight: ' nous offrons' }
      : { main: 'What', highlight: ' we do' };

  const headingDescription =
    locale === 'ar'
      ? 'خدمات متكاملة تغطي كل جوانب رحلتك التمويلية من البداية حتى ما بعد الإغلاق'
      : locale === 'fr'
      ? 'Des services intégrés qui couvrent tous les aspects de votre parcours de financement, du début jusqu’après la clôture.'
      : 'Integrated services that cover every aspect of your financing journey from start to post‑closing.';
  return (
    <section id="services" className="relative p-[5%] overflow-hidden bg-white">
      <div ref={ref} className="relative z-10  ">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">

          <h2 className="text-fluid-section-title font-black mb-6">
            <span className="text-slate-900">{headingTitle.main}</span>
            <span className="gradient-text-gold">{headingTitle.highlight}</span>
          </h2>
          <p className="text-fluid-section-lead text-slate-600  ">
            {headingDescription}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title =
              locale === 'ar'
                ? service.titleAr
                : locale === 'fr'
                ? service.titleFr
                : service.titleEn;
            const description =
              locale === 'ar'
                ? service.descriptionAr
                : locale === 'fr'
                ? service.descriptionFr
                : service.descriptionEn;
            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                animate={
                isVisible ?
                {
                  opacity: 1,
                  y: 0
                } :
                {}
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}
                whileHover={{
                  y: -5
                }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">

                {/* Service Image */}
                <div className="relative h-24 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={200}
                    />

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: service.color
                    }} />

                </div>

                <div className={`p-5 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                      isRTL ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'
                    }`}
                    style={{
                      backgroundColor: `${service.color}10`
                    }}>

                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: service.color
                      }} />

                  </div>

                  {/* Content */}
                  <h3 className="text-fluid-card-title font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {title}
                  </h3>
                  <p className="text-fluid-body text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: service.color
                  }} />

              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}