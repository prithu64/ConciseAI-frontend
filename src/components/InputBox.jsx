import { FaCircleArrowUp } from "react-icons/fa6";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="w-full max-w-3xl flex  rounded-full border border-black/50 ">
      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 focus:outline-none"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 text-black cursor-pointer hover:scale-110 transition duration-300"
      >
        <FaCircleArrowUp size={20}/>
      </button>
    </div>
  );
}
