import { useState, useEffect } from "react";
import "./App.css";
import { NewTodo } from "./components/NewTodo/NewTodo.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import {DateDisplay} from "./components/DateDisplay/DateDisplay.jsx"

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((todos) => {
      return [...todos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };

        return todo;
      });
    });
  }

  function removeTodo(id) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
     <DateDisplay/>
      <h1 className="header">DAILY <br/>TO DO LIST</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <NewTodo onSubmit={addTodo} />


    </>
  );
}

export default App;
