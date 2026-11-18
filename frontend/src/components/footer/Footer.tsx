import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Logo from '../navbar/Logo';

interface FooterProps {
  onOpenEnquire: (subject?: string) => void;
  onPreviewItem: (name: string) => void;
}

export default function Footer({ onOpenEnquire, onPreviewItem }: FooterProps) {
  const academyLinks = [
    { name: 'School Programs', href: '#academy' },
    { name: 'After +2 Science', href: '#academy' },
    { name: 'College Programs', href: '#academy' },
    { name: 'Graduate Accelerator', href: '#academy' },
    { name: 'Skill Assessment', href: '#academy' },
  ];

  const ecosystemLinks = [
    { name: 'Technologies', href: '#ecosystem' },
    { name: 'Innovation Lab', href: '#ecosystem' },
    { name: 'Startups', href: '#ecosystem' },
    { name: 'For Institutions', href: '#institutions' },
  ];

  const exploreLinks = [
    { name: 'Events', href: '#projects-events-visits' },
    { name: 'Success Stories', href: '#projects-events-visits' },
    { name: 'About', href: '#about' },
    { name: 'Contact & Campus Visit', href: '#projects-events-visits' },
  ];

  const handleLinkClick = (name: string, href: string) => {
    if (href === '#academy') {
      window.location.hash = '#academy';
      return;
    }
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onPreviewItem(name);
  };

  return (
    <footer className="bg-[#30212F] text-[#FFFCF8] pt-16 sm:pt-20 pb-12 border-t border-[#E8DCCF]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B77B4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-[#E8DCCF]/20">
          {/* Brand & Statement (Col-span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo showTagline={true} light={true} />

            <div className="space-y-1 pt-2">
              <div className="text-base sm:text-lg font-bold font-editorial text-[#FFFCF8]">
                From Learners to Global Innovators.
              </div>
              <div className="text-xs sm:text-sm text-[#EBC99A] font-semibold tracking-wide">
                A Stronger Odisha Through AI.
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8DCCF] leading-relaxed max-w-sm">
              Empowering talent, building technology and creating opportunities from Berhampur, for Odisha and beyond.
            </p>
          </div>

          {/* Column 1: Academy (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
              Academy
            </h4>
            <ul className="space-y-2">
              {academyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="text-xs sm:text-sm text-[#E8DCCF] hover:text-[#FFFCF8] hover:translate-x-1 transition-all inline-flex items-center gap-1 group text-left cursor-pointer"
                  >
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Ecosystem (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="text-xs sm:text-sm text-[#E8DCCF] hover:text-[#FFFCF8] hover:translate-x-1 transition-all inline-flex items-center gap-1 group text-left cursor-pointer"
                  >
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.name, link.href)}
                    className="text-xs sm:text-sm text-[#E8DCCF] hover:text-[#FFFCF8] hover:translate-x-1 transition-all inline-flex items-center gap-1 group text-left cursor-pointer"
                  >
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B77B4B]">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8DCCF]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B77B4B] shrink-0" />
                <a
                  href="tel:+918297244871"
                  className="hover:text-[#FFFCF8] transition-colors"
                >
                  +91 82972 44871
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B77B4B] shrink-0" />
                <a
                  href="mailto:admin@odaihub.in"
                  className="hover:text-[#FFFCF8] transition-colors"
                >
                  admin@odaihub.in
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#B77B4B] shrink-0 mt-0.5" />
                <span>
                  Berhampur, Odisha – 760008
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Footer Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8BFC2]/80 text-center sm:text-left">
          <div>
            &copy; OD AI HUB. All rights reserved.
          </div>

          <div className="text-[11px] text-[#E8DCCF]/90 max-w-2xl leading-normal">
            Privacy Policy · Terms · Training programs supplement your degree; OD AI HUB does not award university degrees.
          </div>
        </div>
      </div>
    </footer>
  );
}
