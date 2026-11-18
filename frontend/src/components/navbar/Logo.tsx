import React from 'react';

export default function Logo({
  showTagline = true,
  className = '',
  light = false,
}: {
  showTagline?: boolean;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 cursor-pointer group select-none ${className}`}>
      {/* Orbital Icon */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="18"
            transform="rotate(-28 50 50)"
            stroke={light ? '#E8D4B5' : '#AD784B'}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="transition-colors duration-300 group-hover:stroke-bronze-300"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            fill={light ? '#FFFDFC' : '#291D29'}
          />
          <circle
            cx="50"
            cy="50"
            r="13"
            stroke={light ? '#291D29' : '#E8D4B5'}
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="50"
            r="5"
            fill="#AD784B"
          />
          {/* Orbital satellite node */}
          <circle
            cx="78"
            cy="35"
            r="4.5"
            fill="#AD784B"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
              light ? 'text-[#FFFDFC]' : 'text-[#291D29]'
            }`}
          >
            OD AI HUB
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold mt-0.5 ${
              light ? 'text-[#E8D4B5]/80' : 'text-mauve-deep'
            }`}
          >
            LEARN • BUILD • INNOVATE • SCALE
          </span>
        )}
      </div>
    </div>
  );
}
