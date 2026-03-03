'use client';
import React, { useRef, useState } from 'react';
  import { motion, useInView } from 'framer-motion';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  SendIcon,
  CheckCircleIcon } from
'lucide-react';
const financingTypes = [
'تمويل تجاري',
'تمويل استثماري',
'تمويل عقاري',
'تمويل شركات',
'تمويل مشاريع صغيرة ومتوسطة',
'تمويل إسلامي',
'تمويل توسع وتطوير',
'تمويل مشاريع جديدة',
'تمويل ابتكار وتقنية',
'تمويل خارجي (FDI)',
'أخرى'];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <section
      id="contact"
      className="  bg-stone-100 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-mesh-light opacity-60 pointer-events-none" />

      <div
        className="p-[5%] relative z-10"
        ref={ref}>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Image & Info Side (Left in RTL -> Right visually) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: -30
            }
            }
            transition={{
              duration: 0.6
            }}
            className="lg:col-span-2 order-2 lg:order-1">

            <div className="mb-10">
              <h2
                className="font-cairo font-bold text-charcoal-900 mb-4"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}>

                تواصل معنا
              </h2>
              <p
                className="font-tajawal text-charcoal-600"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>

                ابدأ الآن رحلتك نحو التمويل المناسب. نحن هنا لنوصلك بالجهة
                الصحيحة… في الوقت الصحيح.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-tajawal text-stone-500 text-sm">الهاتف</p>
                  <p
                    className="font-cairo font-bold text-charcoal-800"
                    dir="ltr">

                    +971 4 XXX XXXX
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-copper-50 flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-6 h-6 text-copper-600" />
                </div>
                <div>
                  <p className="font-tajawal text-stone-500 text-sm">
                    البريد الإلكتروني
                  </p>
                  <p
                    className="font-cairo font-bold text-charcoal-800"
                    dir="ltr">

                    info@kepfinance.ae
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-tajawal text-stone-500 text-sm">الموقع</p>
                  <p className="font-cairo font-bold text-charcoal-800">
                    دبي، الإمارات العربية المتحدة
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-48 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Meeting room"
                className="w-full h-full object-cover" />

            </div>
          </motion.div>

          {/* Form Side (Right in RTL -> Left visually) */}
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
              duration: 0.6,
              delay: 0.2
            }}
            className="lg:col-span-3 order-1 lg:order-2">

            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-stone-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-tajawal font-medium text-charcoal-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-charcoal-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-tajawal"
                    placeholder="أدخل اسمك الكامل" />

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-tajawal font-medium text-charcoal-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-charcoal-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-tajawal"
                      placeholder="example@email.com"
                      dir="ltr" />

                  </div>
                  <div>
                    <label className="block font-tajawal font-medium text-charcoal-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-charcoal-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-tajawal"
                      placeholder="+971 XX XXX XXXX"
                      dir="ltr" />

                  </div>
                </div>

                <div>
                  <label className="block font-tajawal font-medium text-charcoal-700 mb-2">
                    نوع التمويل
                  </label>
                  <select
                    required
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-charcoal-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-tajawal appearance-none cursor-pointer">

                    <option value="" disabled selected>
                      اختر نوع التمويل
                    </option>
                    {financingTypes.map((type, i) =>
                    <option key={i} value={type}>
                        {type}
                      </option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block font-tajawal font-medium text-charcoal-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl text-charcoal-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-tajawal resize-none"
                    placeholder="اكتب رسالتك هنا..." />

                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  disabled={isSubmitted}
                  className="w-full py-4 gradient-copper text-white font-cairo font-bold rounded-xl shadow-lg shadow-copper-500/20 hover:shadow-copper-500/40 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 text-lg">

                  {isSubmitted ?
                  <>
                      <CheckCircleIcon className="w-5 h-5" /> تم الإرسال بنجاح
                    </> :

                  <>
                      ابدأ الآن <SendIcon className="w-5 h-5" />
                    </>
                  }
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}