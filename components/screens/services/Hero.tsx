'use client';
import { motion } from 'framer-motion';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TrendingUpIcon } from
'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-lines opacity-30" />

      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover" />

        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover" />

        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/90 to-[#0A1628]" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-[clamp(200px,30vw,400px)] h-[clamp(200px,30vw,400px)] rounded-full bg-[#D4AF37]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }} />

      <motion.div
        className="absolute bottom-20 left-20 w-[clamp(150px,25vw,300px)] h-[clamp(150px,25vw,300px)] rounded-full bg-[#0D9488]/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2
        }} />


      <div className="relative z-10 w-full p-[5%] py-[clamp(80px,12vh,160px)]">
        <div className="grid lg:grid-cols-2 gap-[clamp(32px,6vw,80px)] items-center">
          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}>

              <ShieldCheckIcon className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-fluid-sm text-[#D4AF37] font-medium">
                شريكك المالي الموثوق
              </span>
            </motion.div>

            <h1 className="font-heading font-black text-fluid-5xl text-white leading-[1.1] mb-6">
            حلول تمويلية
            متكاملة لنجاحك
            </h1>

            <p className="text-fluid-lg text-white/70 leading-relaxed mb-8  ">
              نقدم لك أكثر من 30 خدمة تمويلية متخصصة تغطي جميع احتياجاتك
              المالية. من تمويل الشركات إلى المشاريع الصناعية، نحن هنا لدعم نموك
              وتوسعك.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}>

                <div className="text-fluid-3xl font-heading font-bold text-[#D4AF37]">
                  +500
                </div>
                <div className="text-fluid-sm text-white/60">عميل راضٍ</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}>

                <div className="text-fluid-3xl font-heading font-bold text-[#0D9488]">
                  30+
                </div>
                <div className="text-fluid-sm text-white/60">خدمة تمويلية</div>
              </motion.div>
              <motion.div
                className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}>

                <div className="text-fluid-3xl font-heading font-bold text-white">
                  15+
                </div>
                <div className="text-fluid-sm text-white/60">سنة خبرة</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-[#D4AF37] text-[#0A1628] font-heading font-bold text-fluid-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}>

                ابدأ الآن
              </motion.button>
              <motion.button
                className="bg-white/10 text-white font-heading font-medium text-fluid-base px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}>

                تواصل معنا
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}>

            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
                  alt="خدمات مالية احترافية"
                  className="w-full h-[clamp(400px,50vh,600px)] object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                    <TrendingUpIcon className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <div className="text-fluid-sm font-bold text-[#0A1628]">
                      نمو مستمر
                    </div>
                    <div className="text-fluid-xs text-[#64748B]">
                      +45% هذا العام
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1
                }}>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-fluid-sm font-bold text-[#0A1628]">
                      موافقة سريعة
                    </div>
                    <div className="text-fluid-xs text-[#64748B]">
                      خلال 48 ساعة
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}>

          <ArrowDownIcon className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </section>);

}