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
  Database,
  Cloud,
  Network,
  Binary,
  Lock,
  Workflow,
  LineChart,
  Briefcase,
  Play,
  Monitor,
} from 'lucide-react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import Footer from '../../../components/footer/Footer';

interface CollegePageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
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
  { label: 'College Programs', targetId: 'college-hero' },
  { label: 'Graduates', targetId: 'academy-paths', cardIndex: 5 },
  { label: 'Internships', targetId: 'college-opportunities' },
  { label: 'Skill Assessment', targetId: 'college-selector' },
  { label: 'FAQ', targetId: 'college-faq' },
];

export default function CollegePage({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateGraduates,
  onNavigateInternships,
  onNavigateAssessment,
}: CollegePageProps) {
  const [selectedDegree, setSelectedDegree] = useState('B.Tech');
  const [selectedYear, setSelectedYear] = useState('2nd Year');
  const [selectedProgramCard, setSelectedProgramCard] = useState('btech');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('College Programs');
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

    if (item.label === 'College Programs') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.label === 'School' && onNavigateSchool) {
      onNavigateSchool();
      return;
    }

    if (item.label === 'After +2' && onNavigateAfterPlus2) {
      onNavigateAfterPlus2();
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

    if (item.label === 'FAQ' || item.label === 'Skill Assessment') {
      const el = document.getElementById(item.targetId);
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        const offsetPosition = elRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        return;
      }
    }

    // Navigating back to main Academy overview/sections
    onNavigateAcademyOverview(item.targetId, item.cardIndex);
  };

  // Dynamic recommendations for Find Your Learning Path panel
  const getPersonalisedPlan = (degree: string, year: string) => {
    if (year === '1st Year') {
      return {
        focus: 'Foundational Programming & Problem Solving',
        subtitle: 'Build unshakeable core computational habits, clean syntax, and logic skills.',
        modules: ['Python & C++ Fundamentals', 'Data Structures & Algorithms', 'Git & GitHub Workflow', 'Computational Mathematics'],
        weekly: '4 hrs/week cohort + 2 hrs hands-on lab',
        targetMilestone: 'Your first terminal app & GitHub portfolio setup',
      };
    }
    if (year === '2nd Year') {
      return {
        focus: 'Full-Stack Software Engineering & Databases',
        subtitle: 'Create production-ready web apps and master APIs and relational & vector data.',
        modules: ['Frontend Architecture (React/Next.js)', 'Backend Services & REST APIs', 'PostgreSQL & Vector Databases', 'Cloud Basics & Deployment'],
        weekly: '4 hrs/week cohort + 3 hrs project squad',
        targetMilestone: '2 deployed full-stack web applications with live users',
      };
    }
    if (year === '3rd Year') {
      return {
        focus: 'Applied Machine Learning & Distributed Systems',
        subtitle: 'Build predictive ML pipelines, explore LLM integrations, and engineer microservices.',
        modules: ['Machine Learning & Deep Learning', 'Generative AI, RAG & LLMs', 'Docker, CI/CD & DevOps', 'Enterprise System Design'],
        weekly: '4 hrs/week cohort + 4 hrs internship project',
        targetMilestone: 'Production AI capstone + verifiable industry project credential',
      };
    }
    return {
      focus: 'Autonomous AI Agents & Placement Acceleration',
      subtitle: 'Build complex agentic workflows, prepare capstone portfolios, and crack tech interviews.',
      modules: ['Autonomous Multi-Agent Systems', 'Comprehensive Capstone Engineering', 'System Design & DSA Mock Rounds', 'Resume, Portfolio & Partner Referrals'],
      weekly: '4 hrs/week cohort + intensive interview prep',
      targetMilestone: 'Final capstone demonstration + placement ready interview portfolio',
    };
  };

  const currentPlan = getPersonalisedPlan(selectedDegree, selectedYear);

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
                const isActive = item.label === 'College Programs';
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
        id="college-hero"
        className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-transparent scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb & Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BD804A]/10 border border-[#BD804A]/25 mb-6 backdrop-blur-xs">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#BD804A]">
                  Academy
                </span>
                <span className="text-xs text-[#BD804A]/60">→</span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#BD804A]">
                  College Programs
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#321C30] tracking-tight leading-[1.08] mb-6"
            >
              Turn Your College Years Into a <br />
              <span className="italic font-normal text-[#BD804A]">Career Launchpad.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#66515F] max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Your college provides the degree. We help you build industry skills, hands-on experience, industry mentorship and real-world projects, AI skills and career preparation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('college-programs-list');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all group border border-[#EBC99A]/30 cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#EBC99A]" />
              </button>
              <button
                onClick={() => onOpenEnquire('College Programs — Free Info Session')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#FFF9F2]/90 border border-[#BD804A]/40 hover:border-[#BD804A] text-[#321C30] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer backdrop-blur-xs"
              >
                <Play className="w-4 h-4 text-[#BD804A] fill-[#BD804A]" />
                <span>Watch How It Works</span>
              </button>
            </motion.div>

            {/* Floating Horizontal Benefits Strip (5 items) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E8DCCF] shadow-sm px-6 py-5"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center divide-y sm:divide-y-0 lg:divide-x divide-[#E8DCCF]/80">
                {/* Benefit 1 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#321C30]">Year-wise Path</div>
                  <div className="text-[11px] text-[#66515F]">Structured progression</div>
                </div>

                {/* Benefit 2 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#321C30]">Industry Mentors</div>
                  <div className="text-[11px] text-[#66515F]">Practicing tech leads</div>
                </div>

                {/* Benefit 3 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#D98B42]/10 flex items-center justify-center text-[#D98B42] mb-2">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#321C30]">Real Projects</div>
                  <div className="text-[11px] text-[#66515F]">Live code portfolio</div>
                </div>

                {/* Benefit 4 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#8A67C7]/10 flex items-center justify-center text-[#8A67C7] mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#321C30]">AI-First Focus</div>
                  <div className="text-[11px] text-[#66515F]">Generative &amp; agents</div>
                </div>

                {/* Benefit 5 */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center col-span-2 sm:col-span-1">
                  <div className="w-9 h-9 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-2">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#321C30]">Internships</div>
                  <div className="text-[11px] text-[#66515F]">Career acceleration</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PROGRAM SELECTION (TWO PATHWAY CARDS) */}
      {/* ============================================================== */}
      <section
        id="college-pathways"
        className="py-10 sm:py-14 relative z-10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pathway Card 1: Currently in College */}
            <div className="bg-[#FFFCF8] rounded-2xl p-6 sm:p-7 border-2 border-[#4388D5]/40 shadow-xs hover:shadow-md transition-all relative overflow-hidden group hover:border-[#4388D5]">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#4388D5]/10 text-[#2563EB] text-xs font-bold tracking-wide">
                  Undergraduate &amp; Postgraduate
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-2">Currently in College</h3>
              <p className="text-xs sm:text-sm text-[#66515F] mb-6 leading-relaxed">
                Structured multi-year tracks running in parallel with your degree, weekend cohort sessions, and real-world projects.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('college-programs-list');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#4388D5] hover:bg-[#2563EB] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View College Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pathway Card 2: Already Graduated */}
            <div className="bg-[#FFFCF8] rounded-2xl p-6 sm:p-7 border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all relative overflow-hidden group hover:border-[#BD804A]">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#BD804A]/10 text-[#BD804A] text-xs font-bold tracking-wide">
                  Degree Completed
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A]">
                  <Rocket className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-2">Already Graduated</h3>
              <p className="text-xs sm:text-sm text-[#66515F] mb-6 leading-relaxed">
                Fast-track career accelerator for graduates seeking placement readiness, production portfolio, and mock interviews.
              </p>

              <button
                onClick={() => onNavigateGraduates ? onNavigateGraduates() : onNavigateAcademyOverview('academy-paths', 5)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View Graduate Tracks</span>
                <ArrowRight className="w-4 h-4 text-[#F4B942]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CHOOSE YOUR COLLEGE PROGRAM (FIVE COLORFUL PROGRAM CARDS) */}
      {/* ============================================================== */}
      <section
        id="college-programs-list"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                ACADEMIC DEGREE TRACKS
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Choose Your College Program
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Carefully engineered specialization tracks designed around your exact university syllabus and future engineering careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Program 1: B.Tech Programs */}
            <div
              onClick={() => setSelectedProgramCard('btech')}
              className={`rounded-3xl p-7 bg-[#FFFCF8] border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                selectedProgramCard === 'btech'
                  ? 'border-[#4388D5] shadow-lg ring-2 ring-[#4388D5]/20'
                  : 'border-[#E8DCCF] hover:border-[#4388D5]/60 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#4388D5]/10 text-[#2563EB] text-xs font-bold">
                    4 Years • Engineering
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5]">
                    <Code className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1E3A8A] mb-2">B.Tech Programs</h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-5 leading-relaxed">
                  Deep software engineering, production AI/ML, cloud architecture, and end-to-end capstone software products.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#4388D5]">Core Modules</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['C++ & Python', 'React & Node.js', 'PyTorch / ML', 'Cloud DevOps', 'System Design'].map((mod) => (
                      <span key={mod} className="px-2.5 py-1 rounded-md bg-[#F2F7FD] text-[11px] font-medium text-[#1E3A8A]">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire('College Track — B.Tech Programs');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Select B.Tech Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Program 2: BCA Program */}
            <div
              onClick={() => setSelectedProgramCard('bca')}
              className={`rounded-3xl p-7 bg-[#FFFCF8] border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                selectedProgramCard === 'bca'
                  ? 'border-[#D98B42] shadow-lg ring-2 ring-[#D98B42]/20'
                  : 'border-[#E8DCCF] hover:border-[#D98B42]/60 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#D98B42]/10 text-[#C2410C] text-xs font-bold">
                    3 Years • Computing
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#D98B42]/10 flex items-center justify-center text-[#D98B42]">
                    <Monitor className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#7C2D12] mb-2">BCA Program</h3>
                <p className="text-xs sm:text-sm text-[#78350F] mb-5 leading-relaxed">
                  Practical web applications, enterprise databases, modern JavaScript/TypeScript, and applied AI tools.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D98B42]">Core Modules</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Modern Web Apps', 'PostgreSQL & MongoDB', 'API Architecture', 'Python for AI', 'App Deployment'].map((mod) => (
                      <span key={mod} className="px-2.5 py-1 rounded-md bg-[#FFF7ED] text-[11px] font-medium text-[#7C2D12]">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire('College Track — BCA Program');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Select BCA Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Program 3: B.Sc (CS/IT) Program */}
            <div
              onClick={() => setSelectedProgramCard('bsc')}
              className={`rounded-3xl p-7 bg-[#FFFCF8] border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                selectedProgramCard === 'bsc'
                  ? 'border-[#10B981] shadow-lg ring-2 ring-[#10B981]/20'
                  : 'border-[#E8DCCF] hover:border-[#10B981]/60 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#047857] text-xs font-bold">
                    3 Years • Science
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                    <Database className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#064E3B] mb-2">B.Sc (CS/IT) Program</h3>
                <p className="text-xs sm:text-sm text-[#065F46] mb-5 leading-relaxed">
                  Algorithmic foundations, computational mathematics, Python data science libraries, and analytics pipelines.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#10B981]">Core Modules</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Algorithms & Math', 'Data Analysis (Pandas)', 'Machine Learning', 'SQL & Cloud DBs', 'Research Projects'].map((mod) => (
                      <span key={mod} className="px-2.5 py-1 rounded-md bg-[#ECFDF5] text-[11px] font-medium text-[#064E3B]">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire('College Track — B.Sc (CS/IT) Program');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Select B.Sc Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Program 4: MCA Program */}
            <div
              onClick={() => setSelectedProgramCard('mca')}
              className={`rounded-3xl p-7 bg-[#FFFCF8] border-2 transition-all cursor-pointer flex flex-col justify-between group ${
                selectedProgramCard === 'mca'
                  ? 'border-[#8A67C7] shadow-lg ring-2 ring-[#8A67C7]/20'
                  : 'border-[#E8DCCF] hover:border-[#8A67C7]/60 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#8A67C7]/15 text-[#6D28D9] text-xs font-bold">
                    2 Years • Post-Graduate
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#8A67C7]/10 flex items-center justify-center text-[#8A67C7]">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#4C1D95] mb-2">MCA Program</h3>
                <p className="text-xs sm:text-sm text-[#5B21B6] mb-5 leading-relaxed">
                  Advanced enterprise architectures, AI agents, production pipelines, microservices, and leadership capstones.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A67C7]">Core Modules</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Autonomous AI Agents', 'Distributed Microservices', 'Kubernetes & CI/CD', 'System Design', 'Enterprise Capstone'].map((mod) => (
                      <span key={mod} className="px-2.5 py-1 rounded-md bg-[#F5F3FF] text-[11px] font-medium text-[#4C1D95]">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire('College Track — MCA Program');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#4C1D95] hover:bg-[#6D28D9] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Select MCA Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Program 5: Other Degree Programs */}
            <div
              onClick={() => setSelectedProgramCard('other')}
              className={`rounded-3xl p-7 bg-[#FFFCF8] border-2 transition-all cursor-pointer flex flex-col justify-between group md:col-span-2 lg:col-span-1 ${
                selectedProgramCard === 'other'
                  ? 'border-[#BD804A] shadow-lg ring-2 ring-[#BD804A]/20'
                  : 'border-[#E8DCCF] hover:border-[#BD804A]/60 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#BD804A]/10 text-[#BD804A] text-xs font-bold">
                    All Streams • Tech Conversion
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-2">Other Degree Programs</h3>
                <p className="text-xs sm:text-sm text-[#66515F] mb-5 leading-relaxed">
                  Non-tech conversion for BA, B.Com, BBA, and MBA students focusing on applied AI tools, data analytics, and digital products.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#BD804A]">Core Modules</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['No-Code & AI Tools', 'Python for Business', 'Data Dashboards', 'Workflow Automation', 'Product Operations'].map((mod) => (
                      <span key={mod} className="px-2.5 py-1 rounded-md bg-[#FFF9F2] text-[11px] font-medium text-[#321C30]">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire('College Track — Other Degree Programs (Tech Conversion)');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#BD804A] hover:bg-[#A86E3C] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Select Conversion Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. YEAR-WISE LEARNING JOURNEY (FOUR-STAGE PROGRESSION) */}
      {/* ============================================================== */}
      <section
        id="college-journey"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                STRUCTURED 4-STAGE ROADMAP
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Year-wise Learning Journey
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              From early programming fluency to scalable machine learning systems and capstone portfolios, step through a compounding four-stage transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1: Year 1 — Foundation */}
            <div className="rounded-3xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-[#4388D5]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#4388D5]/10 text-[#2563EB] text-xs font-bold">
                    Stage 01
                  </span>
                  <span className="text-xs font-bold text-[#BD804A]">Year 1</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">Year 1 — Foundation</h3>
                <div className="text-xs text-[#4388D5] font-semibold mb-3">Core Programming &amp; Logic</div>
                <p className="text-xs text-[#66515F] mb-4 leading-relaxed">
                  Develop intuition for code, algorithmic thinking, and modern version control alongside first-year academics.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60 text-xs">
                  {['Programming Fundamentals (Python/C++)', 'Problem Solving & Logic', 'Version Control & Git', 'Computational Math Basics'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4388D5]" />
                      <span className="text-[#321C30] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage 2: Year 2 — Development */}
            <div className="rounded-3xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-[#D98B42]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#D98B42]/10 text-[#C2410C] text-xs font-bold">
                    Stage 02
                  </span>
                  <span className="text-xs font-bold text-[#BD804A]">Year 2</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">Year 2 — Development</h3>
                <div className="text-xs text-[#D98B42] font-semibold mb-3">Full-Stack &amp; Data Systems</div>
                <p className="text-xs text-[#66515F] mb-4 leading-relaxed">
                  Build scalable web architectures, design relational databases, and create robust REST endpoints.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60 text-xs">
                  {['Full-Stack Web (React & Node.js)', 'Databases & APIs', 'Data Structures & OOP', 'Cloud Foundations'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D98B42]" />
                      <span className="text-[#321C30] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage 3: Year 3 — Specialisation */}
            <div className="rounded-3xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-[#8A67C7]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#8A67C7]/15 text-[#6D28D9] text-xs font-bold">
                    Stage 03
                  </span>
                  <span className="text-xs font-bold text-[#BD804A]">Year 3</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">Year 3 — Specialisation</h3>
                <div className="text-xs text-[#8A67C7] font-semibold mb-3">Applied AI &amp; Microservices</div>
                <p className="text-xs text-[#66515F] mb-4 leading-relaxed">
                  Train machine learning models, build retrieval-augmented LLM systems, and master containerized DevOps.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60 text-xs">
                  {['AI/ML & Generative AI', 'Cloud & DevOps (Docker/K8s)', 'Data Engineering', 'Real-World Client Projects'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8A67C7]" />
                      <span className="text-[#321C30] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage 4: Year 4 — Industry-ready */}
            <div className="rounded-3xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-[#10B981]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#047857] text-xs font-bold">
                    Stage 04
                  </span>
                  <span className="text-xs font-bold text-[#BD804A]">Year 4</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">Year 4 — Industry-ready</h3>
                <div className="text-xs text-[#10B981] font-semibold mb-3">AI Agents &amp; Placement Prep</div>
                <p className="text-xs text-[#66515F] mb-4 leading-relaxed">
                  Synthesize your capabilities into an enterprise capstone, clear mock interviews, and land tech offers.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8DCCF]/60 text-xs">
                  {['AI Agents & Advanced Projects', 'Internships / Industry Exposure', 'Interview & Career Prep', 'Portfolio & Product Demo'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span className="text-[#321C30] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. FIND YOUR LEARNING PATH (COMPACT INTERACTIVE PANEL) */}
      {/* ============================================================== */}
      <section
        id="college-selector"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                  CUSTOM ROADMAP GENERATOR
                </span>
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#321C30] mb-2">
                Find Your Learning Path
              </h2>
              <p className="text-xs sm:text-sm text-[#66515F]">
                Select your enrolled degree and current year to see your personalized syllabus, weekly schedule, and target project.
              </p>
            </div>

            {/* Interactive Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#66515F] mb-2">
                  Select Your Degree
                </label>
                <div className="relative">
                  <select
                    id="degree-select"
                    value={selectedDegree}
                    onChange={(e) => setSelectedDegree(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF] text-[#321C30] font-semibold text-sm appearance-none cursor-pointer focus:outline-hidden focus:border-[#BD804A]"
                  >
                    <option value="B.Tech">B.Tech / B.E. (All Engineering Branches)</option>
                    <option value="BCA">BCA (Bachelor of Computer Applications)</option>
                    <option value="B.Sc (CS/IT)">B.Sc (Computer Science / IT)</option>
                    <option value="MCA">MCA (Master of Computer Applications)</option>
                    <option value="Other Degrees">Other Degree Programs (BA / B.Com / BBA / MBA)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#BD804A] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#66515F] mb-2">
                  Select Your Current Year
                </label>
                <div className="relative">
                  <select
                    id="year-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF] text-[#321C30] font-semibold text-sm appearance-none cursor-pointer focus:outline-hidden focus:border-[#BD804A]"
                  >
                    <option value="1st Year">1st Year (Foundational)</option>
                    <option value="2nd Year">2nd Year (Development)</option>
                    <option value="3rd Year">3rd Year (Specialisation)</option>
                    <option value="4th Year">4th Year (Industry-Ready &amp; Capstone)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#BD804A] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Dynamically Updated Personalized Plan Box */}
            <div className="p-6 rounded-2xl bg-[#FFF9F2] border border-[#E8DCCF] mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                  Recommended Track for {selectedDegree} • {selectedYear}
                </span>
                <span className="text-xs font-medium text-[#66515F]">
                  {currentPlan.weekly}
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#321C30] mb-1">
                {currentPlan.focus}
              </h4>
              <p className="text-xs sm:text-sm text-[#66515F] mb-4">
                {currentPlan.subtitle}
              </p>

              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#321C30]">
                  Core Learning Modules
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentPlan.modules.map((m) => (
                    <div key={m} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E8DCCF]/60 text-xs text-[#321C30] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DCCF]/60 flex items-center justify-between text-xs text-[#66515F]">
                <span>Target Milestone: <strong className="text-[#321C30]">{currentPlan.targetMilestone}</strong></span>
              </div>
            </div>

            {/* Action button */}
            <div className="text-center">
              <button
                onClick={() => onOpenEnquire(`Personalised College Plan: ${selectedDegree} (${selectedYear})`)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all mx-auto cursor-pointer"
              >
                <span>Get my personalised plan</span>
                <ArrowRight className="w-4 h-4 text-[#F4B942]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. PROGRAM SCHEDULE (FOUR INFORMATION BLOCKS) */}
      {/* ============================================================== */}
      <section
        id="college-schedule"
        className="py-14 sm:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                WEEKEND COHORT FORMAT
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Engineered around college schedules.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Carefully scheduled to ensure you never miss classes, internal exams, or family commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Block 1: Saturday */}
            <div className="rounded-2xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs text-center flex flex-col items-center justify-center group hover:border-[#BD804A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#BD804A] mb-1">Interactive Cohort</div>
              <div className="font-serif text-2xl font-bold text-[#321C30] mb-1">Saturday</div>
              <div className="text-sm font-semibold text-[#66515F]">2 hours</div>
              <div className="text-[11px] text-[#66515F] mt-2">Core concept deep-dive &amp; live architectures</div>
            </div>

            {/* Block 2: Sunday */}
            <div className="rounded-2xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs text-center flex flex-col items-center justify-center group hover:border-[#4388D5] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-3">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4388D5] mb-1">Hands-on Lab</div>
              <div className="font-serif text-2xl font-bold text-[#321C30] mb-1">Sunday</div>
              <div className="text-sm font-semibold text-[#66515F]">2 hours</div>
              <div className="text-[11px] text-[#66515F] mt-2">Code reviews, squad building &amp; debugging</div>
            </div>

            {/* Block 3: 4 hrs/week */}
            <div className="rounded-2xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs text-center flex flex-col items-center justify-center group hover:border-[#10B981] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-1">Time Commitment</div>
              <div className="font-serif text-2xl font-bold text-[#321C30] mb-1">4 hrs/week</div>
              <div className="text-sm font-semibold text-[#66515F]">Alongside college</div>
              <div className="text-[11px] text-[#66515F] mt-2">Zero conflict with university exams</div>
            </div>

            {/* Block 4: ₹30,000/year */}
            <div className="rounded-2xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs text-center flex flex-col items-center justify-center group hover:border-[#8A67C7] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#8A67C7]/10 flex items-center justify-center text-[#8A67C7] mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#8A67C7] mb-1">Affordable Tuition</div>
              <div className="font-serif text-2xl font-bold text-[#321C30] mb-1">₹30,000/year</div>
              <div className="text-sm font-semibold text-[#66515F]">Proposed fee</div>
              <div className="text-[11px] text-[#66515F] mt-2">Scholarships &amp; installment plans available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. PRACTICAL OPPORTUNITIES (TWO SIDE-BY-SIDE FEATURE CARDS) */}
      {/* ============================================================== */}
      <section
        id="college-opportunities"
        className="py-14 sm:py-20 relative z-10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                PRACTICAL CAPABILITY
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Real projects. Genuine career access.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Step away from theoretical toy problems. Build deployed software products that industry interviewers respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Work on Real-World Projects */}
            <div className="rounded-3xl p-8 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#4388D5]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#321C30]">Work on Real-World Projects</h3>
                    <div className="text-xs text-[#4388D5] font-semibold">Production Software Engineering</div>
                  </div>
                </div>

                <p className="text-sm text-[#66515F] mb-6 leading-relaxed">
                  Learn software development by actually shipping code. Build real-world solutions under technical review rather than memorizing syntax.
                </p>

                <div className="space-y-3 pt-2 border-t border-[#E8DCCF]/60 text-xs sm:text-sm">
                  {[
                    'Production briefs sourced from actual local and regional businesses',
                    'Senior engineer code reviews and architectural pull request audits',
                    'Verifiable GitHub portfolio demonstrating clean architecture & tests',
                    'Full project lifecycle: design, development, testing, and cloud deployment',
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                      <CheckCircle2 className="w-4 h-4 text-[#4388D5] shrink-0 mt-0.5" />
                      <span className="text-[#321C30] font-medium leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={() => onOpenEnquire('College Programs — Real-World Projects')}
                  className="w-full py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Project Showcases</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Internships & Career Support */}
            <div className="rounded-3xl p-8 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#10B981]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#321C30]">Internships &amp; Career Support</h3>
                    <div className="text-xs text-[#10B981] font-semibold">Placement &amp; Industry Acceleration</div>
                  </div>
                </div>

                <p className="text-sm text-[#66515F] mb-6 leading-relaxed">
                  Career acceleration designed to turn technical proficiency into hiring offers at leading software companies.
                </p>

                <div className="space-y-3 pt-2 border-t border-[#E8DCCF]/60 text-xs sm:text-sm">
                  {[
                    'Direct internship opportunities with ecosystem startup & corporate partners',
                    'Technical mock interviews covering data structures, algorithms & system design',
                    'Personalized resume, GitHub, and LinkedIn profile audits by hiring managers',
                    'Strong alumni referral network across leading tech firms and accelerators',
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF]/60">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="text-[#321C30] font-medium leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DCCF]/60">
                <button
                  onClick={() => onNavigateInternships ? onNavigateInternships() : onOpenEnquire('College Programs — Internships & Career Support')}
                  className="w-full py-3 rounded-xl bg-[#064E3B] hover:bg-[#047857] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Placement Assistance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. KEY LEARNING DOMAINS (9 COMPACT ICON CARDS) */}
      {/* ============================================================== */}
      <section
        id="college-domains"
        className="py-14 sm:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                COMPREHENSIVE TECH DOMAINS
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Key Learning Domains
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Nine high-demand core technical capabilities integrated cohesively across your degree years.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Code,
                title: 'Programming',
                desc: 'Languages: Python, TypeScript, C++, Java fundamentals',
                color: '#4388D5',
              },
              {
                icon: Monitor,
                title: 'Web & App Development',
                desc: 'React, Next.js, Node.js, REST APIs, and Mobile',
                color: '#D98B42',
              },
              {
                icon: Database,
                title: 'Databases & Data',
                desc: 'PostgreSQL, Vector DBs, Redis, and NoSQL',
                color: '#10B981',
              },
              {
                icon: Cloud,
                title: 'Cloud & DevOps',
                desc: 'Docker, AWS/GCP, Kubernetes, and CI/CD pipelines',
                color: '#8A67C7',
              },
              {
                icon: Sparkles,
                title: 'AI / ML & Generative AI',
                desc: 'PyTorch, LLMs, LangChain, RAG, and Embeddings',
                color: '#BD804A',
              },
              {
                icon: Layers,
                title: 'Software Engineering',
                desc: 'System Design, Architecture, Testing & Clean Code',
                color: '#2563EB',
              },
              {
                icon: LineChart,
                title: 'Data Analytics',
                desc: 'Pandas, BigQuery, Dashboards, and Business SQL',
                color: '#C2410C',
              },
              {
                icon: Lock,
                title: 'Cybersecurity Basics',
                desc: 'App Security, Authentication, and Safe Deployment',
                color: '#047857',
              },
              {
                icon: Bot,
                title: 'AI Agents & Automation',
                desc: 'Autonomous Workflows, Tool Use, and LangGraph',
                color: '#6D28D9',
              },
            ].map((domain) => {
              const IconComp = domain.icon;
              return (
                <div
                  key={domain.title}
                  className="rounded-2xl p-5 bg-[#FFFCF8] border border-[#E8DCCF] shadow-2xs hover:shadow-md transition-all flex items-start gap-4 group hover:border-[#BD804A]/60"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${domain.color}15`, color: domain.color }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#321C30] mb-1">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-[#66515F] leading-snug">
                      {domain.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. MEET YOUR MENTORS (FOUR PROFILE CARDS) */}
      {/* ============================================================== */}
      <section
        id="college-mentors"
        className="py-14 sm:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD804A]">
                PRACTITIONER-LED FACULTY
              </span>
              <span className="w-6 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321C30] tracking-tight mb-4">
              Meet Your Mentors
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Learn directly from technology practitioners, engineering leads, and researchers actively building production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sambit Kumar',
                role: 'Lead AI & Systems Architect',
                bio: '10+ years engineering scalable cloud systems, LLM architectures, and agentic workflows.',
                tags: ['Generative AI', 'System Design', 'Multi-Agent AI'],
                image: '/images/academy/featured-student.jpg',
              },
              {
                name: 'Priyadarshi Dash',
                role: 'Senior Full-Stack Architect',
                bio: 'Specialist in modern web performance, React/Next.js architectures, and distributed microservices.',
                tags: ['React & Next.js', 'Node.js', 'Cloud Platforms'],
                image: '/images/academy/student-featured.jpg',
              },
              {
                name: 'Ananya Patra',
                role: 'Data Science & ML Practitioner',
                bio: 'Expert in applied machine learning, predictive analytics pipelines, and mathematical computing.',
                tags: ['Machine Learning', 'Data Science', 'PyTorch'],
                image: '/images/academy/team.jpg',
              },
              {
                name: 'Rajesh Mohanty',
                role: 'Career & Placement Advisor',
                bio: 'Experienced hiring leader guiding engineering students through technical interview rounds.',
                tags: ['Mock Interviews', 'DSA Prep', 'Industry Referrals'],
                image: '/images/academy/card-college.jpg',
              },
            ].map((mentor) => (
              <div
                key={mentor.name}
                className="rounded-3xl p-6 bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#BD804A]/60"
              >
                <div>
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border border-[#E8DCCF] bg-[#FFF9F2] shadow-2xs">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#321C30] mb-0.5">
                    {mentor.name}
                  </h3>
                  <div className="text-xs text-[#BD804A] font-semibold mb-3">
                    {mentor.role}
                  </div>
                  <p className="text-xs text-[#66515F] leading-relaxed mb-4">
                    {mentor.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DCCF]/60 flex flex-wrap gap-1">
                  {mentor.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-[#FFF9F2] text-[10px] font-semibold text-[#66515F]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section
        id="college-faq"
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
              Answers for college learners &amp; parents.
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Clear, transparent information about schedule compatibility, fees, degree policies, and placement assistance.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is this a degree program?',
                a: 'No. OD AI Academy does not offer degrees. You earn your formal degree from your enrolled college or university. We provide the practical industry skills, hands-on software development experience, AI expertise, and mentorship that degree curricula often leave out.',
              },
              {
                q: 'When are the sessions?',
                a: 'Sessions are held on weekends (2 hours on Saturday and 2 hours on Sunday) to ensure zero conflict with your regular college classes, laboratory sessions, or semester exams. Self-paced project work and mentor office hours are also available throughout the week.',
              },
              {
                q: 'What is the fee?',
                a: 'The proposed tuition is ₹30,000/year (approx. ₹2,500/month), structured as an affordable annual enrollment that includes all cohort sessions, cloud lab access, project reviews, and mentorship. Merit-based scholarships and flexible payment options are available.',
              },
              {
                q: 'Do you guarantee placement?',
                a: 'We do not believe in fake placement guarantees. Instead, we guarantee industry-grade portfolio preparation, verified project credentials, resume reviews, technical mock interviews, and direct access to internship and hiring opportunities through our partner tech ecosystem.',
              },
              {
                q: 'I am in a non-technical degree. Can I join?',
                a: 'Absolutely. Students from BA, B.Com, BBA, and non-CS science backgrounds regularly join our Applied AI and technology tracks. We start with friendly, step-by-step logic foundations and guide you toward high-value roles in data analysis, product operations, digital workflows, and business AI.',
              },
              {
                q: 'Can parents visit the campus?',
                a: 'Yes, parents and guardians are always welcome at OD AI HUB in Berhampur. You can tour our facilities, meet the mentors, and attend our term showcase and project demonstration days.',
              },
            ].map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#E8DCCF] bg-[#FFFCF8] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF9F2] transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#321C30]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      openFaq === idx
                        ? 'bg-[#BD804A] text-white border-[#BD804A]'
                        : 'bg-[#FFF9F2] text-[#BD804A] border-[#E8DCCF]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#E8DCCF]/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. FINAL CTA AND FOOTER */}
      {/* ============================================================== */}
      <section
        id="college-cta"
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
                  MAKE THE MOST OF YOUR DEGREE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
                Make the Most of Your College Years.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#D0DCED] mb-8 leading-relaxed">
                Talk to our mentors, explore your degree roadmap, and build skills that set you apart before graduation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenEnquire('College Programs')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#FFC95C] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer group"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onOpenEnquire('Schedule Campus Visit — Berhampur')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <Building2 className="w-4 h-4 text-[#F4B942]" />
                  <span>Schedule a Campus Visit</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 12. FOOTER */}
      {/* ============================================================== */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
