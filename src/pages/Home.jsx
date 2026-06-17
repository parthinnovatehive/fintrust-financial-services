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
import Footer from "../components/Footer";

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

export default function Home({onNavigate }) {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const heroRef = useRef(null);

  // States for interactive Feature Matrix Showcase
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Direct Lead Vector Routing parameters
  const clientWhatsAppNumber = "919167070916";
  const clientPhoneLine = "+919167070916";

  // Add this state for the carousel
  const [activeCard, setActiveCard] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Define cards data for the carousel
  const cards = [
    {
      title: "Loan Solutions",
      subtitle: "Simplifying systemic borrowing channels.",
      icon: <Landmark className="w-5 h-5 text-[#0B132B]" />,
      services: [
        "Home Loans", "Business Loans", "Personal Loans",
        "Loan Against Property", "Working Capital Finance",
        "Balance Transfer & Top-Up Loans", "Professional Loans Desk"
      ],
      whatsappMessage: "Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: ",
      exploreMessage: "Hi Fintrust, I'd like to explore your Loan Solutions in detail.",
      exploreText: "Explore all loans"
    },
    {
      title: "Insurance Solutions",
      subtitle: "Premium asset & health shields.",
      icon: <HeartPulse className="w-5 h-5 text-[#0B132B]" />,
      services: [
        "Health Insurance", "Life Insurance", "Term Insurance",
        "Motor Insurance", "Corporate Risk Coverage", "Investment Protection Plans"
      ],
      whatsappMessage: "Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: ",
      exploreMessage: "Hi Fintrust, I'd like to explore your Insurance Solutions in detail.",
      exploreText: "Explore all plans"
    },
    {
      title: "Digital Marketing Suite",
      subtitle: "Result-oriented commercial growth.",
      icon: <BarChart3 className="w-5 h-5 text-[#0B132B]" />,
      services: [
        "Social Media Marketing", "Search Engine Optimization",
        "Google Ads & PPC Funnels", "Website Design & Development",
        "Lead Generation Architecture", "Campaign Management",
        "WhatsApp & Conversational Flow"
      ],
      whatsappMessage: "Hi Fintrust, I'm looking to scale my business infrastructure. Let's discuss your execution models for: ",
      exploreMessage: "Hi Fintrust, I'd like to explore your Digital Marketing solutions in detail.",
      exploreText: "Explore services"
    }
  ];

  // Add auto-play effect
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % cards.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, cards.length]);

  // Pause auto-play on hover/touch
  const pauseAutoPlay = () => setAutoPlay(false);
  const resumeAutoPlay = () => setAutoPlay(true);

  const genericWhatsAppMessage = encodeURIComponent(
    "Hello Fintrust, I just explored your financial and marketing services on the website. I would like to get on a quick advisory call."
  );

  const advantageFeatures = [
    {
      title: "Multiple Bank Partnerships",
      icon: Landmark,
      heading: "Direct Access To 50+ Leading Lending Institutions",
      desc: "Unlike traditional loan consultants who are limited to a handful of lenders, Fintrust maintains active partnerships with a wide network of banks and NBFCs. This allows us to compare eligibility, approval probability, repayment structures, and interest rates across multiple institutions simultaneously.",
      details: [
        "Access to 50+ banks and NBFCs",
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

  // Add these new states for Advantage Matrix enhanced auto-play
  const [autoPlayAdvantage, setAutoPlayAdvantage] = useState(true);
  const [advantageResumeTimer, setAdvantageResumeTimer] = useState(0);
  const advantageTimeoutRef = useRef(null);
  const advantageDuration = 36; // 10 seconds per card for better readability
  const resumeDelay = 10;

  useEffect(() => {
    if (!autoPlayAdvantage) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % advantageFeatures.length);
    }, advantageDuration * 1000);

    return () => clearInterval(interval);
  }, [autoPlayAdvantage, advantageFeatures.length]);

  const handleAdvantageSelect = (idx) => {
    setActiveFeature(idx);

    setAutoPlayAdvantage(false);

    if (advantageTimeoutRef.current) {
      clearTimeout(advantageTimeoutRef.current);
    }

    advantageTimeoutRef.current = setTimeout(() => {
      setAutoPlayAdvantage(true);
    }, resumeDelay * 1000);
  };


  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 antialiased selection:bg-[#00A896]/10 font-sans">

      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE2] px-6 lg:px-16 overflow-hidden pt-24 pb-12"
      >
        {/* Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>')`,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Mouse Glow */}
        <div
          className="absolute hidden lg:block w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x - 300}px`,
            top: `${mousePos.y - 300}px`,
            background: "radial-gradient(circle, rgba(0,168,150,0.2) 0%, rgba(11,19,43,0.05) 60%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse shadow-[0_0_6px_#00A896]" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-600">
                Trusted Financial Advisory
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl xl:text-7xl font-light leading-[1.05] tracking-tight text-[#0B132B]">
              Financing
              <br />
              <span className="font-bold bg-gradient-to-r from-[#00A896] to-[#0B132B] bg-clip-text text-transparent">
                Growth.
              </span>
              <br />
              Building
              <br />
              <span className="font-semibold">Trust.</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base lg:text-lg text-slate-500 leading-relaxed font-light">
              Access institutional lending, insurance advisory, and business growth solutions through one trusted financial partner.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/${clientWhatsAppNumber}?text=${genericWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B132B] text-white font-semibold hover:bg-[#00A896] transition-all duration-300 shadow-lg shadow-[#0B132B]/20 hover:shadow-[#00A896]/30 hover:-translate-y-0.5"
              >
                <span>Speak With Advisor</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`tel:${clientPhoneLine}`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-[#0B132B] font-semibold hover:border-[#00A896] hover:bg-[#00A896]/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Expert Desk</span>
              </a>
            </div>

            {/* Stats Bar - Enhanced */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[#00A896]/30 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-[#0B132B] leading-none">
                  50<span className="text-[#00A896]">+</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Banking Partners
                </div>
                <div className="w-8 h-px bg-[#00A896]/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[#00A896]/30 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-[#0B132B] leading-none">
                  10<span className="text-[#00A896]">K+</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Clients Served
                </div>
                <div className="w-8 h-px bg-[#00A896]/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-[#00A896]/30 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-[#0B132B] leading-none">
                  98<span className="text-[#00A896]">%</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Satisfaction Rate
                </div>
                <div className="w-8 h-px bg-[#00A896]/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 relative">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00A896]/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0B132B]/5 rounded-full blur-[100px]" />

            {/* Main Card */}
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">

              {/* Card Header */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-white to-slate-50/50">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#00A896] font-bold">
                      FINTRUST NETWORK
                    </p>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0B132B] mt-1">
                    Capital Ecosystem
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00A896]/10 border border-[#00A896]/20">
                  <span className="w-1.5 h-1.5 bg-[#00A896] rounded-full animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] font-mono text-[#00A896] font-semibold">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Stats Grid - Top Row - FIXED FOR MOBILE */}
              <div className="grid grid-cols-2 border-b border-slate-100">
                {/* Left Stat - Banking Partners */}
                <div className="px-3 sm:px-6 py-4 sm:py-6 border-r border-slate-100 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B]">
                    50<span className="text-[#00A896]">+</span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 mt-1 sm:mt-2 font-medium">
                    Banking Partners
                  </p>
                  <div className="w-8 sm:w-10 h-px bg-[#00A896]/30 mx-auto mt-2 sm:mt-3" />
                </div>

                {/* Right Stat - Approval */}
                <div className="px-3 sm:px-6 py-4 sm:py-6 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00A896]">
                    98<span className="text-[#0B132B]">%</span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 mt-1 sm:mt-2 font-medium">
                    Approval Rate
                  </p>
                  <div className="w-8 sm:w-10 h-px bg-[#00A896]/30 mx-auto mt-2 sm:mt-3" />
                </div>
              </div>

              {/* Services Grid - Bottom Row - FIXED FOR MOBILE */}
              <div className="grid grid-cols-2">
                {/* Loan Solutions */}
                <div className="px-3 sm:px-6 py-3 sm:py-5 border-r border-slate-100 bg-slate-50/30">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A896]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#0B132B]">Loan Solutions</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
                    Home • Business • LAP • Working Capital
                  </p>
                </div>

                {/* Insurance */}
                <div className="px-3 sm:px-6 py-3 sm:py-5 bg-slate-50/30">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A896]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#0B132B]">Insurance</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
                    Health • Life • Term • Corporate
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Integrated Banking Network
                  </p>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#00A896]">50+ Banks & NBFCs</span>
                </div>
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
                <p className="text-xs text-slate-500 font-light">Connect with our processing desk right now to submit your configuration for instant pre-approval across our 50+ banking partners.</p>
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
              <span className="font-semibold text-[#00A896]">{useCounter(50, 1200, isStatsInView)}</span>+
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

      {/* 5. INTERACTIVE ADVANTAGE MATRIX - CENTERED CARD WITH NAVIGATION */}
      <section className="py-28 px-6 lg:px- 16 bg-[#F4EDE2] border-b border-slate-200 relative">
        <div className="max-w-5xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
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

          {/* Centered Card */}
          <div className="relative">
            <div className="w-full bg-[#0B132B] text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-slate-900/30 border border-slate-800 min-h-[420px] flex flex-col">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Timer bar */}
              {autoPlayAdvantage && (
                <motion.div
                  key={`content-timer-${activeFeature}`}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00A896] to-[#2bc9b0]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: advantageDuration, ease: "linear" }}
                />
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00A896]/20 flex items-center justify-center">
                        {React.createElement(advantageFeatures[activeFeature].icon, { className: "w-5 h-5 text-[#00A896]" })}
                      </div>
                      <span className="text-xs font-mono text-[#00A896]/70 uppercase tracking-wider">
                        {activeFeature + 1} / {advantageFeatures.length}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                      {advantageFeatures[activeFeature].heading}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-base mb-6">
                      {advantageFeatures[activeFeature].desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {advantageFeatures[activeFeature].details.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/5 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] mt-1.5 shrink-0" />
                          <span className="text-sm text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Controls - Centered */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/10">
                    {/* Previous Button */}
                    <button
                      onClick={() => {
                        const prevIndex = activeFeature === 0 ? advantageFeatures.length - 1 : activeFeature - 1;
                        setActiveFeature(prevIndex);
                        setAutoPlayAdvantage(false);
                        if (advantageTimeoutRef.current) clearTimeout(advantageTimeoutRef.current);
                        advantageTimeoutRef.current = setTimeout(() => setAutoPlayAdvantage(true), 10000);
                      }}
                      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      aria-label="Previous"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2 mx-4">
                      {advantageFeatures.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (activeFeature !== idx) {
                              setActiveFeature(idx);
                              setAutoPlayAdvantage(false);
                              if (advantageTimeoutRef.current) clearTimeout(advantageTimeoutRef.current);
                              advantageTimeoutRef.current = setTimeout(() => setAutoPlayAdvantage(true), 10000);
                            }
                          }}
                          className={`transition-all duration-300 rounded-full ${activeFeature === idx
                              ? "w-8 h-2 bg-[#00A896]"
                              : "w-2 h-2 bg-white/30 hover:bg-white/50"
                            }`}
                        />
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => {
                        const nextIndex = (activeFeature + 1) % advantageFeatures.length;
                        setActiveFeature(nextIndex);
                        setAutoPlayAdvantage(false);
                        if (advantageTimeoutRef.current) clearTimeout(advantageTimeoutRef.current);
                        advantageTimeoutRef.current = setTimeout(() => setAutoPlayAdvantage(true), 10000);
                      }}
                      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      aria-label="Next"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature Title Badge - Below Card */}
            <div className="text-center mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sm font-medium text-[#0B132B]">
                <span className="w-2 h-2 rounded-full bg-[#00A896]" />
                {advantageFeatures[activeFeature].title}
              </span>
            </div>
          </div>

          {/* Feature Quick Navigation - Small dots below */}
          <div className="flex justify-center gap-2 mt-6">
            {advantageFeatures.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (activeFeature !== idx) {
                    setActiveFeature(idx);
                    setAutoPlayAdvantage(false);
                    if (advantageTimeoutRef.current) clearTimeout(advantageTimeoutRef.current);
                    advantageTimeoutRef.current = setTimeout(() => setAutoPlayAdvantage(true), 10000);
                  }
                }}
                className={`transition-all duration-300 rounded-full ${activeFeature === idx
                  ? "w-2.5 h-2.5 bg-[#00A896]"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPREHENSIVE SERVICES BLUEPRINT - WITH AUTO-SWIPE CAROUSEL */}
      <section className="py-28 px-6 lg:px-16 bg-[#FAF7F2] border-b border-slate-200 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,168,150,0.03)_0%,transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#0B132B] uppercase">Capabilities Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#0B132B]">
              Bespoke Services <span className="font-semibold bg-gradient-to-r from-[#00A896] to-[#0B132B] bg-clip-text text-transparent">Blueprint</span>
            </h2>
            <p className="text-slate-500 text-sm font-light max-w-lg mx-auto">
              Simple, transparent solutions spanning traditional asset leverage and digital market performance platforms.
            </p>
            <div className="w-12 h-px bg-[#00A896]/50 mx-auto mt-2" />
          </div>

          {/* Desktop: Three Column Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-7">
            {/* LOAN SOLUTIONS */}
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#00A896]/30 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] to-[#0B132B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-7 flex flex-col h-full">
                <div className="relative mb-5">
                  <div className="absolute -inset-2 bg-[#00A896]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A896]/10 to-[#0B132B]/5 flex items-center justify-center border border-[#00A896]/20 group-hover:border-[#00A896]/40 group-hover:bg-[#0B132B] transition-all duration-300">
                    <Landmark className="w-5 h-5 text-[#0B132B] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-[#0B132B] mb-1">Loan Solutions</h3>
                  <p className="text-xs text-slate-500 font-light">Simplifying systemic borrowing channels.</p>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent mb-5" />
                <ul className="space-y-3 flex-1">
                  {["Home Loans", "Business Loans", "Personal Loans", "Loan Against Property", "Working Capital Finance", "Balance Transfer & Top-Up Loans", "Professional Loans Desk"].map((loan, i) => (
                    <li key={i} onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: " + loan)}`, "_blank")} className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer transition-all duration-200 hover:translate-x-1 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A896]/40 group-hover/item:bg-[#00A896] transition-colors" />
                      <span className="group-hover/item:text-[#0B132B] transition-colors">{loan}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'd like to explore your Loan Solutions in detail.")}`, "_blank")} className="inline-flex items-center gap-2 text-xs font-medium text-[#00A896] hover:gap-3 transition-all duration-300">
                    <span>Explore all loans</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* INSURANCE SOLUTIONS */}
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#00A896]/30 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] to-[#0B132B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-7 flex flex-col h-full">
                <div className="relative mb-5">
                  <div className="absolute -inset-2 bg-[#00A896]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A896]/10 to-[#0B132B]/5 flex items-center justify-center border border-[#00A896]/20 group-hover:border-[#00A896]/40 group-hover:bg-[#0B132B] transition-all duration-300">
                    <HeartPulse className="w-5 h-5 text-[#0B132B] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-[#0B132B] mb-1">Insurance Solutions</h3>
                  <p className="text-xs text-slate-500 font-light">Premium asset & health shields.</p>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent mb-5" />
                <ul className="space-y-3 flex-1">
                  {["Health Insurance", "Life Insurance", "Term Insurance", "Motor Insurance", "Corporate Risk Coverage", "Investment Protection Plans"].map((ins, i) => (
                    <li key={i} onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm checking your capabilities catalog and would like details regarding options for: " + ins)}`, "_blank")} className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer transition-all duration-200 hover:translate-x-1 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A896]/40 group-hover/item:bg-[#00A896] transition-colors" />
                      <span className="group-hover/item:text-[#0B132B] transition-colors">{ins}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'd like to explore your Insurance Solutions in detail.")}`, "_blank")} className="inline-flex items-center gap-2 text-xs font-medium text-[#00A896] hover:gap-3 transition-all duration-300">
                    <span>Explore all plans</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* DIGITAL MARKETING SUITE */}
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#00A896]/30 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] to-[#0B132B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-7 flex flex-col h-full">
                <div className="relative mb-5">
                  <div className="absolute -inset-2 bg-[#00A896]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A896]/10 to-[#0B132B]/5 flex items-center justify-center border border-[#00A896]/20 group-hover:border-[#00A896]/40 group-hover:bg-[#0B132B] transition-all duration-300">
                    <BarChart3 className="w-5 h-5 text-[#0B132B] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-[#0B132B] mb-1">Digital Marketing Suite</h3>
                  <p className="text-xs text-slate-500 font-light">Result-oriented commercial growth.</p>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent mb-5" />
                <ul className="space-y-3 flex-1">
                  {["Social Media Marketing", "Search Engine Optimization", "Google Ads & PPC Funnels", "Website Design & Development", "Lead Generation Architecture", "Campaign Management", "WhatsApp & Conversational Flow"].map((mkt, i) => (
                    <li key={i} onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'm looking to scale my business infrastructure. Let's discuss your execution models for: " + mkt)}`, "_blank")} className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer transition-all duration-200 hover:translate-x-1 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A896]/40 group-hover/item:bg-[#00A896] transition-colors" />
                      <span className="group-hover/item:text-[#0B132B] transition-colors truncate">{mkt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent("Hi Fintrust, I'd like to explore your Digital Marketing solutions in detail.")}`, "_blank")} className="inline-flex items-center gap-2 text-xs font-medium text-[#00A896] hover:gap-3 transition-all duration-300">
                    <span>Explore services</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Auto-Swiping Carousel */}
          <div className="lg:hidden relative">
            {/* Carousel Container */}
            <div className="overflow-hidden relative">
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                animate={{ x: `-${activeCard * 100}%` }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: -((cards.length - 1) * 100), right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold && activeCard < cards.length - 1) {
                    setActiveCard(activeCard + 1);
                  } else if (info.offset.x > swipeThreshold && activeCard > 0) {
                    setActiveCard(activeCard - 1);
                  }
                }}
              >
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 px-4"
                    style={{ width: '100%' }}
                  >
                    <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] to-[#0B132B]" />
                      <div className="p-6 flex flex-col h-full">
                        {/* Icon Section */}
                        <div className="relative mb-4">
                          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A896]/10 to-[#0B132B]/5 flex items-center justify-center border border-[#00A896]/20">
                            {card.icon}
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-[#0B132B] mb-1">{card.title}</h3>
                          <p className="text-xs text-slate-500 font-light">{card.subtitle}</p>
                        </div>

                        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent mb-4" />

                        {/* Services List */}
                        <ul className="space-y-2.5 flex-1">
                          {card.services.map((service, i) => (
                            <li
                              key={i}
                              onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent(card.whatsappMessage + service)}`, "_blank")}
                              className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer transition-all duration-200 hover:translate-x-1 group/item"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00A896]/40 group-hover/item:bg-[#00A896] transition-colors" />
                              <span className="group-hover/item:text-[#0B132B] transition-colors text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Footer Link */}
                        <div className="mt-5 pt-3 border-t border-slate-100">
                          <button
                            onClick={() => window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent(card.exploreMessage)}`, "_blank")}
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#00A896] hover:gap-3 transition-all duration-300"
                          >
                            <span>{card.exploreText}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  className={`transition-all duration-300 rounded-full ${activeCard === idx
                    ? "w-8 h-2 bg-[#00A896]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>

            {/* Auto-play Timer Indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16">
              <div className="h-0.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#00A896] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  onAnimationComplete={() => {
                    if (autoPlay) {
                      setActiveCard((prev) => (prev + 1) % cards.length);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-[10px] text-slate-500">Trusted by 10,000+ clients</span>
              </div>
              <div className="w-px h-3 bg-slate-200" />
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-[10px] text-slate-500">50+ banking partners</span>
              </div>
              <div className="w-px h-3 bg-slate-200" />
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-[10px] text-slate-500">98% client satisfaction</span>
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

      {/* 9. PROFESSIONAL MULTI-SECTION FOOTER */}
      <Footer onNavigate={onNavigate} />

      <WhatsAppButton activePage="home" />
    </div>
  );
}