import React from 'react'

const TodoItem = ({id,title,description,status,handleToggle,handleDelete}) => {
  return (
          <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td><button onClick={()=>handleToggle(id)} className="toggle">{status? "Completed":"Not Completed"}</button></td>
            <td>
              <button onClick={()=>handleDelete(id)} className="del">Delete</button>
            </td>
           
          </tr>
  
  )
}

export default TodoItem