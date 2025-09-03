import { FaCircleArrowUp } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { useState } from "react";

export default function ChatInput({ onSend , mode}) {
  const [input, setInput] = useState("");
  const [showMode,setShowMode] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleMode = ()=>{
    setShowMode((prev)=>!prev)
  }

  return (
    <div className="w-full max-w-3xl flex  rounded-full border border-black/50 ">

      {/*input*/}
      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2.5 focus:outline-none"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      
       {/*mode button*/}
       <div className="relative flex ">
        <button
        onClick={handleMode}
        className="px-2  text-black cursor-pointer hover:scale-110 transition duration-300"
      >
        <RiUserSettingsFill size={20}/>
      </button>
        
           {/*mode list */}
           <ul className={`absolute bg-gray-700/50 backdrop-blur-lg text-white rounded-sm w-40 shadow-lg border p-2 border-gray-200 ${showMode ? "opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"} transition-all duration-200  right-0 -top-18 text-sm text-black/60 border p-2`}>
             <li>Professional</li>
             <li>Chill Dude</li>
             <li>Girly Girl</li>
           </ul>
        
       
       </div>
      

      
       {/*send input*/}
      <button
        onClick={handleSend}
        className="px-2  text-black cursor-pointer hover:scale-110 transition duration-300"
      >
        <FaCircleArrowUp size={20}/>
      </button>

    </div>
  );
}
