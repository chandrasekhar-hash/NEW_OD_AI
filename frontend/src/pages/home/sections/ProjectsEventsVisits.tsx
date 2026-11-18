import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ProjectsEventsVisitsProps {
  onOpenEnquire?: (topic?: string) => void;
}

export default function ProjectsEventsVisits({ onOpenEnquire }: ProjectsEventsVisitsProps) {
  const cards = [
    {
      id: 'projects',
      title: 'Real Projects & Innovation',
      description: 'Project briefs learners build, and verified student work as it is approved.',
      linkText: 'Explore →',
      icon: FolderGit2,
      tag: 'Portfolio & Code',
    },
    {
      id: 'events',
      title: 'Events & Workshops',
      description: 'Workshops, hackathons and talks for students, parents and institutions.',
      linkText: 'Explore →',
      icon: Calendar,
      tag: 'Hackathons & Sessions',
    },
    {
      id: 'campus',
      title: 'Visit Our Campus',
      description: 'Book a visit to OD AI HUB in Berhampur and meet the team.',
      linkText: 'Explore →',
      icon: MapPin,
      tag: 'Berhampur, Odisha',
    },
  ];

  return (
    <section id="projects-events-visits" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9] border-t border-champagne-200/40 scroll-mt-20">
      <div id="events" className="scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B77B4B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
              ENGAGE WITH OD AI HUB
            </span>
            <span className="w-6 h-[2px] bg-[#B77B4B]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum tracking-tight">
            Projects, Events &amp; Visits
          </h2>

          <p className="text-sm sm:text-base text-mauve-deep mt-3 sm:mt-4 leading-relaxed">
            Discover student creations, participate in upcoming technology workshops, or visit our facility in Berhampur.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                onClick={() => onOpenEnquire && onOpenEnquire(card.title)}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-premium-card bg-[#FFFDFC] flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-champagne-200/80 text-bronze-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-bronze-500" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-mauve-deep bg-champagne-100/60 px-3 py-1 rounded-full border border-champagne-200/50">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-editorial text-plum group-hover:text-bronze-600 transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-mauve-deep mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-champagne-200/50 flex items-center justify-between text-xs sm:text-sm font-bold text-[#B77B4B] group-hover:text-plum transition-colors">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
