import './App.css'

function welcomeMessage(name){
  return <h1>Hello, {name}</h1>;
}

function greeting(isMorning){
  if(isMorning){
    return <h2>Good, Morning!</h2>;
  }else{
    return <h2>Good, Evening!</h2>;
  }
}

function showAlert(condition,message){

  if(condition){
    return <h3>{message}</h3>;
  }

  return <h3>This is not mandatory!</h3>;
}

function alertMessage(message){
  return <h3>{message}</h3>
}

function showAlert(condition, message){
  if(condition){
    return alertMessage(message);
  }

  return <h3>This is not mandatory!</h3>;
}

function App() {

  const now = new Date();
  const isMorning = now.getHours() < 12;

  return(
    <div className='center'>
      {welcomeMessage("Alice")}
      {welcomeMessage("John")}
      {greeting(isMorning)}
      {showAlert(false, "This is important!")}
    </div>
  )

  // Conditional Rendering
  // let isLoggedIn = true;

  // if(isLoggedIn){
  //   return <h1>Hello World!, You are Logged In Successfully.</h1>
  // }

  // return <h1>Please Log In.</h1>

  // let element = isLoggedIn ? "Welcome!" : "Please Log In"

  // let messages = ["Hello"]

  // return (
  //   <div>
  //      <h1>
  //     {element}
  //   </h1>

  //   {messages.length > 0 && <h3>You have {messages.length} unread messages</h3>}

  //   {/* && operator left hand side code/condition is executed/checked first
  //   if that is true - LHS is executed 
  //   if not - LHS is not executed */}
  //   </div>
  
  // )

  // const welcomeMessage = "Hello World!";
  // const buttonClick = "Click Me!";

  // return (
  //   <div id='center'>
  //     <h1>{welcomeMessage}</h1>
  //     <h3>This is a Vite React App</h3>
  //     <button style={{backgroundColor: 'green', color: 'white'}}>{buttonClick}</button>
  //     <button style={{backgroundColor: 'black', color: 'white'}} onClick={() => alert("You just clicked this button. Anything you want?")}
  //     >Alert Me When I this click button!</button>
  //   </div>
  // )
}

export default App;
