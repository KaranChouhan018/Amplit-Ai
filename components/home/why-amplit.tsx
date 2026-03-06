"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, HelpCircle, Moon, ArrowUpDown, Zap, } from "lucide-react";
import Image from "next/image";

const MAIN_CARD = {
  title: 'Intelligent call handler',
  description:
    'Amplit AI answers every call instantly, understands patient needs, and books appointments seamlessly into your calendar.',
  image: '/images/Dashboard.png',
  imageAlt: 'Dashboard',
};

const CAPABILITIES_CARD = {
  title: 'Key Capabilities',
  description: 'Everything your front desk does \u2014 automated 24/7.',
};

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
  },
  {
    icon: <Zap className="w-5 h-5 text-brand" />,
    value: "0s",
    label: "Wait Time",
    description: "Instant response for patients",
  },
];



export default function WhyAmplit() {
  return (
    <section className=" relative py-10">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">



        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl bg-white border border-brand/60 flex flex-col pt-10"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.03)" }}
          >
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />
            <div className="px-8 sm:px-10 ">
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-snug">
                {MAIN_CARD.title}
              </h3>
              <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] leading-relaxed max-w-sm">
                {MAIN_CARD.description}
              </p>
            </div>

            <div className="flex-1 w-full flex items-end justify-center px-4 sm:px-8 lg:px-10 pb-6 sm:pb-10 relative">

              {/* Frosted container */}
              <div
                className="relative z-10 w-full max-w-6xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  borderRadius: 24,
                }}
              >

                {/* Blur wrapper */}
                <div
                  className="relative overflow-hidden w-full aspect-video sm:aspect-16/10"
                  style={{
                    backdropFilter: "blur(8px)",
                    borderRadius: 20,
                  }}
                >

                  <Image
                    src={MAIN_CARD.image}
                    alt={MAIN_CARD.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 90vw,
               1200px"
                    className="object-cover rounded-t-lg drop-shadow-md"
                  />

                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl bg-white border border-brand/60 p-8 sm:p-9 flex-1 flex flex-col"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.03)" }}
            >
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                {CAPABILITIES_CARD.title}
              </h3>
              <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] mb-7 leading-relaxed">
                {CAPABILITIES_CARD.description}
              </p>

              <div
                className="overflow-hidden relative mt-auto"
                style={{
                  height: "220px",
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-3 pt-2"
                >
                  {[...capabilities, ...capabilities].map((cap, i) => (
                    <div key={i} className="flex items-center bg-brand-bg2 p-4 rounded-xl gap-3 group">
                      <div className="w-8 h-8 rounded-xl bg-brand/6 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors duration-200">
                        <cap.icon className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-[14px] text-gray-600 font-bold group-hover:text-brand transition-colors duration-200">
                        {cap.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                  className="rounded-3xl relative overflow-hidden bg-white border border-brand/60 p-6 sm:p-7 flex flex-col justify-between min-h-[180px]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.03)" }}
                >
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl text-white bg-brand/6 flex items-center justify-center mb-auto">
                    {stat.icon}
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl sm:text-[34px] font-bold text-black tracking-tight leading-none mb-2">
                      {stat.value}
                    </p>
                    <p className="text-black text-[13px] font-semibold mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] leading-relaxed">
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
