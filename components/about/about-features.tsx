"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Shield } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { BorderBeam } from "../ui/border-beam";

export default function AboutFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Right Side: The User's Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative rounded-4xl sm:rounded-[2.5rem] bg-white shadow-sm border border-black/5 p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-[#4e5157] font-medium">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                <span className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
                  Based in Dallas, Texas
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                What Sets Us Apart
              </h3>
              <p className="text-[#4e5157] font-medium mb-6 sm:mb-8 text-[15px] md:text-[17px]">
                Unlike generic call systems, Amplit AI understands dental
                workflows:
              </p>

              <ul className="space-y-4 sm:space-y-5">
                {[
                  "Knows dental procedures & patient queries",
                  "Handles common patient questions",
                  "Customizable for your clinic operations",
                  "Designed with healthcare privacy in mind",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-[15px] md:text-[17px] text-[#4e5157] font-medium group"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-black/5">
                <div className="flex items-center p-3 sm:p-4 bg-brand/5 rounded-xl transition-colors hover:bg-brand/10">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-black">
                      Enterprise Security
                    </p>
                    <p className="text-[10px] sm:text-xs text-brand font-semibold uppercase tracking-wider mt-0.5 sm:mt-0">
                      HIPAA Compliant • Encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Side: Clean Minimal Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <BorderBeam size={300} duration={12} delay={9} />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">
              The Amplit Advantage
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Purpose-built for <br />
              <span className="text-brand">healthcare operations.</span>
            </h2>

            <p className="text-lg text-black/70 leading-relaxed max-w-lg">
              We aren&apos;t a generic chatbot company. We are a specialized
              team building vertical AI infrastructure tailored specifically for
              the rigorous demands of dental and medical practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
