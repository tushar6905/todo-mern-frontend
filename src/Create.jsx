import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    if (!task.trim()) return ;
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((resuult) => {
        console.log(resuult);
        setTask("");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {}, [task]);
  return (
    <div className="create_form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Todo"
        className="input_box"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
