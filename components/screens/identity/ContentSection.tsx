import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ContentSection as ContentSectionType } from '@/data/contentData';
interface ContentSectionProps {
  data: ContentSectionType;
  index: number;
}
export function ContentSection({ data, index }: ContentSectionProps) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`p-[5%] ${isEven ? 'bg-KIB-dark' : 'bg-KIB-card'} relative overflow-hidden`}>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-KIB-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

      <div className="  relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-1 bg-KIB-gold rounded-full" />
          <h2 className="text-fluid-section-title font-heading font-bold text-white text-shadow-section">
            {data.title}
          </h2>
        </div>

        <div className="space-y-6 text-fluid-body text-gray-300 font-body leading-relaxed">
          {data.content.map((paragraph, i) =>
          <p key={i}>{paragraph}</p>
          )}

          {data.bullets && data.bullets.length > 0 &&
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            role="list">

              {data.bullets.map((bullet, i) =>
            <li
              key={i}
              className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-KIB-gold/30 transition-colors">

                  <CheckCircle2
                className="w-6 h-6 text-KIB-gold shrink-0 mt-0.5"
                aria-hidden="true" />

                  <span className="font-medium text-gray-200">{bullet}</span>
                </li>
            )}
            </ul>
          }

          {data.conclusion &&
          <div className="mt-8 p-6 border-r-4 border-KIB-gold bg-gradient-to-l from-KIB-gold/10 to-transparent rounded-l-xl">
              <p className="font-heading font-semibold text-fluid-body-lg text-KIB-goldLight">
                {data.conclusion}
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}