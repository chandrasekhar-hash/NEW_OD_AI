import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Wrench,
  Cpu,
  Sparkles,
  Briefcase,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
  MousePointer2,
  Users,
  Compass,
  Award,
  Layers,
  Handshake,
  Clock,
  Code2,
  Terminal,
  Rocket,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import Footer from '../../../components/footer/Footer';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';

interface AcademyPageProps {
  onOpenEnquire: (program?: string) => void;
  onNavigateHome: () => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
  onNavigateInternships?: () => void;
  onNavigateAssessment?: () => void;
}

interface LearningPathCard {
  id: string;
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  keyTopics: string[];
  cta: string;
  accentColor: string;
  numColor: string;
  bgGradient: string;
  collapsedBg: string;
  badgeBg: string;
  badgeColor: string;
  tabBorder: string;
}

// 6 Learning Paths as requested in visual reference
const LEARNING_PATHS: LearningPathCard[] = [
  {
    id: 'school',
    number: '01',
    label: 'CLASS 5–10',
    title: 'School Programs',
    subtitle: 'Spark curiosity early.',
    description:
      'Introduce young learners to the world of technology through engaging, age-appropriate learning experiences and computational thinking.',
    icon: GraduationCap,
    keyTopics: [
      'AI and coding fundamentals',
      'Robotics and IoT basics',
      'Creative problem-solving',
      'Hands-on technology activities',
    ],
    cta: 'Explore School Programs →',
    accentColor: '#D98B42',
    numColor: '#C77A32',
    bgGradient: 'from-[#D98B42]/12 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#FFF8F2]',
    badgeBg: '#FCE9DD',
    badgeColor: '#C77A32',
    tabBorder: '#EBC99A',
  },
  {
    id: 'college',
    number: '02',
    label: 'COLLEGE LEARNERS',
    title: 'College Programs',
    subtitle: 'Turn knowledge into skills.',
    description:
      'Help college students connect academic learning with practical technology skills, real-world projects and structured industry mentorship alongside degree studies.',
    icon: BookOpen,
    keyTopics: [
      'Programming and software development',
      'Artificial intelligence fundamentals',
      'Data science and analytics',
      'Practical projects and portfolios',
    ],
    cta: 'Explore College Programs →',
    accentColor: '#4388D5',
    numColor: '#2E6EB5',
    bgGradient: 'from-[#4388D5]/12 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#F2F7FD]',
    badgeBg: '#DCEBFA',
    badgeColor: '#2E6EB5',
    tabBorder: '#B8D5F3',
  },
  {
    id: 'diploma',
    number: '03',
    label: 'DIPLOMA & ITI',
    title: 'Diploma & ITI Programs',
    subtitle: 'Build practical expertise.',
    description:
      'Develop technology and automation skills through hands-on learning designed around technical, polytechnic and vocational backgrounds.',
    icon: Wrench,
    keyTopics: [
      'Applied AI and automation',
      'Technical computing skills',
      'Industry-oriented projects',
      'Practical problem-solving',
    ],
    cta: 'Explore Diploma Programs →',
    accentColor: '#A6B28B',
    numColor: '#5A6B40',
    bgGradient: 'from-[#A6B28B]/15 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#F4F7F0]',
    badgeBg: '#E6ECE0',
    badgeColor: '#5A6B40',
    tabBorder: '#A6B28B',
  },
  {
    id: 'advanced',
    number: '04',
    label: 'UG & PG LEARNERS',
    title: 'Advanced Learning Programs',
    subtitle: 'Go deeper. Build further.',
    description:
      'Explore advanced technology concepts and develop the capabilities to build scalable applications and work on meaningful technical capstones.',
    icon: Cpu,
    keyTopics: [
      'Advanced AI and machine learning concepts',
      'Full-stack development',
      'Data analytics',
      'Research and project development',
    ],
    cta: 'Explore Advanced Programs →',
    accentColor: '#A98BCB',
    numColor: '#7856A3',
    bgGradient: 'from-[#A98BCB]/15 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#F7F4FC]',
    badgeBg: '#E8E0F5',
    badgeColor: '#7856A3',
    tabBorder: '#A98BCB',
  },
  {
    id: 'non-tech',
    number: '05',
    label: 'NON-TECH BACKGROUNDS',
    title: 'AI for Everyone',
    subtitle: 'Make technology work for you.',
    description:
      'Understand how AI and digital tools can improve productivity, decision-making and everyday professional work, even without a prior coding background.',
    icon: Sparkles,
    keyTopics: [
      'AI literacy and applications',
      'Productivity tools',
      'No-code and automation concepts',
      'Digital business skills',
    ],
    cta: 'Explore Non-Tech Programs →',
    accentColor: '#D98B42',
    numColor: '#C77A32',
    bgGradient: 'from-[#D98B42]/12 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#FFF8F2]',
    badgeBg: '#FCE9DD',
    badgeColor: '#C77A32',
    tabBorder: '#EBC99A',
  },
  {
    id: 'career',
    number: '06',
    label: 'GRADUATES & PROFESSIONALS',
    title: 'Career & Professional Development',
    subtitle: 'Prepare for what comes next.',
    description:
      'Strengthen your technical capabilities, build practical experience and prepare for opportunities in the rapidly evolving technology landscape.',
    icon: Briefcase,
    keyTopics: [
      'Career-oriented technical training',
      'Portfolio and project development',
      'Interview preparation',
      'Career guidance and mentorship',
    ],
    cta: 'Explore Career Programs →',
    accentColor: '#824D74',
    numColor: '#321C30',
    bgGradient: 'from-[#824D74]/12 via-[#FFFFFF] to-[#FFFFFF]',
    collapsedBg: 'bg-[#F8F3F7]',
    badgeBg: '#EFE3ED',
    badgeColor: '#321C30',
    tabBorder: '#824D74',
  },
];

const FAQS = [
  {
    q: 'Who can join OD AI Academy?',
    a: 'Students from Class 5 onwards, +2 science learners, college students (B.Tech, BCA, B.Sc, MCA), recent graduates and working professionals. Programs are structured for distinct experience levels.',
  },
  {
    q: 'Do I need prior coding experience?',
    a: 'No prior experience is required for foundation programs. For advanced specialization tracks, introductory prerequisites and diagnostic assessments help place you in the right cohort.',
  },
  {
    q: 'How does the Weekend Industry Mentorship work?',
    a: 'The program is designed to run parallel to your college studies: 2 hours on Saturday and 2 hours on Sunday, featuring live code sessions, industry mentor interaction, and production projects.',
  },
  {
    q: 'What is the fee and scholarship policy?',
    a: 'The proposed fee for the Weekend Mentorship program is ₹30,000 / year. Merit-based scholarships and selection test details are currently TBC (to be confirmed with upcoming batch announcements).',
  },
  {
    q: 'Will I receive internship or career support?',
    a: 'Yes. College and Graduate tracks include industry-style project reviews, resume refinement, mock interviews, and access to internship opportunities within our technology partner ecosystem.',
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Verified completion certificates and project credentials are awarded upon successful completion of required capstone milestones, code reviews, and project submissions.',
  },
];

// Sub-navbar item interface and links matching reference screenshot
interface SubNavItem {
  label: string;
  targetId: string;
  cardIndex?: number;
}

const ACADEMY_SUBNAV_LINKS: SubNavItem[] = [
  { label: 'Overview', targetId: 'academy-overview' },
  { label: 'School', targetId: 'academy-paths', cardIndex: 0 },
  { label: 'After +2', targetId: 'academy-yearwise' },
  { label: 'College Programs', targetId: 'academy-mentorship', cardIndex: 1 },
  { label: 'Graduates', targetId: 'academy-paths', cardIndex: 5 },
  { label: 'Internships', targetId: 'academy-model' },
  { label: 'Skill Assessment', targetId: 'academy-path-selector' },
  { label: 'FAQ', targetId: 'academy-faq' },
];

export default function AcademyPage({
  onOpenEnquire,
  onNavigateHome,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateInternships,
  onNavigateAssessment,
}: AcademyPageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('Overview');
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // College Learning Path Selector state
  const [selectedDegree, setSelectedDegree] = useState('B.Tech');
  const [selectedYear, setSelectedYear] = useState('2nd Year');

  // Carousel refs & interaction states
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelAccumulatorRef = useRef<number>(0);
  const lastWheelTimeRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isPointerDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  const totalCards = LEARNING_PATHS.length;

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Track active section for sub-navbar
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      const scrollPos = window.scrollY + 160;

      const sections: { id: string; label: string }[] = [
        { id: 'academy-faq', label: 'FAQ' },
        { id: 'academy-why', label: 'Internships' },
        { id: 'academy-model', label: 'Internships' },
        { id: 'academy-path-selector', label: 'Skill Assessment' },
        { id: 'academy-yearwise', label: 'After +2' },
        { id: 'academy-mentorship', label: 'College Programs' },
        { id: 'academy-paths', label: 'School' },
        { id: 'academy-overview', label: 'Overview' },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveNav(sec.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubNavClick = (item: SubNavItem) => {
    setActiveNav(item.label);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000);

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

    if (item.label === 'Skill Assessment' && onNavigateAssessment) {
      onNavigateAssessment();
      return;
    }

    if (item.cardIndex !== undefined) {
      triggerCardTransition(item.cardIndex);
    }

    if (item.label === 'Overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(item.targetId);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const triggerCardTransition = useCallback(
    (targetIndex: number) => {
      const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetIndex));
      if (clampedIndex === activeIndex || isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      setActiveIndex(clampedIndex);

      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = setTimeout(() => {
        isTransitioningRef.current = false;
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

  // Wheel interaction for carousel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const now = Date.now();

      if (now - lastWheelTimeRef.current > 400) {
        wheelAccumulatorRef.current = 0;
      }
      lastWheelTimeRef.current = now;

      if (delta < 0) {
        if (activeIndex > 0) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            wheelAccumulatorRef.current += delta;
            if (wheelAccumulatorRef.current <= -75) {
              handlePrev();
              wheelAccumulatorRef.current = 0;
            }
          }
        } else {
          wheelAccumulatorRef.current = 0;
        }
      } else if (delta > 0) {
        if (activeIndex < totalCards - 1) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            wheelAccumulatorRef.current += delta;
            if (wheelAccumulatorRef.current >= 75) {
              handleNext();
              wheelAccumulatorRef.current = 0;
            }
          }
        } else {
          wheelAccumulatorRef.current = 0;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeIndex, handleNext, handlePrev, totalCards]);

  // Pointer drag events for carousel
  const handlePointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') && !target.closest('.accordion-panel')) return;
    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    hasDraggedRef.current = false;
    if (containerRef.current) {
      try {
        containerRef.current.setPointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    currentXRef.current = e.clientX;
    if (Math.abs(currentXRef.current - startXRef.current) > 10) {
      hasDraggedRef.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {}
    }
    const diff = currentXRef.current - startXRef.current;
    if (!isTransitioningRef.current) {
      if (diff < -45) handleNext();
      else if (diff > 45) handlePrev();
    }
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  const handlePointerCancel = () => {
    isPointerDownRef.current = false;
    hasDraggedRef.current = false;
  };

  // College Roadmap Selector logic
  const getRoadmapForSelection = (degree: string, year: string) => {
    if (degree === 'B.Tech' && year === '2nd Year') {
      return {
        focus: 'Software Development Essentials',
        subtitle: 'Core engineering systems, data structures & modern full-stack workflows',
        topics: [
          'DSA & Algorithms',
          'Databases & APIs',
          'Web Development',
          'Cloud Foundations',
        ],
      };
    }
    if (year === '1st Year') {
      return {
        focus: 'Programming & CS Foundations',
        subtitle: 'Core problem solving, computational logic & Linux workflows',
        topics: [
          'Programming (Python)',
          'Linux & Git Workflows',
          'Algorithmic Problem Solving',
          'AI Fundamentals & Prompting',
        ],
      };
    }
    if (year === '2nd Year') {
      return {
        focus: 'Software Development Essentials',
        subtitle: 'Applied system building, APIs, and scalable web engineering',
        topics: [
          'DSA & Algorithms',
          'Databases & APIs',
          'Web Development',
          'Cloud Foundations',
        ],
      };
    }
    if (year === '3rd Year') {
      return {
        focus: 'Specialization & Applied AI',
        subtitle: 'Machine learning, production pipelines, and enterprise architectures',
        topics: [
          'AI/ML & Generative AI',
          'Full-Stack / DevOps',
          'Data Engineering',
          'Real-World Projects',
        ],
      };
    }
    return {
      focus: 'Industry-Ready & Capstone Engineering',
      subtitle: 'Production AI agents, capstone portfolio, and placement acceleration',
      topics: [
        'AI Agents & Advanced Projects',
        'Internships / Industry Exposure',
        'Interview & Career Prep',
        'Portfolio & Product Demo',
      ],
    };
  };

  const currentRoadmap = getRoadmapForSelection(selectedDegree, selectedYear);

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
              <span className="font-editorial text-sm sm:text-base font-bold tracking-tight text-[#F4B942] select-none whitespace-nowrap">
                OD AI Academy
              </span>
              <div className="w-[1px] h-4 sm:h-5 bg-white/20 mx-3 sm:mx-4 shrink-0" />
            </div>

            {/* Navigation links in exact order */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth flex-1">
              {ACADEMY_SUBNAV_LINKS.map((item) => {
                const isActive = activeNav === item.label;
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
        id="academy-overview"
        className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 overflow-hidden bg-transparent scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 mb-4"
          >
            <span className="w-6 h-[1.5px] bg-[#D98B42]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D98B42]">
              OD AI ACADEMY • LEARN TODAY. LEAD TOMORROW.
            </span>
            <span className="w-6 h-[1.5px] bg-[#D98B42]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-editorial text-[#321C30] tracking-tight max-w-4xl mx-auto leading-[1.08]"
          >
            Learn today.{' '}
            <span className="font-editorial-italic text-[#C77A32] block sm:inline">
              Lead tomorrow.
            </span>
          </motion.h1>

          {/* Supporting Headline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-[#321C30] mt-4 sm:mt-5 font-editorial-italic"
          >
            Build the skills to shape an AI-powered future.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="text-sm sm:text-base md:text-lg text-[#66515F] max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed"
          >
            From your first line of code to advanced AI applications, OD AI Academy helps school students,
            college learners, graduates and working professionals develop practical technology skills
            through structured learning, hands-on projects and industry-relevant training.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById('academy-paths');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all border border-[#EBC99A]/30 cursor-pointer"
            >
              <span>Explore 6 Learning Paths</span>
              <ArrowRight className="w-4 h-4 text-[#EBC99A]" />
            </button>
            <button
              onClick={() => onOpenEnquire('Talk to a Counsellor')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#FFF9F2] text-[#321C30] hover:text-[#C77A32] font-semibold text-sm border border-[#EBC99A] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              Talk to a Counsellor →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. STATISTICS STRIP (FLOATING WHITE PILL CARD - 4 STATS) */}
      {/* ============================================================== */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF]/95 backdrop-blur-md rounded-3xl sm:rounded-full border-[1.5px] border-[#B8D5F3]/70 shadow-[0_12px_40px_rgba(50,28,48,0.06)] py-5 px-6 sm:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4 items-center">
            {/* Stat 1: 1,000+ Students Trained */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="flex items-center gap-3 justify-center sm:justify-start"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FCE9DD] border border-[#EBC99A]/50 text-[#D98B42] flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-editorial text-xl sm:text-2xl font-bold text-[#321C30] leading-tight">
                  1,000+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#66515F]">
                  Students Trained
                </div>
              </div>
            </motion.div>

            {/* Stat 2: 100+ Real-world Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="flex items-center gap-3 justify-center sm:justify-start md:border-l md:border-[#B8D5F3]/70 md:pl-4"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#DCEBFA] border-[1.5px] border-[#B8D5F3] text-[#4388D5] flex items-center justify-center shrink-0 shadow-2xs">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-editorial text-xl sm:text-2xl font-bold text-[#321C30] leading-tight">
                  100+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#66515F]">
                  Real-world Projects
                </div>
              </div>
            </motion.div>

            {/* Stat 3: 20+ Institutional Collaborations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.19 }}
              className="flex items-center gap-3 justify-center sm:justify-start md:border-l md:border-[#B8D5F3]/70 md:pl-4"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FCE9DD] border border-[#EBC99A]/50 text-[#D98B42] flex items-center justify-center shrink-0 shadow-2xs">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-editorial text-xl sm:text-2xl font-bold text-[#321C30] leading-tight">
                  20+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#66515F]">
                  Institutional Collaborations
                </div>
              </div>
            </motion.div>

            {/* Stat 4: Dedicated Career & Internship Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="flex items-center gap-3 justify-center sm:justify-start md:border-l md:border-[#B8D5F3]/70 md:pl-4"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E6ECE0] border border-[#C5D5BA] text-[#5A6B40] flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-editorial text-xl sm:text-2xl font-bold text-[#321C30] leading-tight">
                  Dedicated
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#66515F]">
                  Career &amp; Internship Opportunities
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================== */}
      {/* 3. SIX LEARNING PATHS (INTERACTIVE CAROUSEL) */}
      {/* ============================================================== */}
      <section id="academy-paths" className="py-20 sm:py-28 relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 mb-3"
            >
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D98B42]">
                SIX WAYS TO LEARN
              </span>
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              Choose your{' '}
              <span className="font-editorial-italic text-[#C77A32]">
                learning path.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-sm sm:text-base text-[#66515F] mt-3 sm:mt-4 leading-relaxed"
            >
              Every learner starts somewhere different. Find a learning path that matches your education,
              interests and career goals. Explore practical programs designed to help you learn, build and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/90 border border-[#EBC99A]/60 shadow-2xs text-xs font-medium text-[#66515F]"
            >
              <MousePointer2 className="w-3.5 h-3.5 text-[#D98B42] animate-pulse" />
              <span>Hover panels, drag horizontally or scroll to expand</span>
            </motion.div>
          </div>

          {/* Top Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 no-scrollbar mb-6 sm:mb-8">
            {LEARNING_PATHS.map((card, idx) => {
              const isSelected = activeIndex === idx;
              const Icon = card.icon;
              const isCollege = card.id === 'college';

              return (
                <button
                  key={card.id}
                  onClick={() => triggerCardTransition(idx)}
                  style={{
                    borderColor: isSelected
                      ? isCollege
                        ? '#4388D5'
                        : '#321C30'
                      : isCollege
                      ? '#B8D5F3'
                      : card.tabBorder,
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer border-[1.5px] ${
                    isSelected
                      ? isCollege
                        ? 'bg-[#321C30] text-[#FFF9F2] shadow-xs scale-105 ring-2 ring-[#4388D5]/60'
                        : 'bg-[#321C30] text-[#FFF9F2] shadow-xs scale-105'
                      : isCollege
                      ? 'bg-[#F2F7FD] text-[#2E6EB5] hover:bg-[#DCEBFA]/70 hover:border-[#4388D5] shadow-2xs'
                      : 'bg-white text-[#66515F] hover:bg-[#FFF9F2] hover:text-[#321C30] hover:border-[#B8D5F3] shadow-2xs'
                  }`}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: isSelected ? '#FFF9F2' : card.numColor }}
                  />
                  <span>{card.title}</span>
                </button>
              );
            })}
          </div>

          {/* 6-Card Horizontal Accordion Carousel */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className={`w-full p-2.5 sm:p-3.5 md:p-4 rounded-3xl bg-white/95 border-[1.5px] transition-all duration-500 shadow-[0_20px_50px_rgba(50,28,48,0.06)] touch-pan-y cursor-grab ${
              activeIndex === 2
                ? 'border-[#4388D5]/70 ring-1 ring-[#B8D5F3]'
                : 'border-[#B8D5F3]/70 hover:border-[#4388D5]/40'
            }`}
            role="region"
            aria-roledescription="carousel"
            aria-label="OD AI Academy Six Learning Paths Accordion"
            tabIndex={0}
          >
            <div className="flex flex-row items-stretch gap-2 sm:gap-3 md:gap-3.5 h-[560px] sm:h-[600px] md:h-[620px] w-full overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar">
              {LEARNING_PATHS.map((card, idx) => {
                const isExpanded = activeIndex === idx;
                const Icon = card.icon;
                const isCollege = card.id === 'college';

                return (
                  <div
                    key={card.id}
                    ref={(el) => {
                      panelsRef.current[idx] = el;
                    }}
                    onMouseEnter={() => {
                      if (
                        window.innerWidth >= 768 &&
                        !isTransitioningRef.current &&
                        idx !== activeIndex
                      ) {
                        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        hoverTimeoutRef.current = setTimeout(() => {
                          triggerCardTransition(idx);
                        }, 200);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                    }}
                    onClick={() => {
                      if (!hasDraggedRef.current && !isExpanded) {
                        triggerCardTransition(idx);
                      }
                    }}
                    style={{
                      flex: isExpanded ? '6 1 0%' : '1 1 0%',
                      boxShadow: isExpanded
                        ? isCollege
                          ? '0 20px 45px rgba(50,28,48,0.08), 0 0 0 2px #4388D5'
                          : `0 20px 45px rgba(50,28,48,0.08), 0 0 0 1.5px ${card.accentColor}40`
                        : undefined,
                      borderColor: isExpanded
                        ? isCollege
                          ? '#4388D5'
                          : '#EBC99A'
                        : isCollege
                        ? '#B8D5F3'
                        : '#E8D9C8',
                      transition: shouldReduceMotion
                        ? 'none'
                        : 'flex 1600ms cubic-bezier(0.25, 1, 0.35, 1), transform 600ms ease, box-shadow 1400ms cubic-bezier(0.25, 1, 0.35, 1), border-color 1400ms cubic-bezier(0.25, 1, 0.35, 1), background-color 800ms ease',
                    }}
                    className={`accordion-panel relative rounded-2xl overflow-hidden snap-center border-[1.5px] ${
                      isExpanded
                        ? `w-[76vw] sm:w-auto min-w-[270px] sm:min-w-0 shrink-0 sm:shrink bg-white cursor-default ${
                            isCollege ? 'border-[#4388D5]' : 'border-[#EBC99A]'
                          }`
                        : `w-14 sm:w-auto min-w-[56px] sm:min-w-[65px] md:min-w-[75px] shrink-0 sm:shrink ${card.collapsedBg} ${
                            isCollege
                              ? 'border-[#B8D5F3] hover:border-[#4388D5]'
                              : 'border-[#E8D9C8] hover:border-[#B8D5F3]'
                          } shadow-2xs hover:shadow-xs cursor-pointer`
                    }`}
                  >
                    {/* Top Accent Stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px] z-20"
                      style={{ backgroundColor: card.accentColor }}
                    />

                    {/* Collapsed Vertical Panel */}
                    {!isExpanded && (
                      <div className="w-full h-full flex flex-col items-center justify-between py-5 sm:py-6 md:py-7 px-1 relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient} opacity-60 pointer-events-none`}
                        />
                        <div className="flex flex-col items-center gap-2.5 relative z-10">
                          <span
                            className="font-mono text-xs sm:text-sm font-extrabold tracking-wider"
                            style={{ color: card.numColor }}
                          >
                            {card.number}
                          </span>
                          <div
                            className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs"
                            style={{
                              backgroundColor: card.badgeBg,
                              borderColor: card.tabBorder,
                              color: card.numColor,
                            }}
                          >
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                        </div>
                        <div className="my-auto relative z-10 flex items-center justify-center py-3">
                          <span
                            className="font-editorial text-xs sm:text-sm md:text-base font-bold text-[#321C30] tracking-wider whitespace-nowrap select-none"
                            style={{
                              writingMode: 'vertical-rl',
                              transform: 'rotate(180deg)',
                            }}
                          >
                            {card.title}
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-1.5 pb-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: card.accentColor }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Expanded Full Content */}
                    {isExpanded && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`expanded-${card.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          className="w-full h-full p-5 sm:p-7 md:p-8 flex flex-col justify-between relative overflow-y-auto"
                        >
                          {/* Ambient background wash */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} pointer-events-none`}
                          />

                          <div className="space-y-4 sm:space-y-5 relative z-10">
                            {/* Card Header Row */}
                            <div className="flex items-center justify-between border-b border-[#EBC99A]/50 pb-3 sm:pb-4">
                              <div className="flex items-center gap-3">
                                <span
                                  className="font-mono text-xs sm:text-sm font-extrabold px-2.5 py-1 rounded-full border"
                                  style={{
                                    backgroundColor: card.badgeBg,
                                    borderColor: card.tabBorder,
                                    color: card.numColor,
                                  }}
                                >
                                  {card.label}
                                </span>
                              </div>
                              <span
                                className="font-mono text-lg sm:text-2xl font-extrabold"
                                style={{ color: card.numColor }}
                              >
                                {card.number}
                              </span>
                            </div>

                            {/* Title & Subtitle */}
                            <div>
                              <motion.h3
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold font-editorial text-[#321C30] tracking-tight"
                              >
                                {card.title}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.28 }}
                                className="text-sm sm:text-base font-semibold mt-1 font-editorial-italic"
                                style={{ color: card.numColor }}
                              >
                                {card.subtitle}
                              </motion.p>
                            </div>

                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.35 }}
                              className="text-xs sm:text-sm text-[#66515F] leading-relaxed max-w-2xl"
                            >
                              {card.description}
                            </motion.p>

                            {/* Key Topics List */}
                            <div className="space-y-2.5 pt-2">
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.42 }}
                                className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider"
                                style={{ color: card.numColor }}
                              >
                                <Sparkles
                                  className="w-3.5 h-3.5"
                                  style={{ color: card.numColor }}
                                />
                                <span>Key Topics &amp; Fundamentals</span>
                              </motion.div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                                {card.keyTopics.map((topic, tIdx) => (
                                  <motion.div
                                    key={tIdx}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.45,
                                      delay: 0.48 + tIdx * 0.06,
                                    }}
                                    className="flex items-start gap-2"
                                  >
                                    <div
                                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                      style={{
                                        backgroundColor: `${card.accentColor}25`,
                                        color: card.numColor,
                                      }}
                                    >
                                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                                    </div>
                                    <span className="text-xs text-[#321C30] font-medium leading-snug">
                                      {topic}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* CTA Row */}
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="pt-3 sm:pt-4 border-t border-[#EBC99A]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative z-10"
                          >
                            <div className="text-xs font-semibold text-[#66515F]">
                              Path {card.number} of 06 • Structured Cohort Learning
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (card.number === '01' && onNavigateSchool) {
                                  onNavigateSchool();
                                } else if (card.number === '02' && onNavigateCollege) {
                                  onNavigateCollege();
                                } else if (card.number === '06' && onNavigateGraduates) {
                                  onNavigateGraduates();
                                } else {
                                  onOpenEnquire(card.title);
                                }
                              }}
                              className={`w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all group border-[1.5px] cursor-pointer shrink-0 ${
                                isCollege
                                  ? 'border-[#4388D5] hover:border-[#4388D5] hover:ring-2 hover:ring-[#4388D5]/30'
                                  : 'border-[#EBC99A]/30'
                              }`}
                            >
                              <span>{card.cta}</span>
                              <ArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                style={{ color: card.numColor }}
                              />
                            </button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto px-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`p-3 rounded-full border-[1.5px] shadow-2xs transition-all cursor-pointer ${
                  activeIndex === 0
                    ? 'opacity-35 cursor-not-allowed bg-white border-[#B8D5F3]/50 text-[#66515F]'
                    : 'bg-white hover:bg-[#F2F7FD] border-[#B8D5F3] hover:border-[#4388D5] text-[#321C30] hover:text-[#4388D5] hover:shadow-xs active:scale-95'
                }`}
                aria-label="Previous learning path"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold text-[#66515F]">
                0{activeIndex + 1} <span className="text-[#B8D5F3]">/</span> 0{totalCards}
              </span>

              <button
                onClick={handleNext}
                disabled={activeIndex === totalCards - 1}
                className={`p-3 rounded-full border-[1.5px] shadow-2xs transition-all cursor-pointer ${
                  activeIndex === totalCards - 1
                    ? 'opacity-35 cursor-not-allowed bg-white border-[#B8D5F3]/50 text-[#66515F]'
                    : 'bg-white hover:bg-[#F2F7FD] border-[#B8D5F3] hover:border-[#4388D5] text-[#321C30] hover:text-[#4388D5] hover:shadow-xs active:scale-95'
                }`}
                aria-label="Next learning path"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {LEARNING_PATHS.map((card, idx) => {
                const isActive = activeIndex === idx;
                const isCollege = card.id === 'college';
                return (
                  <button
                    key={card.id}
                    onClick={() => triggerCardTransition(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? isCollege
                          ? 'w-8 bg-[#4388D5]'
                          : 'w-8 bg-[#321C30]'
                        : 'w-2.5 bg-[#B8D5F3] hover:bg-[#4388D5]'
                    }`}
                    aria-label={`Go to ${card.title}`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => onOpenEnquire(LEARNING_PATHS[activeIndex].title)}
              className="text-xs font-semibold text-[#C77A32] hover:text-[#4388D5] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Enquire about {LEARNING_PATHS[activeIndex].title}
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WEEKEND INDUSTRY MENTORSHIP BANNER */}
      {/* ============================================================== */}
      <section
        id="academy-mentorship"
        className="py-14 sm:py-20 relative overflow-hidden bg-[#FFFDF9] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden bg-[#291D29] text-[#FFFDFC] border border-[#B77B4B]/30 shadow-2xl p-7 sm:p-10 lg:p-12"
          >
            {/* Ambient Radial Lights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B77B4B]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B67C7]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading, Description & Details */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B77B4B]/20 border border-[#B77B4B]/40 text-[#EBC99A] text-xs font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-[#EBC99A]" />
                  <span>Weekend Industry Mentorship · Next batch TBC</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial tracking-tight text-[#FFFCF8] leading-[1.12]">
                  Choose Any College.{' '}
                  <span className="font-editorial-italic text-[#EBC99A] block sm:inline">
                    Build Your Career With Us.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#E8DCCF] leading-relaxed max-w-2xl">
                  Structured weekend industry mentorship throughout your degree: practical
                  training, AI skills, real projects and career preparation alongside your
                  college studies.
                </p>

                {/* 4 Detail Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  {[
                    { label: 'Saturday: 2 hours + Sunday: 2 hours', icon: Clock },
                    { label: 'Industry Mentors', icon: Users },
                    { label: 'Real Projects & Internship Support', icon: Layers },
                    { label: 'Career & Interview Preparation', icon: Briefcase },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.06 }}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#FFFCF8]"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#B77B4B]/20 text-[#EBC99A] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Proposed Fee & CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                className="lg:col-span-5 xl:col-span-4"
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-[#EBC99A]/30 text-center space-y-4">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#EBC99A]">
                    Tuition &amp; Engagement
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FFFCF8]">
                      ₹30,000
                      <span className="text-sm font-normal text-[#E8DCCF]"> / year</span>
                    </div>
                    <div className="text-xs text-[#E8DCCF]/80 mt-1">
                      Proposed fee · 4 hrs / week
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/20 text-[11px] text-[#E8DCCF] border border-white/5">
                    Selection Test | Scholarships · <span className="font-bold text-[#EBC99A]">DETAILS TBC</span>
                  </div>

                  <button
                    onClick={() => onOpenEnquire('Weekend Mentorship Selection Test')}
                    className="w-full py-3.5 rounded-full bg-[#D98B42] hover:bg-[#C77A32] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Apply for Selection Test</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. YEAR-WISE LEARNING JOURNEY */}
      {/* ============================================================== */}
      <section
        id="academy-yearwise"
        className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF9F2] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D98B42]">
                FOUR-YEAR PROGRESSION
              </span>
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              Year-wise{' '}
              <span className="font-editorial-italic text-[#C77A32]">
                learning journey.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-sm sm:text-base text-[#66515F] mt-3 sm:mt-4 leading-relaxed"
            >
              Structured progression throughout your college degree — from core computational
              foundations to production AI agents.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Year 1 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[#EBC99A]/50 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#EBC99A]/30 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D98B42]">
                  Year 1
                </span>
                <span className="font-mono text-sm font-bold text-[#C77A32]">01</span>
              </div>
              <h3 className="text-xl font-bold font-editorial text-[#321C30]">
                Foundation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#66515F]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B42]" />
                  <span>Programming (Python)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B42]" />
                  <span>Linux &amp; Git</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B42]" />
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B42]" />
                  <span>AI Fundamentals</span>
                </li>
              </ul>
            </motion.div>

            {/* Year 2 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="p-6 rounded-2xl bg-white border-[1.5px] border-[#B8D5F3] shadow-2xs hover:shadow-xs hover:border-[#4388D5] transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#B8D5F3]/50 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4388D5]">
                  Year 2
                </span>
                <span className="font-mono text-sm font-bold text-[#2E6EB5]">02</span>
              </div>
              <h3 className="text-xl font-bold font-editorial text-[#321C30]">
                Development
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#66515F]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4388D5]" />
                  <span>DSA &amp; Algorithms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4388D5]" />
                  <span>Databases &amp; APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4388D5]" />
                  <span>Web Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4388D5]" />
                  <span>Cloud Foundations</span>
                </li>
              </ul>
            </motion.div>

            {/* Year 3 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="p-6 rounded-2xl bg-white border border-[#EBC99A]/50 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#EBC99A]/30 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A98BCB]">
                  Year 3
                </span>
                <span className="font-mono text-sm font-bold text-[#7856A3]">03</span>
              </div>
              <h3 className="text-xl font-bold font-editorial text-[#321C30]">
                Specialization
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#66515F]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98BCB]" />
                  <span>AI/ML &amp; Generative AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98BCB]" />
                  <span>Full-Stack / DevOps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98BCB]" />
                  <span>Data Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98BCB]" />
                  <span>Real-World Projects</span>
                </li>
              </ul>
            </motion.div>

            {/* Year 4 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
              className="p-6 rounded-2xl bg-white border border-[#EBC99A]/50 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#EBC99A]/30 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A6B28B]">
                  Year 4
                </span>
                <span className="font-mono text-sm font-bold text-[#5A6B40]">04</span>
              </div>
              <h3 className="text-xl font-bold font-editorial text-[#321C30]">
                Industry-Ready
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#66515F]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6B28B]" />
                  <span>AI Agents &amp; Advanced Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6B28B]" />
                  <span>Internships / Industry Exposure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6B28B]" />
                  <span>Interview &amp; Career Prep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6B28B]" />
                  <span>Portfolio &amp; Product Demo</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. COLLEGE LEARNING PATH SELECTOR */}
      {/* ============================================================== */}
      <section
        id="academy-path-selector"
        className="py-20 sm:py-28 relative overflow-hidden bg-[#FFFDF9] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D98B42]">
                CUSTOMIZED ROADMAP
              </span>
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              Find Your{' '}
              <span className="font-editorial-italic text-[#C77A32]">
                College Learning Path
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-sm sm:text-base text-[#66515F] mt-3 leading-relaxed"
            >
              Select your degree and current year to view your tailored syllabus and skill milestones.
            </motion.p>
          </div>

          {/* Interactive Selector Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="rounded-3xl bg-white p-6 sm:p-10 border-[1.5px] border-[#B8D5F3] shadow-[0_16px_40px_rgba(50,28,48,0.06)] space-y-8"
          >
            {/* Step 1: Select Degree & Current Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Degree Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#321C30]">
                  Select Degree
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['B.Tech', 'BCA', 'B.Sc', 'MCA'].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setSelectedDegree(deg)}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                        selectedDegree === deg
                          ? 'bg-[#321C30] text-[#FFF9F2] border-[#321C30] shadow-2xs'
                          : 'bg-[#FFF8F2] text-[#66515F] border-[#EBC99A]/60 hover:border-[#D98B42]'
                      }`}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Year Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#321C30]">
                  Current Year
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                        selectedYear === yr
                          ? 'bg-[#4388D5] text-[#FFF9F2] border-[#4388D5] shadow-2xs'
                          : 'bg-[#F2F7FD] text-[#2E6EB5] border-[#B8D5F3] hover:border-[#4388D5]'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Recommended Roadmap Display */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF9F2] border border-[#EBC99A]/70 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#EBC99A]/40 pb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D98B42]">
                    Recommended Plan
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold font-editorial text-[#321C30]">
                    {selectedDegree} – {selectedYear} Focus: {currentRoadmap.focus}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#DCEBFA] border border-[#B8D5F3] text-[#2E6EB5] text-xs font-semibold">
                  Personalized Match
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#66515F]">
                {currentRoadmap.subtitle}
              </p>

              {/* Topics Pills */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#321C30]">
                  Core Syllabus &amp; Modules:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRoadmap.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EBC99A]/50 text-xs sm:text-sm font-medium text-[#321C30]"
                    >
                      <Check className="w-4 h-4 text-[#4388D5] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#66515F]">
                  Ready to enroll or review syllabus with an academic counselor?
                </span>
                <button
                  onClick={() =>
                    onOpenEnquire(
                      `Personalized Plan: ${selectedDegree} (${selectedYear}) - ${currentRoadmap.focus}`
                    )
                  }
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#321C30] hover:bg-[#442542] text-[#FFF9F2] font-semibold text-xs sm:text-sm shadow-xs hover:shadow transition-all border border-[#EBC99A]/30 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Get my personalised plan</span>
                  <ArrowRight className="w-4 h-4 text-[#EBC99A]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. OD AI HUB LEARNING MODEL */}
      {/* ============================================================== */}
      <section
        id="academy-model"
        className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF9F2] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D98B42]">
                METHODOLOGY
              </span>
              <span className="w-6 h-[1.5px] bg-[#D98B42]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              OD AI HUB{' '}
              <span className="font-editorial-italic text-[#C77A32]">
                Learning Model
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-sm sm:text-base text-[#66515F] mt-3 sm:mt-4 leading-relaxed"
            >
              A four-stage framework turning curious students into capable engineering leaders.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'LEARN',
                desc: 'Build strong fundamentals.',
                detail: 'Master modern programming, algorithms, AI foundations and toolchains from first principles.',
                color: '#D98B42',
                badgeBg: '#FCE9DD',
                icon: BookOpen,
              },
              {
                step: '02',
                title: 'BUILD',
                desc: 'Create real solutions.',
                detail: 'Develop production web apps, databases, AI models, and real-world architectures.',
                color: '#4388D5',
                badgeBg: '#DCEBFA',
                icon: Code2,
              },
              {
                step: '03',
                title: 'SOLVE',
                desc: 'Work on real-world problems.',
                detail: 'Tackle open challenges, community problems, and industry-sponsored problem statements.',
                color: '#7856A3',
                badgeBg: '#E8E0F5',
                icon: Terminal,
              },
              {
                step: '04',
                title: 'LAUNCH',
                desc: 'Projects, internships & careers.',
                detail: 'Showcase portfolios, access internship pipelines, and transition smoothly into industry.',
                color: '#5A6B40',
                badgeBg: '#E6ECE0',
                icon: Rocket,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EBC99A]/50 shadow-2xs hover:shadow-xs transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: item.badgeBg, color: item.color }}
                    >
                      Step {item.step}
                    </span>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-2xl font-bold font-editorial text-[#321C30]">
                    {item.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#D98B42] font-editorial-italic">
                    {item.desc}
                  </div>
                  <p className="text-xs text-[#66515F] leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. WHY LEARN AT OD AI HUB? */}
      {/* ============================================================== */}
      <section
        id="academy-why"
        className="py-20 sm:py-28 relative z-10 bg-[#FFFDF9] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              Why Learn at OD AI HUB?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="text-sm sm:text-base text-[#66515F] mt-3 sm:mt-4 leading-relaxed"
            >
              Learning should go beyond theory. Build practical capabilities through experiences
              that connect technology, creativity and real-world applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: '1. Industry Mentors',
                desc: 'Direct guidance from working technology leads, software architects and AI practitioners.',
                icon: Users,
                iconBg: 'bg-[#FCE9DD]',
                border: 'border-[#EBC99A]/50',
                color: 'text-[#D98B42]',
              },
              {
                title: '2. Practical & Project-Based',
                desc: 'Build production-ready applications, live code repositories and practical systems rather than rote memorization.',
                icon: Layers,
                iconBg: 'bg-[#DCEBFA]',
                border: 'border-[#B8D5F3]',
                color: 'text-[#4388D5]',
                isBlue: true,
              },
              {
                title: '3. AI-First Curriculum',
                desc: 'Modern syllabi integrating LLMs, agentic tools, vector search, and contemporary dev toolchains.',
                icon: Sparkles,
                iconBg: 'bg-[#FCE9DD]',
                border: 'border-[#F1B8A5]',
                color: 'text-[#C85B3D]',
              },
              {
                title: '4. Internship & Career Support',
                desc: 'Structured internship pipelines, technical interview preparation, portfolio reviews and career acceleration.',
                icon: Briefcase,
                iconBg: 'bg-[#E6ECE0]',
                border: 'border-[#C5D5BA]',
                color: 'text-[#5A6B40]',
              },
              {
                title: '5. Innovation & Entrepreneurship',
                desc: 'From initial hackathons to pre-incubation, prototyping hardware, MVP development and early startup guidance.',
                icon: Award,
                iconBg: 'bg-[#E8E0F5]',
                border: 'border-[#D5C6E8]',
                color: 'text-[#7856A3]',
              },
              {
                title: '6. Growing Industry Network',
                desc: 'Rooted in Berhampur to connect regional talent with tech enterprises and venture opportunities worldwide.',
                icon: Building2,
                iconBg: 'bg-[#EFE3ED]',
                border: 'border-[#D8BFD4]',
                color: 'text-[#824D74]',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.06 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-white shadow-2xs hover:shadow-xs transition-all ${
                    item.isBlue
                      ? 'border-[1.5px] border-[#B8D5F3] hover:border-[#4388D5]'
                      : 'border border-[#EBC99A]/50 hover:border-[#B8D5F3]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBg} border ${item.border} ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-editorial text-[#321C30] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66515F] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================== */}
      <section
        id="academy-faq"
        className="py-20 sm:py-28 relative z-10 bg-[#FFF9F2] border-t border-[#EBC99A]/40 scroll-mt-36"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#321C30] tracking-tight"
            >
              Frequently asked questions.
            </motion.h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  className={`rounded-2xl bg-white border-[1.5px] overflow-hidden shadow-2xs transition-all ${
                    isOpen
                      ? 'border-[#B8D5F3] ring-1 ring-[#B8D5F3]/50'
                      : 'border-[#E8DCCF] hover:border-[#B8D5F3]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-editorial text-base sm:text-lg font-bold text-[#321C30] hover:text-[#4388D5] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D98B42] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#66515F] leading-relaxed border-t border-[#DCEBFA]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL CTA */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 bg-[#321C30] text-[#FFF9F2] relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D98B42]/15 rounded-full blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6"
        >
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EBC99A]">
            YOUR NEXT CHAPTER STARTS HERE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-[#FFF9F2] tracking-tight">
            Ready to build your future with AI?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#EBC99A] max-w-2xl mx-auto leading-relaxed">
            Start with curiosity. Learn practical skills. Build meaningful projects. Take your next step
            towards an AI-powered future.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquire('Academy Enrolment')}
              className="px-8 py-3.5 rounded-full bg-white text-[#321C30] font-bold text-sm sm:text-base hover:bg-[#FFF9F2] shadow-xs hover:shadow-sm transition-all border border-[#EBC99A] hover:border-[#D98B42] cursor-pointer inline-flex items-center gap-2"
            >
              <span>Talk to Our Academy Team</span>
              <ArrowRight className="w-4 h-4 text-[#D98B42]" />
            </button>
          </div>
          <div className="text-xs sm:text-sm text-[#EBC99A]/80 font-medium tracking-wider pt-2">
            Learn • Build • Innovate • Grow
          </div>
        </motion.div>
      </section>

      {/* ============================================================== */}
      {/* 11. FOOTER */}
      {/* ============================================================== */}
      <Footer
        onOpenEnquire={onOpenEnquire}
        onPreviewItem={(name) => onOpenEnquire(name)}
      />
    </div>
  );
}
