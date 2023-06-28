import React, { useState } from 'react'
import "./addTodo.css"
const AddTodo = ({add}) => {
  const [text,setText]=useState({title:"",description:"",status:false})
  const handleChange=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target.name)
    setText({...text,[e.target.name]:e.target.value})
  }

  const addTodo=()=>{
  // handleAdd(text)
  // add(text)
  console.log(text)
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