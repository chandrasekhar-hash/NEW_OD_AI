import React from 'react';

interface AcademySectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function AcademySectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: AcademySectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-4 h-[1.5px] bg-[#F4B942]" />
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              dark ? 'text-[#F4B942]' : 'text-[#0B2145]'
            }`}
          >
            {eyebrow}
          </span>
          <span className="w-4 h-[1.5px] bg-[#F4B942]" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-3 ${
          dark ? 'text-white' : 'text-[#0B2145]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
