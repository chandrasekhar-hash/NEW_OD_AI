import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Code,
  Cpu,
  Palette,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  HelpCircle,
  ChevronDown,
  Layers,
  Rocket,
  Users,
  Compass,
  HeartHandshake,
  ArrowUpRight,
  Check,
  Bot,
  Lightbulb,
  FileCode,
  School,
  Presentation,
  Award,
  BookOpen,
  Target,
  Terminal,
  Building2,
  TrendingUp,
} from 'lucide-react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import Footer from '../../../components/footer/Footer';

interface AfterPlus2PageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
  onNavigateInternships?: () => void;
  onNavigateAssessment?: () => void;
}

interface SubNavItem {
  label: string;
  targetId: string;
  cardIndex?: number;
}

const ACADEMY_SUBNAV_LINKS: SubNavItem[] = [
  { label: 'Overview', targetId: 'academy-overview' },
  { label: 'School', targetId: 'school-hero' },
  { label: 'After +2', targetId: 'plus2-hero' },
  { label: 'College Programs', targetId: 'academy-mentorship', cardIndex: 1 },
  { label: 'Graduates', targetId: 'academy-paths', cardIndex: 5 },
  { label: 'Internships', targetId: 'academy-model' },
  { label: 'Skill Assessment', targetId: 'academy-path-selector' },
  { label: 'FAQ', targetId: 'plus2-faq' },
];

export default function AfterPlus2Page({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateInternships,
  onNavigateAssessment,
}: AfterPlus2PageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('After +2');
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleSubNavClick = (item: SubNavItem) => {
    setActiveNav(item.label);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000);

    if (item.label === 'After +2') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.label === 'School' && onNavigateSchool) {
      onNavigateSchool();
      return;
    }

    if (item.label === 'College Programs' && onNavigateCollege) {
      onNavigateCollege();
      return;
    }

    if (item.label === 'Graduates' && onNavigateGraduates) {
      onNavigateGraduates();
      return;
    }

    if (item.label === 'Internships' && onNavigateInternships) {
      onNavigateInternships();
      return;
    }

    if (item.label === 'Skill Assessment' && onNavigateAssessment) {
      onNavigateAssessment();
      return;
    }

    if (item.label === 'FAQ') {
      const el = document.getElementById('plus2-faq');
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        const offsetPosition = elRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      return;
    }

    // Navigating back to main Academy overview/sections
    onNavigateAcademyOverview(item.targetId, item.cardIndex);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1] text-[#321C30] selection:bg-[#FCE9DD] selection:text-[#321C30] font-sans relative overflow-x-clip pt-[80px] sm:pt-[82px]">
      {/* ============================================================== */}
      {/* ATMOSPHERIC BACKGROUND RECREATION */}
      {/* ============================================================== */}
      <AcademyAtmosphere />

      {/* ============================================================== */}
      {/* OD AI ACADEMY SECONDARY NAVIGATION BAR (SUB-NAVBAR) */}
      {/* ============================================================== */}
      <nav
        aria-label="OD AI Academy Sub Navigation"
        className="sticky top-[69px] md:top-[71px] z-30 w-full bg-[#0B2145] text-white border-b border-[#18396D]/60 shadow-[0_4px_20px_rgba(11,33,69,0.35)] backdrop-blur-md transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 sm:h-13 justify-between gap-2 overflow-x-auto no-scrollbar py-1">
            {/* Left section: Bold Golden-Yellow OD AI Academy + subtle vertical divider */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => onNavigateAcademyOverview('academy-overview')}
                className="font-editorial text-sm sm:text-base font-bold tracking-tight text-[#F4B942] select-none whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
              >
                OD AI Academy
              </button>
              <div className="w-[1px] h-4 sm:h-5 bg-white/20 mx-3 sm:mx-4 shrink-0" />
            </div>

            {/* Navigation links in exact order */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth flex-1">
              {ACADEMY_SUBNAV_LINKS.map((item) => {
                const isActive = item.label === 'After +2';
                return (
                  <button
                    key={item.label}
                    onClick={() => handleSubNavClick(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#183A6D] text-white font-semibold shadow-xs border border-[#2B5CA6]/50'
                        : 'text-[#D0DCED] hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section
        id="plus2-hero"
        className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-transparent scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BD804A]/10 border border-[#BD804A]/25 mb-6 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD804A]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#BD804A]">
                  FUTURE ENGINEERS · AFTER +2 SCIENCE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD804A]" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#321C30] tracking-tight leading-[1.08] mb-6"
            >
              Choose Engineering <br />
              <span className="italic font-normal text-[#BD804A]">With Clarity.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#66515F] max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Career mentorship for +2 Science students planning engineering, understanding the branches, getting a head start in coding and arriving at college prepared.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
            >
              <button
                onClick={() => onOpenEnquire('After +2 Science (Future Engineers)')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all group border border-[#EBC99A]/30 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#EBC99A]" />
              </button>
              <button
                onClick={() => onOpenEnquire('Book a Free Mentorship Session (After +2)')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#FFF9F2]/90 border border-[#BD804A]/40 hover:border-[#BD804A] text-[#321C30] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer backdrop-blur-xs"
              >
                <span>Book a Free Session</span>
                <Sparkles className="w-4 h-4 text-[#BD804A]" />
              </button>
            </motion.div>

            {/* 3. FEATURE STRIP (4 Items) */}
            <motion.div
              id="plus2-features"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E8DCCF] shadow-sm px-6 py-5"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 lg:divide-x divide-[#E8DCCF]/80">
                {/* Feature 1 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Career Clarity</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Informed Branch Choices</div>
                </div>

                {/* Feature 2 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Coding Head Start</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Before Year 1 Begins</div>
                </div>

                {/* Feature 3 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#D98B42]/10 flex items-center justify-center text-[#D98B42] mb-2">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Parent Counselling</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Transparent Guidance</div>
                </div>

                {/* Feature 4 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-2">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Bridge to College</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Arrive Confident &amp; Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THREE OVERVIEW CARDS */}
      {/* ============================================================== */}
      <section
        id="plus2-overview"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                PROGRAM SPECIFICATIONS
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Everything you need to know before engineering.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Transparent program logistics, verifiable learning outcomes, and genuine, pressure-free reassurance for students and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 — Program Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFFCF8] rounded-2xl p-6 sm:p-7 border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between group hover:border-[#BD804A]/60"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#BD804A]/40 to-transparent group-hover:via-[#BD804A] transition-all" />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#321C30]">Program Overview</h3>
                    <div className="text-xs text-[#BD804A] font-semibold">Cohort &amp; Schedule Details</div>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="flex items-center gap-2 text-[#BD804A] font-bold uppercase text-[11px] tracking-wider mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Who
                    </div>
                    <div className="text-[#321C30] font-medium leading-snug">
                      +2 Science students (PCM) and other interested learners
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="flex items-center gap-2 text-[#4388D5] font-bold uppercase text-[11px] tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      Duration
                    </div>
                    <div className="text-[#321C30] font-medium">TBC</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                      <div className="flex items-center gap-1.5 text-[#66515F] font-bold uppercase text-[10px] tracking-wider mb-1">
                        <Calendar className="w-3 h-3 text-[#BD804A]" />
                        Schedule
                      </div>
                      <div className="text-[#321C30] font-semibold text-xs sm:text-sm">TBC</div>
                      <div className="text-[10px] text-[#66515F]">Flexible sessions</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                      <div className="flex items-center gap-1.5 text-[#66515F] font-bold uppercase text-[10px] tracking-wider mb-1">
                        <Award className="w-3 h-3 text-[#BD804A]" />
                        Fee
                      </div>
                      <div className="text-[#321C30] font-semibold text-xs sm:text-sm">TBC</div>
                      <div className="text-[10px] text-[#66515F]">Transparent pricing</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 Science — Schedule & Cohort Details')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#321C30] text-[#321C30] hover:text-[#FFF9F2] font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-[#E8DCCF] cursor-pointer"
                >
                  <span>Request Cohort Timings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 2 — Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#FFFCF8] rounded-2xl p-6 sm:p-7 border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between group hover:border-[#4388D5]/60"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#4388D5]/40 to-transparent group-hover:via-[#4388D5] transition-all" />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#321C30]">Outcomes</h3>
                    <div className="text-xs text-[#4388D5] font-semibold">Real Skills Students Take Away</div>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      An informed branch and college decision
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Coding basics before Year 1
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      A first project to show
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      A stronger start to engineering
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 Science — Learning Outcomes & Syllabus')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#321C30] text-[#321C30] hover:text-[#FFF9F2] font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-[#E8DCCF] cursor-pointer"
                >
                  <span>Explore Syllabus Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Card 3 — For Parents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#FFFCF8] rounded-2xl p-6 sm:p-7 border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between group hover:border-[#10B981]/60"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent group-hover:via-[#10B981] transition-all" />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#321C30]">For Parents</h3>
                    <div className="text-xs text-[#10B981] font-semibold">Honest Mentorship &amp; Guidance</div>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Honest guidance — no admission guarantees
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Transparent fees
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Separate parent sessions
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Clear explanation of career options
                    </span>
                  </li>

                  <li className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[#321C30] font-medium leading-relaxed">
                      Works alongside entrance preparation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 Science — Parent Career Consultation')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#321C30] text-[#321C30] hover:text-[#FFF9F2] font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-[#E8DCCF] cursor-pointer"
                >
                  <span>Book Parent Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PROGRAM STRUCTURE (THREE COLORED CARDS) */}
      {/* ============================================================== */}
      <section
        id="plus2-structure"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                PROGRAM STRUCTURE
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Three interconnected pillars for engineering success.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Designed to help students make the right branch decision, gain computing fluency, and build habits that ensure a top start in engineering college.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Career Clarity */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-7 bg-gradient-to-b from-[#EFF6FF] via-[#FFFFFF] to-[#FFFFFF] border-2 border-[#93C5FD] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group hover:border-[#3B82F6]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/30 text-[#1D4ED8] text-xs font-bold tracking-wide">
                    Branch &amp; College Clarity
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-[#2563EB]">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1E3A8A] mb-2">Career Clarity</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium mb-6">
                  Clear, unbiased mentorship on engineering disciplines, industry demands, and realistic college selection.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#BFDBFE]">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Engineering branches explained</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#BFDBFE]">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Careers in software and core fields</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#BFDBFE]">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">How to evaluate colleges</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#BFDBFE]">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Parent counselling sessions</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#BFDBFE]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 — Career Clarity Module')}
                  className="w-full py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer group-hover:shadow-md"
                >
                  <span>Enquire for Career Clarity</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: Head Start */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-7 bg-gradient-to-b from-[#FFF7ED] via-[#FFFFFF] to-[#FFFFFF] border-2 border-[#FDBA74] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group hover:border-[#EA580C]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#C2410C] text-xs font-bold tracking-wide">
                    Technical Foundations
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C]">
                    <Code className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#7C2D12] mb-2">Head Start</h3>
                <p className="text-xs sm:text-sm text-[#78350F] font-medium mb-6">
                  Build strong computational thinking, mathematical intuition, and core coding skills before college Day 1.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FED7AA]">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Programming fundamentals</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FED7AA]">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Maths for computing</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FED7AA]">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Problem-solving practice</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FED7AA]">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">AI fundamentals</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#FED7AA]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 — Head Start Technical Module')}
                  className="w-full py-3 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer group-hover:shadow-md"
                >
                  <span>Enquire for Head Start</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Card 3: Bridge to College */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl p-7 bg-gradient-to-b from-[#FEFCE8] via-[#FFFFFF] to-[#FFFFFF] border-2 border-[#FDE047] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group hover:border-[#CA8A04]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#CA8A04]/15 border border-[#CA8A04]/30 text-[#854D0E] text-xs font-bold tracking-wide">
                    College Transition
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#CA8A04]/10 flex items-center justify-center text-[#CA8A04]">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#713F12] mb-2">Bridge to College</h3>
                <p className="text-xs sm:text-sm text-[#713F12]/80 font-medium mb-6">
                  Set up developer habits, build your very first working project, and step into university standing out.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FEF08A]">
                    <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Study and project habits</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FEF08A]">
                    <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Intro to data and Linux</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FEF08A]">
                    <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">First portfolio project</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#FEF08A]">
                    <div className="w-2 h-2 rounded-full bg-[#CA8A04] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">Pathway into weekend mentorship</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#FEF08A]/60">
                <button
                  onClick={() => onOpenEnquire('After +2 — Bridge to College Module')}
                  className="w-full py-3 rounded-xl bg-[#713F12] hover:bg-[#854D0E] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer group-hover:shadow-md"
                >
                  <span>Enquire for Bridge to College</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section
        id="plus2-faq"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Honest answers for students &amp; families.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Transparent, genuine answers to important questions about engineering branch selection, coaching, and career trajectories.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] overflow-hidden shadow-2xs transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF9F2] transition-colors"
              >
                <span className="font-serif text-base sm:text-lg font-bold text-[#321C30]">
                  Do you help with college admissions?
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    openFaq === 0
                      ? 'bg-[#BD804A] text-white border-[#BD804A]'
                      : 'bg-[#FFF9F2] text-[#BD804A] border-[#E8DCCF]'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openFaq === 0 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#E8DCCF]/60 pt-4">
                      We provide honest, unbiased career guidance and help students and families understand different engineering branches, curricula, and career prospects. We do not provide admission quotas, backdoor entries, or guaranteed placement into specific colleges.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] overflow-hidden shadow-2xs transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF9F2] transition-colors"
              >
                <span className="font-serif text-base sm:text-lg font-bold text-[#321C30]">
                  Is this entrance-exam coaching?
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    openFaq === 1
                      ? 'bg-[#BD804A] text-white border-[#BD804A]'
                      : 'bg-[#FFF9F2] text-[#BD804A] border-[#E8DCCF]'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openFaq === 1 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#E8DCCF]/60 pt-4">
                      No. This program does not replace or duplicate JEE, OJEE, or entrance exam coaching. Instead, it runs alongside preparation to provide real clarity on engineering branches, practical computing foundations, and a smooth transition into Year 1.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] overflow-hidden shadow-2xs transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF9F2] transition-colors"
              >
                <span className="font-serif text-base sm:text-lg font-bold text-[#321C30]">
                  What happens after +2?
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    openFaq === 2
                      ? 'bg-[#BD804A] text-white border-[#BD804A]'
                      : 'bg-[#FFF9F2] text-[#BD804A] border-[#E8DCCF]'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openFaq === 2 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openFaq === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#E8DCCF]/60 pt-4">
                      Students who complete the After +2 program enter their engineering degree with confidence, foundational coding skills, and direct eligibility to continue into our College Programs and weekend mentorship tracks throughout their B.Tech/B.E. degrees.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. CLOSING CTA */}
      {/* ============================================================== */}
      <section
        id="plus2-cta"
        className="py-16 sm:py-24 relative z-10 scroll-mt-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0B2145] text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-[#2B5CA6]/40"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F4B942]/20 via-[#4388D5]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-[#4388D5]/20 via-[#F4B942]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#F4B942]">
                  START WITH A CONVERSATION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
                Start With a Conversation.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#D0DCED] mb-8 leading-relaxed">
                Talk to our team about the right starting point.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenEnquire('After +2 Science (Future Engineers)')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#FFC95C] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer group"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onOpenEnquire('Book a Free Mentorship Session (After +2)')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <span>Book a Free Session</span>
                  <Sparkles className="w-4 h-4 text-[#F4B942]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FOOTER */}
      {/* ============================================================== */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
