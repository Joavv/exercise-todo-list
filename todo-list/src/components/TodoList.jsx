import React from "react";
import { useState } from "react";
import "../styles/TodoList.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);

  const addTask = (event) => {
    event.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const delTask = (task) => {
    setTaskList([...taskList.filter((taskItem) => taskItem !== task)]);
    setTask("");
  };

  return (
    <div className="container">
      <h1 className="todo-title text-center font-weight-light">todos</h1>
      <div className="list-group w-50 m-auto shadow">
        <form onSubmit={addTask}>
          <input
            id="submit"
            type="text"
            className="list-group-item w-100"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        {taskList.map((task) => (
          <li className="list-group-item">
            <div className="listed w-100 float-left">
              <label>{task}</label>
            </div>
            <button
              className="delete close"
              onClick={() => delTask(task)}
              value="asd"
            ></button>
          </li>
        ))}
        <footer className="footer pl-2">
          <p className="pt-2">
            {taskList.length !== 1
              ? taskList.length + " items "
              : taskList.length + " item "}
            left
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TodoList;
