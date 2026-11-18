import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Sparkles, Play } from 'lucide-react';
import VideoPlayer from '../../../components/common/VideoPlayer';
import FullVideoModal from '../../../components/common/FullVideoModal';

interface HeroProps {
  onOpenEnquire: (program?: string) => void;
  onExploreEcosystem: () => void;
}

export default function Hero({ onOpenEnquire, onExploreEcosystem }: HeroProps) {
  const [fullVideoOpen, setFullVideoOpen] = useState(false);

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-10 sm:pb-14 overflow-hidden lg:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ============================================================== */}
        {/* LAYER 2: Significantly Enlarged Odisha Map SVG (Atmospheric Geographic Backdrop) */}
        {/* Visual scale: ~1.85x to 2x scale, anchored upper-right, completely above S-curve */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="hidden md:block absolute md:-right-5 lg:-right-20 xl:-right-32 2xl:-right-40 md:-top-[100px] lg:-top-[180px] xl:-top-[245px] 2xl:-top-[260px] md:w-[480px] lg:w-[720px] xl:w-[880px] 2xl:w-[940px] aspect-[3/2] z-[2] pointer-events-none select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 32%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, black 32%, black 100%)',
          }}
        >
          {/* Subtle champagne & dusty rose ambient radiance behind map */}
          <div className="absolute inset-0 bg-radial-gradient from-champagne-300/35 via-rose-dusty/15 to-transparent rounded-full filter blur-3xl transform scale-110 pointer-events-none" />

          <img
            src="/images/Odisha%20Map.svg"
            alt="Map of Odisha highlighting Berhampur, Ganjam."
            className="relative w-full h-full object-contain select-none transition-transform duration-700 hover:scale-[1.01] drop-shadow-[0_16px_36px_rgba(41,29,41,0.08)]"
          />
        </motion.div>

        {/* ============================================================== */}
        {/* LAYER 3: Decorative Flowing Wave Elements (Between Map & Content) */}
        {/* Sits IN FRONT OF the map and BEHIND text and buttons */}
        {/* ============================================================== */}
        <div className="hidden md:block absolute top-[280px] md:top-[280px] lg:top-[260px] xl:top-[250px] left-[-10%] right-[-10%] w-[120%] h-[180px] lg:h-[220px] pointer-events-none overflow-hidden z-[5] select-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Flowing Satin Dune Gradient */}
              <linearGradient id="heroSatinDune" x1="20" y1="20" x2="1400" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9F2E7" stopOpacity="0.92" />
                <stop offset="25%" stopColor="#EBD7CB" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#D8B6C2" stopOpacity="0.78" />
                <stop offset="85%" stopColor="#BE9AA9" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#A88394" stopOpacity="0.58" />
              </linearGradient>

              {/* Underside Dune Shadow Gradient */}
              <linearGradient id="heroDuneShadow" x1="50" y1="60" x2="1350" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8C6A7B" stopOpacity="0.25" />
                <stop offset="45%" stopColor="#6C4D5D" stopOpacity="0.35" />
                <stop offset="80%" stopColor="#553A47" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#432D38" stopOpacity="0.28" />
              </linearGradient>
            </defs>

            {/* Sweeping satin dune surface */}
            <path
              d="M0,60 C240,45 420,25 620,40 C820,55 980,105 1180,95 C1320,85 1390,55 1440,40 L1440,140 C1360,155 1240,175 1060,160 C860,145 720,105 540,100 C360,95 180,120 0,130 Z"
              fill="url(#heroSatinDune)"
            />

            {/* Sculptural shadow edge beneath dune crest */}
            <path
              d="M0,85 C240,75 420,55 620,70 C820,85 980,135 1180,125 C1320,115 1390,85 1440,70 L1440,105 C1380,120 1260,150 1100,145 C920,135 760,100 580,100 C380,100 180,120 0,125 Z"
              fill="url(#heroDuneShadow)"
            />
          </svg>
        </div>

        {/* ============================================================== */}
        {/* LAYER 4: UPPER HERO GRID: Headline + Buttons + Mobile Map */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 xl:col-span-6 z-10 max-w-xl md:max-w-[420px] lg:max-w-[480px] xl:max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-mauve-deep">
                A STRONGER ODISHA THROUGH AI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-plum leading-[1.08] font-editorial"
            >
              From Learners to{' '}
              <span className="font-editorial-italic font-normal text-gradient-bronze inline-block transition-transform hover:scale-[1.02] duration-300">
                Global Innovators.
              </span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-mauve-deep mt-4 sm:mt-5 max-w-xl leading-relaxed"
            >
              Empowering talent. Building technology. Driving innovation. Creating opportunities. An AI education, technology and innovation ecosystem from Berhampur, for Odisha and beyond.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA */}
              <button
                onClick={() => {
                  window.location.hash = '#academy';
                }}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-plum hover:bg-plum-light text-champagne-100 text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group border border-champagne-200/20 cursor-pointer"
              >
                <span>Explore Academy →</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onExploreEcosystem}
                className="px-6 py-3.5 rounded-full bg-softwhite/90 hover:bg-softwhite text-plum text-xs sm:text-sm font-semibold tracking-wide border border-champagne-200 shadow-sm transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group cursor-pointer"
              >
                <span>Our Ecosystem</span>
                <ArrowDown className="w-4 h-4 text-bronze-400 transition-transform group-hover:translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Mobile-Only Map: Positioned below hero text with suitable scaling and no overflow */}
          <div className="block md:hidden col-span-1 mt-6 mb-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[340px] sm:max-w-[400px] mx-auto flex items-center justify-center relative"
            >
              {/* Ambient radial glow */}
              <div className="absolute inset-0 bg-radial-gradient from-champagne-300/40 via-rose-dusty/20 to-transparent rounded-full filter blur-2xl pointer-events-none" />

              <img
                src="/images/Odisha%20Map.svg"
                alt="Map of Odisha highlighting Berhampur, Ganjam."
                className="relative w-full h-auto aspect-[3/2] object-contain select-none drop-shadow-[0_12px_24px_rgba(41,29,41,0.08)]"
              />
            </motion.div>
          </div>

          {/* Desktop Right Column Spacer to maintain grid spacing */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 h-[340px] xl:h-[380px] pointer-events-none" />
        </div>

        {/* LOWER HERO SECTION: Seamless Native Story Video + Text Column */}
        <div className="mt-10 sm:mt-14 pt-2 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Natively Integrated Cinematic Video Preview */}
            <div className="lg:col-span-7">
              <VideoPlayer onWatchFull={() => setFullVideoOpen(true)} />
            </div>

            {/* Right: The OD AI HUB Story Editorial Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-bronze-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
                  OUR STORY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-editorial text-plum leading-tight">
                The OD AI HUB Story
              </h2>

              <p className="text-sm sm:text-base text-mauve-deep leading-relaxed">
                A platform born in Odisha to create opportunities, enable innovation and build a future-ready talent ecosystem.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setFullVideoOpen(true)}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-softwhite/90 hover:bg-softwhite text-plum text-xs sm:text-sm font-semibold border border-champagne-200 hover:border-bronze-400 shadow-sm hover:shadow transition-all group"
                >
                  <span className="w-6 h-6 rounded-full bg-plum text-champagne-100 flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-champagne-200 text-champagne-200 translate-x-0.5" />
                  </span>
                  <span>Watch Full Video</span>
                  <span className="text-xs font-mono text-bronze-600 bg-champagne-100 px-2 py-0.5 rounded-full font-medium">
                    02:36
                  </span>
                </button>
              </div>

              <div className="pt-3 flex items-center gap-4 text-xs text-mauve-deep">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>HQ: Berhampur, Odisha</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
                  <span>Statewide Talent Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Cinematic Video Modal */}
      <FullVideoModal
        isOpen={fullVideoOpen}
        onClose={() => setFullVideoOpen(false)}
      />
    </section>
  );
}
