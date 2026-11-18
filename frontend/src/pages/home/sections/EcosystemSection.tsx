import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Cpu,
  FlaskConical,
  Rocket,
  Building,
  ArrowRight,
  Check,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  MousePointer2,
} from 'lucide-react';

interface EcosystemSectionProps {
  onOpenEnquire: (program: string) => void;
}

export interface EcosystemCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  audience: string;
  ctaText: string;
  badge: string;
  accentColor: string;
  bgGradient: string;
}

// Categories definition
const CARDS: EcosystemCard[] = [
  {
    id: 'academy',
    number: '01',
    title: 'OD AI Academy',
    subtitle: 'Learn Today. Lead Tomorrow.',
    description:
      'From foundational programs to advanced artificial intelligence engineering, empowering school students, college learners, and professionals with practical tech skills.',
    icon: GraduationCap,
    highlights: [
      'School Programs (Classes 5–10)',
      'Engineering Career Mentorship (+2)',
      'College Programs (B.Tech, BCA, B.Sc, MCA)',
      'Graduate Career Accelerator',
      'Internships & Career Skills',
    ],
    audience: 'School & College Students, BCA/MCA Graduates, Career Changers',
    ctaText: 'Explore Academy →',
    badge: 'Education & Training',
    accentColor: '#AD784B',
    bgGradient: 'from-[#EBD7CB]/50 via-[#F7F1E9] to-[#FFFDFC]',
  },
  {
    id: 'technologies',
    number: '02',
    title: 'OD AI Technologies',
    subtitle: 'Build. Automate. Transform.',
    description:
      'Engineering intelligent software solutions, automated workflows, and robust cloud infrastructure to empower modern enterprises and institutions.',
    icon: Cpu,
    highlights: [
      'AI & Automation (Agents, Chatbots)',
      'Software & SaaS Development',
      'Cloud & DevOps Solutions',
      'Business Digitalization (ERP, CRM)',
      'Data & Analytics',
    ],
    audience: 'Enterprises, Startups & Organizations Seeking Modern IT Infrastructure',
    ctaText: 'Explore Technologies →',
    badge: 'Technology Development',
    accentColor: '#BE8E62',
    bgGradient: 'from-[#E8D4B5]/50 via-[#F7F1E9] to-[#FFFDFC]',
  },
  {
    id: 'innovation-lab',
    number: '03',
    title: 'OD AI Innovation Lab',
    subtitle: 'Experiment. Invent. Solve.',
    description:
      'An advanced applied R&D center driving cutting-edge prototypes, regional challenge solving, and student innovation projects across Odisha.',
    icon: FlaskConical,
    highlights: [
      'AI & Robotics Labs',
      'Prototyping & MVP Development',
      'Research & Experimentation',
      'Student Innovation Projects',
      'Hackathons & Challenges',
    ],
    audience: 'Researchers, Innovators, Academic Institutions & Student Builders',
    ctaText: 'Explore Innovation Lab →',
    badge: 'Research & Innovation',
    accentColor: '#A98791',
    bgGradient: 'from-[#D9BFC1]/50 via-[#F7F1E9] to-[#FFFDFC]',
  },
  {
    id: 'startups',
    number: '04',
    title: 'OD AI Startups',
    subtitle: 'Ideate. Launch. Scale.',
    description:
      'A comprehensive launchpad fostering entrepreneurial talent through incubation, technical MVP builds, founder mentorship, and investor connections.',
    icon: Rocket,
    highlights: [
      'Startup Incubation & Mentorship',
      'Product & Go-to-Market Support',
      'Startup Community',
      'Investor & Industry Connect (PLANNED?)',
      'Funding & Growth Guidance (PLANNED?)',
    ],
    audience: 'Aspiring Entrepreneurs, Student Founders & Early-stage Startups',
    ctaText: 'Explore Startups →',
    badge: 'Startup Incubation',
    accentColor: '#C49CA8',
    bgGradient: 'from-[#D8B6C2]/50 via-[#F7F1E9] to-[#FFFDFC]',
  },
];

export default function EcosystemSection({ onOpenEnquire }: EcosystemSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelAccumulatorRef = useRef<number>(0);
  const lastWheelTimeRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Pointer drag tracking refs
  const isPointerDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  const totalCards = CARDS.length;

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Centralized card transition trigger with 1.5s cooldown lock & bounds clamping
  const triggerCardTransition = useCallback(
    (targetIndex: number) => {
      // Strictly clamp between 0 and totalCards - 1 (no modulo wrap-around)
      const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetIndex));
      if (clampedIndex === activeIndex || isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      setIsTransitioning(true);
      setActiveIndex(clampedIndex);

      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
      // 1.5-second cooldown: ignore additional inputs while 1.6s cinematic transition is running
      cooldownTimerRef.current = setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, 1500);
    },
    [activeIndex, totalCards]
  );

  const handleNext = useCallback(() => {
    if (activeIndex < totalCards - 1 && !isTransitioningRef.current) {
      triggerCardTransition(activeIndex + 1);
    }
  }, [activeIndex, totalCards, triggerCardTransition]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0 && !isTransitioningRef.current) {
      triggerCardTransition(activeIndex - 1);
    }
  }, [activeIndex, triggerCardTransition]);

  const handleSelectCard = useCallback(
    (index: number) => {
      triggerCardTransition(index);
    },
    [triggerCardTransition]
  );

  // Scroll active panel into view smoothly on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const activePanel = panelsRef.current[activeIndex];
      if (activePanel) {
        activePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation (Arrow keys with strict bounds)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (activeIndex < totalCards - 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (activeIndex > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, handleNext, handlePrev, totalCards]);

  // Mouse wheel & trackpad bidirectional navigation with cooldown & accumulator
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only process when desktop / tablet
      if (window.innerWidth < 768) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const now = Date.now();

      // Reset accumulator if user stopped scrolling for > 400ms
      if (now - lastWheelTimeRef.current > 400) {
        wheelAccumulatorRef.current = 0;
      }
      lastWheelTimeRef.current = now;

      // Backward wheeling (delta < 0, scroll up)
      if (delta < 0) {
        if (activeIndex > 0) {
          // Trap wheel only when there are previous cards to display
          e.preventDefault();
          if (!isTransitioningRef.current) {
            wheelAccumulatorRef.current += delta;
            if (wheelAccumulatorRef.current <= -75) {
              handlePrev();
              wheelAccumulatorRef.current = 0;
            }
          }
        } else {
          // At first card (0): release wheel event to allow normal upward page scroll
          wheelAccumulatorRef.current = 0;
        }
      }
      // Forward wheeling (delta > 0, scroll down)
      else if (delta > 0) {
        if (activeIndex < totalCards - 1) {
          // Trap wheel only when there are next cards to display
          e.preventDefault();
          if (!isTransitioningRef.current) {
            wheelAccumulatorRef.current += delta;
            if (wheelAccumulatorRef.current >= 75) {
              handleNext();
              wheelAccumulatorRef.current = 0;
            }
          }
        } else {
          // At last card (totalCards - 1): release wheel event to allow normal downward page scroll
          wheelAccumulatorRef.current = 0;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeIndex, handleNext, handlePrev, totalCards]);

  // Hover preview interaction (desktop only with cooldown safety)
  const handleCardMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return;
    if (isDragging || isPointerDownRef.current) return;
    if (index === activeIndex || isTransitioningRef.current) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      if (!isTransitioningRef.current && !isPointerDownRef.current) {
        triggerCardTransition(index);
      }
    }, 200);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') && !target.closest('.accordion-panel')) {
      return;
    }

    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    hasDraggedRef.current = false;
    setIsDragging(true);

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    currentXRef.current = e.clientX;
    const diff = currentXRef.current - startXRef.current;

    if (Math.abs(diff) > 10) {
      hasDraggedRef.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);

    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // Fallback
      }
    }

    const diff = currentXRef.current - startXRef.current;
    const dragThreshold = 45;

    if (!isTransitioningRef.current) {
      if (diff < -dragThreshold) {
        handleNext();
      } else if (diff > dragThreshold) {
        handlePrev();
      }
    }

    // Reset hasDragged flag shortly after drag concludes so future clicks/taps are unblocked
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  const handlePointerCancel = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    hasDraggedRef.current = false;
  };

  return (
    <section
      id="ecosystem"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9] select-none scroll-mt-20"
    >
      {/* Background Multi-Layered Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-champagne-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-rose-dusty/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-bronze-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
              THE OD AI HUB ECOSYSTEM
            </span>
            <span className="w-6 h-[2px] bg-bronze-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#1B1519] tracking-tight"
          >
            Learn. Build. Innovate.{' '}
            <span className="font-editorial-italic text-gradient-bronze">Scale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm sm:text-base text-mauve-deep mt-3 sm:mt-4 leading-relaxed"
          >
            From learning to real-world impact, OD AI HUB brings together education, technology, innovation and business.
          </motion.p>

          {/* Interactive Mouse & Hover Guidance Cue */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softwhite/90 border border-champagne-200/80 shadow-xs text-xs font-medium text-mauve-deep"
          >
            <MousePointer2 className="w-3.5 h-3.5 text-bronze-500 animate-pulse" />
            <span>Hover panels, drag horizontally or scroll to expand</span>
          </motion.div>
        </div>

        {/* Top Category Filter Tabs (One-click jump) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 no-scrollbar mb-6 sm:mb-8"
        >
          {CARDS.map((card, idx) => {
            const isSelected = activeIndex === idx;
            const Icon = card.icon;

            return (
              <button
                key={card.id}
                onClick={() => handleSelectCard(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${isSelected
                  ? 'bg-plum text-champagne-100 shadow-md scale-105 border border-champagne-200/20'
                  : 'bg-white text-mauve-deep hover:bg-softwhite hover:text-plum border border-champagne-200/70 shadow-xs'
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-bronze-300' : 'text-mauve-deep'}`} />
                <span>{card.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ============================================================== */}
        {/* EXPANDING HORIZONTAL CARD ACCORDION CONTAINER */}
        {/* ============================================================== */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className={`w-full p-2.5 sm:p-3.5 md:p-4 rounded-3xl bg-[#F4EDE2]/80 border border-champagne-200/80 shadow-[0_20px_50px_rgba(41,29,41,0.06)] touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          role="region"
          aria-roledescription="carousel"
          aria-label="OD AI HUB Ecosystem Expanding Card Accordion"
          tabIndex={0}
        >
          <div className="flex flex-row items-stretch gap-2 sm:gap-3 md:gap-3.5 h-[560px] sm:h-[600px] md:h-[620px] w-full overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar">
            {CARDS.map((card, idx) => {
              const isExpanded = activeIndex === idx;
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    panelsRef.current[idx] = el;
                  }}
                  onMouseEnter={() => handleCardMouseEnter(idx)}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => {
                    if (!hasDraggedRef.current && !isExpanded) {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      handleSelectCard(idx);
                    }
                  }}
                  style={{
                    // Active card occupies ~60%, remaining 3 inactive cards share 40% equally (~13.3% each)
                    // On mobile: fluid responsive snap width
                    flex: isExpanded ? '6 1 0%' : '1.33 1 0%',
                    transition: shouldReduceMotion
                      ? 'none'
                      : 'flex 1600ms cubic-bezier(0.25, 1, 0.35, 1), transform 600ms ease, box-shadow 1400ms cubic-bezier(0.25, 1, 0.35, 1), border-color 1400ms cubic-bezier(0.25, 1, 0.35, 1), background-color 800ms ease',
                  }}
                  className={`accordion-panel relative rounded-2xl overflow-hidden snap-center ${isExpanded
                    ? 'w-[76vw] sm:w-auto min-w-[270px] sm:min-w-0 shrink-0 sm:shrink bg-[#FFFDFC] border border-champagne-300 shadow-[0_20px_45px_rgba(41,29,41,0.12)] cursor-default ring-1 ring-champagne-200/60'
                    : 'w-14 sm:w-auto min-w-[56px] sm:min-w-[70px] md:min-w-[85px] lg:min-w-[95px] shrink-0 sm:shrink bg-white/80 hover:bg-white/95 border border-champagne-200/70 hover:border-champagne-300 shadow-[0_4px_16px_rgba(41,29,41,0.03)] hover:shadow-[0_8px_24px_rgba(41,29,41,0.06)] cursor-pointer'
                    }`}
                >
                  {/* Category Accent Stripe along top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 z-20"
                    style={{ backgroundColor: card.accentColor }}
                  />

                  {/* ======================================================== */}
                  {/* COLLAPSED VERTICAL STRIP VIEW (when card is not expanded) */}
                  {/* ======================================================== */}
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: 'easeOut' }}
                      className="w-full h-full flex flex-col items-center justify-between py-5 sm:py-6 md:py-7 px-1 sm:px-2 relative"
                    >
                      {/* Subtle category gradient backdrop */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient} opacity-60 pointer-events-none`}
                      />

                      {/* Top: Category Number & Icon */}
                      <div className="flex flex-col items-center gap-2.5 sm:gap-3 relative z-10">
                        <span className="font-mono text-xs sm:text-sm font-extrabold text-bronze-500 tracking-wider">
                          {card.number}
                        </span>

                        <div
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300"
                          style={{
                            backgroundColor: `${card.accentColor}15`,
                            borderColor: `${card.accentColor}35`,
                            color: card.accentColor,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                        </div>
                      </div>

                      {/* Middle: Vertically oriented Title */}
                      <div className="my-auto relative z-10 flex items-center justify-center py-3">
                        <span
                          className="font-editorial text-xs sm:text-sm md:text-base font-bold text-plum tracking-wider whitespace-nowrap select-none"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                          }}
                        >
                          {card.title}
                        </span>
                      </div>

                      {/* Bottom: Accent Indicator Dot */}
                      <div className="relative z-10 flex flex-col items-center gap-1.5 pb-2">
                        <div
                          className="w-2 h-2 rounded-full transition-transform duration-300"
                          style={{ backgroundColor: card.accentColor }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ======================================================== */}
                  {/* EXPANDED FULL CONTENT VIEW (when card is active) */}
                  {/* ======================================================== */}
                  {isExpanded && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${card.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          y: -10,
                          transition: { duration: shouldReduceMotion ? 0.01 : 0.35, ease: 'easeIn' },
                        }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.4 }}
                        className="w-full h-full p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-y-auto no-scrollbar relative select-none"
                      >
                        {/* Background Ambient Radial Glow */}
                        <div
                          className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none bg-gradient-to-br ${card.bgGradient}`}
                        />

                        {/* Top Information Section */}
                        <div className="space-y-3.5 sm:space-y-4 md:space-y-5 relative z-10">
                          {/* Header Row: Stage 1 (Number + Badge) and Stage 2 (Icon with scale-up) */}
                          <div className="flex items-center justify-between">
                            {/* 1. Card number and category badge fade in */}
                            <motion.div
                              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                              transition={{
                                duration: shouldReduceMotion ? 0.01 : 0.6,
                                delay: shouldReduceMotion ? 0 : 0.1,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="flex items-center gap-2.5 sm:gap-3"
                            >
                              <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-bronze-400">
                                {card.number}
                              </span>
                              <span className="h-4 sm:h-5 w-[1px] bg-champagne-300" />
                              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-champagne-200/80 text-bronze-800">
                                {card.badge}
                              </span>
                            </motion.div>

                            {/* 2. Icon appears with a subtle scale-up */}
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: shouldReduceMotion ? 0 : 22,
                                scale: shouldReduceMotion ? 1 : 0.88,
                              }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                              transition={{
                                duration: shouldReduceMotion ? 0.01 : 0.6,
                                delay: shouldReduceMotion ? 0 : 0.2,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="p-2 sm:p-2.5 md:p-3 rounded-2xl border flex items-center justify-center shrink-0 shadow-xs"
                              style={{
                                backgroundColor: `${card.accentColor}18`,
                                borderColor: `${card.accentColor}35`,
                                color: card.accentColor,
                              }}
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.div>
                          </div>

                          {/* Title & Subtitle */}
                          <div>
                            {/* 3. Main heading rises gently from below */}
                            <motion.h3
                              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                              transition={{
                                duration: shouldReduceMotion ? 0.01 : 0.6,
                                delay: shouldReduceMotion ? 0 : 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-editorial text-plum tracking-tight"
                            >
                              {card.title}
                            </motion.h3>

                            {/* 4. Subtitle appears next */}
                            <motion.p
                              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                              transition={{
                                duration: shouldReduceMotion ? 0.01 : 0.6,
                                delay: shouldReduceMotion ? 0 : 0.4,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="text-xs sm:text-sm md:text-base font-semibold text-bronze-600 mt-0.5 sm:mt-1 font-editorial-italic"
                            >
                              {card.subtitle}
                            </motion.p>
                          </div>

                          {/* 5. Description slides upward and fades in */}
                          <motion.p
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                            transition={{
                              duration: shouldReduceMotion ? 0.01 : 0.6,
                              delay: shouldReduceMotion ? 0 : 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-xs sm:text-sm md:text-base text-mauve-deep leading-relaxed max-w-2xl"
                          >
                            {card.description}
                          </motion.p>

                          {/* 6. Feature list items appear one after another with a slight stagger */}
                          <div className="bg-[#FAF5ED] p-3.5 sm:p-4 md:p-5 rounded-2xl border border-champagne-200/80 shadow-2xs space-y-2 max-w-2xl">
                            <motion.div
                              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                              transition={{
                                duration: shouldReduceMotion ? 0.01 : 0.55,
                                delay: shouldReduceMotion ? 0 : 0.6,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-bronze-700"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-bronze-500" />
                              <span>Key Architecture & Offerings</span>
                            </motion.div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                              {card.highlights.map((item, hIdx) => (
                                <motion.div
                                  key={hIdx}
                                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -8, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                                  transition={{
                                    duration: shouldReduceMotion ? 0.01 : 0.55,
                                    delay: shouldReduceMotion ? 0 : 0.68 + hIdx * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-4 h-4 rounded-full bg-champagne-200 text-bronze-700 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                  </div>
                                  <span className="text-xs text-plum font-medium leading-snug">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 7. Audience information and CTA button appear last */}
                        <motion.div
                          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10, transition: { duration: shouldReduceMotion ? 0.01 : 0.25 } }}
                          transition={{
                            duration: shouldReduceMotion ? 0.01 : 0.6,
                            delay: shouldReduceMotion ? 0 : 1.15,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="pt-3 sm:pt-4 border-t border-champagne-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative z-10"
                        >
                          {/* Audience Badge */}
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-mauve-deep mb-1">
                              Designed For:
                            </div>
                            <div className="text-xs font-semibold text-plum bg-champagne-100/60 px-3 py-1.5 rounded-xl border border-champagne-200/60 inline-block shadow-2xs">
                              {card.audience}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (card.id === 'academy') {
                                window.location.hash = '#academy';
                              } else {
                                onOpenEnquire(card.title);
                              }
                            }}
                            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-plum hover:bg-plum-light text-champagne-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group border border-champagne-200/20 cursor-pointer shrink-0"
                          >
                            <span>{card.ctaText}</span>
                            <ArrowRight className="w-4 h-4 text-bronze-300 transition-transform group-hover:translate-x-1" />
                          </button>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* CAROUSEL CONTROLS & PAGINATION INDICATORS */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto px-4"
        >
          {/* Previous / Next Chevron Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-3 rounded-full border shadow-xs transition-all cursor-pointer ${activeIndex === 0
                ? 'opacity-35 cursor-not-allowed bg-champagne-100/40 border-champagne-200 text-mauve-deep'
                : 'bg-white hover:bg-champagne-100/80 border-champagne-200 text-plum hover:shadow-sm active:scale-95'
                }`}
              aria-label="Previous ecosystem category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-mauve-deep">
              0{activeIndex + 1} <span className="text-champagne-400">/</span> 0{totalCards}
            </span>

            <button
              onClick={handleNext}
              disabled={activeIndex === totalCards - 1}
              className={`p-3 rounded-full border shadow-xs transition-all cursor-pointer ${activeIndex === totalCards - 1
                ? 'opacity-35 cursor-not-allowed bg-champagne-100/40 border-champagne-200 text-mauve-deep'
                : 'bg-white hover:bg-champagne-100/80 border-champagne-200 text-plum hover:shadow-sm active:scale-95'
                }`}
              aria-label="Next ecosystem category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5 Pagination Dots / Indicators */}
          <div className="flex items-center gap-2">
            {CARDS.map((card, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                    ? 'w-8 bg-plum'
                    : 'w-2.5 bg-champagne-300/80 hover:bg-champagne-400'
                    }`}
                  aria-label={`Go to ${card.title}`}
                  aria-current={isActive ? 'true' : undefined}
                />
              );
            })}
          </div>

          {/* Quick Enquire Link */}
          <button
            onClick={() => onOpenEnquire(CARDS[activeIndex].title)}
            className="text-xs font-semibold text-bronze-600 hover:text-bronze-700 underline underline-offset-4 transition-colors cursor-pointer"
          >
            Enquire about {CARDS[activeIndex].title}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
