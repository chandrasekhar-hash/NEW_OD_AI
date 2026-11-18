import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenEnquire: (program?: string) => void;
  onPreviewItem?: (name: string) => void;
  currentView?: string;
  onNavigateView?: (view: string) => void;
}

export interface NavLink {
  name: string;
  route: string;
  isHome?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', route: 'home', isHome: true },
  { name: 'Academy', route: 'academy' },
  { name: 'Technologies', route: 'technologies' },
  { name: 'Innovation Lab', route: 'innovation-lab' },
  { name: 'Startups', route: 'startups' },
  { name: 'For Business', route: 'for-business' },
  { name: 'For Institutions', route: 'for-institutions' },
  { name: 'Events', route: 'events' },
  { name: 'Success Stories', route: 'success-stories' },
  { name: 'About', route: 'about' },
  { name: 'Contact', route: 'contact' },
];

// Map currentView string to the name shown in the nav bar
const VIEW_TO_NAV: Record<string, string> = {
  home: 'Home',
  academy: 'Academy',
  technologies: 'Technologies',
  'innovation-lab': 'Innovation Lab',
  startups: 'Startups',
  'for-business': 'For Business',
  'for-institutions': 'For Institutions',
  events: 'Events',
  'success-stories': 'Success Stories',
  about: 'About',
  contact: 'Contact',
};

export default function Navbar({
  onOpenEnquire,
  onPreviewItem,
  currentView = 'home',
  onNavigateView,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(VIEW_TO_NAV[currentView] || 'Home');
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const navName = VIEW_TO_NAV[currentView];
    if (navName) {
      setActiveItem(navName);
    }
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: NavLink) => {
    setActiveItem(link.name);
    if (onNavigateView) {
      onNavigateView(link.route);
    }
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  // Primary links visible in desktop bar (first 8: Home through Events)
  const primaryLinks = NAV_LINKS.slice(0, 8);
  // Secondary links in "More" dropdown (Success Stories, About, Contact)
  const secondaryLinks = NAV_LINKS.slice(8);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#FFFCF8]/95 backdrop-blur-xl shadow-xs border-b border-[#E8DCCF]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div onClick={() => handleNavClick(NAV_LINKS[0])} className="cursor-pointer">
              <Logo showTagline={false} />
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {primaryLinks.map((link) => {
                const isActive = activeItem === link.name;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium tracking-normal transition-colors duration-200 rounded-lg cursor-pointer ${
                      isActive
                        ? 'text-[#30212F] font-semibold'
                        : 'text-[#65535E] hover:text-[#30212F] hover:bg-[#F6EFE6]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Active underline indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B77B4B] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* More dropdown for secondary links */}
              {secondaryLinks.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium tracking-normal transition-colors duration-200 rounded-lg cursor-pointer ${
                      secondaryLinks.some((l) => activeItem === l.name)
                        ? 'text-[#30212F] font-semibold'
                        : 'text-[#65535E] hover:text-[#30212F] hover:bg-[#F6EFE6]/60'
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {moreDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-1.5 py-1.5 bg-[#FFFCF8] rounded-xl shadow-elevated border border-[#E8DCCF] min-w-[180px] z-50"
                      >
                        {secondaryLinks.map((link) => {
                          const isActive = activeItem === link.name;
                          return (
                            <button
                              key={link.name}
                              onClick={() => handleNavClick(link)}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                isActive
                                  ? 'text-[#30212F] font-semibold bg-[#F6EFE6]'
                                  : 'text-[#65535E] hover:text-[#30212F] hover:bg-[#F6EFE6]/60'
                              }`}
                            >
                              {link.name}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </nav>

            {/* Right Side: CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenEnquire()}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#30212F] text-[#FFFCF8] hover:bg-[#3D2C3C] text-xs xl:text-sm font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all duration-300 hover:scale-[1.02] group border border-[#B77B4B]/40 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-[#B77B4B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile View: Quick Enquire + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenEnquire()}
                className="px-3.5 py-1.5 rounded-full bg-[#30212F] text-[#FFFCF8] text-xs font-semibold flex items-center gap-1 shadow-2xs border border-[#B77B4B]/40 cursor-pointer"
              >
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B77B4B]" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#30212F] hover:bg-[#F6EFE6] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[65px] z-30 p-4 bg-[#FFFCF8]/98 backdrop-blur-2xl border-b border-[#E8DCCF] shadow-elevated lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="py-2 space-y-1">
              <div className="px-3 py-1.5 mb-2 text-[10px] font-bold text-[#B77B4B] tracking-widest uppercase">
                Navigation Ecosystem
              </div>
              {NAV_LINKS.map((link) => {
                const isActive = activeItem === link.name;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#30212F] text-[#FFFCF8] font-semibold'
                        : 'text-[#65535E] hover:text-[#30212F] hover:bg-[#F6EFE6]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#B77B4B]" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B77B4B]/40" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
