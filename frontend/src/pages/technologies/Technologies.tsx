import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import { Cpu, Terminal, Layers, Sparkles, Database, Cloud } from 'lucide-react';

interface TechnologiesProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function Technologies({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: TechnologiesProps) {
  const techTracks = [
    {
      title: 'Applied Generative AI & LLMs',
      desc: 'Retrieval Augmented Generation (RAG), local model deployment, fine-tuning, and agentic workflows.',
      icon: Sparkles,
      tag: 'Core Domain',
    },
    {
      title: 'Full-Stack AI Engineering',
      desc: 'Building production APIs, scalable distributed databases, and high-performance user interfaces for AI products.',
      icon: Terminal,
      tag: 'Engineering',
    },
    {
      title: 'Computer Vision & Robotics',
      desc: 'Embedded AI, spatial computing, autonomous perception systems, and edge tensor processors.',
      icon: Cpu,
      tag: 'Hardware & Edge',
    },
    {
      title: 'Cloud AI Infrastructure',
      desc: 'Orchestrating model serving clusters, GPU resource management, and secure enterprise deployments.',
      icon: Cloud,
      tag: 'Infrastructure',
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
                  TECHNOLOGIES · OD AI HUB
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Pioneering Technologies Born in Odisha.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                From sovereign language models to hardware-accelerated computer vision, explore the technological foundations developed and deployed across our ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techTracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2145]/5 text-[#0B2145] rounded-full text-xs font-semibold mb-4">
                    {track.tag}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4B942]/20 flex items-center justify-center text-[#B45309] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B2145] mb-2">{track.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{track.desc}</p>
                  <button
                    onClick={() => onOpenEnquire(`Technology Track: ${track.title}`)}
                    className="text-xs font-bold text-[#0B2145] hover:text-[#B45309] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Enquire About Technology Cohorts</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
