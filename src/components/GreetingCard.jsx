export default function GreetingCard({ message }) {
  return (
    <div className="bg-white/70 p-4 rounded-2xl shadow-xl text-center text-lg backdrop-blur">
      {message}
    </div>
  );
}
