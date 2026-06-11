import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import HomeLoan from "./pages/HomeLoan"; 
import BusinessLoan from "./pages/BusinessLoan";
import SEOVisibility from "./pages/SEOVisibility";

function App() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0); // Ensures the user starts at the top of the new page
  };

  return (
    <div className="bg-white min-h-screen pb-16 sm:pb-0 relative">
      <Navbar onNavigate={navigate} activePage={activePage} />

      {/* 2. Add the route for home-loan */}
      {activePage === "home" && <Home />}
      {activePage === "home-loan" && <HomeLoan />} 
      {activePage === "business-loan" && <BusinessLoan />} 
      {activePage === "seo-visibility" && <SEOVisibility />} 
      {activePage === "contact" && <Contact />}

      <WhatsAppButton activePage={activePage} />
    </div>
  );
}
export default App;