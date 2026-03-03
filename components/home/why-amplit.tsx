"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, HelpCircle, Moon, ArrowUpDown, Zap } from "lucide-react";
import { CONTACT_INFO } from '@/lib/constants';

// Removed excessive animations and `BorderBeam` to achieve a minimal and calm UI

const capabilities = [
  { icon: PhoneCall, label: "Answers every incoming call" },
  { icon: CalendarCheck, label: "Schedules appointments in real time" },
  { icon: HelpCircle, label: "Handles common patient questions" },
  { icon: Moon, label: "Works after hours and weekends" },
  { icon: ArrowUpDown, label: "Escalates urgent cases when needed" },
];

const stats = [
  {
    icon: <PhoneCall className="w-5 h-5 text-brand" />,
    value: "100%",
    label: "Calls Answered",
    description: "No missed opportunities",
    gradient: "from-brand/5 to-transparent",
    valueColor: "text-brand",
  },
  {
    icon: <Zap className="w-5 h-5 text-brand" />,
    value: "0s",
    label: "Wait Time",
    description: "Instant response for patients",
    gradient: "from-brand/5 to-transparent",
    valueColor: "text-brand",
  },
];

function CallMockup() {
  return (
    <div className="w-full bg-white rounded-t-[32px] border border-gray-100/80 overflow-hidden flex flex-col transform translate-y-2 pb-0">
      {/* Soft Header */}
      <div className="bg-[#fafbfc] border-b border-black/5 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
            <PhoneCall className="w-4 h-4 text-black/60" />
          </div>
          <div className="flex flex-col">
            <span className="text-black/80 text-sm font-medium tracking-wide">Incoming Call</span>
            <span className="text-black/50 text-xs mt-0.5 font-light">{CONTACT_INFO.phone}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 transition-opacity duration-1000 animate-pulse" />
          <span className="text-black/60 text-xs font-mono tracking-wider">00:12</span>
        </div>
      </div>

      {/* Minimal Body */}
      <div className="p-6 space-y-5 bg-[#fafcff]">
        <div className="space-y-4">
          {[
            {
              label: "Intent",
              value: "Book Cleaning",
              color: "bg-[#6594B1]/10 text-[#4A7A99] ring-1 ring-[#6594B1]/20",
              delay: 0.3,
            },
            {
              label: "Patient",
              value: "Sarah M. (Existing)",
              color: "bg-white text-gray-600 shadow-sm border border-gray-100",
              delay: 0.5,
            },
          ].map((row) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: row.delay, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between"
            >
              <span className="text-[13px] font-medium text-gray-400">
                {row.label}
              </span>
              <span
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full ${row.color}`}
              >
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Elegant Slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[16px] p-5 border border-black/5 relative overflow-hidden mt-2"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-brand/40 rounded-l-2xl" />
          <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-2">
            Confirmed Slot
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-semibold text-gray-800">
              Thu, Mar 6 · 10:30 AM
            </span>
          </div>
        </motion.div>
      </div>

      {/* Calm Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="px-6 py-5 bg-white flex items-center gap-3 border-t border-gray-100"
      >
        <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#6594B1]/5">
          <div className="absolute inset-0 rounded-full border border-[#6594B1]/20 animate-[spin_3s_linear_infinite]" />
          <div className="w-2 h-2 rounded-full bg-[#6594B1]" />
        </div>
        <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          AI Agent handling call...
        </span>
      </motion.div>
    </div>
  );
}

export default function WhyAmplit() {
  return (
    <section className="py-10 relative overflow-hidden">
      {/* Subtle ambient background removed for minimalist look */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Text */}
        {/* <div className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-black/5 text-brand text-xs font-medium uppercase tracking-widest mb-6"
          >
            Why Dentsi
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6 leading-tight"
          >
            A front desk that <br className="hidden sm:block" />
            <span className="text-brand">never sleeps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            Automate calls, scheduling, and patient inquiries with an intelligent assistant designed to feel entirely human.
          </motion.p>
        </div> */}

        {/* Minimal Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="lg:col-span-7 relative overflow-hidden bg-white border border-black/5 rounded-4xl flex flex-col pt-12"
          >
            <div className="px-10 sm:px-12 mb-10">
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 tracking-tight">
                Intelligent call handler
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm font-light">
                Dentsi answers every call instantly, understands patient needs, and books appointments seamlessly into your calendar.
              </p>
            </div>

            <div className="flex-1 w-full flex items-start justify-center px-10 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7f9] to-transparent z-0 opacity-50" />
              <div className="relative z-10 w-full flex justify-center pb-0">
                <CallMockup />
              </div>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">

            {/* Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
              className="bg-white border border-black/5 rounded-4xl p-8 sm:p-10 flex-1 flex flex-col"
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-3 tracking-tight">
                Key Capabilities
              </h3>
              <p className="text-gray-500 text-[15px] mb-10 font-light leading-relaxed">
                Everything your front desk does — automated and available around the clock.
              </p>

              <div
                className="overflow-hidden relative mt-auto"
                style={{
                  height: "220px", /* Fixed height to hold marquee */
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-5 pt-2"
                >
                  {/* Duplicate capabilities array for seamless seamless scroll loop */}
                  {[...capabilities, ...capabilities].map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-brand/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-brand/10 group-hover:scale-105">
                        <cap.icon className="w-[18px] h-[18px] text-brand" />
                      </div>
                      <span className="text-[14.5px] font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className={`relative overflow-hidden bg-white border border-black/5 rounded-4xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px]`}
                >
                  <div className="w-12 h-12 rounded-[20px] bg-black/5 border border-black/5 flex items-center justify-center text-xl mb-4">
                    {stat.icon}
                  </div>
                  <div>
                    <p className={`text-[36px] font-semibold ${stat.valueColor} tracking-tighter mb-1.5 leading-none`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-800 text-[14px] font-medium mb-1.5 mt-3">
                      {stat.label}
                    </p>
                    <p className="text-black/60 text-[12px] font-light leading-relaxed">
                      {stat.description}
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
