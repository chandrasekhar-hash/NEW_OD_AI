import React, { useRef, useState, useEffect } from 'react';
import { Play, Sparkles, Settings, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  className?: string;
  onWatchFull?: () => void;
}

export default function VideoPlayer({
  src = '/videos/hero-institute.mp4',
  className = '',
  onWatchFull,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      if (!prefersReducedMotion) {
        video.play().catch(() => {
          // Browser prevented autoplay
        });
      }
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [src, prefersReducedMotion]);

  const handlePreviewClick = () => {
    if (onWatchFull) {
      onWatchFull();
    }
  };

  return (
    <div
      onClick={handlePreviewClick}
      className={`group relative w-full aspect-[16/9.5] sm:aspect-[16/9.2] cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        boxShadow: '0 20px 48px -20px rgba(73, 42, 56, 0.12), 0 4px 16px -4px rgba(41, 29, 41, 0.04)',
      }}
    >
      {/* Background blend canvas (Warm Ivory tone matching page) */}
      <div className="absolute inset-0 bg-[#F7F1E9] -z-10" />

      {/* Feathered Video Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 98% 96% at 50% 50%, black 80%, rgba(0,0,0,0.85) 92%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 98% 96% at 50% 50%, black 80%, rgba(0,0,0,0.85) 92%, transparent 100%)',
        }}
      >
        {!hasError ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            style={{
              filter: 'contrast(1.02) brightness(0.99) saturate(0.96)',
              opacity: isLoading ? 0.4 : 1,
              transition: 'opacity 0.6s ease, transform 0.8s ease-out',
            }}
          />
        ) : (
          /* Graceful Fallback (Sunset waterway of Odisha in warm brand tones) */
          <div className="relative w-full h-full bg-gradient-to-tr from-[#3A1E2B] via-[#AD784B] to-[#E8D4B5] flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F7F1E9]/20 to-[#F7F1E9]/50" />
            <div className="relative z-10 text-center px-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#291D29]/60 text-champagne-100 backdrop-blur-md border border-champagne-200/30">
                <Sparkles className="w-3 h-3 text-bronze-300" />
                Odisha Innovation Horizon
              </span>
            </div>
          </div>
        )}

        {/* Restrained Warm Tone Colour Grading Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{
            background: 'linear-gradient(135deg, rgba(232, 212, 181, 0.14) 0%, rgba(217, 191, 193, 0.1) 50%, rgba(173, 120, 75, 0.12) 100%)',
          }}
        />

        {/* Perimeter Feather Dissolve Vignette blending seamlessly into Warm Ivory (#F7F1E9) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 32px 14px #F7F1E9, inset 0 0 64px 28px rgba(247, 241, 233, 0.65)',
          }}
        />
      </div>

      {/* Centered Play Button (Directly from reference image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/45 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5" />
        </div>
      </div>

      {/* Sleek Minimalist Playback Bar (Matches reference image desktop) */}
      <div className="hidden sm:flex absolute bottom-3 left-4 right-4 z-20 items-center gap-3 px-3.5 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs">
        <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
        <span className="font-mono text-[11px] text-white/90 shrink-0">0:00 / 2:36</span>
        {/* Scrubber track */}
        <div className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-champagne-200 rounded-full" />
        </div>
        {/* Right action icons */}
        <div className="flex items-center gap-2.5 text-white/80 shrink-0">
          <span className="text-[10px] font-bold border border-white/40 rounded px-1 leading-none py-0.5">CC</span>
          <Settings className="w-3.5 h-3.5" />
          <Maximize2 className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Mobile time badge */}
      <div className="sm:hidden absolute bottom-2.5 right-2.5 z-20 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/90">
        02:36
      </div>

      {/* Subtle indicator for reduced motion */}
      {prefersReducedMotion && (
        <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-[#291D29]/75 text-champagne-100 text-[10px] font-medium backdrop-blur-sm border border-champagne-200/20">
          Preview Paused • Click to play
        </div>
      )}
    </div>
  );
}
