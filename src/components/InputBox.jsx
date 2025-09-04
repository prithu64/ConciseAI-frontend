import { FaCircleArrowUp } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { useState } from "react";

export default function ChatInput({ onSend , setMode}) {
  const [input, setInput] = useState("");
  const [showMode,setShowMode] = useState(false)
  const [modeEmoji,setEmoji] = useState("🤓")

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleMode = ()=>{
    setShowMode((prev)=>!prev)
  }

  return (
    <div className="w-full max-w-3xl flex  rounded-full border border-black/50 dark:border-white/50">

      {/*input*/}
      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2.5 focus:outline-none dark:text-white"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      
       {/*mode button*/}
       <div className="relative flex border border-black/50 dark:border-white/50 my-2 rounded-full">
        <button
        onClick={handleMode}
        className="px-2  text-black dark:text-white cursor-pointer hover:scale-110 transition duration-300"
      >
        <RiUserSettingsFill size={20}/>
      </button>
        
           {/*mode list */}
           <ul className={`absolute bg-gray-700/50 backdrop-blur-lg text-white rounded-sm w-40 shadow-lg border  border-gray-200 ${showMode ? "opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"} transition-all duration-200  right-0 -top-18 text-sm text-black/60 border p-2`}>
             <li onClick={()=>{
              setEmoji("🤓")
              setMode("professional")
              }} className="border-b hover:text-black hover:bg-white cursor-pointer">Professional</li>
             <li onClick={()=>{
              setEmoji("😎")
              setMode("Chill Dude")
              }} className="border-b hover:text-black hover:bg-white cursor-pointer">Chill Dude</li>
             <li onClick={()=>{
              setEmoji("💅")
              setMode("Girly Girl")
              }} className="hover:text-black hover:bg-white cursor-pointer">Girly Girl</li>
           </ul>
        
       <button
        onClick={handleMode}
        className="px-2 text-base text-black cursor-pointer"
      >
       {modeEmoji}
      </button>
       
       </div>
      

      
       {/*send input*/}
      <button
        onClick={handleSend}
        className="px-2 dark:text-white text-black cursor-pointer hover:scale-110 transition duration-300"
      >
        <FaCircleArrowUp size={20}/>
      </button>

    </div>
  );
}
