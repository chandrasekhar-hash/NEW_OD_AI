import React from 'react';

export default function AtmosphericLandscape() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Multi-Layered Atmospheric Ambient Gradients */}
      <div className="absolute inset-0 bg-atmospheric-base" />

      {/* 2. Top-Left Champagne Radiant Dawn Glow */}
      <div
        className="absolute top-0 left-0 w-[55vw] max-w-[800px] h-[600px] pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(ellipse 90% 75% at 15% 15%, rgba(248, 241, 230, 0.98) 0%, rgba(242, 230, 214, 0.7) 40%, rgba(247, 241, 233, 0) 80%)',
        }}
      />

      {/* 3. Center-Right Dusty Blush Pink & Mauve Aura behind Odisha Constellation */}
      <div
        className="absolute top-[4%] right-[2%] w-[60vw] max-w-[850px] h-[650px] pointer-events-none opacity-85"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 65% 30%, rgba(228, 202, 210, 0.65) 0%, rgba(212, 180, 190, 0.45) 40%, rgba(175, 145, 160, 0.2) 70%, transparent 90%)',
        }}
      />

      {/* ============================================================== */}
      {/* LAYER A: Top-Right Mountain Ridges (Directly behind Odisha Map) */}
      {/* ============================================================== */}
      <div
        className="absolute top-0 right-0 w-[60vw] max-w-[900px] h-[520px] pointer-events-none overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 900 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Distant Mountain Ridge Gradient */}
            <linearGradient id="topRidgeDistant" x1="100" y1="120" x2="850" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C8B0BA" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#B89EA9" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#D2BFCA" stopOpacity="0.35" />
            </linearGradient>

            {/* Midground Ridge Gradient */}
            <linearGradient id="topRidgeMid" x1="80" y1="200" x2="900" y2="440" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A98E9B" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#9C7F8D" stopOpacity="0.58" />
              <stop offset="100%" stopColor="#B89DAA" stopOpacity="0.42" />
            </linearGradient>

            {/* Foreground Mountain Contour */}
            <linearGradient id="topRidgeFore" x1="150" y1="280" x2="900" y2="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8E7280" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#7E6371" stopOpacity="0.68" />
              <stop offset="100%" stopColor="#9C808E" stopOpacity="0.5" />
            </linearGradient>

            {/* Valley Mist Overlay */}
            <linearGradient id="topValleyMist" x1="0" y1="200" x2="0" y2="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F7F1E9" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#F7F1E9" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F7F1E9" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Ridge 1: Distant Silhouette */}
          <path
            d="M0,280 Q200,160 420,210 T720,170 Q820,150 900,200 L900,520 L0,520 Z"
            fill="url(#topRidgeDistant)"
          />

          {/* Ridge 2: Midground Silhouette */}
          <path
            d="M50,320 Q280,220 500,260 T800,220 Q860,210 900,240 L900,520 L50,520 Z"
            fill="url(#topRidgeMid)"
          />

          {/* Ridge 3: Foreground Silhouette */}
          <path
            d="M150,360 Q380,280 600,310 T900,280 L900,520 L150,520 Z"
            fill="url(#topRidgeFore)"
          />

          {/* Soft valley mist blending mountains down into section */}
          <rect x="0" y="200" width="900" height="320" fill="url(#topValleyMist)" />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* LAYER C: Lower Mountain Ridges (Directly behind the 3 Bento Cards) */}
      {/* ============================================================== */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[420px] pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Distant Lower Ridge Gradient */}
            <linearGradient id="lowerRidgeBack" x1="100" y1="80" x2="1350" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9C7F8E" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#876979" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#755666" stopOpacity="0.58" />
            </linearGradient>

            {/* Mid Lower Ridge Gradient */}
            <linearGradient id="lowerRidgeMid" x1="0" y1="140" x2="1440" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#725464" stopOpacity="0.58" />
              <stop offset="45%" stopColor="#5E4251" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#4E3442" stopOpacity="0.72" />
            </linearGradient>

            {/* Foreground Lower Ridge Gradient */}
            <linearGradient id="lowerRidgeFront" x1="0" y1="200" x2="1440" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#513745" stopOpacity="0.68" />
              <stop offset="50%" stopColor="#3E2734" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#301C27" stopOpacity="0.85" />
            </linearGradient>

            {/* Mist Between Lower Ridges */}
            <linearGradient id="lowerValleyMist" x1="0" y1="0" x2="0" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F7F1E9" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#F7F1E9" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#F7F1E9" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F7F1E9" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Ridge 1: Back Silhouette (Smooth rolling contours across full width) */}
          <path
            d="M0,140 Q220,70 480,110 T960,80 Q1200,60 1440,120 L1440,420 L0,420 Z"
            fill="url(#lowerRidgeBack)"
          />

          {/* Hazy Valley Mist Layer */}
          <path
            d="M0,160 Q320,110 700,140 T1440,130 L1440,340 L0,340 Z"
            fill="url(#lowerValleyMist)"
            opacity="0.7"
          />

          {/* Ridge 2: Mid Silhouette */}
          <path
            d="M0,200 Q280,140 640,180 T1320,150 Q1390,160 1440,180 L1440,420 L0,420 Z"
            fill="url(#lowerRidgeMid)"
          />

          {/* Ridge 3: Front Silhouette */}
          <path
            d="M0,270 Q340,200 720,240 T1440,220 L1440,420 L0,420 Z"
            fill="url(#lowerRidgeFront)"
          />
        </svg>
      </div>
    </div>
  );
}