import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Terminal, Users, Laptop, Award, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyUsSection() {
  const points = [
    {
      title: 'Industry-Aligned Learning',
      desc: 'Syllabi and practical training structured around modern technology needs, real toolchains and evolving industry workflows.',
      icon: BookOpenCheck,
      badge: '01',
    },
    {
      title: 'Expert Industry Mentors',
      desc: 'Direct guidance from working technology leads, AI engineers and practitioners alongside your academic degree.',
      icon: Users,
      badge: '02',
    },
    {
      title: 'Hands-on & Project-Based',
      desc: 'Build production-ready applications, live code repositories and practical systems rather than rote memorization.',
      icon: Terminal,
      badge: '03',
    },
    {
      title: 'Career & Internship Support',
      desc: 'Structured internship pipelines, technical interview preparation, portfolio reviews and career acceleration.',
      icon: Briefcase,
      badge: '04',
    },
    {
      title: 'Innovation & Entrepreneurship',
      desc: 'From initial hackathons to pre-incubation, prototyping hardware, MVP development and early-stage startup guidance.',
      icon: Sparkles,
      badge: '05',
    },
    {
      title: 'Impact for Odisha',
      desc: 'Rooted in Berhampur to decentralize technology access and empower regional youth to become global innovators.',
      icon: Award,
      badge: '06',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9] border-t border-champagne-200/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-bronze-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
              DISTINCT ADVANTAGES
            </span>
            <span className="w-6 h-[2px] bg-bronze-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum tracking-tight"
          >
            Why{' '}
            <span className="font-editorial-italic text-gradient-bronze">OD AI HUB?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="text-sm sm:text-base text-mauve-deep mt-4 leading-relaxed"
          >
            We built OD AI HUB from the ground up to solve the critical gap between academic syllabi and high-impact AI production roles.
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-premium-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-champagne-100 text-bronze-600 flex items-center justify-center border border-champagne-300/60 group-hover:bg-plum group-hover:text-champagne-100 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-champagne-200/60 text-bronze-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-editorial text-plum">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-mauve-deep mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-champagne-200/60 flex items-center gap-1.5 text-xs font-semibold text-bronze-600">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
