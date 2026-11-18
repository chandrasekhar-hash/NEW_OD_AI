import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Common Components
import BrandLoader from './components/common/BrandLoader';
import DestinationToast from './components/common/DestinationToast';
import EnquiryModal from './components/common/EnquiryModal';
import Navbar from './components/navbar/Navbar';

// Pages
import Home from './pages/home/Home';
import {
  Overview,
  School,
  AfterPlusTwo,
  CollegePrograms,
  Graduates,
  Internships,
  SkillAssessment,
  FAQ,
} from './pages/academy';
import Technologies from './pages/technologies/Technologies';
import InnovationLab from './pages/innovation-lab/InnovationLab';
import Startups from './pages/startups/Startups';
import ForBusiness from './pages/for-business/ForBusiness';
import ForInstitutions from './pages/for-institutions/ForInstitutions';
import Events from './pages/events/Events';
import SuccessStories from './pages/success-stories/SuccessStories';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';

// Routing
import { AppRoute, getRouteFromLocation, navigateToRoute } from './routes';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [enquireProgram, setEnquireProgram] = useState<string | undefined>(undefined);
  const [toastItem, setToastItem] = useState<string | null>(null);
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getRouteFromLocation);

  // Synchronize route with browser location (back/forward, URL changes, hash changes)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRouteFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenEnquire = (program?: string) => {
    setEnquireProgram(program);
    setEnquireModalOpen(true);
  };

  const handlePreviewItem = (name: string) => {
    setToastItem(name);
  };

  const handleNavigateRoute = (route: AppRoute) => {
    navigateToRoute(route);
    setCurrentRoute(route);
  };

  // Determine the main navigation's active section from the current route
  const getNavCurrentView = (): string => {
    if (currentRoute === 'home') return 'home';
    if (currentRoute.startsWith('academy')) return 'academy';
    return currentRoute; // events, technologies, etc.
  };

  // Handle navigation from the global navbar to any section
  const handleGlobalNavigation = (view: string) => {
    if (view === 'academy') {
      handleNavigateRoute('academy-overview');
    } else if (view === 'home') {
      handleNavigateRoute('home');
    } else {
      // All other views map directly to routes
      handleNavigateRoute(view as AppRoute);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F1E9] text-[#291D29] selection:bg-[#E8D4B5]/40 selection:text-[#291D29]">
      {/* Brand intro splash screen */}
      {loading && <BrandLoader onComplete={() => setLoading(false)} />}

      {/* ============================================================== */}
      {/* GLOBAL MAIN NAVIGATION — always visible on every route         */}
      {/* ============================================================== */}
      <Navbar
        onOpenEnquire={handleOpenEnquire}
        onPreviewItem={handlePreviewItem}
        currentView={getNavCurrentView()}
        onNavigateView={handleGlobalNavigation}
      />

      {/* ============================================================== */}
      {/* ROUTE RENDERING */}
      {/* ============================================================== */}
      {currentRoute === 'home' && (
        <Home
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {/* ACADEMY SUB-PAGES */}
      {currentRoute === 'academy-overview' && (
        <Overview
          onOpenEnquire={handleOpenEnquire}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-school' && (
        <School
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-after-plus-two' && (
        <AfterPlusTwo
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-college-programs' && (
        <CollegePrograms
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-graduates' && (
        <Graduates
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-internships' && (
        <Internships
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {currentRoute === 'academy-skill-assessment' && (
        <SkillAssessment
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
        />
      )}

      {currentRoute === 'academy-faq' && (
        <FAQ
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademyOverview={() => handleNavigateRoute('academy-overview')}
          onNavigateSchool={() => handleNavigateRoute('academy-school')}
          onNavigateAfterPlus2={() => handleNavigateRoute('academy-after-plus-two')}
          onNavigateCollege={() => handleNavigateRoute('academy-college-programs')}
          onNavigateGraduates={() => handleNavigateRoute('academy-graduates')}
          onNavigateInternships={() => handleNavigateRoute('academy-internships')}
          onNavigateAssessment={() => handleNavigateRoute('academy-skill-assessment')}
        />
      )}

      {/* OTHER PRIMARY MAIN SECTIONS */}
      {currentRoute === 'technologies' && (
        <Technologies
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'innovation-lab' && (
        <InnovationLab
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'startups' && (
        <Startups
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'for-business' && (
        <ForBusiness
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'for-institutions' && (
        <ForInstitutions
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'events' && (
        <Events
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
          onNavigateAcademy={() => handleNavigateRoute('academy-overview')}
        />
      )}

      {currentRoute === 'success-stories' && (
        <SuccessStories
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'about' && (
        <About
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'blog' && (
        <Blog
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {currentRoute === 'contact' && (
        <Contact
          onOpenEnquire={handleOpenEnquire}
          onPreviewItem={handlePreviewItem}
          onNavigateHome={() => handleNavigateRoute('home')}
        />
      )}

      {/* Admissions & Partnerships Modal */}
      <EnquiryModal
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
        defaultProgram={enquireProgram}
      />

      {/* Interactive Destination Toast */}
      <DestinationToast
        item={toastItem}
        onClose={() => setToastItem(null)}
        onEnquire={() => {
          if (toastItem) handleOpenEnquire(toastItem);
          setToastItem(null);
        }}
      />
    </div>
  );
}
