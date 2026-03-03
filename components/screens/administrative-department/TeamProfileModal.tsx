'use client';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { TeamMember } from '@/data/teamData';
import { departmentColors } from '@/data/departmentColors';
import type { LucideIcon } from 'lucide-react';

const lucideIcons = Icons as unknown as Record<string, LucideIcon>;
// Map team member IDs to professional portrait photos
const teamPhotos: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  4: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  5: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
  6: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  7: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  8: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  9: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  10: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  11: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&h=400&fit=crop',
  12: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  13: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  14: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  15: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
};
interface TeamProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}
export function TeamProfileModal({
  member,
  isOpen,
  onClose
}: TeamProfileModalProps) {
  if (!member) return null;
  const department = departmentColors[member.departmentId];
  const IconComponent =
    lucideIcons[member.icon] || Icons.UserIcon;
  const photoUrl = teamPhotos[member.id] || teamPhotos[1];
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200"
          style={{
            borderTop: `4px solid ${department.primary}`
          }}>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors">

              <Icons.XIcon className="w-5 h-5 text-slate-600" />
            </button>

            {/* Header with Photo */}
            <div className="relative h-56 overflow-hidden">
              <img
              src={photoUrl}
              alt={member.titleAr}
              className="w-full h-full object-cover"
              loading="lazy" />

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
              className="text-3xl font-black mb-2"
              style={{
                color: department.primary
              }}>

                {member.titleAr}
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

                <span className="text-lg text-slate-600">
                  {member.departmentAr}
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
              className="text-slate-600 leading-relaxed mb-8">

                {member.description}
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

                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Icons.ClipboardListIcon
                  className="w-5 h-5"
                  style={{
                    color: department.primary
                  }} />

                  المسؤوليات الرئيسية
                </h3>
                <div className="space-y-3">
                  {member.responsibilities.map((resp, index) =>
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
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${department.primary}15`
                    }}>

                        <Icons.CheckIcon
                      className="w-3 h-3"
                      style={{
                        color: department.primary
                      }} />

                      </div>
                      <span className="text-slate-700">{resp}</span>
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

                <button
                className="flex-1 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{
                  backgroundColor: department.primary
                }}>

                  تواصل مباشرة
                </button>
                <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all">

                  إغلاق
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}