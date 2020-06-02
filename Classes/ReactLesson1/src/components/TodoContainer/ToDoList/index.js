import React from "react";

/* eslint-disable react/prop-types */
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  DeleteItem(id) {
    console.log(id);
    this.props.onBtnDelete(id);
  }

  renderList() {
    const { data } = this.props;

    if (data) {
      return data.map((item, i) => {
        return (
          <li className="todo-list-item" key={i}>
            {item.email}
            <button onClick={() => this.DeleteItem(item.id)} className="delete">
              &times;
            </button>
          </li>
        );
      });
    }
  }
  render() {
    return <ul className="todo-list">{this.renderList()}</ul>;
  }
}
export default ToDoList;
