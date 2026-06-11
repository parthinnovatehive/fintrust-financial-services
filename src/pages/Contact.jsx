import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [countryCode, setCountryCode] = useState("+91");
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    service: "loan", 
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    // Form submission payload handler via Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c89ab240-725c-4aac-a377-db845b6a207c",
          name: formState.name,
          email: formState.email,
          // Concat code with the numeric phone payload cleanly
          phone: `${countryCode} ${formState.phone}`,
          subject: `Fintrust Strategy Lead: ${formState.name} (${formState.service})`,
          segment: formState.service,
          message: formState.message,
          consent_given: formState.consent ? "Yes" : "No"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Clear inputs after an elegant response transition
        setFormState({ name: "", email: "", phone: "", service: "loan", message: "", consent: false });
      } else {
        setSubmissionError("Network error: Unable to transmit information docket. Please try again.");
      }
    } catch (error) {
      setSubmissionError("Server verification offline. Please contact solutions@fintrust.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if current Indian Standard Time falls within corporate operational bounds (9 AM - 6:30 PM)
  const isOfficeOpen = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const currentTime = hours + minutes / 60;
    return currentTime >= 9 && currentTime <= 18.5;
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Corporate Information Architecture */}
        <div className="lg:col-span-5 space-y-10 lg:sticky top-32">
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
              Connect With Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-brand-navy leading-none">
              Let's build your <br />
              <span className="font-semibold text-brand-blue">growth roadmap.</span>
            </h1>
            <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed">
              Simple, transparent procedures. Reach out directly to initiate premium financial scaling or dynamic marketing framework mapping.
            </p>
          </div>

          {/* Real-time Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-sm border border-slate-200/40 text-xs font-light">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isOfficeOpen() ? "bg-emerald-500" : "bg-amber-500"}`} />
            <span className="text-slate-600">
              {isOfficeOpen() ? "Consultation Lines Active: Connect Live" : "Outside Standard Corporate Hours"}
            </span>
          </div>

          {/* Contact Direct Line Vectors */}
          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue rounded-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Direct Line</span>
                <a href="tel:+919876543210" className="text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors font-mono">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center text-brand-gold rounded-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Corporate Inquiries</span>
                <a href="mailto:solutions@fintrust.com" className="text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors font-mono">
                  solutions@fintrust.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-slate-900/5 border border-slate-900/10 flex items-center justify-center text-brand-navy rounded-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HQ Operations</span>
                <p className="text-sm font-light text-slate-600 leading-relaxed max-w-xs">
                  InnovateHive Corporate Zone, Premier Business Park, Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Lead Capture Form Engine */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 lg:p-12 rounded-sm shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-digital" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Full Name</label>
                <input
                  type="text" required placeholder="John Doe"
                  value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all disabled:opacity-60"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Email Address</label>
                <input
                  type="email" required placeholder="john@company.com"
                  value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all disabled:opacity-60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input with Integrated Country Code Dropdown Selector */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Phone Number</label>
                <div className="flex rounded-sm overflow-hidden focus-within:border-brand-blue border border-slate-200 transition-all">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    disabled={isSubmitting}
                    className="px-3 bg-slate-100 border-r border-slate-200 text-sm font-light text-slate-600 focus:outline-none cursor-pointer disabled:opacity-60"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input
                    type="tel" 
                    required 
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile phone number without spaces or symbols."
                    placeholder="9876543210"
                    value={formState.phone} 
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value.replace(/\D/g, "") })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-50 text-sm font-light focus:outline-none focus:bg-white font-mono disabled:opacity-60"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Requested Segment</label>
                <select
                  value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm font-light text-slate-600 rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all cursor-pointer disabled:opacity-60"
                >
                  <option value="loan">Loan Solutions & Borrowing Channels</option>
                  <option value="insurance">Insurance Plans & Wealth Protection</option>
                  <option value="digital">Digital Marketing & Performance Growth</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Message / Details of Requirement</label>
              <textarea
                rows="4" required placeholder="Tell us briefly about your financial requirements or business goals..."
                value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm font-light rounded-sm focus:outline-none focus:border-brand-blue focus:bg-white transition-all resize-none disabled:opacity-60"
              />
            </div>

            {/* Legal Consent Line Item Component */}
            <div className="space-y-2 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  required
                  checked={formState.consent}
                  onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer disabled:opacity-60"
                />
                <span className="text-xs font-light text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                  I agree to the{" "}
                  <a href="/privacy" className="text-brand-blue font-medium hover:underline">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="/terms" className="text-brand-blue font-medium hover:underline">Terms & Conditions</a>
                  , and explicit consent to receive messages via SMS, WhatsApp, and RCS protocols. Message & data rates may apply.
                </span>
              </label>
            </div>

            {submissionError && (
              <div className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-sm border border-red-100">
                {submissionError}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-light text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>Encrypted end-to-end data transmission</span>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-brand-navy text-white text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-brand-blue transition-colors cursor-pointer flex items-center gap-2 group disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Transmitting..." : "Request Free Strategy Call"}</span>
                {!isSubmitting && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>

          {/* Elegant Floating Form Success Toast Alert */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-20"
            >
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center rounded-full mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy">Strategy Docket Received</h3>
              <p className="text-xs text-slate-500 font-light max-w-sm mt-1 leading-relaxed">
                Thank you! Your strategic consultation query has been logged. A Fintrust representative will review your segment preference and reach out within 2 business hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}