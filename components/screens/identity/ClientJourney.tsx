'use client';
import {
  Search,
  FileText,
  CheckSquare,
  Handshake,
  CheckCircle } from
'lucide-react';
import { motion } from 'framer-motion';
export function ClientJourney() {
  const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'التحليل والتقييم',
    desc: 'قراءة دقيقة للواقع المالي وتقييم محكم للمخاطر',
    color: 'text-dept-analysis',
    bg: 'bg-dept-analysis/10',
    border: 'border-dept-analysis/30'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'بناء الملف',
    desc: 'صياغة احترافية وتجهيز مستندات مرتبة بخطة واضحة',
    color: 'text-dept-fileManagement',
    bg: 'bg-dept-fileManagement/10',
    border: 'border-dept-fileManagement/30'
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: 'المطابقة والامتثال',
    desc: 'التأكد من مطابقة الملفات للأنظمة ومعايير الجهات',
    color: 'text-dept-compliance',
    bg: 'bg-dept-compliance/10',
    border: 'border-dept-compliance/30'
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'التفاوض',
    desc: 'اختيار مدروس للجهة وتفاوض احترافي للشروط',
    color: 'text-dept-relations',
    bg: 'bg-dept-relations/10',
    border: 'border-dept-relations/30'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'الإغلاق',
    desc: 'إغلاق محكم ومتابعة مستمرة ودعم بعد التمويل',
    color: 'text-kep-gold',
    bg: 'bg-kep-gold/10',
    border: 'border-kep-gold/30'
  }];

  return (
    <section
      id="journey"
      className=" p-[5%] bg-kep-bg2 relative overflow-hidden">

      <div className=" ">
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
          className="text-center mb-16 md:mb-20">

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            رحلة <span className="text-kep-gold">العميل</span>
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed">
            مسار محسوب يضمن للعميل وضوحاً مالياً ونتيجة يمكن الاعتماد عليها
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) =>
            <motion.div
              key={idx}
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
              transition={{
                delay: idx * 0.1
              }}
              className="flex flex-col items-center text-center group">

                <div
                className={`w-18 h-18 rounded-2xl ${step.bg} ${step.border} border-2 flex items-center justify-center mb-5 ${step.color} transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm bg-white p-4`}>

                  {step.icon}
                </div>
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 w-full h-full min-h-[220px] transition-shadow shadow-card-light group-hover:shadow-card-elevated flex flex-col">
                  <div className="text-base font-bold text-kep-gold mb-3 font-heading tracking-wider">
                    الخطوة 0{idx + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-kep-text font-heading mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-kep-muted font-body leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}