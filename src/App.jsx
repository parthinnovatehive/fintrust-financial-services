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
      setScrollToSection(sectionId);
    }
    
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (activePage === "seo-visibility" && scrollToSection) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          const navbarHeight = 96;
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

      {/* Pass navigate to each page component */}
      {activePage === "home" && <Home onNavigate={navigate} />}
      {activePage === "home-loan" && <HomeLoan onNavigate={navigate} />} 
      {activePage === "business-loan" && <BusinessLoan onNavigate={navigate} />} 
      {activePage === "personal-loan" && <PersonalLoan onNavigate={navigate} />}
      {activePage === "loan-against-property" && <LoanAgainstProperty onNavigate={navigate} />}
      {activePage === "health-insurance" && <HealthInsurance onNavigate={navigate} />}
      {activePage === "life-insurance" && <LifeInsurance onNavigate={navigate} />}
      {activePage === "corp-insurance" && <CorporateRisk onNavigate={navigate} />}
      {activePage === "working-capital" && <WorkingCapital onNavigate={navigate} />}
      {activePage === "seo-visibility" && <SEOVisibility onNavigate={navigate} />} 
      {activePage === "contact" && <Contact onNavigate={navigate} />}

      <WhatsAppButton activePage={activePage} />
    </div>
  );
}

export default App;