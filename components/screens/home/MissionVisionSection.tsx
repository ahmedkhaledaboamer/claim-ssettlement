'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TargetIcon, EyeIcon, CheckIcon } from 'lucide-react';
const visionPoints = [
'الوساطة الاحترافية',
'الملفات القوية',
'النتائج الثابتة',
'الشروط التنافسية',
'التنفيذ السريع',
'السرية الكاملة'];

export function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };
  return (
    <section className="relative  overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Skyscraper"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-charcoal-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
      </div>

      <div
        className="p-[5%] relative z-10"
        ref={ref}>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group transform md:rotate-1 hover:rotate-0 transition-transform duration-500">

            {/* Top Gradient Border */}
            <div className="absolute top-0 right-0 left-0 h-2 gradient-emerald" />

            {/* Decorative Background Shape */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8 shadow-inner">
                <TargetIcon className="w-8 h-8 text-emerald-600" />
              </div>

              <h3
                className="font-cairo font-bold text-charcoal-900 mb-6"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>

                رسالتنا
              </h3>

              <p
                className="font-tajawal text-charcoal-700 mb-8 leading-relaxed"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>

                أن نكون الجهة التي تمنح العميل وضوحًا ماليًا، وتقوده نحو التمويل
                المناسب عبر إدارة احترافية، تضمن له شروطًا أفضل، وقتًا أقل،
                ومخاطر أقل.
              </p>

              <div className="p-5 bg-stone-50 rounded-xl border border-stone-100 relative">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r-xl" />
                <p
                  className="font-cairo font-semibold text-emerald-800"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.25vw, 1.05rem)'
                  }}>

                  رسالتنا ليست مجرد كلمات… بل التزام تشغيلي نطبّقه في كل ملف،
                  وفي كل خطوة، ومع كل عميل.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group transform md:-rotate-1 hover:rotate-0 transition-transform duration-500 md:translate-y-8">

            {/* Top Gradient Border */}
            <div className="absolute top-0 right-0 left-0 h-2 gradient-violet" />

            {/* Decorative Background Shape */}
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-8 shadow-inner">
                <EyeIcon className="w-8 h-8 text-violet-600" />
              </div>

              <h3
                className="font-cairo font-bold text-charcoal-900 mb-6"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>

                رؤيتنا
              </h3>

              <p
                className="font-tajawal text-charcoal-700 mb-6"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>

                أن نصبح الكيان المالي الذي يُشار إليه عند الحديث عن:
              </p>

              <ul className="grid grid-cols-2 gap-4 mb-8">
                {visionPoints.map((point, index) =>
                <motion.li
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 10
                  }}
                  animate={
                  isInView ?
                  {
                    opacity: 1,
                    x: 0
                  } :
                  {
                    opacity: 0,
                    x: 10
                  }
                  }
                  transition={{
                    delay: 0.5 + index * 0.1
                  }}
                  className="flex items-center gap-2">

                    <CheckIcon className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span
                    className="font-tajawal text-charcoal-800 font-medium"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.25vw, 1rem)'
                    }}>

                      {point}
                    </span>
                  </motion.li>
                )}
              </ul>

              <div className="p-5 bg-stone-50 rounded-xl border border-stone-100 relative">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-violet-500 rounded-r-xl" />
                <p
                  className="font-cairo font-semibold text-violet-800"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.25vw, 1.05rem)'
                  }}>

                  نحن لا نطمح أن نكون "الأكبر"… بل نطمح أن نكون الأدق، الأقوى،
                  والأكثر ثقة.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}