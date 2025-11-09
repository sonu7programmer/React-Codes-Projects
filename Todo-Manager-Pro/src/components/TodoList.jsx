import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (!todos || todos.length === 0) {
    return <p style={{ color: "#888", textAlign: "center" }}>🕊️ No tasks yet. Add something!</p>;
  }

  return (
    <div style={{ width: "100%", maxWidth: 640 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </div>
  );
}

export default TodoList;
