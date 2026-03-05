'use client';

import React, { useState } from 'react';
import {
  PhoneCall, Phone, CalendarCheck, MessageSquareText,
  BrainCircuit, Bell, CheckCircle2, User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BorderBeam } from '@/components/ui/border-beam';

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Patient Calls Your Clinic',
    description: 'A patient dials your practice number — during office hours, after hours, or on weekends.',
    bullets: ['Works 24/7 including holidays', 'Handles multiple calls simultaneously', 'Zero hold time for patients'],
    visual: 'phone',
  },
  {
    step: '02',
    icon: MessageSquareText,
    title: 'Amplit AI Answers',
    description: 'Our natural voice AI answers immediately, understanding dental terminology and clinic protocols.',
    bullets: ['Human-like conversational voice', 'Custom trained on your workflows', 'Can answer FAQs and triage'],
    visual: 'chat',
  },
  {
    step: '03',
    icon: BrainCircuit,
    title: 'Processes the Request',
    description: 'The AI determines the patient\'s needs — whether scheduling a cleaning, handling a general inquiry, or an emergency.',
    bullets: ['Intelligent intent recognition', 'HIPAA compliant data handling', 'Pre-screens for specific procedures'],
    visual: 'brain',
  },

  {
    step: '04',
    icon: Bell,
    title: 'Updates Your System & Notifies Team',
    description: 'Every interaction is logged. Your team gets notified instantly, and your calendar stays up to date — no manual entry required.',
    bullets: ['Auto-updates your scheduling system', 'Sends real-time notifications to staff', 'Complete call logs & transcripts available'],
    visual: 'notify',
  },
];

/* --- Enhanced Visual Components --- */

function PhoneVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 md:scale-100">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/30"
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            animation: `ping ${1.2 + i * 0.4}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl">
        <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
    </div>
  );
}

function ChatVisual() {
  const bubbles = [
    { text: 'Hi! I\'d like to book a cleaning.', from: 'user' },
    { text: 'I can absolutely help with that! Are you an existing patient?', from: 'ai' },
    { text: 'Yes, my name is Sarah.', from: 'user' },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="w-full max-w-[280px] bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-brand/10 border-b border-brand/10 px-4 py-3 flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-brand" />
          <span className="text-xs font-semibold text-brand tracking-wide uppercase">Amplit AI</span>
        </div>
        <div className="p-4 flex flex-col gap-3">
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.2 }}
              className={`flex items-end gap-2 ${b.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {b.from === 'ai' && (
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mb-1">
                  <BrainCircuit className="w-3.5 h-3.5 text-brand" />
                </div>
              )}
              <div className={`px-4 py-2.5 rounded-2xl text-[13px] shadow-sm max-w-[80%] leading-relaxed ${b.from === 'user'
                ? 'bg-brand text-white rounded-br-sm'
                : 'bg-gray-100/80 text-gray-700 border border-black/5 rounded-bl-sm'
                }`}>
                {b.text}
              </div>
              {b.from === 'user' && (
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-black/5 flex items-center justify-center shrink-0 mb-1">
                  <User className="w-3.5 h-3.5 text-black/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrainVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--brand-rgb),0.1)_0%,transparent_70%)]" />
      <div className="grid grid-cols-3 gap-4 absolute opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-brand animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <div className="relative z-10 w-24 h-24 rounded-2xl bg-white border border-brand/20 flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
        <BrainCircuit className="w-12 h-12 text-brand" />
      </div>
    </div>
  );
}

function NotifyVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full h-full p-4">
      {[
        { label: 'New Appointment Booked', sub: 'Sarah M. — Thu 10:30 AM', color: 'bg-brand text-white', icon: CalendarCheck },
        { label: 'Patient Record Updated', sub: 'Synced with Dentrix', color: 'bg-white border-black/10 text-gray-800', icon: BrainCircuit },
      ].map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`w-full max-w-[260px] flex items-center gap-4 px-4 py-3 rounded-xl shadow-lg border ${n.color}`}
        >
          <div className={`p-2 rounded-lg ${i === 0 ? 'bg-white/20' : 'bg-brand/10'}`}>
            <n.icon className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-brand'}`} />
          </div>
          <div>
            <p className="text-sm font-semibold">{n.label}</p>
            <p className={`text-[11px] mt-0.5 ${i === 0 ? 'text-white/80' : 'text-[#4e5157] font-medium'}`}>{n.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="bg-white border border-black/10 rounded-2xl shadow-xl w-full max-w-[260px] overflow-hidden">
        <div className="bg-gray-50 border-b border-black/5 px-4 py-3 flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">Thu, Oct 24</span>
          <span className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-md font-medium">3 Openings</span>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3">
          {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((slot, i) => (
            <div key={slot} className={`rounded-xl p-3 text-xs font-bold text-center border transition-all ${i === 1
              ? 'bg-brand text-white border-brand shadow-md scale-105'
              : 'bg-white text-gray-600 border-gray-200 hover:border-brand/30'
              }`}>
              {slot}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  phone: <PhoneVisual />,
  chat: <ChatVisual />,
  brain: <BrainVisual />,
  calendar: <CalendarVisual />,
  notify: <NotifyVisual />,
};

export default function DentsiFeatures() {
  const [activeItem, setActiveItem] = useState('01');
  const activeStepContext = steps.find(s => s.step === activeItem) || steps[0];

  return (
    <section className="relative  py-10 overflow-hidden  ">
      <div className="mx-auto max-w-7xl  px-4 sm:px-6">


        <div className="bg-white rounded-4xl shadow-sm border border-brand/60 p-6 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Left: Accordion Steps */}
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)} // Prevent closing the active one
              className="w-full space-y-2"
            >
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = activeItem === step.step;

                return (
                  <AccordionItem
                    key={step.step}
                    value={step.step}
                    className={`border-none rounded-2xl px-5 transition-colors duration-300 ${isActive ? 'bg-brand/5' : 'hover:bg-gray-50'}`}
                  >
                    <AccordionTrigger className="cursor-pointer text-left py-5 hover:no-underline [&[data-state=open]>div>div>svg]:text-brand">
                      <div className="flex items-center gap-4 text-base text-gray-900 font-bold">

                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-brand' : 'text-gray-400'}`} />
                          <span className={isActive ? 'text-brand' : ''}>{step.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-gray-600 pb-6 pl-12 pr-4">
                      <p className="mb-5 leading-relaxed text-[15px]">{step.description}</p>

                      {/* Render Bullets */}
                      <ul className="space-y-3">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Right: Dynamic Visual Canvas */}
            <div className="relative flex overflow-hidden rounded-[2rem] border border-black/5 bg-[#F8FAFC] h-[380px] md:min-h-[400px] shadow-inner lg:h-[500px]">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

              <div className="w-full h-full relative z-10 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeItem}-visual`}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {visuals[activeStepContext.visual]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Keep the border beam active */}
              <BorderBeam
                duration={10}
                size={300}
                colorFrom="#6594B1"
                colorTo="#a8c8de"
                borderWidth={2}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}