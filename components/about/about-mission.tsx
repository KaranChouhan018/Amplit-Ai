'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle2, Activity, PhoneIncoming, CalendarCheck, User } from 'lucide-react';
import { BorderBeam } from '../ui/border-beam';

export default function AboutMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <section className="relative overflow-hidden py-10">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          {/* --- LEFT COLUMN: NARRATIVE --- */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs sm:text-sm font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Our Core Mission
              </div>

              <div className="border-l-2 border-brand pl-6">
                <p className="text-2xl sm:text-3xl font-semibold leading-snug text-black">
                  We don’t replace your front desk.
                  <br />
                  <span className="text-brand ">We amplify it.</span>
                </p>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
                AI that works <br />
                <span className="text-brand ">behind the scenes.</span>
              </h2>

              {/* Quote */}


              {/* Body Text */}
              <div className="space-y-6 max-w-xl">
                <p className="text-lg text-[#4e5157] font-medium leading-relaxed">
                  Starting with dental practices, our mission is to create AI systems that work seamlessly in the background — improving efficiency without disrupting the human touch.
                </p>
                <p className="text-lg text-[#4e5157] font-medium leading-relaxed">
                  Missed calls mean missed appointments. Amplit AI solves this — fully automated, 24/7, so your team can focus on the patient in the chair.
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: INTERACTIVE IDENTITY CARD --- */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative group">

              <div className="relative bg-white/70  shadow-sm border border-black/5 p-8 rounded-[2.5rem] shadow-brand/10">
                <BorderBeam
                  duration={10}
                  size={300}
                  colorFrom="#6594B1"
                  colorTo="#a8c8de"
                  borderWidth={2}
                />
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 rounded-lg">
                      <Activity className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Amplit AI</h3>
                      <p className="text-[10px] text-brand font-mono tracking-tighter uppercase">Status: Operational</p>
                    </div>
                  </div>
                  <Shield className="w-6 h-6 text-black/20" />
                </div>

                {/* AI Activity Feed */}
                <div className="relative h-60 overflow-hidden -mx-2 px-2">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-10 pointer-events-none" />

                  <motion.div
                    animate={{ y: ['0%', '-50%'] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 8,
                        ease: 'linear',
                      },
                    }}
                    className="flex flex-col gap-4 pt-4"
                  >
                    {[
                      { label: "Patient Call Answered", time: "Now", icon: <PhoneIncoming className="w-4 h-4" />, color: "bg-emerald-500" },
                      { label: "Cleaning Appt. Booked", time: "2m ago", icon: <CalendarCheck className="w-4 h-4" />, color: "bg-brand" },
                      { label: "Follow-up Sent", time: "14m ago", icon: <CheckCircle2 className="w-4 h-4" />, color: "bg-brand" },
                      { label: "Patient Call Answered", time: "Now", icon: <PhoneIncoming className="w-4 h-4" />, color: "bg-emerald-500" },
                      { label: "Cleaning Appt. Booked", time: "2m ago", icon: <CalendarCheck className="w-4 h-4" />, color: "bg-brand" },
                      { label: "Follow-up Sent", time: "14m ago", icon: <CheckCircle2 className="w-4 h-4" />, color: "bg-brand" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-white/50 border border-black/3 rounded-2xl hover:border-brand/20 transition-colors shrink-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full text-white ${item.color} shadow-sm`}>
                            {item.icon}
                          </div>
                          <span className="text-sm font-semibold text-black/80">{item.label}</span>
                        </div>
                        <span className="text-[10px] text-black/40 font-mono font-bold uppercase">{item.time}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-9 h-9 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-black/40 shadow-sm`}>
                        <User className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-black">98.4%</p>
                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">Automation Rate</p>
                  </div>
                </div>
              </div>

              {/* Floating Element for Depth */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
                  <p className="text-xs font-bold tracking-tight">System processing active...</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}