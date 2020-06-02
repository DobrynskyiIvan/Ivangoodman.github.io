import React from "react";
import "./index.scss";
/* eslint-disable react/prop-types */
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }
  onInputChange(e) {
    this.setState({ todo: e.target.value });
  }
  onAddTodoBtnClick(e) {
    if ((e.key && e.key === "Enter") || !e.key) {
      if (this.state.todo.length > 1) {
        this.props.onBtnClick(this.state.todo);
        this.setState({ todo: "" });
        console.log("on button click");
      }
    }
  }

  render() {
    const { props, state } = this;
    return (
      <div className="todo-list-block">
        <input
          className="add-todo"
          onChange={this.onInputChange.bind(this)}
          value={state.todo}
          onKeyPress={this.onAddTodoBtnClick.bind(this)}
        ></input>
        <button
          className="addTodoList"
          onClick={this.onAddTodoBtnClick.bind(this)}
        >
          OK
        </button>
      </div>
    );
  }
}
export default AddTodo;
