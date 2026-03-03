'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, ScanText, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BorderBeam } from '@/components/ui/border-beam';

const capabilities = [
  {
    icon: Brain,
    title: 'Dental Workflow Intelligence',
    description: 'Unlike generic call systems, Amplit AI understands dental workflows',
    features: [
      'Knows dental procedures & patient queries',
      'Handles insurance-related questions',
      'Customizable for your clinic operations',
    ],
  },
  {
    icon: ScanText,
    title: 'Revenue Intelligence Dashboard',
    description: 'Full visibility into how calls impact your revenue',
    features: [
      'Total & missed call tracking',
      'Estimated revenue captured vs. lost',
      'Call-to-booking conversion rate',
    ],
  },
  {
    icon: Users,
    title: 'Real-Time Metrics & Insights',
    description: 'See exactly what your front desk might be missing',
    features: [
      'Peak call times analysis',
      'Appointments booked automatically',
      'Designed with healthcare privacy in mind',
    ],
  },
];

// Animated floating node positions
const nodes = [
  { cx: 160, cy: 80, r: 22 },
  { cx: 80, cy: 200, r: 18 },
  { cx: 260, cy: 180, r: 16 },
  { cx: 180, cy: 300, r: 20 },
  { cx: 60, cy: 340, r: 14 },
  { cx: 300, cy: 320, r: 12 },
];

const beams = [
  { x1: 160, y1: 80, x2: 80, y2: 200 },
  { x1: 160, y1: 80, x2: 260, y2: 180 },
  { x1: 80, y1: 200, x2: 180, y2: 300 },
  { x1: 260, y1: 180, x2: 180, y2: 300 },
  { x1: 180, y1: 300, x2: 60, y2: 340 },
  { x1: 180, y1: 300, x2: 300, y2: 320 },
];

function AnimatedViz() {
  return (
    <svg viewBox="0 0 360 420" className="w-full max-w-[300px] mx-auto" aria-hidden="true">
      {/* Static beam lines */}
      {beams.map((b, i) => (
        <line key={i} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
          stroke="#6594B1" strokeWidth="1" strokeOpacity="0.25" />
      ))}

      {/* Animated traveling beam dots */}
      {beams.map((b, i) => (
        <circle key={`beam-${i}`} r="3" fill="#6594B1" fillOpacity="0.9">
          <animateMotion
            dur="2.4s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
            path={`M${b.x1},${b.y1} L${b.x2},${b.y2}`}
          />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.4s"
            begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.cx} cy={n.cy} r={n.r + 8}
            fill="none" stroke="#6594B1" strokeWidth="1" strokeOpacity="0.15">
            <animate attributeName="r" values={`${n.r + 6};${n.r + 14};${n.r + 6}`}
              dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.15;0.4;0.15"
              dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={n.cx} cy={n.cy} r={n.r}
            fill="#6594B1" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.35} fill="#6594B1" fillOpacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export default function CoreCapabilities() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-10  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative  bg-white shadow-sm border border-black/5 rounded-4xl  overflow-hidden"
        >

          <BorderBeam size={300} duration={10} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={2} />


          <div className="relative flex flex-col lg:flex-row  ">
            {/* ── Left: Animated Visualization ── */}
            <div className="lg:w-5/12 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
              <AnimatedViz />
              <div className="mt-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4"
                >
                  What Sets Us Apart
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-black/60 text-base leading-relaxed font-medium max-w-xs"
                >
                  Amplit AI doesn&apos;t just answer calls — it shows you exactly how those calls impact your revenue. You get full visibility into what your front desk might be missing.
                </motion.p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px bg-[#6594B1]/30 my-10" />

            {/* ── Right: Capabilities List ── */}
            <div className="lg:w-7/12 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
              <div className="divide-y divide-[#6594B1]/20">
                {capabilities.map((cap, index) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="py-7 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#6594B1]/15 border border-[#6594B1]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <cap.icon className="w-5 h-5 text-black" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-black mb-1">{cap.title}</h3>
                        <p className="text-black/60 text-[15px] mb-3">{cap.description}</p>
                        <ul className="space-y-1.5">
                          {cap.features.map((feature) => (
                            <li key={feature} className="flex items-start text-sm text-black/60">
                              <span className="mr-2 mt-2 w-1 h-1 rounded-full bg-[#6594B1] shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Explore link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 flex justify-end"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-[#6594B1] border border-[#6594B1] rounded-full px-5 py-2.5  transition-all duration-200 group"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
