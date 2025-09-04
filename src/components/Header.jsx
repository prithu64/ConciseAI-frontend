import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
export default function Header({isDark,setDark}) {

  const toggleDark = ()=>{
    if(isDark === "dark"){
       setDark("")
    }else{
      setDark("dark")
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-4">
        
      <div className="flex items-center text-black dark:text-white transition-transform duration-300 hover:scale-105 cursor-pointer">
        <AiFillThunderbolt size={25} />
        <h1 className="text-xl font-semibold">ConciseAI</h1>
      </div>
      
      <div className="rounded-full border dark:text-white dark:border-white/40 ">
        {
          isDark === "dark" ? <IoIosMoon onClick={toggleDark} size={25} className="cursor-pointer p-1"/> :<IoSunnyOutline onClick={toggleDark} size={25} className="cursor-pointer p-1"/>
        }  
      </div>

    </div>
    </div>
   
  );
}