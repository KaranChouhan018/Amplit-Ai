'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Care First. <span className="gradient-text">Intelligence Always.</span>
          </h1>
          <p className="text-xl text-[#8B949E] mb-10">
            Healthcare AI solutions from Plano, Texas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
