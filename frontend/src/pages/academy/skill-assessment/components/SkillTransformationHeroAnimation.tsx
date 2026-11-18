import React, { useRef, useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import {
  Sparkles,
  Cpu,
  Terminal,
  Brain,
  Lightbulb,
  Compass,
  Layers,
  Rocket,
  CheckCircle2,
  Users,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// DATA DEFINITIONS & COORDINATES
// Center of viewBox="0 0 880 500": (440, 255)
// ---------------------------------------------------------------------------

// 5 Core Foundation Skills (Stage 1 -> Stage 2 -> Stage 3)
interface CoreSkill {
  id: string;
  name: string;
  category: string;
  stage1: { x: number; y: number };
  stage2: { x: number; y: number };
  stage3: { x: number; y: number };
  color: string;
  glow: string;
  labelPlacement: 'top' | 'bottom';
  badgeWidth: number;
}

const CORE_SKILLS: CoreSkill[] = [
  {
    id: 'programming',
    name: 'Programming',
    category: 'Core Logic',
    stage1: { x: 175, y: 110 },
    stage2: { x: 440, y: 145 }, // Top apex
    stage3: { x: 440, y: 150 },
    color: '#38BDF8', // Sky Cyan
    glow: 'rgba(56, 189, 248, 0.45)',
    labelPlacement: 'top',
    badgeWidth: 124,
  },
  {
    id: 'logical-thinking',
    name: 'Logical Thinking',
    category: 'Reasoning',
    stage1: { x: 705, y: 105 },
    stage2: { x: 565, y: 235 }, // Upper Right
    stage3: { x: 560, y: 240 },
    color: '#F4B942', // Champagne Gold
    glow: 'rgba(244, 185, 66, 0.45)',
    labelPlacement: 'top',
    badgeWidth: 136,
  },
  {
    id: 'creativity',
    name: 'Creativity',
    category: 'Innovation',
    stage1: { x: 150, y: 390 },
    stage2: { x: 518, y: 365 }, // Lower Right
    stage3: { x: 512, y: 360 },
    color: '#FCD34D', // Warm Gold
    glow: 'rgba(252, 211, 77, 0.45)',
    labelPlacement: 'bottom',
    badgeWidth: 110,
  },
  {
    id: 'analytical-thinking',
    name: 'Analytical Thinking',
    category: 'Analysis',
    stage1: { x: 730, y: 375 },
    stage2: { x: 362, y: 365 }, // Lower Left
    stage3: { x: 368, y: 360 },
    color: '#A78BFA', // Violet
    glow: 'rgba(167, 139, 250, 0.45)',
    labelPlacement: 'bottom',
    badgeWidth: 148,
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Synthesis',
    stage1: { x: 440, y: 440 },
    stage2: { x: 315, y: 235 }, // Upper Left
    stage3: { x: 320, y: 240 },
    color: '#60A5FA', // Electric Blue
    glow: 'rgba(96, 165, 250, 0.45)',
    labelPlacement: 'top',
    badgeWidth: 132,
  },
];

// 6 Capabilities Emerging in Stage 2 & Transforming to Impact in Stage 3
interface Capability {
  id: string;
  stage2Name: string;
  stage3Name: string;
  x: number;
  y: number;
  color: string;
  connectedCoreId: string;
  badgeWidth: number;
}

const CAPABILITIES: Capability[] = [
  {
    id: 'cap-1',
    stage2Name: 'Technical Foundations',
    stage3Name: 'Strong Technical Skills',
    x: 152,
    y: 235, // Left flank
    color: '#38BDF8',
    connectedCoreId: 'problem-solving',
    badgeWidth: 168,
  },
  {
    id: 'cap-2',
    stage2Name: 'Real-World Projects',
    stage3Name: 'Project-Building Ability',
    x: 265,
    y: 68, // Upper-left flank
    color: '#60A5FA',
    connectedCoreId: 'programming',
    badgeWidth: 172,
  },
  {
    id: 'cap-3',
    stage2Name: 'AI & Emerging Tech',
    stage3Name: 'Innovation Mindset',
    x: 615,
    y: 68, // Upper-right flank
    color: '#F4B942',
    connectedCoreId: 'logical-thinking',
    badgeWidth: 162,
  },
  {
    id: 'cap-4',
    stage2Name: 'Collaboration',
    stage3Name: 'Problem-Solving Confidence',
    x: 728,
    y: 235, // Right flank
    color: '#A78BFA',
    connectedCoreId: 'logical-thinking',
    badgeWidth: 196,
  },
  {
    id: 'cap-5',
    stage2Name: 'Industry Exposure',
    stage3Name: 'Industry Readiness',
    x: 615,
    y: 435, // Lower-right flank
    color: '#34D399',
    connectedCoreId: 'creativity',
    badgeWidth: 154,
  },
  {
    id: 'cap-6',
    stage2Name: 'Mentorship',
    stage3Name: 'Career Opportunities',
    x: 265,
    y: 435, // Lower-left flank
    color: '#F59E0B',
    connectedCoreId: 'analytical-thinking',
    badgeWidth: 162,
  },
];

// Delicate Ambient Stardust Particles
interface Particle {
  id: number;
  x: number;
  y: number;
  r: number;
  opacity: number;
  color: string;
}

const AMBIENT_PARTICLES: Particle[] = [
  { id: 1, x: 80, y: 70, r: 1.4, opacity: 0.35, color: '#38BDF8' },
  { id: 2, x: 230, y: 160, r: 1.8, opacity: 0.25, color: '#F4B942' },
  { id: 3, x: 790, y: 80, r: 1.2, opacity: 0.3, color: '#38BDF8' },
  { id: 4, x: 670, y: 180, r: 1.6, opacity: 0.35, color: '#A78BFA' },
  { id: 5, x: 120, y: 290, r: 1.3, opacity: 0.25, color: '#FCD34D' },
  { id: 6, x: 820, y: 320, r: 1.5, opacity: 0.3, color: '#34D399' },
  { id: 7, x: 210, y: 360, r: 1.4, opacity: 0.2, color: '#60A5FA' },
  { id: 8, x: 750, y: 440, r: 1.7, opacity: 0.35, color: '#F4B942' },
  { id: 9, x: 440, y: 70, r: 1.5, opacity: 0.25, color: '#F4B942' },
  { id: 10, x: 380, y: 470, r: 1.3, opacity: 0.2, color: '#38BDF8' },
  { id: 11, x: 520, y: 460, r: 1.6, opacity: 0.25, color: '#34D399' },
  { id: 12, x: 50, y: 440, r: 1.2, opacity: 0.3, color: '#A78BFA' },
  { id: 13, x: 830, y: 160, r: 1.4, opacity: 0.2, color: '#FCD34D' },
  { id: 14, x: 300, y: 180, r: 1.3, opacity: 0.15, color: '#38BDF8' },
  { id: 15, x: 590, y: 190, r: 1.5, opacity: 0.18, color: '#60A5FA' },
  { id: 16, x: 440, y: 390, r: 1.2, opacity: 0.2, color: '#F4B942' },
];

// ---------------------------------------------------------------------------
// MAIN SKILL TRANSFORMATION COMPONENT
// ---------------------------------------------------------------------------
export default function SkillTransformationHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);

  // Prefers reduced motion accessibility state
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeTabReduced, setActiveTabReduced] = useState<'stage1' | 'stage2' | 'stage3'>('stage1');

  // Active stage display for progress indicator (1, 2, or 3)
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);

  // DOM Refs
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stageTextRef1 = useRef<HTMLDivElement>(null);
  const stageTextRef2 = useRef<HTMLDivElement>(null);
  const stageTextRef3 = useRef<HTMLDivElement>(null);

  // SVG Refs
  const centerHubRef = useRef<SVGGElement>(null);
  const centerRingsRef = useRef<SVGGElement>(null);
  const centerPulseRef = useRef<SVGCircleElement>(null);

  // Core Node Refs (Groups)
  const coreNodeRefs = useRef<(SVGGElement | null)[]>([]);
  // Capability Refs (Groups)
  const capNodeRefs = useRef<(SVGGElement | null)[]>([]);
  // Capability Label morph texts & rects
  const capLabelStage2Refs = useRef<(SVGTextElement | null)[]>([]);
  const capLabelStage3Refs = useRef<(SVGTextElement | null)[]>([]);
  const capBadgeRectRefs = useRef<(SVGRectElement | null)[]>([]);

  // Connection Lines
  const stage1LinesRef = useRef<SVGGElement>(null);
  const coreSpokesRef = useRef<SVGGElement>(null);
  const corePerimeterRef = useRef<SVGGElement>(null);
  const capSpokesRef = useRef<SVGGElement>(null);
  const travelingPhotonsRef = useRef<SVGGElement>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // ---------------------------------------------------------------------------
  // MASTER GSAP TIMELINE (18s continuous loop)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (prefersReducedMotion) return;

    const CX = 440;
    const CY = 255;

    // Reset initial positions and states
    gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: 'left center' });

    // Initial Text States
    gsap.set(stageTextRef1.current, { opacity: 1, y: 0, pointerEvents: 'auto' });
    gsap.set([stageTextRef2.current, stageTextRef3.current], {
      opacity: 0,
      y: 8,
      pointerEvents: 'none',
    });

    // Center Hub Initial State: Faint, dormant
    if (centerHubRef.current) {
      gsap.set(centerHubRef.current, {
        scale: 0.85,
        opacity: 0.2,
        transformOrigin: `${CX}px ${CY}px`,
      });
    }
    if (centerPulseRef.current) {
      gsap.set(centerPulseRef.current, { scale: 0.8, opacity: 0, transformOrigin: `${CX}px ${CY}px` });
    }

    // Core Nodes Initial State: At stage 1 positions
    CORE_SKILLS.forEach((skill, index) => {
      const el = coreNodeRefs.current[index];
      if (el) {
        gsap.set(el, {
          x: skill.stage1.x,
          y: skill.stage1.y,
          opacity: 1,
          scale: 1,
        });
      }
    });

    // Capabilities Initial State: Hidden
    CAPABILITIES.forEach((_, index) => {
      const el = capNodeRefs.current[index];
      if (el) {
        gsap.set(el, { opacity: 0, scale: 0, transformOrigin: 'center center' });
      }
      const label2 = capLabelStage2Refs.current[index];
      const label3 = capLabelStage3Refs.current[index];
      if (label2) gsap.set(label2, { opacity: 1 });
      if (label3) gsap.set(label3, { opacity: 0 });
    });

    // Lines Initial States
    if (stage1LinesRef.current) gsap.set(stage1LinesRef.current, { opacity: 0 });
    if (coreSpokesRef.current) gsap.set(coreSpokesRef.current, { opacity: 0 });
    if (corePerimeterRef.current) gsap.set(corePerimeterRef.current, { opacity: 0 });
    if (capSpokesRef.current) gsap.set(capSpokesRef.current, { opacity: 0 });
    if (travelingPhotonsRef.current) gsap.set(travelingPhotonsRef.current, { opacity: 0 });

    // CREATE MASTER TIMELINE (Total 18.0s continuous loop)
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'power2.inOut' },
    });
    masterTlRef.current = tl;

    // 0. Synchronized Progress Bar (0% to 100% over 16.5s, then smooth dissolve reset)
    tl.to(
      progressBarRef.current,
      {
        scaleX: 1,
        duration: 16.5,
        ease: 'none',
      },
      0
    );
    tl.to(
      progressBarRef.current,
      {
        scaleX: 0,
        opacity: 0.35,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      16.5
    );

    // Continuous orbital ring rotation
    if (centerRingsRef.current) {
      tl.to(
        centerRingsRef.current,
        {
          rotation: 360,
          duration: 18,
          ease: 'none',
          transformOrigin: `${CX}px ${CY}px`,
        },
        0
      );
    }

    // =========================================================================
    // STAGE 01: BEFORE OD AI HUB (0.0s – 5.0s)
    // =========================================================================
    tl.call(() => setActiveStageNumber(1), undefined, 0);

    // Gentle subtle floating motion on Stage 1 separated nodes
    CORE_SKILLS.forEach((skill, index) => {
      const el = coreNodeRefs.current[index];
      if (el) {
        const floatDeltaY = index % 2 === 0 ? 5 : -5;
        tl.to(
          el,
          {
            y: skill.stage1.y + floatDeltaY,
            duration: 2.2,
            yoyo: true,
            repeat: 1,
            ease: 'sine.inOut',
          },
          0.2
        );
      }
    });

    // 3.2s - 4.8s: Delicate connecting filaments slowly introduce themselves
    if (stage1LinesRef.current) {
      tl.to(
        stage1LinesRef.current,
        {
          opacity: 0.45,
          duration: 1.4,
          ease: 'power1.out',
        },
        3.2
      );
    }

    // =========================================================================
    // TRANSITION 1 -> 2: THE JOURNEY BEGINS (4.8s – 6.2s)
    // =========================================================================
    // Text Crossfade: Stage 1 out, Stage 2 in
    tl.to(
      stageTextRef1.current,
      {
        opacity: 0,
        y: -8,
        duration: 0.6,
        ease: 'power2.in',
      },
      4.8
    );

    tl.call(() => setActiveStageNumber(2), undefined, 5.2);

    tl.to(
      stageTextRef2.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      5.2
    );

    // Fade out Stage 1 lines as nodes begin inward journey
    if (stage1LinesRef.current) {
      tl.to(
        stage1LinesRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        4.8
      );
    }

    // Central OD AI HUB wakes up & radiates warm energy
    if (centerHubRef.current) {
      tl.to(
        centerHubRef.current,
        {
          scale: 1.0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.2)',
        },
        5.0
      );
    }

    // 5 Core Nodes smoothly glide from Stage 1 to Stage 2 pentagon
    CORE_SKILLS.forEach((skill, index) => {
      const el = coreNodeRefs.current[index];
      if (el) {
        tl.to(
          el,
          {
            x: skill.stage2.x,
            y: skill.stage2.y,
            duration: 1.3,
            ease: 'power2.inOut',
          },
          5.0
        );
      }
    });

    // Center spoke lines & core perimeter lines draw in
    if (coreSpokesRef.current) {
      tl.to(
        coreSpokesRef.current,
        {
          opacity: 0.8,
          duration: 0.9,
          ease: 'power1.out',
        },
        5.7
      );
    }
    if (corePerimeterRef.current) {
      tl.to(
        corePerimeterRef.current,
        {
          opacity: 0.65,
          duration: 0.9,
          ease: 'power1.out',
        },
        5.9
      );
    }

    // =========================================================================
    // STAGE 02: THE OD AI HUB JOURNEY & EMERGING CAPABILITIES (6.2s – 10.8s)
    // =========================================================================
    // Staggered reveal of 6 emerging capabilities
    CAPABILITIES.forEach((_, index) => {
      const el = capNodeRefs.current[index];
      if (el) {
        tl.to(
          el,
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.4)',
          },
          6.2 + index * 0.28
        );
      }
    });

    // Spoke lines to capabilities draw outward
    if (capSpokesRef.current) {
      tl.to(
        capSpokesRef.current,
        {
          opacity: 0.7,
          duration: 1.2,
          ease: 'power1.out',
        },
        6.4
      );
    }

    // Resonance pulse from central hub
    if (centerPulseRef.current) {
      tl.fromTo(
        centerPulseRef.current,
        { scale: 0.8, opacity: 0.85 },
        { scale: 2.5, opacity: 0, duration: 1.8, ease: 'power2.out' },
        7.8
      );
    }

    // =========================================================================
    // TRANSITION 2 -> 3: SKILLS TRANSFORMED INTO IMPACT (10.8s – 12.2s)
    // =========================================================================
    // Text Crossfade: Stage 2 out, Stage 3 in
    tl.to(
      stageTextRef2.current,
      {
        opacity: 0,
        y: -8,
        duration: 0.6,
        ease: 'power2.in',
      },
      10.8
    );

    tl.call(() => setActiveStageNumber(3), undefined, 11.2);

    tl.to(
      stageTextRef3.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      11.2
    );

    // Transform Capability Labels into Highlighted Impact Labels
    CAPABILITIES.forEach((_, index) => {
      const label2 = capLabelStage2Refs.current[index];
      const label3 = capLabelStage3Refs.current[index];
      const rect = capBadgeRectRefs.current[index];

      if (label2) {
        tl.to(label2, { opacity: 0, duration: 0.4 }, 11.0);
      }
      if (label3) {
        tl.to(label3, { opacity: 1, duration: 0.6 }, 11.2);
      }
      if (rect) {
        tl.to(
          rect,
          {
            stroke: '#F4B942',
            strokeWidth: 1.8,
            duration: 0.8,
          },
          11.1
        );
      }
    });

    // Lines brighten to high-illumination impact network
    if (coreSpokesRef.current) {
      tl.to(coreSpokesRef.current, { opacity: 1, duration: 0.8 }, 11.2);
    }
    if (corePerimeterRef.current) {
      tl.to(corePerimeterRef.current, { opacity: 0.95, duration: 0.8 }, 11.2);
    }
    if (capSpokesRef.current) {
      tl.to(capSpokesRef.current, { opacity: 0.95, duration: 0.8 }, 11.2);
    }

    // Core Nodes adjust to Stage 3 crystalline layout
    CORE_SKILLS.forEach((skill, index) => {
      const el = coreNodeRefs.current[index];
      if (el) {
        tl.to(
          el,
          {
            x: skill.stage3.x,
            y: skill.stage3.y,
            duration: 0.8,
            ease: 'power2.out',
          },
          11.2
        );
      }
    });

    // =========================================================================
    // STAGE 03: FULL ECOSYSTEM IMPACT HOLD (12.2s – 16.0s)
    // =========================================================================
    // Traveling light pulses (photons) activate along the lines
    if (travelingPhotonsRef.current) {
      tl.to(
        travelingPhotonsRef.current,
        {
          opacity: 0.9,
          duration: 0.6,
        },
        12.0
      );
    }

    // Second energetic pulse from core
    if (centerPulseRef.current) {
      tl.fromTo(
        centerPulseRef.current,
        { scale: 0.8, opacity: 0.9 },
        { scale: 2.8, opacity: 0, duration: 2.2, ease: 'power2.out' },
        12.5
      );
    }

    // =========================================================================
    // SEAMLESS DISSOLVE & RETURN TO STAGE 01 (16.0s – 18.0s)
    // =========================================================================
    // Fade out photons
    if (travelingPhotonsRef.current) {
      tl.to(
        travelingPhotonsRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        16.0
      );
    }

    // Fade out Stage 3 Text
    tl.to(
      stageTextRef3.current,
      {
        opacity: 0,
        y: -8,
        duration: 0.6,
        ease: 'power2.in',
      },
      16.2
    );

    // Fade and collapse outer capability/impact nodes
    CAPABILITIES.forEach((_, index) => {
      const el = capNodeRefs.current[index];
      const label2 = capLabelStage2Refs.current[index];
      const label3 = capLabelStage3Refs.current[index];
      const rect = capBadgeRectRefs.current[index];

      if (el) {
        tl.to(
          el,
          {
            opacity: 0,
            scale: 0.5,
            duration: 1.0,
            ease: 'power2.in',
          },
          16.2
        );
      }
      if (rect) {
        tl.set(rect, { stroke: 'rgba(56, 189, 248, 0.35)', strokeWidth: 1.2 }, 17.5);
      }
      if (label2) tl.set(label2, { opacity: 1 }, 17.5);
      if (label3) tl.set(label3, { opacity: 0 }, 17.5);
    });

    // Fade outer and spoke lines
    if (capSpokesRef.current) {
      tl.to(capSpokesRef.current, { opacity: 0, duration: 0.8 }, 16.2);
    }
    if (coreSpokesRef.current) {
      tl.to(coreSpokesRef.current, { opacity: 0, duration: 0.8 }, 16.4);
    }
    if (corePerimeterRef.current) {
      tl.to(corePerimeterRef.current, { opacity: 0, duration: 0.8 }, 16.4);
    }

    // Center hub softly dims back to dormant state
    if (centerHubRef.current) {
      tl.to(
        centerHubRef.current,
        {
          scale: 0.85,
          opacity: 0.2,
          duration: 1.2,
          ease: 'power2.inOut',
        },
        16.3
      );
    }

    // 5 Core Nodes glide smoothly back to initial Stage 1 separated positions
    CORE_SKILLS.forEach((skill, index) => {
      const el = coreNodeRefs.current[index];
      if (el) {
        tl.to(
          el,
          {
            x: skill.stage1.x,
            y: skill.stage1.y,
            duration: 1.4,
            ease: 'power2.inOut',
          },
          16.3
        );
      }
    });

    // Stage 1 text smoothly fades back in at 17.4s to meet 18.0s loop boundary
    tl.to(
      stageTextRef1.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      17.4
    );

    // Cleanup on unmount
    return () => {
      tl.kill();
      gsap.killTweensOf([
        progressBarRef.current,
        stageTextRef1.current,
        stageTextRef2.current,
        stageTextRef3.current,
        centerHubRef.current,
        centerRingsRef.current,
        centerPulseRef.current,
        stage1LinesRef.current,
        coreSpokesRef.current,
        corePerimeterRef.current,
        capSpokesRef.current,
        travelingPhotonsRef.current,
        ...coreNodeRefs.current,
        ...capNodeRefs.current,
      ]);
    };
  }, [prefersReducedMotion]);

  // Center coordinate constant for SVG render
  const CX = 440;
  const CY = 255;

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#061329] via-[#091D3E] to-[#040D1B] border border-[#1E3E73]/70 shadow-2xl shadow-[#040C1A]/90 overflow-hidden select-none transition-all duration-300"
    >
      {/* Ambient Radial Lighting Blurs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F4B942]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#183A6D_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* ------------------------------------------------------------------ */}
      {/* 1. THIN PROGRESS INDICATOR & STAGE HEADER */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-20 px-5 sm:px-6 pt-4 pb-2 border-b border-white/5 bg-[#07152B]/60 backdrop-blur-md">
        {/* Continuous Progress Track */}
        <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-3">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-gradient-to-r from-[#F4B942] via-[#38BDF8] to-[#F4B942] rounded-full shadow-[0_0_8px_rgba(244,185,66,0.6)]"
          />
        </div>

        {/* 3 Step Milestones */}
        <div className="grid grid-cols-3 gap-2 text-center">
          {/* Milestone 1 */}
          <div
            className={`transition-colors duration-300 ${
              activeStageNumber === 1 ? 'text-[#F4B942] font-semibold' : 'text-slate-400 font-medium'
            }`}
          >
            <div className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeStageNumber === 1 ? 'bg-[#F4B942] animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span className="hidden sm:inline">01 · </span>Potential
            </div>
          </div>

          {/* Milestone 2 */}
          <div
            className={`transition-colors duration-300 ${
              activeStageNumber === 2 ? 'text-[#38BDF8] font-semibold' : 'text-slate-400 font-medium'
            }`}
          >
            <div className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeStageNumber === 2 ? 'bg-[#38BDF8] animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span className="hidden sm:inline">02 · </span>The Journey
            </div>
          </div>

          {/* Milestone 3 */}
          <div
            className={`transition-colors duration-300 ${
              activeStageNumber === 3 ? 'text-[#34D399] font-semibold' : 'text-slate-400 font-medium'
            }`}
          >
            <div className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeStageNumber === 3 ? 'bg-[#34D399] animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span className="hidden sm:inline">03 · </span>Impact
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. AUTOMATIC STAGE NARRATIVE TITLES & DESCRIPTIONS */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-20 px-5 sm:px-6 pt-3 sm:pt-4 min-h-[96px] sm:min-h-[100px]">
        {/* STAGE 01 NARRATIVE */}
        <div
          ref={stageTextRef1}
          className="absolute inset-x-5 sm:inset-x-6 top-3 sm:top-4 transition-all duration-300"
        >
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#F4B942] uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            <span>STAGE 01 — BEFORE OD AI HUB</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            Your Untapped Potential
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mt-1">
            "You have the potential. You just need the right direction."
          </p>
        </div>

        {/* STAGE 02 NARRATIVE */}
        <div
          ref={stageTextRef2}
          className="absolute inset-x-5 sm:inset-x-6 top-3 sm:top-4 transition-all duration-300 opacity-0"
        >
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>STAGE 02 — THE OD AI HUB JOURNEY</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            Where Potential Takes Shape
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mt-1">
            "Learn, experiment, collaborate and build through structured learning and real-world
            experience."
          </p>
        </div>

        {/* STAGE 03 NARRATIVE */}
        <div
          ref={stageTextRef3}
          className="absolute inset-x-5 sm:inset-x-6 top-3 sm:top-4 transition-all duration-300 opacity-0"
        >
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#34D399] uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>STAGE 03 — AFTER OD AI HUB</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
            Skills Transformed Into Impact
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mt-1">
            "From individual abilities to the confidence to create real-world impact."
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. VISUALIZATION CANVAS (HIGH-PRECISION SVG NETWORK) */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[500px]">
        {/* SVG Network Visualization */}
        <svg
          viewBox="0 0 880 500"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Ambient Node Glow Filters */}
            <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-intense" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient Definitions */}
            <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E3E73" />
              <stop offset="70%" stopColor="#0B2145" />
              <stop offset="100%" stopColor="#061329" />
            </radialGradient>
            <linearGradient id="goldCyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4B942" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F4B942" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* LAYER 0: DELICATE AMBIENT STARDUST PARTICLES */}
          <g opacity="0.6">
            {AMBIENT_PARTICLES.map((p) => (
              <circle
                key={`p-${p.id}`}
                cx={p.x}
                cy={p.y}
                r={p.r}
                fill={p.color}
                opacity={p.opacity}
              />
            ))}
          </g>

          {/* LAYER 1: STAGE 01 CONNECTING FILAMENTS (Initial loose connections) */}
          <g ref={stage1LinesRef} opacity="0">
            <line
              x1={CORE_SKILLS[0].stage1.x}
              y1={CORE_SKILLS[0].stage1.y}
              x2={CORE_SKILLS[1].stage1.x}
              y2={CORE_SKILLS[1].stage1.y}
              stroke="#F4B942"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
            <line
              x1={CORE_SKILLS[0].stage1.x}
              y1={CORE_SKILLS[0].stage1.y}
              x2={CORE_SKILLS[2].stage1.x}
              y2={CORE_SKILLS[2].stage1.y}
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
            <line
              x1={CORE_SKILLS[1].stage1.x}
              y1={CORE_SKILLS[1].stage1.y}
              x2={CORE_SKILLS[3].stage1.x}
              y2={CORE_SKILLS[3].stage1.y}
              stroke="#A78BFA"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
            <line
              x1={CORE_SKILLS[2].stage1.x}
              y1={CORE_SKILLS[2].stage1.y}
              x2={CORE_SKILLS[4].stage1.x}
              y2={CORE_SKILLS[4].stage1.y}
              stroke="#60A5FA"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
            <line
              x1={CORE_SKILLS[3].stage1.x}
              y1={CORE_SKILLS[3].stage1.y}
              x2={CORE_SKILLS[4].stage1.x}
              y2={CORE_SKILLS[4].stage1.y}
              stroke="#FCD34D"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
          </g>

          {/* LAYER 2: STAGE 02 & 03 CORE SPOKES (Center Hub -> 5 Core Skills) */}
          <g ref={coreSpokesRef} opacity="0">
            {CORE_SKILLS.map((skill) => (
              <line
                key={`spoke-${skill.id}`}
                x1={CX}
                y1={CY}
                x2={skill.stage2.x}
                y2={skill.stage2.y}
                stroke="url(#goldCyanLine)"
                strokeWidth="1.8"
                strokeLinecap="round"
                filter="url(#glow-cyan)"
              />
            ))}
          </g>

          {/* LAYER 3: CORE PERIMETER CHORDS (Between adjacent core skills) */}
          <g ref={corePerimeterRef} opacity="0">
            {CORE_SKILLS.map((skill, i) => {
              const nextSkill = CORE_SKILLS[(i + 1) % CORE_SKILLS.length];
              return (
                <line
                  key={`chord-${skill.id}`}
                  x1={skill.stage2.x}
                  y1={skill.stage2.y}
                  x2={nextSkill.stage2.x}
                  y2={nextSkill.stage2.y}
                  stroke="#38BDF8"
                  strokeWidth="1.4"
                  strokeOpacity="0.65"
                  strokeDasharray="6 4"
                />
              );
            })}
          </g>

          {/* LAYER 4: CAPABILITY SPOKES (Core Skills -> 6 Capabilities) */}
          <g ref={capSpokesRef} opacity="0">
            {CAPABILITIES.map((cap) => {
              const core =
                CORE_SKILLS.find((c) => c.id === cap.connectedCoreId) || CORE_SKILLS[0];
              return (
                <g key={`capline-${cap.id}`}>
                  <line
                    x1={core.stage2.x}
                    y1={core.stage2.y}
                    x2={cap.x}
                    y2={cap.y}
                    stroke={cap.color}
                    strokeWidth="1.5"
                    strokeOpacity="0.75"
                    filter="url(#glow-gold)"
                  />
                  {/* Subtle cross-link to center */}
                  <line
                    x1={CX}
                    y1={CY}
                    x2={cap.x}
                    y2={cap.y}
                    stroke="#1E3E73"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    strokeOpacity="0.4"
                  />
                </g>
              );
            })}
          </g>

          {/* LAYER 5: TRAVELING LIGHT PHOTONS (Active in Stage 3) */}
          <g ref={travelingPhotonsRef} opacity="0">
            {CORE_SKILLS.map((skill, i) => (
              <circle
                key={`photon-${skill.id}`}
                r="3.5"
                fill="#FFF"
                filter="url(#glow-intense)"
              >
                <animateMotion
                  path={`M ${CX} ${CY} L ${skill.stage2.x} ${skill.stage2.y}`}
                  dur={`${1.4 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            {CAPABILITIES.map((cap, i) => {
              const core =
                CORE_SKILLS.find((c) => c.id === cap.connectedCoreId) || CORE_SKILLS[0];
              return (
                <circle
                  key={`photon-cap-${cap.id}`}
                  r="3.2"
                  fill="#F4B942"
                  filter="url(#glow-gold)"
                >
                  <animateMotion
                    path={`M ${core.stage2.x} ${core.stage2.y} L ${cap.x} ${cap.y}`}
                    dur={`${1.8 + i * 0.25}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </g>

          {/* LAYER 6: CENTRAL OD AI HUB EMBLEM (Anchor of the ecosystem) */}
          <g ref={centerHubRef} className="cursor-default">
            {/* Radiant Expanding Resonance Ring */}
            <circle
              ref={centerPulseRef}
              cx={CX}
              cy={CY}
              r="34"
              fill="none"
              stroke="#F4B942"
              strokeWidth="2"
              opacity="0"
            />

            {/* Orbital Rings */}
            <g ref={centerRingsRef}>
              <circle
                cx={CX}
                cy={CY}
                r="50"
                fill="none"
                stroke="#F4B942"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                strokeOpacity="0.5"
              />
              <circle
                cx={CX}
                cy={CY}
                r="64"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1"
                strokeDasharray="6 8"
                strokeOpacity="0.35"
              />
            </g>

            {/* Central Solid Disc */}
            <circle
              cx={CX}
              cy={CY}
              r="34"
              fill="url(#hubGradient)"
              stroke="#F4B942"
              strokeWidth="2"
              filter="url(#glow-gold)"
            />

            {/* Emblem Text / Brand Anchor */}
            <text
              x={CX}
              y={CY - 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-serif font-bold text-[13px] fill-[#F4B942] tracking-wider"
            >
              OD AI
            </text>
            <text
              x={CX}
              y={CY + 12}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-mono text-[8px] font-bold fill-slate-300 tracking-widest uppercase"
            >
              HUB
            </text>
          </g>

          {/* LAYER 7: 6 EMERGING CAPABILITIES / IMPACT OUTCOMES */}
          {CAPABILITIES.map((cap, index) => {
            const halfW = cap.badgeWidth / 2;
            return (
              <g
                key={cap.id}
                ref={(el) => (capNodeRefs.current[index] = el)}
                transform={`translate(${cap.x}, ${cap.y})`}
                className="cursor-default"
              >
                {/* Outer halo */}
                <circle r="14" fill={cap.color} opacity="0.18" filter="url(#glow-gold)" />

                {/* Node Center Dot */}
                <circle r="5" fill={cap.color} stroke="#FFFFFF" strokeWidth="1" />

                {/* Capability / Impact Pill Badge */}
                <g transform="translate(0, 18)">
                  <rect
                    ref={(el) => (capBadgeRectRefs.current[index] = el)}
                    x={-halfW}
                    y="-11"
                    width={cap.badgeWidth}
                    height="22"
                    rx="11"
                    fill="#07152B"
                    fillOpacity="0.94"
                    stroke="rgba(56, 189, 248, 0.35)"
                    strokeWidth="1.2"
                    filter="drop-shadow(0 2px 6px rgba(0,0,0,0.5))"
                  />

                  {/* Stage 2 Text Label */}
                  <text
                    ref={(el) => (capLabelStage2Refs.current[index] = el)}
                    x="0"
                    y="2"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-sans text-[10px] sm:text-[11px] font-medium fill-slate-200 tracking-tight"
                  >
                    {cap.stage2Name}
                  </text>

                  {/* Stage 3 Text Label (Impact) */}
                  <text
                    ref={(el) => (capLabelStage3Refs.current[index] = el)}
                    x="0"
                    y="2"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-sans text-[10px] sm:text-[11px] font-bold fill-[#F4B942] tracking-tight opacity-0"
                  >
                    {cap.stage3Name}
                  </text>
                </g>
              </g>
            );
          })}

          {/* LAYER 8: 5 CORE FOUNDATION SKILL NODES */}
          {CORE_SKILLS.map((skill, index) => {
            const halfW = skill.badgeWidth / 2;
            const labelOffsetY = skill.labelPlacement === 'top' ? -18 : 18;
            return (
              <g
                key={skill.id}
                ref={(el) => (coreNodeRefs.current[index] = el)}
                className="cursor-default"
              >
                {/* Outer Pulsing Aura */}
                <circle r="18" fill={skill.color} opacity="0.15" filter="url(#glow-gold)" />

                {/* Main Node Orb */}
                <circle
                  r="9"
                  fill="#07152B"
                  stroke={skill.color}
                  strokeWidth="2"
                  filter="url(#glow-cyan)"
                />
                <circle r="3.5" fill="#FFFFFF" />

                {/* Skill Pill Label */}
                <g transform={`translate(0, ${labelOffsetY})`}>
                  <rect
                    x={-halfW}
                    y="-11"
                    width={skill.badgeWidth}
                    height="22"
                    rx="11"
                    fill="#0B2145"
                    fillOpacity="0.94"
                    stroke={skill.color}
                    strokeWidth="1.2"
                    filter="drop-shadow(0 2px 6px rgba(0,0,0,0.6))"
                  />
                  <circle cx={-halfW + 12} cy="0" r="3" fill={skill.color} />
                  <text
                    x={-halfW + 22}
                    y="2"
                    textAnchor="start"
                    dominantBaseline="middle"
                    className="font-sans text-[10.5px] sm:text-[11px] font-semibold fill-white tracking-tight"
                  >
                    {skill.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 4. BOTTOM ECOSYSTEM CAPTION STRIP */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-20 px-5 sm:px-6 py-3 border-t border-white/5 bg-[#07152B]/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="font-mono text-[11px] text-slate-300 tracking-wide">
            Automated Cinematic Transformation · Continuous Loop
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            5 Core Abilities
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            6 Industry Capabilities
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            Real-World Impact
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 5. ACCESSIBLE STATIC VERSION (Prefers-Reduced-Motion) */}
      {/* ------------------------------------------------------------------ */}
      {prefersReducedMotion && (
        <div className="p-6 bg-[#0B2145] text-white border-t border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveTabReduced('stage1')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                activeTabReduced === 'stage1'
                  ? 'bg-[#F4B942] text-[#0B2145]'
                  : 'bg-white/10 text-white'
              }`}
            >
              Stage 1: Before
            </button>
            <button
              onClick={() => setActiveTabReduced('stage2')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                activeTabReduced === 'stage2'
                  ? 'bg-[#38BDF8] text-[#0B2145]'
                  : 'bg-white/10 text-white'
              }`}
            >
              Stage 2: The Journey
            </button>
            <button
              onClick={() => setActiveTabReduced('stage3')}
              className={`px-4 py-2 rounded-full text-xs font-semibold ${
                activeTabReduced === 'stage3'
                  ? 'bg-[#34D399] text-[#0B2145]'
                  : 'bg-white/10 text-white'
              }`}
            >
              Stage 3: After
            </button>
          </div>

          {activeTabReduced === 'stage1' && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#F4B942]">Your Untapped Potential</h4>
              <p className="text-sm text-slate-300 mb-3">
                "You have the potential. You just need the right direction."
              </p>
              <div className="flex flex-wrap gap-2">
                {CORE_SKILLS.map((s) => (
                  <span
                    key={s.id}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTabReduced === 'stage2' && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#38BDF8]">
                Where Potential Takes Shape
              </h4>
              <p className="text-sm text-slate-300 mb-3">
                "Learn, experiment, collaborate and build through structured learning and real-world
                experience."
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((c) => (
                  <span
                    key={c.id}
                    className="px-3 py-1 bg-[#38BDF8]/20 border border-[#38BDF8]/40 rounded-full text-xs font-medium text-white"
                  >
                    {c.stage2Name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTabReduced === 'stage3' && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#34D399]">
                Skills Transformed Into Impact
              </h4>
              <p className="text-sm text-slate-300 mb-3">
                "From individual abilities to the confidence to create real-world impact."
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((c) => (
                  <span
                    key={c.id}
                    className="px-3 py-1 bg-[#34D399]/20 border border-[#34D399]/40 rounded-full text-xs font-medium text-white"
                  >
                    {c.stage3Name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
