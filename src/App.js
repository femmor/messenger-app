import React, { useState, useEffect } from 'react';
import './App.css'

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

// Components
import Message from "./components/Message/Message"

function App() {

  // useState
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("")

  // useEffect
  useEffect(() => {
    // run code here
    // if condition is empty, it only runs once when the component loads
    // runs everytime if there is a condition
    setUsername(prompt("Please enter your name"))

  }, [])  // condition

  // Send message method
  const sendMessage = (e) => {
    e.preventDefault()
    // Store messages
    setMessages([...messages, {username: username, text: input}])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Messenger App</h1>
      {username ? `Welcome ${username}` : null}
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
          <Message key={message.text} message={message} username={username}/>
        ))}
      </div>
     </div>
  );
}

export default App;
