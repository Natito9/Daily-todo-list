import { TodoItem } from "../TodoItem/TodoItem.jsx";
import "./TodoList.css";

export function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos to show yet..."}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}
