import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";

function App() {
  const [activePage, setActivePage] = useState("home");

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const [isInitialLoad, setIsInitialLoad] =
    useState(true);

    const [transitionPhase, setTransitionPhase] =
  useState("idle");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const navigate = (page) => {
  if (
    page === activePage ||
    transitionPhase !== "idle"
  )
    return;

  setTransitionPhase("covering");

  setTimeout(() => {
    setActivePage(page);

    setTransitionPhase("revealing");
  }, 1200);

  setTimeout(() => {
    setTransitionPhase("idle");
  }, 2400);
};

  return (
    <div className="bg-white min-h-screen">

      <Navbar
        onNavigate={navigate}
        activePage={activePage}
      />

      <PageTransition
  phase={transitionPhase}
  isInitialLoad={isInitialLoad}
/>

      <motion.div
        animate={{
          opacity:
            isTransitioning ? 0 : 1,
          scale:
            isTransitioning ? 0.985 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {activePage === "home" && <Home />}

        {activePage === "contact" && (
          <Contact />
        )}
      </motion.div>
    </div>
  );
}

export default App;