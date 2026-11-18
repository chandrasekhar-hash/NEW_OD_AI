import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Users, Leaf, Calendar, ArrowRight } from 'lucide-react';

interface BentoHighlightsProps {
  onOpenEnquire: (program?: string) => void;
  onSelectEvent: (eventName: string) => void;
}

export default function BentoHighlights({ onOpenEnquire, onSelectEvent }: BentoHighlightsProps) {
  const [activeDot, setActiveDot] = useState(0);

  const events = [
    {
      id: 'paradigm',
      type: 'Hackathon',
      title: 'PARADIGM 2026',
      dates: 'Mar 14 – 16, 2026',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'harness',
      type: 'Workshop',
      title: 'AI Harness Hackathon',
      dates: 'Feb 7, 2026',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* CARD 1: Why OD AI HUB? (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="lg:col-span-4 glass-panel p-5 sm:p-6 rounded-3xl border border-white/80 shadow-premium-card flex flex-col justify-between hover:shadow-elevated transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-bronze-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                Why OD AI HUB?
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-plum leading-snug">
              More than a platform.
              <br />
              <span className="font-editorial-italic text-gradient-bronze">A launchpad for Odisha.</span>
            </h3>
          </div>

          {/* 4 Feature Badges in 1 Row (Exactly matching the reference image) */}
          <div className="grid grid-cols-4 gap-2 mt-6 pt-4 border-t border-champagne-200/50">
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-softwhite/60 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-champagne-100/70 text-plum flex items-center justify-center mb-1.5">
                <Award className="w-4 h-4 text-bronze-500" />
              </div>
              <span className="text-[10px] font-bold text-plum leading-tight">
                Practical & Industry Aligned
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-softwhite/60 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-champagne-100/70 text-plum flex items-center justify-center mb-1.5">
                <Lightbulb className="w-4 h-4 text-bronze-500" />
              </div>
              <span className="text-[10px] font-bold text-plum leading-tight">
                Innovation Driven
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-softwhite/60 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-champagne-100/70 text-plum flex items-center justify-center mb-1.5">
                <Users className="w-4 h-4 text-bronze-500" />
              </div>
              <span className="text-[10px] font-bold text-plum leading-tight">
                Ecosystem Support
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-softwhite/60 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-champagne-100/70 text-plum flex items-center justify-center mb-1.5">
                <Leaf className="w-4 h-4 text-bronze-500" />
              </div>
              <span className="text-[10px] font-bold text-plum leading-tight">
                Odisha to Global Impact
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Our Impact (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-4 glass-panel p-5 sm:p-6 rounded-3xl border border-white/80 shadow-premium-card flex flex-col justify-between hover:shadow-elevated transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-bronze-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                Our Impact
              </span>
            </div>
          </div>

          {/* 4 Key Numerical Metrics in 1 Row (From reference image: 10K+ Learners, 100+ Workshops, 25+ Projects, 15+ Partners) */}
          <div className="grid grid-cols-4 gap-2 my-auto py-2">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-plum font-editorial tracking-tight">10K+</div>
              <div className="text-[11px] font-semibold text-mauve-deep mt-0.5">Learners</div>
            </div>

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-plum font-editorial tracking-tight">100+</div>
              <div className="text-[11px] font-semibold text-mauve-deep mt-0.5 leading-tight">Workshops & Events</div>
            </div>

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-plum font-editorial tracking-tight">25+</div>
              <div className="text-[11px] font-semibold text-mauve-deep mt-0.5 leading-tight">Innovation Projects</div>
            </div>

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-plum font-editorial tracking-tight">15+</div>
              <div className="text-[11px] font-semibold text-mauve-deep mt-0.5 leading-tight">Partner Institutions</div>
            </div>
          </div>

          <div className="pt-2" />
        </motion.div>

        {/* CARD 3: Featured Events (Col-span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="lg:col-span-4 glass-panel p-5 sm:p-6 rounded-3xl border border-white/80 shadow-premium-card flex flex-col justify-between hover:shadow-elevated transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-bronze-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                  Featured Events
                </span>
              </div>
              <button
                onClick={() => onOpenEnquire('Events & Hackathons')}
                className="text-xs font-semibold text-plum hover:text-bronze-600 transition-colors flex items-center gap-1 group"
              >
                <span>View All Events</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* 2 Event Cards Side by Side (From reference image) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-2">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent(evt.title)}
                  className="group/evt cursor-pointer rounded-2xl overflow-hidden bg-softwhite border border-champagne-200/60 hover:border-bronze-400/60 shadow-sm transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-20 sm:h-22 w-full overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/evt:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase bg-plum/90 text-champagne-100 backdrop-blur-sm border border-champagne-200/30">
                      {evt.type}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-2.5 space-y-1">
                    <h4 className="text-xs font-bold text-plum group-hover/evt:text-bronze-600 transition-colors truncate">
                      {evt.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-mauve-deep">
                      <Calendar className="w-3 h-3 text-bronze-500 shrink-0" />
                      <span className="truncate">{evt.dates}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pagination Dots (Exactly as in the reference image) */}
          <div className="flex items-center justify-center gap-1.5 mt-3 pt-2">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveDot(dot)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === dot ? 'w-4 bg-plum' : 'bg-champagne-300 hover:bg-champagne-400'
                }`}
                aria-label={`Event slide ${dot + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}