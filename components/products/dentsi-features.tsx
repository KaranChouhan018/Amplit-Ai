'use client';

import React, { useEffect, useRef } from 'react';
import { Phone, Calendar, HelpCircle, Moon, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BorderBeam } from '../ui/border-beam';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Answers Every Incoming Call',
    description: 'Dentsi picks up every call instantly — no voicemail, no hold music, no missed opportunities.',
    bullets: ['Answers instantly, 24/7', 'No voicemail drops', 'Handles peak call volumes'],
    visual: 'call',
    reverse: false,
  },
  {
    step: '02',
    icon: Calendar,
    title: 'Schedules Appointments in Real Time',
    description: 'Intelligently books appointments based on availability, preferences, and practice rules.',
    bullets: ['Integration with your PMS', 'Respects scheduling rules', 'Seamless slot finding'],
    visual: 'schedule',
    reverse: true,
  },
  {
    step: '03',
    icon: HelpCircle,
    title: 'Handles Common Patient Questions',
    description: 'Answers FAQs about office hours, insurance, services, and more — so your team doesn\'t have to.',
    bullets: ['Office hours & location info', 'Insurance & payment questions', 'Service descriptions'],
    visual: 'faq',
    reverse: false,
  },
  {
    step: '04',
    icon: Moon,
    title: 'Works After Hours & Weekends',
    description: 'Your AI front desk never sleeps. Patients get help day or night, weekends and holidays.',
    bullets: ['Always available', 'Holiday & weekend coverage', 'No overtime costs'],
    visual: 'afterhours',
    reverse: true,
  },
  {
    step: '05',
    icon: ArrowUpRight,
    title: 'Escalates Urgent Cases When Needed',
    description: 'Recognizes emergencies and routes them to the right person immediately.',
    bullets: ['Smart urgency detection', 'Instant staff notifications', 'Seamless handoff to humans'],
    visual: 'escalate',
    reverse: false,
  },
];

/* --- Responsive Visual Components --- */

function CallVisual() {
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

function ScheduleVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full scale-90 md:scale-100">
      <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-md w-56 md:w-64">
        <div className="grid grid-cols-2 gap-2">
          {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((slot, i) => (
            <div key={slot} className={`rounded-lg p-2 text-[10px] md:text-xs font-bold text-center ${i === 2 ? 'bg-brand text-white' : 'bg-gray-100'
              }`}>
              {slot}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full scale-90 md:scale-100">
      {['Office hours?', 'Do you accept my insurance?', 'What services do you offer?'].map((q, i) => (
        <div
          key={q}
          className="bg-white border border-black/10 rounded-xl px-4 py-2.5 shadow-sm w-56 md:w-64 text-xs md:text-sm font-medium text-gray-700"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <span className="text-brand mr-1.5">Q:</span> {q}
        </div>
      ))}
    </div>
  );
}

function AfterHoursVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="absolute w-24 h-24 bg-brand/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      <div className="relative z-10 w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-lg">
        <Moon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}

function EscalateVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full scale-75 md:scale-100">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
        <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-brand" />
      </div>
      {[1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-brand/20"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            animation: `ping ${1.5 + i * 0.5}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  call: <CallVisual />,
  schedule: <ScheduleVisual />,
  faq: <FaqVisual />,
  afterhours: <AfterHoursVisual />,
  escalate: <EscalateVisual />,
};

export default function DentsiFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.feature-card');

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          cards.forEach((card, i) => {
            ScrollTrigger.create({
              trigger: card,
              start: "top 10%",
              endTrigger: containerRef.current,
              end: "bottom 80%",
              pin: true,
              pinSpacing: false,
              scrub: true,
            });

            if (i < cards.length - 1) {
              gsap.to(card, {
                scrollTrigger: {
                  trigger: cards[i + 1],
                  start: "top 80%",
                  end: "top 10%",
                  scrub: true,
                },
                scale: 0.9,
              });
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-24">
          <span className="inline-block  text-brand text-sm font-medium mb-4">
            Key Capabilities
          </span>
          {/* <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Meet Your 24/7 AI Front Desk Assistant — <span className="text-brand">Dentsi</span>
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto text-base md:text-lg">
            Dentsi answers every call instantly, understands patient needs, and books appointments — just like a trained front desk staff member.
          </p> */}
        </div>

        <div className="relative">
          {steps.map((step) => (
            <div
              key={step.step}
              className="feature-card relative overflow-hidden rounded-[30px] md:rounded-[40px] w-full mb-8 md:mb-24 last:mb-0"
            >
              <BorderBeam size={250} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-gray-100 rounded-[30px] md:rounded-[40px] p-6 md:p-16 min-h-fit md:min-h-[500px] shadow-sm">

                {/* Text Content */}
                <div className={`order-1 ${step.reverse ? 'md:order-2' : 'md:order-1'}`}>
                  <span className="text-4xl md:text-6xl font-black text-brand/20 mb-2 md:mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  {/* <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul> */}
                </div>

                {/* Visual Content */}
                <div className={`order-2 h-[250px] md:h-[350px] bg-brand-bg2 rounded-2xl md:rounded-3xl flex items-center justify-center relative overflow-hidden ${step.reverse ? 'md:order-1' : 'md:order-2'
                  }`}>
                  {visuals[step.visual]}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
