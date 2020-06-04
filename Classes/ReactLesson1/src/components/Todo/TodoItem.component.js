import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "4px",
    border:"1px solid grey"
  },
  button: {
    padding: "0px",
    width:"40px",
    height:"40px",
    borderRadius:"50%",

  },
  input: {
    marginRight: "10px",
  },
};
function TodoItem({ todo, index, onChange }) {
  const { RemoveTodo } = useContext(Context);
  let classes = [];
  if (todo.completed == true) {
    classes.push("done");
  }
  console.log(todo);
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;{todo.title}
      </span>
      <button style={styles.button} onClick={RemoveTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}
///=============== one of options to delete
// onClick={()=>RemoveTodo(todo.id)}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
