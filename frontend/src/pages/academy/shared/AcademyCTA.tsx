import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AcademyCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function AcademyCTA({
  title = "Start Your Journey With OD AI Academy",
  description = "Join hands-on programs designed for school, college, graduates and professionals across Odisha.",
  primaryButtonText = "Apply Now",
  secondaryButtonText = "Book a Free Session",
  onPrimaryClick,
  onSecondaryClick,
}: AcademyCTAProps) {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-[#0B2145] via-[#0E2954] to-[#081831] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#F4B942_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onPrimaryClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] hover:from-[#E5A932] hover:to-[#D49822] text-[#0B2145] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSecondaryClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{secondaryButtonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
