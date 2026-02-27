'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AudioLines, Play } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function DentsiHero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #6594B1 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center flex-1">
        <div className="flex flex-col md:flex-row items-center w-full gap-8">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-xs font-semibold text-brand tracking-wide">Voice AI · Dental Practices</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6"
            >
              Meet Dentsi, your AI voice agent that never misses a call.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-black/60 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0"
            >
              24/7 automated call handling, real-time appointment booking, and instant PMS sync — trusted by dental practices across the US and Canada.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <Link
                href={CONTACT_INFO.calendly}
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand border border-black/15 text-white font-medium rounded-full shadow-sm hover:shadow-md hover:border-brand/40 transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <AudioLines className="w-3.5 h-3.5 text-brand fill-brand ml-0.5" />
                </span>
                See In Action
              </Link>

              <Link
                href="#video"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-black/15 text-black/70 font-medium rounded-full hover:shadow-md hover:border-brand/40 hover:text-black transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                  <Play className="w-3.5 h-3.5 text-black/50 fill-black/50 ml-0.5 group-hover:text-brand group-hover:fill-brand transition-colors" />
                </span>
                Watch Demo
              </Link>
            </motion.div>

            {/* Curved arrow annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden md:flex flex-col items-start ml-40 mt-1"
            >
              <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-black/50 -mb-1">
                <path d="M10 5 Q20 30 45 38" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M40 33 L45 38 L38 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-black/60 font-medium ml-8">Talk to Dentsi!</span>
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:flex flex-1 items-center justify-center relative"
          >
            <Image
              src="/hero.png"
              alt="Dentsi AI Voice Agent"
              width={1200}
              height={1200}
              className="object-contain w-full max-w-[1000px] drop-shadow-xl"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

