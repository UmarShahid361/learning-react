import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hook
  const passwordRef = useRef(null);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*(){}[]";

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (

    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700" >
      <h2 className="text-4xl text-center text-white my-3">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passwordRef}/>
          <button className="hover:bg-orange-600 outline-none px-4 py-0.5 shrink-0 text-white bg-orange-500" onClick={copyPasswordToClipboard}> Copy </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
          <input type="range" min={6} max={50} value={length} className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className="text-white">Length : {length} </label>
          <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked = {numberAllowed} id="numberInput" onChange={() => setNumberAllowed((prev) => !prev)} />
          <label className="text-white"> Numbers </label>
        </div>
        <input type="checkbox" defaultChecked = {characterAllowed} id="characterInput" onChange={() => setCharAllowed((prev) => !prev)} />
          <label className="text-white"> Characters </label>
        </div>
      </div>
    </>
  )
}

export default App
