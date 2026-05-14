import React,{ useEffect, useState } from 'react'

import './App.css'
import MouseTracker from './MouseTracker'
import ParentComponent from './ParentComponent';

function App() {

  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App;
