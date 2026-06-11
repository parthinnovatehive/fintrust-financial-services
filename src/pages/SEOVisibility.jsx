import React from 'react';
import { Search, BarChart3, ShieldCheck, Zap, ArrowRight, Target, ChevronRight, Activity, TrendingUp, Leaf, Megaphone, DollarSign, UserCheck, BadgeCheck, ArrowUp, Clock, Database, PieChart } from 'lucide-react';

const sendWhatsApp = (message) => {
    const phoneNumber = "919876543210"; // REPLACE WITH YOUR ACTUAL NUMBER
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

const SEOVisibility = () => {
    return (
        <div className="bg-[#FAF7F2] min-h-screen text-[#0B132B]">

<style>{`
                @keyframes float {
                    0% { transform: translateY(0px) scale(1); opacity: 0.6; }
                    100% { transform: translateY(-10px) scale(1.05); opacity: 0.8; }
                }
                .border-l-3 {
                    border-left-width: 3px;
                }
            `}</style>

            {/* 1. SEO SECTION */}
            <section className="pt-32 pb-20 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Algorithmic Ranking Frameworks</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                            <span className="text-[#00A896] font-semibold">Search Engine Optimization</span> <br />
                            Engineered for High-Intent Growth.
                        </h1>
                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
                            We engineer high-visibility search architectures that move beyond basic rankings, transforming organic search into a predictable, high-intent client acquisition engine.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in an SEO Site Audit for my business.")}
                                className="px-8 py-4 bg-[#0B132B] text-white rounded-xl font-medium hover:bg-[#00A896] transition-all shadow-lg"
                            >
                                Request Site Audit
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00A896]/10 blur-[100px] rounded-full" />
                        <div className="relative bg-white p-10 rounded-3xl border border-slate-200 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-slate-100 rounded-xl"><Search className="w-6 h-6 text-[#00A896]" /></div>
                                <div>
                                    <div className="text-xl font-semibold">Search Alpha Report</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Projected Market Velocity</div>
                                </div>
                            </div>
                            <div className="h-48 flex items-end gap-2 border-b border-slate-100 pb-4">
                                {[40, 65, 50, 85, 70, 95, 80].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#00A896]/20 rounded-t-md hover:bg-[#00A896] transition-all duration-500" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2 */}
            <section className="pt-32 pb-20 px-6 lg:px-16 bg-[#0B132B] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">Performance Acquisition</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                            <span className="text-[#00A896] font-semibold">Google & PPC Ads</span> <br />
                            Capture Immediate Demand.
                        </h1>
                        <p className="text-lg text-slate-300 font-light leading-relaxed max-w-lg">
                            We bypass the waiting game. Our high-intent bidding strategies place your brand directly in front of prospects actively seeking capital and financial advisory services.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in a PPC Audit and strategy for my Google Ads.")}
                                className="px-8 py-4 bg-[#00A896] text-white rounded-xl font-medium hover:bg-[#008f7f] transition-all shadow-lg"
                            >
                                Request PPC Strategy
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Conversion Visual (Dark Theme) */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00A896]/20 blur-[120px] rounded-full" />
                        <div className="relative bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-white/10 rounded-xl"><Zap className="w-6 h-6 text-[#00A896]" /></div>
                                <div>
                                    <div className="text-xl font-semibold">Live Campaign Data</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Real-time Acquisition Cost</div>
                                </div>
                            </div>

                            {/* Conversion Impact Stats */}
                            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                                <div>
                                    <div className="text-3xl font-light text-white">₹1,240</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Avg. CPA</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-light text-white">8.4%</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Conv. Rate</div>
                                </div>
                            </div>

                            {/* Visual Progress Bar - Styled for dark theme */}
                            <div className="mt-8">
                                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    <span>Ad Budget Utilization</span>
                                    <span>89%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#00A896] w-[89%] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3 */}
            <section className="pt-32 pb-20 px-6 lg:px-16 bg-[#F3EDE2]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Institutional Credibility</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                            <span className="text-[#00A896] font-semibold">Social Media Engineering</span> <br />
                            Presence is Proof.
                        </h1>
                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
                            In finance, your reputation is your primary asset. We build a structured social footprint that reinforces your professional authority and engages your network as a trusted industry voice.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in building a professional social media strategy for my firm.")}
                                className="px-8 py-4 bg-[#0B132B] text-white rounded-xl font-medium hover:bg-[#00A896] transition-all shadow-lg"
                            >
                                Request Social Audit
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Credibility Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00A896]/10 blur-[100px] rounded-full" />
                        <div className="relative bg-white p-10 rounded-3xl border border-slate-200 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-slate-100 rounded-xl"><ShieldCheck className="w-6 h-6 text-[#00A896]" /></div>
                                <div>
                                    <div className="text-xl font-semibold">Institutional Trust Signals</div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Network Reach & Authority</div>
                                </div>
                            </div>

                            {/* Visualizing Network Growth */}
                            <div className="space-y-4">
                                {[
                                    { label: "Executive Presence", val: "92%" },
                                    { label: "Content Authority", val: "85%" },
                                    { label: "Network Engagement", val: "78%" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                                            <span>{item.label}</span>
                                            <span>{item.val}</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#0B132B] rounded-full" style={{ width: item.val }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 text-[10px] text-slate-500 italic">
                                "Consistent, value-driven content engineering establishes you as a thought leader before the first discovery call."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LEAD GEN SECTION - Consistently Styled */}
            {/* 4. LEAD GEN SECTION - Consistently Styled */}
<section className="py-24 px-6 lg:px-16 bg-[#0B132B] text-white relative overflow-hidden">
                {/* Ambient background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[15%] -left-[10%] w-[400px] h-[400px] bg-[#00A896]/10 rounded-full blur-[130px]" />
                    <div className="absolute bottom-[5%] right-[0%] w-[500px] h-[500px] bg-[#008f7f]/10 rounded-full blur-[140px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    
                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-7">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse shadow-[0_0_6px_#00A896]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200/90">Conversion Intelligence</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                            <span className="text-[#00A896] font-semibold bg-gradient-to-r from-[#00A896] to-[#2bc9b0] bg-clip-text text-transparent">Lead Gen Campaigns</span> <br />
                            <span className="block mt-2">The Engine Room of Growth.</span>
                        </h1>
                        
                        <p className="text-lg text-slate-300/90 font-light leading-relaxed max-w-lg border-l-3 border-[#00A896]/50 pl-5">
                            Data-optimized acquisition. We build end-to-end systems that bridge the gap between initial interest and a qualified appointment, ensuring your team spends time only on high-value prospects.
                        </p>
                        
                        <div className="flex flex-wrap gap-5 pt-3">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'd like to discuss building a lead generation system for my firm.")}
                                className="group px-8 py-4 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all duration-300 shadow-lg shadow-[#00A896]/20 hover:shadow-[#00A896]/40 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Deploy Lead System</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Trust metrics */}
                        <div className="flex items-center gap-6 pt-5 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>97% Lead-to-MQL accuracy</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.025-.34.05-.68.05-1.018 0-.782-.118-1.532-.336-2.242A1.987 1.987 0 0012 10c0-1.105-.895-2-2-2s-2 .895-2 2c0 .211.038.415.096.61a1 1 0 00-.02.204c0 1.118.27 2.177.74 3.111.148.296.346.566.58.79.144.138.31.25.49.326.36.152.764.2 1.164.147A2.5 2.5 0 0012 14z" />
                                </svg>
                                <span>Real-time attribution</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Performance Ecosystem Visualization */}
                    <div className="relative">
                        <div className="absolute -inset-8 bg-[#00A896]/15 blur-[100px] rounded-full opacity-60" style={{ animation: 'float 3s infinite alternate' }} />
                        
                        <div className="relative bg-[#0A1125]/70 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/15 shadow-2xl transition-all duration-300 hover:border-[#00A896]/30">
                            
                            {/* Header Section */}
                            <div className="flex flex-wrap items-center justify-between mb-8 pb-5 border-b border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-gradient-to-br from-[#00A896]/30 to-[#008f7f]/20 rounded-xl">
                                        <Zap className="w-5 h-5 text-[#00A896]" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Digital Acquisition Engine</div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#00A896] font-extrabold mt-0.5">Campaign Performance Matrix</div>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-1.5 bg-black/30 rounded-full px-3 py-1.5 border border-white/10">
                                    <Activity className="w-3 h-3 text-[#00A896]" />
                                    <span className="text-[9px] font-mono font-bold text-slate-300">v.24/Q2</span>
                                </div>
                            </div>

                            {/* The Connection Grid */}
                            <div className="flex items-end justify-between gap-2 md:gap-6 px-2 lg:px-1 min-h-[220px]">
                                
                                {/* SEO Pillar */}
                                <div className="flex flex-col items-center gap-3 w-1/3 group">
                                    <div className="relative w-full bg-white/5 rounded-2xl p-3 border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col items-center">
                                        <div className="w-1.5 h-14 bg-gradient-to-t from-white/30 to-white/5 rounded-full mx-auto mb-2" />
                                        <TrendingUp className="w-4 h-4 text-slate-400 mb-1 group-hover:text-[#00A896] transition" />
                                        <span className="text-white font-bold text-sm tracking-wide mt-1">SEO</span>
                                        <div className="text-[10px] font-mono font-semibold text-slate-400 mt-1">+124%</div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Leaf className="w-3 h-3 text-[#00A896]/70" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400">Organic</span>
                                    </div>
                                    <div className="text-[9px] font-mono text-slate-500">TOP kw share 38%</div>
                                </div>

                                {/* Connector 1 */}
                                <div className="pb-14 flex flex-col items-center text-[#00A896]/50 -mx-1">
                                    <div className="w-8 h-px bg-gradient-to-r from-white/0 via-[#00A896]/70 to-white/0 hidden md:block" />
                                    <ArrowRight className="w-3.5 h-3.5 text-[#00A896]/40 hidden md:block" />
                                    <Zap className="w-3 h-3 text-[#00A896]/50 animate-pulse md:hidden" />
                                </div>

                                {/* PPC Pillar */}
                                <div className="flex flex-col items-center gap-3 w-1/3 group">
                                    <div className="relative w-full bg-gradient-to-b from-[#00A896]/20 to-[#008f7f]/30 rounded-2xl p-4 border border-[#00A896]/40 shadow-[0_0_15px_rgba(0,168,150,0.2)] group-hover:shadow-[0_0_22px_rgba(0,168,150,0.4)] transition-all duration-300 flex flex-col items-center">
                                        <div className="w-1.5 h-20 bg-gradient-to-t from-[#00A896] to-[#2bc9b0] rounded-full mx-auto mb-2 animate-pulse" />
                                        <Megaphone className="w-4 h-4 text-[#00A896] mb-1" />
                                        <span className="text-white font-bold text-sm tracking-wide mt-1">PPC</span>
                                        <div className="text-[10px] font-mono font-bold text-[#00A896] mt-1">ROAS +312%</div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <DollarSign className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-white">Paid</span>
                                        <span className="w-1 h-1 rounded-full bg-[#00A896]" />
                                        <span className="text-[9px] font-bold text-[#00A896]">High Intent</span>
                                    </div>
                                    <div className="text-[9px] font-mono text-slate-400">CTR 11.4%</div>
                                </div>

                                {/* Connector 2 */}
                                <div className="pb-14 flex flex-col items-center text-[#00A896]/50 -mx-1">
                                    <div className="w-8 h-px bg-gradient-to-r from-white/0 via-[#00A896]/60 to-white/0 hidden md:block" />
                                    <Target className="w-3.5 h-3.5 text-[#00A896]/50 hidden md:block" />
                                    <ArrowRight className="w-3 h-3 text-[#00A896]/40 md:hidden" />
                                </div>

                                {/* SQL Pillar */}
                                <div className="flex flex-col items-center gap-3 w-1/3 group">
                                    <div className="relative w-full bg-white/5 rounded-2xl p-3 border border-white/10 group-hover:border-[#00A896]/30 transition-all duration-300 flex flex-col items-center">
                                        <div className="w-1.5 h-9 bg-gradient-to-t from-white/20 to-white/5 rounded-full mx-auto mb-2" />
                                        <UserCheck className="w-4 h-4 text-slate-300 mb-1 group-hover:text-[#00A896] transition" />
                                        <span className="text-white font-bold text-sm tracking-wide">SQL</span>
                                        <div className="text-[10px] font-mono font-semibold text-slate-400 mt-1">+87% Conv.</div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <BadgeCheck className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400">Qualified</span>
                                    </div>
                                    <div className="text-[9px] font-mono text-slate-500">MQL→SQL 73%</div>
                                </div>
                            </div>

                            {/* Live Data Badge */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-black/40 rounded-full border border-white/10 backdrop-blur-sm">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
                                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#00A896] animate-ping opacity-40" />
                                    </div>
                                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-200">Live Funnel Data</span>
                                    <span className="text-xs font-mono font-bold bg-[#00A896]/20 px-2 py-0.5 rounded-md text-[#00A896]">89% Efficiency</span>
                                </div>
                                
                                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <ArrowUp className="w-3 h-3 text-[#00A896]" />
                                        <span>Pipeline velocity +22%</span>
                                    </div>
                                    <div className="w-px h-3 bg-white/20" />
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-[#00A896]" />
                                        <span>Latency: 1.4s</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* System status footer */}
                            <div className="mt-5 pt-3 border-t border-white/5 flex justify-between items-center">
                                <div className="flex gap-3 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                                    <span><Database className="w-3 h-3 inline mr-1 text-[#00A896]" /> Attribution: Multi-touch</span>
                                    <span><PieChart className="w-3 h-3 inline mr-1 text-[#00A896]" /> Predictive scoring: active</span>
                                </div>
                                <ShieldCheck className="w-3 h-3 text-slate-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-[#0B132B] rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
                    <h2 className="text-3xl font-light mb-6">Ready to scale your organic visibility?</h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get a custom SEO audit based on your specific industry benchmarking and search intent data.</p>
                    <button
                        onClick={() => sendWhatsApp("Hi Fintrust, I would like to get a custom SEO audit based on my business data.")}
                        className="px-10 py-4 bg-[#00A896] rounded-xl font-medium hover:bg-[#008f7f] transition-all flex items-center gap-2 mx-auto"
                    >
                        Get My Audit <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SEOVisibility;