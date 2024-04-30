import React, { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount]=useState(0)
  const Increase =()=>{
    setcount(count+1);
  }
  const Decrease =()=>{
    if(count>0){
      setcount(count-1);
    }
  }
  return (
    <div>
      <div className="counter">
        <h2>Counter-App</h2>
        <h3>{count}</h3>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
      
    </div>
  )
}

export default App
