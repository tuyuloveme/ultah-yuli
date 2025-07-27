import { useCallback } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function ConfettiButton({ onClick, children }) {
  const handleClick = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    onClick && onClick();
  }, [onClick]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-white rounded-lg shadow hover:bg-opacity-80 transition"
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}
