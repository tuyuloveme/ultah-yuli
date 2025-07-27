import ReactCanvasConfetti from "react-canvas-confetti";
import { useRef, useEffect } from "react";

export default function ConfettiBackground() {
  const refAnimationInstance = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (refAnimationInstance.current) {
        refAnimationInstance.current({
          particleCount: 2,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
        });
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ReactCanvasConfetti
      refConfetti={(instance) => (refAnimationInstance.current = instance)}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
}
