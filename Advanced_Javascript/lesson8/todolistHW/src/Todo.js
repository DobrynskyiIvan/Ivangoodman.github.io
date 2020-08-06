import React, {Component} from 'react';
import './Todo.css'

class Todo extends Component {
    render() {
       const { todo } = this.props;

       return (
           <li className="item-box list-group-item">
               <div className="form-check">
                   <input
                       className="form-check-input"
                       type="checkbox"
                       checked={todo.completed}
                       id={todo.id}
                       onChange={() => this.props.toggleTodo(todo)}
                   />
                   <label className="form-check-label" htmlFor={todo.id}>
                       {todo.value}
                   </label>
               </div>
               <button
                   className={"btn btn-secondary btn-sm"}
                   onClick={() => this.props.removeTodo(todo.id)}
               >
                   Remove
               </button>
           </li>
       )
    }
}

export default Todo;
