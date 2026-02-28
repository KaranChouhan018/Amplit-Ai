"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  CalendarCheck,
  ArrowRight,
  Clock,
  PhoneIncoming,
  MessageSquare,
} from "lucide-react";
import { IMAGES } from "@/lib/constants";
import Image from "next/image";


const highlights = [
  {
    icon: PhoneIncoming,
    label: "Answers every incoming call",
    detail: "No missed calls — even after hours and weekends",
  },
  {
    icon: CalendarCheck,
    label: "Schedules appointments in real time",
    detail: "Books directly into your practice management system",
  },
  {
    icon: MessageSquare,
    label: "Handles common patient questions",
    detail: "Handles FAQs and escalates urgent cases instantly",
  },
  {
    icon: Clock,
    label: "Works after hours and weekends",
    detail: "Always on — no hold times, no voicemail",
  },
];

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-10 md:py-14 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/60 tracking-tight leading-tight mb-6">
            Your AI-Powered{" "}
            <span className="text-brand">Dental Front Desk</span>
          </h2>
          <p className="text-black/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Answers every call, books appointments, and works 24/7 — so you never miss revenue again.
          </p>
        </motion.div>

        {/* Product Spotlight */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Mockup — left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative">
                <Image
                  src={IMAGES.dental}
                  alt="Dentsi AI Voice Agent"
                  width={700}
                  height={1000}
                  className="rounded-2xl object-cover w-full h-auto"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Content — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black/60 tracking-tight mb-3">
              Dentsi
            </h3>
            <p className="text-brand text-lg font-semibold mb-4">
              AI Voice Agent for Dental Practices
            </p>
            <p className="text-black/60 text-base leading-relaxed mb-8 max-w-lg">
              Dentsi answers every call instantly, understands patient needs,
              and books appointments - just like a trained front desk staff
              member.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map(({ icon: Icon, label, detail }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.45 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-bg1/60 border border-brand/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 text-brand shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black/60 leading-tight">
                      {label}
                    </p>
                    {/* <p className="text-xs text-black/50 mt-0.5 leading-snug">
                      {detail}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <Link
                href="/dentsi"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-brand border border-brand rounded-full px-6 py-3 hover:bg-brand/90 transition-all duration-200 group"
              >
                Explore Dentsi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
