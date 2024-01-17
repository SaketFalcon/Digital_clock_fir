import React ,{ useState } from 'react';
import './App.css';

function App() {
  const date= new Date();
  const [time,setTime]=useState(date.toLocaleTimeString());
  setInterval(update,1000);
  function update(){
    
    const newTime=new Date().toLocaleTimeString();
    setTime(newTime)
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1> {time} </h1>
        <button onClick={update}>get Time</button>
      </div>
    </div>
  );
}

export default App;
