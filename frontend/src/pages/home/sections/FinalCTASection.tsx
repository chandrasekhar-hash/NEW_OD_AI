import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Phone, Mail, Globe, Instagram } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenEnquire: (track?: string) => void;
}

export default function FinalCTASection({ onOpenEnquire }: FinalCTASectionProps) {
  const audienceLabels = [
    'For Students',
    'For Parents',
    'For Colleges',
    'For Businesses',
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#231722] text-[#FFFCF8] scroll-mt-20">
      {/* Soft Ambient Radial Lights (Champagne & Purple Glow) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[400px] bg-[#B77B4B]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[360px] bg-[#8B67C7]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden text-center bg-gradient-to-b from-[#2E1F2D] via-[#261925] to-[#1F141F]"
        >
          {/* Subtle Watermark Orbital SVG */}
          <div className="absolute -top-10 -right-10 w-72 h-72 pointer-events-none opacity-[0.05] select-none">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
              <ellipse
                cx="100"
                cy="100"
                rx="85"
                ry="40"
                transform="rotate(-28 100 100)"
                stroke="#AD784B"
                strokeWidth="4"
              />
              <circle cx="100" cy="100" r="30" stroke="#AD784B" strokeWidth="2" />
              <circle cx="100" cy="100" r="12" fill="#AD784B" />
            </svg>
          </div>

          {/* Eyebrow Audience Labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
          >
            {audienceLabels.map((aud, idx) => (
              <React.Fragment key={aud}>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#EBC99A]">
                  {aud}
                </span>
                {idx < audienceLabels.length - 1 && (
                  <span className="text-white/30 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-editorial text-[#FFFCF8] tracking-tight leading-[1.12]"
          >
            Be Part of Odisha’s{' '}
            <span className="font-editorial-italic text-[#EBC99A] block sm:inline">
              AI &amp; Innovation Movement.
            </span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 sm:mt-10 flex items-center justify-center"
          >
            <button
              onClick={() => onOpenEnquire('Get Started - Movement')}
              className="px-8 sm:px-10 py-4 rounded-full bg-[#B77B4B] hover:bg-[#C78B5B] text-[#1F141F] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Started Now →</span>
            </button>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-10 sm:mt-12 pt-8 border-t border-white/10 space-y-4 text-xs sm:text-sm text-[#E8DCCF]"
          >
            {/* Campus Address */}
            <div className="flex items-center justify-center gap-2 text-center max-w-xl mx-auto">
              <MapPin className="w-4 h-4 text-[#EBC99A] shrink-0" />
              <span>
                OD AI HUB, NH16, Near Darshan Park, Lanjipalli Bypass, Berhampur, Odisha – 760008
              </span>
            </div>

            {/* Direct Connect Chips */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs font-medium">
              <a
                href="tel:+918297244871"
                className="inline-flex items-center gap-1.5 text-[#E8DCCF] hover:text-[#FFFCF8] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EBC99A]" />
                <span>+91 82972 44871</span>
              </a>

              <a
                href="mailto:admin@odaihub.in"
                className="inline-flex items-center gap-1.5 text-[#E8DCCF] hover:text-[#FFFCF8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#EBC99A]" />
                <span>admin@odaihub.in</span>
              </a>

              <a
                href="https://odaihub.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#E8DCCF] hover:text-[#FFFCF8] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#EBC99A]" />
                <span>odaihub.in</span>
              </a>

              <a
                href="https://instagram.com/odaihub_official"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#E8DCCF] hover:text-[#FFFCF8] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#EBC99A]" />
                <span>@odaihub_official</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
