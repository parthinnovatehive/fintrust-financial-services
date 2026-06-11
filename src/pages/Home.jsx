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
  Eye
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

  const advantageFeatures = [
    {
      title: "Multiple Bank Partnerships",
      icon: Landmark,
      tag: "NETWORKS",
      heading: "Direct Tier-1 Institutional Integrations",
      desc: "We route capital requirements across 15+ premier banking networks simultaneously to lock down optimal capital placement rates effortlessly.",
    },
    {
      title: "Quick Loan Processing",
      icon: Zap,
      tag: "SPEED",
      heading: "Automated Verification Frameworks",
      desc: "Skip legacy corporate bottlenecks. Our direct pipeline integration cuts down loan onboarding time frames by up to 65%.",
    },
    {
      title: "Competitive Interest Rates",
      icon: Percent,
      tag: "OPTIMIZATION",
      heading: "Market-Leading Alpha Arbitrage",
      desc: "By leveraging systemic balance sheets across multiple corporate entities, we pull down capital costs below industry standard baselines.",
    },
    {
      title: "Data-Driven Campaign Mgmt",
      icon: BarChart3,
      tag: "PERFORMANCE",
      heading: "Hyper-Targeted B2B Customer Scaling",
      desc: "We run multi-channel intent validation algorithms to source high-intent leads, tracking customer conversion patterns metrics live.",
    },
    {
      title: "Transparent & Ethical Practices",
      icon: Eye,
      tag: "COMPLIANCE",
      heading: "Zero Hidden-Fee Frameworks",
      desc: "Full visibility contracts governed by strict fiduciary standards ensure your scaling efforts face zero structural legal surprises.",
    },
    {
      title: "End-to-End Doc Support",
      icon: FileText,
      tag: "CONCIERGE",
      heading: "Complete Administrative Concierge",
      desc: "From initial entity formatting to final compliance validation audits, our legal desks manage the paperwork burden seamlessly.",
    },
  ];

  // --- AUTOMATIC 3-SECOND ROTATION LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prevIndex) => (prevIndex + 1) % advantageFeatures.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(timer); // Clears the timer loop when component unmounts or activeFeature updates
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
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 antialiased selection:bg-brand-blue/10 font-sans">

      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE2] px-6 lg:px-16 overflow-hidden pt-24 border-b border-slate-200/50"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>')`
          }}
        />

        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-[140px] opacity-20 mix-blend-multiply transition-all duration-300 ease-out hidden lg:block bg-gradient-to-r from-[#00A896] to-[#0d2149]"
          style={{
            left: `${mousePos.x - 300}px`,
            top: `${mousePos.y - 300}px`,
          }}
        />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
              <span className="text-slate-700 text-[10px] font-semibold uppercase tracking-widest">
                Institutional Capital × Digital Performance
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#0B132B] leading-[1.1]">
              Architecting secure <br />
              <span className="font-semibold text-[#00A896]">financial pathways</span> <br />
              & digital market scale.
            </h1>

            <p className="text-base text-slate-600 max-w-lg leading-relaxed font-light">
              Fintrust operates at the intersection of premium asset advisory and high-yield digital acquisition. We engineer custom liquidity frameworks while building data-driven client pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B132B] text-white text-sm font-medium rounded-lg hover:bg-[#00A896] transition-all duration-300 shadow-lg shadow-brand-navy/10 group cursor-pointer">
                <span>Enterprise Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-xs cursor-pointer">
                <span>Explore Capabilities</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative pt-8 pb-12">
            <div className="absolute -top-6 left-0 w-full h-px bg-gradient-to-r from-slate-200 to-transparent hidden xl:block" />
            <div className="absolute top-0 left-6 w-px h-[110%] bg-gradient-to-b from-slate-200 to-transparent hidden xl:block" />

            <div className="relative space-y-4">
              <div className="w-[95%] bg-white/95 backdrop-blur-md border border-slate-200/60 p-8 rounded-xl transition-all duration-500 relative z-20 shadow-xl shadow-slate-900/[0.03]">
                <span className="text-[10px] uppercase tracking-wider text-amber-600 font-bold block mb-3">Capital Structure</span>
                <h3 className="text-2xl font-normal text-[#0B132B] mb-2 tracking-tight">Institutional Advisory</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Direct deployment vectors with 15+ trusted premier financial banking networks.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-4 w-full">
                <div className="col-span-7 p-7 bg-[#0B132B] text-white rounded-xl transition-all duration-500 translate-x-3 -mt-1 relative z-30 group overflow-hidden shadow-2xl shadow-slate-900/40">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(250px_circle_at_50%_50%,rgba(0,168,150,0.2),transparent)]" />
                  <div className="relative z-10">
                    <div className="text-4xl font-light tracking-tight text-white mb-1">
                      <span className="font-semibold text-[#00A896]">5.2</span>×
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 font-medium leading-normal">
                      Average Marketing Alpha Generated
                    </p>
                  </div>
                </div>

                <div className="col-span-5 p-6 bg-white border border-slate-200 rounded-xl -translate-y-3 -translate-x-2 relative z-10 flex flex-col justify-between items-start shadow-lg shadow-slate-900/[0.02]">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-semibold text-[#0B132B] block mt-8 tracking-tight">
                    Real-Time Sync Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CALCULATOR SUITE */}
      <InteractiveSuite />

      {/* 3. APPLE WATCH GRID */}
      <AppleWatchGrid />

      {/* 4. METRICS SECTION */}
      <section ref={statsRef} className="py-24 bg-[#0B132B] text-white px-6 lg:px-16 relative overflow-hidden">
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
            
            {/* Left Column: List buttons with clear dynamic indicator progress styles */}
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
                    {/* Visual timed loading bar indicator at the bottom of the active row */}
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

            {/* Right Column: Display with Framer Motion AnimatePresence */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <div className="w-full bg-[#0B132B] text-white rounded-2xl p-10 relative overflow-hidden shadow-2xl shadow-slate-900/30 border border-slate-800 min-h-[380px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-6 relative z-10 my-auto"
                  >
                    <div className="inline-block px-2.5 py-1 rounded bg-[#00A896]/10 text-[#00A896] text-[9px] font-bold tracking-widest uppercase border border-[#00A896]/20">
                      {advantageFeatures[activeFeature].tag} Matrix / 0{activeFeature + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                      {advantageFeatures[activeFeature].heading}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
                      {advantageFeatures[activeFeature].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-6 border-t border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 font-medium relative z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
                  Live Framework Optima Configured
                </div>
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
                    <li key={i} className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors">
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
                    <li key={i} className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors">
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
                    <li key={i} className="flex items-center gap-2.5 text-sm font-light text-slate-600 group/item cursor-pointer hover:text-[#00A896] transition-colors">
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
      <WhatsAppButton />
    </div>
  );
}