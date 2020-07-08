import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hi!", "What's up?"])

  const sendMessage = (e) => {
    // Store messages
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Messenger App</h1>
      {/* Input Field */}
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

      {/* Button */}
      <button onClick={sendMessage}>Send message</button>

      {/* Messages */}
      <div>
        
      </div>
     </div>
  );
}

export default App;
