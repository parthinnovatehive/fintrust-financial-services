import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton"; // <-- Import the new engine

function App() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page) => {
    setActivePage(page);
  };

  return (
    // Added pb-16 to ensure standard content does not get blocked on mobile screens by the sticky dock
    <div className="bg-white min-h-screen pb-16 sm:pb-0 relative">

      <Navbar
        onNavigate={navigate}
        activePage={activePage}
      />

      {activePage === "home" && <Home />}

      {activePage === "contact" && (
        <Contact />
      )}

      {/* Mounting the contextual action bar */}
      <WhatsAppButton activePage={activePage} />
      
    </div>
  );
}

export default App;