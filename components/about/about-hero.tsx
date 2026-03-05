'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function AboutHero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center">


      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6 tracking-tight">
            Amplifying{' '} <br />
            <span className="text-brand">Healthcare Intelligence.</span>
          </h1>

          <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium max-w-2xl mx-auto leading-relaxed">
            Amplit AI is a healthcare-focused AI company building intelligent solutions that reduce operational burden and improve patient engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}