'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6594B1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#6594B1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              AI That{' '}
              <span className="gradient-text">Amplifies</span>
              <br />
              Care
            </h1>
            <p className="text-xl md:text-2xl text-[#8B949E] mb-4">
              for <span className="text-white">enterprise-grade speed</span>
              <br />
              & precision
            </p>
            <p className="text-[#6594B1] text-lg mb-10">
              Intelligence 360° — Zero missed calls. Faster revenue. Better patient care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={CONTACT_INFO.calendly}
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-[#6594B1] text-white font-semibold rounded-lg hover:bg-[#4A7A99] transition-all hover:shadow-lg hover:shadow-[#6594B1]/30 group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-[#30363d] text-[#8B949E] font-semibold rounded-lg hover:border-[#6594B1] hover:text-[#6594B1] transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Abstract 3D-like visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Floating cubes/blocks effect */}
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-[#6594B1] rounded-sm"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        opacity: 0.3 + Math.random() * 0.7,
                        transform: `rotate(${Math.random() * 45}deg)`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                  {/* Central glow */}
                  <div className="absolute inset-0 bg-[#6594B1]/20 rounded-full blur-3xl" />
                </div>
              </div>
              {/* Decorative line */}
              <motion.svg
                className="absolute bottom-0 left-0 w-48 h-48 text-[#6594B1]/30"
                viewBox="0 0 100 100"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <motion.path
                  d="M10,90 Q30,50 50,60 T90,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
