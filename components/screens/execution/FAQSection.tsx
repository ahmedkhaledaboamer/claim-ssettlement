"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon, HelpCircleIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
import { useTranslations, useLocale } from 'next-intl';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;
const faqAnswerKeys = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'] as const;

export function FAQSection() {
  const t = useTranslations('executionPage.faq');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, controls, variants } = useScrollReveal();
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="px-[5%] py-[2%] bg-gradient-to-br from-cream-100 via-cream-50 to-gold-500/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Content Side */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              className={`mb-14 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex items-center gap-4 mb-5 ${isRTL ? '' : 'flex-row-reverse'}`}>
                <div className="h-px w-16 bg-gold-500" />
                <span className="text-gold-600 font-bold tracking-wider text-xs md:text-sm uppercase">
                  {t('badge')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-navy-900 mb-4">
                {t('title')}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('lead')}
              </p>
            </motion.div>

            <div className="space-y-4 md:space-y-5">
              {faqKeys.map((qKey, index) => (
              <motion.div
                key={qKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-xl shadow-gold-500/10' : 'bg-white/70 shadow-lg hover:shadow-xl'} ${isRTL ? 'border-r-4' : 'border-l-4'} ${openIndex === index ? 'border-gold-500' : 'border-transparent'}`}
              >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center justify-between p-6 cursor-pointer ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        <HelpCircleIcon className="w-5 h-5" />
                      </div>
                      <span
                        className={`font-tajawal font-bold text-lg transition-colors text-start ${openIndex === index ? 'text-gold-600' : 'text-navy-900'}`}
                      >
                        {t(qKey)}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-gold-100 text-gold-600' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {openIndex === index ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 pb-6 ${isRTL ? 'pr-20' : 'pl-20'}`}>
                          <p className="text-gray-600 leading-relaxed text-start">
                            {t(faqAnswerKeys[index])}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:w-1/3 hidden lg:block sticky top-32">

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-teal-500/20 rounded-3xl blur-xl" />
              <img
                src="/imgs/A mergers and acquisitions con/image_32.webp"
                alt="FAQ Support"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl shadow-navy-900/20 w-full h-auto min-h-[280px] object-cover" />

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <HelpCircleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-tajawal font-bold text-navy-900">
                      {t('support')}
                    </p>
                    <p className="text-sm text-gold-500">24/7</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}