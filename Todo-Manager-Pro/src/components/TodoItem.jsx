import React, { useState, useRef, useEffect } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const inputRef = useRef(null); // <-- Step 1: create ref

  // Step 2: focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (newText.trim() === "") return;
    onEdit(todo.id, newText.trim());
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1f2937",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "8px",
        opacity: todo.completed ? 0.6 : 1,
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <input
            ref={inputRef} // <-- Step 3: attach ref
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{
              width: "100%",
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <div style={{ display: "flex", gap: "8px", marginLeft: "10px" }}>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              style={{
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                background: "#6b7280",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onToggle(todo.id)}
              style={{
                background: "#10b981",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              style={{
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
