import React, { useEffect, useState } from 'react'

function Hooks() {
    let count =0;
    const[fcount,setCount]= useState(count)
    useEffect(()=>{
        document.getElementById('bu').innerHTML =`count change to ${fcount}`
    })
  return (
    <div>
        <h1> {fcount}</h1>
      <button onClick={()=>{setCount(fcount+1)}} id='bu'>Click Here to Count</button>
    </div>
  )
}

export default Hooks