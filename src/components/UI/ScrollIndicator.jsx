import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center text-slate-400">
        <span className="text-sm">Scroll</span>

        <div className="mt-2 h-10 w-6 rounded-full border border-cyan-400 flex justify-center">
          <motion.div
            animate={{ y: [2, 18, 2] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-1 h-2 w-2 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;
