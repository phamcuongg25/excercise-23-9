import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Todo List</h3>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
