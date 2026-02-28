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
      "Convert more calls into bookings automatically with intelligent scheduling and real-time PMS sync.",
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

export default function KeyFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className=" py-10 md:py-14 relative overflow-hidden">
      {/* Radial bg tint */}
      <div
        className="absolute inset-0 pointer-events-none bg-ambient-tint"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            What This Means for
            <br className="hidden sm:block" /> Your Practice
          </h2>
          <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing revenue to missed calls. Amplit AI transforms every patient interaction into an opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="group relative overflow-hidden rounded-[28px] 
             bg-white/60 backdrop-blur-xl 
             border border-brand/12
             sm:col-span-2 lg:col-span-2 lg:row-span-2 
             p-8 flex flex-col justify-between 
             min-h-[240px] lg:min-h-[360px]"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none bg-ambient-glow"
            />
            <div
              className="w-14 h-14 rounded-2xl 
                  bg-brand/10 
                  flex items-center justify-center 
                  mb-8
                  group-hover:scale-105
                  transition duration-300"
            >
              <Puzzle className="w-6 h-6 text-brand" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">
                {features[0].title}
              </h3>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                {features[0].description}
              </p>
            </div>
          </motion.div>

          {[features[1], features[2]].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="group relative rounded-[24px] bg-white border border-brand/12 p-6 flex flex-col gap-4 "
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[15px] text-black/60 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}


          {[features[3], features[4], features[5]].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 + i * 0.08 }}
              className="group relative rounded-[24px] bg-white border border-brand/12 p-6 flex flex-col gap-4 "
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[15px] text-black/60 leading-relaxed">
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
