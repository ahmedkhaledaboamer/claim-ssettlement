'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TeamMember } from '@/data/teamData';
import { departmentColors } from '@/data/departmentColors';

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
interface TeamCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}
export function TeamCard({ member, index, onClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const department = departmentColors[member.departmentId];
  const IconComponent =
    lucideIcons[member.icon] || Icons.UserIcon;
  const tierStyles = {
    ceo: {
      cardClass: 'md:col-span-2 lg:col-span-1',
      height: 'min-h-[420px]',
      imageHeight: 'h-48',
      nameSize: 'text-2xl',
      badge: 'الرئيس التنفيذي',
      badgeColor: '#D97706'
    },
    director: {
      cardClass: '',
      height: 'min-h-[380px]',
      imageHeight: 'h-40',
      nameSize: 'text-xl',
      badge: 'مدير',
      badgeColor: '#0E7490'
    },
    manager: {
      cardClass: '',
      height: 'min-h-[360px]',
      imageHeight: 'h-36',
      nameSize: 'text-lg',
      badge: 'مدير قسم',
      badgeColor: '#64748B'
    }
  };
  const style = tierStyles[member.tier];
  const photoUrl = teamPhotos[member.id] || teamPhotos[1];
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08
      }}
      className={`${style.cardClass}`}>

      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          y: -8
        }}
        onClick={onClick}
        className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer ${style.height} border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-slate-300`}
        style={{
          borderRight: `4px solid ${department.primary}`
        }}>

        {/* Image Area with Photo */}
        <div className={`relative ${style.imageHeight} overflow-hidden`}>
          <motion.img
            src={photoUrl}
            alt={member.titleAr}
            className="w-full h-full object-cover"
            loading="lazy"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{
              duration: 0.3
            }} />


          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${department.primary}40, transparent 60%)`
            }} />


          {/* Tier Badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{
              backgroundColor: style.badgeColor
            }}>

            {style.badge}
          </div>

          {/* Icon Badge */}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IconComponent
              className="w-5 h-5"
              style={{
                color: department.primary
              }} />

          </div>
        </div>

        {/* Department Color Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: department.gradient
          }} />


        {/* Content */}
        <div className="p-5">
          {/* Name */}
          <h3
            className={`${style.nameSize} font-bold mb-2 transition-colors duration-300`}
            style={{
              color: isHovered ? department.primary : '#0F172A'
            }}>

            {member.titleAr}
          </h3>

          {/* Department */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: department.primary
              }} />

            <span className="text-sm text-slate-500">
              {member.departmentAr}
            </span>
          </div>

          {/* Responsibilities Preview */}
          <div className="space-y-2">
            {member.responsibilities.slice(0, 3).map((resp, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0.7
              }}
              animate={{
                opacity: isHovered ? 1 : 0.7
              }}
              className="flex items-start gap-2 text-sm text-slate-500">

                <span
                style={{
                  color: department.primary
                }}>

                  ▸
                </span>
                <span className="line-clamp-1">{resp}</span>
              </motion.div>
            )}
          </div>

          {/* View More Indicator */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            className="mt-4 text-center">

            <span
              className="text-sm font-medium"
              style={{
                color: department.primary
              }}>

              عرض الملف الكامل ←
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>);

}
export { teamPhotos };