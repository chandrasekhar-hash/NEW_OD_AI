import React from 'react';
import AtmosphericLandscape from '../../components/animations/AtmosphericLandscape';
import Hero from './sections/Hero';
import PillarsBar from './sections/PillarsBar';
import StatisticsSection from './sections/StatisticsSection';
import EcosystemSection from './sections/EcosystemSection';
import FeaturedProgramBanner from './sections/FeaturedProgramBanner';
import InstitutionsAndProducts from './sections/InstitutionsAndProducts';
import WhyUsSection from './sections/WhyUsSection';
import BentoHighlights from './sections/BentoHighlights';
import ProjectsEventsVisits from './sections/ProjectsEventsVisits';
import FinalCTASection from './sections/FinalCTASection';
import Footer from '../../components/footer/Footer';

interface HomeProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem: (name: string) => void;
  onNavigateAcademyOverview?: (targetSectionId?: string, cardIndex?: number) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
  onNavigateInternships?: () => void;
  onNavigateAssessment?: () => void;
}

export default function Home({
  onOpenEnquire,
  onPreviewItem,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateInternships,
  onNavigateAssessment,
}: HomeProps) {
  const handleExploreEcosystem = () => {
    const el = document.getElementById('ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-[#291D29] overflow-x-hidden">
      {/* Background Atmosphere */}
      <AtmosphericLandscape />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenEnquire={onOpenEnquire}
          onExploreEcosystem={handleExploreEcosystem}
        />

        <PillarsBar />

        <StatisticsSection />

        <EcosystemSection onOpenEnquire={onOpenEnquire} />

        <FeaturedProgramBanner
          onApply={() => onOpenEnquire('Weekend Industry Mentorship Selection Test')}
        />

        <InstitutionsAndProducts
          onPartnerWithUs={() => onOpenEnquire('Institutional Partnership')}
          onExploreProduct={(prod) => onOpenEnquire(`Product: ${prod}`)}
        />

        <WhyUsSection />

        <ProjectsEventsVisits
          onOpenEnquire={(topic) => onOpenEnquire(topic || 'Projects, Events & Visits')}
        />

        <FinalCTASection onOpenEnquire={onOpenEnquire} />
      </main>

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
