import { useState } from "react";

function App() {

  const [color, setColor] = useState("yellow");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-64 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-2 py-2 rounded-xl">
          <button onClick={()=> setColor("red")} className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "red"}}>Red</button>
          <button  onClick={()=> setColor("blue")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "blue"}}>Blue</button>
          <button  onClick={()=> setColor("yellow")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "yellow"}}>Yellow</button>
          <button  onClick={()=> setColor("purple")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "purple"}}>Purple</button>
          <button  onClick={()=> setColor("maroon")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "maroon"}}>Maroon</button>
          <button  onClick={()=> setColor("green")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "green"}}>Green</button>
          <button  onClick={()=> setColor("white")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "white"}}>White</button>
          <button  onClick={()=> setColor("black")}className="outline-none px-6 py-1 text-lg rounded-2xl text-white" style={{backgroundColor : "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
