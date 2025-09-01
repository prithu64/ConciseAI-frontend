import { IoCopy } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function ChatWindow({ messages }) {
  const [checkMark,setCheck] = useState(false);
  return (
    <div className={`w-full max-w-3xl ${messages.length === 0 ? "md:mt-48 mt-53":"h-[full] "}  bg-white  rounded  p-2 flex flex-col overflow-y-auto`}>
      {messages.length === 0 ? (
        <p className="bg-gradient-to-r from-slate-400 to-zinc-800 bg-clip-text text-transparent p-2 font-semibold text-center text-3xl md:text-4xl lg:text-5xl ">What you thinking ?</p>
      ) : (
        messages.map((msg, id) => (
          <div key={id} className={`mb-2 flex text-sm ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg mb-1 max-w-[70%] ${msg.type === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
              {msg.text}
             
            </div>
            {
                msg.type === "bot" && (
                  <div className="cursor-pointer flex items-baseline-last ml-1">
                    {
                      checkMark ? <FaCheckCircle size={12} color="gray"/> :   <IoCopy onClick={()=>{
                      navigator.clipboard.writeText(msg.text)
                      setCheck(true);
                      setTimeout(()=>{setCheck(false)},1000)
                      }} color="gray" size={12}/>
                    }
                  </div>
                )
              }
          </div>
        ))
      )}
    </div>
  );
}
