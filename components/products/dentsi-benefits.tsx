import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Never miss another patient call',
  'Automate appointment scheduling',
  'Reduce front desk workload by 60%',
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
              The Impact
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
              Elevate your<br className="hidden sm:block" />
              <span className="text-brand"> patient experience.</span>
            </h2>

            <p className="text-black/60 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              With Our Front Desk - Dentsi seamlessly handling patient calls and scheduling in the background, your front desk reclaims hours of their day to focus on in-clinic patients.
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

                {/* Feature 1 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-blue-50">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm transform rotate-45"></div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">Natural Voice</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Conversational AI that sounds natural and puts patients at ease.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-orange-50">
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                      <div className="bg-orange-500 rounded-sm"></div>
                      <div className="bg-orange-500 rounded-sm"></div>
                      <div className="col-span-2 bg-orange-500 rounded-sm h-[6px]"></div>
                    </div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">Availability</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Always on. Our Front Desk - Dentsi is available 24/7/365 to answer calls.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-pink-50 text-pink-500 font-bold italic font-serif">
                    A
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">Deep Knowledge</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Pre-trained on dental procedures, codes, and patient queries.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-purple-50">
                    <div className="font-serif italic text-purple-600 text-lg font-bold leading-none -mt-1">M</div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">HIPAA Ready</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Built from the ground up with healthcare-grade security.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-blue-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">Time Savings</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Save your front desk staff up to 15 hours a week on routine calls.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-3xl transition-all duration-300">
                  <div className="w-8 h-8 rounded-full mb-4 flex items-center justify-center bg-red-50">
                    <div className="w-3 h-3 rounded-full border-2 border-red-500 relative"><div className="absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full"></div></div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-black mb-1.5">Focus</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">
                    Your staff can focus entirely on the patient standing right in front of them.
                  </p>
                </div>

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