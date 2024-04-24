import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    console.log("Clicked", Math.random());
    if(counter == 20){
      setCounter(counter);
    }
    else {
      setCounter(preCounter => preCounter + 1)
      setCounter(preCounter => preCounter + 1)
    }
    
  }

  const removeValue = () => {
    console.log("Clicked", Math.random());
    if(counter == 0){
      setCounter(counter);
    }
    else {
      setCounter(counter - 1);
    }
  }
 
  return (
    <>
     <h1>Sinister Chill</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={
      addValue
     }>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
