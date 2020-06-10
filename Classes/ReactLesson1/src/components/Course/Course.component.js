import React, { useEffect } from "react";
import TodoList from "../Todo/Todolist.component";
import Context from "../../context";

import Loader from "../Loader/Loader.component";
import Modal from "../Modal/Modal.component";
const AddTodo = React.lazy(() => import("../Todo/AddTodo.component"));

function Course() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

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
  function RemoveTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  function Addtodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ RemoveTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        {/* //Suspense lets your components “wait” for something before they can render */}
        <React.Suspense fallback={<p>Loading</p>}>
          {" "}
          <AddTodo onCreate={Addtodo} />{" "}
        </React.Suspense>
          <div className="modalWind"> 
           <Modal />
          </div>
          <div className="loader">
                {loading && <Loader />}</div>
      
        {/* If the list is Empty */}
        {todos.length ? ( <TodoList todos={todos} onToggle={toggleTodo} /> ) : loading ? null : (
          <p>There are no todos.</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default Course;
