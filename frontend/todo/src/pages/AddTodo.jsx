import React from 'react'
import "./addTodo.css"
const AddTodo = () => {
  return (
    <div>
        <h1>Add Todo </h1>
         <div className="add">
         <form>
            <input type="text" name="" id="title" placeholder='Enter Title ' />
            <input type="text" name="desc" id="desc" placeholder='Enter Description' />
            <input type="submit" name="" id="sub" value="Add" />
        </form>
         </div>
    </div>
  )
}

export default AddTodo