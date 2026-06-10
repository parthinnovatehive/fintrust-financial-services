import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Landmark, BarChart3, ArrowUpRight, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onNavigate, activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'finance' | 'digital' | null
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  // Reusable sub-navigation item component
  const NavItem = ({ title, desc, target = "home" }) => (
    <button 
      onClick={() => {
        onNavigate(target);
        setIsOpen(false);
        setActiveMenu(null);
      }} 
      className="text-left w-full group flex flex-col p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-1 text-sm font-medium text-brand-navy group-hover:text-brand-blue">
        <span>{title}</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-brand-blue" />
      </div>
      <p className="text-xs text-slate-500 font-light mt-0.5">{desc}</p>
    </button>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <div 
          onClick={() => onNavigate("home")} 
          className="text-xl font-semibold tracking-tight text-brand-navy cursor-pointer"
        >
          Fin<span className="text-brand-blue font-bold">trust</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* Finance Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMenu("finance")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-2 ${
              activeMenu === "finance" ? "text-brand-blue" : "text-slate-600 hover:text-brand-navy"
            }`}>
              <span>Financial Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "finance" ? "rotate-180 text-brand-blue" : ""}`} />
            </button>

            {/* Finance Panel */}
            <AnimatePresence>
              {activeMenu === "finance" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/4 top-full w-[560px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-slate-100 text-xs font-bold uppercase text-brand-blue tracking-wider">
                      <Landmark className="w-3.5 h-3.5" />
                      Loan Solutions
                    </div>
                    <NavItem title="Home Loans" desc="Mortgage & equity top-up consulting." target="home" />
                    <NavItem title="Business Loans" desc="Unsecured MSME & corporate capital." target="home" />
                    <NavItem title="Personal Loans" desc="Flexible salary-backed credit channels." target="home" />
                    <NavItem title="Loan Against Property" desc="Monetize premium real estate assets." target="home" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-slate-100 text-xs font-bold uppercase text-brand-gold tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Insurance & Wealth
                    </div>
                    <NavItem title="Health Insurance" desc="Comprehensive operational medical shields." target="home" />
                    <NavItem title="Life & Term Plans" desc="Institutional financial protection assets." target="home" />
                    <NavItem title="Corporate Risk Schemes" desc="Enterprise-level commercial safety nets." target="home" />
                    <NavItem title="Working Capital Advisory" desc="Cash flow optimization blueprints." target="home" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Digital Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMenu("digital")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-2 ${
              activeMenu === "digital" ? "text-brand-digital" : "text-slate-600 hover:text-brand-navy"
            }`}>
              <span>Digital Marketing</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "digital" ? "rotate-180 text-brand-digital" : ""}`} />
            </button>

            {/* Digital Panel */}
            <AnimatePresence>
              {activeMenu === "digital" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[300px] bg-white border border-slate-200 rounded-xl shadow-xl p-4 flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2 px-3 pb-2 mb-2 border-b border-slate-100 text-xs font-bold uppercase text-brand-digital tracking-wider">
                    <BarChart3 className="w-3.5 h-3.5" />
                    Performance Growth
                  </div>
                  <NavItem title="SEO & Visibility" desc="Algorithmic ranking frameworks." target="home" />
                  <NavItem title="Google & PPC Ads" desc="High-intent targeted client acquisition." target="home" />
                  <NavItem title="Social Media Engineering" desc="Social presence & engagement strategies." target="home" />
                  <NavItem title="Lead Gen Campaigns" desc="Data-optimized conversion systems." target="home" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Text Links mapped to view hooks */}
          <button 
            onClick={() => onNavigate("home")} 
            className={`text-sm font-medium transition-colors cursor-pointer ${activePage === "home" ? "text-brand-blue" : "text-slate-600 hover:text-brand-navy"}`}
          >
            About Us
          </button>
          
          <button 
            onClick={() => onNavigate("contact")} 
            className={`text-sm font-medium transition-colors cursor-pointer ${activePage === "contact" ? "text-brand-blue" : "text-slate-600 hover:text-brand-navy"}`}
          >
            Contact
          </button>
        </div>

        {/* ACTIONS / CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => onNavigate("contact")}
            className="px-5 py-2.5 text-sm font-medium bg-brand-blue text-white rounded-md shadow-sm hover:bg-brand-navy transition-colors cursor-pointer"
          >
            Get Free Consultation
          </button>
        </div>

        {/* MOBILE MENU TRIGGER BUTTON */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden p-2 text-brand-navy hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAW OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-20 bg-white border-t border-slate-100 shadow-xl overflow-y-auto px-6 py-8 space-y-6"
          >
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-wider uppercase text-brand-blue px-2">Financial Solutions</p>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-blue">Home Loans</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-blue">Business Loans</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-blue">Personal Loans</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-blue">Insurance Plans</button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-wider uppercase text-brand-digital px-2">Digital Growth Suite</p>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-digital">SEO Audits</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-digital">Google PPC</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-digital">Social Ads</button>
                <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-sm text-slate-600 py-1.5 hover:text-brand-digital">Lead Generation</button>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="flex flex-col gap-4 pl-2">
              <button onClick={() => { onNavigate("home"); setIsOpen(false); }} className="text-left text-base font-medium text-brand-navy">About Fintrust</button>
              <button onClick={() => { onNavigate("contact"); setIsOpen(false); }} className="text-left text-base font-medium text-brand-navy">Contact & Support</button>
            </div>

            <button onClick={() => { onNavigate("contact"); setIsOpen(false); }} className="w-full py-3 bg-brand-blue text-white text-center font-medium rounded-lg shadow-sm">
              Get Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}