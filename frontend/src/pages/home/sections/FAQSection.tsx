import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'Who can join?',
    a: 'OD AI HUB welcomes undergraduate & graduate college students (B.Tech, BCA, MCA, B.Sc, M.Sc), working software engineers, and domain researchers passionate about artificial intelligence. While basic programming familiarity (Python or any language) is helpful, our foundations track starts with core concepts before ramping into production-grade systems.',
  },
  {
    q: 'Are classes online or offline?',
    a: 'We offer a flexible hybrid model. Learners can attend in-person immersive cohorts at our state-of-the-art Berhampur innovation campus (featuring high-speed GPU workstations and collaborative lab pods), or join live interactive online sessions with recorded lab walk-throughs, code reviews, and remote mentor hours.',
  },
  {
    q: 'What are the fees and batch timings?',
    a: 'Fees vary by track (Foundation Bootcamp, Advanced Agentic AI, or Venture Incubation). We believe finance should never bar talent; merit-based scholarships and zero-cost sponsor seats are available through our institutional partners. Weekend and weekday evening batches are structured to accommodate college and work schedules.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes. Upon successful capstone completion and code defense, graduates receive a digitally verifiable OD AI HUB credential endorsed by our network of partner institutions and technology enterprises. The certificate details your verified skills in PyTorch, LLM agents, and deployed production architectures.',
  },
  {
    q: 'Do you help with internships and jobs?',
    a: 'Absolutely. We maintain active hiring relationships with over 50 technology firms, venture startups, and research labs. Over 80% of our eligible graduates secure internships or full-time roles through our dedicated talent matchmaking pipelines, live portfolio reviews, and technical interview simulations.',
  },
];

export default function FAQSection({ onOpenEnquire }: { onOpenEnquire: (q?: string) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#F7F1E9] border-t border-champagne-200/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-bronze-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
              CLARITY & DETAILS
            </span>
            <span className="w-6 h-[2px] bg-bronze-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-editorial text-plum tracking-tight"
          >
            Frequently asked{' '}
            <span className="font-editorial-italic text-gradient-bronze">questions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="text-sm sm:text-base text-mauve-deep mt-4"
          >
            Everything you need to know about joining cohorts, curricula, schedules, and career pipelines.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 + index * 0.06 }}
                className="glass-panel rounded-2xl sm:rounded-3xl border border-white/90 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-champagne-100/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-editorial text-plum">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-plum text-champagne-100' : 'bg-champagne-100 text-plum'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-mauve-deep leading-relaxed border-t border-champagne-200/50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Sub-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 text-center glass-panel p-6 rounded-2xl border border-champagne-200/80"
        >
          <p className="text-xs sm:text-sm text-plum font-medium">
            Have a specialized question about enterprise partnerships or academic MOUs?
          </p>
          <button
            onClick={() => onOpenEnquire('FAQ Consultation')}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-bronze-600 hover:text-bronze-700 underline underline-offset-4"
          >
            <span>Speak directly with our Berhampur admissions desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
