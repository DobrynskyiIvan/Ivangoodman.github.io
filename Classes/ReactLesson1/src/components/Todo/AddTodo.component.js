import React, { useState } from "react";

function useInputValue(defaultvalue = "") {
  const [value, setValue] = useState(defaultvalue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}
function AddTodo({ onCreate }) {
  const input = useInputValue("");
  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form className="courseSubmit" onSubmit={submitHandler}>
      <input {...input.bind} />
      <button  type="submit"> Add todo</button>
    </form>
  );
}
export default AddTodo;
