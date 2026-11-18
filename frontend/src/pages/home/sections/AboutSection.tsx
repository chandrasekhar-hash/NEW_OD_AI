import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Globe2, ShieldCheck, Cpu, Sparkles, MapPin } from 'lucide-react';
import FlowingRibbonsCanvas from '../../../components/animations/FlowingRibbonsCanvas';

interface AboutSectionProps {
  onOpenEnquire: (subject?: string) => void;
}

export default function AboutSection({ onOpenEnquire }: AboutSectionProps) {
  const corridors = [
    { from: 'Berhampur (HQ)', to: 'Bengaluru Tech Corridor', speed: 'Direct Talent Pipe' },
    { from: 'Berhampur (HQ)', to: 'Singapore AI FinTech', speed: 'Enterprise Ventures' },
    { from: 'Berhampur (HQ)', to: 'San Francisco & Bay Area', speed: 'Research Fellowships' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9]">
      {/* Background 3D Flowing Ribbons */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
        <FlowingRibbonsCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-6 h-[2px] bg-bronze-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
                OUR MISSION & VISION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum leading-[1.12]"
            >
              Creating AI opportunities from{' '}
              <span className="font-editorial-italic text-gradient-bronze">Berhampur to beyond.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="text-base sm:text-lg text-plum/90 font-medium leading-relaxed"
            >
              We are on a mission to make Odisha a hub for AI talent, innovation and real-world impact by empowering individuals, institutions and businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="text-sm sm:text-base text-mauve-deep leading-relaxed"
            >
              Headquartered in the vibrant coastal hub of Berhampur (Ganjam), OD AI HUB is dismantling the geographic monopoly on advanced computing. We believe the next generation of generative AI breakthroughs, autonomous agent architectures, and foundational innovations will be authored by youth across Tier-2 and Tier-3 centers when given world-class infrastructure and unyielding mentorship.
            </motion.p>

            {/* Core Pillars Bento Subgrid */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
            >
              <div className="p-4 rounded-2xl bg-softwhite/90 border border-champagne-200/60 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-champagne-200/80 text-bronze-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-plum">Rooted in Berhampur</h4>
                  <p className="text-[11px] text-mauve-deep mt-0.5">Empowering Southern Odisha with sovereign computing & startup capital.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-softwhite/90 border border-champagne-200/60 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-champagne-200/80 text-bronze-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-plum">Global Tech Linkages</h4>
                  <p className="text-[11px] text-mauve-deep mt-0.5">Direct hiring pipelines to leading AI labs and enterprises across the globe.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
              className="pt-4 flex items-center gap-4"
            >
              <button
                onClick={() => onOpenEnquire('Our Story & Mission')}
                className="px-7 py-3.5 rounded-full bg-plum hover:bg-plum-light text-champagne-100 font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all group border border-champagne-200/20"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-bronze-300 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-bronze-600">
                <MapPin className="w-4 h-4 text-bronze-400" />
                <span>Berhampur, Ganjam, Odisha</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Regional & Global AI Connectivity Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white shadow-elevated relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-600 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
                  Connectivity Corridor
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Network
                </span>
              </div>

              <h3 className="text-xl font-bold font-editorial text-plum mb-2">
                Connecting Berhampur to the World
              </h3>
              <p className="text-xs text-mauve-deep leading-relaxed mb-5">
                Dynamic telemetry of talent placement and collaborative research conduits running between Odisha and global innovation capitals.
              </p>

              {/* Corridor Links */}
              <div className="space-y-3">
                {corridors.map((c, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-softwhite/90 border border-champagne-200/60 flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <div className="text-xs font-bold text-plum">{c.from}</div>
                      <div className="text-[11px] text-bronze-600 font-medium">↳ {c.to}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded-lg bg-champagne-100/70 text-plum">
                        {c.speed}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Odisha Ecosystem Footprint */}
              <div className="mt-6 pt-5 border-t border-champagne-200/50 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-champagne-100/50">
                  <div className="text-lg font-bold font-editorial text-plum">30+</div>
                  <div className="text-[9px] text-mauve-deep uppercase font-semibold">Districts Reached</div>
                </div>
                <div className="p-2 rounded-xl bg-champagne-100/50">
                  <div className="text-lg font-bold font-editorial text-plum">10K+</div>
                  <div className="text-[9px] text-mauve-deep uppercase font-semibold">Community</div>
                </div>
                <div className="p-2 rounded-xl bg-champagne-100/60">
                  <div className="text-lg font-bold font-editorial text-plum">100%</div>
                  <div className="text-[9px] text-mauve-deep uppercase font-semibold">Odisha-Made AI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
