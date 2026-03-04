'use client';

import { motion } from 'framer-motion';
import {
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const features = [
  {
    icon: SparklesIcon,
    id: 'customizedSolutions',
  },
  {
    icon: ShieldCheckIcon,
    id: 'highReliability',
  },
  {
    icon: ClockIcon,
    id: 'speed',
  },
  {
    icon: UsersIcon,
    id: 'continuousSupport',
  },
];

export function FeaturesSection() {
  const t = useTranslations('servicesPage.features');
  return (
    <section className="py-[clamp(48px,10vh,96px)] bg-white">
      <div className="mx-auto px-[clamp(16px,4vw,48px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,3vw,32px)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="text-center p-[clamp(24px,3vw,32px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-[clamp(56px,8vw,72px)] h-[clamp(56px,8vw,72px)] bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-[clamp(28px,4vw,36px)] h-[clamp(28px,4vw,36px)] text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-bold text-fluid-lg text-[#0A1628] mb-2">
                {t(`items.${feature.id}.title`)}
              </h3>
              <p className="text-fluid-sm text-[#64748B]">
                {t(`items.${feature.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

