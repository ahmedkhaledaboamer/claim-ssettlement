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
  UsersIcon } from
'lucide-react';
const services = [
{
  icon: SearchIcon,
  title: 'التحليل المالي الشامل',
  description: 'تحليل عميق للبيانات المالية والتدفقات النقدية',
  color: '#046307',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
},
{
  icon: ShieldIcon,
  title: 'تقييم المخاطر',
  description: 'تحديد وتقييم المخاطر المحتملة ووضع استراتيجيات التخفيف',
  color: '#FFBF00',
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop'
},
{
  icon: FileTextIcon,
  title: 'تجهيز الملفات',
  description: 'إعداد ملفات تمويلية متكاملة ومحترفة',
  color: '#9966CC',
  image:
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=200&fit=crop'
},
{
  icon: UsersIcon,
  title: 'العلاقات مع جهات التمويل',
  description: 'شبكة واسعة من العلاقات مع البنوك والمؤسسات المالية',
  color: '#0F52BA',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop'
},
{
  icon: SendIcon,
  title: 'تقديم الملفات',
  description: 'تقديم احترافي للملفات للجهات المناسبة',
  color: '#0047AB',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop'
},
{
  icon: ScaleIcon,
  title: 'التفاوض',
  description: 'تفاوض خبير للحصول على أفضل الشروط',
  color: '#D97706',
  image:
  'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=200&fit=crop'
},
{
  icon: ClockIcon,
  title: 'المتابعة المستمرة',
  description: 'متابعة دقيقة حتى الحصول على الموافقة',
  color: '#B87333',
  image:
  'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop'
},
{
  icon: CheckCircleIcon,
  title: 'الإغلاق المالي',
  description: 'إتمام الصفقة بسلاسة واحترافية',
  color: '#DC143C',
  image:
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop'
},
{
  icon: LifeBuoyIcon,
  title: 'دعم ما بعد التمويل',
  description: 'دعم مستمر ومتابعة بعد إتمام التمويل',
  color: '#0E7490',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop'
},
{
  icon: TrendingUpIcon,
  title: 'تطوير الأعمال',
  description: 'استشارات لتطوير وتوسيع أعمالك',
  color: '#DC143C',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
}];

export function WhatWeDoSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
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

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-slate-900">ماذا</span>
            <span className="gradient-text-gold"> نقدم</span>
          </h2>
          <p className="text-lg text-slate-600  ">
            خدمات متكاملة تغطي كل جوانب رحلتك التمويلية من البداية حتى ما بعد
            الإغلاق
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">

                {/* Service Image */}
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy" />

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: service.color
                    }} />

                </div>

                <div className="p-5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
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
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
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