'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, AudioLines, Pause } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://youtu.be/9rD7ETJALYE';
const AUDIO_URL = '/harvard.wav';

const HERO_CONTENT = {
  headline: 'Amplifying',
  headlineHighlight: 'Healthcare Intelligence',
  subtitle:
    'Your AI-powered dental front desk answers every call, books appointments, and works 24/7 — so you never miss an oppourtunity again.',
  ctaPrimary: 'See In Action',
  ctaPrimaryActive: 'Pause Demo',
  ctaSecondary: 'Watch Demo',
  annotation: 'Talk with Amplit Ai',
  captionLabel: 'Amplit AI is speaking',
};

const CAPTIONS = [
  { start: 0, end: 3.5, text: "The stale smell of old beer lingers." },
  { start: 3.5, end: 7, text: "It takes heat to bring out the odor." },
  { start: 7, end: 10.5, text: "A cold dip restores health and zest." },
  { start: 10.5, end: 14, text: "A salt pickle tastes fine with ham." },
  { start: 14, end: 17.5, text: "Tacos al pastor are my favorite." },
  { start: 17.5, end: 21, text: "A zestful food is the hot cross bun." },
  { start: 21, end: 25, text: "The birch canoe slid on the smooth planks." },
  { start: 25, end: 29, text: "Glue the sheet to the dark blue background." },
  { start: 29, end: 35, text: "It's easy to tell the depth of a well." },
  { start: 35, end: 60, text: "🎧 Listening..." },
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          // Play returns a promise that can be rejected by the browser
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Audio playback failed:", error);
          // If browser blocked it, we could show an error, but let's just make sure it doesn't crash
        }
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const currentCaption = CAPTIONS.find(c => currentTime >= c.start && currentTime <= c.end)?.text || "🎵 ...";

  return (
    <section className="relative h-[70vh] mt-10 md:mt-20 overflow-hidden flex flex-col">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center flex-1">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center w-full gap-8">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[2.5rem] sm:text-3xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-5 sm:mb-6 tracking-tight"
            >
              {HERO_CONTENT.headline} <br />
              <span className="text-brand"> {HERO_CONTENT.headlineHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-[#4e5157] font-medium text-[15px] md:text-[17px] mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* CTA + annotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              {/* See In Action button */}
              <button
                onClick={togglePlay}
                className="relative z-50 inline-flex items-center gap-3 px-6 py-3 bg-brand border border-transparent text-white font-medium text-sm rounded-full shadow-[0_4px_14px_rgba(var(--brand-rgb),0.2)] hover:shadow-[0_6px_20px_rgba(var(--brand-rgb),0.25)] transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                  ) : (
                    <AudioLines className="w-3.5 h-3.5 text-white ml-0.5" />
                  )}
                </span>
                {isPlaying ? HERO_CONTENT.ctaPrimaryActive : HERO_CONTENT.ctaPrimary}
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black/5 text-[#4e5157] font-medium text-sm rounded-full hover:bg-black/5 hover:text-gray-900 transition-all group"
                  >
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-black/10 transition-colors">
                      <Play className="w-3.5 h-3.5 text-black/60 fill-current ml-0.5 group-hover:text-black transition-colors" />
                    </span>
                    {HERO_CONTENT.ctaSecondary}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                  <iframe
                    src={VIDEO_URL}
                    title="Product demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-xl"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Curved arrow + Talk to Amplit */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
              className="hidden md:flex flex-col items-start ml-40 mt-3"
            >
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                className="text-gray-400 -mb-1"
              >
                <path
                  d="M10 5 Q20 30 45 38"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M40 33 L45 38 L38 40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-400 font-medium ml-8">{HERO_CONTENT.annotation}</span>
            </motion.div>
          </div>

          {/* Right: Hero image — hidden on small, visible md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex flex-1 items-center justify-center relative"
          >
            <video
              src="/videos/hero-video-v1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover scale-110 opacity-90"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 60%)',
                maskImage: 'radial-gradient(circle, black 35%, transparent 60%)'
              }}
            ></video>
          </motion.div>

        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onError={(e) => console.error("Audio generated an error:", e)}
      />

      {/* Floating Caption Bar */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl border border-black/5 p-5 flex items-center gap-6"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-brand/80 uppercase tracking-wider mb-1.5">{HERO_CONTENT.captionLabel}</p>
              <p className="text-lg md:text-xl font-medium text-black/80 leading-snug">
                {currentCaption}
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors"
            >
              <Pause className="w-5 h-5 text-black/70" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
