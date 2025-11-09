import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="✍️ Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
        aria-label="New todo"
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", gap: "10px", marginBottom: "20px", width: "100%", maxWidth: 640 },
  input: { flex: 1, padding: "8px", fontSize: "16px" },
  button: { padding: "8px 12px", background: "#007bff", color: "white", border: "none", cursor: "pointer" },
};

export default TodoForm;
