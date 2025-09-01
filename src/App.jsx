import { useState } from 'react';
import './App.css'
import ChatWindow from './components/ChatWindow'
import Header from './components/Header'
import ChatInput from './components/InputBox'
import axios from 'axios';
import Loader from './components/Loader';

function App() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    try {
    setMessages([...messages, { text, type: "user" }]);
    setLoading(true);
    const response = await axios.post("http://localhost:3000/api/v1/ai/getReply",{
      query : text
    })

    const botReply = response.data.reply;
    setMessages((prev)=>[...prev, { text:botReply, type: "bot" }]);
  } catch (error){
      console.log("error : ",error);
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong.", type: "bot" }]);
    }finally{
      setLoading(false);
    }
  }
  

  return (
    <div className='flex flex-col justify-center items-center'>
     <Header/>
     <ChatWindow messages={messages}/>
      {loading && <Loader />}
     <ChatInput onSend={handleSend}/>
    </div>
  )
}

export default App
