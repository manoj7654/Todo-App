import React, { useEffect, useState } from "react";
import "./render.css";
import Pagination from "../Components/Pagination";
import TodoItem from "../Components/TodoItem";
import AddTodo from "./AddTodo";
// import TodoAdd from "./TodoAdd";
function RenderTodo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(0);
  const [search, setSearch] = useState("");

  async function fetchTodo(page, search, isSub) {
    
    let url = `https://inquisitive-sundress-foal.cyclic.app/todos/${search}`;

    setLoading(true);
    try {
      const result = await fetch(url);

      const res = await result.json();

      console.log(res);
      // setTodo(res);
      if (isSub) {
        setTodo(res.result);
      } else {
        setTodo(res.task);
        setData(res.count);
      }
      setLoading(false);
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
      setLoading(false);
    }
    console.log(data)
  }
  // fetchTodo()
  const handleChange = (val) => {
    console.log("hii")
    console.log(val);
    setPage(page + val);
    console.log(page)
  };
  const handleToggle = async (_id) => {
    try {
      const toggle = await fetch(`https://inquisitive-sundress-foal.cyclic.app/todos/edit/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await toggle.json();
      console.log(res);
      if (toggle.ok) {
        alert(res.message);
      } else {
        alert(res.message);
      }
      // setTodo(res)
      let result = todo.map((ele) => {
        if (ele._id == _id) {
          return { ...ele, status: !ele.status };
        } else {
          return ele;
        }
      });
      setTodo(result);
      console.log(toggle);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleDelete = async (_id) => {
    try {
      const result = await fetch(`https://inquisitive-sundress-foal.cyclic.app/todos/remove/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      if (result.ok) {
        alert(res.message);
      } else {
        alert(res.message);
      }
      let deleteData = todo.filter((ele) => ele._id != _id);
      setTodo(deleteData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search && search != "") {
      fetchTodo(page, `search?query=${search}&limit=2&page=1`, true);
    } else {
      fetchTodo(page, `allTodo?limit=2&page=${page}`, false);
    }
    // fetchTodo(page,search);
  },[page, search]);

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
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
      {/* <AddTodo/>  */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((ele) => {
            // console.log(ele.completed)
            return (
              <TodoItem
                _id={ele._id}
                title={ele.title}
                description={ele.description}
                status={ele.status}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
      {/* <AddTodo handleAdd={handleAdd}/> */}
      <Pagination page={page} handleChange={handleChange} data={data} />
    </div>
  );
}

export default RenderTodo;
