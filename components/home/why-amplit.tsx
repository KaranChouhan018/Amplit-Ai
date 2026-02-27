"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, HelpCircle, Moon, ArrowUpDown } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const capabilities = [
  { icon: PhoneCall, label: "Answers every incoming call" },
  { icon: CalendarCheck, label: "Schedules appointments in real time" },
  { icon: HelpCircle, label: "Handles common patient questions" },
  { icon: Moon, label: "Works after hours and weekends" },
  { icon: ArrowUpDown, label: "Escalates urgent cases when needed" },
];

const stats = [
  {
    emoji: "📉",
    value: "40%",
    label: "Fewer no-shows",
    description: "Automated reminders & instant rebooking cut missed appointments significantly.",
    gradient: "from-[#eef4f8] to-white",
    valueColor: "text-brand",
  },
  {
    emoji: "⚡",
    value: "24/7",
    label: "Always available",
    description: "Nights, weekends, holidays — every call answered, every appointment booked.",
    gradient: "from-brand/10 to-white",
    valueColor: "text-brand",
  },
];

function CallMockup() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <div>
        {/* Header */}
        <div className="bg-brand px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Incoming Call</p>
              <p className="text-white/70 text-xs">+1 (972) 555-0148</p>
            </div>
          </div>
          <span className="text-white/80 text-xs font-mono">00:04</span>
        </div>
        {/* Body */}
        <div className="px-5 py-5 space-y-4">
          {[
            {
              label: "Intent",
              value: "Book Cleaning",
              color: "bg-brand/10 text-brand",
            },
            {
              label: "Patient",
              value: "Sarah M. — Existing",
              color: "bg-black/5 text-black/60",
            },
            {
              label: "Insurance",
              value: "Delta Dental ✓",
              color: "bg-green-50 text-green-700",
            },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-[13px] text-gray-400 font-medium">
                {row.label}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${row.color}`}
              >
                {row.value}
              </span>
            </div>
          ))}
          {/* Slot */}
          <div className="mt-5 bg-brand/5 rounded-xl p-4 border border-brand/10">
            <p className="text-xs text-gray-400 mb-2 font-medium">
              Booking slot
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">
                Thu, Mar 6 · 10:30 AM
              </span>
              <span className="text-[11px] bg-brand text-white rounded-full px-2.5 py-1 font-semibold tracking-wide uppercase">
                Confirmed
              </span>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-gray-100 px-5 py-3.5 flex items-center gap-2 bg-gray-50/50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] text-black/60 font-medium uppercase tracking-wider">
            AI handling call — 0 staff needed
          </span>
        </div>
        {/* This gradient will now be constrained to this specific div */}
        <div
          className="absolute inset-x-0 bottom-0 h-60 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #ffffff 0%, rgba(248, 249, 251, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function WhyAmplit() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #6594B1 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-gray-900 tracking-normal leading-none"
          >
            Why Amplit AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-black/60 text-base leading-relaxed max-w-[420px] md:pt-2"
          >
            Missed calls = missed appointments. Missed appointments = lost revenue. Lost revenue = slow growth. Amplit AI solves this — fully automated, 24/7.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Column — Large Card */}
          {/* Left Column — Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white border border-black/5  p-6 sm:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[580px]"
          >
            <BorderBeam size={350} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
            
            <div className="flex-1 flex items-start justify-center pt-2 pb-10 relative overflow-hidden">
              <CallMockup />
            </div>

            <div>
              <h1 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[38px] font-medium text-gray-900 leading-[1.1] mb-3">
                Intelligent call handler
              </h1>
              <p className="text-black/60 text-[15px] sm:text-base leading-relaxed max-w-md">
                Dentsi answers every call instantly, understands patient needs, and books appointments — just like a trained front desk staff member.
              </p>
            </div>
          </motion.div>

          {/* Right Column — Sub Grid */}
          <div className="flex flex-col gap-5">
            {/* Top right — Key Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-black/5     bg-white p-6 sm:p-10 flex-1 flex flex-col justify-center"
            >
              <BorderBeam size={200} duration={10} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
              <h1 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[38px] font-medium text-gray-900 leading-[1.1] mb-3">
                Key Capabilities
              </h1>
              <p className="text-black/60 text-[15px] sm:text-base mb-6 sm:mb-8 max-w-sm">
                Everything your front desk does — automated, instant, and available around the clock.
              </p>
              <div
                className="overflow-hidden relative"
                style={{
                  height: "192px",
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}>
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-3"
                >
                  {[...capabilities, ...capabilities].map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand/5 border border-brand/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                        <cap.icon className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-[14px] font-medium text-gray-800">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom right — Stat Cards */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                  className={`relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-linear-to-b ${stat.gradient} border border-brand/10 p-5 sm:p-6 aspect-square flex flex-col justify-between`}
                >
                  {/* Glowing accent */}
                  <div
                    className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-40 z-0 bg-brand"
                  />
                  {/* Top: emoji badge */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center text-lg">
                    {stat.emoji}
                  </div>
                  {/* Bottom: value + label + desc */}
                  <div className="relative z-10">
                    <p className={`text-[32px] sm:text-[36px] md:text-[40px] font-bold ${stat.valueColor} leading-none mb-1`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-900 text-[13px] font-semibold mb-1">
                      {stat.label}
                    </p>
                   
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
