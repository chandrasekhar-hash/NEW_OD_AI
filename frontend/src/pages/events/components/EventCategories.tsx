import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Video, Users, ArrowUpRight } from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/eventsData';

interface EventCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Workshops: Code2,
  Hackathons: Trophy,
  'Webinars & Talks': Video,
  Conferences: Users,
};

export default function EventCategories({ onSelectCategory }: EventCategoriesProps) {
  const handleCardClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    const target = document.getElementById('upcoming-events');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/70 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#E87961]" />
            <span className="text-xs font-bold tracking-widest text-[#E87961] uppercase">
              EXPERIENCE FORMATS
            </span>
            <span className="w-5 h-[1.5px] bg-[#E87961]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2145] tracking-tight mb-3">
            Explore Event Categories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans">
            Choose the format that fits your learning journey, problem-solving interests and growth goals.
          </p>
        </div>

        {/* Responsive Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EVENT_CATEGORIES.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.name] || Trophy;

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => handleCardClick(category.name)}
                className="event-card-hover group flex flex-col items-start p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#E87961]/40 text-left transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Top Corner Subtle Arrow */}
                <div className="absolute top-4 right-4 text-slate-300 group-hover:text-[#E87961] transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#FDEEEB] group-hover:bg-[#E87961] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-[#E87961] group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#0B2145] group-hover:text-[#E87961] transition-colors mb-2">
                  {category.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {category.tagline}
                </p>

                {/* Event Count Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-xs text-slate-400">
                  <span>{category.count} Upcoming Sessions</span>
                  <span className="font-semibold text-[#E87961] opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
