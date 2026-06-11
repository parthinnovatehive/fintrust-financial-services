import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

    const [transitionPhase, setTransitionPhase] =
  useState("idle");


  const navigate = (page) => {
  setActivePage(page);
};

  return (
    <div className="bg-white min-h-screen">

      <Navbar
        onNavigate={navigate}
        activePage={activePage}
      />


      
        {activePage === "home" && <Home />}

        {activePage === "contact" && (
          <Contact />
        )}
    </div>
  );
}

export default App;