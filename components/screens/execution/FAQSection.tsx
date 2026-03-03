"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon, HelpCircleIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollRevealSec';
const faqs = [
{
  question: 'ما هو المسار التنفيذي؟',
  answer:
  'المسار التنفيذي هو منهجية مؤسسية متكاملة تتكون من 40 مرحلة دقيقة، تضمن انتقال ملفك التمويلي عبر مسار مدروس يُبنى على بيانات دقيقة، وتقييم صارم، وتخطيط محكم، وتفاوض محسوب، وإغلاق لا يترك مجالًا للخطأ.'
},
{
  question: 'كم تستغرق عملية التمويل؟',
  answer:
  'تعتمد مدة عملية التمويل على نوع التمويل وحجمه ومدى اكتمال المستندات المطلوبة. عادةً ما تتراوح المدة بين 2-6 أسابيع للتمويل الشخصي، و4-12 أسبوعًا للتمويل التجاري والعقاري. نحرص على تسريع العملية مع الحفاظ على أعلى معايير الجودة.'
},
{
  question: 'هل خدماتكم متاحة لجميع القطاعات؟',
  answer:
  'نعم، نخدم جميع القطاعات الاقتصادية بما في ذلك القطاع التجاري، الصناعي، العقاري، الخدمي، والتقني. لدينا خبرة واسعة في التعامل مع متطلبات كل قطاع وفهم احتياجاته التمويلية الخاصة.'
},
{
  question: 'ما هي المستندات المطلوبة؟',
  answer:
  'تختلف المستندات حسب نوع التمويل، لكنها تشمل عادةً: السجل التجاري، القوائم المالية، كشوف الحسابات البنكية، عقود الإيجار أو الملكية، والهوية الوطنية. سيقوم فريقنا بإرشادك لجميع المتطلبات بشكل تفصيلي.'
},
{
  question: 'هل تقدمون خدمات ما بعد التمويل؟',
  answer:
  'نعم، نوفر متابعة مستمرة حتى بعد صرف التمويل. تشمل خدماتنا: مراقبة الالتزامات، تقديم التوصيات لتحسين التدفقات النقدية، دعم إعادة الهيكلة عند الحاجة، والاستشارات المالية المستمرة لضمان استقرار عملك.'
},
{
  question: 'كيف تضمنون سرية المعلومات؟',
  answer:
  'نطبق أعلى معايير الأمان والسرية من خلال: بروتوكولات تشفير متقدمة، ضبط صارم للوصول إلى المعلومات، اتفاقيات سرية ملزمة، وأنظمة حماية بيانات معتمدة. خصوصية عملائنا أولوية قصوى لدينا.'
}];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, controls, variants } = useScrollReveal();
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-28 md:py-36 bg-gradient-to-br from-cream-100 via-cream-50 to-gold-500/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Content Side */}
          <div className="lg:w-2/3">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="mb-14">

              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-16 bg-gold-500" />
                <span className="text-gold-600 font-bold tracking-wider text-xs md:text-sm uppercase">
                  نجيب على تساؤلاتك
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-tajawal font-bold text-navy-900 mb-4">
                الأسئلة الشائعة
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                إجابات شاملة على أكثر الأسئلة التي يطرحها عملاؤنا
              </p>
            </motion.div>

            <div className="space-y-4 md:space-y-5">
              {faqs.map((faq, index) =>
              <motion.div
                key={index}
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
                  delay: index * 0.1
                }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-xl shadow-gold-500/10 border-r-4 border-gold-500' : 'bg-white/70 shadow-lg hover:shadow-xl border-r-4 border-transparent'}`}>

                  <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-right">

                    <div className="flex items-center gap-4">
                      <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-600'}`}>

                        <HelpCircleIcon className="w-5 h-5" />
                      </div>
                      <span
                      className={`font-tajawal font-bold text-lg transition-colors ${openIndex === index ? 'text-gold-600' : 'text-navy-900'}`}>

                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-gold-100 text-gold-600' : 'bg-gray-100 text-gray-500'}`}>

                      {openIndex === index ?
                    <MinusIcon className="w-4 h-4" /> :

                    <PlusIcon className="w-4 h-4" />
                    }
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index &&
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
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </motion.div>
              )}
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
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
                alt="FAQ Support"
                className="relative rounded-3xl shadow-2xl shadow-navy-900/20 w-full h-auto object-cover" />

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
                      دعم متواصل
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