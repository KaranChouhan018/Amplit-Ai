'use client'
import { motion } from 'framer-motion';



export default function AboutQuote() {
    return (
        <section className="bg-white py-10 md:py-14">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-2xl md:text-3xl text-black font-bold leading-relaxed mb-4 sm:mb-6">
                        &ldquo;Amplit AI doesn&apos;t just answer calls — it shows you exactly how those calls impact your revenue.&rdquo;
                    </p>
                    <p className="text-brand font-medium">
                        Full visibility into what your front desk might be missing.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}