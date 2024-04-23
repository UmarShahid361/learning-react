
import './App.css';
import Card from './components/Card';

function App() {

  let myobj = {
    username: "Sinster",
    age : 21,
  };

  let user = ["Faizan", "Umar", "Ammad"]

  let newArray = [1,2,3,4];

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card username= {user} someValue = {myobj} someNew = {newArray} btnText={"CLICK ME"}/>
     <Card />
    </>
  )
}

export default App
