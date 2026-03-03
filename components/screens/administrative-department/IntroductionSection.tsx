'use client';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  TargetIcon,
  UsersIcon,
  ShieldCheckIcon,
  TrendingUpIcon } from
'lucide-react';
const features = [
{
  icon: TargetIcon,
  title: 'دقة تشغيلية',
  description: 'نظام عمل محكم يضمن دقة في كل خطوة',
  color: '#0E7490',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
},
{
  icon: UsersIcon,
  title: 'فريق متخصص',
  description: 'خبراء في كل مجال من مجالات التمويل',
  color: '#0F52BA',
  image:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
},
{
  icon: ShieldCheckIcon,
  title: 'سرية تامة',
  description: 'حماية كاملة لمعلوماتك المالية',
  color: '#DC143C',
  image:
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
},
{
  icon: TrendingUpIcon,
  title: 'نتائج مضمونة',
  description: 'نسبة نجاح تتجاوز ٩٤٪ في الملفات',
  color: '#D97706',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
}];

export function IntroductionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
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

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-slate-900">المركز التشغيلي</span>
            <span className="gradient-text-gold"> المتكامل</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            جهاز إداري متكامل يجمع بين الخبرة العميقة والتنسيق المحكم، حيث يعمل
            ١٥ منصباً تنفيذياً بتناغم تام لإدارة ملفك التمويلي من اللحظة الأولى
            حتى ما بعد الإغلاق.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy" />

                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundColor: feature.color
                      }} />

                  </div>

                  <div className="p-6">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {feature.description}
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

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop"
              alt="فريق العمل في اجتماع"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy" />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/20 to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 text-white">
              <p className="text-lg md:text-xl font-bold">
                فريق متكامل يعمل من أجلك
              </p>
              <p className="text-sm text-white/80 mt-1">
                خبرة تمتد لسنوات في مجال التمويل
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

          <blockquote className="text-xl md:text-2xl text-slate-700 italic max-w-4xl mx-auto">
            &quot;نحن لا نقدم خدمة تمويل فحسب، بل نقدم شراكة استراتيجية تضمن نجاحك
            المالي&quot;
          </blockquote>
          <div className="mt-4 text-teal-600 font-semibold">— مجلس الإدارة</div>
        </motion.div>
      </div>
    </section>);

}