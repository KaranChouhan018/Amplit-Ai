'use client';

import React, { useState, useRef } from 'react';
import {
  PhoneCall, MessageSquareText,
  BrainCircuit, Bell, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BorderBeam } from '@/components/ui/border-beam';


const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Patient Calls Your Clinic',
    description: 'A patient dials your practice number — during office hours, after hours, or on weekends.',
    bullets: ['Works 24/7 including holidays', 'Handles multiple calls simultaneously', 'Zero hold time for patients'],
    video: '/videos/step-02.mp4',
  },
  {
    step: '02',
    icon: MessageSquareText,
    title: 'Amplit AI Answers',
    description: 'Our natural voice AI answers immediately, understanding dental terminology and clinic protocols.',
    bullets: ['Human-like conversational voice', 'Custom trained on your workflows', 'Can answer FAQs and triage'],
    video: '/videos/step-01.mp4',
  },
  {
    step: '03',
    icon: BrainCircuit,
    title: 'Processes the Request',
    description: 'The AI determines the patient\'s needs — whether scheduling a cleaning, handling a general inquiry, or an emergency.',
    bullets: ['Intelligent intent recognition', 'HIPAA compliant data handling', 'Pre-screens for specific procedures'],
    video: '/videos/step-01.mp4',
  },
  {
    step: '04',
    icon: Bell,
    title: 'Updates Your System & Notifies Team',
    description: 'Every interaction is logged. Your team gets notified instantly, and your calendar stays up to date — no manual entry required.',
    bullets: ['Auto-updates your scheduling system', 'Sends real-time notifications to staff', 'Complete call logs & transcripts available'],
    video: '/videos/step-02.mp4',
  },
];

export default function HowItWorks() {
  const [activeItem, setActiveItem] = useState('01');

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const activeStep = steps.find(s => s.step === activeItem) || steps[0];
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">
          <p className="text-brand font-medium text-base mb-4 max-w-2xl  mx-auto leading-relaxed">Let's understand How it works</p>
          <h2 className="text-3xl font-bold text-black leading-tight mb-4">
            Free your team from constant interruptions and create a smoother, <br /> more focused patient experience, Because your front desk should feel in control—not overwhelmed.
          </h2>
          <p className="text-black/60 text-base md:text-md mb-10 max-w-2xl mx-auto leading-relaxed">
            Let Amplit AI handle the front desk—so your team can focus on care
          </p>
        </div>

        <div className="bg-white border border-brand rounded-4xl shadow-sm  p-6 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Left: Accordion Steps */}
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)}
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

            {/* Right: Step Video */}
            <div className="relative overflow-hidden shadow-md rounded-4xl h-[380px] md:min-h-[400px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0" 
                >
                  <video
                    ref={videoRef}
                    key={activeStep.video}
                    src={activeStep.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Border beam */}
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
    </motion.section>
  );
}