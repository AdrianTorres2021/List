import React from 'react';
import { useState, useEffect } from 'react'
const Form = () => {
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
      <form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      >
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div> 
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </form>
    </div>
  );
};
export default Form;