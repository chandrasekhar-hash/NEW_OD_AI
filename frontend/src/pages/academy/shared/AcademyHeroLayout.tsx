import React from 'react';

interface AcademyHeroLayoutProps {
  breadcrumb: React.ReactNode;
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  rightVisual?: React.ReactNode;
  id?: string;
}

export default function AcademyHeroLayout({
  breadcrumb,
  eyebrow,
  heading,
  description,
  actions,
  rightVisual,
  id = 'academy-hero',
}: AcademyHeroLayoutProps) {
  return (
    <section
      id={id}
      className="relative bg-[#0B2145] text-white overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36 border-b border-[#183A6D]"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#183A6D]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F4B942]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-5 font-medium">
              {breadcrumb}
            </nav>

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
                {eyebrow}
              </span>
              <span className="w-5 h-[1.5px] bg-[#F4B942]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed mb-8">
              {description}
            </p>

            {actions && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {actions}
              </div>
            )}
          </div>

          {rightVisual && (
            <div className="lg:col-span-6 relative">
              {rightVisual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
