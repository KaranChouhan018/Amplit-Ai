'use client';

import React, { useState } from 'react';
import { PhoneCall, CalendarCheck, MessageSquareText, BrainCircuit, Bell, ArrowRight } from 'lucide-react';
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
    reverse: false,
  },
  {
    step: '02',
    icon: MessageSquareText,
    title: 'AI Answers Instantly',
    description: 'Amplit AI picks up immediately — no hold music, no voicemail. Patients get a response in under 2 seconds.',
    bullets: ['No hold time or voicemail', 'Answers in under 2 seconds', 'Professional, natural conversation'],
    visual: 'chat',
    reverse: true,
  },
  {
    step: '03',
    icon: BrainCircuit,
    title: 'Understands the Request',
    description: 'The AI naturally understands what the patient needs — whether it\'s booking an appointment, asking a question, or reporting an urgent issue.',
    bullets: ['Understands accents & dental terminology', 'Detects appointment, query, or urgent intent', 'Handles insurance-related questions'],
    visual: 'brain',
    reverse: false,
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Books or Responds Accordingly',
    description: 'Appointments are booked directly into your practice management system. Common questions are answered on the spot. Urgent cases are escalated.',
    bullets: ['Syncs with Dentrix, Eaglesoft & more', 'Books appointments in real time', 'Escalates urgent cases when needed'],
    visual: 'calendar',
    reverse: true,
  },
  {
    step: '05',
    icon: Bell,
    title: 'Updates Your System & Notifies Your Team',
    description: 'Every interaction is logged. Your team gets notified instantly, and your PMS stays up to date — no manual entry required.',
    bullets: ['Auto-updates your practice management system', 'Sends real-time notifications to staff', 'Complete call logs & transcripts available'],
    visual: 'notify',
    reverse: false,
  },
];

/* --- Responsive Visual Components --- */

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
        <PhoneCall className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
    </div>
  );
}

function ChatVisual() {
  const bubbles = [
    { text: 'Hi! I\'d like to book an appointment.', from: 'user' },
    { text: 'Of course! I can help you with that.', from: 'ai' },
    { text: 'Yes, I am Sarah.', from: 'user' },
  ];
  return (
    <div className="flex flex-col justify-center gap-3 w-full px-4 md:px-8">
      {bubbles.map((b, i) => (
        <div key={i} className={`flex ${b.from === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`px-4 py-2 rounded-2xl text-xs md:text-sm shadow-sm max-w-[80%] ${b.from === 'user' ? 'bg-brand text-white' : 'bg-white border text-black/60'
            }`}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function BrainVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 md:scale-100">
      {/* Pulsing rings */}
      {[1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/20"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            animation: `ping ${2 + i * 0.5}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl">
        <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
    </div>
  );
}

function NotifyVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full px-4 md:px-8 scale-90 md:scale-100">
      {/* Notification cards */}
      {[
        { label: 'Appointment booked', sub: 'Sarah M. — Thu 10:30 AM', color: 'bg-brand text-white' },
        { label: 'Team notified', sub: 'Front desk alerted', color: 'bg-white border border-brand/20 text-black/60' },
      ].map((n, i) => (
        <div key={i} className={`w-full max-w-[220px] px-4 py-2.5 rounded-xl text-left shadow-sm ${n.color}`}>
          <p className="text-xs md:text-sm font-semibold">{n.label}</p>
          <p className={`text-[10px] md:text-xs mt-0.5 ${i === 0 ? 'text-white/70' : 'text-black/50'}`}>{n.sub}</p>
        </div>
      ))}
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full scale-90 md:scale-100">
      <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md w-56 md:w-64">
        <div className="grid grid-cols-2 gap-2">
          {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((slot, i) => (
            <div key={slot} className={`rounded-lg p-2 text-[10px] md:text-xs font-bold text-center ${i === 1 ? 'bg-brand text-white' : 'bg-gray-100'
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

export default function HowItWorks() {
  const [activeItem, setActiveItem] = useState('01');

  const activeStepContext = steps.find(s => s.step === activeItem) || steps[0];

  return (
    <section className="py-10 md:py-14 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl "></div>

      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">

        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold  text-black">Simple for You. Seamless for Patients.</h2>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value)}
            className="w-full">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <AccordionItem key={step.step} value={step.step} className="border-brand/15 border-dashed last:border-0">
                  <AccordionTrigger className='cursor-pointer text-left text-[17px] font-semibold text-black hover:text-brand hover:no-underline transition-colors'>
                    <div className="flex items-center gap-2 text-base text-black font-bold">
                      <Icon className="size-4" />
                      {step.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-black/60">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] text-black/5 dark:text-white/5 opacity-10"></div>
            <div className="aspect-76/59 bg-brand-bg2 relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-white shadow-md flex items-center justify-center relative p-4">
                  {visuals[activeStepContext.visual]}
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={12}
              size={250}
              colorFrom="#6594B1"
              colorTo="#a8c8de"
              borderWidth={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}