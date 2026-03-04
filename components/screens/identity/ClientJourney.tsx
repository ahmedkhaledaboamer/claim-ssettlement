'use client';
import {
  Search,
  FileText,
  CheckSquare,
  Handshake,
  CheckCircle } from
'lucide-react';
import { motion } from 'framer-motion';
import { useMessages } from 'next-intl';

const STEP_STYLES = [
  { color: 'text-dept-analysis', bg: 'bg-dept-analysis/10', border: 'border-dept-analysis/30' },
  { color: 'text-dept-fileManagement', bg: 'bg-dept-fileManagement/10', border: 'border-dept-fileManagement/30' },
  { color: 'text-dept-compliance', bg: 'bg-dept-compliance/10', border: 'border-dept-compliance/30' },
  { color: 'text-dept-relations', bg: 'bg-dept-relations/10', border: 'border-dept-relations/30' },
  { color: 'text-KIB-gold', bg: 'bg-KIB-gold/10', border: 'border-KIB-gold/30' },
];
const STEP_ICONS = [Search, FileText, CheckSquare, Handshake, CheckCircle];

const DEFAULT_STEPS = [
  { title: 'Analysis and assessment', desc: 'Accurate reading of financial reality and measured risk assessment' },
  { title: 'Building the file', desc: 'Professional drafting and organised documents with a clear plan' },
  { title: 'Matching and compliance', desc: 'Ensuring files meet regulations and institutional standards' },
  { title: 'Negotiation', desc: 'Thoughtful selection of the right institution and professional negotiation of terms' },
  { title: 'Closure', desc: 'Thorough closure, ongoing follow-up, and post-financing support' },
];

export function ClientJourney() {
  const messages = useMessages();
  const journey = (messages?.identityPage as Record<string, unknown>)?.journey as {
    title?: string;
    titleHighlight?: string;
    lead?: string;
    stepLabel?: string;
    steps?: Array<{ title: string; desc: string }>;
  } | undefined;
  const stepLabelTemplate = journey?.stepLabel ?? 'Step {n}';
  const journeySteps = (journey?.steps?.length ? journey.steps : DEFAULT_STEPS) as Array<{ title: string; desc: string }>;
  const steps = journeySteps.map((s, idx) => {
    const IconComponent = STEP_ICONS[idx];
    const style = STEP_STYLES[idx] ?? STEP_STYLES[0];
    return {
      icon: IconComponent ? <IconComponent className="w-6 h-6" /> : null,
      title: s.title,
      desc: s.desc,
      ...style,
    };
  });

  return (
    <section
      id="journey"
      className=" p-[5%] bg-KIB-bg2 relative overflow-hidden">

      <div className=" ">
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
          className="text-center mb-16 md:mb-20">

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-KIB-text mb-6">
            {journey?.title ?? 'Client'} <span className="text-KIB-gold">{journey?.titleHighlight ?? 'journey'}</span>
          </h2>
          <p className="text-xl md:text-2xl text-KIB-muted font-body leading-relaxed">
            {journey?.lead ?? 'A calculated path that ensures financial clarity and a result you can rely on'}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}
              className="flex flex-col items-center text-center group">

                <div
                className={`w-18 h-18 rounded-2xl ${step.bg} ${step.border} border-2 flex items-center justify-center mb-5 ${step.color} transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm bg-white p-4`}>

                  {step.icon}
                </div>
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 w-full h-full min-h-[220px] transition-shadow shadow-card-light group-hover:shadow-card-elevated flex flex-col">
                  <div className="text-base font-bold text-KIB-gold mb-3 font-heading tracking-wider">
                    {stepLabelTemplate.replace('{n}', String(idx + 1).padStart(2, '0'))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-KIB-text font-heading mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-KIB-muted font-body leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}