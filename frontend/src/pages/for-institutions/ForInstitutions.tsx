import React from 'react';
import Footer from '../../components/footer/Footer';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import FinalCTASection from '../home/sections/FinalCTASection';
import InstitutionsAndProducts from '../home/sections/InstitutionsAndProducts';

interface ForInstitutionsProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateHome: () => void;
}

export default function ForInstitutions({
  onOpenEnquire,
  onPreviewItem,
  onNavigateHome,
}: ForInstitutionsProps) {
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
                  ACADEMIC PARTNERSHIPS · FOR INSTITUTIONS
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Transforming Colleges into Innovation Hubs.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Empowering universities, engineering colleges, and polytechnics across Odisha with turnkey AI laboratories, verified curriculum augmentations, faculty development, and student placement enablement.
              </p>
              <button
                onClick={() => onOpenEnquire('Institutional MoUs and Partnerships')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F4B942] to-[#E5A932] text-[#0B2145] font-bold text-sm sm:text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                Partner With OD AI HUB →
              </button>
            </div>
          </div>
        </section>

        {/* Reusing existing verified Institutions and Products section */}
        <InstitutionsAndProducts
          onPartnerWithUs={() => onOpenEnquire('Institutional Partnership MoU')}
          onExploreProduct={(prod) => onOpenEnquire(`Product Enquiry: ${prod}`)}
        />

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
