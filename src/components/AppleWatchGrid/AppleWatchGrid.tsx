import Bubble from "./Bubble";
import { lenders } from "./data/lenders";
import { generateHoneycomb } from "./utils/generateHoneycomb";
import { motion } from "framer-motion";
import { useMouseField } from "./hooks/useMouseField";
import { calculateInfluence } from "./utils/calculateInfluence";
import { useRepulsionPhysics } from "./hooks/useRepulsionPhysics";
import { useFloatingNodes } from "./hooks/useFloatingNodes";

const expandedLenders = Array.from(
  { length: 48 },
  (_, i) => lenders[i % lenders.length]
);

const positions = generateHoneycomb(
  expandedLenders.length
);

export default function AppleWatchGrid() {
  const {
    mouse,
    handleMouseMove,
    handleMouseLeave,
  } = useMouseField();

  const scales = positions.map(
    (pos, index) =>
      calculateInfluence(
        pos.x,
        pos.y,
        expandedLenders[index].size,
        mouse.x,
        mouse.y,
        mouse.active
      ).scale
  );

  const repulsion =
    useRepulsionPhysics(
      positions,
      scales
    );

  const floatingNodes =
    useFloatingNodes(
      expandedLenders.length
    );

  return (
    <section className="relative py-32 bg-[#071B47] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        {mouse.active && (
          <motion.div
            className="absolute pointer-events-none rounded-full blur-[120px]"
            animate={{
              x: mouse.x - 200,
              y: mouse.y - 200,
            }}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
            style={{
              width: 400,
              height: 400,
              background:
                "rgba(59,130,246,0.12)",
            }}
          />
        )}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <span className="uppercase text-xs tracking-[0.3em] text-slate-400">
          Lending Network
        </span>

        <h2 className="text-5xl font-light text-white mt-4">
          Our Lending Partners
        </h2>
      </div>

      {/* Honeycomb */}
      <div className="relative z-10 flex justify-center">
        <motion.div
          className="relative"
          animate={{

            x: mouse.active
              ? (mouse.x - 600) * 0.02
              : 0,

            y: mouse.active
              ? (mouse.y - 450) * 0.02
              : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          style={{
            width: 1200,
            height: 750,
          }}
        >
          {mouse.active && (
            <div
              className="absolute w-3 h-3 bg-red-500 rounded-full z-[99999] pointer-events-none"
              style={{
                left: mouse.x,
                top: mouse.y,
              }}
            />
          )}
          {expandedLenders.map((lender, index) => {
            const pos = positions[index];

            const influence =
              calculateInfluence(
                pos.x,
                pos.y,
                lender.size,
                mouse.x,
                mouse.y,
                mouse.active
              );



            return (
              <Bubble
                key={index}
                lender={lender}
                x={pos.x}
                y={pos.y}
                scale={influence.scale}
                offsetX={influence.offsetX}
                offsetY={influence.offsetY}
                repelX={repulsion[index].x}
                repelY={repulsion[index].y}
                floatAmplitude={
                  floatingNodes[index].amplitude
                }
                floatDuration={
                  floatingNodes[index].duration
                }
                floatDelay={
                  floatingNodes[index].delay
                }
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}