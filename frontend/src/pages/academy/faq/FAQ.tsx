import React from 'react';
import AcademyAtmosphere from '../shared/AcademyAtmosphere';
import AcademySubNavbar from '../components/AcademySubNavbar';
import AcademyFAQ from '../shared/AcademyFAQ';
import AcademyCTA from '../shared/AcademyCTA';
import Footer from '../../../components/footer/Footer';

const GENERAL_ACADEMY_FAQS = [
  {
    q: 'What is OD AI Academy?',
    a: 'OD AI Academy is an applied AI learning and career development initiative empowering school students, engineering aspirants, college undergraduates, graduates, and professionals across Odisha with hands-on technical skills and industry mentorship.',
  },
  {
    q: 'Who can enroll in OD AI Academy programs?',
    a: 'We offer specialized pathways across every stage: School Programs (Classes 5–10), After +2 Career Mentorship, College Programs (B.Tech, BCA, MCA, B.Sc), Graduate Career Accelerators, and Intensive Internships.',
  },
  {
    q: 'Where are classes conducted?',
    a: 'Programs are delivered through a hybrid model featuring in-person workshops, live project labs at our Berhampur innovation hub, and interactive online cohorts.',
  },
  {
    q: 'Do you offer certificates and placement assistance?',
    a: 'Yes. All programs culminate in verified project portfolios, capstone certifications, and career acceleration including mock interviews, resume reviews, and direct referrals to hiring partners.',
  },
  {
    q: 'How does the Skill Assessment work?',
    a: 'Our diagnostic skill assessment evaluates aptitude, logical reasoning, and programming fundamentals to generate an individualized learning roadmap and 1-on-1 counselor guidance.',
  },
];

interface FAQPageProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  onNavigateHome: () => void;
  onNavigateAcademyOverview: (targetSectionId?: string) => void;
  onNavigateSchool?: () => void;
  onNavigateAfterPlus2?: () => void;
  onNavigateCollege?: () => void;
  onNavigateGraduates?: () => void;
  onNavigateInternships?: () => void;
  onNavigateAssessment?: () => void;
}

export default function FAQ({
  onOpenEnquire,
  onPreviewItem = () => {},
  onNavigateHome,
  onNavigateAcademyOverview,
  onNavigateSchool,
  onNavigateAfterPlus2,
  onNavigateCollege,
  onNavigateGraduates,
  onNavigateInternships,
  onNavigateAssessment,
}: FAQPageProps) {
  const handleSelectNav = (item: { label: string; targetId: string }) => {
    if (item.label === 'Overview') onNavigateAcademyOverview();
    else if (item.label === 'School' && onNavigateSchool) onNavigateSchool();
    else if (item.label === 'After +2' && onNavigateAfterPlus2) onNavigateAfterPlus2();
    else if (item.label === 'College Programs' && onNavigateCollege) onNavigateCollege();
    else if (item.label === 'Graduates' && onNavigateGraduates) onNavigateGraduates();
    else if (item.label === 'Internships' && onNavigateInternships) onNavigateInternships();
    else if (item.label === 'Skill Assessment' && onNavigateAssessment) onNavigateAssessment();
    else if (item.label === 'FAQ') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#291D29] relative overflow-x-clip pt-[80px] sm:pt-[82px]">
      <AcademyAtmosphere />
      <AcademySubNavbar activeNav="FAQ" onSelectNav={handleSelectNav} />

      {/* Hero Banner */}
      <section className="relative z-10 bg-[#0B2145] text-white py-16 sm:py-20 border-b border-[#183A6D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#F4B942]" />
            <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
              ACADEMY FAQ & HELP
            </span>
            <span className="w-4 h-[1.5px] bg-[#F4B942]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
            Got Questions? We Have Answers.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Find answers to common questions about our admissions, curriculum, mentors, and learning pathways.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <AcademyFAQ
        title="Frequently Asked Questions"
        subtitle="Common queries across all OD AI Academy tracks."
        items={GENERAL_ACADEMY_FAQS}
      />

      {/* CTA */}
      <AcademyCTA
        title="Still Have Questions?"
        description="Speak with our admissions counselors and technical mentors to find the right path for you."
        primaryButtonText="Book Free Consultation"
        secondaryButtonText="Send an Enquiry"
        onPrimaryClick={() => onOpenEnquire('Academy FAQ - Free Consultation')}
        onSecondaryClick={() => onOpenEnquire('Academy General Enquiry')}
      />

      <Footer onOpenEnquire={onOpenEnquire} onPreviewItem={onPreviewItem} />
    </div>
  );
}
