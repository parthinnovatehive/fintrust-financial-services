import { useEffect, useRef } from "react";
import { Compass, Target, Gem } from "lucide-react";
import { gsap } from "gsap";

export default function EthosSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-28 px-6 lg:px-16 bg-[#0B132B] text-white overflow-hidden">
      {/* Micro-texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase block">
            Corporate Foundations
          </span>
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            The Principles Guiding <span className="font-semibold text-blue-500">Our Operation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Mission */}
          <div 
            ref={(el) => (cardRefs.current[0] = el)}
            className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-sm transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle Professional Card Sheen */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.06)_0%,transparent_50%)]" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-sm bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Compass className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white">Our Mission</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                To empower individuals and businesses with accessible financial solutions while building long-term relationships based on trust, transparency, and excellence.
              </p>
            </div>
          </div>

          {/* Card 2: Vision */}
          <div 
            ref={(el) => (cardRefs.current[1] = el)}
            className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-sm transition-colors duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(212,163,89,0.06)_0%,transparent_50%)]" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-sm bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Target className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white">Our Vision</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                To become one of the most trusted financial service providers by delivering innovative financial solutions and exceptional customer experiences.
              </p>
            </div>
          </div>

          {/* Card 3: Values */}
          <div 
            ref={(el) => (cardRefs.current[2] = el)}
            className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-sm transition-colors duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(52,211,153,0.06)_0%,transparent_50%)]" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-sm bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Gem className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white">Core Values</h3>
              <ul className="grid grid-cols-1 gap-3 pt-1">
                {["Fiduciary Integrity", "Absolute Transparency", "Operational Excellence"].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light text-slate-300">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 