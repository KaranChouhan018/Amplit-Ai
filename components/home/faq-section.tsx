'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';

const faqItems = [
  {
    id: 'item-1',
    question: 'Will this replace my front desk staff?',
    answer:
      'No — it supports your team by handling calls, so they can focus on in-clinic patients. Think of it as an always-on assistant that takes care of the phones while your staff delivers great in-person care.',
  },
  {
    id: 'item-2',
    question: 'Can it work after hours?',
    answer:
      'Yes, Amplit AI works 24/7 — even when your clinic is closed. Nights, weekends, and holidays are all covered so you never miss a patient call or appointment opportunity.',
  },
  {
    id: 'item-3',
    question: 'Is it hard to set up?',
    answer:
      'No, setup is simple and customized to your clinic. Most practices are fully live within a few days. Our onboarding team configures the AI to your custom scripts, protocols, and scheduling system.',
  },
  {
    id: 'item-4',
    question: 'Is patient data secure?',
    answer:
      'Yes, Amplit AI is built with healthcare privacy in mind. All patient interactions are encrypted in transit and at rest, with strict HIPAA-compliant data access controls.',
  },

];

export default function FAQSection() {
  return (
    <section className="py-10 relative overflow-hidden ">
      {/* Background tint removed for calm aesthetic */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-brand uppercase tracking-widest mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
            className="text-3xl font-medium text-black/80 sm:text-4xl lg:text-5xl leading-tight tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-black/60 mt-4 text-base leading-relaxed"
          >
            Everything you need to know about Amplit AI and how it works for your dental practice.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full bg-transparent px-2"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-black/5 last:border-0 py-2">
                <AccordionTrigger className="cursor-pointer text-left text-lg font-medium text-black/80 hover:text-brand hover:no-underline transition-colors py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[15px] text-black/60 leading-relaxed pb-4 pr-8">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-black/60 mt-6 px-4 sm:px-8 text-sm">
            Still have questions?{' '}
            <Link href="/contact" className="text-brand font-medium hover:underline">
              Contact our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
