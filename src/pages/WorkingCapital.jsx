import React, { useState } from 'react';
import {
    Building2, Shield, Briefcase, IndianRupee,
    MessageCircle, Phone, ShieldCheck, Clock, Award,
    CheckCircle2, Users, TrendingUp, Globe,
    FileText, Target, Zap, Heart,
    Lock, Database, Truck, Factory,
    Umbrella, AlertTriangle, Network, BarChart3,
    Wallet, PieChart, LineChart, Calendar,
    DollarSign, Percent, RefreshCw, Banknote,
    ChartNoAxesCombined, PiggyBank, HandCoins,
    Package
} from 'lucide-react';
import Footer from "../components/Footer";

export default function WorkingCapital() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedService, setSelectedService] = useState('cash-flow');
    const [annualTurnover, setAnnualTurnover] = useState(5000000);
    const [requirementAmount, setRequirementAmount] = useState(1000000);

    const handleWhatsApp = () => {
        if (!isAgreed) {
            alert("Please review and accept the terms & conditions first.");
            return;
        }
        const serviceNames = {
            'cash-flow': 'Cash Flow Optimization',
            'credit-facility': 'Credit Facility Structuring',
            'inventory': 'Inventory Management Solutions',
            'receivables': 'Receivables Management',
            'payables': 'Payables Optimization',
            'funding': 'Short-term Funding Solutions'
        };
        const message = `Hi Fintrust, I'm interested in Working Capital Advisory.\n\n• Service: ${serviceNames[selectedService]}\n• Annual Turnover: ₹${annualTurnover.toLocaleString('en-IN')}\n• Requirement: ₹${requirementAmount.toLocaleString('en-IN')}\n\nPlease share the best working capital solutions available for my business.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

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
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Liquidity Management</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Optimize Your <span className="font-bold bg-gradient-to-r from-[#00A896] to-emerald-400 bg-clip-text text-transparent">Business Liquidity</span>
                        </h1>
                        <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                            Strategic working capital solutions to improve cash flow, optimize inventory, and unlock hidden value in your business operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button
                                onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent("Hi Fintrust, I'd like to explore Working Capital Advisory for my business.")}`, '_blank')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Assess Your Needs
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
                            { value: "₹1,500Cr+", label: "Capital Optimized", icon: Wallet },
                            { value: "500+", label: "Businesses Served", icon: Building2 },
                            { value: "15-20%", label: "Avg. Cash Flow Improvement", icon: TrendingUp },
                            { value: "15+", label: "Banking Partners", icon: Banknote }
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
                        <h2 className="text-3xl font-light text-[#0B132B] mt-2">Working Capital <span className="font-semibold">Advantages</span></h2>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: RefreshCw, title: "Improved Liquidity", desc: "Unlock trapped cash in operations", color: "emerald" },
                            { icon: Percent, title: "Reduced Costs", desc: "Optimize borrowing expenses", color: "blue" },
                            { icon: Clock, title: "Quick Access", desc: "Fast approval & disbursal", color: "amber" },
                            { icon: Shield, title: "Risk Mitigation", desc: "Protect against cash crunches", color: "rose" }
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

            {/* SERVICES SECTION */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Our Services</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Working Capital <span className="font-semibold">Solutions</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Cash Flow Optimization",
                                desc: "Improve liquidity through better cash management",
                                features: ["Cash flow forecasting", "Working capital cycle analysis", "Surplus deployment strategies"],
                                icon: LineChart,
                                popular: true
                            },
                            {
                                title: "Credit Facility Structuring",
                                desc: "Tailored credit solutions for your business needs",
                                features: ["Overdraft & CC limits", "Bill discounting", "Letter of credit"],
                                icon: HandCoins,
                                popular: false
                            },
                            {
                                title: "Inventory Management",
                                desc: "Optimize stock levels to free up capital",
                                features: ["Inventory turnover analysis", "Stock optimization", "Vendor managed inventory"],
                                icon: Package,
                                popular: false
                            },
                            {
                                title: "Receivables Management",
                                desc: "Accelerate customer collections effectively",
                                features: ["Invoice factoring", "Collection strategies", "Credit policy review"],
                                icon: DollarSign,
                                popular: false
                            },
                            {
                                title: "Payables Optimization",
                                desc: "Strategic vendor payment management",
                                features: ["Payment term negotiation", "Early payment discounts", "Supply chain finance"],
                                icon: Calendar,
                                popular: false
                            },
                            {
                                title: "Short-term Funding",
                                desc: "Quick access to emergency business capital",
                                features: ["Business loans up to ₹5Cr", "Loan against receivables", "Equipment financing"],
                                icon: PiggyBank,
                                popular: false
                            }
                        ].map((service, idx) => (
                            <div key={idx} className={`relative bg-white p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 ${service.popular ? 'border-[#00A896] shadow-md' : 'border-slate-200'}`}>
                                {service.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#00A896] text-white text-[9px] font-bold rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-[#0B132B] mb-2">{service.title}</h4>
                                <p className="text-sm text-slate-500 mb-4">{service.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => {
                                        setSelectedService(service.title === "Cash Flow Optimization" ? "cash-flow" :
                                            service.title === "Credit Facility Structuring" ? "credit-facility" :
                                                service.title === "Inventory Management" ? "inventory" :
                                                    service.title === "Receivables Management" ? "receivables" :
                                                        service.title === "Payables Optimization" ? "payables" : "funding");
                                        document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full py-2.5 rounded-xl bg-[#00A896]/10 text-[#00A896] font-semibold text-sm hover:bg-[#00A896] hover:text-white transition-all"
                                >
                                    Get Consultation
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ASSESSMENT CALCULATOR */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-[#0B132B] to-[#1a2a4a] rounded-2xl p-8 text-white">
                        <div className="text-center mb-8">
                            <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Quick Assessment</span>
                            <h3 className="text-2xl font-light mt-2">Estimate Your <span className="font-semibold">Working Capital Requirement</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300">Annual Business Turnover</span>
                                    <span className="font-semibold text-white">₹{annualTurnover.toLocaleString('en-IN')}</span>
                                </div>
                                <input
                                    type="range"
                                    min="500000"
                                    max="50000000"
                                    step="500000"
                                    value={annualTurnover}
                                    onChange={(e) => setAnnualTurnover(Number(e.target.value))}
                                    className="w-full accent-[#00A896] h-1.5 bg-white/20 rounded-lg cursor-pointer"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                    <span>₹5L</span>
                                    <span>₹2.5Cr</span>
                                    <span>₹5Cr</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300">Working Capital Required</span>
                                    <span className="font-semibold text-white">₹{requirementAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <input
                                    type="range"
                                    min="250000"
                                    max="10000000"
                                    step="250000"
                                    value={requirementAmount}
                                    onChange={(e) => setRequirementAmount(Number(e.target.value))}
                                    className="w-full accent-[#00A896] h-1.5 bg-white/20 rounded-lg cursor-pointer"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                    <span>₹2.5L</span>
                                    <span>₹50L</span>
                                    <span>₹1Cr</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <PieChart className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">15-20%</p>
                                <p className="text-xs text-slate-400">of Turnover</p>
                                <p className="text-[10px] text-slate-500 mt-1">Typical WC Requirement</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <ChartNoAxesCombined className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">₹{(annualTurnover * 0.18).toLocaleString('en-IN')}</p>
                                <p className="text-xs text-slate-400">Estimated Need</p>
                                <p className="text-[10px] text-slate-500 mt-1">Based on industry average</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 text-center">
                                <RefreshCw className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <p className="text-2xl font-bold">60-90 Days</p>
                                <p className="text-xs text-slate-400">Working Capital Cycle</p>
                                <p className="text-[10px] text-slate-500 mt-1">Optimizable to 45 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS OF WORKING CAPITAL */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Key Benefits</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Why Optimize <span className="font-semibold">Working Capital?</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Increased Profitability",
                                desc: "Reduce interest costs and improve bottom line by optimizing cash conversion cycle"
                            },
                            {
                                icon: Shield,
                                title: "Business Stability",
                                desc: "Maintain smooth operations without cash flow interruptions during lean periods"
                            },
                            {
                                icon: Zap,
                                title: "Growth Enablement",
                                desc: "Seize growth opportunities without being constrained by liquidity issues"
                            },
                            {
                                icon: Banknote,
                                title: "Better Credit Terms",
                                desc: "Negotiate better rates with suppliers and access favorable credit lines"
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <benefit.icon className="w-8 h-8 text-[#00A896] shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-[#0B132B]">{benefit.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FUNDING OPTIONS */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Funding Options</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Available <span className="font-semibold">Financing Solutions</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: HandCoins, title: "Cash Credit", desc: "Flexible limit up to ₹5Cr" },
                            { icon: DollarSign, title: "Bill Discounting", desc: "Immediate funds against invoices" },
                            { icon: Banknote, title: "Overdraft Facility", desc: "Against fixed deposits/property" },
                            { icon: PiggyBank, title: "Term Loans", desc: "For specific business needs" }
                        ].map((option, idx) => (
                            <div key={idx} className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A896]/30 transition-all">
                                <option.icon className="w-6 h-6 text-[#00A896] mx-auto mb-2" />
                                <h4 className="font-semibold text-sm text-[#0B132B]">{option.title}</h4>
                                <p className="text-[10px] text-slate-500 mt-1">{option.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY CRITERIA */}
            <section className="py-16 px-6 lg:px-16 bg-white border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Eligibility Criteria</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Minimum 2 years of business operations",
                                    "Annual turnover of ₹10 lakhs or above",
                                    "GST registration (for most facilities)",
                                    "Business bank account (6+ months old)"
                                ].map((criteria, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                        <CheckCircle2 className="w-4 h-4 text-[#00A896] mt-0.5 shrink-0" />
                                        <p className="text-sm text-slate-600">{criteria}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <FileText className="w-6 h-6 text-[#00A896]" />
                                <h3 className="text-xl font-semibold text-[#0B132B]">Required Documents</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "KYC of business & promoters",
                                    "ITR & financial statements (2 years)",
                                    "Bank statements (6-12 months)",
                                    "GST returns (if applicable)"
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                        <FileText className="w-4 h-4 text-[#00A896] mt-0.5 shrink-0" />
                                        <p className="text-sm text-slate-600">{doc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BANK PARTNERS */}
            <section className="py-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00A896] uppercase">Our Partners</span>
                        <h3 className="text-2xl font-light text-[#0B132B] mt-2">Trusted <span className="font-semibold">Lending Institutions</span></h3>
                        <div className="w-12 h-px bg-[#00A896] mx-auto mt-3" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            "SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "YES Bank",
                            "IDFC First", "Bajaj Finserv", "Tata Capital", "IIFL", "Piramal Finance"
                        ].map((bank, idx) => (
                            <div key={idx} className="text-center p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#00A896]/30 transition-all">
                                <span className="text-sm font-medium text-slate-600">{bank}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[10px] text-slate-400 mt-4">+ Many more NBFCs and private lenders</p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section id="cta-section" className="py-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-light text-white mb-3">Unlock Your Business Potential</h3>
                        <p className="text-slate-300 text-sm mb-6">Get expert working capital advisory from India's leading financial consultants. Free assessment for your business.</p>

                        <div className="bg-white/10 rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="serviceType"
                                        value="cash-flow"
                                        checked={selectedService === 'cash-flow'}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-4 h-4 accent-[#00A896]"
                                    />
                                    <span className="text-sm text-white">Cash Flow</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="serviceType"
                                        value="credit-facility"
                                        checked={selectedService === 'credit-facility'}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-4 h-4 accent-[#00A896]"
                                    />
                                    <span className="text-sm text-white">Credit Facility</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="serviceType"
                                        value="funding"
                                        checked={selectedService === 'funding'}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-4 h-4 accent-[#00A896]"
                                    />
                                    <span className="text-sm text-white">Short-term Funding</span>
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
                                Get Consultation
                            </button>
                            <button
                                onClick={() => window.open(`tel:+919876543210`)}
                                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Advisory Desk
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

                        <p className="text-[9px] text-slate-500 mt-4">Free consultation | Customized solutions | Multiple lenders | Quick disbursal</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}