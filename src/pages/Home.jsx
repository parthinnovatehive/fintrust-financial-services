import { useEffect, useState, useRef } from "react";
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
  Gem
} from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import AdvantageSlider from "../components/AdvantageSlider";

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

  return (
    <div className="min-h-screen bg-surface-base text-slate-800 antialiased selection:bg-brand-blue/10">

      {/* 1. HERO SECTION: Luxury Editorial Asymmetric Layout */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] px-6 lg:px-16 overflow-hidden pt-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Sharp Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-brand-gold text-[11px] font-bold uppercase tracking-super-wide">
                Institutional Capital × Digital Performance
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-brand-navy leading-[1.05]">
              Architecting secure <br />
              <span className="font-semibold text-brand-blue">financial pathways</span> <br />
              & digital market scale.
            </h1>

            <p className="text-base text-slate-600 max-w-lg leading-relaxed font-light">
              Fintrust operates at the intersection of premium asset advisory and high-yield digital acquisition. We engineer custom liquidity frameworks while building data-driven client pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-navy text-white text-sm font-medium rounded-sm hover:bg-brand-blue transition-all duration-300 shadow-sm cursor-pointer group">
                <span>Enterprise Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </button>
              <button className="inline-flex items-center justify-center px-7 py-4 bg-transparent border border-slate-200 text-slate-700 text-sm font-medium rounded-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 cursor-pointer">
                <span>Explore Capabilities</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Asymmetrical Assembled Layout */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">

            {/* Structural Accent Lines that mimic luxury architecture sites */}
            <div className="absolute -top-12 -left-6 w-px h-64 bg-slate-200/60 hidden xl:block" />
            <div className="absolute -top-12 -left-12 w-64 h-px bg-slate-200/60 hidden xl:block" />

            {/* Main Feature Block */}
            <div className="col-span-12 p-8 bg-white border border-slate-200/80 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-[10px] uppercase tracking-super-wide text-brand-gold font-bold block mb-4">Capital Structure</span>
              <h3 className="text-2xl font-light text-brand-navy mb-2">Institutional Advisory</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Direct deployment vectors with 15+ trusted premier financial banking networks.</p>
            </div>

            {/* Offset Secondary Block Left */}
            <div className="col-span-7 p-6 bg-brand-navy text-white rounded-sm shadow-sm mt-2">
              <div className="text-2xl font-semibold tracking-tight text-white mb-1">5.2×</div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Average Marketing Alpha Generated</p>
            </div>

            {/* Offset Secondary Block Right */}
            <div className="col-span-5 p-6 bg-white border border-slate-200 rounded-sm mt-2 flex flex-col justify-between">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-brand-navy block mt-4">Real-Time Sync Ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE CALCULATOR & STRATEGY PORTAL */}
      <InteractiveSuite />

      {/* ADD THE NEW APPLE WATCH GRID COMPONENT HERE */}
      <AppleWatchGrid />


      {/* 3. METRICS SECTION: Clean, High-Contrast Text-Driven Data Blocks */}
      <section ref={statsRef} className="py-20 bg-brand-navy text-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">

          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
              {useCounter(15, 1200, isStatsInView)}+
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Banking Partners</p>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
              {useCounter(10, 1200, isStatsInView)}K+
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Engaged Clients</p>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
              {useCounter(5, 1200, isStatsInView)}x
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Average Marketing ROI</p>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
              {useCounter(98, 1200, isStatsInView)}%
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Retention Metric</p>
          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITION: Corporate Trust Blocks */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-surface-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold block mb-3">Corporate Ethos</span>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-navy">Built on Transparency & Performance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Fiduciary Integrity", desc: "Rigorous compliance structures, end-to-end documentary support, and entirely transparent fiscal advice with no hidden fee metrics." },
              { icon: Award, title: "Institutional Leverage", desc: "Direct tie-ups with India's premier banks and NBFCs, ensuring fast track processing and highly competitive interest rates." },
              { icon: Building2, title: "SME Acceleration Focus", desc: "Tailored deployment architectures designed to lift startups and mid-market enterprises into sustainable digital revenue models." }
            ].map((prop, index) => (
              <div key={index} className="p-8 bg-white border border-slate-200 rounded-xl space-y-4">
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center border border-slate-100">
                  <prop.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h4 className="text-lg font-medium text-brand-navy">{prop.title}</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT FINTRUST SECTION: Simple, Deep, Trustworthy */}
      <section className="py-24 px-6 lg:px-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-4 sticky top-28">
            <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
              Corporate Overview
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-navy leading-tight">
              About Fintrust Financial Services
            </h2>
            <div className="w-12 h-0.5 bg-brand-blue mt-4" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 font-light leading-relaxed text-base">
            <p>
              Fintrust Financial Services is a trusted financial consultancy dedicated to helping individuals, professionals, and businesses achieve their financial goals through customized loan and insurance solutions. With a customer-first approach, we simplify the borrowing process and provide expert guidance at every step.
            </p>
            <p>
              We work with leading banks, NBFCs, and insurance companies to offer competitive financial products tailored to the unique needs of our clients. Our commitment is to deliver transparent advice, quick processing, and hassle-free service.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SERVICES BLUEPRINT */}
      <section className="py-24 px-6 lg:px-16 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-navy">
              Bespoke Services Blueprint
            </h2>
            <p className="text-slate-500 text-sm font-light">
              Simple, transparent solutions spanning traditional asset leverage and digital market performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* COLUMN 1: LOAN SOLUTIONS */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-blue/5 flex items-center justify-center mb-6 border border-brand-blue/10">
                  <Landmark className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-xl font-medium text-brand-navy mb-2">Loan Solutions</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Simplifying borrowing channels.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-4">
                  {[
                    "Home Loans", "Business Loans", "Personal Loans",
                    "Loan Against Property", "Working Capital Finance",
                    "Balance Transfer & Top-Up Loans", "Professional Loans (Doctors, CAs, etc.)"
                  ].map((loan, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-slate-600 group cursor-pointer hover:text-brand-blue">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-blue transition-colors" />
                      <span>{loan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLUMN 2: INSURANCE SOLUTIONS */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-gold/5 flex items-center justify-center mb-6 border border-brand-gold/10">
                  <HeartPulse className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-xl font-medium text-brand-navy mb-2">Insurance Solutions</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Premium asset & health shields.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-4">
                  {[
                    "Health Insurance", "Life Insurance", "Term Insurance",
                    "Motor Insurance", "Corporate Insurance", "Investment & Wealth Protection Plans"
                  ].map((ins, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-slate-600 group cursor-pointer hover:text-brand-gold">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-gold transition-colors" />
                      <span>{ins}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLUMN 3: DIGITAL MARKETING SERVICES */}
            <div className="bg-white border border-slate-200/60 p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-brand-digital/5 flex items-center justify-center mb-6 border border-brand-digital/10">
                  <BarChart3 className="w-5 h-5 text-brand-digital" />
                </div>
                <h3 className="text-xl font-medium text-brand-navy mb-2">Digital Marketing Suite</h3>
                <p className="text-xs text-slate-400 font-light mb-6">Result-oriented business growth.</p>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-3.5">
                  {[
                    "Social Media Marketing", "Search Engine Optimization (SEO)",
                    "Google Ads & PPC Campaigns", "Website Design & Development",
                    "Lead Generation Campaigns", "Content & Campaign Management",
                    "WhatsApp & Email Marketing", "Online Reputation Management"
                  ].map((mkt, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-slate-600 group cursor-pointer hover:text-brand-digital">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-digital transition-colors" />
                      <span className="truncate">{mkt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STRATEGIC VALUE BLOCKS: Why Choose Fintrust */}
      <section className="py-28 px-6 lg:px-16 bg-[#F5F0E8] border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column Copy Area Block */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-gold" />
                <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
                  The Advantage Matrix
                </span>
              </div>
              <h2 className="text-4xl font-light tracking-tight text-brand-navy leading-tight">
                Why Market Leaders <br />
                <span className="font-semibold text-brand-navy">Choose Fintrust</span>
              </h2>
              <p className="text-slate-500 text-sm font-light leading-relaxed max-w-md">
                We combine extensive banking partnerships with custom-engineered data acquisition tools to deliver secure capital scaling.
              </p>
            </div>

            {/* Right Column Component Wrapper Block */}
            <div className="lg:col-span-12 xl:col-span-8 w-full">
              <AdvantageSlider />
            </div>

          </div>
        </div>
      </section>

      {/* 6. ETHOS SECTION: Mission, Vision, and Values */}
<section className="py-28 px-6 lg:px-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
  {/* Geometric background accent */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
  
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
      <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
        Corporate Foundations
      </span>
      <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
        The Principles Guiding <span className="font-semibold text-brand-blue">Our Growth</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Mission Card */}
      <div className="p-10 bg-slate-900/50 border border-white/10 rounded-sm hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
            <Compass className="w-5 h-5 text-brand-blue" />
          </div>
          <h3 className="text-xl font-medium tracking-tight text-white">Our Mission</h3>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            To empower individuals and businesses with accessible financial solutions while building long-term relationships based on trust, transparency, and excellence.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="p-10 bg-slate-900/50 border border-white/10 rounded-sm hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-sm bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 group-hover:bg-brand-gold/20 transition-colors">
            <Target className="w-5 h-5 text-brand-gold" />
          </div>
          <h3 className="text-xl font-medium tracking-tight text-white">Our Vision</h3>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            To become one of India's most trusted financial service providers by delivering innovative financial solutions and exceptional customer experiences.
          </p>
        </div>
      </div>

      {/* Core Values Card */}
      <div className="p-10 bg-slate-900/50 border border-white/10 rounded-sm hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-sm bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
            <Gem className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-xl font-medium tracking-tight text-white">Core Values</h3>
          
          <ul className="space-y-3 pt-1">
            {["Integrity & Transparency", "Uncompromising Trust", "Customer Obsession", "Professional Excellence"].map((val, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-light text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 7. MINIMALIST LUXURY FOOTER */}
      <footer className="py-12 bg-[#FAF7F2] border-t border-slate-200/80 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-light">
          <div>
            <span className="font-semibold text-brand-navy">Fintrust</span> Financial Services Matrix
          </div>
          <p>© {new Date().getFullYear()} Fintrust. Built for Institutional Scaling & Digital Growth.</p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}