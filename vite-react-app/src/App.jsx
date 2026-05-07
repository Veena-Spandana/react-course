import { useState } from 'react'

import './App.css'

function App() {
  const welcomeMessage = "Hello World!";
  const buttonClick = "Click Me!";

  return (
    <div>
      <h1>{welcomeMessage}</h1>
      <h3>This is a Vite React App</h3>
      <button style={{backgroundColor: 'green', color: 'white'}}>{buttonClick}</button>
      <button style={{backgroundColor: 'black', color: 'white'}} onClick={() => alert("You just clicked this button. Anything you want?")}
      >Alert Me When I this click button!</button>
    </div>
  )
}

export default App;
