'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, AudioLines, Pause } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
const AUDIO_URL = 'https://a.tmp.audio/39w62q5.mp3'; // Changed to a more reliable sample audio of people talking/testing

const CAPTIONS = [
  { start: 0, end: 4, text: "🎵 (Upbeat hold music playing...)" },
  { start: 4, end: 8, text: "Hello! Thank you for calling Amplit Dental." },
  { start: 8, end: 12, text: "I am your AI receptionist. How can I help you today?" },
  { start: 12, end: 16, text: "I can check your records, book a new appointment," },
  { start: 16, end: 20, text: "or help you with billing questions directly." },
  { start: 20, end: 30, text: "Feel free to tell me what you need! I'm here 24/7." },
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
    <section className="relative h-screen overflow-hidden flex flex-col">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center flex-1">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center w-full gap-8">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[2.5rem] sm:text-3xl md:text-5xl font-bold text-black leading-[1.1] mb-5 sm:mb-6"
            >
              Amplifying <br />
              <span className="text-brand"> Healthcare Intelligence</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17px] sm:text-lg text-black/60 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Your AI-powered dental front desk answers every call, books appointments, and works 24/7 — so you never miss an oppourtunity again.
            </motion.p>

            {/* CTA + annotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              {/* See In Action button */}
              <button
                onClick={togglePlay}
                className="relative z-50 inline-flex items-center gap-3 px-6 py-3 bg-brand border border-black/15 text-white font-medium rounded-full shadow-sm hover:shadow-md hover:border-brand/40 transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-brand fill-brand ml-0.5" />
                  ) : (
                    <AudioLines className="w-3.5 h-3.5 text-brand fill-brand ml-0.5" />
                  )}
                </span>
                {isPlaying ? 'Pause Demo' : 'See In Action'}
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black/15 text-black/70 font-medium rounded-full hover:shadow-md hover:border-brand/40 hover:text-black transition-all group"
                  >
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                      <Play className="w-3.5 h-3.5 text-black/50 fill-black/50 ml-0.5 group-hover:text-brand group-hover:fill-brand transition-colors" />
                    </span>
                    Watch Now
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
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden md:flex flex-col items-start ml-40 mt-1"
            >
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                className="text-black/50 -mb-1"
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
              <span className="text-sm text-black/60 font-medium ml-8">Talk to Amplit Ai !</span>
            </motion.div>
          </div>

          {/* Right: Hero image — hidden on small, visible md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:flex flex-1 items-center justify-center relative"
          >
            <Image
              src="/hero-v3.png"
              alt="AI and human handshake"
              width={1200}
              height={1200}
              className="object-contain w-full max-w-[1000px] drop-shadow-xl"
              priority
            />
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-black/10 p-5 flex items-center gap-6"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-1">Amplit AI is speaking...</p>
              <p className="text-lg md:text-xl font-medium text-black leading-snug">
                {currentCaption}
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors"
            >
              <Pause className="w-5 h-5 text-black" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
