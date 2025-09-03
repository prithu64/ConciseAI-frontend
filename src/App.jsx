import { useState } from 'react';
import './App.css'
import ChatWindow from './components/ChatWindow'
import Header from './components/Header'
import ChatInput from './components/InputBox'
import axios from 'axios';
import Loader from './components/Loader';
import Footer from './components/Footer';

function App() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode,setMode] = useState("professional");

  const handleSend = async (text) => {
    try {
    setMessages([...messages, { text, type: "user" }]);
    setLoading(true);
    const response = await axios.post("http://localhost:3000/api/v1/ai/getReply",{
      query : text,
      mode
    })

    const botReply = response.data.reply;

    if(botReply === undefined){
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong. try again", type: "bot" }]);
    }else{
      setMessages((prev)=>[...prev, { text:botReply, type: "bot" }]);
    }
  } catch (error){
      console.log("error : ",error);
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong.", type: "bot" }]);
    }finally{
      setLoading(false);
    }
  }
  

  return (
    <div className='flex flex-col h-screen justify-center items-center px-2'>
     <Header/>

     <div className='flex-1 overflow-y-auto flex flex-col items-center w-full '>
       <ChatWindow messages={messages}/>
       {loading && <Loader />}
     </div>
     
     
      <div
        className={`transition-all w-full duration-700 px-2 ${
          messages.length === 0
            ? "absolute inset-x-0 bottom-1/2 translate-y-1/2 flex justify-center"
            : "relative flex justify-center pb-4 md:pb-6"
        }`}
      >
        <ChatInput onSend={handleSend} setMode={setMode}/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
