'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FileText, Mic, Phone, CalendarCheck, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

/* ─── AcuCogn Scribe Mockup ─────────────────────────────────── */
function ScribeMockup() {
  const lines = [
    { w: 'w-full', opacity: 'opacity-100' },
    { w: 'w-[90%]', opacity: 'opacity-100' },
    { w: 'w-[85%]', opacity: 'opacity-90' },
    { w: 'w-[75%]', opacity: 'opacity-70' },
    { w: 'w-[60%]', opacity: 'opacity-40' },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brand/15 ring-1 ring-black/2">
      {/* Header bar */}
      <div className="bg-linear-to-r from-brand to-[#7AA8C4] px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
            <Mic className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-xs font-bold tracking-wide">Live Transcription</p>
            <p className="text-white/80 text-[10px] font-medium mt-0.5">Dr. Patel · Exam Room 2</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-black/10 px-2 py-1 rounded-md border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
          <span className="text-white/90 text-[10px] font-mono font-medium tracking-wider">02:14</span>
        </div>
      </div>

      {/* Waveform */}
      <div className="bg-brand-bg1 px-5 py-3.5 flex items-center justify-center gap-[3px] h-14 border-b border-brand/10 shadow-inner">
        {[0.4, 0.7, 1, 0.85, 0.6, 0.9, 1, 0.5, 0.75, 0.95, 0.6, 0.8, 1, 0.55, 0.7, 0.9, 0.65, 0.8, 0.5, 0.4].map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full bg-linear-to-t from-brand to-[#8ABEDD]"
            animate={{ scaleY: [h * 0.4, h, h * 0.4] }}
            transition={{ duration: 1.2 + i * 0.05, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
            style={{ height: 24, transformOrigin: 'center' }}
          />
        ))}
      </div>

      {/* Transcription body */}
      <div className="px-5 py-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-brand uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="w-3 h-3" /> Auto-generating
          </p>
        </div>
        <div className="space-y-2.5">
          {lines.map((l, i) => (
            <div key={i} className={`${l.w} h-2.5 rounded-full bg-linear-to-r from-brand/15 to-brand/5 ${l.opacity}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 pt-3 mt-2 border-t border-gray-50">
          <ShieldCheck className="w-4 h-4 text-brand/70" />
          <span className="text-[10px] font-medium text-black/40">HIPAA Compliant · On-premises ready</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Dentsi Mockup ─────────────────────────────────────────── */
function DentsiMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brand/15 ring-1 ring-black/2">
      {/* Header */}
      <div className="bg-linear-to-r from-brand to-[#7AA8C4] px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner relative">
            <Phone className="w-4 h-4 text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 border border-brand rounded-full"></span>
          </div>
          <div>
            <p className="text-white text-xs font-bold tracking-wide">AI Voice Agent</p>
            <p className="text-white/80 text-[10px] font-medium mt-0.5">+1 (972) 555-0148 · Active</p>
          </div>
        </div>
        <div className="bg-black/10 px-2 py-1 rounded-md border border-white/10">
          <span className="text-white/90 text-[10px] font-mono font-medium tracking-wider">00:32</span>
        </div>
      </div>

      {/* Waveform */}
      <div className="bg-brand-bg1 px-5 py-3.5 flex items-center justify-center gap-[3px] h-14 border-b border-brand/10 shadow-inner">
        {[0.5, 0.8, 0.6, 1, 0.7, 0.9, 0.5, 0.85, 1, 0.6, 0.75, 0.9, 0.55, 0.8, 0.65, 0.95, 0.5, 0.7, 0.85, 0.4].map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full bg-linear-to-t from-brand to-[#8ABEDD]"
            animate={{ scaleY: [h * 0.4, h, h * 0.4] }}
            transition={{ duration: 1.2 + i * 0.04, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
            style={{ height: 24, transformOrigin: 'center' }}
          />
        ))}
      </div>

      {/* Booking card */}
      <div className="px-5 py-5 space-y-3.5">
        <p className="text-[10px] font-bold text-brand uppercase tracking-widest flex items-center gap-1.5">
          <CalendarCheck className="w-3 h-3" /> Appointment Booked
        </p>
        
        <div className="flex items-start gap-3 bg-white border border-brand/20 shadow-[0_2px_10px_rgba(101,148,177,0.06)] rounded-xl p-3.5 transition-all hover:border-brand/40">
          <div className="w-9 h-9 rounded-lg bg-brand-bg1 flex items-center justify-center shrink-0 text-brand">
            <CalendarCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Thu, Mar 5 · 2:00 PM</p>
            <p className="text-[10px] font-medium text-gray-500 mt-1">Sarah M. · Routine Cleaning · 45 min</p>
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          {['Dentrix', 'Eaglesoft', 'Open Dental'].map((pms) => (
            <span key={pms} className="text-[9px] font-semibold px-2.5 py-1 rounded-md bg-brand-bg1 border border-brand/10 text-brand shadow-sm">
              {pms}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
const products = [
  {
    badge: 'Clinical AI',
    title: 'AcuCogn Scribe',
    subtitle: 'Ambient AI Clinical Documentation',
    description:
      'Real-time visit-to-note documentation that captures clinical conversations and auto-generates structured notes — HIPAA compliant with on-premises deployment options.',
    href: '/acucogn-scribe',
    Mockup: ScribeMockup,
  },
  {
    badge: 'Voice AI',
    title: 'Dentsi',
    subtitle: 'AI Voice Agent for Dental Practices',
    description:
      '24/7 automated call handling that answers every incoming call, schedules appointments in real time, handles common patient questions, works after hours and weekends, and escalates urgent cases when needed.',
    href: '/dentsi',
    Mockup: DentsiMockup,
  },
];

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
    

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 tracking-tight leading-tight mb-6">
            Amplifying <span className="text-brand">Healthcare Intelligence</span>
          </h2>
            <p className="text-black/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Intelligent solutions that reduce operational burden and improve patient engagement — starting with dental practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {products.map(({ badge, title, subtitle, description, href, Mockup }, index) => (
            <motion.div
              key={title}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              className="group relative bg-white rounded-4xl border border-brand/15 overflow-hidden  transition-all duration-500 flex flex-col"
            >
          
              {/* Illustration area with Soft Backdrop */}
              <div className="relative px-8 pt-10 pb-6 bg-linear-to-b from-brand-bg1/80 to-transparent flex justify-center">
                <div className="w-full max-w-[400px]  rounded-2xl">
                  <Mockup />
                                    {/* Subtle bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-white/80 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-4 flex-1 flex flex-col">
                <div className="mb-5">
                  <span className="inline-block px-3 py-1.5 text-[11px] font-bold text-brand bg-brand-bg1 border border-brand/20 rounded-full uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black/80 mb-2 tracking-tight">{title}</h3>
                <p className="text-brand text-base font-semibold mb-4">{subtitle}</p>
                <p className="text-black/80 text-[15px] leading-relaxed mb-8 flex-1">{description}</p>
                
                <div>
                   <Link
                href={href}
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-brand border border-brand rounded-full px-5 py-2.5  transition-all duration-200 group"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}