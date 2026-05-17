import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light')

function UpdateContextValue(){

  const [theme, setTheme] = useState('light');

  const toggleComponent = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  };

  return(
    <ThemeContext.Provider value={theme}>
      <div style={{border: '2px solid red'}}>
        <h2>Parent Component</h2>
        <button onClick={toggleComponent} style={{marginBottom: '10px'}}>Change Theme</button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  )

}

function ChildComponent(){
  return (
    <div style={{border: '2px solid green'}}>
      <h2>Child Component</h2>
      <ThemedComponent />
    </div>
  )
}

function ThemedComponent(){
  const contextValue = useContext(ThemeContext);

  return(
    <div style={{border: '2px solid blue'}}>
      <h2>Parent Component</h2>
      <p>The current theme is {contextValue}</p>
    </div>
  )
}

export default UpdateContextValue;