'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Play, AudioLines } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #6594B1 100%)",
        }}
      />

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
              className="text-[2.5rem] sm:text-5xl md:text-6xl font-bold text-black leading-[1.1] mb-5 sm:mb-6"
            >
              Your AI-Powered Dental Front Desk
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[17px] sm:text-lg text-black/60 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Your AI-powered dental front desk answers every call, books appointments, and works 24/7 — so you never miss revenue again.
            </motion.p>

            {/* CTA + annotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              {/* See In Action button */}
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
              src="/hero.png"
              alt="AI and human handshake"
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
