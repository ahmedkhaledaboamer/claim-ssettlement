'use client';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TeamMember } from '@/data/teamData';
import { departmentColors } from '@/data/departmentColors';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Map team member IDs to professional portrait photos
const teamPhotos: Record<number, string> = {
  1: '/imgs/A structured information envir/image_69.webp', 2: '/imgs/A sustainable financial growth/image_28.webp', 3: '/imgs/A symbolic financial matching/image_36.webp', 4: '/imgs/A symbolic funding selection c/image_2.webp',
  5: '/imgs/A tiered service concept insid/image_66.webp', 6: '/imgs/A tiered service concept repre/image_55.webp', 7: '/imgs/A tiered service concept visua/image_56.webp', 8: '/imgs/A traditional funding pathway/image_15.webp',
  9: '/imgs/A treasury operations command/image_33.webp', 10: '/imgs/A trustcentered financial conc/image_53.webp', 11: '/imgs/A trustcentered financial scen/image_56.webp', 12: '/imgs/A working capital concept feat/image_23.webp',
  13: '/imgs/An enterprise ecosystem visual/image_44.webp', 14: '/imgs/An enterprise growth ecosystem/image_29.webp', 15: '/imgs/An executive capital journey r/image_21.webp'
};
interface TeamProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}
export function TeamProfileModal({
  member,
  isOpen,
  onClose,
  locale
}: TeamProfileModalProps) {
  if (!member) return null;
  const department = departmentColors[member.departmentId];
  const IconComponent =
    lucideIcons[member.icon] || Icons.UserIcon;
  const photoUrl = teamPhotos[member.id] || teamPhotos[1];
  const name =
    locale === 'ar'
      ? member.titleAr
      : locale === 'fr'
      ? member.titleFr
      : member.titleEn;
  const departmentName =
    locale === 'ar'
      ? member.departmentAr
      : locale === 'fr'
      ? member.departmentFr
      : member.departmentEn;
  const description =
    locale === 'ar'
      ? member.descriptionAr
      : locale === 'fr'
      ? member.descriptionFr
      : member.descriptionEn;
  const responsibilities =
    locale === 'ar'
      ? member.responsibilitiesAr
      : locale === 'fr'
      ? member.responsibilitiesFr
      : member.responsibilitiesEn;
  return (
    <AnimatePresence>
      {isOpen &&
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 "
        onClick={onClose}>

          {/* Backdrop */}
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
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" />


          {/* Modal */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 50
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 50
          }}
          transition={{
            type: 'spring',
            damping: 25
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl mx-auto  overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200"
          style={{
            borderTop: `4px solid ${department.primary}`
          }}>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors">

              <Icons.XIcon className="w-5 h-5 text-slate-600" />
            </button>

            {/* Header with Photo */}
            <div className="relative h-64 md:h-72 min-h-[280px] overflow-hidden">
              <Image
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={500}
              sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Gradient Overlay */}
              <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${department.primary}60, transparent 50%)`
              }} />


              {/* Icon Badge */}
              <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              transition={{
                delay: 0.2,
                type: 'spring'
              }}
              className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center">

                <IconComponent
                className="w-8 h-8"
                style={{
                  color: department.primary
                }} />

              </motion.div>
            </div>

            {/* Department Color Bar */}
            <div
            className="h-1 w-full"
            style={{
              background: department.gradient
            }} />


            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
              delay: 0.1
              }}
              className="text-fluid-2xl font-black mb-2"
              style={{
                color: department.primary
              }}>

                {name}
              </motion.h2>

              {/* Department */}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
              delay: 0.15
              }}
              className="flex items-center gap-2 mb-6">

                <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: department.primary
                }} />

                <span className="text-fluid-body-lg text-slate-600">
                  {departmentName}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
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
              }}
              className="text-fluid-body text-slate-600 leading-relaxed mb-8">

                {description}
              </motion.p>

              {/* Responsibilities */}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.25
              }}>

                <h3 className="text-fluid-body-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Icons.ClipboardListIcon
                  className="w-5 h-5"
                  style={{
                    color: department.primary
                  }} />

                  {locale === 'ar'
                    ? 'المسؤوليات الرئيسية'
                    : locale === 'fr'
                    ? 'Principales responsabilités'
                    : 'Main responsibilities'}
                </h3>
                <div className="space-y-3">
                  {responsibilities.map((resp, index) =>
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: 0.3 + index * 0.05
                  }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">

                      <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${department.primary}15`
                    }}>

                        <Icons.CheckIcon
                      className="w-3 h-3"
                      style={{
                        color: department.primary
                      }} />

                      </div>
                      <span className="text-fluid-body text-slate-700">{resp}</span>
                    </motion.div>
                )}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.5
              }}
              className="mt-8 flex gap-4">

              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}