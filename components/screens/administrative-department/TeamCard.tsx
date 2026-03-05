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
  1: '/imgs/A structured information envir/image_69.webp', 2: '/imgs/A sustainable financial growth/image_28.webp', 3: '/imgs/A symbolic financial matching/image_36.webp', 4: '/imgs/A symbolic funding selection c/image_2.webp',
  5: '/imgs/A tiered service concept insid/image_66.webp', 6: '/imgs/A tiered service concept repre/image_55.webp', 7: '/imgs/A tiered service concept visua/image_56.webp', 8: '/imgs/A traditional funding pathway/image_15.webp',
  9: '/imgs/A treasury operations command/image_33.webp', 10: '/imgs/A trustcentered financial conc/image_53.webp', 11: '/imgs/A trustcentered financial scen/image_56.webp', 12: '/imgs/A working capital concept feat/image_23.webp',
  13: '/imgs/An enterprise ecosystem visual/image_44.webp', 14: '/imgs/An enterprise growth ecosystem/image_29.webp', 15: '/imgs/An executive capital journey r/image_21.webp'
};
interface TeamCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
  locale: string;
}

export function TeamCard({ member, index, onClick, locale }: TeamCardProps) {
  const isRTL = locale === 'ar';
  const [isHovered, setIsHovered] = useState(false);
  const department = departmentColors[member.departmentId];
  const IconComponent =
    lucideIcons[member.icon] || Icons.UserIcon;

  const tierStyles = {
    ceo: {
      cardClass: 'md:col-span-2 lg:col-span-1',
      height: 'min-h-[420px]',
      imageHeight: 'h-48',
      nameSize: 'text-fluid-2xl',
      badgeColor: '#D97706'
    },
    director: {
      cardClass: '',
      height: 'min-h-[380px]',
      imageHeight: 'h-40',
      nameSize: 'text-fluid-body-lg',
      badgeColor: '#0E7490'
    },
    manager: {
      cardClass: '',
      height: 'min-h-[360px]',
      imageHeight: 'h-36',
      nameSize: 'text-fluid-card-title',
      badgeColor: '#64748B'
    }
  };

  const style = tierStyles[member.tier];
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
  const responsibilities =
    locale === 'ar'
      ? member.responsibilitiesAr
      : locale === 'fr'
      ? member.responsibilitiesFr
      : member.responsibilitiesEn;

  const tierBadgeLabel =
    member.tier === 'ceo'
      ? locale === 'ar'
        ? 'الرئيس التنفيذي'
        : locale === 'fr'
        ? 'PDG'
        : 'CEO'
      : member.tier === 'director'
      ? locale === 'ar'
        ? 'مدير'
        : locale === 'fr'
        ? 'Directeur'
        : 'Director'
      : locale === 'ar'
      ? 'مدير قسم'
      : locale === 'fr'
      ? 'Chef de département'
      : 'Department manager';
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
          borderRight: !isRTL ? 'none' : `4px solid ${department.primary}`,
          borderLeft: !isRTL ? `4px solid ${department.primary}` : 'none'
        }}>

        {/* Image Area with Photo */}
        <div className={`relative min-h-[200px] ${style.imageHeight} overflow-hidden`}>
          <motion.img
            src={photoUrl}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover min-h-[200px]"
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
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-fluid-label font-bold text-white"
            style={{
              backgroundColor: style.badgeColor
            }}>

            {tierBadgeLabel}
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

            {name}
          </h3>

          {/* Department */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: department.primary
              }} />

            <span className="text-fluid-body text-slate-500">
              {departmentName}
            </span>
          </div>

          {/* Responsibilities Preview */}
          <div className="space-y-2">
            {responsibilities.slice(0, 3).map((resp, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0.7
              }}
              animate={{
                opacity: isHovered ? 1 : 0.7
              }}
              className="flex items-start gap-2 text-fluid-body text-slate-500">

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
              className="text-fluid-body font-medium"
              style={{
                color: department.primary
              }}>

              {locale === 'ar' &&
                (!isRTL ? 'عرض الملف الكامل →' : 'عرض الملف الكامل ←')}
              {locale === 'en' &&
                (!isRTL ? 'View full profile →' : 'View full profile ←')}
              {locale === 'fr' &&
                (!isRTL ? 'Voir le profil complet →' : 'Voir le profil complet ←')}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>);

}
export { teamPhotos };