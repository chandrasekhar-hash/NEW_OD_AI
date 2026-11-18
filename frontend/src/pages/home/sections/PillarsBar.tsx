import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Sparkles, Briefcase, Rocket } from 'lucide-react';

export interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
}

export const PILLARS: PillarItem[] = [
  {
    id: 'mentorship',
    title: 'Industry Mentorship',
    tagline: 'Practical guidance throughout your degree',
    icon: Users,
  },
  {
    id: 'projects',
    title: 'Real-World Projects',
    tagline: 'Production systems, not toy apps',
    icon: Code2,
  },
  {
    id: 'learning',
    title: 'AI-First Learning',
    tagline: 'Agentic tools, ML & practical workflows',
    icon: Sparkles,
  },
  {
    id: 'careers',
    title: 'Internships & Careers',
    tagline: 'Direct pathways to opportunities',
    icon: Briefcase,
  },
  {
    id: 'startups',
    title: 'Build & Launch Startups',
    tagline: 'From ideation to market launch',
    icon: Rocket,
  },
];

export default function PillarsBar({ onSelectPillar }: { onSelectPillar?: (id: string) => void }) {
  const [activePillar, setActivePillar] = useState('mentorship');

  const handleSelect = (id: string) => {
    setActivePillar(id);
    if (onSelectPillar) onSelectPillar(id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 relative z-20">
      {/* Floating Pill Container (Styled exactly like the reference image pill bar) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="glass-pill rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-floating-pill border border-white/80 overflow-x-auto no-scrollbar"
      >
        <div className="grid grid-cols-5 min-w-[650px] sm:min-w-0 gap-1.5 sm:gap-2">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => handleSelect(pillar.id)}
                className={`flex items-center gap-2.5 sm:gap-3.5 px-3 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 text-left group ${
                  isActive
                    ? 'bg-softwhite shadow-sm border border-champagne-300/70'
                    : 'hover:bg-softwhite/60'
                }`}
              >
                {/* Icon box */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-plum text-champagne-100 shadow-sm'
                      : 'bg-champagne-100/80 text-plum group-hover:bg-champagne-200/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-bronze-300' : 'text-plum'}`} />
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-plum tracking-tight leading-tight">
                      {pillar.title}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-mauve-deep truncate mt-0.5 leading-snug">
                    {pillar.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
