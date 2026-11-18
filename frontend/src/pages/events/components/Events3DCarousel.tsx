import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  MapPin,
  Globe,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { EventItem } from '../data/eventsData';

interface Events3DCarouselProps {
  events: EventItem[];
  onExploreEvent: (event: EventItem) => void;
}

export default function Events3DCarousel({
  events,
  onExploreEvent,
}: Events3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const lastWheelTime = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);

  // Track window resize for responsive 3D spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clamp activeIndex whenever events array changes
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, events.length - 1)));
  }, [events.length]);

  const total = events.length;

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Trackpad / Mouse wheel horizontal scroll navigation
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 260) return;

    if (Math.abs(e.deltaX) > 22) {
      if (e.deltaX > 0) handleNext();
      else handlePrev();
      lastWheelTime.current = now;
    } else if (Math.abs(e.deltaY) > 35 && Math.abs(e.deltaX) < 15) {
      if (e.deltaY > 0) handleNext();
      else handlePrev();
      lastWheelTime.current = now;
    }
  };

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    // Elastic drag clamping
    const clamped = Math.max(-140, Math.min(140, diff));
    setDragOffset(clamped);
  };

  const handlePointerEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -42) {
      handleNext();
    } else if (dragOffset > 42) {
      handlePrev();
    }
    setDragOffset(0);
  };

  if (total === 0) return null;

  // Responsive breakpoints
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const getCardLayout = (index: number) => {
    let diff = index - activeIndex;

    // Circular wrapping when 4 or more events exist
    if (total >= 4) {
      const half = Math.floor(total / 2);
      while (diff > half) diff -= total;
      while (diff < -half) diff += total;
    }

    if (isMobile) {
      const spacing = 130;
      if (diff === 0) {
        return {
          x: dragOffset,
          scale: 1,
          rotateY: -dragOffset * 0.08,
          zIndex: 30,
          opacity: 1,
          overlayOpacity: 0,
          isCenter: true,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === 1) {
        return {
          x: spacing + dragOffset * 0.6,
          scale: 0.86,
          rotateY: -16,
          zIndex: 20,
          opacity: 0.72,
          overlayOpacity: 0.2,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === -1) {
        return {
          x: -spacing + dragOffset * 0.6,
          scale: 0.86,
          rotateY: 16,
          zIndex: 20,
          opacity: 0.72,
          overlayOpacity: 0.2,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      return {
        x: diff > 0 ? 300 : -300,
        scale: 0.7,
        rotateY: diff > 0 ? -30 : 30,
        zIndex: 5,
        opacity: 0,
        overlayOpacity: 0.6,
        isCenter: false,
        pointerEvents: 'none' as const,
      };
    }

    if (isTablet) {
      const spacing = 200;
      const secondSpacing = 360;
      if (diff === 0) {
        return {
          x: dragOffset,
          scale: 1.02,
          rotateY: -dragOffset * 0.06,
          zIndex: 30,
          opacity: 1,
          overlayOpacity: 0,
          isCenter: true,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === 1) {
        return {
          x: spacing + dragOffset * 0.7,
          scale: 0.88,
          rotateY: -20,
          zIndex: 20,
          opacity: 0.86,
          overlayOpacity: 0.16,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === -1) {
        return {
          x: -spacing + dragOffset * 0.7,
          scale: 0.88,
          rotateY: 20,
          zIndex: 20,
          opacity: 0.86,
          overlayOpacity: 0.16,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === 2) {
        return {
          x: secondSpacing + dragOffset * 0.4,
          scale: 0.74,
          rotateY: -32,
          zIndex: 10,
          opacity: 0.48,
          overlayOpacity: 0.35,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === -2) {
        return {
          x: -secondSpacing + dragOffset * 0.4,
          scale: 0.74,
          rotateY: 32,
          zIndex: 10,
          opacity: 0.48,
          overlayOpacity: 0.35,
          isCenter: false,
          pointerEvents: 'auto' as const,
        };
      }
      return {
        x: diff > 0 ? 520 : -520,
        scale: 0.6,
        rotateY: diff > 0 ? -40 : 40,
        zIndex: 5,
        opacity: 0,
        overlayOpacity: 0.6,
        isCenter: false,
        pointerEvents: 'none' as const,
      };
    }

    // Desktop
    const spacing = 280;
    const secondSpacing = 510;

    if (diff === 0) {
      return {
        x: dragOffset,
        scale: 1.04,
        rotateY: -dragOffset * 0.05,
        zIndex: 30,
        opacity: 1,
        overlayOpacity: 0,
        isCenter: true,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 1) {
      return {
        x: spacing + dragOffset * 0.7,
        scale: 0.88,
        rotateY: -22,
        zIndex: 20,
        opacity: 0.88,
        overlayOpacity: 0.14,
        isCenter: false,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -1) {
      return {
        x: -spacing + dragOffset * 0.7,
        scale: 0.88,
        rotateY: 22,
        zIndex: 20,
        opacity: 0.88,
        overlayOpacity: 0.14,
        isCenter: false,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 2) {
      return {
        x: secondSpacing + dragOffset * 0.4,
        scale: 0.74,
        rotateY: -35,
        zIndex: 10,
        opacity: 0.55,
        overlayOpacity: 0.32,
        isCenter: false,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -2) {
      return {
        x: -secondSpacing + dragOffset * 0.4,
        scale: 0.74,
        rotateY: 35,
        zIndex: 10,
        opacity: 0.55,
        overlayOpacity: 0.32,
        isCenter: false,
        pointerEvents: 'auto' as const,
      };
    }

    return {
      x: diff > 0 ? 700 : -700,
      scale: 0.6,
      rotateY: diff > 0 ? -45 : 45,
      zIndex: 5,
      opacity: 0,
      overlayOpacity: 0.6,
      isCenter: false,
      pointerEvents: 'none' as const,
    };
  };

  return (
    <div className="relative w-full select-none py-6">
      {/* 3D Perspective Stage */}
      <div
        ref={stageRef}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
        className="relative w-full h-[510px] sm:h-[540px] lg:h-[570px] flex items-center justify-center overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1400px',
          perspectiveOrigin: 'center 45%',
        }}
      >
        {/* Soft Ambient Depth Glow behind Active Card */}
        <div className="absolute w-[440px] h-[440px] rounded-full bg-[#E87961]/10 blur-[100px] pointer-events-none" />

        {/* Carousel Cards */}
        {events.map((event, index) => {
          const layout = getCardLayout(index);

          return (
            <motion.div
              key={event.id}
              onClick={() => {
                if (!layout.isCenter) {
                  setActiveIndex(index);
                }
              }}
              animate={{
                x: layout.x,
                scale: layout.scale,
                rotateY: layout.rotateY,
                opacity: layout.opacity,
                zIndex: layout.zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 28,
                mass: 0.9,
              }}
              style={{
                pointerEvents: layout.pointerEvents,
                transformStyle: 'preserve-3d',
              }}
              className="absolute w-[285px] sm:w-[330px] lg:w-[365px] h-[480px] sm:h-[495px] lg:h-[520px] rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl flex flex-col group cursor-pointer transition-shadow"
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
                      Sample Listing • Date TBC
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

              {/* Inactive Card Depth Dimming Overlay */}
              {!layout.isCenter && (
                <div
                  className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px] transition-opacity duration-300 pointer-events-none"
                  style={{ opacity: layout.overlayOpacity }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Floating Side Arrow Controls (Desktop / Tablet) */}
        <button
          onClick={handlePrev}
          aria-label="Previous event"
          className="hidden sm:flex absolute left-4 lg:left-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#E87961] text-[#0B2145] hover:text-white shadow-lg shadow-slate-900/10 border border-slate-200/90 hover:border-[#E87961] transition-all items-center justify-center cursor-pointer backdrop-blur-sm transform hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next event"
          className="hidden sm:flex absolute right-4 lg:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#E87961] text-[#0B2145] hover:text-white shadow-lg shadow-slate-900/10 border border-slate-200/90 hover:border-[#E87961] transition-all items-center justify-center cursor-pointer backdrop-blur-sm transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Control Dock: Counter, Pagination Dots & Instructions */}
      <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:mt-6">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/80 shadow-xs">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-[#0B2145] hover:text-[#E87961] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Interactive Pagination Dots */}
          <div className="flex items-center gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Jump to event ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  i === activeIndex
                    ? 'w-7 h-2 bg-[#E87961] shadow-xs shadow-[#E87961]/40'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Counter Indicator */}
          <div className="text-xs font-semibold text-[#0B2145] pl-1 font-sans">
            <span className="text-[#E87961]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>{' '}
            <span className="text-slate-400">/</span>{' '}
            <span className="text-slate-500">
              {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-[#0B2145] hover:text-[#E87961] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle Guidance Hint */}
        <p className="text-xs text-slate-500 flex items-center gap-1.5 font-sans">
          <span>Swipe, drag or use</span>
          <kbd className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600 shadow-2xs">
            ←
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600 shadow-2xs">
            →
          </kbd>
          <span>to explore</span>
        </p>
      </div>
    </div>
  );
}
