import React from "react";
import { Phone } from "lucide-react";

export default function WhatsAppButton({ activePage = "home" }) {
  const targetPhoneNumber = "+919876543210"; // Core corporate contact line
  const cleanNumericPhone = "919876543210"; // WhatsApp API structure target

  // Contextual intent assignment based on active viewport state
  const getContextualWhatsAppUrl = () => {
    let customMessage = "Hello Fintrust Financial Services, I would like to know more about your financial advisory or digital marketing options.";
    
    if (activePage === "contact") {
      customMessage = "Hi Fintrust, I am viewing your corporate contact portal. I would like to schedule a strategy call regarding my requirements.";
    }
    
    return `https://wa.me/${cleanNumericPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  // SVG representation of the Official WhatsApp Corporate Icon
  const OfficialWhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <div className="z-50 font-sans antialiased selection:bg-transparent">
      
      {/* 💻 DESKTOP & TABLET ARCHITECTURE: Premium Layered Floating Action Stack */}
      <div className="hidden sm:flex flex-col gap-3.5 fixed bottom-8 right-8 items-end">
        
        {/* Hot Vector Node 1: Call Execution Hub */}
        <a
          href={`tel:${targetPhoneNumber}`}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#111625] text-white shadow-[0_8px_24px_rgba(17,22,37,0.25)] border border-slate-800/60 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Neon Floating Tooltip Node */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="bg-[#111625]/95 backdrop-blur-md text-white text-[10px] font-bold px-3.5 py-2 rounded-sm shadow-xl whitespace-nowrap tracking-widest border border-slate-700/50 uppercase">
              Call Direct Line
            </div>
          </div>
          <Phone className="w-4.5 h-4.5 stroke-[2]" />
        </a>

        {/* Hot Vector Node 2: Official WhatsApp Messaging Hub */}
        <a
          href={getContextualWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#128C7E] text-white shadow-[0_8px_24px_rgba(18,140,126,0.3)] hover:bg-[#075E54] transition-all duration-300 hover:-translate-y-1"
        >
          {/* Concentric Pulse Ambient Ring Effects */}
          <span className="absolute inset-0 rounded-full bg-[#128C7E] animate-ping opacity-20 -z-10" />
          
          {/* Neon Floating Tooltip Node */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="bg-[#128C7E]/95 backdrop-blur-md text-white text-[10px] font-bold px-3.5 py-2 rounded-sm shadow-xl whitespace-nowrap tracking-widest uppercase">
              Chat Live Now
            </div>
          </div>
          <OfficialWhatsAppIcon className="w-6 h-6" />
        </a>
      </div>

      {/* 📱 MOBILE VIEWPORT ARCHITECTURE: High-Contrast Fixed Floating Conversion Ribbon */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 grid grid-cols-2 bg-white border-t border-slate-200/80 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] h-16 divide-x divide-slate-100 z-50">
        
        {/* Call Hub Link Element */}
        <a
          href={`tel:${targetPhoneNumber}`}
          className="flex items-center justify-center gap-3 text-slate-800 bg-white active:bg-slate-50 transition-colors h-full text-[11px] font-bold tracking-widest uppercase"
        >
          <div className="w-8 h-8 bg-[#111625] text-white flex items-center justify-center rounded-full shadow-sm">
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
          <span>Call Now</span>
        </a>

        {/* Brand WhatsApp Instant Chat Element */}
        <a
          href={getContextualWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-[#128C7E] bg-[#128C7E]/5 active:bg-[#128C7E]/10 transition-colors h-full text-[11px] font-bold tracking-widest uppercase"
        >
          <div className="w-8 h-8 bg-[#128C7E] text-white flex items-center justify-center rounded-full shadow-sm">
            <OfficialWhatsAppIcon className="w-4 h-4" />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}