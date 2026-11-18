import React from 'react';

export interface SubNavItem {
  label: string;
  targetId: string;
  path: string;
}

export const ACADEMY_SUBNAV_LINKS: SubNavItem[] = [
  { label: 'Overview', targetId: 'academy-overview', path: '/academy/overview' },
  { label: 'School', targetId: 'school-hero', path: '/academy/school' },
  { label: 'After +2', targetId: 'plus2-hero', path: '/academy/after-plus-two' },
  { label: 'College Programs', targetId: 'college-hero', path: '/academy/college-programs' },
  { label: 'Graduates', targetId: 'graduates-hero', path: '/academy/graduates' },
  { label: 'Internships', targetId: 'internships-hero', path: '/academy/internships' },
  { label: 'Skill Assessment', targetId: 'assessment-hero', path: '/academy/skill-assessment' },
  { label: 'FAQ', targetId: 'academy-faq', path: '/academy/faq' },
];

interface AcademySubNavbarProps {
  activeNav: string;
  onSelectNav?: (item: SubNavItem) => void;
}

export default function AcademySubNavbar({
  activeNav,
  onSelectNav,
}: AcademySubNavbarProps) {
  const handleClick = (item: SubNavItem) => {
    if (onSelectNav) {
      onSelectNav(item);
    } else {
      window.location.hash = item.path.replace('/', '');
    }
  };

  return (
    <div
      id="academy-subnav"
      className="sticky top-[72px] sm:top-[76px] z-40 bg-[#0B2145] border-y border-[#183A6D]/80 shadow-md backdrop-blur-md transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 sm:h-14 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Left Brand Badge */}
          <div className="flex items-center gap-3 shrink-0 pr-4 border-r border-[#183A6D]/80 mr-2 sm:mr-4">
            <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-[#F4B942]">
              OD AI Academy
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 py-1">
            {ACADEMY_SUBNAV_LINKS.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#183A6D] text-white font-semibold shadow-xs border border-[#2B5CA6]/50'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
