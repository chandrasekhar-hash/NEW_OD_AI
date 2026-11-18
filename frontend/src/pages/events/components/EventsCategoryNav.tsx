import React from 'react';
import { Sparkles, Calendar, Code2, Trophy, Video, History } from 'lucide-react';

interface EventsCategoryNavProps {
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

const NAV_ITEMS = [
  { name: 'All', filterKey: 'All', icon: Sparkles },
  { name: 'Upcoming', filterKey: 'Upcoming', icon: Calendar },
  { name: 'Workshops', filterKey: 'Workshops', icon: Code2 },
  { name: 'Hackathons', filterKey: 'Hackathons', icon: Trophy },
  { name: 'Webinars & Talks', filterKey: 'Webinars & Talks', icon: Video },
  { name: 'Past Events', filterKey: 'Past Events', icon: History },
];

export default function EventsCategoryNav({
  activeCategory,
  onSelectCategory,
}: EventsCategoryNavProps) {
  const handleClick = (filterKey: string) => {
    if (filterKey === 'Past Events') {
      const target = document.getElementById('past-events');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    onSelectCategory(filterKey);
    const target = document.getElementById('upcoming-events');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative -mt-8 sm:-mt-10 -mb-8 sm:-mb-10 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-full shadow-2xl shadow-slate-900/10 border border-slate-200/90 p-2 sm:p-2.5 px-3 sm:px-4">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isSelected =
              activeCategory === item.filterKey ||
              (item.filterKey === 'All' &&
                (activeCategory === 'All' || activeCategory === 'All Events'));

            return (
              <button
                key={item.name}
                onClick={() => handleClick(item.filterKey)}
                className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F07862] text-white shadow-md shadow-[#F07862]/30'
                    : 'text-slate-600 hover:text-[#0B2145] hover:bg-slate-50'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-white scale-110' : 'text-[#F07862]'
                  }`}
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
