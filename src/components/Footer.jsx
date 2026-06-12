import React from "react";
import {
  Shield,
  Award,
  ChevronRight,
  PhoneCall,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

const Footer = () => {
  // Direct Lead Vector Routing parameters
  const clientWhatsAppNumber = "919876543210";
  const clientPhoneLine = "+919876543210";

  const genericWhatsAppMessage = encodeURIComponent(
    "Hello Fintrust, I just explored your financial and marketing services on the website. I would like to get on a quick advisory call."
  );

  return (
    <footer className="bg-[#0B132B] text-white border-t border-white/10 px-6 lg:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#00A896]">
                FINTRUST
              </span>
            </div>
            
            <h3 className="text-2xl font-light tracking-tight">
              Financial <span className="font-semibold text-[#00A896]">Services</span>
            </h3>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Empowering dreams through transparent financial solutions and strategic growth partnerships.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-[10px] text-slate-300">SEBI Registered</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-[#00A896]" />
                <span className="text-[10px] text-slate-300">ISO Certified</span>
              </div>
            </div>
          </div>
          
          {/* Loan Products - Using a tags instead of Link */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#00A896]">
              Loan Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="/home-loan"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Home Loan</span>
                </a>
              </li>
              <li>
                <a 
                  href="/business-loan"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Business Loan</span>
                </a>
              </li>
              <li>
                <a 
                  href="/personal-loan"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Personal Loan</span>
                </a>
              </li>
              <li>
                <a 
                  href="/loan-against-property"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Loan Against Property</span>
                </a>
              </li>
              <li>
                <a 
                  href="/working-capital"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Working Capital</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Insurance Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#00A896]">
              Insurance
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="/health-insurance"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Health Insurance</span>
                </a>
              </li>
              <li>
                <a 
                  href="/life-insurance"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Life Insurance</span>
                </a>
              </li>
              <li>
                <a 
                  href="/corporate-risk"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Corporate Risk</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company & Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#00A896]">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="/"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a 
                  href="/seo-visibility"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#00A896] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  <span>SEO Visibility</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Middle Section - Contact & CTA (same as before) */}
        <div className="py-10 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#00A896]">
                Get In Touch
              </h4>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <PhoneCall className="w-4 h-4 text-[#00A896]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">24/7 Expert Helpline</p>
                  <a href={`tel:${clientPhoneLine}`} className="text-white font-semibold hover:text-[#00A896] transition-colors">
                    {clientPhoneLine}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  <MessageCircle className="w-4 h-4 text-[#00A896]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">WhatsApp Business</p>
                  <a href={`https://wa.me/${clientWhatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#00A896] transition-colors">
                    Click to Chat
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#00A896]/10 to-transparent rounded-xl p-5 border border-white/10">
              <p className="text-sm font-light text-slate-300 mb-3">
                Ready to transform your financial journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${clientWhatsAppNumber}?text=${genericWhatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#00A896] text-white text-sm font-semibold rounded-lg hover:bg-[#00897B] transition-all duration-300"
                >
                  <span>Start Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${clientPhoneLine}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Callback</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          
          <p className="text-slate-500 font-light">
            © {new Date().getFullYear()} Fintrust Financial Services. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-[#00A896] transition-colors text-[11px]">
              Terms & Conditions
            </a>
            <div className="w-px h-3 bg-white/20" />
            <a href="#" className="text-slate-500 hover:text-[#00A896] transition-colors text-[11px]">
              Privacy Policy
            </a>
            <div className="w-px h-3 bg-white/20" />
            <a href="#" className="text-slate-500 hover:text-[#00A896] transition-colors text-[11px]">
              Disclaimer
            </a>
          </div>
          
          {/* InnovateHive Attribution with Link */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[10px]">Developed by</span>
            <a 
              href="https://innovatehive.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00A896] font-semibold text-[10px] tracking-wide hover:text-white transition-colors duration-200"
            >
              INNOVATEHIVE
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;