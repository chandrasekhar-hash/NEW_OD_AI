import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { FEATURED_EVENT, EventItem } from '../data/eventsData';

interface FeaturedEventProps {
  onExplore: (event: EventItem) => void;
}

export default function FeaturedEvent({ onExplore }: FeaturedEventProps) {
  const event = FEATURED_EVENT;

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#E87961]" />
            <span className="text-xs font-bold tracking-widest text-[#E87961] uppercase">
              FEATURED EVENT
            </span>
            <span className="w-5 h-[1.5px] bg-[#E87961]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2145] tracking-tight mb-4">
            The Next Big Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans">
            A flagship event bringing together learners, builders and innovators from across Odisha.
          </p>
        </div>

        {/* Large Flagship Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Photograph (5 cols on lg) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-slate-900 overflow-hidden group">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

            {/* Top Left Coral Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E87961] text-white shadow-md shadow-[#E87961]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Sample Listing • Date TBC
              </span>
            </div>

            {/* Bottom Overlay Info on Image */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="inline-block px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs font-medium text-amber-300 border border-white/10 mb-2">
                {event.time}
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                Odisha's Hands-on AI Workshop
              </h4>
            </div>
          </div>

          {/* Right Column: Event Info (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDEEEB] text-[#E87961] border border-[#E87961]/30">
                  <span className="w-2 h-2 rounded-full bg-[#E87961] animate-ping" />
                  {event.status}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Audience: <span className="text-[#0B2145] font-semibold">{event.audience}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2145] leading-tight mb-3">
                {event.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {event.description}
              </p>

              {/* 4 Metadata Points Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#E87961]" /> Date
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B2145]">{event.date}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E87961]" /> Location
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B2145]">{event.location}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#E87961]" /> Team Size
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B2145]">{event.teamSize}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E87961]" /> Duration
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B2145]">{event.time || 'Schedule TBC'}</div>
                </div>
              </div>

              {/* Key Highlights */}
              {event.highlights && (
                <div className="space-y-2 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    What to Expect:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#E87961] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onExplore(event)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2145] hover:bg-[#183A6D] text-white font-semibold text-sm shadow-md transition-all cursor-pointer group"
              >
                <span>{event.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#E87961] group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-slate-500 italic">
                * Sample listing. Dates & registration details to be confirmed.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
