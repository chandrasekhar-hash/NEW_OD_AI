import React from 'react';

/**
 * AcademyAtmosphere
 * Recreates the premium, colourful, and elegant background atmosphere inspired by Reference Image:
 * - Soft warm ivory and creamy-white base (#FFF8F1, #FFFDFC)
 * - Flowing sky-blue and soft-blue curves on the left (#5B9EE6, #A5CAF6, #D3E4FA)
 * - Muted lavender and soft purple curves in the upper-right (#8A67C7, #C5B4E7, #DDD2F4)
 * - Warm peach, coral, and champagne curves in the lower-right (#F0986F, #F6B798, #FBD3BC)
 * - Subtle botanical leaf details gracefully framing the upper-left corner (#994814, #BD752B, #E2993E)
 * - Delicate orbital concentric contour lines and celestial trajectory arcs
 */
export default function AcademyAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Warm Ivory & Cream Gradient Foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FFF9F2]" />

      {/* 2. Soft Multi-Point Ambient Atmospheric Radial Glows */}
      {/* Upper-Left Golden Amber Glow */}
      <div
        className="absolute -top-20 -left-16 w-[50vw] max-w-[680px] h-[520px] pointer-events-none opacity-85"
        style={{
          background:
            'radial-gradient(ellipse 80% 65% at 18% 18%, rgba(255, 252, 248, 0.98) 0%, rgba(251, 226, 206, 0.5) 45%, rgba(243, 214, 180, 0.25) 75%, transparent 100%)',
        }}
      />

      {/* Upper-Right Soft Royal Lavender Glow */}
      <div
        className="absolute -top-16 -right-16 w-[52vw] max-w-[740px] h-[600px] pointer-events-none opacity-90"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 82% 22%, rgba(197, 180, 231, 0.52) 0%, rgba(167, 142, 216, 0.32) 40%, rgba(221, 210, 244, 0.18) 70%, transparent 100%)',
        }}
      />

      {/* Mid-Left Sky Blue Glow */}
      <div
        className="absolute top-[380px] -left-20 w-[48vw] max-w-[650px] h-[520px] pointer-events-none opacity-85"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 50%, rgba(165, 202, 246, 0.45) 0%, rgba(211, 228, 250, 0.3) 50%, transparent 85%)',
        }}
      />

      {/* Lower-Right Warm Coral & Peach Glow */}
      <div
        className="absolute top-[440px] -right-20 w-[52vw] max-w-[720px] h-[560px] pointer-events-none opacity-85"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 75% 60%, rgba(240, 152, 111, 0.42) 0%, rgba(246, 183, 152, 0.32) 45%, rgba(251, 211, 188, 0.18) 75%, transparent 100%)',
        }}
      />

      {/* Mid-Page Subtle Multi-Color Ambient Bleeds (Learning Paths & Curriculum) */}
      <div
        className="absolute top-[1100px] -left-32 w-[500px] h-[600px] pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(165, 202, 246, 0.3) 0%, rgba(220, 235, 250, 0.15) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute top-[1400px] -right-32 w-[520px] h-[620px] pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(246, 183, 152, 0.3) 0%, rgba(251, 226, 206, 0.15) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute top-[2200px] left-1/4 w-[600px] h-[500px] pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(197, 180, 231, 0.25) 0%, rgba(221, 210, 244, 0.12) 50%, transparent 80%)',
        }}
      />

      {/* 3. Main Master SVG: Organic Waves, Botanical Foliage & Orbital Arcs */}
      <svg
        className="absolute top-0 left-0 w-full h-[880px] sm:h-[960px] md:h-[1020px]"
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Subtle Drop Shadow for Botanical Foliage */}
          <filter id="leafShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#4A250B" floodOpacity="0.18" />
          </filter>

          {/* Gradients for Upper-Right Lavender & Purple Waves */}
          <linearGradient id="purpleWaveDeep" x1="1440" y1="0" x2="1020" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8A67C7" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#A78ED8" stopOpacity="0.82" />
            <stop offset="70%" stopColor="#C5B4E7" stopOpacity="0.65" />
            <stop offset="95%" stopColor="#E8E0F7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFF8F1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="purpleWaveSoft" x1="1420" y1="20" x2="1140" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BBA6E3" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#DDD2F4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFDFC" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradients for Left Sky Blue & Soft Blue Waves */}
          <linearGradient id="skyBlueWaveOuter" x1="0" y1="460" x2="800" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B9EE6" stopOpacity="0.88" />
            <stop offset="35%" stopColor="#7EB2EE" stopOpacity="0.82" />
            <stop offset="70%" stopColor="#A5CAF6" stopOpacity="0.68" />
            <stop offset="90%" stopColor="#D3E4FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFF8F1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="skyBlueWaveInner" x1="0" y1="540" x2="950" y2="880" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#86B8F0" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#B2D3F7" stopOpacity="0.65" />
            <stop offset="85%" stopColor="#DDEAFD" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFDFC" stopOpacity="0.08" />
          </linearGradient>

          {/* Gradients for Lower-Right Peach & Coral Waves */}
          <linearGradient id="coralWaveOuter" x1="1440" y1="520" x2="680" y2="860" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F0986F" stopOpacity="0.88" />
            <stop offset="35%" stopColor="#F6B798" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#FBD3BC" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#FCE8DB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFF8F1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="peachWaveInner" x1="1440" y1="600" x2="850" y2="920" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F6B798" stopOpacity="0.82" />
            <stop offset="50%" stopColor="#FBD3BC" stopOpacity="0.68" />
            <stop offset="85%" stopColor="#FFF4EC" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFDFC" stopOpacity="0.05" />
          </linearGradient>

          {/* Gradients for Autumn Foliage Leaves */}
          <linearGradient id="leafAmberDeep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C3F10" />
            <stop offset="50%" stopColor="#B66522" />
            <stop offset="100%" stopColor="#D88A35" />
          </linearGradient>

          <linearGradient id="leafBronzeGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#AC5A1C" />
            <stop offset="50%" stopColor="#CF802E" />
            <stop offset="100%" stopColor="#F2BA6B" />
          </linearGradient>

          <linearGradient id="leafHarvestOchre" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BD6D26" />
            <stop offset="60%" stopColor="#E2993E" />
            <stop offset="100%" stopColor="#F8D38D" />
          </linearGradient>

          <linearGradient id="stemBranch" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#633211" />
            <stop offset="100%" stopColor="#8F4E20" />
          </linearGradient>
        </defs>

        {/* ========================================================== */}
        {/* A. DELICATE ORBITAL ARCS & CELESTIAL TRAJECTORIES          */}
        {/* ========================================================== */}
        <g opacity="0.6">
          {/* Orbital Concentric Arc 1 */}
          <ellipse
            cx="1150"
            cy="310"
            rx="460"
            ry="380"
            stroke="#E8D5BC"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />
          {/* Orbital Concentric Arc 2 */}
          <ellipse
            cx="1150"
            cy="310"
            rx="640"
            ry="530"
            stroke="#E8D5BC"
            strokeWidth="1.2"
            strokeOpacity="0.38"
            fill="none"
          />
          {/* Orbital Concentric Arc 3 (Dashed) */}
          <ellipse
            cx="1150"
            cy="310"
            rx="820"
            ry="680"
            stroke="#E8D5BC"
            strokeWidth="1"
            strokeDasharray="5 7"
            strokeOpacity="0.3"
            fill="none"
          />
          {/* Orbital Concentric Arc 4 (Expansive Sky Sweep) */}
          <ellipse
            cx="1150"
            cy="310"
            rx="1020"
            ry="840"
            stroke="#E8D5BC"
            strokeWidth="1"
            strokeOpacity="0.22"
            fill="none"
          />
          {/* Soft Horizontal Ambient Horizon Line */}
          <path
            d="M-50,230 C320,160 760,200 1490,120"
            stroke="#E8D5BC"
            strokeWidth="1"
            strokeOpacity="0.32"
            fill="none"
          />
        </g>

        {/* ========================================================== */}
        {/* B. UPPER-RIGHT FLOWING WAVES (MUTED LAVENDER & SOFT PURPLE) */}
        {/* ========================================================== */}
        <g>
          {/* Deep Royal Purple Layer */}
          <path
            d="M960,0 C1080,130 1240,220 1440,270 L1440,0 Z"
            fill="url(#purpleWaveDeep)"
          />
          {/* Soft Lavender Crest Layer */}
          <path
            d="M1090,0 C1190,110 1320,185 1440,215 L1440,0 Z"
            fill="url(#purpleWaveSoft)"
          />
          {/* Luminous Highlight Crest Outlines */}
          <path
            d="M958,0 C1078,132 1238,222 1440,272"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M936,-5 C1060,125 1220,215 1440,265"
            stroke="rgba(167, 142, 216, 0.55)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
          <path
            d="M1088,0 C1188,112 1318,187 1440,217"
            stroke="rgba(255, 255, 255, 0.65)"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* ========================================================== */}
        {/* C. LEFT FLOWING WAVES (SKY BLUE & SOFT BLUE)               */}
        {/* ========================================================== */}
        <g>
          {/* Primary Sky Blue Wave - swoops from mid-left under hero and under left side of stats */}
          <path
            d="M0,470 C140,490 280,560 420,640 C580,720 780,750 980,770 C1140,785 1300,775 1440,795 L1440,960 L0,960 Z"
            fill="url(#skyBlueWaveOuter)"
          />
          {/* Secondary Soft Blue Layer */}
          <path
            d="M0,540 C180,560 340,640 500,710 C680,785 880,805 1100,815 C1260,820 1380,810 1440,830 L1440,960 L0,960 Z"
            fill="url(#skyBlueWaveInner)"
          />
          {/* Delicate Blue Contour Crest Strokes */}
          <path
            d="M0,468 C140,488 280,558 420,638 C580,718 780,748 980,768 C1140,783 1300,773 1440,793"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M0,488 C150,510 300,585 450,665 C620,740 820,768 1020,783"
            stroke="rgba(91, 158, 230, 0.65)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M0,538 C180,558 340,638 500,708 C680,783 880,803 1100,813"
            stroke="rgba(165, 202, 246, 0.55)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
        </g>

        {/* ========================================================== */}
        {/* D. LOWER-RIGHT FLOWING WAVES (WARM PEACH, CORAL & GOLD)     */}
        {/* ========================================================== */}
        <g>
          {/* Outer Peach & Coral Layer */}
          <path
            d="M1440,530 C1310,555 1160,630 990,715 C820,795 650,845 460,875 C310,895 160,898 0,895 L0,960 L1440,960 Z"
            fill="url(#coralWaveOuter)"
          />
          {/* Inner Warm Peach Crest */}
          <path
            d="M1440,610 C1290,640 1140,720 970,790 C800,860 630,895 440,915 L1440,960 Z"
            fill="url(#peachWaveInner)"
          />
          {/* Peach & Champagne Contour Outlines */}
          <path
            d="M1440,528 C1310,553 1160,628 990,713 C820,793 650,843 460,873 C310,893 160,896 0,893"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M1440,555 C1300,582 1145,655 965,735 C785,815 605,855 410,880"
            stroke="rgba(240, 152, 111, 0.65)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M1440,608 C1290,638 1140,718 970,788 C800,858 630,893 440,913"
            stroke="rgba(238, 213, 181, 0.6)"
            strokeWidth="1"
            strokeDasharray="4 6"
            fill="none"
          />
        </g>

        {/* ========================================================== */}
        {/* E. SUBTLE BOTANICAL LEAF DETAILS (UPPER-LEFT CORNER)       */}
        {/* Gracefully framing the top-left edge without overlapping    */}
        {/* ========================================================== */}
        <g opacity="0.92" filter="url(#leafShadow)" transform="translate(-16, -10) scale(0.9)">
          {/* Main Corner Twigs */}
          <path
            d="M-10,-5 C15,10 40,28 58,55 C72,75 80,102 85,130"
            stroke="url(#stemBranch)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18,12 C32,25 48,45 56,68"
            stroke="url(#stemBranch)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M42,38 C60,52 72,72 78,96"
            stroke="url(#stemBranch)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M58,75 C70,90 76,110 80,132"
            stroke="url(#stemBranch)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Leaf 1 (Top Edge Anchor) */}
          <g transform="translate(15, 6) rotate(-25)">
            <path
              d="M0,0 C-7,-12 -2,-26 12,-30 C22,-24 24,-10 16,0 C10,8 4,6 0,0 Z"
              fill="url(#leafAmberDeep)"
            />
            <path d="M4,1 L11,-24" stroke="#5E2C0C" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Leaf 2 (Upper Corner) */}
          <g transform="translate(38, 22) rotate(-10)">
            <path
              d="M0,0 C-9,-14 -4,-30 14,-34 C26,-26 27,-12 18,0 C12,8 5,6 0,0 Z"
              fill="url(#leafBronzeGold)"
            />
            <path d="M5,1 L13,-26" stroke="#66320C" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Leaf 3 (Small companion) */}
          <g transform="translate(25, 30) rotate(35)">
            <path
              d="M0,0 C-5,-9 -2,-18 9,-22 C16,-17 18,-8 11,0 C8,5 3,4 0,0 Z"
              fill="url(#leafHarvestOchre)"
            />
          </g>

          {/* Leaf 4 (Upper Mid-Branch) */}
          <g transform="translate(56, 48) rotate(-5)">
            <path
              d="M0,0 C-10,-15 -4,-32 16,-36 C28,-28 29,-14 19,0 C13,9 5,7 0,0 Z"
              fill="url(#leafAmberDeep)"
            />
            <path d="M5,1 L14,-28" stroke="#5E2C0C" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Leaf 5 (Mid-Branch Droop) */}
          <g transform="translate(48, 62) rotate(45)">
            <path
              d="M0,0 C-8,-12 -3,-26 13,-28 C22,-22 23,-10 15,0 C10,7 4,5 0,0 Z"
              fill="url(#leafBronzeGold)"
            />
            <path d="M4,1 L12,-22" stroke="#66320C" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Leaf 6 (Graceful Lower Droop) */}
          <g transform="translate(74, 82) rotate(15)">
            <path
              d="M0,0 C-9,-13 -3,-28 15,-30 C25,-24 26,-11 17,0 C11,8 5,6 0,0 Z"
              fill="url(#leafHarvestOchre)"
            />
            <path d="M4,1 L13,-23" stroke="#66320C" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Leaf 7 (Lower Branch Droop) */}
          <g transform="translate(68, 102) rotate(60)">
            <path
              d="M0,0 C-7,-10 -2,-22 11,-24 C19,-18 20,-9 13,0 C9,6 3,5 0,0 Z"
              fill="url(#leafAmberDeep)"
            />
          </g>

          {/* Leaf 8 (Terminal Tip) */}
          <g transform="translate(85, 128) rotate(30)">
            <path
              d="M0,0 C-6,-10 -2,-20 10,-22 C17,-17 18,-8 12,0 C8,6 3,5 0,0 Z"
              fill="url(#leafBronzeGold)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
