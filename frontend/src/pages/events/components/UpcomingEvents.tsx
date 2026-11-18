import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, CalendarX, RotateCcw } from 'lucide-react';
import Events3DCarousel from './Events3DCarousel';
import { EventsFlatGrid } from './EventCard';
import { UPCOMING_EVENTS, EventItem } from '../data/eventsData';

interface UpcomingEventsProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onExploreEvent: (event: EventItem) => void;
}

const FILTER_TABS = [
  'All',
  'Upcoming',
  'Workshops',
  'Hackathons',
  'Webinars & Talks',
  'Past Events',
];

export default function UpcomingEvents({
  activeCategory,
  onSelectCategory,
  onExploreEvent,
}: UpcomingEventsProps) {
  // Filter logic
  const filteredEvents = UPCOMING_EVENTS.filter((event) => {
    if (activeCategory === 'All' || activeCategory === 'All Events' || activeCategory === 'Upcoming') {
      return true;
    }
    if (activeCategory === 'Webinars & Talks') {
      return event.category === 'Webinars & Talks' || event.isOnline === true;
    }
    return event.category === activeCategory;
  });

  const handleTabClick = (tab: string) => {
    if (tab === 'Past Events') {
      const target = document.getElementById('past-events');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    onSelectCategory(tab);
  };

  return (
    <section id="upcoming-events" className="py-20 sm:py-28 bg-[#FFFDF9] relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#E87961]" />
              <span className="text-xs font-bold tracking-widest text-[#E87961] uppercase">
                CALENDAR & OPPORTUNITIES
              </span>
              <span className="w-5 h-[1.5px] bg-[#E87961]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2145] tracking-tight">
              Upcoming Events
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-sans">
            Register for upcoming challenges, bootcamps and tech meetups. Filter by format or explore all open opportunities.
          </p>
        </div>

        {/* Filter Tabs Bar (Horizontally scrollable on mobile) */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 hidden sm:flex">
              <Filter className="w-3.5 h-3.5 text-[#E87961]" />
              Filter:
            </div>

            {FILTER_TABS.map((tab) => {
              const isSelected =
                activeCategory === tab ||
                (tab === 'All' && (activeCategory === 'All' || activeCategory === 'All Events'));

              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#E87961] text-white shadow-md shadow-[#E87961]/25 ring-2 ring-[#E87961]/20'
                      : 'bg-white text-slate-600 hover:text-[#0B2145] hover:bg-slate-50 border border-slate-200/90'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Overlapping Horizontal Carousel (>= 4 events) or Flat Card Grid (1-3 events) or Empty State */}
        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 px-6 text-center bg-white rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#FDEEEB] flex items-center justify-center mx-auto mb-4">
                <CalendarX className="w-8 h-8 text-[#E87961]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">
                No events found in this category
              </h3>
              <p className="text-sm text-slate-500 mb-6 font-sans">
                We are constantly adding new hackathons and workshops. Check back shortly or reset your filters to see all available sessions.
              </p>
              <button
                onClick={() => onSelectCategory('All Events')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2145] hover:bg-[#183A6D] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All Events</span>
              </button>
            </motion.div>
          ) : filteredEvents.length >= 4 ? (
            <motion.div
              key={`carousel-${activeCategory}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <Events3DCarousel
                events={filteredEvents}
                onExploreEvent={onExploreEvent}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <EventsFlatGrid
                events={filteredEvents}
                onExploreEvent={onExploreEvent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
