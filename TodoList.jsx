import { TodoItem  } from "./src/toDoitem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "Nothing To Do"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          /> 
        );
      })}
    </ul>
  ); 
}
