import { useEffect, useRef, useState } from "react";
import { Compass, Target, Gem, Shield, Eye, Heart, Award, TrendingUp, Users, CheckCircle2, Building2, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function EthosSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const coreValues = [
    { icon: Shield, title: "Fiduciary Integrity", desc: "Always acting in our clients' best interests" },
    { icon: Eye, title: "Absolute Transparency", desc: "No hidden fees, no fine print surprises" },
    { icon: Award, title: "Operational Excellence", desc: "Delivering results with precision" },
    { icon: Heart, title: "Client-First Approach", desc: "Your success is our success" },
    { icon: TrendingUp, title: "Continuous Innovation", desc: "Staying ahead of market trends" },
    { icon: Users, title: "Collaborative Partnership", desc: "Building lasting relationships" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-28 px-6 lg:px-16 bg-[#0B132B] text-white overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>')`
        }}
      />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase">Our Ethos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            The Principles Guiding <br />
            <span className="font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">Our Operation</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-transparent mx-auto" />
        </motion.div>

        {/* Row 1: Mission & Vision - Side by Side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/30 group-hover:scale-105 transition-all duration-300">
                  <Compass className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">Our Mission</h3>
                  <p className="text-[11px] text-emerald-400/70 uppercase tracking-wider mt-0.5">STRATEGIC DIRECTION</p>
                </div>
              </div>
              
              <p className="text-base text-slate-300 font-light leading-relaxed">
                To empower individuals and businesses with accessible financial solutions while building long-term relationships based on <span className="text-emerald-400 font-medium">trust, transparency, and excellence</span>.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-5 pt-3 border-t border-white/5">
                {["Trust", "Transparency", "Excellence"].map((pillar, i) => (
                  <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/30 group-hover:scale-105 transition-all duration-300">
                  <Target className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">Our Vision</h3>
                  <p className="text-[11px] text-amber-400/70 uppercase tracking-wider mt-0.5">FUTURE ROADMAP</p>
                </div>
              </div>
              
              <p className="text-base text-slate-300 font-light leading-relaxed">
                To become one of the most <span className="text-amber-400 font-medium">trusted financial service providers</span> by delivering innovative financial solutions and exceptional customer experiences.
              </p>
              
              <div className="mt-5 pt-3 border-t border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-300">Market Leadership Progress</span>
                  <span className="text-amber-400 font-medium">2027 Target</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Row 2: Core Values - Professional Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          {/* Section header for Core Values */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2">
              <Gem className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">THE FOUNDATION</span>
              <Gem className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-light text-white mt-2">
              Our <span className="font-semibold text-emerald-400">Core Values</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              const colorVariants = [
                "from-emerald-500/15 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
                "from-blue-500/15 to-blue-600/5 border-blue-500/20 text-blue-400",
                "from-amber-500/15 to-amber-600/5 border-amber-500/20 text-amber-400",
                "from-rose-500/15 to-rose-600/5 border-rose-500/20 text-rose-400",
                "from-purple-500/15 to-purple-600/5 border-purple-500/20 text-purple-400",
                "from-cyan-500/15 to-cyan-600/5 border-cyan-500/20 text-cyan-400"
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (idx * 0.05) }}
                  className="group relative p-5 bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorVariants[idx % colorVariants.length].split(' ')[0]} flex items-center justify-center border ${colorVariants[idx % colorVariants.length].split(' ')[2]} shrink-0`}>
                      <IconComponent className={`w-4 h-4 ${colorVariants[idx % colorVariants.length].split(' ')[4]}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/30 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Certification Badge */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] text-slate-300 tracking-wide">ISO Certified Financial Advisory Practices</span>
              <div className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="text-[11px] text-slate-400">RBI Compliant Framework</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 text-[19px] text-slate-500 uppercase tracking-[0.3em]">
            <span className="w-8 h-px bg-slate-700" />
            <span>Integrity • Transparency • Excellence</span>
            <span className="w-8 h-px bg-slate-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}