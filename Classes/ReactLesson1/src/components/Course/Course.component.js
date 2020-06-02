import React from "react";
import TodoList from "../Todo/Todolist.component";

function Course() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Bread" },
    { id: 2, completed: false, title: "Butter" },
    { id: 3, completed: false, title: "Onion" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    console.log("todo id", id);
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default Course;
