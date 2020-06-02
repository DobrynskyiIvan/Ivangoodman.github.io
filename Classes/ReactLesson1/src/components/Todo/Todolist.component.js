import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem.component";

const styles = {
  ul: {
    listStyle: "none",
    color: "red",
  },
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
