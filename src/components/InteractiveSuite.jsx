import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Sparkles, Percent, Calendar, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export default function InteractiveSuite() {
  const [activeTab, setActiveTab] = useState("finance"); // 'finance' | 'digital'
  
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(2500000); // 25 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenure, setTenure] = useState(20); // 20 years default
  const [emi, setEmi] = useState(0);

  // Calculate EMI dynamically whenever values change
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const numberOfMonths = tenure * 12;
    
    if (monthlyRate === 0) {
      setEmi(principal / numberOfMonths);
      return;
    }
    
    const emiCalc = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    setEmi(Math.round(emiCalc));
  }, [loanAmount, interestRate, tenure]);

  // Format currency to Indian system (Lakhs/Crores) beautifully
  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 px-6 lg:px-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold tracking-super-wide text-brand-gold uppercase block">
            Interactive Intelligence
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-navy">
            Project Your Scale Real-Time
          </h2>
          <p className="text-slate-500 text-sm font-light leading-relaxed">
            Toggle between calculating your financial liabilities or projecting your corporate digital customer acquisition funnel instantly.
          </p>

          {/* Luxury Minimalist Tab Control */}
          <div className="inline-flex p-1 bg-slate-100 rounded-sm mt-6 border border-slate-200/40">
            <button
              onClick={() => setActiveTab("finance")}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer ${
                activeTab === "finance" 
                  ? "bg-white text-brand-blue shadow-sm font-semibold" 
                  : "text-slate-500 hover:text-brand-navy"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Loan EMI Portal
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer ${
                activeTab === "digital" 
                  ? "bg-white text-brand-digital shadow-sm font-semibold" 
                  : "text-slate-500 hover:text-brand-navy"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Digital Growth Matrix
            </button>
          </div>
        </div>

        {/* Tab Interface Content Wrapper */}
        <div className="bg-surface-base border border-slate-200/80 rounded-sm p-6 lg:p-12 shadow-sm max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: PREMIUM EMI CALCULATOR */}
            {activeTab === "finance" && (
              <motion.div
                key="finance-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                {/* Sliders Control Column */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Amount Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-light">Desired Loan Principal</span>
                      <span className="text-brand-blue font-semibold font-mono text-base">{formatCurrency(loanAmount)}</span>
                    </div>
                    <input 
                      type="range" min="100000" max="10000000" step="50000" 
                      value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-1 bg-slate-200 accent-brand-blue rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-light">
                      <span>₹1 Lakh</span>
                      <span>₹1 Crore</span>
                    </div>
                  </div>

                  {/* Rate Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-light">Rate of Interest (p.a)</span>
                      <span className="text-brand-blue font-semibold font-mono text-base">{interestRate}%</span>
                    </div>
                    <input 
                      type="range" min="5" max="20" step="0.1" 
                      value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-1 bg-slate-200 accent-brand-blue rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-light">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  {/* Tenure Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-light">Duration / Tenure</span>
                      <span className="text-brand-blue font-semibold font-mono text-base">{tenure} Years</span>
                    </div>
                    <input 
                      type="range" min="1" max="30" step="1" 
                      value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full h-1 bg-slate-200 accent-brand-blue rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-light">
                      <span>1 Year</span>
                      <span>30 Years</span>
                    </div>
                  </div>
                </div>

                {/* Display Output Column */}
                <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-sm flex flex-col justify-between shadow-inner">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">Monthly Liquidity Pipeline</span>
                      <div className="text-3xl lg:text-4xl font-semibold text-brand-navy font-mono">
                        {formatCurrency(emi)}<span className="text-xs text-slate-400 font-light font-sans">/mo</span>
                      </div>
                    </div>
                    
                    <hr className="border-slate-100" />

                    <div className="grid grid-cols-2 gap-4 text-xs font-light text-slate-500">
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase font-bold">Total Interest</span>
                        <span className="font-mono text-sm text-slate-700 font-medium block mt-0.5">
                          {formatCurrency((emi * tenure * 12) - loanAmount)}
                        </span>
                      </div>
                      <div>
                        <span className="block text-slate-400 text-[10px] uppercase font-bold">Total Repayment</span>
                        <span className="font-mono text-sm text-slate-700 font-medium block mt-0.5">
                          {formatCurrency(emi * tenure * 12)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-8 py-3.5 bg-brand-blue text-white text-xs font-bold tracking-wider uppercase rounded-sm shadow-sm hover:bg-brand-navy transition-colors cursor-pointer inline-flex items-center justify-center gap-2">
                    <span>Apply / Lock This Rate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: DIGITAL GROWTH MATRIX STRATEGY PLANNER */}
            {activeTab === "digital" && (
              <motion.div
                key="digital-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { title: "Alpha Performance Engine", focus: "Google Ads & Premium SEO", reach: "High-Intent Lead Accrual", benefits: ["Algorithmic Keyword Dominance", "Optimized Search Conversion Funnels", "Transparent Real-Time Growth Analytics"] },
                  { title: "Omnichannel Brand Authority", focus: "LinkedIn, Meta & Content Strategy", reach: "Social Validation Architecture", benefits: ["Bespoke Social Creative Suites", "Targeted Demographic Retargeting", "Elevated Corporate Narrative Styling"] },
                  { title: "Automated Conversion Framework", focus: "Web Architecture & CRM Flows", reach: "Sustained Customer Retention", benefits: ["High-Conversion Glassmorphic UI/UX", "WhatsApp & Automated Mail Matrix", "Reduced Acquisition Cost-Scale"] }
                ].map((tier, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between shadow-sm hover:border-brand-digital/40 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold tracking-wider px-2 py-1 bg-brand-digital/5 text-brand-digital uppercase rounded-sm">
                          Strategy Vector 0{idx + 1}
                        </span>
                        <TrendingUp className="w-4 h-4 text-brand-digital/40" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-brand-navy">{tier.title}</h4>
                        <p className="text-xs text-brand-digital font-mono mt-0.5">{tier.focus}</p>
                      </div>
                      <p className="text-xs text-slate-500 font-light">{tier.reach}</p>
                      
                      <hr className="border-slate-50" />
                      
                      <ul className="space-y-2.5 pt-2">
                        {tier.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs font-light text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full mt-8 py-3 bg-slate-900 hover:bg-brand-digital text-white text-xs font-medium rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                      <span>Request This Custom Blueprint</span>
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}