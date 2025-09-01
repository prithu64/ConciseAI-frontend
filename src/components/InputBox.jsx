// ChatInput.jsx
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="w-full max-w-md flex mt-4">
      <input
        type="text"
        placeholder="Type your question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded-l px-4 py-2 focus:outline-indigo-500"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-indigo-500 text-white px-4 py-2 rounded-r hover:bg-indigo-600"
      >
        Send
      </button>
    </div>
  );
}
