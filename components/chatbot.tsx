'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Predefined Q&A knowledge base                                     */
/* ------------------------------------------------------------------ */

interface QA {
    keywords: string[];
    answer: string;
    followUps?: string[];
}

const QA_DATA: QA[] = [
    {
        keywords: ['what is amplit', 'about amplit', 'amplit ai', 'tell me about'],
        answer:
            'Amplit AI builds intelligent voice and workflow agents purpose-built for healthcare practices. We handle missed calls, appointment scheduling, patient intake, and revenue-cycle tasks — so your team can focus on patient care.',
        followUps: ['What is Dentsi?', 'Key features', 'Book a demo'],
    },
    {
        keywords: ['dentsi', 'what is dentsi'],
        answer:
            'Dentsi is our flagship AI voice agent for dental practices. It answers every incoming call 24/7, books appointments in real time, handles rescheduling, and even collects patient details — all in a natural, human-like conversation.',
        followUps: ['How does it work?', 'Pricing', 'Integrations'],
    },
    {
        keywords: ['how does it work', 'how it works', 'process'],
        answer:
            "It's simple: 1️⃣ We connect with your existing phone system & scheduling tools. 2️⃣ Dentsi answers calls your team can't get to. 3️⃣ It books, confirms, and manages appointments automatically. Setup takes less than a day with zero disruption.",
        followUps: ['Integrations', 'Pricing', 'Book a demo'],
    },
    {
        keywords: ['pricing', 'cost', 'price', 'how much'],
        answer:
            "We offer flexible plans tailored to practice size. Pricing depends on call volume and feature set. The best way to get an accurate quote is to book a quick 15-minute demo — we'll walk you through ROI projections too!",
        followUps: ['Book a demo', 'Key features', 'What is Dentsi?'],
    },
    {
        keywords: ['demo', 'book', 'schedule', 'calendly', 'meeting'],
        answer:
            "Great choice! You can book a live demo directly from our website — click the 'Book a Demo' button in the navigation bar, or visit our Calendly link. We'll show you Dentsi in action with a personalised walkthrough.",
        followUps: ['What is Dentsi?', 'How does it work?', 'Key features'],
    },
    {
        keywords: ['features', 'key features', 'what can it do', 'capabilities'],
        answer:
            '✅ 24/7 call answering — zero missed calls\n✅ Real-time appointment booking & rescheduling\n✅ Patient pre-screening & intake\n✅ Automated follow-ups & reminders\n✅ Multi-language support\n✅ Seamless system integration\n✅ Detailed call analytics dashboard',
        followUps: ['Integrations', 'Pricing', 'Book a demo'],
    },
    {
        keywords: ['integration', 'integrations', 'software', 'compatible'],
        answer:
            'Dentsi integrates with major dental practice platforms including Dentrix, Eaglesoft, Open Dental, and more. We also connect with popular VoIP providers and CRM tools. Custom integrations are available for enterprise practices.',
        followUps: ['How does it work?', 'Key features', 'Pricing'],
    },
    {
        keywords: ['support', 'help', 'contact', 'customer service'],
        answer:
            'Our support team is available via email, phone, and live chat during business hours. Enterprise plans include a dedicated success manager. You can also reach us through the contact form on our website.',
        followUps: ['Book a demo', 'What is Amplit AI?', 'Pricing'],
    },
    {
        keywords: ['missed call', 'missed calls', 'never miss'],
        answer:
            'Studies show dental practices miss up to 35% of incoming calls. Each missed call can mean $200+ in lost revenue. Dentsi ensures zero missed calls by answering instantly, 24/7 — even after hours, weekends, and holidays.',
        followUps: ['Key features', 'How does it work?', 'Book a demo'],
    },
    {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
        answer:
            "Hey there! 👋 I'm the Amplit AI assistant. I can tell you about our products, features, pricing, or help you book a demo. What would you like to know?",
        followUps: ['What is Amplit AI?', 'What is Dentsi?', 'Pricing'],
    },
];

const FALLBACK_ANSWER =
    "That's a great question! I don't have a specific answer for that one, but our team would love to help. Book a quick demo and we'll cover everything you need. 🙌";
const FALLBACK_FOLLOWUPS = ['Book a demo', 'What is Amplit AI?', 'Key features'];

const WELCOME_MESSAGE =
    "Hi! 👋 I'm the Amplit AI assistant. Ask me anything about our products, features, or pricing — or tap a suggestion below to get started!";

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

function findAnswer(input: string): { answer: string; followUps: string[] } {
    const lower = input.toLowerCase().trim();
    for (const qa of QA_DATA) {
        if (qa.keywords.some((kw) => lower.includes(kw))) {
            return { answer: qa.answer, followUps: qa.followUps ?? FALLBACK_FOLLOWUPS };
        }
    }
    return { answer: FALLBACK_ANSWER, followUps: FALLBACK_FOLLOWUPS };
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Message {
    id: string;
    role: 'user' | 'bot';
    text: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', role: 'bot', text: WELCOME_MESSAGE },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [quickReplies, setQuickReplies] = useState<string[]>([
        'What is Amplit AI?',
        'What is Dentsi?',
        'How does it work?',
        'Pricing',
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Focus input when panel opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 350);
        }
    }, [isOpen]);

    const handleSend = useCallback(
        (text?: string) => {
            const msg = (text ?? input).trim();
            if (!msg || isTyping) return;

            const userMsg: Message = { id: Date.now().toString(), role: 'user', text: msg };
            setMessages((prev) => [...prev, userMsg]);
            setInput('');
            setIsTyping(true);

            const { answer, followUps } = findAnswer(msg);

            // Simulate typing delay
            setTimeout(() => {
                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    role: 'bot',
                    text: answer,
                };
                setMessages((prev) => [...prev, botMsg]);
                setQuickReplies(followUps);
                setIsTyping(false);
            }, 1200);
        },
        [input, isTyping],
    );

    return (
        <>
            {/* ---- Floating Trigger Button ---- */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        id="chatbot-trigger"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-9999 w-14 h-14 rounded-full bg-brand text-white shadow-lg shadow-brand/30 flex items-center justify-center chatbot-pulse cursor-pointer"
                        aria-label="Open chat"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ---- Chat Panel ---- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="chatbot-panel"
                        initial={{ opacity: 0, y: 24, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-6 right-6 z-9999 w-[370px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-black/6 bg-white"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/6 bg-linear-to-r from-brand/5 to-transparent shrink-0">
                            <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-brand" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[15px] font-semibold text-black leading-tight">
                                    Amplit AI Assistant
                                </p>
                                <p className="text-xs text-brand/70 flex items-center gap-1.5 mt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                    Online
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Close chat"
                            >
                                <X className="w-4 h-4 text-black/50" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
                            style={{ overscrollBehavior: 'contain' }}
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i === messages.length - 1 ? 0.05 : 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[82%] px-4 py-2.5 text-[13.5px] leading-relaxed rounded-2xl whitespace-pre-line ${msg.role === 'user'
                                            ? 'bg-brand text-white rounded-br-md'
                                            : 'bg-black/4 text-black/80 rounded-bl-md'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            <AnimatePresence>
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        className="flex justify-start"
                                    >
                                        <div className="flex items-center gap-1.5 px-4 py-3 bg-black/4 rounded-2xl rounded-bl-md">
                                            <span className="w-2 h-2 rounded-full bg-brand/50 typing-dot" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 rounded-full bg-brand/50 typing-dot" style={{ animationDelay: '200ms' }} />
                                            <span className="w-2 h-2 rounded-full bg-brand/50 typing-dot" style={{ animationDelay: '400ms' }} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Quick Replies */}
                        <AnimatePresence mode="wait">
                            {!isTyping && quickReplies.length > 0 && (
                                <motion.div
                                    key={quickReplies.join(',')}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.25 }}
                                    className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0"
                                >
                                    {quickReplies.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => handleSend(q)}
                                            className="px-3 py-1.5 text-xs font-medium rounded-full border border-brand/20 text-brand hover:bg-brand/5 transition-colors cursor-pointer whitespace-nowrap"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Input Area */}
                        <div className="flex items-center gap-2 px-4 py-3 border-t border-black/6 bg-white shrink-0">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Type a message…"
                                disabled={isTyping}
                                className="flex-1 min-w-0 px-4 py-2.5 text-sm text-black placeholder:text-black/30 bg-black/3 rounded-full border-none outline-none focus:ring-2 focus:ring-brand/20 transition disabled:opacity-50"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim() || isTyping}
                                className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center shrink-0 disabled:opacity-30 hover:bg-brand-dark transition-colors cursor-pointer"
                                aria-label="Send message"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
