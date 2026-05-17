function Propdrilling(){
  const theme = 'light';

  return (
    <div style={{border: '2px solid violet', textAlign: 'center', padding: '5px'}}>
      <h2>Parent Component</h2>
      <ComponentA theme={theme}/>
    </div>
  );
}

function ComponentA({theme}){
  return (
    <div style={{border: '2px solid blue', padding: '5px'}}>
      <h2>Child Component</h2>
      <ComponentB theme={theme}/>
    </div>
  );
}

function ComponentB({theme}){
  return (
    <div style={{border: '2px solid green', padding: '5px'}}>
      <h2>Grand Child Component</h2>
      <ThemedComponent theme={theme}/>
    </div>
  )
}

function ThemedComponent({theme}){
 return (
  <div style={{border: '2px solid orange', padding: '5ppx'}}>
    <h2>Great Grand Child Component</h2>
    <p>The current theme is {theme}</p>
  </div>
 )
}

export default Propdrilling;