import { useState } from 'react';
import './App.css'
import ArrayCounter from './ArrayCounter';
// import ProfileCard from './ProfileCard'

function App(){
  return (
    <ArrayCounter />
  );
}


// function App(){
//   //useState
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

// const incrementCount = () => {
//   setCount(count + step);
// };

// const decrementCount = () => {
//   setCount(count - step);
// };

// const incrementTwice = () => {
//   setCount(prevCount => prevCount + 1);
//   setCount(prevCount => prevCount + 1);
// }

//   return(
//     <div className='app-container'>
//       <h2>Counter Value: {count}</h2>
      
//     <span>
//       <input type='number'
//               value={step}
//               onChange={(e) => setStep(parseInt(e.target.value))}/> {/* value is passed as string so it should be prased to int */}
//       <button onClick={incrementCount}>Increment Count</button>
//       <button onClick={decrementCount}>Decrement Count</button>
//       <button onClick={incrementTwice}>+2</button>
//     </span>
      
//       {/* <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setCount(count - 1)}>Decrement Count</button> */}
//     </div>
//   );

// }
// function App(){

//   const handleHobbyClick = (hobby) => {
//     alert(`You clicked on ${hobby}`);
//   };

//   //objects
//   const aliceProfile = {
//     name:"Alice",
//     age:25,
//     isMember:true,
//     hobbies:["Reading","Cooking"],
//     onHandleClick:handleHobbyClick
//   };

//   const johnProfile = {
//     name:"John",
//     age:25,
//     isMember:false,
//     hobbies:["Swimming","Drawing"],
//     onHandleClick:handleHobbyClick
//   };

//   const boBProfile = {
//     name:"Bob",
//     age:25,
//     isMember:true,
//     hobbies:["Gardening","Jogging"],
//     onHandleClick:handleHobbyClick
//   };

//   return (
//     <div className='app-container'>
//       {/* spread operator */}
//       <ProfileCard {...aliceProfile}/>
//       <ProfileCard {...johnProfile}/>
//       <ProfileCard {...boBProfile}/>
//     </div>
//   );
// }
// function App(){
//   // Using props

//   const hobby1 = ["Reading", "Cooking"];
//   const handleHobbyClick = (hobby) => {
//     alert(`You clicked on: ${hobby}`);
//   };
//   return(
//     <div className='app-container'>
//       <ProfileCard 
//                   name="Alice" 
//                   age="25" 
//                   isMember={true} 
//                   hobbies={hobby1} 
//                   onHandleClick={handleHobbyClick}/>

//       <ProfileCard 
//                   name="John" 
//                   age="28" 
//                   isMember={false} 
//                   hobbies={["Swimming","Drawing"]} 
//                   onHandleClick={handleHobbyClick}/>

//       <ProfileCard 
//                   name="Bob" 
//                   age="35" 
//                   isMember={true} 
//                   hobbies={["Gardening","Jogging"]} 
//                   onHandleClick={handleHobbyClick}/>
//     </div>
//   )
// }

// function welcomeMessage(name){
//   return <h1>Hello, {name}</h1>;
// }

// function greeting(isMorning){
//   if(isMorning){
//     return <h2>Good, Morning!</h2>;
//   }else{
//     return <h2>Good, Evening!</h2>;
//   }
// }

// function showAlert(condition,message){

//   if(condition){
//     return <h3>{message}</h3>;
//   }

//   return <h3>This is not mandatory!</h3>;
// }

// function alertMessage(message){
//   return <h3>{message}</h3>
// }

// function showAlert(condition, message){
//   if(condition){
//     return alertMessage(message);
//   }

//   return <h3>This is not mandatory!</h3>;
// }

// function App() {

//   const now = new Date();
//   const isMorning = now.getHours() < 12;

//   return(
//     <div className='center'>
//       {welcomeMessage("Alice")}
//       {welcomeMessage("John")}
//       {greeting(isMorning)}
//       {showAlert(false, "This is important!")}
//     </div>
//   )

//   // Conditional Rendering
//   // let isLoggedIn = true;

//   // if(isLoggedIn){
//   //   return <h1>Hello World!, You are Logged In Successfully.</h1>
//   // }

//   // return <h1>Please Log In.</h1>

//   // let element = isLoggedIn ? "Welcome!" : "Please Log In"

//   // let messages = ["Hello"]

//   // return (
//   //   <div>
//   //      <h1>
//   //     {element}
//   //   </h1>

//   //   {messages.length > 0 && <h3>You have {messages.length} unread messages</h3>}

//   //   {/* && operator left hand side code/condition is executed/checked first
//   //   if that is true - LHS is executed 
//   //   if not - LHS is not executed */}
//   //   </div>
  
//   // )

//   // const welcomeMessage = "Hello World!";
//   // const buttonClick = "Click Me!";

//   // return (
//   //   <div id='center'>
//   //     <h1>{welcomeMessage}</h1>
//   //     <h3>This is a Vite React App</h3>
//   //     <button style={{backgroundColor: 'green', color: 'white'}}>{buttonClick}</button>
//   //     <button style={{backgroundColor: 'black', color: 'white'}} onClick={() => alert("You just clicked this button. Anything you want?")}
//   //     >Alert Me When I this click button!</button>
//   //   </div>
//   // )
// }

export default App;
