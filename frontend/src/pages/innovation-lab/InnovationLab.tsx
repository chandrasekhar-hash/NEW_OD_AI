import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import { FlaskConical, Rocket, Brain, Sparkles, Cpu, Award } from 'lucide-react';

interface InnovationLabProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function InnovationLab({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: InnovationLabProps) {
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
                  APPLIED R&D · INNOVATION LAB
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Where Curiosity Meets Applied Engineering.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                The OD AI Innovation Lab is our sandbox for bleeding-edge experiments, hardware prototyping, and collaborative research with academic and industrial partners.
              </p>
              <button
                onClick={() => onOpenEnquire('Innovation Lab Research Collaboration')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] text-[#0B2145] font-bold text-sm sm:text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                Propose a Research Project →
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Prototype Incubation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Turning conceptual algorithms into robust minimum viable products with dedicated computing resources.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Regional Problem Solving</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Applying artificial intelligence to agriculture, healthcare, logistics, and education challenges across Odisha.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">Venture Acceleration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Guiding breakthrough student and researcher inventions from initial lab code to funded commercial spin-offs.
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
