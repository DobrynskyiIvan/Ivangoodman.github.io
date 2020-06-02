import React from "react";
import PropTypes from "prop-types";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "4px",
  },
  button: {
    padding: "0px",
  },
  input: {
    marginRight: "10px",
  },
};
function TodoItem({ todo, index, onChange }) {
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
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;{todo.title}
      </span>
      <button style={styles.button}>&times;</button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
