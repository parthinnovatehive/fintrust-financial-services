import React, { useState } from 'react';
import { 
    User, CreditCard, Calendar, IndianRupee, Percent, 
    MessageCircle, Phone, ShieldCheck, Clock, Award, 
    CheckCircle2, Wallet, Zap, Heart, Briefcase, 
    TrendingUp, ArrowRight, Landmark, Users, DollarSign
} from 'lucide-react';
import Footer from "../components/Footer"; 

export default function PersonalLoan() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(11.5);
    const [tenure, setTenure] = useState(5);
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

    const handleWhatsApp = () => {
        if (!isAgreed) {
            alert("Please review and accept the terms & conditions first.");
            return;
        }
        const message = `Hi Fintrust, I'm interested in a Personal Loan.\n\n• Amount: ₹${loanAmount.toLocaleString('en-IN')}\n• Interest Rate: ${interestRate}%\n• Tenure: ${tenure} Years\n• Monthly EMI: ₹${emiVal.toLocaleString('en-IN')}\n• Total Interest: ₹${totalInterest.toLocaleString('en-IN')}\n\nPlease guide me through the application process.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Lenders logos array
    const logos = [
        'SBI-converted-from-png',
        'hdfc',
        'Shinhan Bank-converted-from-jpg.svg',
        'ICICI Bank-converted-from-png',
        'Axis Bank-converted-from-png',
        'YES BANK-converted-from-png',
        'Bajaj Finserv-converted-from-png',
        'Tata Capital-converted-from-jpg',
        'IDFC First Bank-converted-from-png'
    ];

    return (
        <div className="bg-[#FAF7F2] min-h-screen text-[#0B132B]">
            
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,168,150,0.12),transparent_60%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A896] to-transparent" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Personal Financing</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Funds When You <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Need Them Most</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                            Quick, hassle-free personal loans for medical emergencies, travel, education, weddings, or debt consolidation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Personal Loan options.")}`, '_blank')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Apply for Personal Loan
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Talk to Advisor
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-12 px-6 lg:px-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "₹200Cr+", label: "Disbursed", icon: DollarSign },
                            { value: "25K+", label: "Happy Customers", icon: Users },
                            { value: "24hrs", label: "Approval Time", icon: Clock },
                            { value: "15+", label: "Banking Partners", icon: Landmark }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4">
                                <stat.icon className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#0B132B]">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY BENEFITS SECTION */}
            <section className="py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Why Choose Us</span>
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Personal Loan <span className="font-semibold">Advantages</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
        { icon: Zap, title: "Instant Approval", desc: "Get approval within 24 hours", color: "emerald", bgClass: "from-emerald-500/10 to-emerald-600/5", textClass: "text-emerald-600" },
        { icon: CreditCard, title: "No Collateral", desc: "Unsecured loans up to ₹50L", color: "blue", bgClass: "from-blue-500/10 to-blue-600/5", textClass: "text-blue-600" },
        { icon: Wallet, title: "Minimal Documents", desc: "Only KYC and income proof", color: "amber", bgClass: "from-amber-500/10 to-amber-600/5", textClass: "text-amber-600" },
        { icon: Heart, title: "Flexible EMI", desc: "Tenure up to 7 years", color: "rose", bgClass: "from-rose-500/10 to-rose-600/5", textClass: "text-rose-600" }
    ].map((item, i) => (
        <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.bgClass} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.textClass}`} />
            </div>
            <h4 className="font-semibold text-lg mb-2 text-[#0B132B]">{item.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
        </div>
    ))}
</div>
                </div>
            </section>

            {/* ELIGIBILITY & FEATURES SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Eligibility Criteria */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <ShieldCheck className="w-5 h-5 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Eligibility Criteria</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Age", desc: "21 years to 60 years" },
                                    { title: "Employment", desc: "Salaried or Self-employed professionals" },
                                    { title: "Income", desc: "Minimum ₹25,000 per month" },
                                    { title: "CIBIL Score", desc: "750 or above (relaxable for existing customers)" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                        <CheckCircle2 className="w-4 h-4 text-[#00A896] mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-[#0B132B]">{item.title}</p>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Loan Features */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="w-5 h-5 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Loan Features</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "Loan Amount", desc: "Up to ₹50 Lakhs" },
                                    { title: "Interest Rate", desc: "Starting at 9.9% p.a." },
                                    { title: "Repayment Tenure", desc: "12 months to 84 months" },
                                    { title: "Processing Fee", desc: "As low as 0.5%" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-[#00A896]/5 to-transparent border border-[#00A896]/10">
                                        <p className="text-sm font-semibold text-[#0B132B]">{item.title}</p>
                                        <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALCULATOR SECTION */}
            <section className="py-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Calculate Your EMI</span>
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Personal Loan <span className="font-semibold">Calculator</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid lg:grid-cols-12 gap-8">
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
                                    min="50000" 
                                    max="5000000" 
                                    step="25000" 
                                    value={loanAmount} 
                                    onChange={(e) => setLoanAmount(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>₹50K</span>
                                    <span>₹25L</span>
                                    <span>₹50L</span>
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
                                    min="9.5" 
                                    max="24" 
                                    step="0.25" 
                                    value={interestRate} 
                                    onChange={(e) => setInterestRate(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>9.5%</span>
                                    <span>16.75%</span>
                                    <span>24%</span>
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
                                    min="1" 
                                    max="7" 
                                    step="1" 
                                    value={tenure} 
                                    onChange={(e) => setTenure(Number(e.target.value))} 
                                    className="w-full accent-[#00A896] h-1.5 bg-slate-100 rounded-lg cursor-pointer" 
                                />
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>1 yr</span>
                                    <span>4 yrs</span>
                                    <span>7 yrs</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Results */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="text-center mb-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A896]">Estimated Monthly EMI</p>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">₹{emiVal.toLocaleString('en-IN')}</h2>
                                <div className="w-12 h-px bg-[#00A896]/50 mx-auto mt-3" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Principal Amount</p>
                                    <p className="text-base font-semibold text-white mt-1">₹{loanAmount.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Total Interest</p>
                                    <p className="text-base font-semibold text-[#00A896] mt-1">₹{totalInterest.toLocaleString('en-IN')}</p>
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
                                    onClick={handleWhatsApp} 
                                    disabled={!isAgreed} 
                                    className={`w-full py-3.5 rounded-xl text-white text-sm font-semibold uppercase tracking-wide transition-all flex items-center justify-center gap-2 ${isAgreed ? 'bg-[#00A896] hover:bg-[#008f7f] hover:-translate-y-0.5' : 'bg-slate-600 cursor-not-allowed'}`}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Apply & Lock This Rate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOCUMENTS REQUIRED */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Simple Process</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Documents <span className="font-semibold">Required</span></h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "KYC Documents", "Income Proof", "Bank Statements", "Employment Proof"
                        ].map((doc, idx) => (
                            <div key={idx} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#00A896]/30 transition-all">
                                <CheckCircle2 className="w-5 h-5 text-[#00A896] mx-auto mb-2" />
                                <p className="text-sm font-medium text-[#0B132B]">{doc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USE CASES SECTION - NEW */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Popular Uses</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Why Customers <span className="font-semibold">Choose Personal Loans</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Heart, label: "Medical Emergency" },
                            { icon: Briefcase, label: "Wedding Expenses" },
                            { icon: TrendingUp, label: "Debt Consolidation" },
                            { icon: CreditCard, label: "Travel & Vacation" }
                        ].map((use, idx) => (
                            <div key={idx} className="text-center p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <use.icon className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-sm font-medium text-[#0B132B]">{use.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          

            {/* FINAL CTA */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] rounded-2xl p-10 shadow-xl">
                        <h3 className="text-2xl font-light text-white mb-3">Ready to Get Started?</h3>
                        <p className="text-slate-300 text-sm mb-6">Get instant approval from 15+ banks with competitive interest rates</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to apply for a Personal Loan.")}`, '_blank')}
                                className="px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Apply Now
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Loan Desk
                            </button>
                        </div>
                        <p className="text-[9px] text-slate-500 mt-4">Instant approval | Flexible EMI | Minimal paperwork</p>
                    </div>
                </div>
            </section>
             <Footer />
        </div>
    );
    
}