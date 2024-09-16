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
  return (
    <div className="App">
        <div className="sideBar">
            <div className="upperSide">
                <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Chatgpt</span></div>
                <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                <div className="upperSideBottom">
                    <button className="query"><img src={msgIcon} alt="Query" />What is Programming ? </button>
                    <button className="query"><img src={msgIcon} alt="Query" />Hown to use an API ? </button>
                </div>
                

            </div>
            <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
              <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
              <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
            </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iure eius eveniet iusto nobis ipsa recusandae rem deserunt reiciendis id!</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perferendis asperiores repellat expedita voluptas eligendi adipisci culpa accusantium! Dolore tenetur placeat rerum, quia repudiandae cupiditate iusto neque amet vel beatae, aut ex ducimus quas reprehenderit assumenda delectus sapiente soluta odit. Nulla nemo sed, odit nam corporis tempore amet qui mollitia voluptatibus quaerat aspernatur officia sint? Consectetur, recusandae pariatur. Sunt inventore iste, ipsum tempore corrupti pariatur? Sunt perferendis officia iusto facere ad sit doloribus nobis voluptates hic perspiciatis, libero minima ex reprehenderit deleniti magni, cumque provident dolor odio repellendus repudiandae doloremque? Veniam consequuntur architecto illum at nemo velit saepe. Ipsam, impedit!</p>
            </div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
    </div>
  );
}

export default App;
