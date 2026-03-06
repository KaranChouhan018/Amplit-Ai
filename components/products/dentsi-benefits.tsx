import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Mic, Clock, GraduationCap, ShieldCheck, Zap, Crosshair } from 'lucide-react';

const BENEFITS_CONTENT = {
  badge: 'The Impact',
  headline: 'Elevate your',
  headlineHighlight: 'patient experience.',
  description:
    'With Our Front Desk - Dentsi seamlessly handling patient calls and scheduling in the background, your front desk reclaims hours of their day to focus on in-clinic patients.',
};

const benefits = [
  'Never miss another patient call',
  'Automate appointment scheduling',
  'Reduce front desk workload by 60%',
];

const features = [
  {
    icon: Mic,
    title: 'Natural Voice',
    description: 'Conversational AI that sounds natural and puts patients at ease.',
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-500'
  },
  {
    icon: Clock,
    title: 'Availability',
    description: 'Always on. Our Front Desk - Dentsi is available 24/7/365 to answer calls.',
    bgClass: 'bg-orange-50',
    iconClass: 'text-orange-500'
  },
  {
    icon: GraduationCap,
    title: 'Deep Knowledge',
    description: 'Pre-trained on dental procedures, codes, and patient queries.',
    bgClass: 'bg-pink-50',
    iconClass: 'text-pink-500'
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA Ready',
    description: 'Built from the ground up with healthcare-grade security.',
    bgClass: 'bg-purple-50',
    iconClass: 'text-purple-500'
  },
  {
    icon: Zap,
    title: 'Time Savings',
    description: 'Save your front desk staff up to 15 hours a week on routine calls.',
    bgClass: 'bg-blue-50',
    iconClass: 'text-blue-500'
  },
  {
    icon: Crosshair,
    title: 'Focus',
    description: 'Your staff can focus entirely on the patient standing right in front of them.',
    bgClass: 'bg-red-50',
    iconClass: 'text-red-500'
  }
];

export default function DentsiBenefits() {
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true });

  return (
    <section className="py-10  relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, x: -30 }}
            animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold mb-6 tracking-widest uppercase">
              {BENEFITS_CONTENT.badge}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              {BENEFITS_CONTENT.headline}<br className="hidden sm:block" />
              <span className="text-brand"> {BENEFITS_CONTENT.headlineHighlight}</span>
            </h2>

            <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] mb-10 leading-relaxed max-w-lg">
              {BENEFITS_CONTENT.description}
            </p>

            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start group"
                >
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-black text-lg font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mt-10 lg:mt-0"
          >


            <div className="relative bg-white rounded-3xl border border-gray-100  p-2 overflow-hidden h-[450px]">


              {/* Grid of Cards */}
              <div className="grid grid-cols-2 gap-2 h-full p-4  pb-24 ">

                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                    <div className={`w-8 h-8 rounded-full mb-4 flex items-center justify-center ${feature.bgClass}`}>
                      <feature.icon className={`w-4 h-4 ${feature.iconClass}`} />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                    <p className="text-[13px] text-[#4e5157] font-medium leading-snug">
                      {feature.description}
                    </p>
                  </div>
                ))}

              </div>

              {/* Bottom fading edge mask */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white via-white/90 to-transparent z-10 pointer-events-none rounded-b-3xl" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}