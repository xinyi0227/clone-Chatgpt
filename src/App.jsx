import { useEffect, useRef, useState } from 'react';
import './App.css';
import gptLogo from './assets/chatgpt.svg'; 
import addBtn from './assets/add-30.png'; 
import msgIcon from './assets/message.svg'; 
import home from './assets/home.svg'; 
import saved from './assets/bookmark.svg'; 
import rocket from './assets/rocket.svg'; 
import sendBtn from './assets/send.svg'; 
import userIcon from './assets/user-icon.png'; 
import gptImgLogo from './assets/chatgptLogo.svg'; 

function App() {

  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I’m ChatGPT, an AI assistant created by OpenAI...",
      isBot: true,
    }
  ]);
  
  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  },[messages]);

  const [response, setResponse] = useState("");

  const handleSend = async () => {

    const text = input;
    setInput('');
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);

    if (!input.trim()) return; // Prevent sending an empty message
    try {
      const res = await fetch('http://localhost:5000/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const result = await res.json();
      
      // Update messages with user input and bot response
      setMessages(prevMessages => [
        ...prevMessages,
        { text: input, isBot: false },  // User message
        { text: result.message, isBot: true }  // Bot response from the server
      ]);
  
      setInput("");  // Clear input after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleEnter = async (e)=>{
    if(e.key === 'Enter') await handleSend();
  }

  const handleQuery = async(e)=> {
    const text = e.target.value;
    setMessages([
      ...messages,
      { text, isBot: false }
    ]);

    if (!input.trim()) return; // Prevent sending an empty message
    try {
      const res = await fetch('http://localhost:5000/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const result = await res.json();
      
      // Update messages with user input and bot response
      setMessages(prevMessages => [
        ...prevMessages,
        { text: input, isBot: false },  // User message
        { text: result.message, isBot: true }  // Bot response from the server
      ]);
  
      setInput("");  // Clear input after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Chatgpt</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value="What is Programming?">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
            <button className="query" onClick={handleQuery} value="How to use an API?">
              <img src={msgIcon} alt="Query" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="" />
              <p className="txt">
                { message.text }
              </p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input 
              type="text" 
              placeholder='Send a message' 
              value={input} 
              onKeyDown={handleEnter}
              onChange={(e) => setInput(e.target.value)} 
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
