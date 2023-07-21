import { useState } from "react";
import "./style.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "../TodoList";
// import { todo } from "node:test";

export default function App() {
  
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addTodo(title) {
     setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, newItem, completed: false },
      ];
    });
 
    setNewItem("")

  
  }


// Function to toggle the completed status of a todo item
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  // handle element delete

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  // Form component and todo list rendering

  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
} 
