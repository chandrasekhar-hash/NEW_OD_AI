import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  q: string;
  a: string;
}

interface AcademyFAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function AcademyFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about OD AI Academy programs and pathways.",
  items,
}: AcademyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="academy-faq" className="relative z-10 py-20 bg-[#FFFDF9] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#F4B942]" />
            <span className="text-xs font-bold tracking-widest text-[#0B2145] uppercase">
              FAQS
            </span>
            <span className="w-4 h-[1.5px] bg-[#F4B942]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2145] mb-3">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0B2145] hover:text-[#183A6D] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F4B942]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
