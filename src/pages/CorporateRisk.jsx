import React, { useState } from 'react';
import { 
    Building2, Shield, Briefcase, IndianRupee, 
    MessageCircle, Phone, ShieldCheck, Clock, Award, 
    CheckCircle2, Users, TrendingUp, Globe, 
    FileText, Target, Zap, Heart, 
    Lock, Database, Truck, Factory, Car,
    Umbrella, AlertTriangle, Network, BarChart3,
    User, TreePine, Droplet
} from 'lucide-react';

export default function CorporateRisk() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('group-health');
    const [companySize, setCompanySize] = useState('50-200');

    const handleWhatsApp = () => {
        if (!isAgreed) {
            alert("Please review and accept the terms & conditions first.");
            return;
        }
        const planNames = {
            'group-health': 'Group Health Insurance',
            'group-life': 'Group Life & Term Insurance',
            'group-pension': 'Group Pension & Superannuation',
            'work-comp': 'Workmen Compensation',
            'liability': 'Liability Insurance',
            'property': 'Property & Marine Insurance'
        };
        const message = `Hi Fintrust, I'm interested in Corporate Risk Schemes.\n\n• Plan Type: ${planNames[selectedPlan]}\n• Company Size: ${companySize} employees\n\nPlease share the best corporate insurance plans available from your partnered insurers with premium estimates.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Insurance partners
    const insurancePartners = [
        "LIC India", "HDFC Life", "ICICI Lombard", "SBI General",
        "Bajaj Allianz", "TATA AIG", "New India Assurance", "United India",
        "National Insurance", "Oriental Insurance", "Kotak General", "Aditya Birla"
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
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Enterprise Risk Management</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Protect Your <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Business Enterprise</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                            Comprehensive corporate insurance solutions including group health, liability, property, and specialized risk coverage for businesses of all sizes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button 
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Corporate Risk Schemes for my business.")}`, '_blank')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Get Business Quote
                            </button>
                            <button 
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Talk to Risk Expert
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
                            { value: "5,000+", label: "Businesses Covered", icon: Building2 },
                            { value: "98.5%", label: "Claim Settlement", icon: Award },
                            { value: "₹1,000Cr+", label: "Sum Assured", icon: IndianRupee },
                            { value: "25+", label: "Insurance Partners", icon: ShieldCheck }
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
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Corporate Risk <span className="font-semibold">Advantages</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, title: "Comprehensive Cover", desc: "Tailored policies for your industry", color: "emerald" },
                            { icon: TrendingUp, title: "Tax Benefits", desc: "Section 80C & 37(1) deductions", color: "blue" },
                            { icon: Clock, title: "Quick Claim Processing", desc: "Dedicated corporate claims team", color: "amber" },
                            { icon: Globe, title: "Pan India Network", desc: "5000+ cashless hospitals", color: "rose" }
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
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Corporate Solutions</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Risk Coverage <span className="font-semibold">We Offer</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { 
                                title: "Group Health Insurance", 
                                desc: "Employee medical coverage with cashless hospitalization",
                                features: ["Coverage up to ₹25L per employee", "OPD & maternity cover", "Wellness programs"],
                                icon: Heart,
                                popular: true
                            },
                            { 
                                title: "Group Life & Term", 
                                desc: "Financial protection for employees' families",
                                features: ["Coverage up to ₹1Cr per employee", "Accidental death benefit", "Critical illness rider"],
                                icon: Shield,
                                popular: false
                            },
                            { 
                                title: "Group Pension Plans", 
                                desc: "Retirement benefits & superannuation schemes",
                                features: ["Guaranteed returns", "Tax-efficient savings", "Lump sum or annuity options"],
                                icon: TrendingUp,
                                popular: false
                            },
                            { 
                                title: "Workmen Compensation", 
                                desc: "Statutory coverage for workplace injuries",
                                features: ["Legal compliance", "Employee & dependent benefits", "Disability coverage"],
                                icon: Factory,
                                popular: false
                            },
                            { 
                                title: "Liability Insurance", 
                                desc: "Protection against third-party claims",
                                features: ["Public liability", "Product liability", "Professional indemnity"],
                                icon: Umbrella,
                                popular: false
                            },
                            { 
                                title: "Property & Marine", 
                                desc: "Asset protection for business property",
                                features: ["Fire & perils coverage", "Business interruption", "Transit insurance"],
                                icon: Building2,
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
                                        setSelectedPlan(plan.title === "Group Health Insurance" ? "group-health" :
                                                       plan.title === "Group Life & Term" ? "group-life" :
                                                       plan.title === "Group Pension Plans" ? "group-pension" :
                                                       plan.title === "Workmen Compensation" ? "work-comp" :
                                                       plan.title === "Liability Insurance" ? "liability" : "property");
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
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Enterprise <span className="font-semibold">Protection</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Heart, label: "Employee Health", desc: "Medical & hospitalization" },
                            { icon: Shield, label: "Employee Life", desc: "Term & accidental death" },
                            { icon: Factory, label: "Workplace Injury", desc: "WC & disability cover" },
                            { icon: Umbrella, label: "Third Party Liability", desc: "Legal protection" },
                            { icon: Building2, label: "Property Damage", desc: "Fire, flood, earthquake" },
                            { icon: Truck, label: "Marine Cargo", desc: "Transit insurance" },
                            { icon: Database, label: "Cyber Liability", desc: "Data breach cover" },
                            { icon: AlertTriangle, label: "Business Interruption", desc: "Loss of profit" }
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

            {/* INDUSTRY SOLUTIONS SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Industry Solutions</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Specialized <span className="font-semibold">Risk Solutions</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Briefcase, title: "IT & Services", desc: "Cyber liability, professional indemnity" },
                            { icon: Factory, title: "Manufacturing", desc: "Property, machinery breakdown, liability" },
                            { icon: Truck, title: "Logistics & Transport", desc: "Marine, motor, goods transit" },
                            { icon: Building2, title: "Real Estate", desc: "Property, liability, contractor insurance" }
                        ].map((industry, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <industry.icon className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-sm text-[#0B132B]">{industry.title}</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">{industry.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMPLOYEE STRENGTH SELECTOR */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] rounded-2xl p-8 text-white">
                        <div className="text-center mb-8">
                            <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Company Profile</span>
                            <h3 className="text-2xl font-light mt-2">Select Your <span className="font-semibold">Organization Size</span></h3>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {["1-10", "11-50", "51-200", "201-1000", "1000+"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setCompanySize(size)}
                                    className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                                        companySize === size 
                                            ? 'bg-[#00A896] text-white' 
                                            : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                    }`}
                                >
                                    {size} Employees
                                </button>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <Users className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">{companySize}+</p>
                                <p className="text-xs text-slate-400">Employees Covered</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <Award className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">Tailored Plan</p>
                                <p className="text-xs text-slate-400">Customized coverage</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <Clock className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">24/7 Support</p>
                                <p className="text-xs text-slate-400">Dedicated account manager</p>
                            </div>
                        </div>
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
                                <h3 className="text-xl font-semibold text-[#0B132B]">Tax Benefits for Businesses</h3>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">Group Health Insurance</span>
                                        <span className="text-lg font-bold text-[#0B132B]">Section 80D</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">Group Term Life</span>
                                        <span className="text-lg font-bold text-[#0B132B]">Section 37(1)</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                                        <span className="text-sm text-slate-600">Workmen Compensation</span>
                                        <span className="text-lg font-bold text-[#0B132B]">Statutory Deduction</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm font-semibold text-[#0B132B]">Premium Paid</span>
                                        <span className="text-xl font-bold text-[#00A896]">100% Deductible</span>
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
                                    { step: "01", title: "Intimate", desc: "Notify dedicated corporate desk" },
                                    { step: "02", title: "Document", desc: "Submit required paperwork" },
                                    { step: "03", title: "Verify", desc: "Fast-track assessment" },
                                    { step: "04", title: "Settle", desc: "Claim settlement within 7 days" }
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

            {/* WHY CORPORATE INSURANCE SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Why Your Business Needs It</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Reasons to <span className="font-semibold">Get Corporate Coverage</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: "Employee Retention", desc: "Attract & retain top talent with benefits" },
                            { icon: AlertTriangle, title: "Legal Compliance", desc: "Meet statutory insurance requirements" },
                            { icon: TrendingUp, title: "Business Continuity", desc: "Protect against unforeseen disruptions" }
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
                        <h3 className="text-2xl font-light text-white mb-3">Protect Your Business Enterprise</h3>
                        <p className="text-slate-300 text-sm mb-6">Get customized corporate insurance quotes from India's top insurers. Free consultation for your business.</p>
                        
                        <div className="bg-white/10 rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="group-health" 
                                        checked={selectedPlan === 'group-health'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Group Health</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="group-life" 
                                        checked={selectedPlan === 'group-life'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Group Life</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="liability" 
                                        checked={selectedPlan === 'liability'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Liability</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="planType" 
                                        value="property" 
                                        checked={selectedPlan === 'property'} 
                                        onChange={(e) => setSelectedPlan(e.target.value)} 
                                        className="w-4 h-4 accent-[#00A896]" 
                                    />
                                    <span className="text-sm text-white">Property</span>
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
                                Call Corporate Desk
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
                        
                        <p className="text-[9px] text-slate-500 mt-4">Free business consultation | Compare 25+ plans | Customized solutions | IRDAI compliant</p>
                    </div>
                </div>
            </section>
        </div>
    );
}