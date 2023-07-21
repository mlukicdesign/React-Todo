/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  // Function to handle the form submission when adding anew todo item
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;

    onSubmit(newItem);

    setNewItem(""); // Clear the input field after adding a new item
  }

  // form component

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
