'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, BrainCircuit, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogHeader
} from '@/components/ui/dialog';

const FormInput = ({ label, id, ...props }: any) => (
    <div className="relative group">
        <label
            htmlFor={id}
            className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand"
        >
            {label}
        </label>
        <input
            id={id}
            {...props}
            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-3xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all placeholder:text-gray-400 text-sm sm:text-base"
        />
    </div>
);

export function ContactDialog({ children }: { children: React.ReactNode }) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        chairs: '',
        interestedIn: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scroll when modal open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
        }, 1500);
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            setTimeout(() => {
                setIsSubmitted(false);
                setFormState({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    chairs: '',
                    interestedIn: '',
                    message: ''
                });
            }, 400);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent
                className="w-full h-[70vh] md:h-[90vh]
        sm:max-w-2xl
        p-0 overflow-hidden
        bg-white
        rounded-none sm:rounded-3xl
        shadow-2xl
        flex flex-col"
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full
          bg-gray-100 hover:bg-gray-200
          flex items-center justify-center transition"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex-1 overflow-y-auto px-5 sm:px-8 md:px-10 py-8 custom-scrollbar">
                    <DialogHeader className="mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                            <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
                        </div>

                        <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                            Let&apos;s talk about your practice
                        </DialogTitle>

                        <DialogDescription className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            Fill out the form below and our team will get back to you within 2 hours.
                        </DialogDescription>
                    </DialogHeader>

                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Message Received!
                                </h3>

                                <p className="text-gray-600 max-w-sm mx-auto mb-8">
                                    We&apos;ve sent a confirmation to your email. One of our experts will reach out shortly.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                                >
                                    Close Dialog
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                    <FormInput
                                        label="Full Name"
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Dr. Sarah Johnson"
                                        value={formState.name}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, name: e.target.value })
                                        }
                                    />
                                    <FormInput
                                        label="Work Email"
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="sarah@practice.com"
                                        value={formState.email}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, email: e.target.value })
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                    <FormInput
                                        label="Mobile Number"
                                        id="phone"
                                        type="tel"
                                        placeholder="e.g. (555) 123-4567"
                                        value={formState.phone}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, phone: e.target.value })
                                        }
                                    />
                                    <FormInput
                                        label="Practice Name"
                                        id="company"
                                        type="text"
                                        required
                                        placeholder="Smile Dental Clinic"
                                        value={formState.company}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, company: e.target.value })
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                    <FormInput
                                        label="Number of Chairs"
                                        id="chairs"
                                        type="text"
                                        required
                                        placeholder="1-3, 4-7, 8+"
                                        value={formState.chairs}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, chairs: e.target.value })
                                        }
                                    />
                                    <FormInput
                                        label="Interested In"
                                        id="interestedIn"
                                        type="text"
                                        required
                                        placeholder="Voice AI Receptionist"
                                        value={formState.interestedIn}
                                        onChange={(e: any) =>
                                            setFormState({ ...formState, interestedIn: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-3xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all resize-none text-sm sm:text-base"
                                        placeholder="Tell us a bit about your practice..."
                                        value={formState.message}
                                        onChange={(e) =>
                                            setFormState({ ...formState, message: e.target.value })
                                        }
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full py-4 text-sm sm:text-base
                  bg-brand text-white font-medium rounded-full
                  hover:shadow-md transition-all disabled:opacity-50
                  flex items-center justify-center gap-2 mt-2"
                                >
                                    {isSubmitting ? (
                                        'Processing...'
                                    ) : (
                                        <>
                                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-colors">
                                                <Send className="w-3.5 h-3.5 text-white ml-0.5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
}