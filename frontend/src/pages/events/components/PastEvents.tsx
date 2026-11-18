import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { PAST_EVENTS, PastEventHighlight } from '../data/eventsData';

interface PastEventsProps {
  onViewAllPast: () => void;
  onSelectPastEvent: (event: PastEventHighlight) => void;
}

export default function PastEvents({
  onViewAllPast,
  onSelectPastEvent,
}: PastEventsProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#07152B] text-white relative z-10 overflow-hidden border-t border-[#183A6D]/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E87961]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F4B942]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
                THE OD AI HUB EXPERIENCE
              </span>
              <span className="w-5 h-[1.5px] bg-[#F4B942]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Past Events & Highlights
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md font-sans">
            A look back at some of the meaningful experiences and events hosted by our community across Odisha.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PAST_EVENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => onSelectPastEvent(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-slate-900 border border-white/10 shadow-lg cursor-pointer flex flex-col justify-end p-5 transition-all duration-300 hover:border-[#E87961]/60 hover:shadow-xl hover:shadow-[#E87961]/10"
            >
              {/* Background Photograph */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-[#07152B]/60 to-transparent transition-opacity duration-300 group-hover:via-[#07152B]/75" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B2145]/90 backdrop-blur-md text-[#F4B942] border border-white/15">
                  {item.category}
                </span>
                <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#E87961] transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#E87961]/25 text-[#E87961] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#E87961]/30">
                  <Sparkles className="w-3 h-3" />
                  {item.metric}
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F4B942] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Past Events Link */}
        <div className="text-center pt-2">
          <button
            onClick={onViewAllPast}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-sm font-semibold transition-all cursor-pointer backdrop-blur-xs group"
          >
            <span>View All Past Events Archive</span>
            <ExternalLink className="w-4 h-4 text-[#E87961] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
