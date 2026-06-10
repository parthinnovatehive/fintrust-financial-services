import { motion } from "framer-motion";

interface BubbleProps {
    lender: {
        name: string;
        logo: string;
        size: number;
    };

    x: number;
    y: number;

    repelX?: number;
    repelY?: number;

    floatAmplitude?: number;
    floatDuration?: number;
    floatDelay?: number;

    scale?: number;
    offsetX?: number;
    offsetY?: number;
}

export default function Bubble({
    lender,
    x,
    y,
    scale = 1,
    offsetX = 0,
    offsetY = 0,
    repelX = 0,
    repelY = 0,
    floatAmplitude = 0,
    floatDuration = 5,
    floatDelay = 0,
}: BubbleProps) {
    return (
        <motion.div
            className="absolute group"
            animate={{
                x: offsetX + repelX,

                y: [
                    offsetY + repelY,
                    offsetY + repelY - floatAmplitude,
                    offsetY + repelY,
                ],

                scale,
            }}
            transition={{
                scale: {
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                },

                x: {
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                },

                y: {
                    duration: floatDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: floatDelay,
                },
            }}
            style={{
                left: x,
                top: y,
                width: lender.size,
                height: lender.size,
                zIndex: Math.round(scale * 1000),
            }}
           whileHover={{
  scale: scale + 0.5,
}}
        >
            <div
                className="
  w-full
  h-full
  rounded-full
  bg-white
  shadow-xl
  flex
  items-center
  justify-center
  overflow-hidden
  border
  border-slate-100
  transition-all
  duration-700
  group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
"
            >

                <img
  src={lender.logo}
  alt={lender.name}
  className="
    w-[60%]
    h-[60%]
    object-contain
    transition-transform
    duration-500
    group-hover:scale-110
  "
/>

            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">

                <div className="bg-black text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {lender.name}
                </div>

            </div>
        </motion.div>
    );
}