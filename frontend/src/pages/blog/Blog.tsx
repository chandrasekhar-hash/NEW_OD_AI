import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface BlogProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function Blog({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: BlogProps) {
  const articles = [
    {
      title: 'Building Odisha’s Sovereign AI Infrastructure: A Roadmap',
      desc: 'Why regional talent and localized data compute are critical for democratizing high-value technology careers.',
      date: 'Feb 2026',
      tag: 'Ecosystem',
    },
    {
      title: 'How High School Students Are Building Computer Vision Models',
      desc: 'Highlights from our young creators cohorts in Berhampur mastering Python and OpenCV.',
      date: 'Jan 2026',
      tag: 'Academy',
    },
    {
      title: 'From College Projects to Venture Capital: The Founder Journey',
      desc: 'Practical lessons from engineering graduates turning final year capstones into real products.',
      date: 'Jan 2026',
      tag: 'Startups',
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
                  INSIGHTS & STORIES · BLOG
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Perspectives on AI, Education & Innovation.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Articles, technical teardowns, and dispatches from the frontlines of Odisha’s technology revolution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="px-2.5 py-1 bg-[#0B2145]/5 text-[#0B2145] font-semibold rounded-full">
                      {art.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B2145] mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>
                <button
                  onClick={() => onPreviewItem(art.title)}
                  className="text-xs font-bold text-[#0B2145] hover:text-[#B45309] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
