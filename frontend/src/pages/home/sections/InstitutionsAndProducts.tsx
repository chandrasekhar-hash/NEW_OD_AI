import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Briefcase, GraduationCap, Cpu, Code2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface InstitutionsAndProductsProps {
  onPartnerWithUs: () => void;
  onExploreProduct?: (name: string) => void;
}

export default function InstitutionsAndProducts({
  onPartnerWithUs,
  onExploreProduct,
}: InstitutionsAndProductsProps) {
  const institutionPoints = [
    'Student Training & Certifications',
    'Internship Programs',
    'Faculty Development',
    'Innovation Labs & CoEs',
    'Final-Year Projects & Hackathons',
  ];

  const products = [
    {
      name: 'CIINZO',
      tagline: 'City In Your Pocket',
      description: 'Hyper-local urban utility and merchant discovery platform tailored for Tier-2/3 Indian cities.',
      category: 'City Platform',
      status: 'In Pilot',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      name: 'odEdu',
      tagline: 'Education SaaS for Schools & Colleges',
      description: 'Comprehensive campus management, student skill-tracking, and curriculum analytics suite.',
      category: 'EdTech',
      status: 'In Development',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      name: 'More Coming Soon',
      tagline: 'Pipeline of Applied AI Ventures',
      description: 'Applied robotics prototypes, Agritech models, and local governance AI solutions in our R&D roadmap.',
      category: 'Pipeline',
      status: 'Coming Soon',
      statusColor: 'bg-champagne-200 text-bronze-800 border-champagne-300',
    },
  ];

  return (
    <section id="institutions" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9] border-t border-champagne-200/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* ============================================================== */}
        {/* 1. FOR INSTITUTIONS */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#B77B4B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
                ACADEMIA PARTNERSHIPS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum leading-tight">
              For Institutions
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-burgundy-deep font-editorial-italic">
              Bridging Academia and Industry.
            </p>

            <p className="text-sm sm:text-base text-mauve-deep leading-relaxed">
              We collaborate with colleges, universities and technical institutes across Odisha to augment student learning with verified industry standards, hands-on faculty workshops, and live infrastructure.
            </p>

            <div className="pt-2">
              <button
                onClick={onPartnerWithUs}
                className="px-7 py-3.5 rounded-full bg-plum hover:bg-plum-light text-champagne-100 font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group border border-champagne-200/20 cursor-pointer"
              >
                <span>Partner With Us →</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 5 Feature Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-premium-card bg-[#FFFDFC] space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B77B4B] mb-2">
                Core Institutional Collaboration Tracks
              </div>
              {institutionPoints.map((point, idx) => (
                <div
                  key={point}
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F2] hover:bg-[#FCE9DD]/50 border border-champagne-200/60 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-champagne-200/80 text-bronze-700 flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-plum">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* 2. OUR PRODUCTS & INITIATIVES */}
        {/* ============================================================== */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#B77B4B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
                ECOSYSTEM BUILDS
              </span>
              <span className="w-6 h-[2px] bg-[#B77B4B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-plum tracking-tight">
              Our Products &amp; Initiatives
            </h2>
            <p className="text-sm sm:text-base text-mauve-deep">
              Homegrown software platforms and applied digital products engineered within the OD AI ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((prod, idx) => (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.08 }}
                onClick={() => onExploreProduct && onExploreProduct(prod.name)}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-premium-card bg-[#FFFDFC] flex flex-col justify-between hover:shadow-elevated transition-all duration-300 relative group cursor-pointer"
              >
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-mauve-deep bg-champagne-100/70 px-2.5 py-1 rounded-full border border-champagne-200/60">
                      {prod.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${prod.statusColor}`}>
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-editorial text-plum group-hover:text-bronze-600 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-sm font-semibold text-burgundy-deep font-editorial-italic mt-1">
                    {prod.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-mauve-deep mt-3 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-champagne-200/50 flex items-center justify-between text-xs font-bold text-[#B77B4B] group-hover:text-plum transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
