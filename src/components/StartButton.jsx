// src/components/StartButton.jsx
export default function StartButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-pink-700 active:scale-95 transition duration-300"
    >
      {children}
    </button>
  );
}
