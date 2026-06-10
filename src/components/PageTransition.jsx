import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  phase,
  isInitialLoad,
}) {
  return (
    <AnimatePresence>
      {(phase !== "idle" || isInitialLoad) && (
        <motion.div
          initial={{
            y: "-100%",
          }}
          animate={{
            y:
              phase === "covering"
                ? "0%"
                : phase === "revealing"
                ? "100%"
                : "100%",
          }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 bg-slate-950 z-[9999]"
        />
      )}
    </AnimatePresence>
  );
}