import React, { useState } from "react";

import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );
  return (
    
    <div className="App">
      <h1>TO DO LIST!</h1>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div className="Task-title"><h1>TASKS</h1></div>
      <div>
        {todos.map(({ text, complete }, i) => (
          <div 
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              /*backgroundColor: "lightblue",*/ textDecoration: complete ? "line-through" : "" 
            }} 
          >
            <ul>
              <li className="li-style">
                {text}
              </li>
            </ul>
          </div> 
        ))}
      </div>
      <button className="reset-button" onClick={() => setTodos([])}>Delete</button>
    </div>
  );
};
