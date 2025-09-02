import { AiFillThunderbolt } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
export default function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-4">
        
      <div className="flex items-center text-black transition-transform duration-300 hover:scale-105 cursor-pointer">
        <AiFillThunderbolt size={25} />
        <h1 className="text-xl font-semibold">ConciseAI</h1>
      </div>
      
      <div className="rounded-full border">
        <IoSunnyOutline size={25} className="cursor-pointer p-1"/>
      </div>

    </div>
    </div>
   
  );
}