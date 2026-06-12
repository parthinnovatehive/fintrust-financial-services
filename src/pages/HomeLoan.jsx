import React, { useState } from 'react';
import { Clock, ShieldCheck, UserCircle, Home, Percent, Calendar, IndianRupee, Building2, Award, ArrowRight, CheckCircle2, Phone, MessageCircle, Landmark, HeartPulse, BarChart3, ChevronRight } from 'lucide-react';
import Footer from "../components/Footer"; 

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
        <div className="bg-[#FAF7F2] min-h-screen text-[#0B132B]">
            
            {/* Hero Banner - Improved */}
            <section className="relative bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] text-white pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,168,150,0.15),transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A896] to-transparent" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Home Loan Solutions</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                        Mortgage & Equity Top-Up <br />
                        <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Consulting Blueprints</span>
                    </h1>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
                        Monetize equity, secure competitive institutional rates, and establish premium financing structures
                    </p>
                </div>
            </section>

            {/* Value Proposition Cards - Redesigned */}
            <section className="py-16 px-6 lg:px-16 relative -mt-10 z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-[#00A896]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0B132B] mb-2">48-Hour Approval</h3>
                            <p className="text-sm text-slate-500">Accelerated processing for pre-qualified profiles across our banking network.</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-[#00A896]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0B132B] mb-2">Zero Hidden Fees</h3>
                            <p className="text-sm text-slate-500">Full disclosure of all administrative and bank charges with complete transparency.</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 flex items-center justify-center mb-4">
                                <UserCircle className="w-6 h-6 text-[#00A896]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0B132B] mb-2">Expert Desk</h3>
                            <p className="text-sm text-slate-500">A dedicated loan specialist to manage your documentation end-to-end.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section - Enhanced */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Configure Your Loan</span>
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Property Financing <span className="font-semibold">Calculator</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left - Calculator Inputs */}
                        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <IndianRupee className="w-4 h-4 text-[#00A896]" />
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Loan Amount</label>
                                    </div>
                                    <span className="text-base font-bold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">₹{loanAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1000000" 
                                    max="100000000" 
                                    step="50000" 
                                    value={loanAmount} 
                                    onChange={(e) => setLoanAmount(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>₹10L</span>
                                    <span>₹5Cr</span>
                                    <span>₹10Cr</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Percent className="w-4 h-4 text-[#00A896]" />
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Interest Rate</label>
                                    </div>
                                    <span className="text-base font-bold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">{interestRate}% p.a.</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="6.5" 
                                    max="15" 
                                    step="0.05" 
                                    value={interestRate} 
                                    onChange={(e) => setInterestRate(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>6.5%</span>
                                    <span>10.75%</span>
                                    <span>15%</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#00A896]" />
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tenure Duration</label>
                                    </div>
                                    <span className="text-base font-bold px-3 py-1.5 bg-slate-100 rounded-lg text-[#0B132B]">{tenure} Years</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="5" 
                                    max="30" 
                                    step="1" 
                                    value={tenure} 
                                    onChange={(e) => setTenure(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>5 yrs</span>
                                    <span>17 yrs</span>
                                    <span>30 yrs</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Results */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="text-center mb-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A896]">Estimated Monthly EMI</p>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">₹{emiVal.toLocaleString('en-IN')}</h2>
                                <div className="w-12 h-px bg-[#00A896]/50 mx-auto mt-3" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Principal Amount</p>
                                    <p className="text-lg font-semibold text-white mt-1">₹{loanAmount.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Total Interest</p>
                                    <p className="text-lg font-semibold text-[#00A896] mt-1">₹{totalInterest.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                            
                            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Total Payment</span>
                                    <span className="text-white font-semibold">₹{totalPayment.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[68%] bg-gradient-to-r from-[#00A896] to-emerald-400 rounded-full" />
                                </div>
                                <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                                    <span>Principal</span>
                                    <span>Interest</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={isAgreed} 
                                        onChange={(e) => setIsAgreed(e.target.checked)} 
                                        className="mt-0.5 w-4 h-4 accent-[#00A896] rounded" 
                                    />
                                    <span className="text-[10px] text-slate-300 leading-relaxed">I agree to the Privacy Policy and Terms & Conditions.</span>
                                </label>
                                <button 
                                    onClick={handleWhatsAppRedirect} 
                                    disabled={!isAgreed} 
                                    className={`w-full py-3.5 rounded-xl text-white text-sm font-semibold uppercase tracking-wide transition-all flex items-center justify-center gap-2 ${isAgreed ? 'bg-[#00A896] hover:bg-[#008f7f] hover:-translate-y-0.5' : 'bg-slate-600 cursor-not-allowed'}`}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Apply & Lock This Rate
                                </button>
                                <button className="w-full py-3 rounded-xl border border-white/20 text-white text-xs font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                    <Phone className="w-3.5 h-3.5" />
                                    Speak to Loan Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - NEW */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Why Choose Fintrust</span>
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Home Loan <span className="font-semibold">Advantage</span></h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Building2, title: "15+ Lenders", desc: "Compare rates across multiple banks" },
                            { icon: Award, title: "Best Rates", desc: "Negotiated institutional pricing" },
                            { icon: Clock, title: "Quick Disbursal", desc: "48-hour approval timeline" },
                            { icon: ShieldCheck, title: "Paperwork Support", desc: "End-to-end documentation" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#00A896]/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 flex items-center justify-center mx-auto mb-3">
                                    <item.icon className="w-5 h-5 text-[#00A896]" />
                                </div>
                                <h4 className="font-semibold text-[#0B132B]">{item.title}</h4>
                                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Ecosystem */}
            <section className="py-16 px-6 lg:px-16 bg-[#FAF7F2] border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-4">
                            <Building2 className="w-3.5 h-3.5 text-[#00A896]" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">Institutional Partners</span>
                        </div>
                        <h3 className="text-xl font-light text-[#0B132B]">Trusted by India's <span className="font-semibold">Leading Financial Institutions</span></h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                        {lenders.map((lender) => (
                            <div key={lender.id} className="group flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="h-12 flex items-center justify-center">
                                    <img 
                                        src={lender.logo} 
                                        alt={lender.name} 
                                        className="max-h-full w-auto object-contain opacity-70 group-hover:opacity-100 transition-all" 
                                        style={{ width: `${lender.size + 30}px` }} 
                                    />
                                </div>
                                <span className="text-[9px] text-slate-400 group-hover:text-[#00A896] transition-colors">{lender.name}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-8">
                        <p className="text-[10px] text-slate-400">+ Many more NBFCs and banking partners across India</p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] rounded-2xl p-10 shadow-xl">
                        <h3 className="text-2xl font-light text-white mb-3">Ready to Finance Your Dream Home?</h3>
                        <p className="text-slate-300 text-sm mb-6">Get personalized home loan offers from 15+ banks at competitive rates</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Home Loan options for my property.")}`, '_blank')}
                                className="px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Start Application
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Advisory Desk
                            </button>
                        </div>
                    </div>
                </div>
            </section>
             <Footer />
        </div>
    );
    
}