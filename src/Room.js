import React, { useState } from 'react';
import './Room.css'
function Room() {
    const [isLit,setLit] = useState(true)
    let [age,setAge] = useState(21)
    
  return (
   <div className= {`room ${isLit ? "lit" : "dark"}`}>
      <p>The room is : {isLit? "Lit" : 'Dark'} </p>
      <p>The age is : {age}</p>
        <br/>
        <button onClick = {()=> setLit(!isLit)}> On/Off </button>
        <button onClick = {()=> setAge(++age)}>Increase Age</button>
    </div>
  );
}

export default Room;
