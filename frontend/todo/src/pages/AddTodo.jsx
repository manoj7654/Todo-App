import React, { useState } from 'react'
import "./addTodo.css"

const token=localStorage.getItem("token")
const AddTodo = ({add}) => {
  const [text,setText]=useState({title:"",description:"",status:false})
  const handleChange=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target.name)
    setText({...text,[e.target.name]:e.target.value})
  }

  const addTodo=async()=>{
  // 
  
  try {
    const result=await fetch("https://inquisitive-sundress-foal.cyclic.app/todos/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        Authorization:`${token}`
      },
      body:JSON.stringify(text)
    })
    const res=await result.json();
    console.log(res);
    if(result.ok){
      alert(res.message)
      setText(res)
    }else{
      alert(res.message)
    }
  } catch (error) {
    console.log(error)
  }

  setText("")
  }

  return (
    <div>
        <h1>Add Todo </h1>
         <div className="add">
      
      <div className="form">
            <input type="text" name="title" id="title" placeholder='Enter Title ' onChange={handleChange} />
            <input type="text" name="description" id="desc" placeholder='Enter Description' onChange={handleChange} />
            <button id="sub" onClick={addTodo}>Add</button>       

      </div>
         </div>
    </div>
  )
}

export default AddTodo