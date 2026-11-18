import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import { Building2, LineChart, Shield, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ForBusinessProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function ForBusiness({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: ForBusinessProps) {
  const solutions = [
    {
      title: 'Enterprise AI Transformation',
      desc: 'Modernize legacy business workflows with autonomous internal agents, smart document processing, and RAG search systems.',
    },
    {
      title: 'Tailored Corporate Training',
      desc: 'Upskill your engineering, operations, and leadership teams on applied generative AI tools, data governance, and secure pipelines.',
    },
    {
      title: 'Vetted Tech Talent Hiring',
      desc: 'Direct hiring pipelines to hire pre-screened, portfolio-verified graduates and junior AI developers trained on modern production stacks.',
    },
  ];

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
                  ENTERPRISE SOLUTIONS · FOR BUSINESS
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Accelerate Enterprise Efficiency with AI.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Partner with OD AI HUB for tailored corporate enablement, proprietary AI tooling integration, and hiring pre-evaluated engineering talent.
              </p>
              <button
                onClick={() => onOpenEnquire('Enterprise & Corporate Solutions')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] text-[#0B2145] font-bold text-sm sm:text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                Schedule an Executive Consultation →
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B2145]/5 text-[#0B2145] flex items-center justify-center font-mono font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">{sol.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{sol.desc}</p>
                <button
                  onClick={() => onOpenEnquire(`Enterprise: ${sol.title}`)}
                  className="text-xs font-bold text-[#0B2145] hover:text-[#B45309] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
