'use client';
import { useState, useRef, useEffect, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  UsersIcon,
  FileTextIcon,
  HandshakeIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
  MessageCircleIcon,
  SparklesIcon
} from 'lucide-react';
import { FadeUp } from './ScrollAnimations';
import { useTranslations, useLocale } from 'next-intl';

const offerings = [
  { id: 'needsAnalysis', icon: SearchIcon, angle: 0 },
  { id: 'lenderSelection', icon: UsersIcon, angle: 51.4 },
  { id: 'filePreparation', icon: FileTextIcon, angle: 102.8 },
  { id: 'termNegotiation', icon: HandshakeIcon, angle: 154.3 },
  { id: 'followUp', icon: ClipboardCheckIcon, angle: 205.7 },
  { id: 'postFundingSupport', icon: HeadphonesIcon, angle: 257.1 },
  { id: 'financialAdvisory', icon: MessageCircleIcon, angle: 308.5 }
];

const RADIUS   = 200;
const NODE_R   = 40;   // node circle radius
const SVG_SIZE = 600;
const CX       = SVG_SIZE / 2;
const CY       = SVG_SIZE / 2;

function pos(angle: number) {
  const r = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(r) * RADIUS, y: CY + Math.sin(r) * RADIUS };
}

export function OfferingsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rot, setRot] = useState(0);
  const rafRef = useRef<number | null>(null);
  const t = useTranslations('home.offerings');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  useEffect(() => {
    let f = 0;
    const tick = () => {
      f++;
      setRot((f * 0.25) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative bg-alabaster py-24 md:py-32 overflow-hidden min-h-screen">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div dir={isRTL ? 'rtl' : 'ltr'} className="text-center mb-16 md:mb-24 mx-auto px-4">
          <FadeUp>
            <span className="inline-block text-gold-600 font-cairo font-bold text-fluid-label tracking-wider mb-4">
              {t('badge')}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-fluid-section-title font-cairo font-bold text-navy-900 mb-6">
              {t('titleMain')}{' '}
              <span className="gradient-text-gold">{t('titleHighlight')}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-fluid-section-lead text-navy-600 mx-auto">
              {t('lead')}
            </p>
          </FadeUp>
        </div>

        {/* Desktop SVG orbit — direction:ltr on the SVG itself makes it RTL-immune */}
        <div className="hidden md:block">
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: SVG_SIZE, height: 'auto', overflow: 'visible', direction: 'ltr' }}
          >
            <defs>
              <radialGradient id="hubGrad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </radialGradient>
            </defs>

            {/* Orbit ring */}
            <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="#E5A00D" strokeWidth="1" strokeDasharray="6 5" strokeOpacity="0.4" />

            {/* Rotating inner ring */}
            <circle cx={CX} cy={CY} r={72} fill="none" stroke="#E5A00D" strokeWidth="1.5" strokeDasharray="5 6" strokeOpacity="0.5" transform={`rotate(${rot} ${CX} ${CY})`} />

            {/* Hub glow + circle */}
            <circle cx={CX} cy={CY} r={80} fill="#E5A00D" fillOpacity="0.1" />
            <circle cx={CX} cy={CY} r={64} fill="url(#hubGrad)" style={{ filter: 'drop-shadow(0 8px 30px rgba(229,160,13,0.5))' }} />

            {/* Hub icon */}
            <foreignObject x={CX - 20} y={CY - 20} width={40} height={40} style={{ pointerEvents: 'none' }}>
              <div {...{ xmlns: 'http://www.w3.org/1999/xhtml', style: { display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' } } as HTMLAttributes<HTMLDivElement> & { xmlns: string }}>
                <SparklesIcon style={{ width:28, height:28, color:'#0F172A' }} />
              </div>
            </foreignObject>

            {/* Spokes + nodes */}
            {offerings.map((o, i) => {
              const { x, y } = pos(o.angle);
              const active   = activeIndex === i;
              const Icon     = o.icon;
              const tipAbove = y > CY;
              const TW = 230, TH = 84;
              const tx = Math.min(Math.max(x - TW / 2, 8), SVG_SIZE - TW - 8);
              const ty = tipAbove ? y - NODE_R - TH - 14 : y + NODE_R + 14;

              return (
                <g key={i}>
                  {/* Dashed spoke */}
                  <line x1={CX} y1={CY} x2={x} y2={y} stroke="#E5A00D" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.5" />

                  {/* Travelling dot */}
                  <circle r="3" fill="#E5A00D">
                    <animateMotion dur={`${2.5 + i * 0.35}s`} repeatCount="indefinite" path={`M${CX},${CY} L${x},${y} L${CX},${CY}`} />
                  </circle>

                  {/* Node shadow */}
                  <circle cx={x} cy={y} r={NODE_R + 2} fill="rgba(0,0,0,0.07)" />

                  {/* Node circle */}
                  <circle
                    cx={x} cy={y} r={NODE_R}
                    fill={active ? '#F59E0B' : 'white'}
                    stroke={active ? '#F59E0B' : '#FCD34D'}
                    strokeWidth="2"
                    style={{ cursor:'pointer' }}
                    onClick={() => setActiveIndex(active ? null : i)}
                  />

                  {/* Pulse when active */}
                  {active && (
                    <circle cx={x} cy={y} r={NODE_R} fill="none" stroke="#FBBF24" strokeWidth="2">
                      <animate attributeName="r" values={`${NODE_R};${NODE_R * 1.7}`} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Node icon */}
                  <foreignObject x={x - NODE_R} y={y - NODE_R} width={NODE_R * 2} height={NODE_R * 2} style={{ pointerEvents:'none' }}>
                    <div {...{ xmlns: 'http://www.w3.org/1999/xhtml', style: { display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' } } as HTMLAttributes<HTMLDivElement> & { xmlns: string }}>
                      <Icon style={{ width:26, height:26, color: active ? '#0F172A' : '#D97706' }} />
                    </div>
                  </foreignObject>

                  {/* Bigger transparent hit area */}
                  <circle cx={x} cy={y} r={NODE_R + 10} fill="transparent" style={{ cursor:'pointer' }} onClick={() => setActiveIndex(active ? null : i)} />

                  {/* Tooltip */}
                  {active && (
                    <g>
                      <rect x={tx} y={ty} width={TW} height={TH} rx="12" fill="white" stroke="#FCD34D" strokeWidth="1.5" style={{ filter:'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }} />
                      <foreignObject x={tx} y={ty} width={TW} height={TH}>
                        <div {...{ xmlns: 'http://www.w3.org/1999/xhtml', dir: 'rtl', style: { width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'8px 14px', boxSizing:'border-box' } } as HTMLAttributes<HTMLDivElement> & { xmlns: string }}>
                          <p style={{ margin:0, fontWeight:700, fontSize:13, color:'#D97706', textAlign:'center', lineHeight:1.4 }}>
                            {t(`items.${o.id}.title`)}
                          </p>
                          <p style={{ margin:'4px 0 0', fontSize:11, color:'#475569', textAlign:'center', lineHeight:1.5 }}>
                            {t(`items.${o.id}.description`)}
                          </p>
                        </div>
                      </foreignObject>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          <p dir={isRTL ? 'rtl' : 'ltr'} className="text-center text-navy-400 font-tajawal text-fluid-body mt-6">
            {t('hint')}
          </p>
        </div>

        {/* Mobile list */}
        <div dir={isRTL ? 'rtl' : 'ltr'} className="md:hidden relative px-4">
          <div className="space-y-6">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity:0, x:20 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center gap-3 pr-4"
                >
                  <div className="relative z-10 w-12 h-12 bg-white border-2 border-gold-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-2">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="w-full bg-white rounded-xl p-4 border border-navy-100 shadow-lg">
                    <h4 className="text-gold-600 font-cairo font-bold text-fluid-body mb-1">
                      {t(`items.${o.id}.title`)}
                    </h4>
                    <p className="text-navy-600 font-tajawal text-fluid-body">
                      {t(`items.${o.id}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl to-transparent pointer-events-none" />
    </section>
  );
}