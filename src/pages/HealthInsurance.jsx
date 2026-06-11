import React, { useState } from 'react';
import { 
    Heart, Shield, Calendar, IndianRupee, 
    MessageCircle, Phone, ShieldCheck, Clock, Award, 
    CheckCircle2, Wallet, Zap, Briefcase, 
    Landmark, Users, DollarSign, Building2,
    Hospital, Baby, Car, Stethoscope,
    Ambulance, Eye, Activity, Droplet, FileText,
    User
} from 'lucide-react';

export default function HealthInsurance() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('family');

    const handleWhatsApp = () => {
        if (!isAgreed) {
            alert("Please review and accept the terms & conditions first.");
            return;
        }
        const message = `Hi Fintrust, I'm interested in Health Insurance.\n\n• Plan Type: ${selectedPlan === 'family' ? 'Family Floater' : 'Individual Plan'}\n\nPlease share the best health insurance plans available from your partnered insurers with premium estimates.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Insurance partners
    const insurancePartners = [
        "Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz",
        "SBI General", "TATA AIG", "New India Assurance", "Care Health",
        "Aditya Birla Health", "Niva Bupa", "Manipal Cigna", "Future Generali"
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
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Health Insurance</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Protect Your <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Family's Health</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                            Compare and choose from India's best health insurance plans. Get cashless hospitalization, annual checkups, and lifetime renewability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Health Insurance options.")}`, '_blank')}
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
                            { value: "15L+", label: "Policies Sold", icon: ShieldCheck },
                            { value: "98.5%", label: "Claim Settlement", icon: Award },
                            { value: "30 Min", label: "Cashless Approval", icon: Clock },
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
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Health Insurance <span className="font-semibold">Advantages</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Hospital, title: "Cashless Hospitalization", desc: "7000+ network hospitals nationwide", color: "emerald" },
                            { icon: Shield, title: "Tax Benefits", desc: "Save up to ₹75,000 under Section 80D", color: "blue" },
                            { icon: Clock, title: "Quick Claim Settlement", desc: "98.5% claim settlement ratio", color: "amber" },
                            { icon: Heart, title: "Lifetime Renewability", desc: "Guaranteed renewal for life", color: "rose" }
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
                                title: "Individual Health Plan", 
                                desc: "Comprehensive coverage for single individuals",
                                features: ["Sum insured up to ₹1 Cr", "No age limit", "Pre-existing coverage after 4 years"],
                                icon: User,
                                popular: false
                            },
                            { 
                                title: "Family Floater Plan", 
                                desc: "Single sum insured for entire family",
                                features: ["Covers self + spouse + 2 kids", "Cost-effective", "Maternity cover available"],
                                icon: Users,
                                popular: true
                            },
                            { 
                                title: "Senior Citizen Plan", 
                                desc: "Specialized coverage for parents & seniors",
                                features: ["Entry age up to 80 years", "Lower waiting period", "Domiciliary coverage"],
                                icon: Heart,
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
                                        setSelectedPlan(plan.title === "Family Floater Plan" ? "family" : "individual");
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
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Comprehensive <span className="font-semibold">Coverage</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Hospital, label: "Hospitalization", desc: "Room, ICU, nursing" },
                            { icon: Ambulance, label: "Ambulance Cover", desc: "Up to ₹5,000" },
                            { icon: Stethoscope, label: "Daycare Procedures", desc: "500+ procedures" },
                            { icon: Eye, label: "Pre/Post Care", desc: "30/60 days coverage" },
                            { icon: Activity, label: "AYUSH Treatment", desc: "Homeopathy, Ayurveda" },
                            { icon: Droplet, label: "Organ Donor", desc: "Donor expenses covered" },
                            { icon: Baby, label: "Maternity Cover", desc: "After 2 years" },
                            { icon: Car, label: "No Claim Bonus", desc: "Up to 100%" }
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

            {/* TOP INSURANCE PARTNERS */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Our Partners</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Trusted by India's <span className="font-semibold">Leading Insurers</span></h3>
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
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Tax Benefits Under Section 80D</h3>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">For self, spouse & children</span>
                                        <span className="text-lg font-bold text-[#0B132B]">₹25,000</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">For parents (below 60 years)</span>
                                        <span className="text-lg font-bold text-[#0B132B]">₹25,000</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">For parents (60 years & above)</span>
                                        <span className="text-lg font-bold text-[#0B132B]">₹50,000</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm font-semibold text-[#0B132B]">Maximum Deduction</span>
                                        <span className="text-xl font-bold text-[#00A896]">₹75,000 - ₹1,00,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Claim Process</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { step: "01", title: "Intimate", desc: "Call our 24/7 helpline" },
                                    { step: "02", title: "Submit", desc: "Share required documents" },
                                    { step: "03", title: "Verify", desc: "Instant verification" },
                                    { step: "04", title: "Settle", desc: "Cashless or reimbursement" }
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

            {/* FINAL CTA */}
            <section id="cta-section" className="py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-light text-white mb-3">Get the Best Health Insurance Plan</h3>
                        <p className="text-slate-300 text-sm mb-6">Compare 25+ plans from India's top insurers. Get free expert advice.</p>
                        
                        <div className="bg-white/10 rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="individual" 
                                        checked={selectedPlan === 'individual'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Individual</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="family" 
                                        checked={selectedPlan === 'family'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Family Floater</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="senior" 
                                        checked={selectedPlan === 'senior'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Senior Citizen</span>
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
        </div>
    );
}