'use client';
import { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  BuildingIcon,
  Building2Icon,
  FactoryIcon,
  HomeIcon,
  ShoppingCartIcon,
  MoonStarIcon,
  CreditCardIcon,
  TrendingUpIcon,
  CalculatorIcon,
  RocketIcon,
  ExpandIcon,
  CpuIcon,
  SparklesIcon,
  UsersIcon,
  GlobeIcon,
  MapPinIcon,
  TruckIcon,
  LandmarkIcon,
  StoreIcon,
  RefreshCwIcon,
  LinkIcon,
  FileTextIcon,
  HardDriveIcon,
  AwardIcon,
  MonitorIcon,
  PlaneIcon,
  GitMergeIcon,
  ZapIcon,
  HeartPulseIcon,
} from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  index: number;
  image: string;
}
const iconMap: Record<
  string,
  ComponentType<{
    className?: string;
  }>> =
{
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  building2: Building2Icon,
  factory: FactoryIcon,
  home: HomeIcon,
  cart: ShoppingCartIcon,
  moon: MoonStarIcon,
  credit: CreditCardIcon,
  trending: TrendingUpIcon,
  calculator: CalculatorIcon,
  rocket: RocketIcon,
  expand: ExpandIcon,
  cpu: CpuIcon,
  sparkles: SparklesIcon,
  users: UsersIcon,
  globe: GlobeIcon,
  mappin: MapPinIcon,
  truck: TruckIcon,
  landmark: LandmarkIcon,
  store: StoreIcon,
  refresh: RefreshCwIcon,
  link: LinkIcon,
  file: FileTextIcon,
  harddrive: HardDriveIcon,
  award: AwardIcon,
  monitor: MonitorIcon,
  plane: PlaneIcon,
  merge: GitMergeIcon,
  zap: ZapIcon,
  heart: HeartPulseIcon
};
export function ServiceCard({
  title,
  description,
  features,
  icon,
  index,
  image
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || BriefcaseIcon;
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index % 6 * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover">

      {/* Image Section */}
      <div className="relative h-[clamp(140px,18vw,200px)] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />

        {/* Icon Badge */}
        <div className="absolute bottom-4 right-4 w-[clamp(48px,6vw,64px)] h-[clamp(48px,6vw,64px)] bg-gradient-gold rounded-xl flex items-center justify-center shadow-lg">
          <IconComponent className="w-[clamp(24px,3vw,32px)] h-[clamp(24px,3vw,32px)] text-[#0A1628]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-[clamp(16px,2vw,24px)]">
        <h3 className="font-heading font-bold text-fluid-card-title text-[#0A1628] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-fluid-body text-[#64748B] mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, idx) =>
          <li
            key={idx}
            className="flex items-center gap-2 text-fluid-body text-[#0A1628]/80">

              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
              {feature}
            </li>
          )}
        </ul>

        {/* Hover Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
      </div>
    </motion.article>);

}