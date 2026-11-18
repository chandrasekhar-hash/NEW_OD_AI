import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Code,
  Sparkles,
  Cpu,
  Cloud,
  Workflow,
  Database,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  Bot,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  Check,
  Calendar,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  Compass,
  HelpCircle,
  FolderGit2,
  Users,
  Award,
  Terminal,
  FileCode,
  TrendingUp,
  X,
  ExternalLink,
  Building2,
  Monitor,
  User,
} from 'lucide-react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import Footer from '../../../components/footer/Footer';

interface GraduateAcceleratorPageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
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
  { label: 'Graduates', targetId: 'graduates-hero' },
  { label: 'Internships', targetId: 'internships-hero' },
  { label: 'Skill Assessment', targetId: 'graduates-selector' },
  { label: 'FAQ', targetId: 'graduates-faq' },
];

const LEARNING_DOMAINS = [
  { label: 'Programming', icon: Code },
  { label: 'Web & App Development', icon: Monitor },
  { label: 'Databases & Data', icon: Database },
  { label: 'Cloud & DevOps', icon: Cloud },
  { label: 'AI / ML / Generative AI', icon: Cpu },
  { label: 'Software Engineering', icon: FileCode },
  { label: 'Data Analytics', icon: LineChart },
  { label: 'Cybersecurity Basics', icon: ShieldCheck },
  { label: 'AI Agents & Automation', icon: Bot },
];

const FAQ_ITEMS = [
  {
    question: 'Is this a degree programme?',
    answer:
      'No. This is a career-oriented learning programme designed to complement your existing college degree with practical technology skills, projects and industry exposure. It does not replace or award a university degree.',
  },
  {
    question: 'When are the sessions?',
    answer:
      'The programme follows a structured learning schedule. Session timings and batches will be shared during counselling and enrolment.',
  },
  {
    question: 'What is the fee?',
    answer:
      'Programme fees depend on the selected learning track and programme details. Contact the OD AI HUB team for the latest fee structure.',
  },
  {
    question: 'Do you guarantee placement?',
    answer:
      'No placement guarantee is made. The programme focuses on practical skills, real-world projects, portfolio development and career preparation. Placement opportunities depend on individual performance and employer requirements.',
  },
  {
    question: 'I am in a non-technical degree. Can I join?',
    answer:
      'Yes. Eligible learners from non-technical academic backgrounds can explore suitable beginner-friendly learning tracks. The recommended path depends on your current skills and career goals.',
  },
  {
    question: 'Can parents visit the campus?',
    answer:
      'Yes. Parents can contact the team to arrange a campus visit and discuss the programme, learning process and student support.',
  },
];

interface TrackItem {
  id: string;
  title: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  duration: string;
  mode: string;
  fee: string;
  status: string;
  bestFor: string;
  accentColor: string;
  borderColor: string;
  bgLight: string;
  highlights: string[];
}

const TRACKS_DATA: TrackItem[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Software Development',
    icon: Code,
    badge: 'High Demand',
    description:
      'Master frontend web architecture, scalable backend microservices, relational & document databases, REST APIs, and production deployment.',
    duration: '16 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹35,000',
    status: 'Enrolling Now',
    bestFor: 'CS/IT & Non-CS engineering graduates aiming for core software engineering roles',
    accentColor: '#4388D5',
    borderColor: '#B8D5F3',
    bgLight: 'from-[#4388D5]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['React & Next.js Architecture', 'Node.js & Python Microservices', 'PostgreSQL & MongoDB', 'CI/CD & Cloud Deployment'],
  },
  {
    id: 'ai-genai',
    title: 'AI & Generative AI Engineering',
    icon: Sparkles,
    badge: 'Future Tech',
    description:
      'Train deep learning models with PyTorch, build Retrieval-Augmented Generation (RAG) systems, engineer LLM pipelines, and orchestrate autonomous AI agents.',
    duration: '16 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹40,000',
    status: 'Enrolling Now',
    bestFor: 'Graduates with programming basics wanting to build next-generation AI applications',
    accentColor: '#824D74',
    borderColor: '#E8D2E4',
    bgLight: 'from-[#824D74]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['PyTorch Deep Learning', 'RAG & Vector Embeddings', 'LangChain & Autonomous Agents', 'Fine-tuning & Local LLM Serving'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    icon: Cloud,
    badge: 'Infrastructure',
    description:
      'Learn Linux systems engineering, containerisation with Docker, multi-node Kubernetes clusters, Infrastructure as Code, and automated CI/CD pipelines.',
    duration: '14 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹35,000',
    status: 'Enrolling Now',
    bestFor: 'Tech graduates seeking site reliability, cloud architecture, and infrastructure roles',
    accentColor: '#BD804A',
    borderColor: '#F1D9C2',
    bgLight: 'from-[#BD804A]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['Linux System Administration', 'Docker & Kubernetes', 'Terraform & Cloud Networking', 'GitHub Actions & Monitoring'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Engineering',
    icon: LineChart,
    badge: 'Analytical Track',
    description:
      'Master data wrangling with Python, scalable SQL and BigQuery warehousing, automated ETL/ELT pipelines, and modern interactive BI dashboards.',
    duration: '14 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹32,000',
    status: 'Enrolling Now',
    bestFor: 'Numerically inclined graduates (Math, Statistics, Commerce, BCA, B.Sc, B.Tech)',
    accentColor: '#2B7A78',
    borderColor: '#BBE1DE',
    bgLight: 'from-[#2B7A78]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['Pandas, NumPy & Python', 'Advanced SQL & Data Warehousing', 'Data Modeling & ETL Pipelines', 'PowerBI / Tableau & Analytics Storytelling'],
  },
  {
    id: 'software-testing',
    title: 'Software Testing & Automation',
    icon: ShieldCheck,
    badge: 'Fast-Track',
    description:
      'Gain thorough knowledge of software quality assurance, automated browser testing with Selenium and Playwright, API testing with Postman, and defect lifecycles.',
    duration: '12 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹28,000',
    status: 'Enrolling Now',
    bestFor: 'Graduates wanting an accessible, structured, and fast pathway into software IT teams',
    accentColor: '#D98B42',
    borderColor: '#F8D8B6',
    bgLight: 'from-[#D98B42]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['Manual QA Methodologies', 'Selenium & Playwright Automation', 'REST API Testing with Postman', 'Jira, Bugzilla & Test Management'],
  },
  {
    id: 'ai-nontech',
    title: 'AI for Non-Technical Graduates',
    icon: Bot,
    badge: 'All Degrees Welcome',
    description:
      'Harness generative AI, prompt engineering, no-code automated business workflows, digital analytics, and AI copilots to excel in business and management roles.',
    duration: '10 Weeks',
    mode: 'In-Person, Berhampur',
    fee: '₹24,000',
    status: 'Enrolling Now',
    bestFor: 'BA, B.Com, BBA, and non-STEM graduates wanting high-leverage modern digital skills',
    accentColor: '#C77A32',
    borderColor: '#F3D2B3',
    bgLight: 'from-[#C77A32]/10 via-[#FFFCF8] to-[#FFFCF8]',
    highlights: ['Practical AI & LLM Literacy', 'Prompt Engineering for Operations', 'No-Code Workflow Automations', 'Digital Workplace AI Copilots'],
  },
];

export default function GraduateAcceleratorPage({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateInternships,
  onNavigateAssessment,
}: GraduateAcceleratorPageProps) {
  const [selectedBackground, setSelectedBackground] = useState('B.Tech (CS / IT / ECE)');
  const [selectedInterest, setSelectedInterest] = useState('Building full-stack web & mobile apps');
  const [activeNav, setActiveNav] = useState('Graduates');
  const [selectedTrackModal, setSelectedTrackModal] = useState<TrackItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

    if (item.label === 'Graduates') {
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

    if (item.label === 'Internships' && onNavigateInternships) {
      onNavigateInternships();
      return;
    }

    if (item.label === 'Skill Assessment') {
      if (onNavigateAssessment) {
        onNavigateAssessment();
        return;
      }
      const el = document.getElementById('graduates-selector');
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elRect - bodyRect - offset, behavior: 'smooth' });
      }
      return;
    }

    if (item.label === 'FAQ') {
      const el = document.getElementById('graduates-faq');
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

  // Dynamic recommendation logic based on background and interest
  const getDynamicRecommendation = (background: string, interest: string): TrackItem => {
    if (interest.includes('AI') || interest.includes('generative')) {
      return TRACKS_DATA[1]; // AI & GenAI
    }
    if (interest.includes('Cloud') || interest.includes('DevOps')) {
      return TRACKS_DATA[2]; // Cloud & DevOps
    }
    if (interest.includes('Data') || interest.includes('analytics')) {
      return TRACKS_DATA[3]; // Data Analytics
    }
    if (interest.includes('Quality') || interest.includes('testing')) {
      return TRACKS_DATA[4]; // Software Testing
    }
    if (interest.includes('operations') || background.includes('B.Com') || background.includes('BBA') || background.includes('BA')) {
      return TRACKS_DATA[5]; // AI for Non-Tech
    }
    return TRACKS_DATA[0]; // Full-Stack Default
  };

  const currentRecommendation = getDynamicRecommendation(selectedBackground, selectedInterest);

  const scrollToTracks = () => {
    const el = document.getElementById('graduates-tracks');
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  const scrollToSelector = () => {
    const el = document.getElementById('graduates-selector');
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

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
                const isActive = item.label === 'Graduates';
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
        id="graduates-hero"
        className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-[#0B2145] text-white scroll-mt-28"
      >
        {/* Student Group Background Image Treatment */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <img
            src="/images/academy/student_group.jpg"
            alt="OD AI Academy Graduates Cohort"
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
                <span className="text-[11px] sm:text-xs font-medium text-white/80">College Programs</span>
                <span className="text-xs text-white/40">→</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#F4B942]">
                  Graduate Accelerator
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
                Career Accelerator for Graduates
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6"
            >
              Graduated? <br />
              <span className="italic font-normal text-[#F4B942]">Get Job-Ready, Fast.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#D0DCED] max-w-2xl mx-auto leading-relaxed mb-8"
            >
              Short-term, specialised, industry-focused programs for graduates — with real projects, career preparation and honest guidance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-14"
            >
              <button
                onClick={() => onOpenEnquire('Graduate Skill Assessment')}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#F4B942] hover:bg-[#e2aa38] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Take a Skill Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0B2145]" />
              </button>
              <button
                onClick={scrollToSelector}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer backdrop-blur-xs"
              >
                <span>Find My Track</span>
                <Compass className="w-4 h-4 text-[#F4B942]" />
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
                {/* 1. 6 Tracks */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">6 Tracks</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Specialised Pathways</div>
                </div>

                {/* 2. Project-Based */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Project-Based</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Production Portfolio</div>
                </div>

                {/* 3. In-Person, Berhampur */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">In-Person, Berhampur</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Daily Dedicated Lab</div>
                </div>

                {/* 4. Career Preparation */}
                <div className="pt-2 sm:pt-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-2">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#321C30]">Career Preparation</div>
                  <div className="text-[11px] sm:text-xs text-[#66515F] font-medium">Interviews & Referrals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CHOOSE YOUR TRACK (6 TRACK CARDS IN 3-COLUMN GRID) */}
      {/* ============================================================== */}
      <section id="graduates-tracks" className="py-16 sm:py-24 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Intensive Programs
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#321C30] mb-4">
              Choose Your Track
            </h2>
            <p className="text-sm sm:text-base text-[#66515F] leading-relaxed">
              Engineered for recent college graduates and job seekers. Learn by building real applications, participating in daily standups, and solving actual engineering challenges.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TRACKS_DATA.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] hover:border-[#4388D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 relative group"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: `${track.accentColor}18`, color: track.accentColor }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                        style={{ backgroundColor: `${track.accentColor}15`, color: track.accentColor }}
                      >
                        {track.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-[#321C30] mb-3 group-hover:text-[#4388D5] transition-colors leading-snug">
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed mb-6">
                      {track.description}
                    </p>

                    {/* Highlights bullet chips */}
                    <div className="space-y-2 mb-6">
                      {track.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#321C30]">
                          <Check className="w-3.5 h-3.5 text-[#4388D5] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta + View Track Button */}
                  <div className="pt-6 border-t border-[#E8DCCF]/80">
                    <div className="flex items-center justify-between text-xs text-[#66515F] mb-4">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#BD804A]" />
                        {track.duration}
                      </span>
                      <span className="font-bold text-[#321C30] text-sm">
                        {track.fee}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedTrackModal(track)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FFF9F2] hover:bg-[#0B2145] text-[#321C30] hover:text-white border border-[#E8DCCF] hover:border-[#0B2145] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                    >
                      <span>View Track Details</span>
                      <ArrowRight className="w-4 h-4 text-[#BD804A] group-hover/btn:text-[#F4B942] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FIND YOUR TRACK (INTERACTIVE RECOMMENDATION PANEL) */}
      {/* ============================================================== */}
      <section id="graduates-selector" className="py-14 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFFCF8] border border-[#E8DCCF] p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                  Smart Guidance
                </span>
                <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#321C30] mb-2">
                Find Your Track
              </h2>
              <p className="text-xs sm:text-sm text-[#66515F]">
                Tell us your background and primary interests, and we will recommend the most suitable accelerator pathway.
              </p>
            </div>

            {/* Dropdown Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#66515F] mb-2">
                  Your Background / Degree
                </label>
                <div className="relative">
                  <select
                    id="grad-background-select"
                    value={selectedBackground}
                    onChange={(e) => setSelectedBackground(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF] text-[#321C30] font-semibold text-sm appearance-none cursor-pointer focus:outline-hidden focus:border-[#4388D5]"
                  >
                    <option value="B.Tech (CS / IT / ECE)">B.Tech / B.E. (Computer Science, IT, ECE)</option>
                    <option value="Non-CS Engineering">Non-CS Engineering (Mechanical, Civil, EE, etc.)</option>
                    <option value="BCA / B.Sc (Computer Science / IT)">BCA / B.Sc (Computer Science / IT / Data)</option>
                    <option value="MCA / M.Sc CS">MCA / M.Sc (Computer Applications / CS)</option>
                    <option value="B.Com / BBA / BA / General Science">B.Com / BBA / BA / General Science Degrees</option>
                    <option value="Working Professional">Working Professional / Career Transitioner</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#BD804A] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#66515F] mb-2">
                  What interests you most?
                </label>
                <div className="relative">
                  <select
                    id="grad-interest-select"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF] text-[#321C30] font-semibold text-sm appearance-none cursor-pointer focus:outline-hidden focus:border-[#4388D5]"
                  >
                    <option value="Building full-stack web & mobile apps">Building full-stack web &amp; mobile apps</option>
                    <option value="Artificial intelligence, LLMs & generative agents">Artificial intelligence, LLMs &amp; generative agents</option>
                    <option value="Cloud systems, servers, DevOps & reliability">Cloud systems, servers, DevOps &amp; reliability</option>
                    <option value="Data exploration, analytics, SQL & dashboards">Data exploration, analytics, SQL &amp; dashboards</option>
                    <option value="Quality assurance, bug hunting & test automation">Quality assurance, bug hunting &amp; test automation</option>
                    <option value="Applying AI tools for business operations without heavy coding">Applying AI tools for business operations without heavy coding</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#BD804A] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Dynamically Updated Suggested Track Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF9F2] border border-[#B8D5F3] mb-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4388D5]">
                  Recommended Track Based on Your Selections
                </span>
                <span className="text-xs font-medium text-[#66515F] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#BD804A]" />
                  {currentRecommendation.duration} · {currentRecommendation.mode}
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#321C30] mb-2">
                {currentRecommendation.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#66515F] mb-4">
                {currentRecommendation.bestFor}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#E8DCCF]/80">
                {currentRecommendation.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#321C30]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4388D5] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View Track Button */}
            <div className="text-center">
              <button
                onClick={() => setSelectedTrackModal(currentRecommendation)}
                className="px-8 py-3.5 rounded-full bg-[#0B2145] hover:bg-[#183A6D] text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>View {currentRecommendation.title}</span>
                <ArrowRight className="w-4 h-4 text-[#F4B942]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. COMPARE TRACKS (CLEAN COMPARISON TABLE) */}
      {/* ============================================================== */}
      <section id="graduates-comparison" className="py-16 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Side-by-Side Evaluation
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#321C30] mb-3">
              Compare Tracks
            </h2>
            <p className="text-sm sm:text-base text-[#66515F]">
              Review duration, mode, transparent fees, and suitability to choose the right accelerator cohort for your goals.
            </p>
          </div>

          {/* Responsive Comparison Table Container */}
          <div className="rounded-2xl bg-[#FFFCF8] border border-[#E8DCCF] shadow-xs overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[#FFF9F2] border-b border-[#E8DCCF] text-xs font-bold uppercase tracking-wider text-[#66515F]">
                    <th className="py-4 px-6">Track</th>
                    <th className="py-4 px-6">Best For</th>
                    <th className="py-4 px-4 text-center">Duration</th>
                    <th className="py-4 px-4 text-center">Mode</th>
                    <th className="py-4 px-4 text-right">Fee</th>
                    <th className="py-4 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DCCF]/70 text-xs sm:text-sm text-[#321C30]">
                  {TRACKS_DATA.map((t) => (
                    <tr
                      key={t.id}
                      className="hover:bg-[#FFF9F2]/60 transition-colors cursor-pointer"
                      onClick={() => setSelectedTrackModal(t)}
                    >
                      <td className="py-4 px-6 font-serif font-bold text-sm sm:text-base text-[#0B2145]">
                        {t.title}
                      </td>
                      <td className="py-4 px-6 text-[#66515F] max-w-xs leading-relaxed">
                        {t.bestFor}
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-[#321C30] whitespace-nowrap">
                        {t.duration}
                      </td>
                      <td className="py-4 px-4 text-center text-[#66515F] whitespace-nowrap">
                        {t.mode}
                      </td>
                      <td className="py-4 px-4 text-right font-bold text-[#321C30] whitespace-nowrap">
                        {t.fee}
                      </td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#FFF9F2]/40 border-t border-[#E8DCCF] text-center text-xs text-[#66515F]">
              * Modular installment options available for all tracks upon counselling. All tracks include career preparation &amp; interview assistance.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SUPPORTING INFORMATION CARDS (3 COMPACT CARDS) */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Entry Assessment */}
            <div className="rounded-2xl bg-[#FFFCF8] border border-[#E8DCCF] p-7 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#4388D5]/10 flex items-center justify-center text-[#4388D5] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">
                  Entry Assessment
                </h3>
                <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                  A diagnostic assessment to evaluate current analytical thinking and programming basics. No negative scoring — it allows instructors to place you in the best starting cohort.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8DCCF]/70 text-xs font-semibold text-[#4388D5]">
                Diagnostic &amp; Baseline Mapping
              </div>
            </div>

            {/* Card 2: 2-Week Foundation Bridge */}
            <div className="rounded-2xl bg-[#FFFCF8] border border-[#E8DCCF] p-7 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#BD804A]/10 flex items-center justify-center text-[#BD804A] mb-4">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">
                  2-Week Foundation Bridge
                </h3>
                <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                  An intensive initial bridge covering command line fluency, Git/GitHub collaborative workflows, clean code architecture, and algorithm practice before starting track specialisation.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8DCCF]/70 text-xs font-semibold text-[#BD804A]">
                Zero-Assumption Onboarding
              </div>
            </div>

            {/* Card 3: Honest Outcomes */}
            <div className="rounded-2xl bg-[#FFFCF8] border border-[#E8DCCF] p-7 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#824D74]/10 flex items-center justify-center text-[#824D74] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#321C30] mb-2">
                  Honest Outcomes
                </h3>
                <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                  Verifiable production code portfolios over paper certificates. We do not make misleading 100% placement promises; instead, we provide rigorous training, mock interviews, and direct referrals.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8DCCF]/70 text-xs font-semibold text-[#824D74]">
                Realistic &amp; Career-Aligned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 1 — KEY LEARNING DOMAINS */}
      {/* ============================================================== */}
      <section id="graduates-domains" className="py-14 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Comprehensive Skill Architecture
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#321C30]">
              Key Learning Domains
            </h2>
          </div>

          {/* Single horizontal row of 9 compact cards on desktop */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-3.5">
            {LEARNING_DOMAINS.map((domain, index) => {
              const Icon = domain.icon;
              const isOrange = index % 2 === 1;
              const iconColor = isOrange ? '#D98B42' : '#4388D5';
              const iconBg = isOrange ? 'bg-[#FCE9DD]/70' : 'bg-[#DCEBFA]/70';
              return (
                <div
                  key={domain.label}
                  className="rounded-xl sm:rounded-2xl bg-[#FFFCF8] border border-[#B8D5F3] shadow-2xs hover:shadow-xs hover:border-[#4388D5] p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all group min-h-[115px]"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shrink-0`}
                  >
                    <Icon className="w-5 h-5" style={{ color: iconColor }} />
                  </div>
                  <span className="text-xs font-semibold text-[#321C30] leading-snug">
                    {domain.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2 — MEET YOUR MENTORS */}
      {/* ============================================================== */}
      <section id="graduates-mentors" className="py-14 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Practitioner Faculty
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#321C30]">
              Meet Your Mentors
            </h2>
          </div>

          {/* 4 equal white cards in one horizontal row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {['Mentor 1', 'Mentor 2', 'Mentor 3', 'Mentor 4'].map((name) => (
              <div
                key={name}
                className="rounded-2xl bg-[#FFFCF8] border border-[#B8D5F3] shadow-2xs hover:shadow-xs p-7 sm:p-8 text-center flex flex-col items-center justify-between transition-all min-h-[260px]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#DCEBFA] text-[#4388D5] flex items-center justify-center mx-auto mb-4 border border-[#B8D5F3]/60 shadow-2xs">
                    <Users className="w-8 h-8 text-[#4388D5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#321C30] mb-1">
                    {name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66515F] mb-4">
                    Name, role &amp; verified credentials
                  </p>
                </div>
                <div>
                  <span className="inline-block border border-[#BD804A] text-[#BD804A] text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    PROFILE PLACEHOLDER
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3 — FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section id="graduates-faq" className="py-14 sm:py-20 relative z-10 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD804A]">
                Got Questions?
              </span>
              <span className="w-5 h-[1.5px] bg-[#BD804A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#321C30]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FFFCF8] border border-[#B8D5F3] overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#0B2145] text-white rotate-180' : 'bg-[#DCEBFA] text-[#0B2145]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-current" />
                    </span>
                    <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#321C30] flex-1">
                      {faq.question}
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
                        <div className="px-5 sm:px-6 pb-6 pl-16 sm:pl-18 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#B8D5F3]/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* SECTION 4 — GRADUATE PROGRAMME HIGHLIGHT STRIP */}
          {/* ============================================================ */}
          <div className="mt-12 sm:mt-16">
            <div className="rounded-2xl bg-[#0B2145] text-white border border-[#18396D] shadow-md px-6 py-4 sm:py-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center divide-y sm:divide-y-0 lg:divide-x divide-white/10">
                {[
                  { label: 'Industry Mentorship', icon: Users, badge: 'VERIFIED' },
                  { label: 'Real-World Projects', icon: FolderGit2, badge: 'HANDS-ON' },
                  { label: 'Career Guidance', icon: Compass, badge: '1-ON-1' },
                  { label: 'Industry Partnerships', icon: Building2, badge: 'ECOSYSTEM' },
                  { label: 'Alumni Network', icon: GraduationCap, badge: 'ACTIVE' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="pt-2 sm:pt-0 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-bold text-[#F4B942] uppercase tracking-wider bg-[#F4B942]/15 px-2 py-0.5 rounded-full mb-1.5 border border-[#F4B942]/30">
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white">
                        <Icon className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5 — FINAL GRADUATE CTA BANNER */}
      {/* ============================================================== */}
      <section id="graduates-cta" className="py-14 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0B2145] text-white border border-[#18396D] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] sm:min-h-[400px]">
              {/* Left Side: Campus Image (approx. 40-45% width) */}
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
                {/* Bottom gradient blend for mobile screens */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2145] to-transparent lg:hidden" />
              </div>

              {/* Right Side: Exact Text Content (55-60% width) */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-center">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-4">
                  Make the Most of Your{' '}
                  <span className="italic font-normal text-[#F4B942]">College Years.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#D0DCED] leading-relaxed max-w-xl mb-8">
                  Learn in-demand skills. Build real projects. Get industry exposure. Be career-ready.
                </p>
                <div>
                  <button
                    onClick={() => onOpenEnquire('College Programs — Graduate Track')}
                    className="px-8 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#e2aa38] text-[#0B2145] font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <span>Enquire for College Programs</span>
                    <ArrowRight className="w-4 h-4 text-[#0B2145] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — EXISTING OD AI HUB FOOTER */}
      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />

      {/* Track Details Modal */}
      <AnimatePresence>
        {selectedTrackModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FFFCF8] rounded-3xl border border-[#E8DCCF] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button
                onClick={() => setSelectedTrackModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FFF9F2] text-[#66515F] hover:text-[#321C30] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `${selectedTrackModal.accentColor}15`, color: selectedTrackModal.accentColor }}
                >
                  {selectedTrackModal.badge}
                </span>
                <span className="text-xs text-[#66515F] font-medium">
                  {selectedTrackModal.duration} · {selectedTrackModal.mode}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#321C30] mb-3">
                {selectedTrackModal.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed mb-6">
                {selectedTrackModal.description}
              </p>

              <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#E8DCCF] mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#BD804A] mb-3">
                  Core Competencies &amp; Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#321C30]">
                  {selectedTrackModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#4388D5] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#66515F] mb-6 pb-4 border-b border-[#E8DCCF]">
                <div>
                  <div className="font-bold text-[#321C30] text-lg sm:text-xl">
                    {selectedTrackModal.fee}
                  </div>
                  <div className="text-[11px] text-[#66515F]">Transparent course tuition</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-700 font-bold">{selectedTrackModal.status}</div>
                  <div className="text-[11px] text-[#66515F]">Batch intake limited to 20 seats</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const trackName = selectedTrackModal.title;
                    setSelectedTrackModal(null);
                    onOpenEnquire(`Graduate Track: ${trackName}`);
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-[#0B2145] hover:bg-[#183A6D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Apply for This Track</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B942]" />
                </button>
                <button
                  onClick={() => setSelectedTrackModal(null)}
                  className="py-3 px-6 rounded-full bg-[#FFF9F2] hover:bg-[#FCE9DD] border border-[#E8DCCF] text-[#321C30] font-semibold text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
