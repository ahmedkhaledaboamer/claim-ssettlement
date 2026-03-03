'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart3Icon,
  SettingsIcon,
  LinkIcon,
  MessageSquareIcon,
  CheckCircle2Icon } from
'lucide-react';
const layers = [
{
  icon: BarChart3Icon,
  title: 'طبقة التحليل المالي',
  description: 'نقرأ الأرقام، المؤشرات، والقدرة التمويلية.',
  color: 'emerald'
},
{
  icon: SettingsIcon,
  title: 'طبقة التقييم التشغيلي',
  description: 'نقيّم قوة المشروع واستدامته.',
  color: 'copper'
},
{
  icon: LinkIcon,
  title: 'طبقة المطابقة التمويلية',
  description: 'نطابق احتياجك مع الجهة المناسبة.',
  color: 'violet'
},
{
  icon: MessageSquareIcon,
  title: 'طبقة التفاوض',
  description: 'نضمن لك أفضل الشروط الممكنة.',
  color: 'coral'
},
{
  icon: CheckCircle2Icon,
  title: 'طبقة الإغلاق والمتابعة',
  description: 'نغلق الصفقة ونتابع التنفيذ حتى النهاية.',
  color: 'emerald'
}];

const getColorStyles = (color: string) => {
  switch (color) {
    case 'emerald':
      return {
        bg: 'bg-emerald-800',
        border: 'border-emerald-500',
        text: 'text-emerald-400'
      };
    case 'copper':
      return {
        bg: 'bg-charcoal-800',
        border: 'border-copper-500',
        text: 'text-copper-400'
      };
    case 'violet':
      return {
        bg: 'bg-charcoal-800',
        border: 'border-violet-500',
        text: 'text-violet-400'
      };
    case 'coral':
      return {
        bg: 'bg-charcoal-800',
        border: 'border-red-500',
        text: 'text-red-400'
      };
    default:
      return {
        bg: 'bg-charcoal-800',
        border: 'border-stone-500',
        text: 'text-stone-400'
      };
  }
};
export function OperatingSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section className="  bg-emerald-900 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />

      <div
        className="p-[5%] relative z-10"
        ref={ref}>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text & Layers */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: 30
            }
            }
            transition={{
              duration: 0.8
            }}>

            <div className="mb-12">
              <span
                className="inline-block px-4 py-2 bg-emerald-800/50 text-emerald-300 font-tajawal rounded-full border border-emerald-700/50 mb-6"
                style={{
                  fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)'
                }}>

                آلية العمل
              </span>
              <h2
                className="font-cairo font-bold text-white mb-4"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}>

                نظام التشغيل المالي
              </h2>
              <p
                className="font-tajawal text-emerald-100/80"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                }}>

                نظامنا مبني على طبقات تشغيلية دقيقة تعمل معًا لتقديم أفضل نتيجة
              </p>
            </div>

            <div className="space-y-4">
              {layers.map((layer, index) => {
                const styles = getColorStyles(layer.color);
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    animate={
                    isInView ?
                    {
                      opacity: 1,
                      y: 0
                    } :
                    {
                      opacity: 0,
                      y: 20
                    }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    className={`relative p-6 rounded-2xl border-r-4 ${styles.bg} ${styles.border} shadow-lg backdrop-blur-sm transition-transform hover:-translate-x-2`}
                    style={{
                      marginRight: `12px`
                    }}>

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-charcoal-900/50 flex items-center justify-center flex-shrink-0`}>

                        <layer.icon className={`w-6 h-6 ${styles.text}`} />
                      </div>
                      <div>
                        <h3
                          className="font-cairo font-bold text-white mb-1"
                          style={{
                            fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)'
                          }}>

                          {layer.title}
                        </h3>
                        <p
                          className="font-tajawal text-stone-300"
                          style={{
                            fontSize: 'clamp(0.9rem, 1.1vw, 1rem)'
                          }}>

                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>);

              })}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              scale: 1
            } :
            {
              opacity: 0,
              scale: 0.9
            }
            }
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="hidden lg:block relative">

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-emerald-800/50">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Financial Dashboard"
                className="w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />

              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 to-transparent" />
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-copper-500/20 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [0, 15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-12 -left-8 w-32 h-32 bg-violet-500/20 rounded-full blur-xl" />

          </motion.div>
        </div>
      </div>
    </section>);

}