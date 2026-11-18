import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import { Rocket, ShieldCheck, Users, TrendingUp, Handshake, Sparkles } from 'lucide-react';

interface StartupsProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function Startups({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: StartupsProps) {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#291D29] relative overflow-x-hidden pt-[76px]">
      <AtmosphericLandscape />

      <main className="relative z-10">
        <section className="bg-[#0B2145] text-white py-20 border-b border-[#183A6D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
                <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
                  VENTURE CATALYST · STARTUPS
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Backing the Next Wave of Tech Founders.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                We empower student and regional startup founders with seed compute infrastructure, technical co-founder matching, mentorship, and investor network introductions.
              </p>
              <button
                onClick={() => onOpenEnquire('Startup Incubation & Support')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] text-[#0B2145] font-bold text-sm sm:text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                Apply for Startup Support →
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Technical Co-Founders</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with skilled AI engineers, full-stack architects, and UI/UX designers from the OD AI Academy talent pool.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Cloud & Compute Credits</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Subsidized access to GPU clusters, database infrastructure, and API developer tooling for building your core product.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Investor Demo Days</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Showcase validated products to angel investors, regional venture funds, and institutional corporate partners.
              </p>
            </div>
          </div>
        </section>

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
