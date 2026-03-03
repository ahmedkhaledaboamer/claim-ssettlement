'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export function PromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section className="relative  overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=80"
          alt="Sunrise Dubai"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-copper-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent" />
      </div>

      <div
        className="relative z-10 p-[5%] text-center"
        ref={ref}>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            scale: 1
          } :
          {
            opacity: 0,
            scale: 0.5
          }
          }
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-8">

          <span className="font-cairo text-copper-400 text-8xl leading-none opacity-80">
            "
          </span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {
            opacity: 0,
            y: 30
          }
          }
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>

          <h2
            className="font-cairo font-bold text-white mb-8 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)'
            }}>

            نلتزم بأن نكون الشريك الذي يفتح لك أبواب التمويل،{' '}
            <span className="text-copper-400">ويعزّز قوتك المالية</span>، ويمنحك
            حلولًا تدعم نموك وتوسعك بثبات.
          </h2>
          <p
            className="font-tajawal text-stone-300 tracking-widest uppercase"
            style={{
              fontSize: 'clamp(0.875rem, 1vw, 1rem)'
            }}>

            وعدنا لك
          </p>
        </motion.div>
      </div>
    </section>);

}