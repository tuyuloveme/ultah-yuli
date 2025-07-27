import { useState } from "react";

export default function BotIntro({ onNameMatch }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const name = input.trim().toLowerCase();
    if (name === "yuli maulidya") {
      onNameMatch(); // signal ke parent
    } else {
      setError("Ups, sepertinya itu bukan nama yang kuharapkan. Coba lagi ya 😊");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 text-center">
      <h1 className="text-2xl font-bold text-pink-700 mb-4">🎀 Hai! Aku chatbot kejutan 🎀</h1>
      <p className="text-lg text-gray-700 mb-2">Boleh tau nama kamu siapa? 😊</p>

      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
        className="px-4 py-2 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-center"
        placeholder="Tulis nama kamu di sini..."
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition"
      >
        Kirim
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
