import React, { useState } from 'react';

// Hardcoded lenders array using paths relative to the public/ folder
const lenders = [
    { id: 1, name: "SBI", logo: "/lenders/SBI-converted-from-png.svg", size: 80 },
    { id: 2, name: "HDFC Bank", logo: "/lenders/hdfc.svg", size: 90 },
    { id: 3, name: "Tata Capital", logo: "/lenders/Tata_Capital-converted-from-jpg.svg", size: 78 },
    { id: 4, name: "Tata Capital Housing", logo: "/lenders/Tata Capital Housing Finance-converted-from-webp.svg", size: 80 },
    { id: 5, name: "IDFC First Bank", logo: "/lenders/Logo_of_IDFC_First_Bank.svg-converted-from-png.svg", size: 70 },
    { id: 6, name: "YES BANK", logo: "/lenders/YES BANK-converted-from-png.svg", size: 75 },
    { id: 15, name: "Bajaj Housing", logo: "/lenders/Bajaj Housing Finance Limited.svg", size: 82 },
    { id: 20, name: "DBS", logo: "/lenders/DBS-converted-from-webp.svg", size: 68 },
    { id: 28, name: "IIFL", logo: "/lenders/IIFL_Logo.svg-converted-from-png.svg", size: 70 },
    { id: 34, name: "LIC HFL", logo: "/lenders/LIC HFL-converted-from-png.svg", size: 70 },
    { id: 42, name: "Poonawalla Fincorp", logo: "/lenders/Poonawalla Fincorp.svg", size: 80 },
    { id: 47, name: "SBM Bank", logo: "/lenders/SBM Bank-converted-from-png.svg", size: 72 }
    // You can continue adding the rest of your items from your list here
];

export default function HomeLoan() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [isAgreed, setIsAgreed] = useState(false);

    const calculateEMI = () => {
        const P = loanAmount;
        const r = (interestRate / 12) / 100;
        const n = tenure * 12;
        if (r === 0) return (P / n).toFixed(0);
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return isNaN(emi) ? 0 : emi.toFixed(0);
    };

    const emiVal = Number(calculateEMI());
    const totalPayment = emiVal * (tenure * 12);
    const totalInterest = totalPayment - loanAmount;

    const handleWhatsAppRedirect = () => {
        if (!isAgreed) {
            alert("Please review and accept the communication consent terms first.");
            return;
        }
        const formattedAmount = loanAmount.toLocaleString('en-IN');
        const formattedInterest = totalInterest.toLocaleString('en-IN');
        const formattedEMI = emiVal.toLocaleString('en-IN');
        const customWhatsAppText = `Hi Fintrust, I am reviewing your Home Loan blueprints. Criteria:\n\n• Amount: ₹${formattedAmount}\n• Interest: ${interestRate}%\n• Tenure: ${tenure} Years\n• EMI: ₹${formattedEMI}\n• Total Interest: ₹${formattedInterest}`;
        const clientWhatsAppNumber = "919876543210";
        window.open(`https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent(customWhatsAppText)}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen text-[#0B132B]">
            {/* Hero Banner */}
            <section className="bg-[#0B132B] text-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                    <h1 className="text-4xl sm:text-5xl font-light">Mortgage & Equity Top-Up <span className="text-emerald-400">Consulting</span></h1>
                </div>
            </section>

            {/* NEW: Value Proposition Section */}
            <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,140,126,0.12),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <span className="text-xs font-bold tracking-widest text-[#128C7E] uppercase block">
                            Loan Solutions Division
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight">
                            Mortgage & Equity Top-Up <span className="font-medium text-emerald-400 block sm:inline">Consulting Blueprints</span>
                        </h1>
                        <p className="text-slate-400 font-light text-base max-w-xl">
                            Monetize equity, secure competitive institutional rates, and establish premium financing structures for your residential portfolio across our 15+ banking partners.
                        </p>
                    </div>
                    <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide text-amber-400 uppercase">Institutional Processing Speed</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                                <p className="text-xs text-slate-400 font-light">Starting ROI</p>
                                <p className="text-lg font-medium text-white">8.40% p.a.</p>
                            </div>
                            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                                <p className="text-xs text-slate-400 font-light">Max Tenure</p>
                                <p className="text-lg font-medium text-white">30 Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-8">
                    <div>
                        <h2 className="text-2xl font-light tracking-tight text-[#0B132B]">Configure Property Financing</h2>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-medium tracking-wide uppercase text-slate-500">Loan Amount</label>
                            <span className="text-sm font-semibold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">₹{loanAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <input type="range" min="1000000" max="100000000" step="50000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-[#128C7E] h-1.5 bg-slate-100 rounded-lg cursor-pointer" />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-medium tracking-wide uppercase text-slate-500">Interest Rate</label>
                            <span className="text-sm font-semibold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">{interestRate}% p.a.</span>
                        </div>
                        <input type="range" min="6.5" max="15" step="0.05" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-[#128C7E] h-1.5 bg-slate-100 rounded-lg cursor-pointer" />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-medium tracking-wide uppercase text-slate-500">Tenure Duration</label>
                            <span className="text-sm font-semibold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">{tenure} Years</span>
                        </div>
                        <input type="range" min="5" max="30" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-[#128C7E] h-1.5 bg-slate-100 rounded-lg cursor-pointer" />
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF7F2] border border-slate-200 p-6 sm:p-8 rounded-2xl">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold tracking-widest text-[#0B132B] uppercase border-b border-slate-200/60 pb-3">Calculated Matrix</h3>
                        <div>
                            <p className="text-xs text-slate-500 font-light">Estimated Monthly EMI</p>
                            <h2 className="text-4xl font-semibold tracking-tight text-[#0B132B]">₹{emiVal.toLocaleString('en-IN')}</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                                <p className="text-[10px] text-slate-400 uppercase">Principal</p>
                                <p className="text-sm font-semibold text-slate-800">₹{loanAmount.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200/60">
                                <p className="text-[10px] text-slate-400 uppercase">Total Interest</p>
                                <p className="text-sm font-semibold text-slate-800">₹{totalInterest.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/70 space-y-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#128C7E]" />
                            <span className="text-[11px] text-slate-500 font-light leading-relaxed">I agree to the Privacy Policy and Terms & Conditions.</span>
                        </label>
                        <button onClick={handleWhatsAppRedirect} disabled={!isAgreed} className={`w-full py-4 rounded-xl text-white text-xs font-bold uppercase transition-all ${isAgreed ? 'bg-[#128C7E]' : 'bg-slate-400 cursor-not-allowed'}`}>
                            Apply & Lock This Rate
                        </button>
                    </div>
                </div>
            </section>

            {/* Dynamic Partner Ecosystem */}
            <section className="bg-white py-20 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Institutional Lending Partners</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                        {lenders.map((lender) => (
                            <div key={lender.id} className="group flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="h-16 flex items-center justify-center">
                                    <img src={lender.logo} alt={lender.name} className="max-h-full w-auto object-contain" style={{ width: `${lender.size + 50}px` }} />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}