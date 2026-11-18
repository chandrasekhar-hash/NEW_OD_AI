import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, ChevronRight } from 'lucide-react';

interface EventsHeroProps {
  onExploreClick: () => void;
  onHostEventClick: () => void;
  onNavigateHome: () => void;
}

export default function EventsHero({
  onExploreClick,
  onHostEventClick,
  onNavigateHome,
}: EventsHeroProps) {
  return (
    <section className="relative bg-[#0B1935] text-[#F8F1E8] pt-28 sm:pt-32 pb-24 sm:pb-36 lg:pb-44 overflow-hidden">
      {/* ============================================================== */}
      {/* 1. REFINED ATMOSPHERIC RADIAL LIGHTING & GRADIENTS             */}
      {/* ============================================================== */}
      {/* Rich Navy Blue primary ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#142B50]/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Soft Coral very faint radiant warmth */}
      <div className="absolute top-1/4 right-16 w-[420px] h-[420px] bg-[#F07861]/[0.09] rounded-full blur-[130px] pointer-events-none" />

      {/* Muted Champagne Gold subtle lower glow */}
      <div className="absolute bottom-6 left-1/3 w-[450px] h-[320px] bg-[#D6AD70]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* ============================================================== */}
      {/* 2. SUBTLE, DELICATE FLOWING CURVES (RIGHT-SIDE ARCHITECTURAL)  */}
      {/* ============================================================== */}
      <div className="absolute top-0 right-0 w-full sm:w-3/5 h-full pointer-events-none z-0 overflow-hidden select-none">
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-75"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle flowing contour curve 1: Rich Navy Deep Accent */}
          <path
            d="M 120 -40 C 260 140, 380 280, 680 340 C 760 355, 820 420, 880 500"
            stroke="#142B50"
            strokeWidth="1.6"
            strokeOpacity="0.8"
          />

          {/* Delicate flowing curve 2: Muted Champagne Gold */}
          <path
            d="M 220 -60 C 340 120, 420 220, 620 310 C 720 355, 800 370, 860 410"
            stroke="#D6AD70"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />

          {/* Delicate flowing curve 3: Soft Coral Accent */}
          <path
            d="M 280 -20 C 380 160, 480 260, 660 330 C 750 365, 830 390, 890 440"
            stroke="#F07861"
            strokeWidth="1"
            strokeOpacity="0.18"
          />

          {/* Sweeping background echo curve 4: Faint Gold Line */}
          <path
            d="M 160 80 C 310 240, 460 340, 740 430 C 810 455, 870 510, 920 600"
            stroke="#D6AD70"
            strokeWidth="1"
            strokeOpacity="0.12"
          />

          {/* Subtle concentric focal waves near right horizon */}
          <circle
            cx="640"
            cy="320"
            r="160"
            stroke="#142B50"
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="4 6"
          />
          <circle
            cx="640"
            cy="320"
            r="240"
            stroke="#142B50"
            strokeWidth="1"
            strokeOpacity="0.2"
          />

          {/* Tiny luminous intersection accent */}
          <circle cx="620" cy="310" r="2.5" fill="#D6AD70" opacity="0.6" />
          <circle cx="660" cy="330" r="2.5" fill="#F07861" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#F8F1E8]/70 mb-6 sm:mb-8"
        >
          <button
            onClick={onNavigateHome}
            className="hover:text-[#F8F1E8] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#D6AD70]/50" />
          <span className="text-[#F07861] font-semibold">Events</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ============================================================== */}
          {/* LEFT COLUMN: HERO CONTENT                                      */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            {/* Small Muted Eyebrow Text */}
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-5 h-[1.5px] bg-[#D6AD70]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D6AD70] uppercase">
                EVENTS & EXPERIENCES
              </span>
              <span className="w-5 h-[1.5px] bg-[#D6AD70]" />
            </div>

            {/* Large Elegant Serif Headline: Second Line Soft Coral and Italic */}
            <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F8F1E8] leading-[1.14] mb-6">
              Learn Together.{' '}
              <span className="block text-[#F07861] italic font-serif mt-1 sm:mt-2">
                Build Together.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#F8F1E8]/80 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-sans">
              Workshops, hackathons and talks at OD AI HUB and partner campuses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#F07861] hover:bg-[#DE6A54] text-[#F8F1E8] font-semibold text-sm sm:text-base shadow-md shadow-[#F07861]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Event Updates</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onHostEventClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#142B50]/35 hover:bg-[#142B50]/65 text-[#F8F1E8] border border-[#D6AD70]/30 hover:border-[#D6AD70]/50 font-semibold text-sm sm:text-base backdrop-blur-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D6AD70]" />
                <span>Host at Your Institution</span>
              </button>
            </div>

            {/* Three Compact Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-[#142B50]">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F1E8]">48h+</div>
                <div className="text-xs text-[#F8F1E8]/65 font-medium mt-0.5">Sprints & Hackathons</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F07861]">2,500+</div>
                <div className="text-xs text-[#F8F1E8]/65 font-medium mt-0.5">Community Learners</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D6AD70]">₹5L+</div>
                <div className="text-xs text-[#F8F1E8]/65 font-medium mt-0.5">Grants & Awards</div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: SPACIOUS, ELEGANT ATMOSPHERIC BREATHER          */}
          {/* ============================================================== */}
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center relative min-h-[340px] pointer-events-none">
            {/* Soft, restrained radial accent center */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#142B50]/40 via-[#F07861]/[0.05] to-transparent blur-[60px]" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. FLOWING ASYMMETRIC S-SHAPED CURVED BOTTOM BOUNDARY          */}
      {/* Refined with Layered Color Waves: Electric/Sky Blue -> Lavender/Periwinkle -> Champagne/Peach/Coral */}
      {/* ============================================================== */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[100px] sm:h-[130px] md:h-[155px] lg:h-[175px] block"
        >
          <defs>
            {/* 1. Deep Layer Ribbon Gradient: Rich Royal/Electric Blue -> Twilight Periwinkle -> Amber -> Deep Coral */}
            <linearGradient id="heroWaveGradDeep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.92" />
              <stop offset="20%" stopColor="#2563EB" stopOpacity="0.85" />
              <stop offset="38%" stopColor="#4338CA" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#6B21A8" stopOpacity="0.75" />
              <stop offset="72%" stopColor="#B45309" stopOpacity="0.75" />
              <stop offset="88%" stopColor="#C2410C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#991B1B" stopOpacity="0.9" />
            </linearGradient>

            {/* 2. Mid Layer Ribbon Gradient: Soft Electric Sky Blue -> Lavender/Periwinkle -> Warm Champagne -> Peach & Coral */}
            <linearGradient id="heroWaveGradMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="18%" stopColor="#60A5FA" stopOpacity="0.75" />
              <stop offset="36%" stopColor="#818CF8" stopOpacity="0.75" />
              <stop offset="52%" stopColor="#A78BFA" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.8" />
              <stop offset="86%" stopColor="#F87171" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#F07861" stopOpacity="0.85" />
            </linearGradient>

            {/* 3. Soft Upper Accent Gradient: Light Sky Blue -> Lilac -> Soft Champagne -> Peach */}
            <linearGradient id="heroWaveGradUpper" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.65" />
              <stop offset="22%" stopColor="#BAE6FD" stopOpacity="0.7" />
              <stop offset="42%" stopColor="#C7D2FE" stopOpacity="0.65" />
              <stop offset="58%" stopColor="#DDD6FE" stopOpacity="0.7" />
              <stop offset="74%" stopColor="#FDE68A" stopOpacity="0.75" />
              <stop offset="88%" stopColor="#FED7AA" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FECDD3" stopOpacity="0.65" />
            </linearGradient>

            {/* Highlight Stroke 1: Thin Luminous Beam along Crest */}
            <linearGradient id="heroHighlight1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#93C5FD" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#A5B4FC" stopOpacity="0.9" />
              <stop offset="56%" stopColor="#C4B5FD" stopOpacity="0.85" />
              <stop offset="72%" stopColor="#FDE047" stopOpacity="0.95" />
              <stop offset="88%" stopColor="#FDBA74" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FDA4AF" stopOpacity="0.85" />
            </linearGradient>

            {/* Highlight Stroke 2: Delicate Secondary Hairline */}
            <linearGradient id="heroHighlight2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="28%" stopColor="#818CF8" stopOpacity="0.75" />
              <stop offset="54%" stopColor="#A855F7" stopOpacity="0.7" />
              <stop offset="76%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.7" />
            </linearGradient>

            {/* Highlight Stroke 3: Subtle Ivory Boundary Hairline */}
            <linearGradient id="heroHighlight3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.5" />
              <stop offset="30%" stopColor="#A5B4FC" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#DDD6FE" stopOpacity="0.5" />
              <stop offset="78%" stopColor="#FDE68A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FECDD3" stopOpacity="0.5" />
            </linearGradient>

            {/* Upward Ambient Occlusion Drop Shadow onto Ivory Surface */}
            <filter id="heroWaveDepthShadow" x="-5%" y="-40%" width="110%" height="180%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#0B1935" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* ========================================================== */}
          {/* LAYER 1: Deep Underlying Color Wave (Electric Blue -> Twilight -> Amber/Coral) */}
          {/* ========================================================== */}
          <path
            d="M 0, 36
               C 240, 56 480, 64 720, 56
               C 960, 48 1200, 30 1440, 24
               L 1440, 160
               L 0, 160 Z"
            fill="url(#heroWaveGradDeep)"
          />

          {/* Highlight Stroke 2 on Layer 1 Crest */}
          <path
            d="M 0, 36
               C 240, 56 480, 64 720, 56
               C 960, 48 1200, 30 1440, 24"
            stroke="url(#heroHighlight2)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* ========================================================== */}
          {/* LAYER 2: Midground Color Wave Ribbon (Sky Blue -> Lavender -> Peach/Coral) */}
          {/* ========================================================== */}
          <path
            d="M 0, 48
               C 220, 80 440, 78 690, 52
               C 940, 26 1180, 12 1440, 38
               L 1440, 160
               L 0, 160 Z"
            fill="url(#heroWaveGradMid)"
          />

          {/* ========================================================== */}
          {/* LAYER 3: Soft Luminous Accent Ribbon                       */}
          {/* ========================================================== */}
          <path
            d="M 0, 54
               C 220, 90 450, 86 695, 58
               C 940, 30 1170, 14 1440, 44
               L 1440, 160
               L 0, 160 Z"
            fill="url(#heroWaveGradUpper)"
          />

          {/* Highlight Stroke 1: Main Luminous Light-Beam Crest Line */}
          <path
            d="M 0, 54
               C 220, 90 450, 86 695, 58
               C 940, 30 1170, 14 1440, 44"
            stroke="url(#heroHighlight1)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />

          {/* ========================================================== */}
          {/* LAYER 4: Foreground Transition Wave into Warm Ivory        */}
          {/* Dips on left to y=102, crests on right at y=18, glides to y=52 */}
          {/* ========================================================== */}
          <path
            d="M 0, 60
               C 220, 102 460, 98 700, 66
               C 940, 34 1170, 18 1440, 52
               L 1440, 160
               L 0, 160 Z"
            fill="#FFFDF9"
            filter="url(#heroWaveDepthShadow)"
          />

          {/* Highlight Stroke 3: Delicate Hairline along the Ivory Boundary */}
          <path
            d="M 0, 60
               C 220, 102 460, 98 700, 66
               C 940, 34 1170, 18 1440, 52"
            stroke="url(#heroHighlight3)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
