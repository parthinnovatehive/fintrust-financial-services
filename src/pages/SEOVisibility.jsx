import React from 'react';
import {
    Search, BarChart3, ShieldCheck, Zap, ArrowRight, Target, ChevronRight,
    Activity, TrendingUp, Leaf, Megaphone, DollarSign, UserCheck, BadgeCheck,
    ArrowUp, Clock, Database, PieChart, Users, MessageCircle, Share2
} from 'lucide-react';

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
            <section id="seo" className="pt-32 pb-20 px-6 lg:px-16 bg-[#FAF7F2] relative overflow-hidden">
                {/* Ambient background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[15%] -right-[10%] w-[400px] h-[400px] bg-[#00A896]/5 rounded-full blur-[130px]" />
                    <div className="absolute bottom-[5%] -left-[10%] w-[500px] h-[500px] bg-[#0B132B]/5 rounded-full blur-[140px]" />
                    <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-[#00A896]/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-7">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse shadow-[0_0_6px_#00A896]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">Algorithmic Ranking Frameworks</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                            <span className="text-[#00A896] font-semibold bg-gradient-to-r from-[#00A896] to-[#2bc9b0] bg-clip-text text-transparent">Search Engine Optimization</span> <br />
                            <span className="block mt-2">Engineered for High-Intent Growth.</span>
                        </h1>

                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg border-l-3 border-[#00A896]/50 pl-5">
                            We engineer high-visibility search architectures that move beyond basic rankings, transforming organic search into a predictable, high-intent client acquisition engine.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-3">
                            <button
                               onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in an SEO Site Audit. I'd like to understand my current organic search performance, keyword gaps, and technical SEO health score to improve my website's visibility for high-intent financial keywords.")}
                                className="group px-8 py-4 bg-[#0B132B] text-white rounded-xl font-semibold hover:bg-[#00A896] transition-all duration-300 shadow-lg shadow-[#0B132B]/20 hover:shadow-[#00A896]/40 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Request Site Audit</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Trust metrics - SEO specific */}
                        <div className="flex items-center gap-6 pt-5 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>+156% Organic Traffic (YoY)</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                </svg>
                                <span>42 Featured Snippets Earned</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SEO Performance Dashboard */}
                    <div className="relative">
                        <div className="absolute -inset-8 bg-[#00A896]/10 blur-[100px] rounded-full opacity-60" style={{ animation: 'float 3s infinite alternate' }} />

                        <div className="relative bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-2xl transition-all duration-300 hover:border-[#00A896]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">

                            {/* Header Section */}
                            <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-[#00A896]/10 to-[#008f7f]/5 rounded-xl">
                                        <Search className="w-5 h-5 text-[#00A896]" />
                                    </div>
                                    <div>
                                        <div className="text-lg md:text-xl font-bold tracking-tight text-[#0B132B]">Search Alpha Report</div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#00A896] font-extrabold">Projected Market Velocity</div>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-1.5 bg-slate-50 rounded-full px-3 py-1.5 border border-slate-200">
                                    <Activity className="w-3 h-3 text-[#00A896]" />
                                    <span className="text-[9px] font-mono font-bold text-slate-500">live crawl data</span>
                                </div>
                            </div>

                            {/* Key Metrics Grid - 4 cards */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                    <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1">Organic Traffic</div>
                                    <div className="text-xl font-bold text-[#0B132B]">+156%</div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <ArrowUp className="w-2.5 h-2.5 text-[#00A896]" />
                                        <span className="text-[8px] text-[#00A896]">YoY Growth</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                    <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1">Keyword Rankings</div>
                                    <div className="text-xl font-bold text-[#0B132B]">1,284</div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <ArrowUp className="w-2.5 h-2.5 text-[#00A896]" />
                                        <span className="text-[8px] text-[#00A896]">Top 3: 342</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                    <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1">Domain Authority</div>
                                    <div className="text-xl font-bold text-[#0B132B]">54</div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <ArrowUp className="w-2.5 h-2.5 text-[#00A896]" />
                                        <span className="text-[8px] text-[#00A896]">+12 pts</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                                    <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1">CTR Average</div>
                                    <div className="text-xl font-bold text-[#0B132B]">4.8%</div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <ArrowUp className="w-2.5 h-2.5 text-[#00A896]" />
                                        <span className="text-[8px] text-[#00A896]">Above avg</span>
                                    </div>
                                </div>
                            </div>

                            {/* Search Visibility Chart - FIXED VISIBLE BARS */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Search Visibility Index</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-slate-400">Last 7 months</span>
                                </div>

                                {/* Chart container with fixed height and visible bars */}
                                <div className="relative pt-2">
                                    <div className="flex items-end justify-between gap-2 h-40">
                                        {[
                                            { height: 40, month: "Jan", value: 40 },
                                            { height: 52, month: "Feb", value: 52 },
                                            { height: 48, month: "Mar", value: 48 },
                                            { height: 65, month: "Apr", value: 65 },
                                            { height: 73, month: "May", value: 73 },
                                            { height: 85, month: "Jun", value: 85 },
                                            { height: 92, month: "Jul", value: 92 }
                                        ].map((item, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                                <div
                                                    className="w-full bg-[#00A896] rounded-t-lg transition-all duration-500 hover:bg-[#2bc9b0] cursor-pointer relative group"
                                                    style={{ height: `${item.height}px`, minHeight: '4px' }}
                                                >
                                                    {/* Tooltip on hover */}
                                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#0B132B] text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                                        {item.value}% visibility
                                                    </div>
                                                </div>
                                                <div className="text-[9px] font-medium text-slate-500 mt-1">{item.month}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Baseline grid lines */}
                                    <div className="absolute left-0 right-0 top-0 border-t border-slate-100" style={{ top: '20%' }} />
                                    <div className="absolute left-0 right-0 top-0 border-t border-slate-100" style={{ top: '40%' }} />
                                    <div className="absolute left-0 right-0 top-0 border-t border-slate-100" style={{ top: '60%' }} />
                                    <div className="absolute left-0 right-0 top-0 border-t border-slate-100" style={{ top: '80%' }} />
                                </div>

                                {/* Y-axis labels */}
                                <div className="flex justify-between mt-2 text-[8px] text-slate-400 px-1">
                                    <span>0%</span>
                                    <span>25%</span>
                                    <span>50%</span>
                                    <span>75%</span>
                                    <span>100%</span>
                                </div>
                            </div>

                            {/* Top Keywords & Featured Snippets */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Top Keywords</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { keyword: "wealth management", volume: "2.4K", position: "#1" },
                                            { keyword: "financial advisory", volume: "1.8K", position: "#2" },
                                            { keyword: "capital growth", volume: "1.2K", position: "#3" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-[#00A896]">{item.position}</span>
                                                    <span className="text-[11px] text-slate-700">{item.keyword}</span>
                                                </div>
                                                <span className="text-[9px] text-slate-400">{item.volume}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <BadgeCheck className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Featured</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { snippet: "What is wealth management?", pos: "Position 0" },
                                            { snippet: "Best financial advisors", pos: "Position 0" },
                                            { snippet: "Capital growth strategies", pos: "Position 0" }
                                        ].map((item, i) => (
                                            <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                                                <div className="text-[11px] text-slate-700 truncate">{item.snippet}</div>
                                                <div className="text-[8px] text-[#00A896] font-mono mt-0.5">{item.pos}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Technical SEO Metrics */}
                            <div className="mb-5">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Tech Health</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#00A896]">94/100</span>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <div className="flex justify-between text-[8px] text-slate-500 mb-0.5">
                                            <span>Core Web Vitals</span>
                                            <span>92%</span>
                                        </div>
                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00A896] rounded-full w-[92%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[8px] text-slate-500 mb-0.5">
                                            <span>Mobile Usability</span>
                                            <span>96%</span>
                                        </div>
                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00A896] rounded-full w-[96%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[8px] text-slate-500 mb-0.5">
                                            <span>Indexation Rate</span>
                                            <span>88%</span>
                                        </div>
                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00A896] rounded-full w-[88%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live SEO Badge */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#00A896] animate-ping opacity-40" />
                                    </div>
                                    <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-500">Live Crawl Data</span>
                                    <span className="text-[9px] font-mono bg-[#00A896]/10 px-1.5 py-0.5 rounded text-[#00A896]">Updated now</span>
                                </div>
                                <div className="flex items-center gap-2 text-[9px] text-slate-400">
                                    <span>📄 1,284 pages</span>
                                    <span>🔗 3.2K backlinks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 */}
            <section id="ppc" className="pt-32 pb-20 px-6 lg:px-16 bg-[#0B132B] text-white relative overflow-hidden">
                {/* Ambient background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[15%] -right-[10%] w-[400px] h-[400px] bg-[#00A896]/10 rounded-full blur-[130px]" />
                    <div className="absolute bottom-[5%] -left-[10%] w-[500px] h-[500px] bg-[#008f7f]/10 rounded-full blur-[140px]" />
                    <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#00A896]/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-7">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse shadow-[0_0_6px_#00A896]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">Performance Acquisition</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                            <span className="text-[#00A896] font-semibold bg-gradient-to-r from-[#00A896] to-[#2bc9b0] bg-clip-text text-transparent">Google & PPC Ads</span> <br />
                            <span className="block mt-2">Capture Immediate Demand.</span>
                        </h1>

                        <p className="text-lg text-slate-300/90 font-light leading-relaxed max-w-lg border-l-3 border-[#00A896]/50 pl-5">
                            We bypass the waiting game. Our high-intent bidding strategies place your brand directly in front of prospects actively seeking capital and financial advisory services.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-3">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in a PPC Audit and strategy. I want to analyze my current Google Ads performance, identify high-intent keywords with better ROI, reduce my CPA, and implement a conversion-optimized bidding strategy for financial advisory services.")}
                                className="group px-8 py-4 bg-[#00A896] text-white rounded-xl font-semibold hover:bg-[#008f7f] transition-all duration-300 shadow-lg shadow-[#00A896]/20 hover:shadow-[#00A896]/40 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Request PPC Strategy</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Trust metrics - PPC specific */}
                        <div className="flex items-center gap-6 pt-5 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Avg. ROAS: 412%</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                </svg>
                                <span>Search Impression Share: 86%</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: PPC Performance Dashboard - IMPROVED */}
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
                                        <div className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">PPC Performance Dashboard</div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#00A896] font-extrabold mt-0.5">Real-time Acquisition Metrics</div>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-1.5 bg-black/30 rounded-full px-3 py-1.5 border border-white/10">
                                    <Activity className="w-3 h-3 text-[#00A896]" />
                                    <span className="text-[9px] font-mono font-bold text-slate-300">live campaign</span>
                                </div>
                            </div>

                            {/* Key Metrics Grid - 4 cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#00A896]/30 transition-all group">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Avg. CPA</div>
                                    <div className="text-2xl font-bold text-white">₹1,240</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <ArrowUp className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] text-[#00A896]">-12% vs last month</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#00A896]/30 transition-all group">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Conv. Rate</div>
                                    <div className="text-2xl font-bold text-white">8.4%</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <ArrowUp className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] text-[#00A896]">+2.1% vs last month</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#00A896]/30 transition-all group">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">ROAS</div>
                                    <div className="text-2xl font-bold text-white">412%</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <ArrowUp className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] text-[#00A896]">+67% YoY</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#00A896]/30 transition-all group">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Impression Share</div>
                                    <div className="text-2xl font-bold text-white">86%</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <ArrowUp className="w-3 h-3 text-[#00A896]" />
                                        <span className="text-[9px] text-[#00A896]">Top 3 position</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ad Budget Utilization - Enhanced */}
                            <div className="mb-8">
                                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    <span>Ad Budget Utilization</span>
                                    <span className="text-[#00A896]">89%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#00A896] to-[#2bc9b0] w-[89%] rounded-full relative">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                                    </div>
                                </div>
                                <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                                    <span>Budget: ₹2.4L</span>
                                    <span>Remaining: ₹26.4K</span>
                                </div>
                            </div>

                            {/* Top Performing Keywords - New Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Target className="w-3 h-3 text-[#00A896]" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Top Performing Keywords</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { keyword: "wealth management firms", ctr: "12.4%", position: "2" },
                                        { keyword: "financial advisor near me", ctr: "9.8%", position: "1" },
                                        { keyword: "capital advisory services", ctr: "8.2%", position: "3" },
                                        { keyword: "investment consulting", ctr: "7.5%", position: "2" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[11px] font-mono text-[#00A896]">#{item.position}</span>
                                                <span className="text-xs text-slate-300">{item.keyword}</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-400">CTR: {item.ctr}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Live Performance Badge */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-black/40 rounded-full border border-white/10">
                                    <div className="relative">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#00A896] animate-ping opacity-40" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">Live Campaign Data</span>
                                    <span className="text-[10px] font-mono font-bold bg-[#00A896]/20 px-2 py-0.5 rounded-md text-[#00A896]">Updated: Real-time</span>
                                </div>

                                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-[#00A896]" />
                                        <span>Avg. Response: 1.2s</span>
                                    </div>
                                    <div className="w-px h-2 bg-white/20" />
                                    <div className="flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3 text-[#00A896]" />
                                        <span>Quality Score: 8.4/10</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer note */}
                            <div className="mt-4 pt-2 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                                    <ShieldCheck className="w-3 h-3 text-[#00A896]" />
                                    <span>Google Premier Partner</span>
                                </div>
                                <div className="text-[9px] text-slate-500">Auction insights • 8 active competitors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 */}
            <section id="social-media" className="pt-32 pb-20 px-6 lg:px-16 bg-[#F3EDE2] relative overflow-hidden">
                {/* Ambient background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[15%] -right-[10%] w-[400px] h-[400px] bg-[#00A896]/5 rounded-full blur-[130px]" />
                    <div className="absolute bottom-[5%] -left-[10%] w-[500px] h-[500px] bg-[#0B132B]/5 rounded-full blur-[140px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* LEFT COLUMN: Narrative */}
                    <div className="space-y-7">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse shadow-[0_0_6px_#00A896]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">Institutional Credibility</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                            <span className="text-[#00A896] font-semibold bg-gradient-to-r from-[#00A896] to-[#2bc9b0] bg-clip-text text-transparent">Social Media Engineering</span> <br />
                            <span className="block mt-2">Presence is Proof.</span>
                        </h1>

                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg border-l-3 border-[#00A896]/50 pl-5">
                            In finance, your reputation is your primary asset. We build a structured social footprint that reinforces your professional authority and engages your network as a trusted industry voice.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-3">
                            <button
                                onClick={() => sendWhatsApp("Hi Fintrust, I'm interested in building a professional social media strategy. I need help establishing thought leadership on LinkedIn, increasing engagement rates, growing my follower base with relevant industry professionals, and creating a consistent content engine that builds institutional credibility.")}
                                className="group px-8 py-4 bg-[#0B132B] text-white rounded-xl font-semibold hover:bg-[#00A896] transition-all duration-300 shadow-lg shadow-[#0B132B]/20 hover:shadow-[#00A896]/40 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Request Social Audit</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Trust metrics - Social specific */}
                        <div className="flex items-center gap-6 pt-5 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>LinkedIn Top 5% Voice</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                </svg>
                                <span>12.4K Avg. Monthly Reach</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Social Credibility Matrix - IMPROVED */}
                    <div className="relative">
                        <div className="absolute -inset-8 bg-[#00A896]/10 blur-[100px] rounded-full opacity-60" style={{ animation: 'float 3s infinite alternate' }} />

                        <div className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-200 shadow-2xl transition-all duration-300 hover:border-[#00A896]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">

                            {/* Header Section */}
                            <div className="flex flex-wrap items-center justify-between mb-8 pb-5 border-b border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-gradient-to-br from-[#00A896]/10 to-[#008f7f]/5 rounded-xl">
                                        <ShieldCheck className="w-5 h-5 text-[#00A896]" />
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-[#0B132B] to-[#1a2a4a] bg-clip-text text-transparent">Institutional Trust Signals</div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#00A896] font-extrabold mt-0.5">Network Reach & Authority</div>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-1.5 bg-slate-50 rounded-full px-3 py-1.5 border border-slate-200">
                                    <Activity className="w-3 h-3 text-[#00A896]" />
                                    <span className="text-[9px] font-mono font-bold text-slate-500">live metrics</span>
                                </div>
                            </div>

                            {/* Social Platform Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { platform: "LinkedIn", followers: "11,942", growth: "+24%", icon: "Linkedin" },
                                    { platform: "Twitter/X", followers: "31,217", growth: "+18%", icon: "Twitter" },
                                    { platform: "YouTube", followers: "100,856", growth: "+67%", icon: "Youtube" },
                                    { platform: "Medium", followers: "9,433", growth: "+32%", icon: "FileText" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-[#00A896]/30 transition-all group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                {item.platform === "LinkedIn" && <svg className="w-4 h-4 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>}
                                                {item.platform === "Twitter/X" && <svg className="w-4 h-4 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.697-3.716 14.056 14.056 0 001.62-6.475 14.038 14.038 0 00-4.77-5.404z" /></svg>}
                                                {item.platform === "YouTube" && <svg className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>}
                                                {item.platform === "Medium" && <svg className="w-4 h-4 text-[#00ab6c]" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>}
                                                <span className="font-semibold text-sm text-slate-700">{item.platform}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-[#00A896]">{item.growth}</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#0B132B]">{item.followers}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Authority Metrics with progress bars - Enhanced */}
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <BadgeCheck className="w-4 h-4 text-[#00A896]" />
                                        <span className="text-xs font-semibold text-slate-700">Executive Presence</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#0B132B]">92%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#00A896] to-[#2bc9b0] rounded-full w-[92%] animate-pulse" style={{ animation: 'none' }} />
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-[#00A896]" />
                                        <span className="text-xs font-semibold text-slate-700">Content Authority</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#0B132B]">85%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#00A896] to-[#2bc9b0] rounded-full w-[85%]" />
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-[#00A896]" />
                                        <span className="text-xs font-semibold text-slate-700">Network Engagement</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#0B132B]">78%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#00A896] to-[#2bc9b0] rounded-full w-[78%]" />
                                </div>
                            </div>

                            {/* Live Social Proof Badge */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                                    <div className="relative">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#00A896] animate-ping opacity-40" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Live Social Listening</span>
                                    <span className="text-[10px] font-mono font-bold bg-[#00A896]/10 px-2 py-0.5 rounded-md text-[#00A896]">+156% YoY</span>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-3 h-3 text-[#00A896]" />
                                        <span>Engagement rate 4.8%</span>
                                    </div>
                                    <div className="w-px h-2 bg-slate-200" />
                                    <div className="flex items-center gap-1">
                                        <Share2 className="w-3 h-3 text-[#00A896]" />
                                        <span>Shares +312%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Credibility quote footer */}
                            <div className="mt-5 pt-3 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                                    <ShieldCheck className="w-3 h-3 text-[#00A896]" />
                                    <span>Verified Industry Leadership</span>
                                </div>
                                <div className="text-[9px] text-slate-400 italic">"Consistent, value-driven content engineering establishes you as a thought leader"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LEAD GEN SECTION - Consistently Styled */}
            <section id="lead-gen" className="py-24 px-6 lg:px-16 bg-[#0B132B] text-white relative overflow-hidden">
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
                                onClick={() => sendWhatsApp("Hi Fintrust, I'd like to discuss building a lead generation system. I need an end-to-end acquisition framework that captures high-intent prospects, automates qualification workflows, integrates with my CRM, and delivers SQLs with 90%+ accuracy for my financial services firm.")}
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
            <section className="py-24 px-6 relative overflow-hidden">
    {/* Ambient glow effects */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A896]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A896]/30 to-transparent" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#0B132B] via-[#0F1A2E] to-[#0B132B] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Decorative top line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#00A896] to-transparent w-full" />
            
            <div className="p-8 md:p-12 lg:p-16 text-center">
                {/* Small badge above heading */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A896]/10 border border-[#00A896]/20 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00A896]">Limited Time Offer</span>
                </div>
                
                {/* Main heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Ready to scale your <span className="text-[#00A896]">organic visibility</span>?
                </h2>
                
                {/* Description */}
                <p className="text-slate-300 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                    Get a custom SEO audit based on your specific industry benchmarking and search intent data.
                </p>
                
                {/* CTA Button with icon animation */}
                <button
                    onClick={() => sendWhatsApp("Hi Fintrust, I would like to get a custom SEO audit based on my business data. Please analyze my domain authority, backlink profile, core web vitals, mobile usability, and provide actionable recommendations to rank for high-intent financial keywords in my market.")}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#00A896] rounded-xl font-semibold text-white hover:bg-[#008f7f] transition-all duration-300 shadow-lg shadow-[#00A896]/25 hover:shadow-[#00A896]/40 hover:-translate-y-0.5 overflow-hidden"
                >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    
                    <span>Get My Free Audit</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                {/* Trust indicators below button */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#00A896]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No obligation</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-600" />
                    <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#00A896]" />
                        <span>48-hour delivery</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-600" />
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
                        <span>Data-driven insights</span>
                    </div>
                </div>
            </div>
            
            {/* Decorative bottom elements */}
            <div className="flex justify-center gap-1 pb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#00A896]/30" />
                ))}
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default SEOVisibility;