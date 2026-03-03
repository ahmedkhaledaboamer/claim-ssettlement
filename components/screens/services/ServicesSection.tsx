'use client';
import React, { useState, cloneElement } from 'react';
import {
  BarChart3,
  Building,
  Home,
  Briefcase,
  Store,
  Landmark,
  TrendingUp,
  Lightbulb,
  Cpu,
  Globe,
  PieChart,
  ShieldCheck,
  FileSearch,
  Users,
  Clock,
  HeadphonesIcon,
  ArrowLeft } from
'lucide-react';
import { InfoModal } from './InfoModal';
export function ServicesSection() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const processItemsRow1 = [
  {
    icon: <PieChart />,
    text: 'تحليل احتياجاتك المالية'
  },
  {
    icon: <Building />,
    text: 'اختيار الجهة التمويلية المناسبة'
  },
  {
    icon: <FileSearch />,
    text: 'تجهيز ملف تمويلي احترافي'
  },
  {
    icon: <ShieldCheck />,
    text: 'التفاوض على أفضل الشروط'
  }];

  const processItemsRow2 = [
  {
    icon: <Clock />,
    text: 'متابعة الطلب حتى الموافقة'
  },
  {
    icon: <Users />,
    text: 'دعمك بعد الحصول على التمويل'
  },
  {
    icon: <HeadphonesIcon />,
    text: 'تقديم استشارات مالية'
  }];

  const mainServices = [
  {
    icon: <Briefcase />,
    title: 'وساطة التمويل التجاري',
    desc: 'حلول تمويلية للأنشطة التجارية'
  },
  {
    icon: <BarChart3 />,
    title: 'وساطة التمويل الاستثماري',
    desc: 'تمويل المشاريع الاستثمارية الكبرى'
  },
  {
    icon: <Home />,
    title: 'وساطة التمويل العقاري',
    desc: 'تمويل شراء وتطوير العقارات'
  },
  {
    icon: <Building />,
    title: 'وساطة تمويل الشركات',
    desc: 'حلول مالية مخصصة للشركات'
  },
  {
    icon: <Store />,
    title: 'تمويل المشاريع الصغيرة والمتوسطة',
    desc: 'دعم نمو المشاريع الناشئة'
  },
  {
    icon: <Landmark />,
    title: 'وساطة التمويل الإسلامي',
    desc: 'حلول متوافقة مع الشريعة'
  },
  {
    icon: <TrendingUp />,
    title: 'تمويل التوسع والتطوير',
    desc: 'تمويل خطط التوسع والنمو'
  },
  {
    icon: <Lightbulb />,
    title: 'تمويل المشاريع الجديدة',
    desc: 'إطلاق مشاريعك بثقة'
  },
  {
    icon: <Cpu />,
    title: 'تمويل الابتكار والتقنية',
    desc: 'دعم المشاريع التقنية المبتكرة'
  },
  {
    icon: <Globe />,
    title: 'التمويل الخارجي (FDI)',
    desc: 'جذب الاستثمارات الأجنبية'
  }];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Offer Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
            <span className="text-sm font-bold">منظومة متكاملة</span>
          </div>
          <h2 className="text-4xl font-bold text-navy mb-6">ماذا نقدّم؟</h2>
          <p className="text-lg text-gray-600">
            نقدّم منظومة وساطة تمويلية متكاملة تضمن لك الحصول على التمويل الأنسب
            بأفضل الشروط، وتتضمن:
          </p>
        </div>

        {/* Process Grid - Restructured */}
        <div className="mb-16">
          {/* Row 1: 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {processItemsRow1.map((item, index) =>
            <div
              key={`r1-${index}`}
              className="bg-warmGray rounded-xl p-6 text-center hover:bg-teal-dark hover:text-white transition-colors duration-300 group border border-warmGray-dark shadow-sm hover:shadow-md">

                <div className="w-12 h-12 mx-auto rounded-full bg-white group-hover:bg-teal flex items-center justify-center text-gold group-hover:text-white mb-4 transition-colors">
                  {cloneElement(
                    item.icon as React.ReactElement<{ className?: string }>,
                    {
                      className: 'w-6 h-6'
                    }
                  )}
                </div>
                <h3 className="font-bold text-sm md:text-base">{item.text}</h3>
              </div>
            )}
          </div>
          {/* Row 2: 3 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-3/4 mx-auto">
            {processItemsRow2.map((item, index) =>
            <div
              key={`r2-${index}`}
              className="bg-warmGray rounded-xl p-6 text-center hover:bg-teal-dark hover:text-white transition-colors duration-300 group border border-warmGray-dark shadow-sm hover:shadow-md">

                <div className="w-12 h-12 mx-auto rounded-full bg-white group-hover:bg-teal flex items-center justify-center text-gold group-hover:text-white mb-4 transition-colors">
                  {cloneElement(
                    item.icon as React.ReactElement<{ className?: string }>,
                    {
                      className: 'w-6 h-6'
                    }
                  )}
                </div>
                <h3 className="font-bold text-sm md:text-base">{item.text}</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dramatic Photo Banner */}
      <div className="relative h-72 w-full mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
          alt="Partnership Handshake"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-gold/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="relative mb-6">
            <span className="absolute -top-8 -start-8 text-6xl text-gold/40 font-serif">
              «
            </span>
            <p className="text-2xl md:text-3xl font-bold text-gold max-w-3xl leading-relaxed font-cairo relative z-10">
              نحن لا نبحث عن تمويل فقط… نبحث عن تمويل صحيح يخدم هدفك ويعزز نموك
              ويقلل مخاطرك.
            </p>
            <span className="absolute -bottom-12 -end-8 text-6xl text-gold/40 font-serif">
              »
            </span>
          </div>
          <button
            onClick={() => setIsServicesModalOpen(true)}
            className="mt-4 inline-flex items-center gap-2 bg-gold/20 hover:bg-gold/30 text-gold border border-gold/50 font-bold py-2 px-6 rounded-full transition-all duration-300 group">

            اقرأ المزيد عن منهجيتنا
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-navy">خدماتنا الأساسية</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-warmGray-dark via-gold/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`group relative bg-white border border-warmGray-dark rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden ${isEven ? 'hover:border-gold' : 'hover:border-teal'}`}>

                  <div
                    className={`absolute top-0 end-0 w-24 h-24 bg-warmGray rounded-full -translate-y-1/2 translate-x-1/2 transition-colors ${isEven ? 'group-hover:bg-gold/10' : 'group-hover:bg-teal/10'}`}>
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className={`transition-colors mb-4 ${isEven ? 'text-gold group-hover:text-gold-dark' : 'text-teal group-hover:text-teal-dark'}`}>

                      {cloneElement(
                        service.icon as React.ReactElement<{ className?: string }>,
                        {
                          className: 'w-8 h-8'
                        }
                      )}
                    </div>
                    <h3 className="font-bold text-navy text-lg leading-tight group-hover:text-navy-light transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-auto">
                      {service.desc}
                    </p>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        title="منهجيتنا في التمويل">

        <div className="space-y-4">
          <p>
            في كيه إي بي، ندرك أن التمويل الخاطئ قد يكون عبئاً بدلاً من أن يكون
            رافعة للنمو. لذلك، منهجيتنا تعتمد على دراسة متأنية لوضعك المالي
            والتشغيلي قبل اتخاذ أي خطوة.
          </p>
          <p>
            نحن نقوم بمطابقة احتياجاتك مع سياسات وشروط أكثر من 50 جهة تمويلية في
            السوق، لضمان حصولك على التمويل الذي يقدم لك أفضل هيكلة، أقل تكلفة،
            وأنسب جدول سداد يتماشى مع تدفقاتك النقدية.
          </p>
          <p>
            سواء كنت تبحث عن تمويل لرأس المال العامل، أو تمويل توسعات رأسمالية،
            أو حتى إعادة هيكلة ديونك الحالية، فإن فريقنا من الخبراء الماليين
            سيعمل معك جنباً إلى جنب لتصميم الحل المالي الأمثل الذي يحمي مصالحك
            ويدعم استراتيجيتك طويلة المدى.
          </p>
        </div>
      </InfoModal>
    </section>);

}