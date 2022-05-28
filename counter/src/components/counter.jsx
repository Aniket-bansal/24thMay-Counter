import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log("Inside 1")
    });
  
    
  return (
   
       
         
           <div className="App" onClick={()=>{setCount(count+1)}} >
              <h1>Counter : {count}</h1>
           </div>
         
       
  )
}

export default Counter