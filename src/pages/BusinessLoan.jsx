import React, { useState } from 'react';
import { Briefcase, BarChart3, TrendingUp, ChevronRight, ShieldCheck, Clock, Target, Building2 } from 'lucide-react';

export default function BusinessLoan() {
    const [loanAmount, setLoanAmount] = useState(2000000);
    const [interestRate, setInterestRate] = useState(12.5);
    const [tenure, setTenure] = useState(5);

    // Logos array
    const logos = [
        'Aavas Financiers-converted-from-png',
        'Aditya Birla Capital Home Loans-converted-from-jpg',
        'AU Small Finance Bank-converted-from-png',
        'Bajaj Housing Finance Limited',
        'CLIX-converted-from-png',
        'hdfc',
        'SBI-converted-from-png',
        'YES BANK-converted-from-png'
    ];

    const calculateEMI = () => {
        const P = loanAmount;
        const r = (interestRate / 12) / 100;
        const n = tenure * 12;
        if (r === 0) return (P / n).toFixed(0);
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return isNaN(emi) ? 0 : emi.toFixed(0);
    };

    const emiVal = Number(calculateEMI());

    const handleWhatsApp = () => {
        const message = `Hello, I am interested in a business loan of ₹${loanAmount.toLocaleString('en-IN')}.`;
        window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen text-[#0B132B]">
            {/* HERO */}
            <section className="bg-[#0B132B] text-white py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-light leading-tight mb-6">
                        Capital for <span className="text-emerald-400">Scale</span>, Not Just Survival.
                    </h1>
                    <p className="text-slate-400 text-lg font-light">
                        Strategic financing to accelerate inventory turnover, optimize operations, and capture market share.
                    </p>
                </div>
            </section>

            {/* INFINITE SCROLL BANNER (Integrated) */}
            <div className="w-full overflow-hidden py-10 bg-white border-y border-slate-100">
                <div className="flex animate-scroll gap-20">
                    {[...logos, ...logos, ...logos].map((name, i) => (
                        <div key={i} className="flex-shrink-0 w-32 h-12 opacity-80 hover:opacity-100 transition-opacity">
                            <img 
                                src={`/lenders/${name}.svg`} 
                                alt={name} 
                                className="h-full w-full object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* VALUE PILLARS */}
            <section className="max-w-7xl mx-auto pt-10 py-5 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: TrendingUp, title: "Capture Market Share", desc: "Scale marketing and distribution without waiting for cash flow." },
                        { icon: BarChart3, title: "Optimize Operations", desc: "Use bulk procurement to improve your gross profit margins." },
                        { icon: Briefcase, title: "Strategic Expansion", desc: "Fund R&D and infrastructure to lead your industry." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <item.icon className="text-emerald-600 mb-4" size={32} />
                            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CALCULATOR */}
            <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                    <h2 className="text-2xl font-light">Calculate Growth Capital</h2>
                    <div className="space-y-8">
                        {['Required Amount', 'Rate of Interest'].map((label, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    <label>{label}</label>
                                    <span>{i === 0 ? `₹${loanAmount.toLocaleString('en-IN')}` : `${interestRate}% p.a.`}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min={i === 0 ? "500000" : "10"} 
                                    max={i === 0 ? "50000000" : "24"} 
                                    step={i === 0 ? "100000" : "0.5"}
                                    value={i === 0 ? loanAmount : interestRate}
                                    onChange={(e) => i === 0 ? setLoanAmount(Number(e.target.value)) : setInterestRate(Number(e.target.value))}
                                    className="w-full accent-emerald-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF7F2] p-10 rounded-2xl border border-slate-200/60">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Financial Matrix</h3>
                    <div className="mb-8">
                        <p className="text-slate-500 text-sm">Estimated Monthly EMI</p>
                        <h2 className="text-5xl font-light tracking-tight">₹{emiVal.toLocaleString('en-IN')}</h2>
                    </div>
                    <button 
                        onClick={handleWhatsApp}
                        className="w-full py-4 bg-[#128C7E] text-white rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-[#0e7467] transition-colors"
                    >
                        Inquire About Growth Capital <ChevronRight size={16} />
                    </button>
                </div>
            </section>
        </div>
    );
}