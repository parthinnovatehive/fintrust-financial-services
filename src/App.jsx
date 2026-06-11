import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import HomeLoan from "./pages/HomeLoan"; 
import BusinessLoan from "./pages/BusinessLoan";
import SEOVisibility from "./pages/SEOVisibility";
import PersonalLoan from "./pages/PersonalLoan";
import LoanAgainstProperty from "./pages/LoanAgainstProperty";
import HealthInsurance from "./pages/HealthInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import CorporateRisk from "./pages/CorporateRisk";
import WorkingCapital from "./pages/WorkingCapital";



function App() {
  const [activePage, setActivePage] = useState("home");
  const [scrollToSection, setScrollToSection] = useState(null);

  const navigate = (page, sectionId = null) => {
    setActivePage(page);
    
    if (page === "seo-visibility" && sectionId) {
      // Store the section to scroll to after SEOVisibility mounts
      setScrollToSection(sectionId);
    }
    
    window.scrollTo(0, 0);
  };

  // Handle scrolling to section after SEOVisibility page loads
  useEffect(() => {
    if (activePage === "seo-visibility" && scrollToSection) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          const navbarHeight = 96; // h-24 = 96px
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
        setScrollToSection(null);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [activePage, scrollToSection]);

  return (
    <div className="bg-white min-h-screen pb-16 sm:pb-0 relative">
      <Navbar onNavigate={navigate} activePage={activePage} />

      {activePage === "home" && <Home />}
      {activePage === "home-loan" && <HomeLoan />} 
      {activePage === "business-loan" && <BusinessLoan />} 
      {activePage === "personal-loan" && <PersonalLoan />}
      {activePage === "loan-against-property" && <LoanAgainstProperty />}
      {activePage === "health-insurance" && <HealthInsurance />}
      {activePage === "life-insurance" && <LifeInsurance />}
      {activePage === "corp-insurance" && <CorporateRisk />}
      {activePage === "working-capital" && <WorkingCapital />}

      {activePage === "seo-visibility" && <SEOVisibility />} 
      {activePage === "contact" && <Contact />}

      <WhatsAppButton activePage={activePage} />
    </div>
  );
}

export default App;