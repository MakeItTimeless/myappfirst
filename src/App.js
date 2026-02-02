import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const handleToggle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
            <span
              onClick={() => handleToggle(index)}
              className={todo.completed ? 'completed' : ''}
              style={{
                cursor: 'pointer',
                flex: 1
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;