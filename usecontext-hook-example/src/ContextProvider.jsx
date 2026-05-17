import React, { createContext, useContext } from "react"

const ThemeContext = createContext('light');

function ContextProvider(){
  return(
    <ThemeContext.Provider value='dark'>
      <div style={{border: '2px solid pink'}}>
        <h2>Parent Component</h2>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  )
}

function ComponentA(){
  return (
    <div style={{border: '2px solid blue'}}>
      <h2>Child Comp</h2>
      <ComponentB />
    </div>
  )
}

function ComponentB() {
  return(
    <div style={{border: '2px solid yellow'}}>
      <h2>Grand Child Component</h2>
      <ThemedComponent />
    </div>
  )
}

function ThemedComponent(){
  const contextValue = useContext(ThemeContext);

  return (
    <div style={{border: '2px solid orange'}}>
      <h2>Great Grand Child Comp</h2>
      <p>The current theme is {contextValue}</p>
    </div>
  )
}

export default ContextProvider;