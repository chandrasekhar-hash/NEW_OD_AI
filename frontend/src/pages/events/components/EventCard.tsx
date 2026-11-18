import React from 'react';
import { Users, MapPin, Globe, ArrowRight } from 'lucide-react';
import { EventItem } from '../data/eventsData';

interface EventCardProps {
  event: EventItem;
  onExploreEvent: (event: EventItem) => void;
  className?: string;
}

export default function EventCard({
  event,
  onExploreEvent,
  className = '',
}: EventCardProps) {
  return (
    <div
      onClick={() => onExploreEvent(event)}
      className={`w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[375px] h-[480px] sm:h-[495px] lg:h-[520px] rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer ${className}`}
    >
      {/* Top Photograph Container */}
      <div className="relative h-[215px] sm:h-[245px] lg:h-[255px] w-full overflow-hidden bg-slate-900 shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              '/images/academy/student_group.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

        {/* Floating Date Badge (Coral Accent) */}
        <div className="absolute top-3.5 left-3.5 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1.5 shadow-md border border-white/60">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E87961]">
            {event.month}
          </span>
          <span className="text-base font-extrabold text-[#0B2145] leading-none">
            {event.day}
          </span>
        </div>

        {/* Floating Event-Type Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B2145]/85 backdrop-blur-md text-white border border-white/20 shadow-xs">
            {event.category}
          </span>
        </div>

        {/* Subcategory Label on Image */}
        {event.subCategory && (
          <div className="absolute bottom-3 left-3.5">
            <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white/95 border border-white/15 tracking-wide">
              {event.subCategory}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Card Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          {/* Status indicator */}
          <div className="mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#FDEEEB] text-[#E87961] border border-[#E87961]/30 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87961]" />
              {event.status || 'Sample Listing • Date TBC'}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B2145] group-hover:text-[#E87961] transition-colors leading-snug line-clamp-2 mb-2">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3 font-sans">
            {event.description}
          </p>
        </div>

        {/* Meta Info: Audience, Location & Date */}
        <div>
          <div className="pt-2.5 pb-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-600 font-sans mb-3">
            {event.audience && (
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#E87961] shrink-0" />
                <span className="text-slate-400">Audience:</span>
                <span className="font-medium text-[#0B2145] truncate">
                  {event.audience}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              {event.isOnline ? (
                <Globe className="w-3.5 h-3.5 text-[#E87961] shrink-0" />
              ) : (
                <MapPin className="w-3.5 h-3.5 text-[#E87961] shrink-0" />
              )}
              <span className="truncate text-slate-700">
                {event.location}
              </span>
            </div>
          </div>

          {/* Full-width CTA Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExploreEvent(event);
            }}
            className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#E87961] text-[#0B2145] hover:text-white border border-slate-200/90 hover:border-[#E87961] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-2xs hover:shadow-md hover:shadow-[#E87961]/25"
          >
            <span>{event.ctaText || 'Get Event Updates'}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface EventsFlatGridProps {
  events: EventItem[];
  onExploreEvent: (event: EventItem) => void;
}

export function EventsFlatGrid({
  events,
  onExploreEvent,
}: EventsFlatGridProps) {
  const count = events.length;

  return (
    <div className="w-full select-none py-6 flex justify-center">
      <div
        className={`w-full justify-items-center ${
          count === 1
            ? 'flex justify-center'
            : count === 2
            ? 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto justify-center'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto justify-center'
        }`}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`w-full flex justify-center ${
              count === 3 && index === 2
                ? 'md:col-span-2 md:justify-self-center lg:col-span-1'
                : ''
            }`}
          >
            <EventCard
              event={event}
              onExploreEvent={onExploreEvent}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
