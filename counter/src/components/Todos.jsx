import React, { useEffect, useState } from 'react'

const Todos = () => {
  const[todos, setTodos] = useState([]);
  const[newTodo,setNewTodo] = useState("");
  const saveInfo=()=> {
    fetch("http://localhost:3000/todos",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({text: newTodo,
      isCompleted:false,
      }),
    }).then((r)=>r.json())
    .then((d)=>{
      setTodos([...todos,d])
      setNewTodo("");
    });
    
  }
  useEffect(() =>{
    fetch("http://localhost:3000/todos")
  .then((r)=>r.json())
  .then((d)=>{
    // console.log(d)
    setNewTodo("");

  });
  },[]);
  return (
    <div>Todos
      <div>
        <div>
        <input value={newTodo} 
        onChange = {({target})=>setNewTodo(target.value)}/>
        
        <button onClick={saveInfo}>+</button>
        </div>
        
        {todos.map((todo)=>(
          <div key = {todo.id}>{todo.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Todos