import React from 'react';

export interface EventsSubNavItem {
  label: string;
  targetId: string;
  filterKey?: string;
  path?: string;
}

export const EVENTS_SUBNAV_LINKS: EventsSubNavItem[] = [
  { label: 'Overview', targetId: 'events-hero', filterKey: 'All Events', path: '/events#overview' },
  { label: 'Upcoming Events', targetId: 'upcoming-events', filterKey: 'All Events', path: '/events#upcoming' },
  { label: 'Workshops', targetId: 'upcoming-events', filterKey: 'Workshops', path: '/events#workshops' },
  { label: 'Hackathons', targetId: 'upcoming-events', filterKey: 'Hackathons', path: '/events#hackathons' },
  { label: 'Webinars & Talks', targetId: 'upcoming-events', filterKey: 'Webinars & Talks', path: '/events#webinars' },
  { label: 'Past Events', targetId: 'past-events', path: '/events#past-events' },
];

interface EventsSubNavbarProps {
  activeNav: string;
  onSelectNav: (item: EventsSubNavItem) => void;
}

export default function EventsSubNavbar({
  activeNav,
  onSelectNav,
}: EventsSubNavbarProps) {
  return (
    <div
      id="events-subnav"
      className="sticky top-[72px] sm:top-[76px] z-40 bg-[#0B2145] border-y border-[#183A6D]/80 shadow-md backdrop-blur-md transition-all duration-200 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 sm:h-14 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Left Brand Badge */}
          <div className="flex items-center gap-3 shrink-0 pr-4 border-r border-[#183A6D]/80 mr-2 sm:mr-4">
            <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-[#F07861]">
              Events
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 py-1">
            {EVENTS_SUBNAV_LINKS.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => onSelectNav(item)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#F07861] text-white font-semibold shadow-xs border border-[#F07861]/60'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
