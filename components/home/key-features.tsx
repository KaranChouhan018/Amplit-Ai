"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Puzzle, Shield, Cpu, Target, Scaling, Zap } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Increase Revenue",
    description:
      "Capture every missed opportunity. Every answered call is a chance to book — Amplit AI ensures none slip through the cracks.",
    featured: true,
  },
  {
    icon: Target,
    title: "More Appointments",
    description:
      "Convert more calls into bookings automatically with intelligent scheduling and real-time calendar sync.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Save Staff Time",
    description:
      "Reduce front desk overload by automating call handling, so your team can focus on in-clinic patients.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Better Patient Experience",
    description: "No missed calls, no long waits — patients get immediate, professional responses every time.",
    featured: false,
  },
  {
    icon: Scaling,
    title: "24/7 Availability",
    description:
      "Even when your clinic is closed — nights, weekends, holidays — Amplit AI is always on.",
    featured: false,
  },
  {
    icon: Cpu,
    title: "Healthcare Privacy Built-In",
    description:
      "Built with HIPAA compliance at its core. All data encrypted in transit and at rest.",
    featured: false,
  },
];

/* Stripes for the featured card */
const stripeCount = Array.from({ length: 20 }, (_, i) => i);

const SECTION_CONTENT = {
  headline:
    'Stop losing revenue to missed calls. Amplit AI transforms every patient interaction into an opportunity.',
  description:
    'Missed calls = missed appointments. Missed appointments = lost revenue. Lost revenue = slow growth. Amplit AI solves this \u2014 fully automated, 24/7.',
};

export default function KeyFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className=" py-10 relative overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center "
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {SECTION_CONTENT.headline}
          </h2>
          <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] max-w-2xl mb-10 mx-auto leading-relaxed">
            {SECTION_CONTENT.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.05 + i * 0.08, ease: "easeOut" }}
              className="group relative rounded-4xl bg-white  border border-brand/60 overflow-hidden p-8 flex flex-col gap-6 "
            >
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <f.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
