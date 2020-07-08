import React, { useState } from 'react';
import './App.css'

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

// Components
import Message from "./components/Message"

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    // Store messages
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Messenger App</h1>
      <form>
        {/* Input Field */}
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          {/* Button */}
          <Button type="submit" variant="contained" color="primary" disabled={!input} onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {/* Messages */}
      <div>
        {messages.map(message => (
          <Message text={message} key={message}/>
        ))}
      </div>
     </div>
  );
}

export default App;
