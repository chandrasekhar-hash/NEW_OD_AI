import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, FolderGit2, Briefcase, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturedProgramBannerProps {
  onApply: () => void;
}

export default function FeaturedProgramBanner({ onApply }: FeaturedProgramBannerProps) {
  const details = [
    { label: 'Sat 2 hrs + Sun 2 hrs', icon: Clock },
    { label: 'Industry Mentors', icon: Users },
    { label: 'Real Projects & Internship Support', icon: FolderGit2 },
    { label: 'Career & Interview Preparation', icon: Briefcase },
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#F7F1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-[#291D29] text-[#FFFDFC] border border-[#B77B4B]/30 shadow-2xl p-7 sm:p-10 lg:p-12"
        >
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B77B4B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B67C7]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Description & Program Details */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-5">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B77B4B]/20 border border-[#B77B4B]/40 text-[#EBC99A] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#EBC99A]" />
                <span>Weekend Industry Mentorship · Next batch TBC</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial tracking-tight text-[#FFFCF8] leading-[1.12]">
                Choose Any College.{' '}
                <span className="font-editorial-italic text-[#EBC99A] block sm:inline">
                  Build Your Career With Us.
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#E8DCCF] leading-relaxed max-w-2xl">
                Structured weekend industry mentorship throughout your degree: practical training, AI skills, real projects and career preparation alongside your college studies.
              </p>

              {/* 4 Program Detail Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                {details.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#FFFCF8]"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#B77B4B]/30 text-[#EBC99A] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Pricing & Application CTA */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-[#B77B4B]/40 p-6 sm:p-7 text-center space-y-4 shadow-xl">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#EBC99A]">
                    Tuition &amp; Terms
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-editorial text-[#FFFCF8] mt-1">
                    ₹30,000{' '}
                    <span className="text-sm sm:text-base font-normal text-[#E8DCCF]">
                      / year
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-[#E8DCCF] border-y border-white/10 py-3.5">
                  <div className="font-medium text-[#FFFCF8]">
                    Proposed fee · 4 hrs / week
                  </div>
                  <div className="text-[11px] font-mono text-[#EBC99A]">
                    Selection Test | Scholarships · DETAILS TBC
                  </div>
                </div>

                <button
                  onClick={onApply}
                  className="w-full py-3.5 px-6 rounded-full bg-[#B77B4B] hover:bg-[#C78B5B] text-[#291D29] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Apply for Selection Test →</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
