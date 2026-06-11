import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    ShieldCheck,
    Zap,
    Percent,
    BarChart4,
    FileText,
    Briefcase,
    TrendingUp,
    Network
} from "lucide-react";

const advantages = [
    {
        title: "Expert Financial Guidance",
        desc: "Consultative planning with veteran financial strategists for every borrowing pathway.",
        icon: ShieldCheck,
        metric: "100%",
        metricLabel: "Fiduciary Integrity",
        highlight: "Custom Blueprints"
    },
    {
        title: "Multiple Bank Partnerships",
        desc: "Direct tie-ups across India's top premier banks and institutional NBFC ecosystems.",
        icon: Network,
        metric: "15+",
        metricLabel: "Banking Pipelines",
        highlight: "Instant Synergy"
    },
    {
        title: "Quick Loan Processing",
        desc: "Accelerated timelines driven by clean pre-screening optimization pipelines.",
        icon: Zap,
        metric: "48 Hrs",
        metricLabel: "Average SLA Turnaround",
        highlight: "SLA Guaranteed"
    },
    {
        title: "Competitive Interest Rates",
        desc: "Leveraged marketplace positioning ensuring you acquire the absolute lowest available rates.",
        icon: Percent,
        metric: "Lowest",
        metricLabel: "Market Spread Index",
        highlight: "Rate Leverage Optimization"
    },
    {
        title: "Data-Driven Campaign Mgmt",
        desc: "Fully transparent, highly optimized digital lead generation funnels built for modern SMEs.",
        icon: BarChart4,
        metric: "5.2×",
        metricLabel: "Average Digital Alpha ROI",
        highlight: "Performance Acquisition"
    },
    {
        title: "Transparent & Ethical Practices",
        desc: "Zero hidden fee metrics, complete upfront honesty, and absolute fiduciary integrity.",
        icon: CheckCircle2,
        metric: "0",
        metricLabel: "Hidden Fee Metrics",
        highlight: "Absolute Transparency"
    },
    {
        title: "End-to-End Doc Support",
        desc: "Hassle-free document assembly managed entirely by our designated administrative agents.",
        icon: FileText,
        metric: "Paperless",
        metricLabel: "Concierge Execution",
        highlight: "Zero Friction Logistics"
    },
    {
        title: "Affordable SME Solutions",
        desc: "Premium marketing strategies customized to launch and scale growing startups securely.",
        icon: Briefcase,
        metric: "Custom",
        metricLabel: "Scale Pricing Architectures",
        highlight: "SME Incubation Matrix"
    },
];

export default function AdvantageSlider() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev === advantages.length - 1 ? 0 : prev + 1));
        }, 4500); // Extended slide timeline slightly for better legibility
        return () => clearInterval(timer);
    }, []);

    const ActiveIcon = advantages[active].icon;

    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

            {/* LEFT SIDE: Vertical Navigation Menu Indicator blocks */}
            <div className="xl:col-span-5 space-y-2 max-h-[480px] overflow-y-auto pr-2 scrollbar-none">
                {advantages.map((item, idx) => {
                    const IsActiveRow = idx === active;
                    const RowIcon = item.icon;
                    return (
                        <button
                            key={idx}
                            onClick={() => setActive(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer ${IsActiveRow
                                ? "bg-white border-slate-200/90 shadow-md shadow-slate-100/50"
                                : "bg-transparent border-transparent hover:bg-slate-100/70"
                                }`}
                        >
                            <div className={`p-2 rounded-lg border transition-colors ${IsActiveRow
                                ? "bg-brand-blue/5 border-brand-blue/10 text-brand-blue"
                                : "bg-white border-slate-100 text-slate-400 group-hover:text-slate-600"
                                }`}>
                                <RowIcon size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-sm tracking-tight transition-colors ${IsActiveRow ? "font-semibold text-brand-navy" : "font-light text-slate-600"
                                    }`}>
                                    {item.title}
                                </h4>
                            </div>

                            {/* Dynamic horizontal timeline filling effect */}
                            {IsActiveRow && (
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* RIGHT SIDE: Rich High-Contrast Bento Data Card Display Visual */}
            <div className="xl:col-span-7 relative h-[420px] w-full">

                {/* Soft Background Radial Light Aura */}
                <div className="absolute inset-0 bg-brand-blue/[0.02] blur-3xl rounded-3xl" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -15 }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-slate-950 border border-slate-900 rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
                    >
                        {/* Interactive Grid Line Overlay Patterns */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

                        {/* Visual Card Header Ring Elements */}
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-brand-gold tracking-widest bg-brand-gold/10 px-2.5 py-1 border border-brand-gold/10 rounded-sm">
                                    {advantages[active].highlight}
                                </span>
                            </div>
                            <span className="font-mono text-xs text-slate-700 font-bold">
                                MATRIX / {String(active + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Core Segment Info Blocks */}
                        <div className="space-y-4 my-auto relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                                    <ActiveIcon size={20} />
                                </div>
                                <h3 className="text-2xl font-semibold tracking-tight text-white">
                                    {advantages[active].title}
                                </h3>
                            </div>
                            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-lg">
                                {advantages[active].desc}
                            </p>
                        </div>

                        {/* Large Analytical Stat Block Underlay */}
                        <div className="border-t border-white/5 pt-6 grid grid-cols-2 items-center relative z-10">
                            <div>
                                <div className="text-4xl font-semibold tracking-tight text-white mb-0.5">
                                    {advantages[active].metric}
                                </div>
                                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                    {advantages[active].metricLabel}
                                </div>
                            </div>
                            <div className="text-right">

                            </div>
                        </div>

                        {/* Linear Progress Tracker Line Running across the bottom edge */}
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-900">
                            <motion.div
                                key={active}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 7.5, ease: "linear" }}
                                className="h-full bg-brand-blue shadow-[0_0_12px_#0095ff]"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}