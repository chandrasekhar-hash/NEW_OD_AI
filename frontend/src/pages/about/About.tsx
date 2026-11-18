import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import AboutSection from '../home/sections/AboutSection';
import WhyUsSection from '../home/sections/WhyUsSection';

interface AboutProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function About({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: AboutProps) {
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
                  OUR MISSION · ABOUT OD AI HUB
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                A Stronger Odisha Through AI.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Headquartered in Berhampur, OD AI HUB is an AI talent-to-innovation ecosystem empowering students, professionals, institutions, and businesses to learn, build, innovate and scale.
              </p>
            </div>
          </div>
        </section>

        {/* Existing verified About and Why Us Sections */}
        <AboutSection onOpenEnquire={onOpenEnquire} />
        <WhyUsSection />

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
