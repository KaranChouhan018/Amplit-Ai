'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Replace this with your actual YouTube video ID or video URL
const VIDEO_URL = 'https://youtu.be/gJXAg87tQrY';

const VIDEO_CONTENT = {
  thumbnailSrc:
    'https://youtu.be/gJXAg87tQrY,
  thumbnailAlt: 'Video preview',
  videoTitle: 'Product demo video',
  playLabel: 'Play video',
};

export default function VideoSection() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0 bg-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
        >

          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: '16/9' }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full group"
                    aria-label={VIDEO_CONTENT.playLabel}
                  >
           
                    <Image
                      src={VIDEO_CONTENT.thumbnailSrc}
                      alt={VIDEO_CONTENT.thumbnailAlt}
                      fill
                      className="object-cover"
                      priority
                    />

           
                    <span className="relative w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-[0_4px_14px_rgba(var(--brand-rgb),0.2)] group-hover:scale-105 group-hover:bg-brand/90 transition-all duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                  <iframe
                    src={VIDEO_URL}
                    title={VIDEO_CONTENT.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-xl"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
