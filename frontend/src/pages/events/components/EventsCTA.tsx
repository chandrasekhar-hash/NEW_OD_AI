import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface EventsCTAProps {
  onJoinCommunity?: () => void;
  onPartnerWithUs?: () => void;
  onGetUpdates?: () => void;
}

export default function EventsCTA({
  onJoinCommunity,
  onPartnerWithUs,
  onGetUpdates,
}: EventsCTAProps) {
  const handleAction = onGetUpdates || onJoinCommunity || (() => {});

  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF9] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0B2145] overflow-hidden shadow-2xl border border-[#183A6D] relative"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E87961]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#F4B942]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
            {/* Left Photograph Column (5 cols on lg) */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
              <img
                src="/images/academy/student_group.jpg"
                alt="OD AI HUB community members and learners"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2145] via-[#0B2145]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0B2145]/30 lg:to-[#0B2145]" />
            </div>

            {/* Right Content Column (7 cols on lg) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 text-white">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
                <span className="text-xs font-bold tracking-widest text-[#F4B942] uppercase">
                  JOIN THE MOVEMENT
                </span>
                <span className="w-5 h-[1.5px] bg-[#F4B942]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                Be Part of Odisha’s AI & Innovation Movement.
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#F8F1E8]/90 font-medium tracking-wide mb-8 font-sans">
                For Students <span className="text-[#E87961] px-1.5 sm:px-2">|</span> For Parents <span className="text-[#E87961] px-1.5 sm:px-2">|</span> For Colleges <span className="text-[#E87961] px-1.5 sm:px-2">|</span> For Businesses
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E87961] hover:bg-[#D4664F] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#E87961]/30 hover:shadow-xl hover:shadow-[#E87961]/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get Event Updates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
