import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  ChevronRight
} from "lucide-react";

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
      
      {/* 1. HERO SECTION: Editorial High-End Agency Layout */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-white to-surface-muted px-6 lg:px-16 overflow-hidden pt-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-wider">
                Integrated Corporate Ecosystem
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-brand-navy leading-[1.1]">
              Empowering your <span className="font-semibold text-brand-blue">finances</span>.<br />
              Accelerating your <span className="font-semibold text-brand-digital">digital growth</span>.
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light">
              Fintrust bridges the absolute gap between premium financial advisory and high-performing digital lead engines. We scale your corporate capital and market presence simultaneously.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-medium rounded-lg shadow-sm hover:bg-brand-navy transition-all duration-300 group cursor-pointer">
                <span>Explore Financial Solutions</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300 cursor-pointer">
                <span>Digital Growth Suite</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column (Minimalist Abstract Geometry, No Cheesy Orbs) */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]">
            <div className="absolute w-72 h-72 border border-slate-200 rounded-full opacity-60" />
            <div className="absolute w-96 h-96 border border-slate-100 rounded-full opacity-40" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative p-8 bg-white border border-slate-200 rounded-2xl shadow-xl max-w-sm w-full space-y-6"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Active Matrix</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-100 rounded w-3/4" />
                <div className="h-4 bg-slate-100 rounded w-1/2" />
                <div className="h-4 bg-slate-50 rounded w-5/6" />
              </div>
              <div className="pt-2 flex gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-brand-blue/5 text-brand-blue font-medium">Lending Platform</span>
                <span className="text-xs px-2.5 py-1 rounded bg-brand-digital/5 text-brand-digital font-medium">Performance Engine</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE TWO PILLARS: Sophisticated Corporate Layout */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold block mb-3">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brand-navy mb-4">
              Strategic Division of Services
            </h2>
            <p className="text-slate-600 font-light">
              We leverage an institutional network of 15+ trusted banking partners alongside data-driven engineering models to serve both sides of business architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pillar 1: Finance */}
            <div className="p-8 lg:p-12 bg-surface-base border border-slate-200 rounded-2xl hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-blue/5 rounded-lg flex items-center justify-center mb-8">
                  <Landmark className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-medium text-brand-navy mb-4">Financial Consulting</h3>
                <p className="text-slate-600 font-light mb-8 leading-relaxed">
                  Bespoke retail loans, working capital financing, asset-backed monetization pathways, and comprehensive liability mitigation strategies.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {["Home & Mortgage Loans", "Business & MSME Capital", "Personal Infrastructure Loans", "Asset-Backed Finance", "Corporate Insurance", "Wealth Protection"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-navy group transition-colors mt-auto">
                <span>Request Financial Consultation</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Pillar 2: Digital Marketing */}
            <div className="p-8 lg:p-12 bg-surface-base border border-slate-200 rounded-2xl hover:border-brand-digital/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-digital/5 rounded-lg flex items-center justify-center mb-8">
                  <BarChart3 className="w-6 h-6 text-brand-digital" />
                </div>
                <h3 className="text-2xl font-medium text-brand-navy mb-4">Digital Performance Advisory</h3>
                <p className="text-slate-600 font-light mb-8 leading-relaxed">
                  Deploying algorithmic search visibility, strategic paid performance funnels, conversion optimizations, and brand development frameworks.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {["Enterprise SEO & SEM", "Social Media Management", "High-Conversion Web Dev", "Qualified Lead Generation", "PPC & Performance Ads", "Content Marketing Strategy"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-digital shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-digital hover:text-brand-navy group transition-colors mt-auto">
                <span>Request Growth Audit</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

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

      {/* 5. EDITORIAL MINIMALIST FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-200 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-light">
          <div>
            <span className="font-semibold text-brand-navy">Fintrust</span> Financial Services
          </div>
          <div className="flex gap-6">
            <span className="hover:text-brand-blue cursor-pointer">Finance Advisory</span>
            <span className="hover:text-brand-digital cursor-pointer">Digital Growth</span>
          </div>
          <p>© {new Date().getFullYear()} Fintrust. Institutional Services Matrix.</p>
        </div>
      </footer>

    </div>
  );
}