import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface DestinationToastProps {
  item: string | null;
  onClose: () => void;
  onEnquire: () => void;
}

export default function DestinationToast({ item, onClose, onEnquire }: DestinationToastProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md glass-panel p-4 rounded-2xl shadow-elevated border border-bronze-300/40"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-champagne-200/80 flex items-center justify-center text-bronze-600 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1 pr-6">
              <div className="text-[11px] font-bold text-bronze-600 uppercase tracking-wider">
                Destination Preview
              </div>
              <h4 className="text-sm font-bold text-plum font-serif">{item}</h4>
              <p className="text-xs text-mauve-deep mt-0.5">
                The dedicated <span className="font-semibold text-plum">{item}</span> portal is actively enrolling priority cohorts for 2026. Register early interest below.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onEnquire();
                  }}
                  className="px-3 py-1.5 rounded-full bg-plum text-champagne-100 text-xs font-medium hover:bg-plum-light transition-all flex items-center gap-1.5 border border-champagne-200/20"
                >
                  <span>Enquire for Early Access</span>
                  <ArrowRight className="w-3 h-3 text-bronze-300" />
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-mauve-deep hover:text-plum hover:bg-champagne-100 transition-colors"
              aria-label="Close toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
