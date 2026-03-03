 'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { faqItems } from '@/data/faqData';
import {
  ChevronDownIcon,
  HelpCircleIcon,
  MessageCircleIcon } from
'lucide-react';
export function FAQSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = [...new Set(faqItems.map((item) => item.category))];
  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-white">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
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
            <span className="text-slate-900">الأسئلة</span>
            <span className="gradient-text-gold"> الشائعة</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وآلية عملنا
          </p>
        </motion.div>

        {/* Category Tags */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
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
            delay: 0.2
          }}
          className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) =>
          <span
            key={category}
            className="px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-600">

              {category}
            </span>
          )}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 p-6 text-right hover:bg-slate-50 transition-colors">

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isOpen ? 'bg-teal-50' : 'bg-slate-100'}`}>

                    <HelpCircleIcon
                      className={`w-5 h-5 ${isOpen ? 'text-teal-600' : 'text-slate-400'}`} />

                  </div>
                  <span
                    className={`flex-1 font-bold transition-colors duration-300 ${isOpen ? 'text-teal-600' : 'text-slate-900'}`}>

                    {item.questionAr}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0
                    }}
                    transition={{
                      duration: 0.3
                    }}>

                    <ChevronDownIcon
                      className={`w-5 h-5 ${isOpen ? 'text-teal-600' : 'text-slate-400'}`} />

                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="overflow-hidden">

                      <div className="px-6 pb-6 pr-20">
                        <p className="text-slate-600 leading-relaxed">
                          {item.answerAr}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-teal-600">
                          <span className="px-3 py-1 rounded-full bg-teal-50">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>);

          })}
        </div>

        {/* Contact CTA with Image */}
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
          className="mt-12">

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-48 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=400&fit=crop"
                  alt="فريق الدعم"
                  className="w-full h-full object-cover"
                  loading="lazy" />

                <div className="absolute inset-0 bg-gradient-to-l from-teal-900/60 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center">
                <MessageCircleIcon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  لم تجد إجابة لسؤالك؟
                </h3>
                <p className="text-slate-600 mb-6">
                  فريقنا جاهز للإجابة على جميع استفساراتك على مدار الساعة
                </p>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold hover:opacity-90 transition-opacity w-fit">
                  تواصل معنا
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}