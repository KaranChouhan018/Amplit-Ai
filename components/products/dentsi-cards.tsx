'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CARDS = [
    {
        subheading: '24/7 Availability',
        heading: 'Answer every patient call instantly, with zero hold times',
        image: '/time.png',
    },
    {
        subheading: 'Intelligent Scheduling',
        heading: 'Automate appointment booking and update your calendar',
        image: '/Scheduling.png',
    },
    {
        subheading: 'Natural Conversations',
        heading: "Human-like voice AI trained on your clinic's protocols",
        image: '/Conversations.png',
    }
];

export default function DentsiCards() {
    return (
        <section className="py-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-brand/60 rounded-3xl p-6 lg:p-8 pb-0 lg:pb-0 flex flex-col items-start relative overflow-hidden  group min-h-[460px]"
                        >

                            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />
                            <div className="relative z-10 w-full mb-8">
                                <p className="text-[#4e5157] font-medium text-[13px] md:text-sm mb-3 tracking-wide">{card.subheading}</p>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-[1.3]">{card.heading}</h3>
                            </div>

                            {/* Framed Image Container - positioned at bottom */}
                            <div className="relative w-full mt-auto z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out">
                                {/* The "white tray" that frames the image, with brand tone border matching user request */}
                                <div className="w-full bg-white rounded-t-2xl shadow-[0_0_30px_rgba(0,0,0,0.06)] border-x border-t border-brand/25 p-2 sm:p-3 relative overflow-hidden h-64 sm:h-72">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand/5 border border-brand/15">
                                        <Image
                                            src={card.image}
                                            alt={card.heading}
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Big Bottom Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-3 bg-white border border-brand/60 rounded-3xl p-6 lg:p-12 pb-0 lg:pb-0 flex flex-col md:flex-row items-center relative overflow-hidden group min-h-[400px] gap-8 md:gap-16 pt-8 md:pt-0"
                    >
                          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full md:w-[45%] mb-2 md:mb-0 md:py-12">
                            <p className="text-[#4e5157] font-medium text-[13px] md:text-sm mb-3 tracking-wide">Advanced Analytics</p>
                            <h3 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-[1.3] mb-4">Complete visibility into every patient interaction</h3>
                            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
                                Get comprehensive insights and transcriptions for every call. Monitor performance, track appointment conversion rates, and maintain perfect records without lifting a finger.
                            </p>
                        </div>

                        {/* Framed Image Container - positioned at right on desktop */}
                        <div className="relative w-full md:w-[55%] mt-auto z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out">
                            {/* The "white tray" that frames the image */}
                            <div className="w-full bg-white rounded-t-2xl shadow-[0_0_30px_rgba(0,0,0,0.06)] border-x border-t border-brand/25 p-2 sm:p-3 relative overflow-hidden h-64 sm:h-72 md:h-[350px]">
                                <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand/5 border border-brand/15">
                                    <Image
                                        src="/Dashboard-bg.png"
                                        alt="Advanced Analytics platform"
                                        width={1200}
                                        height={800}
                                        className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
