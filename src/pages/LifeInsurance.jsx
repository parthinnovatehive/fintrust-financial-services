import React, { useState } from 'react';
import {
    Heart,
    Shield,
    Calendar,
    IndianRupee,
    MessageCircle,
    Phone,
    ShieldCheck,
    Clock,
    Award,
    CheckCircle2,
    Wallet,
    Zap,
    Briefcase,
    Landmark,
    Users,
    DollarSign,
    Building2,
    Baby,
    Home,
    TrendingUp,
    Lock,
    FileText,
    Target,
    Leaf,
    Star,
    User,
    TreePine,
    Droplet,
    Car
} from "lucide-react";
import Footer from "../components/Footer"; 

export default function LifeInsurance() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('term');

    const handleWhatsApp = () => {
        if (!isAgreed) {
            alert("Please review and accept the terms & conditions first.");
            return;
        }
        const planNames = {
            term: 'Term Life Insurance',
            whole: 'Whole Life Insurance',
            endowment: 'Endowment Plan'
        };
        const message = `Hi Fintrust, I'm interested in Life & Term Insurance.\n\n• Plan Type: ${planNames[selectedPlan]}\n\nPlease share the best life insurance plans available from your partnered insurers with premium estimates.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Insurance partners
    const insurancePartners = [
        "LIC India", "HDFC Life", "ICICI Prudential", "SBI Life",
        "Bajaj Allianz Life", "TATA AIA Life", "Max Life", "Kotak Life",
        "Aditya Birla Sun Life", "PNB MetLife", "Canara HSBC Life", "Edelweiss Tokio"
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
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Life Insurance</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Secure Your <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Family's Future</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                            Protect your loved ones with comprehensive life coverage. Choose from term plans, whole life, and investment-linked policies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Life Insurance options.")}`, '_blank')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Compare Plans
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Talk to Expert
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
                            { value: "50L+", label: "Lives Protected", icon: Users },
                            { value: "99.2%", label: "Claim Settlement", icon: Award },
                            { value: "₹10L+", label: "Avg. Cover Amount", icon: IndianRupee },
                            { value: "25+", label: "Insurance Partners", icon: Building2 }
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
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Life Insurance <span className="font-semibold">Advantages</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, title: "Financial Security", desc: "Income replacement for family", color: "emerald" },
                            { icon: ShieldCheck, title: "Tax Benefits", desc: "Save up to ₹1.5L under 80C", color: "blue" },
                            { icon: Clock, title: "Quick Claim Payout", desc: "99.2% claim settlement ratio", color: "amber" },
                            { icon: Heart, title: "Rider Options", desc: "Critical illness & accident cover", color: "rose" }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-[#0B132B]">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLAN TYPES SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Choose Your Plan</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Plan Types <span className="font-semibold">We Offer</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                title: "Term Life Insurance", 
                                desc: "Pure protection with high coverage at affordable premiums",
                                features: ["Coverage up to ₹5 Crore", "Flexible tenure 10-40 years", "Return of premium options"],
                                icon: Shield,
                                popular: true
                            },
                            { 
                                title: "Whole Life Insurance", 
                                desc: "Lifetime coverage with guaranteed maturity benefits",
                                features: ["Coverage till age 100", "Guaranteed returns", "Loan facility available"],
                                icon: TreePine,
                                popular: false
                            },
                            { 
                                title: "Endowment Plans", 
                                desc: "Insurance + savings with lump sum maturity",
                                features: ["Regular bonus additions", "Guaranteed additions", "Maturity & death benefit"],
                                icon: TrendingUp,
                                popular: false
                            }
                        ].map((plan, idx) => (
                            <div key={idx} className={`relative bg-white p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 ${plan.popular ? 'border-[#00A896] shadow-md' : 'border-slate-200'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#00A896] text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 flex items-center justify-center mb-4">
                                    <plan.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-[#0B132B] mb-2">{plan.title}</h4>
                                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button 
                                    onClick={() => {
                                        setSelectedPlan(plan.title === "Term Life Insurance" ? "term" : 
                                                       plan.title === "Whole Life Insurance" ? "whole" : "endowment");
                                        document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full py-2.5 rounded-xl bg-[#00A896]/10 text-[#00A896] font-semibold text-sm hover:bg-[#00A896] hover:text-white transition-all"
                                >
                                    Get Quote
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COVERAGE HIGHLIGHTS */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">What's Covered</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Comprehensive <span className="font-semibold">Protection</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Heart, label: "Natural Death", desc: "Full sum assured payout" },
                            { icon: Shield, label: "Accidental Death", desc: "Additional benefit available" },
                            { icon: Droplet, label: "Critical Illness", desc: "Optional rider coverage" },
                            { icon: Baby, label: "Child Education", desc: "Waiver of premium option" },
                            { icon: Car, label: "Disability Cover", desc: "Total & permanent disability" },
                            { icon: Home, label: "Terminal Illness", desc: "Accelerated benefit" },
                            { icon: Lock, label: "Premium Waiver", desc: "On diagnosis of CI" },
                            { icon: Star, label: "Maturity Benefit", desc: "For endowment plans" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A896]/30 transition-all">
                                <item.icon className="w-5 h-5 text-[#00A896] mx-auto mb-2" />
                                <p className="text-sm font-medium text-[#0B132B]">{item.label}</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RIDERS & ADD-ONS SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Enhance Your Cover</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Available <span className="font-semibold">Riders & Add-ons</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Heart, title: "Critical Illness Rider", desc: "Cover for 30+ critical illnesses" },
                            { icon: Car, title: "Accidental Death Benefit", desc: "Additional sum assured on accident" },
                            { icon: Shield, title: "Disability Waiver", desc: "Premium waived on disability" },
                            { icon: Baby, title: "Child Support Rider", desc: "Monthly income for child's future" }
                        ].map((rider, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <rider.icon className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-sm text-[#0B132B]">{rider.title}</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">{rider.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TOP INSURANCE PARTNERS */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Our Partners</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Trusted by India's <span className="font-semibold">Leading Life Insurers</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {insurancePartners.map((partner, idx) => (
                            <div key={idx} className="text-center p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#00A896]/30 transition-all">
                                <span className="text-sm font-medium text-slate-600">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TAX BENEFITS SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Tax Benefits</h3>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">Under Section 80C</span>
                                        <span className="text-lg font-bold text-[#0B132B]">₹1,50,000</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">Under Section 10(10D)</span>
                                        <span className="text-lg font-bold text-[#0B132B]">Maturity Tax Free</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">For Critical Illness Rider</span>
                                        <span className="text-lg font-bold text-[#0B132B]">₹25,000</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm font-semibold text-[#0B132B]">Total Tax Saving Potential</span>
                                        <span className="text-xl font-bold text-[#00A896]">Up to ₹1.75L + GST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Target className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Claim Process</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { step: "01", title: "Register", desc: "Online claim intimation" },
                                    { step: "02", title: "Submit", desc: "Share required documents" },
                                    { step: "03", title: "Verify", desc: "Company verification" },
                                    { step: "04", title: "Payout", desc: "Quick claim settlement" }
                                ].map((item, idx) => (
                                    <div key={idx} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-8 h-8 rounded-full bg-[#00A896]/10 text-[#00A896] font-bold text-sm flex items-center justify-center mx-auto mb-2">
                                            {item.step}
                                        </div>
                                        <h4 className="font-semibold text-sm text-[#0B132B]">{item.title}</h4>
                                        <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY LIFE INSURANCE SECTION */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Why You Need It</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Reasons to Get <span className="font-semibold">Life Insurance Today</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Home, title: "Income Replacement", desc: "Replace your income for family's daily needs" },
                            { icon: Baby, title: "Children's Future", desc: "Secure their education & marriage" },
                            { icon: Shield, title: "Debt Protection", desc: "Clear home loan & other liabilities" }
                        ].map((reason, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <reason.icon className="w-8 h-8 text-[#00A896] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[#0B132B]">{reason.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="cta-section" className="py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-light text-white mb-3">Secure Your Family's Financial Future</h3>
                        <p className="text-slate-300 text-sm mb-6">Compare 25+ plans from India's top life insurers. Get free expert advice.</p>
                        
                        <div className="bg-white/10 rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="term" 
                                        checked={selectedPlan === 'term'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Term Plan</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="whole" 
                                        checked={selectedPlan === 'whole'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Whole Life</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="endowment" 
                                        checked={selectedPlan === 'endowment'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Endowment</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={handleWhatsApp}
                                disabled={!isAgreed}
                                className={`px-6 py-3 rounded-xl text-white font-semibold transition-all flex items-center justify-center gap-2 ${isAgreed ? 'bg-[#00A896] hover:bg-[#008f7f]' : 'bg-slate-600 cursor-not-allowed'}`}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Get Quote & Compare
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Insurance Desk
                            </button>
                        </div>
                        
                        <label className="flex items-center justify-center gap-3 cursor-pointer mt-6">
                            <input 
                                type="checkbox" 
                                checked={isAgreed} 
                                onChange={(e) => setIsAgreed(e.target.checked)} 
                                className="w-4 h-4 accent-[#00A896] rounded" 
                            />
                            <span className="text-[10px] text-slate-400">I agree to the Privacy Policy and Terms & Conditions.</span>
                        </label>
                        
                        <p className="text-[9px] text-slate-500 mt-4">Free consultation | Compare 25+ plans | Zero commission | IRDAI compliant</p>
                    </div>
                </div>
            </section>
             <Footer />
        </div>
    );
}