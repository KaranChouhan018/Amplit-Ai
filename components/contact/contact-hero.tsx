'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Ready to see how Amplit AI can transform your practice? Book a demo or send us a message.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
