'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle2, MapPin, Quote } from 'lucide-react';

export default function AboutMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start"
        >

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs sm:text-sm font-bold mb-4 sm:mb-6 tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Our Mission
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 tracking-tight leading-[1.1]">
                AI that works <br />
                <span className="text-brand">behind the scenes.</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 max-w-2xl">
                <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                  Starting with dental practices, our mission is to create AI systems that work seamlessly in the background — improving efficiency without disrupting care.
                </p>
                <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                  Missed calls mean missed appointments. Missed appointments mean lost revenue. Amplit AI solves this — fully automated, 24/7, so your team can focus on the patient sitting right in front of them.
                </p>
              </div>

              <div className="mt-8 md:mt-12 relative p-6 md:p-10 bg-white border border-brand/10 shadow-2xl shadow-brand/5 rounded-3xl overflow-hidden group">
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 text-brand opacity-[0.03] transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 pointer-events-none">
                  <Quote className="w-32 h-32 md:w-48 md:h-48 rotate-12 fill-current" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="bg-linear-to-br from-brand/20 to-brand/5 p-2.5 sm:p-3 rounded-2xl text-brand shadow-inner">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    </div>
                    <div className="h-px bg-linear-to-r from-brand/20 to-transparent flex-1"></div>
                  </div>

                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight">
                    &ldquo;We don&apos;t replace your front desk.<br className="hidden xl:block" />
                    <span className="text-brand sm:ml-2"> We amplify them.</span>&rdquo;
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Identity Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:sticky lg:top-24 mt-4 lg:mt-0"
          >
            <div className="relative group">
              {/* Card Glow Effect */}


              <div className="relative rounded-4xl sm:rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-brand/12 p-6 sm:p-8 md:p-10">


                <div

                  className="absolute inset-0 pointer-events-none bg-ambient-glow"

                />
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-black/60">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                  <span className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs">Based in Plano, Texas</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">What Sets Us Apart</h3>
                <p className="text-black/60 mb-6 sm:mb-8 text-base sm:text-lg">
                  Unlike generic call systems, Amplit AI understands dental workflows:
                </p>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    'Knows dental procedures & patient queries',
                    'Handles insurance-related questions',
                    'Customizable for your clinic operations',
                    'Designed with healthcare privacy in mind',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-black/60 font-medium group">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex items-center p-3 sm:p-4 bg-brand/5 rounded-xl border border-brand/10 transition-colors hover:bg-brand/10">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-black">Enterprise Security</p>
                      <p className="text-[10px] sm:text-xs text-brand font-semibold uppercase tracking-wider mt-0.5 sm:mt-0">HIPAA Compliant • Encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}