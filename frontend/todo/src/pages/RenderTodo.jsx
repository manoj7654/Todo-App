import React, { useEffect, useState } from "react";
import "./render.css"
import Pagination from "../Components/Pagination";
import TodoItem from "../Components/TodoItem";
function RenderTodo() {
  const [todo, setTodo] = useState([]);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(false)
  const [page,setPage]=useState(1)
  const [data,setData]=useState(0)
  const [search,setSearch]=useState("")


  async function fetchTodo(page,search) {
  console.log(search)

    let url=`https://jsonplaceholder.typicode.com/todos?${search}`
  
    setLoading(true)
    try {
      const result = await fetch(url);
      const totalData=result.headers.get("X-TOTAL-COUNT")
      // console.log(totalData)
      setData(totalData)
      const res = await result.json();
    
      console.log(res);
      setTodo(res);
      setLoading(false)
      setErr(false)
    } catch (error) {
      console.log(error);
      setErr(true);
      setLoading(false)
    }
  }
  // fetchTodo()
  const handleChange=(val)=>{
    setPage(page+val)
  }
  const handleToggle=(id)=>{
  // console.log("hii")
  //  console.log(id)
   const toggle=todo.map((ele)=>{
  
    return (ele.id==id)? {...ele,completed:!ele.completed}:ele
   })
   setTodo(toggle)
  }

const handleSearch=(e)=>{

setSearch(e.target.value)

}
const handleDelete=(id)=>{
// console.log(id)
const deleteTodo=todo.filter((ele)=>{
  return ele.id!=id
})

setTodo(deleteTodo)
}

  useEffect(() => {
    if(search && search!=""){
      fetchTodo(page,`_limit=20&_page=1&q=${search}`);
    }else{
    
      fetchTodo(page,`_limit=20&_page=${page}`);
      
    }
    // fetchTodo(page,search);
  },[page,search]);


  return  (
    <div>
     
      <div className="search">
        <input
          type="text"
          name=""
          id="search"
          placeholder="search todo by title or description"
          onChange={handleSearch}
          value={search}
        />
     
      </div>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>
              Title
            </th>
            <th>
              Description
            </th>
            <th>
              Status
            </th>
            <th>
              Action
            </th>
            
          </tr>
        </thead>
        <tbody>{loading? <h1>Loading...</h1>:err? <h1>Something went wrong</h1>:
        todo.map((ele)=>{
          // console.log(ele.completed)
        return(
          
        <TodoItem
        id={ele.id}
        title={ele.title}
        description={ele.description}
        status={ele.completed}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        />
        )
      })}
        </tbody>
      </table>
      <Pagination page={page} handleChange={handleChange} data={data}/>
    </div>
  );
}

export default RenderTodo;
