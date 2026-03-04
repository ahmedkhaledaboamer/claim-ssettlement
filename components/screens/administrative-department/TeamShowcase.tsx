'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { teamMembers, tierOrder, TeamMember } from '@/data/teamData';
import { departmentColors } from '@/data/departmentColors';
import { TeamCard } from './TeamCard';
import { TeamProfileModal } from './TeamProfileModal';
import { FilterIcon } from 'lucide-react';
type FilterType = 'all' | 'ceo' | 'director' | 'manager';
const filterOptions: {
  value: FilterType;
  label: string;
}[] = [
{
  value: 'all',
  label: 'الجميع'
},
{
  value: 'ceo',
  label: 'الرئيس التنفيذي'
},
{
  value: 'director',
  label: 'المديرون'
},
{
  value: 'manager',
  label: 'مديرو الأقسام'
}];

export function TeamShowcase() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredMembers = useMemo(() => {
    const filtered =
    filter === 'all' ?
    teamMembers :
    teamMembers.filter((m) => m.tier === filter);
    return [...filtered].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);
  }, [filter]);
  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };
  const departments = Object.values(departmentColors);
  return (
    <section id="team" className="relative p-[5%] overflow-hidden bg-white">
      <div ref={ref} className="relative z-10  ">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8
          }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-slate-900">الفريق</span>
            <span className="gradient-text-gold"> التنفيذي</span>
          </h2>
          <p className="text-lg text-slate-600  ">
            ١٥ منصباً تنفيذياً يعملون بتناغم تام لضمان نجاح ملفك التمويلي
          </p>
        </motion.div>

        {/* Department Legend */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="flex flex-wrap justify-center gap-3 mb-8">

          {departments.slice(0, 8).map((dept) =>
          <div
            key={dept.id}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs shadow-sm">

              <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: dept.primary
              }} />

              <span className="text-slate-600">{dept.nameAr}</span>
            </div>
          )}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="flex flex-wrap justify-center gap-3 mb-12">

          <div className="flex items-center gap-2 text-slate-500 ml-4">
            <FilterIcon className="w-4 h-4" />
            <span className="text-sm">تصفية:</span>
          </div>
          {filterOptions.map((option) =>
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === option.value ? 'bg-teal-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>

              {option.label}
            </button>
          )}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredMembers.map((member, index) =>
          <TeamCard
            key={member.id}
            member={member}
            index={index}
            onClick={() => handleCardClick(member)} />

          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={
          isVisible ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
            <div className="text-3xl font-black gradient-text-gold mb-2">١</div>
            <div className="text-sm text-slate-500">رئيس تنفيذي</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-executive-burgundy mb-2">
              ٦
            </div>
            <div className="text-sm text-slate-500">مديرون</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-operations-steel mb-2">
              ٨
            </div>
            <div className="text-sm text-slate-500">مديرو أقسام</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-data-emerald mb-2">١٤</div>
            <div className="text-sm text-slate-500">قسم متخصص</div>
          </div>
        </motion.div>
      </div>

      {/* Profile Modal */}
      <TeamProfileModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />

    </section>);

}