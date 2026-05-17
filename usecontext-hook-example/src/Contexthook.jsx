import React, { createContext, useContext } from "react";

const ThemeContext = createContext('light');

function Contexthook(){
  return (
    <div style={{border: '2px solid red', textAlign: 'center', padding: '5px'}}>
      <h2>Parent Comp</h2>
      <ComponentA />
    </div>
  );
}

function ComponentA(){
  return(
    <div style={{border: '2px solid orange', textAlign: 'center', padding: '5px'}}>
      <h2>Child Comp</h2>
      <ComponentB />
    </div>
  )
}

function ComponentB(){
  return(
    <div style={{border: '2px solid yellow', textAlign: 'center', padding: '5px'}}>
      <h2>Grand Child Comp</h2>
      <ThemedComponent />
    </div>
  )
}

function ThemedComponent(){

  const contextValue = useContext(ThemeContext);
  return(
    <div style={{border: '2px solid green', textAlign: 'center', padding: '5px'}}>
      <h2>Great Grand Child Comp</h2>
      <p>The current theme is {contextValue}</p>
    </div>
  );
}

export default Contexthook;