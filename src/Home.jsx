import React, { useEffect, useState } from "react";
import Create from "./Create";
import "./App.css";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleDelte=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  }
  const handleEdit =(id)=>{
    axios.put("http://localhost:3001/update/"+id)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [, todos]);
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo,index) => (
          <div className="todo">
            <div key={index} className="checkbox" onClick={()=>handleEdit(todo._id)}>
              {
                todo.done ? <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                :
              <BsCircleFill className="icon" />
              }
              <p className={todo.done?'line':''}>
              {todo.task}

              </p>
            </div>
            <div>
              <span>
                <BsFillTrashFill onClick={()=>handleDelte(todo._id)} className="icon" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
