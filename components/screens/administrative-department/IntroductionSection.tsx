'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  TargetIcon,
  UsersIcon,
  ShieldCheckIcon,
  TrendingUpIcon
} from 'lucide-react';

const features = [
{
  icon: TargetIcon,
  titleAr: 'دقة تشغيلية',
  titleEn: 'Operational precision',
  titleFr: 'Précision opérationnelle',
  descriptionAr: 'نظام عمل محكم يضمن دقة في كل خطوة',
  descriptionEn: 'A rigorous operating system that ensures accuracy at every step.',
  descriptionFr:
  'Un système opérationnel rigoureux qui garantit la précision à chaque étape.',
  color: '#0E7490',
  image: '/imgs/A refined financial identity w/image_0.webp'
},
{
  icon: UsersIcon,
  titleAr: 'فريق متخصص',
  titleEn: 'Specialized team',
  titleFr: 'Équipe spécialisée',
  descriptionAr: 'خبراء في كل مجال من مجالات التمويل',
  descriptionEn: 'Experts in every major field of financing.',
  descriptionFr: 'Des experts dans chaque grand domaine du financement.',
  color: '#0F52BA',
  image: '/imgs/A refined real estate financin/image_22.webp'
},
{
  icon: ShieldCheckIcon,
  titleAr: 'سرية تامة',
  titleEn: 'Total confidentiality',
  titleFr: 'Confidentialité totale',
  descriptionAr: 'حماية كاملة لمعلوماتك المالية',
  descriptionEn: 'Complete protection of your financial information.',
  descriptionFr: 'Protection complète de vos informations financières.',
  color: '#DC143C',
  image: '/imgs/A resultsoriented visualizatio/image_62.webp'
},
{
  icon: TrendingUpIcon,
  titleAr: 'نتائج مضمونة',
  titleEn: 'Proven results',
  titleFr: 'Résultats garantis',
  descriptionAr: 'نسبة نجاح تتجاوز ٩٤٪ في الملفات',
  descriptionEn: 'A success rate exceeding 94% across files.',
  descriptionFr: 'Un taux de réussite supérieur à 94 % sur les dossiers.',
  color: '#D97706',
  image: '/imgs/A risk management control room/image_24.webp'
}];

export function IntroductionSection({ locale }: { locale: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isRTL = locale === 'ar';
  const headingTitle =
    locale === 'ar'
      ? { main: 'المركز التشغيلي', highlight: ' المتكامل' }
      : locale === 'fr'
      ? { main: 'Centre opérationnel', highlight: ' intégré' }
      : { main: 'Integrated', highlight: ' operations center' };

  const headingDescription =
    locale === 'ar'
      ? 'جهاز إداري متكامل يجمع بين الخبرة العميقة والتنسيق المحكم، حيث يعمل ١٥ منصباً تنفيذياً بتناغم تام لإدارة ملفك التمويلي من اللحظة الأولى حتى ما بعد الإغلاق.'
      : locale === 'fr'
      ? 'Un appareil administratif intégré qui combine une expertise approfondie et une coordination précise, où 15 postes exécutifs travaillent en parfaite harmonie pour gérer votre dossier de financement dès le premier jour et bien au‑delà de la clôture.'
      : 'An integrated administrative apparatus that combines deep expertise and precise coordination, where 15 executive positions work in full harmony to manage your financing file from the first moment through post‑closing.';
  return (
    <section className="relative p-[5%] overflow-hidden bg-slate-50">
      <div ref={ref} className="relative z-10 ">
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
          <p className="text-fluid-section-lead text-slate-600   leading-relaxed">
            {headingDescription}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const title =
              locale === 'ar'
                ? feature.titleAr
                : locale === 'fr'
                ? feature.titleFr
                : feature.titleEn;
            const description =
              locale === 'ar'
                ? feature.descriptionAr
                : locale === 'fr'
                ? feature.descriptionFr
                : feature.descriptionEn;
            return (
              <motion.div
                key={title}
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
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="group relative">

                <div className="bg-white rounded-2xl overflow-hidden h-full border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
                  {/* Feature Image */}
                  <div className="relative h-[clamp(180px,22vw,600px)]   overflow-hidden">
                    <img
                      src={feature.image}
                    alt={title}
                      width={500}
                      height={320}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy" />

                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundColor: feature.color
                      }} />

                  </div>

                    <div className={`p-6 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                        isRTL ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'
                      }`}
                      style={{
                        backgroundColor: `${feature.color}10`
                      }}>

                      <Icon
                        className="w-7 h-7"
                        style={{
                          color: feature.color
                        }} />

                    </div>

                    {/* Content */}
                    <h3 className="text-fluid-body-lg font-bold text-slate-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-fluid-body text-slate-500">
                      {description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: feature.color
                    }} />

                </div>
              </motion.div>);

          })}
        </div>

        {/* Team Meeting Image */}
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
            duration: 0.8,
            delay: 0.4
          }}
          className="mt-16">

          <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[280px]">
            <img
              src="/imgs/A seamless financial closure e/image_3.webp"
              alt={
                locale === 'ar'
                  ? 'فريق العمل في اجتماع'
                  : locale === 'fr'
                  ? 'Équipe en réunion'
                  : 'Team in a meeting'
              }
              width={1200}
              height={600}
              className="w-full h-64 md:h-80 min-h-[280px] object-cover"
              loading="lazy" />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/20 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 text-white">
              <p className="text-fluid-body-lg font-bold">
                {locale === 'ar'
                  ? 'فريق متكامل يعمل من أجلك'
                  : locale === 'fr'
                  ? 'Une équipe intégrée qui travaille pour vous'
                  : 'An integrated team working for you'}
              </p>
              <p className="text-fluid-body text-white/80 mt-1">
                {locale === 'ar'
                  ? 'خبرة تمتد لسنوات في مجال التمويل'
                  : locale === 'fr'
                  ? 'Une expérience de plusieurs années dans le financement'
                  : 'Years of experience in the financing field'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
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
            duration: 0.8,
            delay: 0.5
          }}
          className="mt-16 text-center">

          <blockquote className="text-fluid-section-lead text-slate-700 italic ">
            {locale === 'ar' &&
              '«نحن لا نقدم خدمة تمويل فحسب، بل نقدم شراكة استراتيجية تضمن نجاحك المالي»'}
            {locale === 'en' &&
              '“We do not only provide a financing service, we provide a strategic partnership that ensures your financial success.”'}
            {locale === 'fr' &&
              '« Nous ne proposons pas seulement un service de financement, mais un partenariat stratégique qui garantit votre réussite financière. »'}
          </blockquote>
          <div className="mt-4 text-teal-600 font-semibold text-fluid-body">
            {locale === 'ar'
              ? '— مجلس الإدارة'
              : locale === 'fr'
              ? '— Conseil d’administration'
              : '— Board of Directors'}
          </div>
        </motion.div>
      </div>
    </section>);

}