import React, { useState } from 'react';

function Room() {
    const [isLit,setLit] = useState(true)
    let [age,setAge] = useState(21)
    const updateLit = () =>{
        
        console.log("button Clicked")
        setLit(!isLit)
    }
    const increaseAge = ()=>{
        setAge(++age)
    }
    
  return (
   <div>
      <p>The room is : {isLit? "Lit" : 'Dark'} </p>
      <p>The age is : {age}</p>
        <br/>
        <button onClick = {updateLit}> On/Off </button>
        <button onClick = {increaseAge}>Increase Age</button>
    </div>
  );
}

export default Room;
