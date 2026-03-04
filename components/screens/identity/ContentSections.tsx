'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  CheckCircle2,
  Eye,
  Shield,
  FileText,
  Handshake,
  BarChart3,
  TrendingUp,
  Search,
  Activity,
  AlertTriangle,
  Zap,
  Lock,
  Award,
  Star,
  X,
  Sparkles } from
'lucide-react';
import { ContentSection as ContentSectionType } from '@/data/contentData';
import Image from 'next/image';
interface ContentSectionsProps {
  sections: ContentSectionType[];
}
const images = {
  intro: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
  introStrip1:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
  introStrip2:
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400',
  introStrip3:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
  introExtra1:
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400',
  introExtra2:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  identity:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  identityExtra:
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600',
  philosophy:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  missionBg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200',
  missionImages: [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600'],

  visionThumbs: [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'],

  principlesImages: [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400'],

  readingBg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
  building: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
  buildingSide:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
  partners:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
  partnersBg: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
  clients: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
  adminBg:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
  resultsBg:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
  resultsLeft:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
};
// Enhanced animation variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};
const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};
const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7
    }
  }
};
const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7
    }
  }
};
const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
const staggerFast = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};
export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section) => {
        switch (section.id) {
          case 'intro':
            return <IntroSection key={section.id} data={section} />;
          case 'identity':
            return <IdentitySection key={section.id} data={section} />;
          case 'philosophy':
            return <PhilosophySection key={section.id} data={section} />;
          case 'mission':
            return <MissionSection key={section.id} data={section} />;
          case 'vision':
            return <VisionSection key={section.id} data={section} />;
          case 'principles':
            return <PrinciplesSection key={section.id} data={section} />;
          case 'reading':
            return <ReadingSection key={section.id} data={section} />;
          case 'building':
            return <BuildingSection key={section.id} data={section} />;
          case 'partners':
            return <PartnersSection key={section.id} data={section} />;
          case 'clients':
            return <ClientsSection key={section.id} data={section} />;
          case 'admin':
            return <AdminSection key={section.id} data={section} />;
          case 'results':
            return <ResultsSection key={section.id} data={section} />;
          default:
            return null;
        }
      })}
    </div>);

}
// === Image Lightbox ===
function ImageLightbox({
  src,
  alt,
  onClose




}: {src: string;alt: string;onClose: () => void;}) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.85
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="relative  w-full   z-10">

          <button
            onClick={onClose}
            className="absolute -top-12 left-0 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
            aria-label="إغلاق">

            <X className="w-6 h-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.5)]" />

        </motion.div>
      </div>
    </AnimatePresence>);

}
// 1. Intro
function IntroSection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="intro" className="relative p-[5%] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={images.intro} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 backdrop-blur-sm bg-kep-text/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-kep-text via-transparent to-kep-text/50" />
      </div>
      <div className=" mx-auto  relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-80px'
          }}
          variants={staggerContainer}>

          <motion.div
            variants={fadeInDown}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-kep-gold/20 border border-kep-gold/30 backdrop-blur-md mb-8 shadow-[0_4px_20px_rgba(197,160,40,0.2)]">

            <Sparkles className="w-4 h-4 text-kep-gold" />
            <span className="text-kep-gold font-heading font-bold text-sm tracking-wider">
              كيه إي بي
            </span>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-xl md:text-2xl text-gray-200 font-body leading-relaxed   mb-16">

            {data.content.map((p, i) =>
            <p key={i}>{p}</p>
            )}
          </motion.div>
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4  ">

            {[
            images.introStrip1,
            images.introStrip2,
            images.introStrip3,
            images.introExtra1,
            images.introExtra2].
            map((src, i) =>
            <motion.div
              key={i}
              variants={scaleIn}
              className="rounded-2xl overflow-hidden border border-kep-gold/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)] aspect-video group">

                <img
                src={src}
                alt=""
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />

              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
// 2. Identity
function IdentitySection({ data }: {data: ContentSectionType;}) {
  return (
    <section
      id="identity-section"
      className="p-[5%] relative overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img
          src={images.identity}
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 backdrop-blur-xl bg-kep-bg2/85" />
      </div>
      <div className=" relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeInRight}>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)] h-[380px] md:h-[480px]">
                <img
                  src={images.identity}
                  alt="Modern Office"
                  className="w-full h-full object-cover" />

              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -5
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 200
                }}
                className="absolute -bottom-8 -left-6 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)] border-4 border-white">

                <img
                  src={images.identityExtra}
                  alt=""
                  className="w-full h-full object-cover" />

              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeInLeft}>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-8">
              {data.title}
            </h2>
            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2,
                duration: 0.6
              }}
              className="space-y-6 border-r-4 border-kep-gold pr-8 bg-white/70 backdrop-blur-md p-8 rounded-l-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

              <Quote className="w-12 h-12 text-kep-gold/25 rotate-180" />
              {data.content.map((p, i) =>
              <p
                key={i}
                className="text-xl md:text-2xl font-semibold text-kep-text leading-relaxed">

                  &quot;{p}&quot;
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
// 3. Philosophy
function PhilosophySection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="philosophy" className="p-[5%] bg-white">
      <div className=" ">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-8">

              {data.title}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-xl md:text-2xl text-kep-muted font-body leading-relaxed mb-10">

              {data.content.map((p, i) =>
              <p key={i}>{p}</p>
              )}
            </motion.div>
            {data.bullets &&
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className="space-y-5">

                {data.bullets.map((b, i) =>
              <motion.li
                key={i}
                variants={fadeInUp}
                whileHover={{
                  x: -5
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300
                }}
                className="flex items-center gap-4 bg-kep-bg1 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">

                    <div className="w-12 h-12 rounded-full bg-kep-gold/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-kep-gold" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-kep-text">
                      {b}
                    </span>
                  </motion.li>
              )}
              </motion.ul>
            }
            {data.conclusion &&
            <motion.p
              variants={fadeInUp}
              className="mt-10 text-xl md:text-2xl font-heading font-bold text-kep-gold">

                {data.conclusion}
              </motion.p>
            }
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={scaleIn}>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.14)] h-[400px] md:h-[520px]">
              <Image
                src={images.philosophy}
                alt="Financial Analysis"
                width={1000}
                height={1000}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-kep-gold/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
// 4. Mission — Blurred background
function MissionSection({ data }: {data: ContentSectionType;}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const icons = [
  <Eye key="eye" />,
  <FileText key="fileText" />,
  <Handshake key="handshake" />,
  <Zap key="zap" />,
  <Award key="award" />,
  <Shield key="shield" />];

  return (
    <section id="mission" className="p-[5%] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          width={1000}
          height={1000}
          src={images.missionBg}
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 backdrop-blur-xl bg-kep-bg3/80" />
      </div>
      <div className="    relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInDown}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed  ">
            {data.content[0]}
          </p>
        </motion.div>
        {data.bullets &&
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}>

            {data.bullets.map((b, i) =>
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{
              y: -8,
              transition: {
                type: 'spring',
                stiffness: 300
              }
            }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition-shadow duration-400 overflow-hidden group cursor-pointer border border-white/60"
            onClick={() =>
            setLightboxImg(
              images.missionImages[i % images.missionImages.length]
            )
            }>

                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                src={images.missionImages[i % images.missionImages.length]}
                alt={b}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-kep-gold shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                    {icons[i % icons.length]}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-kep-gold shadow-sm">
                    اضغط للتكبير
                  </div>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-kep-text font-heading">
                    {b}
                  </h3>
                </div>
              </motion.div>
          )}
          </motion.div>
        }
        {data.conclusion &&
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
          transition={{
            delay: 0.3
          }}
          className="mt-16 text-center">

            <span className="inline-block px-10 py-5 bg-kep-gold text-white font-bold rounded-full shadow-[0_10px_35px_rgba(197,160,40,0.4)] text-xl md:text-2xl font-heading">
              {data.conclusion}
            </span>
          </motion.div>
        }
      </div>
      {lightboxImg &&
      <ImageLightbox
        src={lightboxImg}
        alt="Mission detail"
        onClose={() => setLightboxImg(null)} />

      }
    </section>);

}
// 5. Vision — Centered grid
function VisionSection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="vision" className="p-[5%] bg-white overflow-hidden">
      <div className=" ">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInUp}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed  ">
            {data.content[0]}
          </p>
        </motion.div>
        {data.bullets &&
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}>

            {data.bullets.map((b, i) =>
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{
              y: -6,
              transition: {
                type: 'spring',
                stiffness: 300
              }
            }}
            className="bg-white p-6 rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)] border border-gray-100 transition-shadow duration-300 group">

                <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                  <Image
                    width={1000}
                    height={1000}
                src={images.visionThumbs[i % images.visionThumbs.length]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-kep-gold/10 mix-blend-multiply" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-kep-gold/10 flex items-center justify-center shadow-[0_2px_8px_rgba(197,160,40,0.15)]">
                    <Eye className="w-5 h-5 text-kep-gold" />
                  </div>
                  <span className="text-sm font-bold text-kep-gold font-heading tracking-wider">
                    رؤيتنا
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-kep-text font-heading">
                  {b}
                </h3>
              </motion.div>
          )}
          </motion.div>
        }
        {data.conclusion &&
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInUp}
          className="mt-16 text-center">

            <p className="text-xl md:text-2xl font-heading font-bold text-kep-gold">
              {data.conclusion}
            </p>
          </motion.div>
        }
      </div>
    </section>);

}
// 6. Principles — Timeline with images
function PrinciplesSection({ data }: {data: ContentSectionType;}) {
  return (
    <section
      id="principles"
      className="p-[5%] bg-kep-bg4 relative overflow-hidden">

      <div className="  relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInDown}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed">
            {data.content[0]}
          </p>
        </motion.div>
        {data.bullets &&
        <div className="relative  ">
            <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-kep-gold/20 transform translate-x-1/2 hidden md:block" />
            <div className="space-y-16">
              {data.bullets.map((b, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 40,
                    x: isEven ? 40 : -40
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut'
                  }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                    <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
                      <div
                      className={`bg-white p-0 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 w-full  relative overflow-hidden ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>

                        <div
                        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-kep-gold rounded-full hidden md:block ring-4 ring-kep-bg4 z-20 shadow-[0_2px_8px_rgba(197,160,40,0.4)]"
                        style={{
                          [isEven ? 'right' : 'left']: '-2.75rem'
                        }} />

                        <div className="h-40 md:h-48 w-full overflow-hidden relative">
                          <Image
                            width={1000}
                            height={1000}
                          src={
                          images.principlesImages[
                          i % images.principlesImages.length]

                          }
                          alt=""
                          className="w-full h-full object-cover" />

                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-kep-gold text-white flex items-center justify-center font-bold text-lg shadow-[0_4px_16px_rgba(197,160,40,0.4)]">
                            {i + 1}
                          </div>
                        </div>
                        <div className="p-6 md:p-8">
                          <h3 className="text-xl md:text-2xl font-bold text-kep-text font-heading">
                            {b}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </motion.div>);

            })}
            </div>
          </div>
        }
      </div>
    </section>);

}
// 7. Reading — Circular connected nodes
function ReadingSection({ data }: {data: ContentSectionType;}) {
  const readingIcons = [
  <TrendingUp key="trendingUp" className="w-7 h-7" />,
  <FileText key="fileText" className="w-7 h-7" />,
  <Activity key="activity" className="w-7 h-7" />,
  <AlertTriangle key="alertTriangle" className="w-7 h-7" />,
  <Shield key="shield" className="w-7 h-7" />,
  <Search key="search" className="w-7 h-7" />,
  <Star key="star" className="w-7 h-7" />,
  <Zap key="zap" className="w-7 h-7" />,
  <Lock key="lock" className="w-7 h-7" />];

  const nodeColors = [
  {
    bg: '#046307',
    light: '#06890A15'
  },
  {
    bg: '#0F52BA',
    light: '#0F52BA15'
  },
  {
    bg: '#9966CC',
    light: '#9966CC15'
  },
  {
    bg: '#FFBF00',
    light: '#FFBF0015'
  },
  {
    bg: '#2E7D32',
    light: '#2E7D3215'
  },
  {
    bg: '#4682B4',
    light: '#4682B415'
  },
  {
    bg: '#FF6B6B',
    light: '#FF6B6B15'
  },
  {
    bg: '#C5A028',
    light: '#C5A02815'
  },
  {
    bg: '#E05555',
    light: '#E0555515'
  }];

  return (
    <section id="reading" className="p-[5%] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          width={1000}
          height={1000}
          src={images.readingBg}
          alt=""
          className="w-full h-full object-cover opacity-10" />

        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
      </div>
      <div className="  relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInUp}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed  ">
            {data.content[0]}
          </p>
        </motion.div>
        {data.bullets &&
        <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-kep-gold/25 -translate-y-1/2 z-0" />
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 py-8">
              {data.bullets.map((b, i) => {
              const color = nodeColors[i % nodeColors.length];
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -10
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: i * 0.08,
                    type: 'spring',
                    stiffness: 180,
                    damping: 15
                  }}
                  className="flex flex-col items-center gap-4 relative z-10">

                    <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300
                    }}
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-[0_10px_32px_rgba(0,0,0,0.1)] border-4 flex items-center justify-center"
                    style={{
                      borderColor: `${color.bg}40`
                    }}>

                      <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: color.light,
                        color: color.bg
                      }}>

                        {readingIcons[i % readingIcons.length]}
                      </div>
                    </motion.div>
                    <span className="text-lg md:text-xl font-bold text-kep-text font-heading text-center max-w-[140px]">
                      {b}
                    </span>
                  </motion.div>);

            })}
            </div>
          </div>
        }
        {data.conclusion &&
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="mt-16 p-8 md:p-10 bg-kep-text rounded-3xl text-center shadow-[0_20px_55px_rgba(0,0,0,0.18)]">

            <p className="text-xl md:text-2xl font-heading font-bold text-white">
              {data.conclusion}
            </p>
          </motion.div>
        }
      </div>
    </section>);

}
// 8. Building
function BuildingSection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="building" className="p-[5%] bg-kep-bg5">
      <div className=" ">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          <motion.div
            className="w-full lg:w-5/12"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeInRight}>

            <div className="lg:sticky lg:top-28">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-8 leading-tight">
                {data.title}
              </h2>
              <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed mb-10">
                {data.content[0]}
              </p>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.2
                }}
                className="rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.1)] h-48 md:h-64 mb-8">

                <Image
                  width={1000}
                  height={1000}
                  src={images.buildingSide}
                  alt=""
                  className="w-full h-full object-cover" />

              </motion.div>
              {data.conclusion &&
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.3
                }}
                className="p-6 md:p-8 bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.07)] border-r-4 border-kep-gold">

                  <p className="text-xl font-bold text-kep-text font-heading">
                    {data.conclusion}
                  </p>
                </motion.div>
              }
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}>

            <motion.div
              variants={scaleIn}
              className="mb-8 rounded-3xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.12)] h-72 md:h-96">

              <Image
                width={1000}
                height={1000}
                src={images.building}
                alt=""
                className="w-full h-full object-cover" />

            </motion.div>
            {data.bullets &&
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.bullets.map((b, i) =>
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  transition: {
                    type: 'spring',
                    stiffness: 300
                  }
                }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] border border-gray-50 flex gap-4 items-start transition-shadow duration-300">

                    <span className="text-kep-gold font-bold text-2xl font-heading leading-none mt-1">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-kep-text font-heading">
                      {b}
                    </h3>
                  </motion.div>
              )}
              </div>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}
// 9. Partners
function PartnersSection({ data }: {data: ContentSectionType;}) {
  return (
    <section
      id="partners"
      className="p-[5%] bg-white relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <img
          src={images.partnersBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]" />

      </div>
      <div className="  relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <motion.div
            className="w-full lg:w-5/12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={scaleIn}>

            <img
              src={images.partners}
              alt="Handshake"
              className="rounded-full w-full  aspect-square object-cover shadow-[0_24px_60px_rgba(0,0,0,0.14)] border-8 border-kep-bg1" />

          </motion.div>
          <motion.div
            className="w-full lg:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-8">

              {data.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed mb-10">

              {data.content[0]}
            </motion.p>
            {data.bullets &&
            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className="flex flex-wrap gap-4 md:gap-5 mb-10">

                {data.bullets.map((b, i) =>
              <motion.span
                key={i}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                className="px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] font-bold text-kep-text flex items-center gap-3 text-lg transition-shadow duration-300 cursor-default">

                    <Shield className="w-5 h-5 text-kep-gold" />
                    {b}
                  </motion.span>
              )}
              </motion.div>
            }
            {data.conclusion &&
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-heading font-bold text-kep-gold">

                {data.conclusion}
              </motion.p>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}
// 10. Clients
function ClientsSection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="clients" className="p-[5%] bg-kep-bg6">
      <div className=" ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={scaleIn}
          className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row">

          <motion.div
            className="w-full md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-8">

              {data.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed mb-10">

              {data.content[0]}
            </motion.p>
            {data.bullets &&
            <motion.ul
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className="space-y-5 mb-10">

                {data.bullets.map((b, i) =>
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-4 text-kep-text font-semibold text-lg md:text-xl">

                    <div className="w-3 h-3 rounded-full bg-kep-gold flex-shrink-0 shadow-[0_0_8px_rgba(197,160,40,0.4)]" />
                    {b}
                  </motion.li>
              )}
              </motion.ul>
            }
            {data.conclusion &&
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-bold text-kep-gold italic font-heading">

                &quot;{data.conclusion}&quot;
              </motion.p>
            }
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 h-72 md:h-auto relative"
            initial={{
              opacity: 0,
              scale: 1.05
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}>

            <Image
              width={1000}
              height={1000}
              src={images.clients}
              alt="Client Meeting"
              className="w-full h-full object-cover" />

          </motion.div>
        </motion.div>
      </div>
    </section>);

}
// 11. Admin — Process flow
function AdminSection({ data }: {data: ContentSectionType;}) {
  return (
    <section id="admin" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          width={1000}
          height={1000}
          src={images.adminBg}
          alt=""
          className="w-full h-full object-cover opacity-15" />

        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
      </div>
      <div className="  text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInDown}
          className="mb-16 md:mb-20">

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kep-text mb-6">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-kep-muted font-body leading-relaxed  ">
            {data.content[0]}
          </p>
        </motion.div>
        {data.bullets &&
        <div className="relative flex flex-wrap justify-center gap-8 md:gap-12 py-8">
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed border-kep-gold/30 -translate-y-1/2 z-0" />
            {data.bullets.map((b, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1,
              type: 'spring',
              stiffness: 200
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: 'spring',
                stiffness: 300
              }
            }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white shadow-[0_10px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] border-4 border-kep-bg1 flex flex-col items-center justify-center text-center p-5 hover:border-kep-gold transition-all duration-300 relative z-10">

                <span className="text-sm font-bold text-kep-gold mb-2">
                  0{i + 1}
                </span>
                <span className="font-bold text-kep-text font-heading text-base md:text-lg">
                  {b}
                </span>
              </motion.div>
          )}
          </div>
        }
        {data.conclusion &&
        <motion.p
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
            delay: 0.3
          }}
          className="mt-16 text-xl md:text-2xl font-bold text-kep-muted font-heading">

            {data.conclusion}
          </motion.p>
        }
      </div>
    </section>);

}
// 12. Results — Blurred background
function ResultsSection({ data }: {data: ContentSectionType;}) {
  const progressWidths = ['92%', '85%', '98%', '88%', '95%'];
  return (
    <section id="results" className="p-[5%] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          width={1000}
          height={1000}
          src={images.resultsBg}
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 backdrop-blur-xl bg-kep-text/80" />
      </div>
      <div className="  relative z-10 text-white">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          variants={fadeInDown}>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-body leading-relaxed  ">
            {data.content[0]}
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={scaleIn}>

            <div className="rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.35)] h-[400px] md:h-[520px]">
              <Image
                width={1000}
                height={1000}
                src={images.resultsLeft}
                alt="Dashboard Metrics"
                className="w-full h-full object-cover" />

            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}>

            {data.bullets &&
            data.bullets.map((b, i) =>
            <motion.div
              key={i}
              variants={fadeInLeft}
              whileHover={{
                x: -6,
                transition: {
                  type: 'spring',
                  stiffness: 300
                }
              }}
              className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/15 flex flex-col shadow-[0_6px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-shadow duration-300">

                  <div className="flex items-center gap-4 mb-4">
                    <BarChart3 className="w-7 h-7 text-kep-gold" />
                    <h3 className="text-xl md:text-2xl font-bold font-heading">
                      {b}
                    </h3>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                  initial={{
                    width: 0
                  }}
                  whileInView={{
                    width: progressWidths[i % progressWidths.length]
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + i * 0.15,
                    ease: 'easeOut'
                  }}
                  className="h-full bg-kep-gold rounded-full shadow-[0_0_12px_rgba(197,160,40,0.4)]" />

                  </div>
                </motion.div>
            )}
            {data.conclusion &&
            <motion.div
              variants={fadeInUp}
              className="mt-6 p-6 md:p-8 bg-kep-gold/15 backdrop-blur-md rounded-2xl border border-kep-gold/30 text-center shadow-[0_6px_24px_rgba(197,160,40,0.15)]">

                <p className="text-xl md:text-2xl font-bold text-kep-goldLight font-heading">
                  {data.conclusion}
                </p>
              </motion.div>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}