import "./TodoItem.css";

export function TodoItem({ completed, id, title, toggleTodo, removeTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => removeTodo(id)}>
        x
      </button>
    </li>
  );
}
