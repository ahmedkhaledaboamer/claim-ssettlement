'use client';
import React, { useRef } from 'react';
  import { motion, useInView } from 'framer-motion';
import {
  UserIcon,
  BuildingIcon,
  Building2Icon,
  FactoryIcon,
  HomeIcon,
  CpuIcon,
  TrendingUpIcon,
  RocketIcon } from
'lucide-react';
const clientTypes = [
{
  icon: UserIcon,
  title: 'رجال ورواد الأعمال'
},
{
  icon: BuildingIcon,
  title: 'الشركات الصغيرة والمتوسطة'
},
{
  icon: Building2Icon,
  title: 'الشركات الكبرى'
},
{
  icon: FactoryIcon,
  title: 'المشاريع التجارية والصناعية'
},
{
  icon: HomeIcon,
  title: 'المستثمرون العقاريون'
},
{
  icon: CpuIcon,
  title: 'المشاريع التقنية والابتكارية'
},
{
  icon: TrendingUpIcon,
  title: 'الشركات الراغبة في توسع أو إعادة هيكلة'
},
{
  icon: RocketIcon,
  title: 'المشاريع الاستثمارية الجديدة'
}];

export function ClientsSection() {
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
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="relative  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai skyline"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-emerald-900/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 to-emerald-900/80" />
      </div>

      <div
        className="relative z-10 p-[5%]"
        ref={ref}>

        <motion.div
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
            duration: 0.6
          }}
          className="text-center mb-16">

          <h2
            className="font-cairo font-bold text-white mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}>

            من نخدم؟
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">

          {clientTypes.map((client, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -8
            }}
            className="p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-copper-400/50 hover:bg-white/15 transition-all duration-300 text-center group">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-copper-500/20 transition-colors">
                <client.icon className="w-8 h-8 text-copper-400 group-hover:text-copper-300" />
              </div>
              <h3
              className="font-cairo font-bold text-white leading-snug"
              style={{
                fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)'
              }}>

                {client.title}
              </h3>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}