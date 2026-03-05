import React from 'react';
import {
  Users,
  TrendingUp,
  ShieldCheck,
  FileText,
  Building } from
'lucide-react';
import { motion } from 'framer-motion';
export function OrganizationalChart() {
  return (
    <section className="p-[5%] bg-white relative overflow-hidden border-y border-gray-100">
      <div className="absolute inset-0 bg-[url('/imgs/A backbone identity scene insi/image_76.webp')] opacity-[0.03] mix-blend-multiply" />

      <div className="  relative z-10">
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
          className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-KIB-text mb-6">
            الهيكل <span className="text-KIB-gold">التنظيمي</span>
          </h2>
          <p className="text-lg md:text-xl text-KIB-muted font-body leading-relaxed">
            هيكل إداري متين يضمن انسيابية العمل ودقة الإنجاز
          </p>
        </motion.div>

        {/* CSS-based Tree Structure */}
        <div className="flex flex-col items-center">
          {/* CEO Level */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="relative mb-12">

            <div className="bg-white border-2 border-KIB-gold p-6 md:p-8 rounded-2xl w-72 text-center shadow-card-elevated relative z-10">
              <Building className="w-8 h-8 text-KIB-gold mx-auto mb-3" />
              <h3 className="text-xl font-heading font-bold text-KIB-text mb-2">
                الإدارة التنفيذية
              </h3>
              <p className="text-base text-KIB-muted font-body font-bold">
                القيادة والاستراتيجية
              </p>
            </div>
            {/* Vertical Line down from CEO */}
            <div className="absolute left-1/2 bottom-[-3rem] w-0.5 h-12 bg-KIB-gold/40 -translate-x-1/2" />
          </motion.div>

          {/* Horizontal Connector */}
          <div className="w-full   h-0.5 bg-KIB-gold/30 relative mb-12 hidden md:block">
            {/* Vertical lines down to departments */}
            <div className="absolute left-[12.5%] top-0 w-0.5 h-12 bg-KIB-gold/30" />
            <div className="absolute left-[37.5%] top-0 w-0.5 h-12 bg-KIB-gold/30" />
            <div className="absolute left-[62.5%] top-0 w-0.5 h-12 bg-KIB-gold/30" />
            <div className="absolute left-[87.5%] top-0 w-0.5 h-12 bg-KIB-gold/30" />
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full  ">
            <DeptNode
              icon={<TrendingUp />}
              title="التحليل والمخاطر"
              color="#046307"
              delay={0.1} />

            <DeptNode
              icon={<Users />}
              title="علاقات البنوك"
              color="#0F52BA"
              delay={0.2} />

            <DeptNode
              icon={<FileText />}
              title="إدارة الملفات والعمليات"
              color="#9966CC"
              delay={0.3} />

            <DeptNode
              icon={<ShieldCheck />}
              title="الامتثال وخدمات العملاء"
              color="#2E7D32"
              delay={0.4} />

          </div>
        </div>
      </div>
    </section>);

}
function DeptNode({
  icon,
  title,
  color,
  delay





}: {icon: React.ReactNode;title: string;color: string;delay: number;}) {
  return (
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
      transition={{
        delay
      }}
      className="relative flex flex-col items-center">

      {/* Mobile connector line */}
      <div className="w-0.5 h-8 bg-KIB-gold/30 md:hidden mb-4" />

      <div
        className="bg-white border p-6 md:p-8 rounded-xl w-full text-center hover:-translate-y-2 transition-transform duration-300 shadow-card-light min-h-[160px] flex flex-col justify-center"
        style={{
          borderColor: `${color}30`
        }}>

        <div
          className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: `${color}15`,
            color: color
          }}>

          {icon}
        </div>
        <h4 className="text-lg font-heading font-bold text-KIB-text mb-3">
          {title}
        </h4>
        <div
          className="w-8 h-1.5 mx-auto rounded-full mt-auto"
          style={{
            backgroundColor: color
          }} />

      </div>
    </motion.div>);

}