import { useState, useEffect } from "react";

export default function TypewriterText({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed(""); // Reset sebelum mulai
    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);


  return (
    <p className="whitespace-pre-line text-center text-pink-800 font-medium">
      {displayed}
    </p>
  );
}
