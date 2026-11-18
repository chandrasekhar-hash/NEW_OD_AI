import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rohan Patra',
      role: 'B.Tech CSE, 3rd year',
      quote: 'OD AI HUB gave me the right skills and confidence. The practical projects helped me get my first AI engineering internship.',
      outcome: 'AI Engineering Intern at High-Growth Startup',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      college: 'Parala Maharaja Engineering College (PMEC), Berhampur',
    },
    {
      name: 'Ananya Das',
      role: 'BCA, final year',
      quote: 'The training was hands-on and industry relevant. I could apply what I learned directly in our smart campus projects.',
      outcome: 'Full-Stack GenAI Developer & Campus Lead',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      college: 'Khallikote University, Berhampur',
    },
    {
      name: 'Siddharth Mishra',
      role: 'MCA, 2nd year',
      quote: 'Great mentors from top tech companies. The sessions helped me crack technical interviews with flying colours.',
      outcome: 'Associate Machine Learning Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      college: 'Berhampur University, Bhanja Bihar',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9]">
      {/* Background warm aesthetic radial in Dusty Rose */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-rose-dusty/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-[2px] bg-bronze-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
                REAL ACHIEVEMENTS
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum tracking-tight"
            >
              Student{' '}
              <span className="font-editorial-italic text-gradient-bronze">success stories.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="text-sm sm:text-base text-mauve-deep mt-2 max-w-xl"
            >
              Hear directly from learners who transformed their technical careers through OD AI HUB&apos;s immersive engineering tracks.
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2.5"
          >
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-softwhite hover:bg-champagne-100/70 border border-champagne-200 text-plum shadow-sm transition-all"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-plum hover:bg-plum-light text-champagne-100 shadow-md transition-all border border-champagne-200/20"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5 text-bronze-300" />
            </button>
          </motion.div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => {
            const isFeatured = index === currentIndex;

            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 + index * 0.1 }}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between relative ${
                  isFeatured
                    ? 'border-champagne-300/80 shadow-elevated bg-softwhite/95 scale-[1.02]'
                    : 'border-champagne-200/50 shadow-premium-card bg-softwhite/80 hover:shadow-elevated'
                }`}
              >
                <div>
                  {/* Top Quote Icon & Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-champagne-100 text-bronze-500 flex items-center justify-center">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#AD784B] text-[#AD784B]" />
                      ))}
                    </div>
                  </div>

                  {/* Exact Quote */}
                  <p className="text-base sm:text-lg font-serif italic text-plum leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Student Info */}
                <div className="mt-8 pt-5 border-t border-champagne-200/70 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-bronze-300/60 shrink-0 bg-champagne-200">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-plum font-serif">
                      {t.name}
                    </h4>
                    <p className="text-xs text-bronze-600 font-semibold">{t.role}</p>
                    <p className="text-[11px] text-mauve-deep mt-0.5">{t.college}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
