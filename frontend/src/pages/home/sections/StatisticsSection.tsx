import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FolderGit2, Building2, TrendingUp, Rocket, Sparkles } from 'lucide-react';

export default function StatisticsSection() {
  const stats = [
    {
      label: 'Learners Trained',
      sublabel: 'Awaiting verified cohort data',
      placeholder: 'Awaiting Data',
      icon: GraduationCap,
    },
    {
      label: 'Real-World Projects',
      sublabel: 'Student & lab production briefs',
      placeholder: 'Awaiting Data',
      icon: FolderGit2,
    },
    {
      label: 'Institutional Partners',
      sublabel: 'Colleges & academic MoUs',
      placeholder: 'Awaiting Data',
      icon: Building2,
    },
    {
      label: 'Internships / Jobs',
      sublabel: 'Verified placements & roles',
      placeholder: 'Awaiting Data',
      icon: TrendingUp,
    },
    {
      label: 'Startup Pipeline',
      sublabel: 'Incubated ventures & MVPs',
      placeholder: 'Awaiting Data',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-[#F7F1E9] border-y border-champagne-200/40">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-warm-mesh pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 5-part Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/90 shadow-premium-card flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group"
              >
                {/* Top icon and badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-champagne-200/80 text-bronze-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-bronze-500" />
                  </div>
                  <span className="text-[11px] font-mono text-mauve-deep/80">0{idx + 1}</span>
                </div>

                {/* Awaiting Data Placeholder */}
                <div className="my-2">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-champagne-200/70 text-bronze-700 border border-champagne-300/50 font-medium">
                    {stat.placeholder}
                  </span>
                </div>

                {/* Label */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-plum font-serif leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-mauve-deep mt-1 leading-snug">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
