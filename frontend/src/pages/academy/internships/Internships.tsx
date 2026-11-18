import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Users,
  Workflow,
  Award,
  ArrowRight,
  FolderGit2,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldAlert,
  Sparkles,
  Layers,
  Code,
  Cpu,
  Cloud,
  Terminal,
  Target,
  FileCode,
  ShieldCheck,
  Building2,
  UserCheck,
} from 'lucide-react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import Footer from '../../../components/footer/Footer';

interface InternshipProgramsPageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
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
  { label: 'Graduates', targetId: 'graduates-hero' },
  { label: 'Internships', targetId: 'internships-hero' },
  { label: 'Skill Assessment', targetId: 'academy-path-selector' },
  { label: 'FAQ', targetId: 'internships-faq' },
];

export default function InternshipProgramsPage({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateAssessment,
}: InternshipProgramsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('Internships');
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

    if (item.label === 'Internships') {
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

    if (item.label === 'College Programs' && onNavigateCollege) {
      onNavigateCollege();
      return;
    }

    if (item.label === 'Graduates' && onNavigateGraduates) {
      onNavigateGraduates();
      return;
    }

    if (item.label === 'Skill Assessment' && onNavigateAssessment) {
      onNavigateAssessment();
      return;
    }

    if (item.label === 'FAQ') {
      const el = document.getElementById('internships-faq');
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elRect - bodyRect - offset, behavior: 'smooth' });
      }
      return;
    }

    onNavigateAcademyOverview(item.targetId, item.cardIndex);
  };

  const faqItems = [
    {
      question: 'Is this paid?',
      answer:
        'Our internship programs are intensive educational training opportunities focused on building production-style projects under senior mentor guidance. Core cohorts feature a nominal learning fee that covers lab compute and 1-on-1 mentor code audits. For select high-performing students and dedicated innovation lab research projects, performance-linked stipends and merit sponsorships are available upon evaluation.',
    },
    {
      question: 'Will it count for my college internship requirement?',
      answer:
        'Many colleges and technical universities accept our verified internship completion certificate, detailed repository commit history, and project presentation for mandatory summer or 6th/8th-semester credits. However, since university regulations differ, we advise students to submit our comprehensive syllabus and mentor details to their college department HOD for formal advance confirmation.',
    },
    {
      question: 'Do you work on real client systems?',
      answer:
        'Interns build production-grade applications that solve real-world problem statements using realistic engineering architectures and synthetic or open sample datasets. To ensure compliance and safeguard proprietary databases, interns do not access internal live client infrastructures directly. You learn the exact same toolchains, code review practices, and CI/CD pipelines used by top tech teams.',
    },
    {
      question: 'What are the batch timings and weekly hours?',
      answer:
        'We offer flexible schedules tailored around college timetables. During academic semesters, cohorts operate on weekend sprint models (Saturdays and Sundays) plus asynchronous weekday task check-ins. During official summer and winter semester breaks, full-time accelerated weekday cohorts are conducted at our Berhampur Innovation Center.',
    },
    {
      question: 'Who is eligible to apply?',
      answer:
        'Students actively enrolled in any year of an engineering (B.Tech/B.E.), computer applications (BCA/MCA), science (B.Sc/M.Sc IT), or polytechnic diploma program are eligible. Selection is based on our short diagnostic assessment so mentors can assign you to a team matching your skill level.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F1] text-[#321C30] selection:bg-[#FCE9DD] selection:text-[#321C30] font-sans relative overflow-x-clip pt-[80px] sm:pt-[82px]">
      {/* Background Atmosphere */}
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
            {/* Left section: Bold Golden-Yellow OD AI Academy */}
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
                const isActive = item.label === 'Internships';
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
      {/* 1. HERO SECTION WITH NAVY BLUE BACKGROUND & STUDENT GROUP PHOTO */}
      {/* ============================================================== */}
      <section
        id="internships-hero"
        className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-[#0B2145] text-white scroll-mt-28"
      >
        {/* Student Group Background Image Treatment */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <img
            src="/images/academy/student_group.jpg"
            alt="OD AI Academy Interns"
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity scale-105"
          />
          {/* Gradients blending with navy-blue hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07172F]/90 via-[#0B2145]/85 to-[#0B2145]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0B2145]/50 to-[#0B2145]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-xs">
                <span className="text-[11px] sm:text-xs font-medium text-white/80">Home</span>
                <span className="text-xs text-white/40">→</span>
                <span className="text-[11px] sm:text-xs font-medium text-white/80">Academy</span>
                <span className="text-xs text-white/40">→</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#F4B942]">
                  Internship Programs
                </span>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-4"
            >
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F4B942]">
                INTERNSHIP PROGRAMS · COLLEGE STUDENTS
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6"
            >
              Real Work. <br />
              <span className="italic font-normal text-[#F4B942]">Real Experience.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#D0DCED] max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Industry-style internships where you build mentored projects using real engineering workflows.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-14"
            >
              <button
                onClick={() => onOpenEnquire('College Student Internship Program')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#F4B942] hover:bg-[#e2aa38] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0B2145]" />
              </button>
              <button
                onClick={() => onOpenEnquire('Book a Free Internship Session')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer backdrop-blur-xs"
              >
                <span>Book a Free Session</span>
                <Sparkles className="w-4 h-4 text-[#F4B942]" />
              </button>
            </motion.div>

            {/* Floating Benefits Strip (4 items) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto rounded-2xl bg-[#FFFCF8] text-[#321C30] border border-[#E8DCCF] shadow-xl px-6 py-5"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 lg:divide-x divide-[#E8DCCF]">
                {/* 1. Real Projects */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Real Projects</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Production-Style Code</div>
                </div>

                {/* 2. Mentor Reviews */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Mentor Reviews</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Weekly 1-on-1 Audits</div>
                </div>

                {/* 3. Sprint Workflow */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Sprint Workflow</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Agile Standups &amp; Git</div>
                </div>

                {/* 4. Certificate */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Certificate</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Verified Completion</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PROGRAM OVERVIEW (THREE SIDE-BY-SIDE CARDS) */}
      {/* ============================================================== */}
      <section id="internships-overview" className="py-16 sm:py-24 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Structured Experience
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Program Overview
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Understand our program scope, expected student deliverables, and honest guardrails for parents and academic mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Program Overview */}
            <div className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] p-8 shadow-xs flex flex-col justify-between hover:border-[#4388D5] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-4">
                  Program Overview
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#321C30]">
                  <div className="pb-3 border-b border-[#E8DCCF]/60">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66515F] mb-1">
                      Who
                    </span>
                    <span className="font-medium text-[#321C30]">
                      College students (all years &amp; branches)
                    </span>
                  </div>

                  <div className="pb-3 border-b border-[#E8DCCF]/60">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66515F] mb-1">
                      Duration
                    </span>
                    <span className="font-medium text-[#321C30]">
                      4–8 Weeks (Summer / Winter cohorts, flexible)
                    </span>
                  </div>

                  <div className="pb-3 border-b border-[#E8DCCF]/60">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66515F] mb-1">
                      Mode
                    </span>
                    <span className="font-medium text-[#321C30]">
                      In-person at Berhampur Innovation Center
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#66515F] mb-1">
                      Fee / Stipend
                    </span>
                    <span className="font-medium text-[#321C30]">
                      Modular learning tracks / Performance-linked stipend for selected cohorts
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DCCF]">
                <button
                  onClick={() => onOpenEnquire('Internship Details Enquiry')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#0B2145] text-[#321C30] hover:text-white border border-[#E8DCCF] hover:border-[#0B2145] font-semibold text-xs transition-all cursor-pointer"
                >
                  Request Detailed Syllabus
                </button>
              </div>
            </div>

            {/* Card 2: Outcomes */}
            <div className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] p-8 shadow-xs flex flex-col justify-between hover:border-[#BD804A] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-4">
                  Outcomes
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#321C30]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Professional Workflows</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Experience of real-world Scrum sprints, Git pull request reviews, and issue tracking.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Portfolio-Ready Project</span>
                      <span className="text-[#66515F] leading-relaxed">
                        A working, deployed software product to showcase on GitHub and your resume.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Teamwork &amp; Communication</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Collaborative problem solving, async task ownership, and sprint demo presentations.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Interview Talking Points</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Concrete architectural decisions, technical trade-offs, and debugging stories.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DCCF]">
                <button
                  onClick={() => onOpenEnquire('Internship Project Showcase')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#0B2145] text-[#321C30] hover:text-white border border-[#E8DCCF] hover:border-[#0B2145] font-semibold text-xs transition-all cursor-pointer"
                >
                  View Sample Projects
                </button>
              </div>
            </div>

            {/* Card 3: For Parents */}
            <div className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] p-8 shadow-xs flex flex-col justify-between hover:border-[#824D74] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#824D74]/10 flex items-center justify-center text-[#824D74] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-4">
                  For Parents
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#321C30]">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#824D74] shrink-0 mt-2" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Safe Sandbox Environments</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Training projects use sample synthetic data only, ensuring a safe, guided sandbox.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#824D74] shrink-0 mt-2" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Supervised by Mentors</span>
                      <span className="text-[#66515F] leading-relaxed">
                        All learning is directly led by background-verified technology practitioners.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#824D74] shrink-0 mt-2" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Private Professional Credential</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Certificate is private industry verification, not an official university degree credit.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#824D74] shrink-0 mt-2" />
                    <div>
                      <span className="font-bold text-[#321C30] block">Honest Career Guidance</span>
                      <span className="text-[#66515F] leading-relaxed">
                        Transparent skill building without misleading 100% placement guarantees.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DCCF]">
                <button
                  onClick={() => onOpenEnquire('Parent Consultation for Internship')}
                  className="w-full py-2.5 rounded-xl bg-[#FFF9F2] hover:bg-[#0B2145] text-[#321C30] hover:text-white border border-[#E8DCCF] hover:border-[#0B2145] font-semibold text-xs transition-all cursor-pointer"
                >
                  Schedule Parent Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PROGRAM STRUCTURE (THREE COLOURED CARDS) */}
      {/* ============================================================== */}
      <section id="internships-structure" className="py-16 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                The Internship Journey
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Program Structure
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              From day one diagnostic to the final demo day, experience how technology engineering teams operate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Coloured Card 1: How It Works (Blue Accent) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#4388D5]/10 via-[#FFFCF8] to-[#FFFCF8] border border-[#B8D5F3] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#4388D5] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    01
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#DCEBFA] text-[#2E6EB5]">
                    Process
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-5">
                  How It Works
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4388D5]/15 text-[#4388D5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Apply &amp; Short Assessment</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Submit basic application and complete a diagnostic skill baseline.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4388D5]/15 text-[#4388D5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Team &amp; Mentor Assignment</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Placed into a 4-person project squad led by a practicing tech lead.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4388D5]/15 text-[#4388D5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Sprint-Based Project Work</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Agile 1-week sprints with PR code reviews and daily task boards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#4388D5]/15 text-[#4388D5] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Final Demo &amp; Review</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Present live application demonstration before industry panel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#B8D5F3]/60">
                <span className="text-xs font-semibold text-[#4388D5]">
                  Sprint Lifecycle · 4 to 8 Weeks
                </span>
              </div>
            </div>

            {/* Coloured Card 2: Tracks (Amber/Gold Accent) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#BD804A]/10 via-[#FFFCF8] to-[#FFFCF8] border border-[#F1D9C2] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#BD804A] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    02
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FCE9DD] text-[#C77A32]">
                    Domains
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-5">
                  Tracks
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Web and Full-Stack</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        React, Next.js, Node.js, and modern REST/GraphQL applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">AI and Data</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Python pipelines, vector search, RAG systems, and ML models.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Cloud and DevOps</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Docker packaging, GitHub Actions pipelines, and cloud hosting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#BD804A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Innovation Lab Projects</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Robotics, edge computing, IoT prototypes, and research testbeds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F1D9C2]">
                <span className="text-xs font-semibold text-[#BD804A]">
                  Multi-Disciplinary Options
                </span>
              </div>
            </div>

            {/* Coloured Card 3: You Receive (Purple Accent) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#824D74]/10 via-[#FFFCF8] to-[#FFFCF8] border border-[#E8D2E4] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#824D74] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    03
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#EFE3ED] text-[#824D74]">
                    Deliverables
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-5">
                  You Receive
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-[#824D74] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Regular Mentor Feedback</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        1-on-1 code reviews, architectural tips, and performance audits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FolderGit2 className="w-5 h-5 text-[#824D74] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Project for Your Portfolio</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Live deployed web link and GitHub repository with verified commits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#824D74] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Private Internship Certificate</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Official verification from OD AI HUB detailing hours and scope.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-[#824D74] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#321C30]">Experience of Team Workflows</h4>
                      <p className="text-xs text-[#66515F] mt-0.5 leading-relaxed">
                        Confidence communicating in standups, retrospectives, and demos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8D2E4]">
                <span className="text-xs font-semibold text-[#824D74]">
                  Verifiable Career Proof
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (EXPANDABLE ACCORDION) */}
      {/* ============================================================== */}
      <section id="internships-faq" className="py-16 sm:py-24 relative z-10 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Frequently Asked Questions
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Answers for College Interns &amp; Parents
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Clear, transparent answers about stipend policies, academic credit rules, and project safety.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FFFCF8] border border-[#E8DCCF] overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#321C30]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#BD804A] text-white rotate-180' : 'bg-[#FFF9F2] text-[#BD804A]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#E8DCCF]/60 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CTA SECTION */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 relative z-10 bg-[#FFFCF8] border-t border-[#E8DCCF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
              Connect With Us
            </span>
            <span className="w-5 h-[1.5px] bg-[#BD804A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
            Start With a Conversation.
          </h2>
          <p className="text-sm sm:text-base text-[#66515F] max-w-xl mx-auto leading-relaxed mb-8">
            Speak with our internship coordinator at the Berhampur center to learn upcoming cohort schedules, project tracks, and diagnostic assessment details.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquire('College Student Internship Program')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0B2145] hover:bg-[#183A6D] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-[#F4B942]" />
            </button>
            <button
              onClick={() => onOpenEnquire('Book a Free Internship Session')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FFF9F2] hover:bg-[#FCE9DD] border border-[#BD804A]/40 text-[#321C30] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>Book a Free Session</span>
            </button>
          </div>
        </div>
      </section>

      {/* Global Academy Footer */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
