import { useEffect, useState, useRef } from "react";
import React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import InteractiveSuite from "../components/InteractiveSuite.jsx";
import AppleWatchGrid from "../components/AppleWatchGrid/AppleWatchGrid";
import {
  Shield,
  BarChart3,
  Globe,
  Building2,
  Users,
  Landmark,
  Award,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Compass,
  Target,
  Gem,
  Zap,
  Percent,
  FileText,
  Eye,
  MessageCircle,
  PhoneCall
} from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import EthosSection from "../components/EthosSection";

/* Modern Counter Hook */
function useCounter(end, duration = 1500, isInView = true) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
}

export default function Home() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const heroRef = useRef(null);

  // States for interactive Feature Matrix Showcase
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Direct Lead Vector Routing parameters
  const clientWhatsAppNumber = "919876543210";
  const clientPhoneLine = "+919876543210";

  const genericWhatsAppMessage = encodeURIComponent(
    "Hello Fintrust, I just explored your financial and marketing services on the website. I would like to get on a quick advisory call."
  );

  const advantageFeatures = [
    {
      title: "Multiple Bank Partnerships",
      icon: Landmark,
      heading: "Direct Access To 15+ Leading Lending Institutions",
      desc: "Unlike traditional loan consultants who are limited to a handful of lenders, Fintrust maintains active partnerships with a wide network of banks and NBFCs. This allows us to compare eligibility, approval probability, repayment structures, and interest rates across multiple institutions simultaneously.",
      details: [
        "Access to 15+ banks and NBFCs",
        "Multiple offers compared simultaneously",
        "Higher approval probability",
        "Customized lender matching"
      ]
    },
    {
      title: "Quick Loan Processing",
      icon: Zap,
      heading: "Accelerated Approval & Disbursement Process",
      desc: "Our internal pre-screening and documentation framework eliminates unnecessary delays before your application reaches the lender. By identifying potential issues early, we help reduce processing time and improve overall approval efficiency.",
      details: [
        "Fast document verification",
        "Reduced processing delays",
        "Pre-screened applications",
        "Dedicated application tracking"
      ]
    },
    {
      title: "Competitive Interest Rates",
      icon: Percent,
      heading: "Optimized Financing At Competitive Rates",
      desc: "Because we work with multiple lending partners, we are able to negotiate and identify the most suitable financing options available in the market. This helps clients secure better repayment structures and lower borrowing costs whenever possible.",
      details: [
        "Market-wide comparison",
        "Lower financing costs",
        "Flexible repayment structures",
        "Better loan affordability"
      ]
    },
    {
      title: "Data-Driven Campaign Mgmt",
      icon: BarChart3,
      heading: "Performance-Focused Growth Strategies",
      desc: "For business clients, Fintrust combines financial expertise with modern digital marketing systems. We use analytics, customer insights, and performance tracking to create campaigns that generate measurable business growth.",
      details: [
        "ROI-focused campaigns",
        "Lead generation systems",
        "Customer analytics",
        "Performance optimization"
      ]
    },
    {
      title: "Transparent & Ethical Practices",
      icon: Eye,
      heading: "Complete Transparency In Every Transaction",
      desc: "Trust is the foundation of our business. We maintain complete transparency regarding fees, lender requirements, documentation, timelines, and recommendations so that clients can make informed financial decisions with confidence.",
      details: [
        "No hidden charges",
        "Clear process visibility",
        "Ethical recommendations",
        "Transparent communication"
      ]
    },
    {
      title: "End-to-End Doc Support",
      icon: FileText,
      heading: "Dedicated Documentation Assistance",
      desc: "Financial documentation can often be overwhelming. Our team assists clients throughout the process, ensuring that paperwork is complete, accurate, and compliant with lender requirements, reducing stress and avoiding delays.",
      details: [
        "Complete documentation support",
        "Application preparation",
        "Compliance assistance",
        "Reduced paperwork burden"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prevIndex) => (prevIndex + 1) % advantageFeatures.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeFeature, advantageFeatures.length]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 antialiased selection:bg-[#00A896]/10 font-sans">

      {/* 1. HERO SECTION */}
      <section
  ref={heroRef}
  onMouseMove={handleMouseMove}
  className="relative min-h-screen flex items-center bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE2] px-6 lg:px-16 overflow-hidden pt-24 pb-5"
>
  {/* Texture */}
  <div
    className="absolute inset-0 opacity-[0.02] pointer-events-none"
    style={{
      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>')`,
    }}
  />

  {/* Mouse Glow */}
  <div
    className="absolute hidden lg:block w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
    style={{
      left: `${mousePos.x - 300}px`,
      top: `${mousePos.y - 300}px`,
      background:
        "radial-gradient(circle, rgba(0,168,150,0.25) 0%, rgba(11,19,43,0.08) 60%, transparent 100%)",
    }}
  />

  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-20 items-center relative z-10">

    {/* LEFT */}
    <div className="lg:col-span-6">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
        <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-600">
          Trusted Financial Advisory
        </span>
      </div>

      <h1 className="text-5xl lg:text-7xl font-light leading-[0.95] tracking-tight text-[#0B132B]">
        Financing
        <br />
        <span className="font-semibold text-[#00A896]">
          Growth.
        </span>
        <br />
        Building
        <br />
        Trust.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-slate-600 leading-relaxed font-light">
        Access institutional lending, insurance advisory, and business
        growth solutions through one trusted financial partner.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        <a
          href={`https://wa.me/${clientWhatsAppNumber}?text=${genericWhatsAppMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-[#0B132B] text-white font-medium hover:bg-[#00A896] transition-all duration-300 shadow-xl"
        >
          Speak With Advisor
        </a>

        <a
          href={`tel:${clientPhoneLine}`}
          className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0B132B] font-medium hover:border-slate-400 transition-all duration-300"
        >
          Call Expert Desk
        </a>

      </div>

      {/* Premium Stats Bar */}
<div className="grid grid-cols-3 gap-4 mt-12">

  <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-5 shadow-sm">
    <div className="text-4xl font-light text-[#0B132B] leading-none">
      15<span className="text-[#00A896]">+</span>
    </div>
    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-medium">
      Lending Partners
    </div>
  </div>

  <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-5 shadow-sm">
    <div className="text-4xl font-light text-[#0B132B] leading-none">
      10<span className="text-[#00A896]">K+</span>
    </div>
    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-medium">
      Clients Served
    </div>
  </div>

  <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-5 shadow-sm">
    <div className="text-4xl font-light text-[#0B132B] leading-none">
      98<span className="text-[#00A896]">%</span>
    </div>
    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-medium">
      Client Satisfaction
    </div>
  </div>

</div>

    </div>

    {/* RIGHT */}
    <div className="lg:col-span-6 relative">

      <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#00A896]/10 rounded-full blur-[120px]" />

      <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#00A896] font-bold">
              FINTRUST NETWORK
            </p>

            <h3 className="text-xl font-semibold text-[#0B132B] mt-1">
              Capital Ecosystem
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00A896] rounded-full animate-pulse" />
            <span className="text-xs text-slate-500">
              Live
            </span>
          </div>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2">

          <div className="p-8 border-r border-b border-slate-100">
            <div className="text-5xl font-light text-[#0B132B]">
              15+
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-3">
              Lending Partners
            </p>
          </div>

          <div className="p-8 border-b border-slate-100">
            <div className="text-5xl font-light text-[#00A896]">
              98%
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-3">
              Approval Success
            </p>
          </div>

          <div className="p-8 border-r border-slate-100">
            <div className="text-xl font-medium text-[#0B132B]">
              Loan Solutions
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Home • Business • LAP
            </p>
          </div>

          <div className="p-8">
            <div className="text-xl font-medium text-[#0B132B]">
              Insurance
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Health • Life • Corporate
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-slate-50 border-t border-slate-100">

          <p className="text-xs text-slate-500">
            Integrated Banking Network of 50+ banks
          </p>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute -right-6 top-20 bg-[#0B132B] text-white px-6 py-5 rounded-2xl shadow-2xl border border-[#00A896]/20">
        <div className="text-4xl font-light text-[#00A896]">
          ₹500Cr+
        </div>

        <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">
          Capital Facilitated
        </div>

      </div>

    </div>

  </div>
</section>

      {/* 2. INTERACTIVE CALCULATOR SUITE WITH SYSTEMIC LEAD CTAs */}
<section className="bg-white py-20 border-b border-slate-200/60 relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">
    <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
      <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase block">Instant Eligibility Estimator</span>
      <h2 className="text-3xl font-light tracking-tight text-[#0B132B]">Configure Your Financing Structure</h2>
      <p className="text-slate-500 text-sm font-light">Adjust the metrics below to view estimated monthly repayment plans instantly.</p>
    </div>
    
    {/* Main Core Component Frame Container */}
    <div className="bg-[#FAF7F2] p-4 sm:p-8 rounded-2xl border border-slate-200/70 shadow-sm">
      
      {/* Renders your EMI Calculator UI */}
      <InteractiveSuite />
      
      {/* ⚡ THE CONVERSION ENGINE: Captures intent and generates the custom message link */}
      <div className="mt-8 pt-8 border-t border-slate-200/70 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <h4 className="text-sm font-semibold text-[#0B132B] mb-1">Satisfied with these calculations?</h4>
          <p className="text-xs text-slate-500 font-light">Connect with our processing desk right now to submit your configuration for instant pre-approval across our 15+ banking partners.</p>
        </div>
        <div className="md:col-span-5 flex flex-col sm:flex-row gap-3 justify-end w-full">
          <button
            onClick={() => {
              // 1. Attempt to scrape current visual slider totals dynamically from the browser DOM safely 
              // (This acts as an overlay catcher so you don't have to rewrite your child component's internal state)
              const displayElements = document.querySelectorAll('.bg-white, .text-3xl, .font-semibold');
              let capturedDetails = "the values configured on the matrix panel";
              
              // If your calculator text uses common currency layouts, we scrape them seamlessly
              const numbers = Array.from(document.querySelectorAll('h3, span, p, input'))
                .map(el => el.innerText || el.value || '')
                .filter(txt => txt.includes('₹') || txt.includes('%') || txt.includes('yrs') || txt.includes('months'));

              if (numbers.length > 0) {
                // Creates a clean readable list from whatever numbers are currently active on screen
                capturedDetails = numbers.slice(0, 4).join(', ');
              }

              const customWhatsAppText = `Hi Fintrust, I just used your EMI calculator tool and want to verify/apply for a loan with these estimated terms: (${capturedDetails}). Please guide me through the document submission blueprint!`;
              
              // 2. Fire the deep-link redirection line
              window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent(customWhatsAppText)}`, '_blank');
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg.5 bg-[#128C7E] text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#075E54] transition-all shadow-md shadow-emerald-900/10 cursor-pointer w-full sm:w-auto"
          >
            {/* Standard Vector Representation matching official identity updates */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Lock This Rate</span>
          </button>
          
          <a
            href={`tel:${clientPhoneLine}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B132B] text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 w-full sm:w-auto text-center"
          >
            <span>Speak to Consultant</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. APPLE WATCH GRID */}
      <AppleWatchGrid />

      {/* 4. METRICS SECTION */}
      <section 
        ref={statsRef} 
        className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-[#0B132B] text-white px-6 lg:px-16 relative overflow-hidden -mt-12 lg:-mt-24 z-30"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-2">
              <span className="font-semibold text-[#00A896]">{useCounter(15, 1200, isStatsInView)}</span>+
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Banking Partners</p>
          </div>
          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-2">
              <span className="font-semibold text-[#00A896]">{useCounter(10, 1200, isStatsInView)}</span>K+
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Engaged Clients</p>
          </div>
          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-2">
              <span className="font-semibold text-[#00A896]">{useCounter(5, 1200, isStatsInView)}</span>x
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Average Marketing ROI</p>
          </div>
          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-2">
              <span className="font-semibold text-[#00A896]">{useCounter(98, 1200, isStatsInView)}</span>%
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Retention Metric</p>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ADVANTAGE MATRIX WITH CLEAN 3s AUTO-PLAY */}
      <section className="py-28 px-6 lg:px-16 bg-[#F4EDE2] border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase block">
                The Advantage Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#0B132B]">
              Why Market Leaders <span className="font-semibold">Choose Fintrust</span>
            </h2>
            <p className="text-slate-500 text-sm font-light">
              We combine extensive banking partnerships with custom-engineered data acquisition tools to deliver secure capital scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-2.5">
              {advantageFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                const isSelected = activeFeature === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden relative ${
                      isSelected
                        ? "bg-white border-slate-300 shadow-md translate-x-2"
                        : "bg-transparent border-transparent hover:bg-white/40 hover:border-slate-200"
                    }`}
                  >
                    {isSelected && (
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-[2px] bg-[#00A896]"
                      />
                    )}

                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${
                      isSelected ? "bg-[#0B132B] border-[#0B132B] text-white" : "bg-white border-slate-200 text-slate-600"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className={`text-sm font-medium tracking-tight transition-colors ${
                      isSelected ? "text-[#0B132B] font-semibold" : "text-slate-600"
                    }`}>
                      {feat.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <div className="w-full bg-[#0B132B] text-white rounded-2xl p-10 relative overflow-hidden shadow-2xl shadow-slate-900/30 border border-slate-800 min-h-[400px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 h-full flex flex-col justify-center"
                  >
                    <h3 className="text-3xl font-semibold text-white mb-6">
                      {advantageFeatures[activeFeature].heading}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-base max-w-2xl mb-8">
                      {advantageFeatures[activeFeature].desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {advantageFeatures[activeFeature].details.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00A896] mt-2 shrink-0" />
                          <span className="text-sm text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPREHENSIVE SERVICES BLUEPRINT */}
      <section className="py-28 px-6 lg:px-16 bg-[#FAF7F2] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase block">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl font-light tracking-tight text-[#0B132B]">
              Bespoke Services <span className="font-semibold">Blueprint</span>
            </h2>
            <p className="text-slate-500 text-sm font-light">
              Simple, transparent solutions spanning traditional asset leverage and digital market performance platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LOAN SOLUTIONS */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 bg-slate-50 rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#0B132B] group-hover:text-white transition-all">
                  <Landmark className="w-5 h-5 text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#0B132B] mb-2">Loan Solutions</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Simplifying systemic borrowing channels.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-3.5">
                  {[
                    "Home Loans", "Business Loans", "Personal Loans",
                    "Loan Against Property", "Working Capital Finance",
                    "Balance Transfer & Top-Up Loans", "Professional Loans Desk"
                  ].map((loan, i) => (
                    <li 
                      key={i} 
                      onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: " + loan)}`, "_blank")}
                      className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#00A896] transition-colors" />
                      <span>{loan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* INSURANCE SOLUTIONS */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 bg-slate-50 rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#0B132B] group-hover:text-white transition-all">
                  <HeartPulse className="w-5 h-5 text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#0B132B] mb-2">Insurance Solutions</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Premium asset & health shields.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-3.5">
                  {[
                    "Health Insurance", "Life Insurance", "Term Insurance",
                    "Motor Insurance", "Corporate Risk Coverage", "Investment Protection Plans"
                  ].map((ins, i) => (
                    <li 
                      key={i} 
                      onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: " + ins)}`, "_blank")}
                      className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#00A896] transition-colors" />
                      <span>{ins}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DIGITAL MARKETING SERVICES */}
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 bg-slate-50 rounded-lg flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#0B132B] group-hover:text-white transition-all">
                  <BarChart3 className="w-5 h-5 text-slate-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#0B132B] mb-2">Digital Marketing Suite</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Result-oriented commercial growth.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-3.5">
                  {[
                    "Social Media Marketing", "Search Engine Optimization",
                    "Google Ads & PPC Funnels", "Website Design & Development",
                    "Lead Generation Architecture", "Campaign Management",
                    "WhatsApp & Conversational Flow"
                  ].map((mkt, i) => (
                    <li 
                      key={i} 
                      onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm looking to scale my business infrastructure. Let's discuss your execution models for: " + mkt)}`, "_blank")}
                      className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#00A896] transition-colors" />
                      <span className="truncate">{mkt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT FINTRUST SECTION */}
      <section className="py-28 px-6 lg:px-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase block">
              Corporate Overview
            </span>
            <h2 className="text-3xl font-light tracking-tight text-[#0B132B] leading-tight">
              About Fintrust <br /><span className="font-semibold">Financial Services</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#00A896] mt-4" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 font-light leading-relaxed text-base">
            <p>
              Fintrust Financial Services is a trusted financial consultancy dedicated to helping individuals, professionals, and businesses achieve their financial goals through customized loan and insurance solutions. With a customer-first approach, we simplify the borrowing process and provide expert guidance at every single deployment phase.
            </p>
            <p>
              We work alongside leading Indian banks, NBFCs, and insurance partners to offer premium financial products tailored directly to unique multi-channel profiles. Our core commitment is to deliver transparent advice, fast processing speeds, and entirely hassle-free project processing.
            </p>
          </div>
        </div>
      </section>

      {/* 8. ETHOS SECTION */}
      <EthosSection />

      {/* 9. MINIMALIST LUXURY FOOTER */}
      <footer className="py-12 bg-[#FAF7F2] border-t border-slate-200 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-light">
          <div>
            <span className="font-semibold text-[#0B132B]">Fintrust</span> Financial Services Matrix
          </div>
          <p>© {new Date().getFullYear()} Fintrust. Built for Institutional Scaling & Digital Growth.</p>
        </div>
      </footer>
      
      <WhatsAppButton activePage="home" />
    </div>
  );
}