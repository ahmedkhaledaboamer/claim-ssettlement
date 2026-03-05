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
import Link from 'next/link';
import Image from 'next/image';
export function FAQSection({ locale }: { locale: string }) {
  const isRTL = locale === 'ar';
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = [
    ...new Set(
      faqItems.map((item) =>
        locale === 'ar'
          ? item.category
          : locale === 'fr'
          ? item.categoryFr
          : item.categoryEn
      )
    )
  ];
  const headingTitle =
    locale === 'ar'
      ? { main: 'الأسئلة', highlight: ' الشائعة' }
      : locale === 'fr'
      ? { main: 'Questions', highlight: ' fréquentes' }
      : { main: 'Frequently', highlight: ' asked questions' };

  const headingDescription =
    locale === 'ar'
      ? 'إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وآلية عملنا'
      : locale === 'fr'
      ? 'Des réponses aux questions les plus fréquentes sur nos services et notre façon de travailler.'
      : 'Answers to the most common questions about our services and how we work.';
  return (
    <section id="faq" className="relative p-[5%] overflow-hidden bg-white">
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

          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-slate-100 text-fluid-body text-slate-600"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const question =
              locale === 'ar'
                ? item.questionAr
                : locale === 'fr'
                ? item.questionFr
                : item.questionEn;
            const answer =
              locale === 'ar'
                ? item.answerAr
                : locale === 'fr'
                ? item.answerFr
                : item.answerEn;
            const categoryLabel =
              locale === 'ar'
                ? item.category
                : locale === 'fr'
                ? item.categoryFr
                : item.categoryEn;
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
                className="cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cursor-pointer w-full flex items-center gap-4 p-6 text-right hover:bg-slate-50 transition-colors">

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isOpen ? 'bg-teal-50' : 'bg-slate-100'}`}>

                    <HelpCircleIcon
                      className={`w-5 h-5 ${isOpen ? 'text-teal-600' : 'text-slate-400'}`} />

                  </div>
                  <span
                    className={`${!isRTL ? 'text-left' : 'text-right'} flex-1 font-bold text-fluid-body-lg transition-colors duration-300 ${isOpen ? 'text-teal-600' : 'text-slate-900'}`}>

                    {question}
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
                        <p className="text-fluid-body text-slate-600 leading-relaxed">
                          {answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-fluid-body text-teal-600">
                          <span className="px-3 py-1 rounded-full bg-teal-50">
                            {categoryLabel}
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
              <div className="relative h-56 md:h-72 xl:h-94  2xl:h-120 ">
                <Image
                  src="/imgs/A refined executive reception/image_78.webp"
                  alt="فريق الدعم"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  />

                <div className="absolute inset-0 bg-gradient-to-l from-teal-900/60 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center items-center">
                <MessageCircleIcon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-fluid-body-lg font-bold text-slate-900 mb-2">
                  {locale === 'ar'
                    ? 'لم تجد إجابة لسؤالك؟'
                    : locale === 'fr'
                    ? 'Vous n’avez pas trouvé de réponse à votre question ?'
                    : 'Didn’t find an answer to your question?'}
                </h3>
                <p className="text-fluid-body text-slate-600 mb-6">
                  {locale === 'ar'
                    ? 'فريقنا جاهز للإجابة على جميع استفساراتك على مدار الساعة'
                    : locale === 'fr'
                    ? 'Notre équipe est prête à répondre à toutes vos questions à tout moment.'
                    : 'Our team is ready to answer all your questions around the clock.'}
                </p>
                <Link href="/execution" className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold text-fluid-body hover:opacity-90 transition-opacity w-fit">
                  {locale === 'ar'
                    ? 'تواصل معنا'
                    : locale === 'fr'
                    ? 'Contactez‑nous'
                    : 'Contact us'}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}