"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, BrainCircuit, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

const FormInput = ({ label, id, error, ...props }: FormInputProps) => (
  <div className="relative group">
    <label
      htmlFor={id}
      className="block text-[13px] font-medium text-gray-600 mb-1 ml-0.5 transition-colors group-focus-within:text-brand"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className={`w-full px-4 py-2.5 sm:py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-gray-300 text-black text-sm ${
        error
          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
          : "border-gray-200 hover:border-gray-300"
      }`}
    />
    {error && (
      <p className="text-red-500 text-[11px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
        {error}
      </p>
    )}
  </div>
);

type FieldErrors = Partial<Record<string, string>>;

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    chairs: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (value.trim().length > 100) return "Name is too long";
        if (!/^[a-zA-Z\s.'\-]+$/.test(value.trim()))
          return "Name contains invalid characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Enter a valid email address";
        if (value.trim().length > 254) return "Email is too long";
        return "";
      case "phone":
        if (value.trim() && !/^[+]?[\d\s().\-]{7,20}$/.test(value.trim()))
          return "Enter a valid phone number";
        return "";
      case "company":
        if (!value.trim()) return "Practice name is required";
        if (value.trim().length < 2)
          return "Practice name must be at least 2 characters";
        if (value.trim().length > 150) return "Practice name is too long";
        return "";
      case "chairs":
        if (!value.trim()) return "Number of chairs is required";
        return "";
      case "interestedIn":
        if (!value.trim()) return "Please tell us what you are interested in";
        if (value.trim().length > 200) return "Text is too long";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.trim().length > 2000)
          return "Message must be under 2000 characters";
        return "";
      default:
        return "";
    }
  };

  const validateAll = (): boolean => {
    const errors: FieldErrors = {};
    const requiredFields = ['name', 'email', 'company', 'chairs', 'interestedIn', 'message'];
    for (const [key, value] of Object.entries(formState)) {
      const err = validateField(key, value);
      if (err) errors[key] = err;
    }
    setFieldErrors(errors);
    // Only mark required fields (and any with actual errors) as touched
    const newTouched: Record<string, boolean> = {};
    for (const key of requiredFields) {
      newTouched[key] = true;
    }
    setTouched(newTouched);

    if (Object.keys(errors).length > 0) {
      setErrorMsg('Please fill in all required fields correctly.');
      return false;
    }
    return true;
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setFieldErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFieldErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formState[field as keyof typeof formState]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMsg("");
        setFieldErrors({});
        setTouched({});
        setFormState({
          name: "",
          email: "",
          company: "",
          phone: "",
          chairs: "",
          interestedIn: "",
          message: "",
        });
      }, 400);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="flex flex-col
        max-h-[95dvh] sm:max-h-[88vh]
        sm:w-full sm:max-w-145!
        overflow-hidden bg-white
        rounded-t-2xl sm:rounded-2xl
        border-0
        shadow-2xl
        p-0"
      >
        {/* Drag indicator — mobile only */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 sm:top-4 sm:right-4 z-50
          w-8 h-8 rounded-full
          bg-gray-100/80 hover:bg-gray-200
          flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        <div className="flex-1 overflow-y-auto px-5 sm:px-8 pb-6 pt-2 sm:py-8">
          <DialogHeader className="mb-4 sm:mb-5">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-brand/10 items-center justify-center mb-3">
              <BrainCircuit className="w-5 h-5 text-brand" />
            </div>

            <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 pr-8">
              Let&apos;s talk about your practice
            </DialogTitle>

            <DialogDescription className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 2 hours.
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
                  We&apos;ve sent a confirmation to your email. One of our
                  experts will reach out shortly.
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
                className="space-y-3 sm:space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormInput
                    label="Full Name"
                    id="name"
                    type="text"
                    required
                    placeholder="Dr. Sarah Johnson"
                    maxLength={100}
                    value={formState.name}
                    error={touched.name ? fieldErrors.name : undefined}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                  />
                  <FormInput
                    label="Work Email"
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@practice.com"
                    maxLength={254}
                    value={formState.email}
                    error={touched.email ? fieldErrors.email : undefined}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormInput
                    label="Mobile Number"
                    id="phone"
                    type="tel"
                    placeholder="e.g. (555) 123-4567"
                    maxLength={20}
                    value={formState.phone}
                    error={touched.phone ? fieldErrors.phone : undefined}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                  />
                  <FormInput
                    label="Practice Name"
                    id="company"
                    type="text"
                    required
                    placeholder="Smile Dental Clinic"
                    maxLength={150}
                    value={formState.company}
                    error={touched.company ? fieldErrors.company : undefined}
                    onChange={(e) =>
                      handleFieldChange("company", e.target.value)
                    }
                    onBlur={() => handleBlur("company")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormInput
                    label="Number of Chairs"
                    id="chairs"
                    type="text"
                    required
                    placeholder="1-3, 4-7, 8+"
                    value={formState.chairs}
                    error={touched.chairs ? fieldErrors.chairs : undefined}
                    onChange={(e) =>
                      handleFieldChange("chairs", e.target.value)
                    }
                    onBlur={() => handleBlur("chairs")}
                  />
                  <FormInput
                    label="Interested In"
                    id="interestedIn"
                    type="text"
                    required
                    placeholder="Voice AI Receptionist"
                    maxLength={200}
                    value={formState.interestedIn}
                    error={
                      touched.interestedIn
                        ? fieldErrors.interestedIn
                        : undefined
                    }
                    onChange={(e) =>
                      handleFieldChange("interestedIn", e.target.value)
                    }
                    onBlur={() => handleBlur("interestedIn")}
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-gray-600 mb-1 ml-0.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={2}
                    maxLength={2000}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none text-black text-sm ${
                      touched.message && fieldErrors.message
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="Tell us a bit about your practice..."
                    value={formState.message}
                    onChange={(e) =>
                      handleFieldChange("message", e.target.value)
                    }
                    onBlur={() => handleBlur("message")}
                  />
                  {touched.message && fieldErrors.message && (
                    <p className="text-red-500 text-[11px] mt-1 ml-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm text-center bg-red-50 rounded-2xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-3 sm:py-3.5 text-sm
                  bg-brand text-white font-medium rounded-4xl
                  hover:shadow-lg hover:shadow-brand/20 transition-all disabled:opacity-50
                  flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Processing..."
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
