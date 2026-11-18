import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  FileBarChart,
  FlaskConical,
  Laptop,
  Layers,
  Sparkles,
  Tag,
  Terminal,
  UserCheck,
  Users,
  ShieldCheck,
  Check,
  Send,
  HelpCircle,
} from 'lucide-react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import SkillTransformationHeroAnimation from './components/SkillTransformationHeroAnimation';
import Footer from '../../../components/footer/Footer';

interface SkillAssessmentPageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
  onNavigateInternships?: () => void;
  onNavigateAssessment?: () => void;
}

interface SubNavItem {
  label: string;
  targetId: string;
}

const ACADEMY_SUBNAV_LINKS: SubNavItem[] = [
  { label: 'Overview', targetId: 'academy-overview' },
  { label: 'School', targetId: 'school-hero' },
  { label: 'After +2', targetId: 'plus2-hero' },
  { label: 'College Programs', targetId: 'college-hero' },
  { label: 'Graduates', targetId: 'graduates-hero' },
  { label: 'Internships', targetId: 'internships-hero' },
  { label: 'Skill Assessment', targetId: 'assessment-hero' },
  { label: 'FAQ', targetId: 'assessment-faq' },
];

export default function SkillAssessmentPage({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateInternships,
}: SkillAssessmentPageProps) {
  const [activeNav, setActiveNav] = useState('Skill Assessment');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    role: '',
    interest: '',
    message: '',
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (item.label === 'Skill Assessment') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.label === 'Overview') {
      onNavigateAcademyOverview();
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

    if (item.label === 'Internships' && onNavigateInternships) {
      onNavigateInternships();
      return;
    }

    if (item.label === 'FAQ') {
      const el = document.getElementById('assessment-faq');
      if (el) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.mobile.trim()) {
      errors.mobile = 'Please enter your mobile number';
    } else {
      const digitsOnly = formData.mobile.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        errors.mobile = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.role) {
      errors.role = 'Please select your current status';
    }

    if (!formData.interest) {
      errors.interest = 'Please select what you are interested in';
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to the communication terms to proceed';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate brief processing for pleasant UX
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      role: '',
      interest: '',
      message: '',
      consent: false,
    });
    setFormErrors({});
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#291D29] relative overflow-x-clip pt-[80px] sm:pt-[82px] selection:bg-[#F4B942]/30 selection:text-[#0B2145]">
      {/* Dynamic Background Atmosphere */}
      <AcademyAtmosphere />

      {/* ============================================================== */}
      {/* ACADEMY SECONDARY NAVIGATION BAR (Sticky Sub-Navbar) */}
      {/* ============================================================== */}
      <div
        id="academy-subnav"
        className="sticky top-[72px] sm:top-[76px] z-40 bg-[#0B2145] border-y border-[#183A6D]/80 shadow-md backdrop-blur-md transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14 overflow-x-auto no-scrollbar scroll-smooth">
            {/* Left Brand Badge */}
            <div className="flex items-center gap-3 shrink-0 pr-4 border-r border-[#183A6D]/80 mr-2 sm:mr-4">
              <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-[#F4B942]">
                OD AI Academy
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 py-1">
              {ACADEMY_SUBNAV_LINKS.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleSubNavClick(item)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#183A6D] text-white font-semibold shadow-xs border border-[#2B5CA6]/50'
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

      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section
        id="assessment-hero"
        className="relative bg-[#0B2145] text-white overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36 border-b border-[#183A6D]"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#183A6D]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F4B942]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Breadcrumb, Eyebrow, Headings, Buttons */}
            <div className="lg:col-span-6">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-slate-300 mb-5 font-medium">
                <button
                  onClick={onNavigateHome}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span className="text-slate-500">›</span>
                <button
                  onClick={() => onNavigateAcademyOverview()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Academy
                </button>
                <span className="text-slate-500">›</span>
                <span className="text-[#F4B942] font-semibold">Skill Assessment</span>
              </nav>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
                <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
                  SKILL ASSESSMENT · FOR ALL LEARNERS
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
                Know Where You Stand.
                <br />
                <span className="italic text-[#F4B942]">Plan Where You Go.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed mb-8">
                A short assessment of aptitude and programming skills, followed by a personalised
                learning roadmap.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('assessment-form');
                    if (el) {
                      const offset = 140;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] hover:from-[#E5A932] hover:to-[#D49822] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenEnquire('Skill Assessment - Free Consultation Session')}
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <span>Book a Free Session</span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D Skill Transformation Hero Animation */}
            <div className="lg:col-span-6 relative">
              <SkillTransformationHeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. HERO FEATURE STRIP (Floating White Rounded Strip) */}
      {/* ============================================================== */}
      <div className="-mt-8 sm:-mt-12 lg:-mt-14 relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFCF8] rounded-2xl shadow-xl border border-[#B8D5F3] p-4 sm:p-6 transition-all hover:shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Item 1: Aptitude & Coding */}
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:px-5">
              <div className="w-10 h-10 rounded-xl bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-[#183A6D]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0B2145] leading-tight">
                Aptitude &amp; Coding
              </span>
            </div>

            {/* Item 2: Skill Report */}
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:px-5">
              <div className="w-10 h-10 rounded-xl bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0">
                <FileBarChart className="w-5 h-5 text-[#183A6D]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0B2145] leading-tight">
                Skill Report
              </span>
            </div>

            {/* Item 3: Personal Roadmap */}
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:px-5">
              <div className="w-10 h-10 rounded-xl bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#183A6D]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0B2145] leading-tight">
                Personal Roadmap
              </span>
            </div>

            {/* Item 4: Counselling */}
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:px-5">
              <div className="w-10 h-10 rounded-xl bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-[#183A6D]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0B2145] leading-tight">
                Counselling
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. PROGRAM OVERVIEW (3 Horizontally Aligned Cards) */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Clear Diagnostics
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Program Overview
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Understand where you currently stand and chart your exact learning roadmap with zero obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1 — Program Overview */}
            <div className="rounded-2xl bg-[#FFFCF8] border border-[#B8D5F3] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#183A6D]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#321C30]">
                    Program Overview
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Who */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-[#B8D5F3]/50">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-[#183A6D]" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                        Who
                      </span>
                      <span className="text-sm sm:text-base text-[#321C30] font-medium">
                        School, college and graduate learners
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-[#B8D5F3]/50">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#183A6D]" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Duration
                      </span>
                      <span className="border border-[#BD804A]/60 text-[#9E6028] bg-[#FFF8EE] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        TBC
                      </span>
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-[#B8D5F3]/50">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0 mt-0.5">
                      <Laptop className="w-4 h-4 text-[#183A6D]" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          Mode
                        </span>
                        <span className="text-xs sm:text-sm text-[#321C30] font-medium">
                          ONLINE / IN-PERSON
                        </span>
                      </div>
                      <span className="border border-[#BD804A]/60 text-[#9E6028] bg-[#FFF8EE] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        TBC
                      </span>
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF5FC] text-[#183A6D] flex items-center justify-center shrink-0 mt-0.5">
                      <Tag className="w-4 h-4 text-[#183A6D]" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Fee
                      </span>
                      <span className="border border-[#BD804A]/60 text-[#9E6028] bg-[#FFF8EE] text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        TBC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Outcomes */}
            <div className="rounded-2xl bg-[#FFFCF8] border border-[#B8D5F3] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#321C30]">
                    Outcomes
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Clarity on your current level',
                    'A realistic plan',
                    'The right program for you',
                    'No pressure to enrol',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#321C30] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#B8D5F3]/50 text-xs text-[#66515F]">
                Objective, data-backed assessment scores with clear benchmarks.
              </div>
            </div>

            {/* Card 3 — For Parents */}
            <div className="rounded-2xl bg-[#F2F7FD] border border-[#B8D5F3] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#183A6D]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#321C30]">
                    For Parents
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Results are shared privately',
                    'Guidance is honest and independent',
                    'No obligation to join',
                    'Data handled per our Privacy Policy',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#183A6D] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#321C30] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#B8D5F3]/50 text-xs text-[#183A6D] font-medium">
                Transparent counselling designed to empower learner career decisions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROGRAM STRUCTURE (3 Cards with Coloured Header Bars) */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 relative z-10 bg-[#FAF6F0] border-y border-[#E8DCCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Evaluation Blueprint
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Program Structure
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              A comprehensive three-stage assessment cycle from testing to actionable roadmap recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1 — Blue header: What We Assess */}
            <div className="rounded-2xl overflow-hidden border border-[#B8D5F3] shadow-xs flex flex-col">
              <div className="bg-[#183A6D] text-white p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-[#F4B942]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                  What We Assess
                </h3>
              </div>
              <div className="bg-[#F0F6FC] p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-3.5">
                  {[
                    'Aptitude and logical reasoning',
                    'Programming basics',
                    'Problem-solving approach',
                    'Career interests',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#183A6D] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 — Green header: You Receive */}
            <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-xs flex flex-col">
              <div className="bg-[#0D5C3A] text-white p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FileBarChart className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                  You Receive
                </h3>
              </div>
              <div className="bg-[#F0FDF4] p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-3.5">
                  {[
                    'Skill report',
                    'Recommended program or track',
                    'Personalised roadmap',
                    'Counselling session',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 — Orange header: Used For */}
            <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-xs flex flex-col">
              <div className="bg-[#B45309] text-white p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-[#F4B942]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                  Used For
                </h3>
              </div>
              <div className="bg-[#FFF9F2] p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-3.5">
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#B45309] shrink-0" />
                    <span>Accelerator entry</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#B45309] shrink-0" />
                    <span>Weekend Mentorship placement</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#B45309] shrink-0" />
                    <span>Foundation Bridge recommendation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base text-[#321C30] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#B45309] shrink-0" />
                    <span>Scholarship decisions</span>
                    <span className="border border-[#BD804A]/60 text-[#9E6028] bg-[#FFF8EE] text-[10px] font-semibold px-2 py-0.5 rounded-full ml-1">
                      TBC
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. HOW IT WORKS (4 Horizontal Step Cards with Badges) */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Step-by-Step Journey
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Four simple steps to benchmark your technical foundation and discover the best fit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl border border-[#B8D5F3] p-6 pt-9 text-center shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#183A6D] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-[#321C30] mb-2">
                Register
              </h3>
              <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                Fill the form below.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl border border-[#B8D5F3] p-6 pt-9 text-center shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#183A6D] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-[#321C30] mb-2">
                Take the Assessment
              </h3>
              <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                Aptitude, logic and programming basics.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl border border-[#B8D5F3] p-6 pt-9 text-center shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#183A6D] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-[#321C30] mb-2">
                Get Your Report
              </h3>
              <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                Strengths and gaps, clearly explained.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white rounded-2xl border border-[#B8D5F3] p-6 pt-9 text-center shadow-xs hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#183A6D] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-[#321C30] mb-2">
                Roadmap &amp; Counselling
              </h3>
              <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                A recommended program or track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. REGISTRATION FORM (Centered White Form Card) */}
      {/* ============================================================== */}
      <section id="assessment-form" className="py-16 sm:py-24 relative z-10 bg-[#FAF6F0] border-t border-[#E8DCCF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#B8D5F3] p-6 sm:p-10 shadow-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                  Reserve Your Slot
                </span>
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#321C30]">
                Register for a Skill Assessment
              </h2>
              <p className="text-xs sm:text-sm text-[#66515F] mt-2">
                Complete the details below to receive test instructions and schedule your counselling call.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-2">
                  Registration Received!
                </h3>
                <p className="text-sm text-[#66515F] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#0B2145]">{formData.fullName}</strong>. We have received your assessment registration. Our academic counselling team will reach out to you at{' '}
                  <strong className="text-[#0B2145]">{formData.mobile}</strong> via phone or WhatsApp to share your assessment slot and preparation guidelines.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-full bg-[#0B2145] text-white font-semibold text-xs sm:text-sm hover:bg-[#183A6D] transition-colors cursor-pointer"
                  >
                    Register Another Learner
                  </button>
                  <button
                    onClick={() => onOpenEnquire('Skill Assessment In-Person Campus Visit')}
                    className="px-6 py-2.5 rounded-full bg-[#FFF9F2] border border-[#BD804A]/40 text-[#321C30] font-semibold text-xs sm:text-sm hover:bg-[#FCE9DD] transition-colors cursor-pointer"
                  >
                    Schedule Campus Visit
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                {/* Row 1 — Two columns: Full name * and Mobile number * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                      Full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) {
                          setFormErrors({ ...formErrors, fullName: '' });
                        }
                      }}
                      placeholder="e.g. Sambit Kumar"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFFCF8] text-[#321C30] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all ${
                        formErrors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#B8D5F3]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                      Mobile number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => {
                        setFormData({ ...formData, mobile: e.target.value });
                        if (formErrors.mobile) {
                          setFormErrors({ ...formErrors, mobile: '' });
                        }
                      }}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFFCF8] text-[#321C30] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all ${
                        formErrors.mobile ? 'border-rose-400 bg-rose-50/20' : 'border-[#B8D5F3]'
                      }`}
                    />
                    {formErrors.mobile && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.mobile}</p>
                    )}
                  </div>
                </div>

                {/* Row 2 — Full width: Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) {
                        setFormErrors({ ...formErrors, email: '' });
                      }
                    }}
                    placeholder="e.g. student@example.com (optional)"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFFCF8] text-[#321C30] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all ${
                      formErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#B8D5F3]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Row 3 — Two columns: I am a * and Interested in * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                      I am a <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => {
                        setFormData({ ...formData, role: e.target.value });
                        if (formErrors.role) {
                          setFormErrors({ ...formErrors, role: '' });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFFCF8] text-[#321C30] focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all cursor-pointer ${
                        formErrors.role ? 'border-rose-400 bg-rose-50/20' : 'border-[#B8D5F3]'
                      }`}
                    >
                      <option value="">Select your status...</option>
                      <option value="School Student">School Student</option>
                      <option value="Class 11–12 Student">Class 11–12 Student</option>
                      <option value="College Student">College Student</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.role && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.role}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                      Interested in <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => {
                        setFormData({ ...formData, interest: e.target.value });
                        if (formErrors.interest) {
                          setFormErrors({ ...formErrors, interest: '' });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FFFCF8] text-[#321C30] focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all cursor-pointer ${
                        formErrors.interest ? 'border-rose-400 bg-rose-50/20' : 'border-[#B8D5F3]'
                      }`}
                    >
                      <option value="">Select interest...</option>
                      <option value="Skill Assessment">Skill Assessment</option>
                      <option value="Career Guidance">Career Guidance</option>
                      <option value="Programming">Programming</option>
                      <option value="AI / Machine Learning">AI / Machine Learning</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                    {formErrors.interest && (
                      <p className="text-xs text-rose-600 mt-1">{formErrors.interest}</p>
                    )}
                  </div>
                </div>

                {/* Row 4 — Full width: Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#321C30] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your background, goals or questions (optional)..."
                    className="w-full px-4 py-3 rounded-xl border border-[#B8D5F3] text-sm bg-[#FFFCF8] text-[#321C30] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#183A6D] transition-all resize-y"
                  />
                </div>

                {/* Consent checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (formErrors.consent) {
                          setFormErrors({ ...formErrors, consent: '' });
                        }
                      }}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-[#183A6D] focus:ring-[#183A6D] cursor-pointer"
                    />
                    <span className="text-xs text-[#66515F] leading-relaxed">
                      I agree that OD AI HUB may contact me about this request by phone, WhatsApp or email, as described in the{' '}
                      <button
                        type="button"
                        onClick={() => onPreviewItem('Privacy Policy')}
                        className="text-[#183A6D] font-semibold underline hover:text-[#0B2145] cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                      . <span className="text-rose-500">*</span>
                    </span>
                  </label>
                  {formErrors.consent && (
                    <p className="text-xs text-rose-600 mt-1 ml-7">{formErrors.consent}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F4B942] to-[#E5A932] hover:from-[#E5A932] hover:to-[#D49822] text-[#0B2145] font-bold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Registering...' : 'Register'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (2 Accordions) */}
      {/* ============================================================== */}
      <section id="assessment-faq" className="py-16 sm:py-24 relative z-10 bg-[#FFFCF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Common Queries
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {/* Question 1 */}
            <div className="rounded-2xl bg-white border border-[#B8D5F3] overflow-hidden shadow-2xs transition-colors">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={openFaq === 0}
              >
                <span className="font-serif text-lg sm:text-xl font-bold text-[#0B2145]">
                  Do I need to prepare?
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    openFaq === 0 ? 'bg-[#183A6D] text-white rotate-180' : 'bg-[#EEF5FC] text-[#183A6D]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#66515F] leading-relaxed border-t border-[#B8D5F3]/50 pt-4">
                      No special preparation is required. The assessment is designed to understand your current aptitude, logical reasoning and programming knowledge. Just answer honestly.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Question 2 */}
            <div className="rounded-2xl bg-white border border-[#B8D5F3] overflow-hidden shadow-2xs transition-colors">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={openFaq === 1}
              >
                <span className="font-serif text-lg sm:text-xl font-bold text-[#0B2145]">
                  What if I score low?
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    openFaq === 1 ? 'bg-[#183A6D] text-white rotate-180' : 'bg-[#EEF5FC] text-[#183A6D]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              <AnimatePresence>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#66515F] leading-relaxed border-t border-[#B8D5F3]/50 pt-4">
                      That is completely fine. The assessment is meant to identify your current level and areas for improvement. Your results will help us recommend a suitable learning path.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. FINAL CTA BANNER (Full-width Navy Blue Banner) */}
      {/* ============================================================== */}
      <section id="assessment-cta" className="py-14 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0B2145] text-white border border-[#18396D] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] sm:min-h-[400px]">
              {/* Left Side: Campus Image (approx. 45% width) */}
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden">
                <img
                  src="/images/academy/academy-hero.jpg"
                  alt="OD AI Academy Campus"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-[#0B2145]/20 mix-blend-multiply" />
                {/* Right edge gradient blend into navy background */}
                <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-r from-transparent to-[#0B2145] hidden lg:block" />
                {/* Bottom edge gradient for mobile */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2145] to-transparent lg:hidden" />
              </div>

              {/* Right Side: Exact Text & Button */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                  Start With a{' '}
                  <span className="italic text-[#F4B942]">Conversation.</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                  Talk to our team about the<br className="hidden sm:inline" /> right starting point.
                </p>
                <div>
                  <button
                    onClick={() => onOpenEnquire('Skill Assessment Conversation')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] text-[#0B2145] font-bold text-base shadow-lg hover:shadow-xl hover:from-[#E5A932] hover:to-[#D49822] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. GLOBAL FOOTER */}
      {/* ============================================================== */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
