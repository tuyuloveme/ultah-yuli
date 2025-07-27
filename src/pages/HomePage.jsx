import { useState } from "react";
import GreetingCard from "@/components/GreetingCard";
import ConfettiButton from "@/components/ConfettiButton";
import StartButton from "@/components/StartButton";
import BackgroundMusic from "@/components/BackgroundMusic";
import TypewriterText from "@/components/TypeWriterText";
import ConfettiBackground from "@/components/ConfettiBackground";
import BotIntro from "@/components/BotIntro";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Selamat Ulang Tahun! 🎉",
  "Semoga Harimu Indah! 💖",
  "Sukses & Bahagia! ✨",
  "Tetap Tersenyum! 🌟",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [isNameMatched, setIsNameMatched] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-pink-50">
      {isNameMatched && <BackgroundMusic />}
      <ConfettiBackground />

      {/* Overlay Gradient with Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-purple-100/60 to-blue-100/80 backdrop-blur-md z-10 mix-blend-overlay bg-noise"></div>

      <div className="relative z-20 w-full max-w-xs sm:max-w-md md:max-w-lg text-center">
        <AnimatePresence mode="wait">
          {!isStarted ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <StartButton onClick={() => setIsStarted(true)}>
                Hai, klik disini ya
              </StartButton>
            </motion.div>
          ) : !isNameMatched ? (
            <motion.div
              key="botintro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <BotIntro onNameMatch={() => setIsNameMatched(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.img
                src="/img.jpeg"
                alt="Foto Yuli"
                className="w-32 h-32 sm:w-60 sm:h-60 mx-auto rounded-full shadow-lg object-cover border-4 border-white active:scale-95 transition"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 drop-shadow tracking-wide"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                🎂 Happy Birthday, Yuli Maulidya 🎉
              </motion.h1>

              {/* Grid Cards Section with Bounce Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["🎂 Happy Birthday!", "💖 Always Happy!", "✨ Stay Blessed!"].map((text, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 bg-white/80 rounded-xl shadow text-pink-700 font-semibold active:scale-95 transition"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 + idx * 0.5, ease: "easeInOut" }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              {/* Greeting or Typewriter */}
              {!showTypewriter && <GreetingCard message={greetings[index]} />}

              {showTypewriter && (
                <div className="p-4 bg-white/80 rounded-2xl shadow-md text-center text-base whitespace-pre-line">
                  <TypewriterText
                    text={`Selamat bertambah usia, perempuan kuat, perempuan cantik, perempuan cerdas, perempuan baik, perempuan manis, perempuan yang suka hal-hal sederhana, perempuan yang selalu tersenyum, perempuan yang terkadang menjadi seorang komedian untuk dirinya dan orang lain, perempuan yang kalau sedih dan senang larinya ke sajak.

Semoga keberkahan selalu menyertai di setiap langkahmu, dan tetaplah bahagia. 💐`}
                    speed={100}
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {!showTypewriter && (
                  <ConfettiButton onClick={() => setIndex((prev) => (prev + 1) % greetings.length)}>
                    🎈 Ganti Ucapan
                  </ConfettiButton>
                )}

                <ConfettiButton onClick={() => setShowTypewriter(!showTypewriter)}>
                  💫 {showTypewriter ? "Tutup Ucapan Spesial" : "Lihat Ucapan Spesial"}
                </ConfettiButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
