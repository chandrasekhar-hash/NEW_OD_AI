import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';

interface FullVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function FullVideoModal({
  isOpen,
  onClose,
  videoSrc = '/videos/hero-institute.mp4',
}: FullVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // When modal opens, start playback
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || duration);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop with Deep Plum / Deep Burgundy atmosphere */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#291D29]/85 backdrop-blur-2xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            ref={containerRef}
            className="relative w-full max-w-5xl bg-[#1E141E] rounded-2xl sm:rounded-3xl border border-champagne-200/20 shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 bg-[#291D29]/95 border-b border-champagne-200/15">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse" />
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-champagne-200/70">
                    OD AI HUB • INSTITUTE FILM
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-editorial text-[#FFFDFC]">
                    The OD AI HUB Story
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-champagne-200/70 hover:text-[#FFFDFC] hover:bg-white/10 transition-colors"
                aria-label="Close cinema"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center group">
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                className="w-full h-full object-contain"
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onTimeUpdate={(e) => {
                  setCurrentTime(e.currentTarget.currentTime);
                  if (e.currentTarget.duration) {
                    setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
                  }
                }}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Center Play/Pause button on hover/pause */}
              <button
                onClick={togglePlay}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#291D29]/70 hover:bg-[#291D29]/90 text-champagne-100 flex items-center justify-center border border-champagne-200/30 backdrop-blur-md transition-all duration-300 ${
                  !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'
                }`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-champagne-200" />
                ) : (
                  <Play className="w-7 h-7 text-champagne-200 translate-x-0.5" />
                )}
              </button>

              {/* Full Interactive Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 transition-opacity duration-300">
                {/* Scrubber */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 hover:h-2.5 bg-white/20 rounded-full cursor-pointer transition-all relative overflow-hidden"
                >
                  <div
                    className="h-full bg-gradient-to-r from-bronze-400 to-champagne-200 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between text-[#FFFDFC]/90 text-xs font-mono select-none pt-1">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={togglePlay}
                      className="p-1 hover:text-champagne-200 transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="p-1 hover:text-champagne-200 transition-colors"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <span className="text-[11px] text-champagne-200/80">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-champagne-200/70 font-sans">
                      <Sparkles className="w-3 h-3 text-bronze-400" />
                      Berhampur, Odisha Campus
                    </span>

                    <button
                      onClick={toggleFullscreen}
                      className="p-1 hover:text-champagne-200 transition-colors"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
