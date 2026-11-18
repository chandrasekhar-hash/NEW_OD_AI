import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles, Building2, GraduationCap, Briefcase, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultProgram }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student',
    track: defaultProgram || 'OD AI Academy (Deep Tech & Generative AI)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant smooth processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#AD784B', '#E8D4B5', '#492A38', '#F7F1E9'],
        });
      } catch {
        // fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#291D29]/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#F7F1E9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-champagne-200/60 z-10 overflow-hidden my-auto"
          >
            {/* Top decorative gradient sheen */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-bronze-400 via-rose-dusty to-bronze-300" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-mauve-deep hover:text-plum hover:bg-champagne-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-champagne-200/60 text-bronze-600 border border-bronze-200">
                    <Sparkles className="w-3 h-3 text-bronze-400" />
                    Admissions & Partnerships
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-plum">
                  Connect with OD AI HUB
                </h3>
                <p className="text-sm text-mauve-deep mt-1 leading-relaxed">
                  Join Odisha&apos;s flagship AI innovation ecosystem. Tell us about your goals and our advisory team in Berhampur will reach out within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-plum mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sambit Mohapatra"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE4D7] text-sm text-plum placeholder-mauve-light/70 focus:outline-none focus:ring-2 focus:ring-bronze-300 transition-all shadow-inner-light"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-plum mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE4D7] text-sm text-plum placeholder-mauve-light/70 focus:outline-none focus:ring-2 focus:ring-bronze-300 transition-all shadow-inner-light"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-plum mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sambit@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE4D7] text-sm text-plum placeholder-mauve-light/70 focus:outline-none focus:ring-2 focus:ring-bronze-300 transition-all shadow-inner-light"
                    />
                  </div>

                  {/* You are a: */}
                  <div>
                    <label className="block text-xs font-semibold text-plum mb-1.5">
                      I am representing:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'Student', icon: GraduationCap },
                        { id: 'Professional', icon: Briefcase },
                        { id: 'Institution', icon: Building2 },
                        { id: 'Startup / Enterprise', icon: Rocket },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.role === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setFormData({ ...formData, role: item.id })}
                            className={`flex flex-col items-center justify-center p-2.5 rounded-xl text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-plum text-champagne-100 border-plum shadow-sm'
                                : 'bg-white text-mauve-deep border-[#EDE4D7] hover:border-bronze-300'
                            }`}
                          >
                            <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-bronze-300' : 'text-mauve-deep'}`} />
                            <span className="text-[11px] leading-tight text-center">{item.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Program / Interest Track */}
                  <div>
                    <label className="block text-xs font-semibold text-plum mb-1">
                      Primary Interest Track
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE4D7] text-sm text-plum focus:outline-none focus:ring-2 focus:ring-bronze-300 transition-all shadow-inner-light"
                    >
                      <option value="OD AI Academy (Deep Tech & Generative AI)">OD AI Academy (Deep Tech & Generative AI)</option>
                      <option value="OD AI Technologies (Enterprise Systems)">OD AI Technologies (Enterprise Systems)</option>
                      <option value="OD AI Innovation Lab (R&D Projects)">OD AI Innovation Lab (R&D Projects)</option>
                      <option value="Startup Incubation & Acceleration">Startup Incubation & Acceleration</option>
                      <option value="Academic Institution Partnership (MOU)">Academic Institution Partnership (MOU)</option>
                      <option value="Enterprise AI Consultation">Enterprise AI Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-plum mb-1">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you'd like to achieve or learn..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#EDE4D7] text-sm text-plum placeholder-mauve-light/70 focus:outline-none focus:ring-2 focus:ring-bronze-300 transition-all shadow-inner-light resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-plum hover:bg-plum-light text-champagne-100 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 group border border-champagne-200/20"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-champagne-100 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-bronze-300 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-plum">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="text-sm text-mauve-deep max-w-sm mx-auto leading-relaxed">
                  Your enquiry has been received by the OD AI HUB team in Berhampur. An admissions coordinator or technology advisor will contact you shortly at{' '}
                  <span className="font-semibold text-plum">{formData.email}</span>.
                </p>
                <div className="p-3 bg-champagne-100/70 rounded-2xl border border-bronze-200/50 text-xs text-bronze-700 font-medium">
                  Reference ID: <span className="font-mono font-bold">ODAI-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-plum text-champagne-100 text-xs font-semibold hover:bg-plum-light transition-colors border border-champagne-200/20"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
